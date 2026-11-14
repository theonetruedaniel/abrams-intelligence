import {Projection} from './shared/client/projection.mts';
import {parseInbound,parseStreamEvent} from './shared/contracts/protocol.mts';
import {parseReply} from './strict-reply.mts';

// Synthetic byte boundary, not a Tauri command, native bridge or owner port.
// The owner supplies an already admitted transport; the default has none.
export interface ShellCorePort {
 readonly protocol:1;
 readonly binding:object;
 openEvents(generation:number, receive:(generation:number,bytes:Uint8Array)=>boolean, disconnected:()=>void):Promise<()=>Promise<void>>;
 request(bytes:Uint8Array,generation:number):Promise<Uint8Array>;
}
export interface MockRunIntent {runId:string;fixtureId:string;approvalId:string;approvalRevision:number}
type Session={generation:number;active:boolean;busy:boolean;pending:number;close:(()=>Promise<void>)|null;closing:boolean;cleanupFailed:boolean;projection:Projection};
const encode=(v:unknown)=>new TextEncoder().encode(JSON.stringify(v));
const exact=(v:any,keys:string[])=>v!==null&&typeof v==='object'&&!Array.isArray(v)&&Object.keys(v).sort().join(',')===keys.sort().join(',');
export function createShellCoreAdapter(port:ShellCorePort|null=null){
 if(port!==null&&(port.protocol!==1||!port.binding||typeof port.binding!=='object'||typeof port.request!=='function'||typeof port.openEvents!=='function'))throw Error('versioned injected port required');
 const binding=port?.binding;
 let session:Session|null=null,generation=0,disposed=false;
 const current=(s:Session)=>{const same=port?.binding===binding;return same&&session===s&&s.active&&!disposed;};
 const finish=(s:Session)=>{if(!s.active&&s.pending===0&&!s.closing&&!s.close&&!s.cleanupFailed&&session===s)session=null;};
 const close=(s:Session)=>{
  if(!s.close||s.closing)return;
  const release=s.close;s.close=null;s.closing=true;
  void Promise.resolve().then(release).catch(()=>{s.cleanupFailed=true;}).finally(()=>{s.closing=false;finish(s);});
 };
 const retire=(s:Session)=>{s.active=false;close(s);finish(s);};
 const watch=async<T,>(s:Session,operation:()=>Promise<T>):Promise<T>=>{s.pending++;try{return await operation();}finally{s.pending--;finish(s);}};
 const send=async(s:Session,type:string,payload:unknown)=>{
  const q=s.projection.createRequest(type,payload),context=s.projection.issue(q);
  const parsed=parseInbound(encode(q));if(parsed.kind!=='request')throw Error('invalid request');
  const raw=await watch(s,()=>{const bytes=encode(q),request=port!.request;if(!current(s))throw Error('retired before dispatch');return request.call(port,bytes,s.generation);});
  if(!current(s))throw Error('retired reply');
  const reply=parseReply(raw,q);
  if(type==='start-mock-run'){
   const p=reply.payload;
   if(!reply.ok||!exact(p,['runId','accepted','epoch'])||p.runId!==q.payload.runId||p.accepted!==true||p.epoch!==q.payload.expectedEpoch)throw Error('invalid start acknowledgement');
  }else {
   if(type==='global-stop'&&reply.ok&&reply.payload.epoch!==q.payload.expectedEpoch+1)throw Error('invalid Stop epoch');
   if(!s.projection.applyReply(reply,context))throw Error('rejected reply');
  }
  return true;
 };
 const command=async(type:string,intent?:MockRunIntent|string)=>{
  const s=session;if(!s||!current(s)||s.busy||s.projection.inspect().degraded||s.projection.inspect().replayInFlight)return false;
  // Validate before invoking the transport. Never accept caller-selected epoch or extra fields.
  s.busy=true;
  try{
   if(type==='start-mock-run'&&!exact(intent,['runId','fixtureId','approvalId','approvalRevision']))return false;
   const epoch=s.projection.inspect().epoch;
   const payload=type==='health'?{}:type==='global-stop'?{expectedEpoch:epoch}:type==='cancel'?{runId:intent,expectedEpoch:epoch}:{...intent as MockRunIntent,expectedEpoch:epoch};
   if(parseInbound(encode({v:1,type,requestId:'validate',payload})).kind!=='request')return false;
   return await send(s,type,payload);
  }catch{retire(s);return false;}finally{s.busy=false;}
 };
 return Object.freeze({
  snapshot(){return {protocol:1,connected:!!session&&current(session),busy:!!session?.busy,cleanupPending:!!session&&!session.active,unconnected:port===null,view:session?.projection.snapshot()??{cursor:0,records:[],runs:{},degraded:true}};},
  async reconnect(){
   if(disposed||!port||session||generation===2147483647)return false;
   const s:Session={generation:++generation,active:true,busy:true,pending:0,close:null,closing:false,cleanupFailed:true,projection:new Projection({binding:binding!,generation})};session=s;
   const eventContext=s.projection.eventContext;let acquired=false;
   try{
    await watch(s,()=>{const open=port.openEvents;if(!current(s))throw Error('retired before acquisition');return open.call(port,s.generation,(g,bytes)=>{
     if(!current(s)||g!==s.generation)return false;
     try{const event=parseStreamEvent(bytes);const accepted=s.projection.receiveEvent(event.payload,eventContext);if(!accepted)retire(s);return accepted;}catch{retire(s);return false;}
    },()=>{if(current(s))retire(s);}).then(release=>{
    if(typeof release!=='function')throw Error('owned subscription release required');
    acquired=true;s.close=release;s.cleanupFailed=false;if(!current(s))close(s);
    });});
    if(!current(s))return false;
    return await send(s,'reconnect',{epoch:1,afterGlobalSeq:0});
   }catch{if(!acquired)s.cleanupFailed=true;retire(s);return false;}finally{s.busy=false;finish(s);}
  },
  health:()=>command('health'),
  startMockRun:(intent:MockRunIntent)=>command('start-mock-run',intent),
  cancel:(runId:string)=>command('cancel',runId),
  globalStop:()=>command('global-stop'),
  disconnect(){if(session)retire(session);},
  shutdown(){disposed=true;if(session)retire(session);}
 });
}
