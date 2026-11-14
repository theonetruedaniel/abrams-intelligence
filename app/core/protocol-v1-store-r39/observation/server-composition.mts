// Injected server-only composition. Source tests use fake Node/owner ports; live admission false.
import {createDocumentContract} from '../../../ui/pwa/host/document-contract.mts';
import {createOwnedServingSession} from '../owner/serving-session.mts';
import {createFiniteExchanges} from './finite-exchanges.mts';
import {createObservationLifecycle} from './lifecycle.mjs';
const check=(v:any)=>{if(!v)throw Error('observation admission rejected');};
export async function composeServerObservation({approved,receiptRoot,ports}:any){
  const {createServer,readFileSync,writeFileSync,createHash,setTimeout,clearTimeout,setInterval,clearInterval}=ports;
  check(approved===true&&typeof receiptRoot==='string');
  const text=readFileSync(new URL('../../../../.work/pwa/generated/document.json',import.meta.url),'utf8');
  check(createHash('sha256').update(text).digest('hex')==='4fc84973217d68553057dcecf66757c8dffe6d33976f084dd5ac8426e703f772');
  const artifact=JSON.parse(text),contract=await createDocumentContract(artifact.inline);check(contract.csp===artifact.contract.csp);
  let admission=false,session:any,finite:any,lifecycle:any,connections=0,finalCore:any=null;const sockets=new Set<any>(),tasks=new Set<Promise<any>>();
  const arm=(ms:number,fn:()=>void)=>{const id=setTimeout(fn,ms);return ()=>clearTimeout(id);};
  const reject=()=>lifecycle?.reject();
  const server=createServer({maxHeaderSize:8192},(req:any,res:any)=>{
    if(!admission){res.destroy();reject();return;}
    if(req.method==='GET'&&req.url==='/'&&finite.snapshot().applicationCount===6&&!lifecycle.refreshAllowed()){res.destroy();reject();return;}
    const events=req.url==='/events',generation=Number(req.headers['x-abrams-subscription-generation']);
    let closed=false,settled=false,notified=false;
    const notify=()=>{if(!events||!closed||notified||(generation!==1&&!settled))return;notified=true;const f=finite.snapshot(),s=session.owner.snapshot();lifecycle.streamClosed(generation,{applicationCount:f.applicationCount,epoch:s.core?.epoch,runs:s.core?.runs,rowsSettled:f.records.filter((r:any)=>r.route!=='/events').every((r:any)=>r.cleanupSettled&&!r.deadlineExpired&&r.state==='settled')});};
    res.once('close',()=>{closed=true;if(events)notify();else if(!res.writableFinished)reject();});
    req.once('error',()=>{if(!events)reject();});res.once('error',()=>{if(!events)reject();});
    const p=finite.exchange(req,res).catch(reject).finally(()=>{tasks.delete(p);settled=true;notify();});tasks.add(p);
  });
  server.maxConnections=16;server.maxHeadersCount=64;server.headersTimeout=5000;server.requestTimeout=8000;server.keepAliveTimeout=1000;server.maxRequestsPerSocket=10;
  server.on('connection',(s:any)=>{sockets.add(s);if(++connections>16){s.destroy();reject();}s.once('close',()=>sockets.delete(s));});
  server.on('clientError',(_e:any,s:any)=>{s.destroy();reject();});server.on('error',reject);
  let closedResolve:any;const completed=new Promise(r=>closedResolve=r);
  lifecycle=createObservationLifecycle({arm,closeAdmission(){admission=false;finalCore=session?.owner.snapshot().core;},closeListener(){return new Promise<void>((resolve,reject)=>{server.close((error:any)=>error?reject(Error("listener close failed")):resolve());for(const s of sockets)s.destroy();});},async closeOwner(){if(finite)await finite.close();else if(session)await session.owner.close();await Promise.all([...tasks]);},destroySockets(){for(const s of sockets)s.destroy();},snapshot:()=>({active:tasks.size,sockets:sockets.size,listening:server.listening,ownerPhase:session?.owner.snapshot().phase,flowValid:finalCore?.epoch===2&&finalCore.runs?.length===1&&finalCore.runs[0].runId==='A'&&finalCore.runs[0].state==='cancelled'&&finalCore.runs[0].fixturePosition===1&&finalCore.journal?.length===3&&finalCore.journal[0].event.kind==='started'&&finalCore.journal[1].event.kind==='output'&&finalCore.journal[1].event.data.text==='pipe-output'&&finalCore.journal[2].event.kind==='cancelled'&&finite?.snapshot().applicationCount===9&&finite.snapshot().records.every((r:any)=>r.cleanupSettled&&!r.deadlineExpired&&r.state==='settled')&&session.owner.snapshot().failures.length===0})});
  try{
    await new Promise<void>((resolve,reject)=>{server.once('error',reject);server.listen({host:'127.0.0.1',port:0,exclusive:true},resolve);});
    const a=server.address();check(a&&typeof a==='object'&&a.address==='127.0.0.1');const url=`http://127.0.0.1:${a.port}/`;
    session=(ports.createSession??createOwnedServingSession)({testOnly:true,host:new URL(url).host,documentContract:contract,enabled:true});
    finite=(ports.createFinite??createFiniteExchanges)({testOnly:true,host:new URL(url).host,component:session.component,closeOwner:()=>session.owner.close(),arm});
    lifecycle.ready();admission=true;
    writeFileSync(receiptRoot+'/READY.json',JSON.stringify({url,syntheticOnly:true,expiresInMs:300000}),{flag:'wx'});
    // Owner polls only its own lifecycle; no process/browser inspection.
    const poll=setInterval(()=>{const s=lifecycle.snapshot();if(s.phase==='closed'||s.phase==='cleanup-uncertain'){clearInterval(poll);closedResolve(s);}},50);
    const result=await completed;
    writeFileSync(receiptRoot+'/SERVER-RESULT.json',JSON.stringify({result,connections,applicationCount:finite.snapshot().applicationCount,runtimeQualified:false}),{flag:'wx'});
    return result;
  }catch{await lifecycle.close('startup-or-owner-failure');throw Error('server observation failed; inspect sanitized owner receipt');}
}





