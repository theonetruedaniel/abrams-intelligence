import {HEADER,FRAME_LIMIT,declaredSize,viewBytes,copyBytes} from './framing.mts';
import type {createOwnerEndpoint} from './owner-endpoint.mts';
export interface OwnerDuplex {
 readonly binding:object;
 subscribe(receive:(chunk:Uint8Array)=>Promise<void>,ended:()=>void):Promise<()=>Promise<void>>;
 write(frame:Uint8Array):Promise<void>;
}
const boundEndpoints=new WeakSet<object>(),boundChannels=new WeakSet<object>();
// The host supplies an already-admitted duplex. No handles, names, paths, server
// addresses or process commands are accepted here. subscribe must pause data
// until server.ready fulfills (not merely subscribe resolves), and honor backpressure.
export function bindOwnerByteChannel(endpoint:ReturnType<typeof createOwnerEndpoint>,channel:OwnerDuplex){
 if(!channel.binding||typeof channel.binding!=='object'||boundEndpoints.has(endpoint.custody)||boundChannels.has(channel.binding))throw Error('channel_custody_unavailable');
 boundEndpoints.add(endpoint.custody);boundChannels.add(channel.binding);
 let active=true,acquired=false,unknown=false,receiving=false,closed=false;
 let header=new Uint8Array(HEADER),headerUsed=0,frame:Uint8Array|null=null,used=0;
 let inflight:Promise<void>|null=null,closing:Promise<void>|null=null;
 const retire=()=>{void close().catch(()=>{});};
 const receive=(input:Uint8Array):Promise<void>=>{
  if(!active)return Promise.reject(Error('channel_ended'));
  if(!acquired||receiving||inflight){unknown=true;retire();return Promise.reject(Error('channel_backpressure_or_acquisition'));}
  receiving=true;
  try{
   // Nonshared branded synchronous view: validate length/header before allocating
   // a body buffer. No arbitrary ArrayLike iteration or caller getter is used.
   const chunk=viewBytes(input,FRAME_LIMIT);if(!active)throw Error('retired_input');
   let offset=0;
   while(offset<chunk.length&&headerUsed<HEADER)header[headerUsed++]=chunk[offset++]!;
   if(headerUsed<HEADER)return Promise.resolve();
   if(!frame){const size=declaredSize(header,true);frame=new Uint8Array(size);frame.set(header);used=HEADER;}
   if(chunk.length-offset>frame.length-used)throw Error('extra_frame_or_bytes');
   frame.set(chunk.subarray(offset),used);used+=chunk.length-offset;
   if(used<frame.length)return Promise.resolve();
   const complete=frame;frame=null;used=0;header=new Uint8Array(HEADER);headerUsed=0;
   const work=Promise.resolve().then(async()=>{
    if(!active)return;
    const response=await endpoint.accept(complete);
    if(!active)return;
    await channel.write(copyBytes(response,FRAME_LIMIT));
    // A resolved write is acceptance by the injected channel, NOT peer receipt.
    // Local close may race this completed write; no delivery/cancellation is inferred.
   }).catch(error=>{unknown=true;retire();throw error;}).finally(()=>{inflight=null;});
   inflight=work;return work;
  }catch(error){unknown=true;retire();return Promise.reject(error);}
  finally{receiving=false;}
 };
 const binding=Promise.resolve().then(()=>channel.subscribe(receive,()=>retire()));
 const ready=binding.then(release=>{
  if(typeof release!=='function'){unknown=true;retire();throw Error('unsubscribe_missing');}
  if(!active)throw Error('ended_during_acquisition');acquired=true;
 },error=>{unknown=true;retire();throw error;});
 void ready.catch(()=>{});
 function close():Promise<void>{
  if(closing)return closing;active=false;frame=null;headerUsed=0;used=0;
  // Independently retire Core delivery and subscription while waiting for an
  // issued write. A stuck Promise keeps cleanup pending; no timeout fabricates it.
  closing=Promise.allSettled([
   endpoint.end(),
   binding.then(release=>{if(typeof release!=='function')throw Error('unsubscribe_missing');return release();}),
   inflight??Promise.resolve()
  ]).then(results=>{if(results.some(r=>r.status==='rejected')||unknown){unknown=true;throw Error('channel_cleanup_unknown');}closed=true;});
  return closing;
 }
 return Object.freeze({ready,close,inspect:()=>({active,acquired,unknown,operationPending:inflight!==null,cleanupPending:closing!==null&&!closed,bufferedBytes:headerUsed+(frame?used-HEADER:0),allocatedFrameBytes:frame?.length??0})});
}
