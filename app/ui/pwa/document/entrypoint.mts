import {createPwaConsumer,type PwaConsumerPort} from '../consumer/pwa-consumer.mts';
import {bindPwaConsumerControls} from '../consumer/page-controls.mts';
const ids=['connect','refresh','disconnect','shutdown','status','message','cursor','outputs','runStart','runCancel','globalStop','actionStatus'];
const mounts=new WeakSet<object>();
// Explicit document/lifecycle/consumer ports only. Owner lives outside this module.
// Host supplies an already owned synthetic document; no ambient port discovery.
export function mountOwnedConsumerDocument({testOnly,rootPort,lifecyclePort,port=null,budgets={}}:{testOnly:true;rootPort:any;lifecyclePort:any;port?:PwaConsumerPort|null;budgets?:any}){
 if(testOnly!==true||rootPort?.testOnly!==true||lifecyclePort?.testOnly!==true||typeof rootPort.getElementById!=='function'||typeof lifecyclePort.addEventListener!=='function'||typeof lifecyclePort.removeEventListener!=='function'||mounts.has(rootPort))throw Error('distinct injected owned document required');
 mounts.add(rootPort); // Reserve before externally supplied element lookup.
 const elements:any={};const distinct=new Set<object>();
 for(const id of ids){const e=rootPort.getElementById('abrams-page-'+id);if(!e||typeof e!=='object'||distinct.has(e))throw Error('distinct document controls required');distinct.add(e);elements[id]=e;}
 let disposed=false,hidden=false,registered=false,ui:any=null,consumer:any=null;
 let shutdownTask:Promise<boolean>|null=null;
 const shutdown=():Promise<boolean>=>{
  disposed=true;if(shutdownTask)return shutdownTask;
  let resolve!:(clean:boolean)=>void,reject!:(error:unknown)=>void;
  const task=new Promise<boolean>((yes,no)=>{resolve=yes;reject=no;});shutdownTask=task;
  const errors:unknown[]=[];let retirement:Promise<boolean>=Promise.resolve(true);
  // Reserve first, then synchronously stop admission before any other teardown.
  try{if(consumer)retirement=Promise.resolve(consumer.shutdown());}catch(e){errors.push(e);}
  void retirement.catch(()=>{});
  try{if(ui){ui.unbind();ui=null;}}catch(e){errors.push(e);}
  // Registration may synchronously fire hide before it installs the listener.
  // Remove on the next microtask, after that synchronous registration returns.
  void Promise.resolve().then(async()=>{
   try{if(registered){lifecyclePort.removeEventListener('pagehide',hide);registered=false;}}catch(e){errors.push(e);}
   let clean=false;try{clean=await retirement;}catch(e){errors.push(e);}
   if(errors.length)reject(errors[0]);else resolve(clean);
  });
  void task.finally(()=>{shutdownTask=null;}).catch(()=>{});return task;
 };
 const hide=()=>{hidden=true;void shutdown().catch(()=>{});};
 try{
  // Construct consumer only after element validation. This never connects.
  consumer=createPwaConsumer(port,budgets);ui=bindPwaConsumerControls({...consumer,shutdown},elements);
  registered=true;lifecyclePort.addEventListener('pagehide',hide);
  if(hidden||disposed)throw Error('document retired during mount');
 }catch(error){void shutdown().catch(()=>{});const failure=new Error('Owned document mount failed',{cause:error});Object.defineProperty(failure,'cleanup',{value:shutdown});throw failure;}
 return Object.freeze({snapshot:()=>consumer.snapshot(),
  setStartIntent:(intent:unknown)=>!disposed&&ui.setStartIntent(intent),
  selectCancelRun:(runId:string)=>!disposed&&ui.selectCancelRun(runId),
  observeHealth:()=>disposed?Promise.resolve(false):consumer.observeHealth(),
  shutdown
 });
}
