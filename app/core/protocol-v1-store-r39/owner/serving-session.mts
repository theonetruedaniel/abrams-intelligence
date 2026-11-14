import {requireDocumentContract,renderOwnedDocument} from '../../../ui/pwa/host/document-contract.mts';
import {SyntheticTransport,validateTransport} from '../server/bootstrap-transport.mts';
import {serveExchange} from '../server/node-http-exchange.mts';
import {streamBytes} from '../server/event-lease.mts';
import {createCoreTransportPort} from '../server/core-transport-port.mts';
import {LocalChannel} from '../server/reference-core/shared/transport/local-channel.mts';
import {createPureCorePort} from '../server/test-support/pure-core-port.mts';
import {schedule} from '../../../fixtures/pwa/schedule.mts';
const unavailable=()=>({status:503,headers:{'cache-control':'no-store'},body:{kind:'uncorrelated',code:'transport_unavailable'}});
// Trusted finite synthetic owner composition, never bundled into the renderer.
// Attaches to injected Node-style request/response ports; it never listens/spawns.
export function createOwnedServingSession({testOnly,host,documentContract,enabled=false}:any){
 requireDocumentContract(documentContract);
 if(testOnly!==true||typeof enabled!=='boolean'||typeof host!=='string'||!/^127\.0\.0\.1:[1-9][0-9]{0,4}$/.test(host)||Number(host.split(':')[1])>65535)throw Error('bounded synthetic serving owner required');
 const binding='FAKE_TEST_ONLY_SERVING_V1',controller=new AbortController(),active=new Set<Promise<void>>(),failures:any[]=[];
 let phase='ready',total=0,exhausted=false,closeTask:Promise<boolean>|null=null,core:any=null,channel:any=null,transport:any=null;
 if(enabled){core=createPureCorePort(schedule);channel=new LocalChannel(core);for(const approval of schedule.approvals)channel.approve(approval);transport=new SyntheticTransport({host,binding,documentContract,channel:createCoreTransportPort({testOnly:true,channel})});}
 // Twelve total exchanges cover one complete fixed flow (nine requests) with
 // three negative probes. Three concurrent slots include the long event stream.
 let ownerQueue=Promise.resolve();
 const handle=async(input:any)=>{
  if(phase!=='ready'||exhausted)return unavailable();
  if(!transport){const checked=validateTransport(input,{host,binding,generation:0});if(!checked.ok||checked.route!=='bootstrap')return unavailable();return {status:200,headers:{'cache-control':'no-store','content-type':'text/html; charset=utf-8','content-security-policy':documentContract.csp},body:renderOwnedDocument(documentContract,null)};}
  const reply=await transport.handle(input);
  if(phase!=='ready')return unavailable();
  // Exact owner-side H schedule, not a renderer opcode or grant. Start itself
  // remains reference Core's approval/version/epoch-checked transition.
  if(reply.status===200&&reply.body?.ok===true&&reply.body.type==='start-mock-run'){
   const run=core.inspectState().runs.find((r:any)=>r.runId===reply.body.payload.runId);
   if(run?.fixtureId==='H'&&run.state==='running'&&run.fixturePosition===0){channel.tick(run.runId);await transport.committed();}
  }
  return reply;
 };
 const application=Object.freeze({handle(input:any){const task=ownerQueue.then(()=>handle(input));ownerQueue=task.then(()=>{},()=>{});return task;}});
 const close=():Promise<boolean>=>{
  if(closeTask)return closeTask;
  let resolve!:(value:boolean)=>void,reject!:(error:unknown)=>void;const task=new Promise<boolean>((yes,no)=>{resolve=yes;reject=no;});closeTask=task;phase='closing';
  controller.abort();
  void (async()=>{try{await ownerQueue;if(transport)await transport.closeEvents();await Promise.all([...active]);if(core){const availability=core.inspectAvailability();if(availability.phase==='ready')core.close();if(core.inspectAvailability().notificationFailures!==0)throw Error('Core notification cleanup failure');}if(channel?.active||active.size)throw Error('serving ownership retained');phase='closed';resolve(true);}catch(e){phase='cleanup-failed';reject(e);}})();
  void task.catch(()=>{});return task;
 };
 const exchange=(req:any,res:any)=>{
  if(phase!=='ready'||total>=12||active.size>=3){exhausted=true;try{res.destroy();}catch{}return Promise.reject(Error('finite serving admission exhausted'));}
  total++;let resolve!:()=>void,reject!:(error:unknown)=>void;const task=new Promise<void>((yes,no)=>{resolve=yes;reject=no;});active.add(task);
  // Slot reserved before request/response callbacks may reenter the component.
  void serveExchange(req,res,{testOnly:true,application,streamBytes,signal:controller.signal,documentContract,onFailure:(reason:any)=>{if(failures.length<12)failures.push(reason);}}).then(()=>{active.delete(task);resolve();},error=>{active.delete(task);reject(error);});
  void task.catch(()=>{});return task;
 };
 return Object.freeze({component:Object.freeze({exchange}),owner:Object.freeze({close,snapshot:()=>({phase,total,active:active.size,exhausted,failures:structuredClone(failures),core:core&&core.inspectAvailability().phase==='ready'?core.inspectState():null,availability:core?.inspectAvailability()??null}),
  // Dedicated test-owner fault injection, not part of the component or document.
  closeCoreForTest(){if(!core||phase!=='ready')throw Error('owner unavailable');core.close();}
 })});
}
