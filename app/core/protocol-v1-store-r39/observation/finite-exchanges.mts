import {validateTransport} from '../server/bootstrap-transport.mts';
// New fixed-flow wrapper over the accepted serving component. No listener/import side effects.
// All ports are owner-provided. Runtime wiring and execution are not admitted here.
const routes=[['GET','/'],['POST','/events'],['POST','/request'],['POST','/request'],['POST','/request'],['POST','/request'],['GET','/'],['POST','/events'],['POST','/request']];
export function createFiniteExchanges({testOnly,host,component,closeOwner,arm}:any){
 if(typeof host!=='string'||!/^127\.0\.0\.1:[1-9][0-9]{0,4}$/.test(host)||Number(host.split(':')[1])>65535||testOnly!==true||typeof component?.exchange!=='function'||typeof closeOwner!=='function'||typeof arm!=='function')throw Error('owned fixed-flow ports required');
 let phase='ready',applicationCount=0,faviconCount=0,total=0,closeTask:Promise<any>|null=null;
 const active=new Set<Promise<void>>(),responses=new Set<any>(),records:any[]=[];
 const rejectAdmission=(res:any,reason:string)=>{phase='failed';try{res.destroy();}catch{}const p=Promise.reject<void>(Error(reason));void p.catch(()=>{});return p;};
 const exchange=(req:any,res:any):Promise<void>=>{
  if(phase!=='ready'||total>=10||active.size>=3)return rejectAdmission(res,'fixed flow admission rejected');
  const favicon=req.method==='GET'&&req.url==='/favicon.ico';
  const route=routes[applicationCount];
  if(favicon?faviconCount!==0:!route||req.method!==route[0]||req.url!==route[1])return rejectAdmission(res,'fixed route ordering rejected');
  if(favicon){
   const raw=req.rawHeaders;if(!Array.isArray(raw)||raw.length%2||raw.length>128)return rejectAdmission(res,'favicon headers rejected');
   const headers=[];for(let i=0;i<raw.length;i+=2)headers.push([raw[i],raw[i+1]]);
   const checked=validateTransport({method:'GET',path:'/',headers,body:new Uint8Array()},{host,binding:'FAKE_TEST_ONLY_SERVING_V1',generation:0});
   if(!checked.ok)return rejectAdmission(res,'favicon framing rejected');
  }
  // Reserve counters/ownership before any external response or timer callback.
  total++;if(favicon)faviconCount++;else applicationCount++;
  let resolve!:()=>void,reject!:(e:unknown)=>void;const task=new Promise<void>((yes,no)=>{resolve=yes;reject=no;});active.add(task);responses.add(res);
  const row={index:total,applicationIndex:favicon?null:applicationCount,route:req.url,state:'pending',deadlineExpired:false,cleanupSettled:false,deadlineMs:req.url==='/events'?300000:8000};records.push(row);
  let cancel:Function|null=null,settled=false;
  const finish=(error?:unknown)=>{if(settled)return;settled=true;try{cancel?.();}catch(e){error??=e;}active.delete(task);responses.delete(res);row.cleanupSettled=true;row.state=row.deadlineExpired?'deadline':error?'failed':'settled';if(error){phase='failed';reject(error);}else resolve();};
  try{
   const returned=arm(row.deadlineMs,()=>{if(settled)return;phase='failed';row.state='deadline';row.deadlineExpired=true;try{res.destroy();}catch{}; // Destruction is not proof callback/handler completion.
    try{const p=closeOwner();void Promise.resolve(p).catch(()=>{});}catch{}
   });
   if(typeof returned!=='function')throw Error('timer cancellation port required');cancel=returned;
   if(phase!=='ready')throw Error('timer reentry invalidated admission');
   if(favicon){
    // Reuses strict duplicate-preserving Host/Origin and zero-body framing checks; no cookies/auth/transfer encoding.
    res.writeHead(204,{'cache-control':'no-store','content-length':'0'});res.end(undefined,(error?:unknown)=>finish(error));
   }else{void Promise.resolve(component.exchange(req,res)).then(()=>finish(),finish);}
  }catch(error){finish(error);}
  void task.catch(()=>{});return task;
 };
 const close=()=>{
  if(closeTask)return closeTask;
  let resolve!:(v:any)=>void,reject!:(e:unknown)=>void;closeTask=new Promise((yes,no)=>{resolve=yes;reject=no;});const result=closeTask;phase='closing';for(const res of [...responses]){try{res.destroy();}catch{}} 
  void (async()=>{try{await closeOwner();await Promise.all([...active]);if(active.size||responses.size)throw Error('exchange ownership retained');phase='closed';resolve(true);}catch(e){phase='cleanup-failed';reject(e);}})();void result.catch(()=>{});return result;
 };
 return Object.freeze({exchange,close,snapshot:()=>({phase,total,applicationCount,faviconCount,active:active.size,records:structuredClone(records)}),routeCountsComplete(){if(phase!=='ready'||applicationCount!==9||total!==9+faviconCount)throw Error('fixed flow incomplete');return true;}});
}

