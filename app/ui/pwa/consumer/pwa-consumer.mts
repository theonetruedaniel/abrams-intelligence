import {createPageController} from './page-controller.mts';
export interface PwaConsumerPort {
 readonly protocol:1;
 readonly testOnly:true;
 readonly binding:object;
 readonly origin:string;
 readonly loadBootstrap:(signal:AbortSignal)=>Promise<Uint8Array>;
 readonly fetchImpl:(url:string,options:any)=>Promise<any>;
 readonly healthNow:()=>number;
}
const empty=()=>({phase:'idle',message:'No Core port installed.',view:{cursor:0,records:[],runs:{},degraded:true},cleanupPending:false,busy:false,commandPending:null,lastCommand:null,canRunCommand:false,canConnect:false,canRefresh:false,canDisconnect:false,canShutdown:true,defaultDisconnected:true});
// Consumer only. No owner construction, global fetch, bootstrap discovery,
// authority minting or automatic connection. Host must inject a versioned port.
export function createPwaConsumer(port:PwaConsumerPort|null=null,budgets:{startupMs?:number;shutdownMs?:number;commandMs?:number}={}){
 let disposed=false,failed=false,page:any=null;
 const disconnectedListeners=new Set<(s:any)=>void>();
 let binding:object|null=null;
 const guard=()=>{
  if(disposed||failed)return false;
  if(port){const d=Object.getOwnPropertyDescriptor(port,'binding');if(!d||!Object.hasOwn(d,'value')||d.value!==binding){failed=true;void page?.shutdown();return false;}}
  return true;
 };
 if(port!==null){
  if(!port||typeof port!=='object')throw Error('versioned PWA consumer port required');
  const values:any={};
  for(const key of ['protocol','testOnly','binding','origin','loadBootstrap','fetchImpl','healthNow']){
   const d=Object.getOwnPropertyDescriptor(port,key);if(!d||!Object.hasOwn(d,'value'))throw Error('own data port fields required');values[key]=d.value;
  }
  if(values.protocol!==1||values.testOnly!==true||!values.binding||typeof values.binding!=='object'||!['loadBootstrap','fetchImpl','healthNow'].every(k=>typeof values[k]==='function'))throw Error('invalid versioned consumer port');
  binding=values.binding;
  page=createPageController({testOnly:true,admit:guard,origin:values.origin,startupMs:budgets.startupMs,shutdownMs:budgets.shutdownMs,commandMs:budgets.commandMs,
   loadBootstrap:(signal:AbortSignal)=>{if(!guard())throw Error('retired port');return values.loadBootstrap.call(port,signal);},
   fetchImpl:(url:string,options:any)=>{if(!guard())throw Error('retired port');return values.fetchImpl.call(port,url,options);},
   healthNow:()=>{if(!guard())throw Error('retired port');return values.healthNow.call(port);}
  });
 }
 const snapshot=()=>{guard();return page?{...page.snapshot(),defaultDisconnected:false}:{...empty(),phase:disposed?'stopped':'idle',canShutdown:!disposed};};
 const call=(name:string,...args:any[])=>guard()&&page?page[name](...args):Promise.resolve(false);
 return Object.freeze({
  snapshot,
  connect:()=>call('start'), // Legacy page start means connection, not run Start.
  startMockRun:(intent:unknown)=>call('startMockRun',intent),
  cancel:(runId:string)=>call('cancel',runId),
  globalStop:()=>call('globalStop'),
  observeHealth:()=>call('observeHealth'),
  refresh:()=>call('refresh'),
  disconnect:()=>call('disconnect'),
  async shutdown(){disposed=true;if(page)return page.shutdown();for(const l of disconnectedListeners)try{l(snapshot());}catch{}return true;},
  subscribe(listener:(state:any)=>void){
   if(typeof listener!=='function')throw Error('subscriber required');
   if(page)return page.subscribe((s:any)=>listener({...s,defaultDisconnected:false}));
   if(disconnectedListeners.size>=4)throw Error('subscriber bound');disconnectedListeners.add(listener);
   try{listener(snapshot());}catch(e){disconnectedListeners.delete(listener);throw e;}
   return ()=>{disconnectedListeners.delete(listener);};
  }
 });
}
