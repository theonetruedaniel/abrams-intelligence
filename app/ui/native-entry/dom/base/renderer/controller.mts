import {createShellCoreAdapter,type ShellCorePort,type MockRunIntent} from './shell-core-adapter.mts';
export interface RendererHandlers {
 reconnect():Promise<boolean>;
 health():Promise<boolean>;
 start(intent:MockRunIntent):Promise<boolean>;
 cancel(runId:string):Promise<boolean>;
 stop():Promise<boolean>;
 disconnect():void;
}
type CoreSnapshot=ReturnType<ReturnType<typeof createShellCoreAdapter>['snapshot']>;
export interface RendererSnapshot {
 readonly mounted:boolean;
 readonly unbindFailed:boolean;
 readonly pending:string|null;
 readonly lastCommand:Readonly<{name:string;ok:boolean}>|null;
 readonly core:CoreSnapshot;
}
export interface RendererView {
 bind(handlers:RendererHandlers):()=>void;
 render(snapshot:RendererSnapshot):void;
}
const freeze=<T,>(value:T):T=>{if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;};
// The view receives consumer controls and immutable projections, never an owner.
export function createRendererController(view:RendererView,port:ShellCorePort|null=null){
 let mounted=true,booting=true,rendering=false,reading=false,queued=false,revision=0,cleaning=false;
 let pending:string|null=null,lastCommand:{name:string;ok:boolean}|null=null;
 let unbind:(()=>void)|null=null,unbindFailed=false;
 const adapter=createShellCoreAdapter(port,()=>publish());
 const snapshot=():RendererSnapshot=>{
  if(reading)throw Error('reentrant renderer snapshot');
  reading=true;
  try{const core=adapter.snapshot();return freeze({mounted,unbindFailed,pending,lastCommand:lastCommand?{...lastCommand}:null,core});}
  finally{reading=false;}
 };
 const unmount=():boolean=>{
  if(cleaning)return false;
  mounted=false;booting=false;revision++;pending=null;lastCommand=null;adapter.shutdown();
  if(!unbind)return !unbindFailed;
  cleaning=true;
  try{unbind();unbind=null;unbindFailed=false;}catch{unbindFailed=true;}finally{cleaning=false;}
  return !unbindFailed;
 };
 let render:(s:RendererSnapshot)=>void;
 function publish(){
  if(!mounted||booting||queued)return;
  queued=true;
  queueMicrotask(()=>{
   queued=false;if(!mounted||booting)return;
   rendering=true;
   try{const state=snapshot();if(mounted)render(state);}catch{unmount();}finally{rendering=false;}
  });
 }
 const command=async(name:string,call:()=>Promise<boolean>):Promise<boolean>=>{
  if(!mounted||booting||rendering||reading||pending!==null)return false;
  const ticket=++revision;pending=name;lastCommand=null;publish();
  let ok=false;
  try{ok=await call();}catch{adapter.disconnect();}
  if(!mounted||revision!==ticket)return false;
  pending=null;lastCommand={name,ok};publish();return ok;
 };
 const handlers:RendererHandlers=Object.freeze({
  reconnect:()=>command('reconnect',()=>adapter.reconnect()),
  health:()=>command('health',()=>adapter.health()),
  start:(intent:MockRunIntent)=>command('start',()=>adapter.startMockRun(intent)),
  cancel:(runId:string)=>command('cancel',()=>adapter.cancel(runId)),
  stop:()=>command('stop',()=>adapter.globalStop()),
  disconnect(){if(!mounted||booting||rendering||reading)return;revision++;pending=null;lastCommand=null;adapter.disconnect();publish();}
 });
 try{
  // Capture injected callbacks once. Registration-time controls remain inert.
  const bind=view.bind;render=view.render;
  if(typeof bind!=='function'||typeof render!=='function')throw Error('renderer view callbacks required');
  render=render.bind(view);
  const release=bind.call(view,handlers);
  if(typeof release!=='function')throw Error('renderer view release required');
  unbind=release;booting=false;
  rendering=true;
  try{const state=snapshot();if(mounted)render(state);}catch{unmount();}finally{rendering=false;}
 }catch(error){unmount();throw error;}
 return Object.freeze({snapshot,unmount});
}
