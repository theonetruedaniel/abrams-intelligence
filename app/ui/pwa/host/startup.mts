import {createDocumentContract,parseInitialConfiguration} from './document-contract.mts';
import {parseBootstrap} from '../strict-reply.mts';
import {createBootstrapLoader} from './bootstrap-loader.mts';
import {mountOwnedConsumerDocument} from '../document/entrypoint.mts';
const started=new WeakSet<object>();
// First-party self-mount. Optional inert bootstrap chooses the initial consumer
// port once. It is never an owner constructor, approval grant or auto-connect.
export async function startOwnedDocument({document,window,origin,fetchImpl,monotonicNow=()=>Math.floor(performance.now())}:any){
 if(!document||!window||started.has(document)||typeof document.querySelectorAll!=='function'||typeof window.addEventListener!=='function'||typeof window.removeEventListener!=='function')throw Error('owned host required');started.add(document);
 let registered=false,hidden=false,mounted:any=null,cancel:((reason:Error)=>void)|null=null,mountCleanup:(()=>Promise<boolean>)|null=null;
 const hide=()=>{hidden=true;cancel?.(Error('startup retired'));void mounted?.shutdown().catch(()=>{});};

 const one=(selector:string)=>{if(hidden)throw Error('startup retired');const nodes=document.querySelectorAll(selector);if(hidden||nodes.length!==1)throw Error('distinct startup element required');return nodes[0];};
 try{
  registered=true;window.addEventListener('pagehide',hide);
  if(hidden||document.documentElement.getAttribute('data-abrams-document')!=='3')throw Error('owned document marker');
  const code=one('#abrams-startup').textContent,initialBytes=new TextEncoder().encode(one('#abrams-bootstrap').textContent),configuration=parseInitialConfiguration(initialBytes);
  const contract=await new Promise<any>((resolve,reject)=>{
   let settled=false;const done=(value:any,error?:Error)=>{if(settled)return;settled=true;clearTimeout(timer);cancel=null;error?reject(error):resolve(value);};const timer=setTimeout(()=>done(null,Error('startup hash timeout')),1000);cancel=error=>done(null,error);
   createDocumentContract(code).then(value=>done(value),error=>done(null,error));if(hidden)cancel?.(Error('startup retired'));
  });
  if(hidden)throw Error('startup retired');if(one('meta[http-equiv="Content-Security-Policy"]').getAttribute('content')!==contract.csp)throw Error('owned CSP required');
  let port:any=null;
  if(configuration!==null){
   if(typeof fetchImpl!=='function'||typeof origin!=='string'||!/^http:\/\/127\.0\.0\.1:[1-9][0-9]{0,4}$/.test(origin)||Number(new URL(origin).port)>65535)throw Error('fixed loopback consumer required');
   const loader=createBootstrapLoader({testOnly:true,origin,fetchImpl,documentContract:contract,initialBytes});
   const loadBootstrap=async(signal:AbortSignal)=>{const bytes=await loader(signal);if(parseBootstrap(bytes).binding!==configuration.binding)throw Error('bootstrap binding changed');return bytes;};
   port=Object.freeze({protocol:1 as const,testOnly:true as const,binding:Object.freeze({documentConsumer:true}),origin,loadBootstrap,fetchImpl,healthNow:monotonicNow});
  }
  // Never call connect/start or loadBootstrap here. Null remains null forever.
  mounted=mountOwnedConsumerDocument({testOnly:true,rootPort:{testOnly:true,getElementById:(id:string)=>one('#'+id)},lifecyclePort:{testOnly:true,addEventListener:(name:string,fn:any)=>{window.addEventListener(name,fn);if(hidden)fn();},removeEventListener:(name:string,fn:any)=>window.removeEventListener(name,fn)},port});
  if(hidden){await mounted.shutdown();throw Error('startup retired');}
  if(port){mounted.setStartIntent({runId:'A',fixtureId:'H',approvalId:'approval_A',approvalRevision:1});mounted.selectCancelRun('A');}
  if(registered){window.removeEventListener('pagehide',hide);registered=false;}
  if(hidden){await mounted.shutdown();throw Error('retired during startup handoff');}
  return mounted;
 }catch(error:any){
  const descriptor=error&&Object.getOwnPropertyDescriptor(error,'cleanup');
  if(descriptor&&typeof descriptor.value==='function')mountCleanup=descriptor.value;
  const cleanup=async()=>{const errors:unknown[]=[];let clean=true;
   try{if(mounted)clean=await mounted.shutdown();else if(mountCleanup)clean=await mountCleanup();}catch(e){errors.push(e);}
   try{if(registered){window.removeEventListener('pagehide',hide);registered=false;}}catch(e){errors.push(e);}
   if(errors.length)throw errors[0];return clean;
  };
  try{await cleanup();}catch{}
  const failure=new Error('Owned startup failed',{cause:error});Object.defineProperty(failure,'cleanup',{value:cleanup});throw failure;
 }finally{cancel=null;}
}
