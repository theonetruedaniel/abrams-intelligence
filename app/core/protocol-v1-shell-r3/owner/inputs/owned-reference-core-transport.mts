import type {ShellCorePort} from './shell-core-adapter.mts';
import {LocalChannel} from './reference-core/shared/transport/local-channel.mts';
import {createPureCorePort} from './test-support/pure-core-port.mts';

type Lease={generation:number;active:boolean;receive:(g:number,b:Uint8Array)=>boolean;end:()=>void;notify:boolean;notified:boolean;released:boolean;failed:boolean;wait:Promise<void>|null;resolve:()=>void;reject:(e:unknown)=>void};
const bytes=(v:unknown)=>new TextEncoder().encode(JSON.stringify(v));
const typedArrayPrototype=Object.getPrototypeOf(Uint8Array.prototype);
const byteLength=Object.getOwnPropertyDescriptor(typedArrayPrototype,'byteLength')!.get!;
const arrayBuffer=Object.getOwnPropertyDescriptor(typedArrayPrototype,'buffer')!.get!;
const elementBrand=Object.getOwnPropertyDescriptor(typedArrayPrototype,Symbol.toStringTag)!.get!;
const nonSharedLength=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,'byteLength')!.get!;
const copyRequest=(input:Uint8Array)=>{
 if(Object.getPrototypeOf(input)!==Uint8Array.prototype||elementBrand.call(input)!=='Uint8Array')throw Error('plain genuine request bytes required');
 const length=byteLength.call(input),buffer=arrayBuffer.call(input);
 nonSharedLength.call(buffer);
 if(length>65536)throw Error('bounded request bytes required');
 return new Uint8Array(input);
};

// Owner-side synthetic construction only. Neither Core nor LocalChannel escapes
// into the renderer-facing port. This is not a native authentication boundary.
export function createOwnedReferenceCoreTransport(options:{testOnly:true;sessionId:string;fixtureConfiguration?:unknown}){
 const core=createPureCorePort(options),channel=new LocalChannel(core);
 let lease:Lease|null=null,lastGeneration=0,busy=false,disposed=false,uncertain=false;
 const settle=(s:Lease)=>{
  if(s.active||s.released||s.failed)return;
  try{
   channel.closeDelivery();
   if(channel.active||channel.pendingCount!==0)throw Error('unverified subscription retirement');
   s.released=true;if(lease===s)lease=null;s.resolve();
  }catch(e){s.failed=true;uncertain=true;s.reject(e);}
  const end=s.end;s.receive=()=>false;s.end=()=>{};
  if(s.notify&&!s.notified){s.notified=true;try{end();}catch{/* Subscriber errors cannot restore authority. */}}
 };
 const retire=(s:Lease,notify:boolean)=>{s.active=false;s.notify ||= notify;if(!busy){busy=true;try{settle(s);}finally{busy=false;}}};
 const release=(s:Lease)=>{
  if(!s.wait)s.wait=new Promise<void>((resolve,reject)=>{s.resolve=resolve;s.reject=reject;});
  if(s.released)s.resolve();else if(s.failed)s.reject(Error('subscription retirement remains uncertain'));
  retire(s,false);return s.wait;
 };
 const requireLease=(generation:number)=>{
  const s=lease;
  if(disposed||uncertain||busy||!s?.active||generation!==s.generation)throw Error('inactive or occupied subscription');
  return s;
 };
 const drain=(s:Lease)=>channel.drain({receiveEvent:(event:unknown)=>{
  if(!s.active||lease!==s)return;
  if(s.receive(s.generation,bytes({v:1,type:'stream-event',payload:event}))!==true)retire(s,true);
 }});
 const operation=<T,>(s:Lease,fn:()=>T):T=>{
  busy=true;
  try{return fn();}catch(e){retire(s,true);throw e;}finally{try{settle(s);}finally{busy=false;}}
 };
 const port:ShellCorePort=Object.freeze({protocol:1 as const,binding:core.binding,
  async openEvents(generation:number,receive:Lease['receive'],end:Lease['end']){
   if(disposed||uncertain||busy||lease||typeof receive!=='function'||typeof end!=='function'||!Number.isSafeInteger(generation)||generation<1||generation>2147483647||generation!==lastGeneration+1)throw Error('subscription unavailable');
   const s:Lease={generation,active:true,receive,end,notify:false,notified:false,released:false,failed:false,wait:null,resolve:()=>{},reject:()=>{}};
   lease=s;busy=true;
   try{channel.register(generation);lastGeneration=generation;}
   catch(e){s.active=false;s.failed=true;uncertain=true;throw e;}
   finally{busy=false;}
   return ()=>release(s);
  },
  async request(request:Uint8Array,generation:number){
   const s=requireLease(generation);
   // Parse/execute remains the existing reference Core's version-1 byte path.
   return operation(s,()=>{
    const copy=copyRequest(request);
    if(disposed||uncertain||lease!==s||!s.active)throw Error('retired before byte dispatch');
    const reply=channel.execute(copy,{binding:core.binding,generation});drain(s);return bytes(reply);
   });
  }
 });
 const control=(fn:()=>unknown)=>{
  if(disposed||uncertain||busy)throw Error('owner operation unavailable');
  if(!lease){busy=true;try{return fn();}finally{busy=false;}}
  const s=requireLease(lease.generation);return operation(s,()=>{const result=fn();drain(s);return result;});
 };
 const owner=Object.freeze({
  approve:(approval:unknown)=>control(()=>channel.approve(approval)),
  tick:(runId:string)=>control(()=>channel.tick(runId)),
  invalidate:(approvalId:string,revision:number)=>control(()=>channel.invalidate(approvalId,revision)),
  revoke:(type:string)=>control(()=>{channel.revoke(type);if(lease)retire(lease,true);}),
  pump:()=>{const s=requireLease(lease?.generation??0);return operation(s,()=>drain(s));},
  inspectState:()=>core.inspectState(),
  inspectTransport:()=>({active:!!lease?.active,busy,disposed,uncertain,generation:lastGeneration,deliveryActive:channel.active,pending:channel.pendingCount}),
  shutdown:()=>{disposed=true;if(lease)retire(lease,true);}
 });
 return Object.freeze({port,owner});
}
