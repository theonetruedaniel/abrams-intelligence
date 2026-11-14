import type {ShellCorePort} from './inputs/shell-core-adapter.mts';
import {parseInbound,parseStreamEvent} from './inputs/shared/contracts/protocol.mts';
import {HEADER,REQUEST_LIMIT,REPLY_LIMIT,EVENT_LIMIT,BATCH_LIMIT,FRAME_LIMIT,copyBytes,decode,encode,packEvents} from './framing.mts';
import type {Frame} from './framing.mts';
type Release=()=>Promise<void>;
type Lease={id:number;active:boolean;release:Release|null;closing:Promise<void>|null;events:Uint8Array[];queuedBytes:number;readId:number;batch:Uint8Array};
export type DeliveryProof={active:boolean;deliveryActive:boolean;pending:number;busy:boolean};
const empty=()=>new Uint8Array();
const same=(a:Uint8Array,b:Uint8Array)=>a.length===b.length&&a.every((v,i)=>v===b[i]);
const errorBody=(code:string)=>new TextEncoder().encode(code.slice(0,64));
const consumedPorts=new WeakSet<object>(),consumedBindings=new WeakSet<object>();
let admitting=false;

// Owner-side only. `proof` is supplied by the owner, never accepted from wire.
// No listener, native IPC, process, timeout cancellation or renderer owner setup.
export function createOwnerEndpoint(input:ShellCorePort,proof:()=>DeliveryProof){
 if(admitting)throw Error('reentrant_admission');admitting=true;
 let port:ShellCorePort;
 try{
  const values=['protocol','binding','request','openEvents'].map(k=>{const d=Object.getOwnPropertyDescriptor(input,k);if(!d||!Object.hasOwn(d,'value'))throw Error('owned_port_data_required');return d.value;});
  const [protocol,binding,request,openEvents]=values;
  if(protocol!==1||!binding||typeof binding!=='object'||typeof request!=='function'||typeof openEvents!=='function'||typeof proof!=='function'||consumedPorts.has(input)||consumedBindings.has(binding))throw Error('owner_custody_unavailable');
  consumedPorts.add(input);consumedBindings.add(binding);port=Object.freeze({protocol:1 as const,binding,request,openEvents});
 }finally{admitting=false;}
 let live=true,fault=false,busy=false,generation=0,lease:Lease|null=null;
 let sequence=0,lastRequest:Uint8Array|null=null,lastReply:Uint8Array|null=null;
 let pending:Promise<Uint8Array>|null=null;
 let ending:Promise<void>|null=null;
 const retire=async(l:Lease)=>{
  if(l.closing)return l.closing;
  l.active=false;
  l.closing=(async()=>{
   if(!l.release)throw Error('acquisition_cleanup_unknown');
   await l.release();const p=proof();
   if(p.active!==false||p.deliveryActive!==false||p.pending!==0||p.busy!==false)throw Error('release_unproven');
   l.events=[];l.queuedBytes=0;l.batch=empty();if(lease===l)lease=null;
  })();
  try{await l.closing;}catch(e){fault=true;throw e;}
 };
 const failedDelivery=(l:Lease)=>{
  if(lease!==l||!l.active)return;
  l.active=false;fault=true;
  // Never reenter the owner from its synchronous delivery callback.
  void Promise.resolve().then(async()=>{if(pending)await pending.catch(()=>{});await retire(l);}).catch(()=>{});
 };
 const current=(l:Lease)=>live&&!fault&&lease===l&&l.active;
 const dispatch=async(q:Frame):Promise<Frame>=>{
  if(!live)throw Error('channel_ended');
  const result=(body=empty(),id=q.lease):Frame=>({...q,kind:1,lease:id,body});
  if(q.kind!==0)throw Error('wrong_direction');
  if(q.op===1){
   if(q.lease!==0||q.readId!==0||q.body.length||lease||generation===2147483647)throw Error('open_unavailable');
   const l:Lease={id:++generation,active:true,release:null,closing:null,events:[],queuedBytes:0,readId:0,batch:empty()};lease=l;
   try{
    l.release=await port.openEvents(l.id,(g,bytes)=>{
     if(!current(l)||g!==l.id)return false;
     try{
      const e=copyBytes(bytes,EVENT_LIMIT);parseStreamEvent(e);
      if(!current(l)||l.events.length>=128||l.queuedBytes+e.length>1048576)throw Error('event_queue_overflow');
      l.events.push(e);l.queuedBytes+=e.length;return true;
     }catch{failedDelivery(l);return false;}
    },()=>failedDelivery(l));
    if(typeof l.release!=='function')throw Error('release_missing');
    if(!current(l)){await retire(l);throw Error('retired_during_open');}
    return result(empty(),l.id);
   }catch(e){fault=true;l.active=false;throw e;}
  }
  const l=lease;if(!l||q.lease!==l.id)throw Error('inactive_lease');
  if(q.op===4){
   if(q.readId!==0||q.body.length)throw Error('close_fields');
   await retire(l);return result();
  }
  if(!current(l))throw Error('lease_unavailable');
  if(q.op===2){
   if(q.readId!==0||!q.body.length||q.body.length>REQUEST_LIMIT||parseInbound(q.body).kind!=='request')throw Error('invalid_core_request');
   try{const reply=copyBytes(await port.request(q.body,l.id),REPLY_LIMIT);if(!reply.length||!current(l))throw Error('retired_reply');return result(reply);}
   catch(e){failedDelivery(l);throw e;}
  }
  if(q.body.length||q.readId<1)throw Error('read_fields');
  if(q.readId===l.readId)return result(new Uint8Array(l.batch));
  if(q.readId!==l.readId+1)throw Error('read_sequence');
  // Preserve all unreturned events. Only exact next read acknowledges last batch.
  const batch=l.events.slice(0,BATCH_LIMIT);const body=packEvents(batch);
  l.events.splice(0,batch.length);for(const e of batch)l.queuedBytes-=e.length;
  l.readId=q.readId;l.batch=body;return result(new Uint8Array(body));
 };
 const accept=(input:Uint8Array):Promise<Uint8Array>=>{
  try{
   if(!live)throw Error('channel_ended');
   const q=decode(input),raw=copyBytes(input,FRAME_LIMIT);
   if(q.kind!==0)throw Error('wrong_direction');
   if(q.op===1&&(q.lease!==0||q.readId!==0||q.body.length))throw Error('open_fields');
   if(q.op!==1&&q.lease<1)throw Error('lease_required');
   if(q.op===2&&(q.readId!==0||!q.body.length||q.body.length>REQUEST_LIMIT))throw Error('request_fields');
   if(q.op===3&&(q.readId<1||q.body.length))throw Error('read_fields');
   if(q.op===4&&(q.readId!==0||q.body.length))throw Error('close_fields');
   if(q.seq===sequence&&lastRequest){
    if(!same(raw,lastRequest))throw Error('conflicting_operation');
    if(pending)return pending; // One shared in-flight result, no extra owner call/tail queue.
    if(lastReply)return Promise.resolve(new Uint8Array(lastReply));
   }
   if(q.seq<sequence)return Promise.resolve(encode({...q,kind:2,body:errorBody('stale_operation')}));
   if(busy)throw Error('operation_pending');
   if(q.seq!==sequence+1)throw Error('operation_sequence');
   if(fault&&q.op!==4)throw Error('owner_unavailable');
   busy=true;lastRequest=raw;sequence=q.seq;lastReply=null;
   // Deferral assigns `pending` before any caller-controlled owner method executes.
   const work=Promise.resolve().then(async()=>{
    let reply:Frame;
    try{reply=await dispatch(q);}catch(e){reply={...q,kind:2,body:errorBody('owner_operation_failed')};}
    const bytes=encode(reply);lastReply=bytes;return new Uint8Array(bytes);
   }).finally(()=>{pending=null;busy=false;});pending=work;return work;
  }catch(error){return Promise.reject(error);}
 };
 return Object.freeze({custody:Object.freeze({}),accept,
  end():Promise<void>{
   if(ending)return ending;live=false;if(lease)lease.active=false;
   ending=(async()=>{if(pending)await pending.catch(()=>{});if(lease)await retire(lease);})();return ending;
  },
  inspect:()=>({live,fault,busy,active:!!lease?.active,cleanupPending:!!lease&&!lease.active,generation,sequence,queuedEvents:lease?.events.length??0,queuedBytes:lease?.queuedBytes??0,retainedBatchBytes:lease?.batch.length??0})
 });
}
