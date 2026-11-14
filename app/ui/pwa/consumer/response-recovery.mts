import {Projection} from './projection.mts';
// Isolated O35 client prerequisite. No transport, timers, health polling, Core,
// store, owner control or automatic retry. The owner supplies existing replies
// and consumes one injected read-only reconnect request.
export function createResponseRecovery({testOnly,projection,now,emitRecovery}:any){
 if(testOnly!==true||!(projection instanceof Projection)||typeof now!=='function'||typeof emitRecovery!=='function')throw Error('pure test-only recovery ports required');
 const lifecycle=projection.inspect().lifecycle,pending=new Map<any,any>();let phase='idle',recovery:any=null,total=0,lastNow=-1;
 const active=()=>phase!=='blocked'&&phase!=='stopped'&&projection.inspect().lifecycle===lifecycle;
 const eligible=(context:any)=>active()&&context.reconciliation===projection.inspect().reconciliation;
 const clock=()=>{const value=now();if(!Number.isSafeInteger(value)||value<0||value<lastNow)throw Error('invalid monotonic fixture clock');lastNow=value;return value;};
 const inspect=()=>({phase,pendingHealth:pending.size,recoveryPending:recovery!==null,issuedHealth:total});
 const createHealth=()=>{
  if(!active()||pending.size>=4||total>=128)throw Error('health observation slot unavailable');
  const request=projection.createRequest('health',{}),context=projection.issue(request),ticket=Object.freeze({request});pending.set(ticket,context);total++;return ticket;
 };
 const receiveHealth=(ticket:any,reply:any)=>{
  const context=pending.get(ticket);if(!context)return false;pending.delete(ticket);if(!eligible(context))return false;
  let ownedContext=context;
  try{
  // A strictly valid same-epoch observation can be overtaken by current live
  // frames while the independent request response is in transit. Consume it
  // without mutating Projection or interpreting it as new health/freshness proof.
  const view=projection.inspect(),p=reply?.payload;
  const exact=(v:any,keys:string[])=>v!==null&&typeof v==='object'&&!Array.isArray(v)&&Object.keys(v).sort().join(',')===keys.slice().sort().join(',');
  if(exact(reply,['v','type','requestId','ok','payload'])&&reply.v===1&&reply.type==='health'&&reply.requestId===ticket.request.requestId&&reply.ok===true&&exact(p,['protocol','epoch','lastGlobalSeq'])&&p.protocol===1&&Number.isSafeInteger(p.epoch)&&p.epoch===view.epoch&&Number.isSafeInteger(p.lastGlobalSeq)&&p.lastGlobalSeq>=0&&p.lastGlobalSeq<=128&&p.lastGlobalSeq<view.cursor&&eligible(context))return true;
   const hintAt=clock();if(!eligible(context))return false;const beforeEpoch=projection.inspect().epoch;
   if(!projection.applyReply(reply,context)){phase='blocked';return false;}
   const state=projection.inspect();if(recovery){if(state.epoch!==recovery.epoch||reply.payload.lastGlobalSeq>recovery.watermark){phase='blocked';return false;}return true;}if(!state.needsReplay)return true;
   const scheduledAt=clock();if(!eligible(context))return false;if(scheduledAt-hintAt>1000){phase='blocked';return false;}
   const request=projection.createRequest('reconnect',{epoch:state.epoch,afterGlobalSeq:state.epoch!==beforeEpoch||state.integritySeq!==null?0:state.cursor});
   if(!eligible(context))return false;
   const replayContext=projection.issue(request),outgoing=Object.freeze({request,hintAt,scheduledAt});
   ownedContext=replayContext;
   if(!eligible(replayContext))return false;
   recovery={ticket:outgoing,context:replayContext,epoch:state.epoch,watermark:reply.payload.lastGlobalSeq};phase='waiting-replay'; // Reserve before external/reentrant code.
   if(!eligible(replayContext)||recovery.ticket!==outgoing)return false;
   emitRecovery(outgoing);return eligible(replayContext);
  }catch{if(eligible(ownedContext))phase='blocked';return false;}
 };
 const receiveReplay=(ticket:any,reply:any)=>{
  if(!active()||!recovery||recovery.ticket!==ticket)return false;
  const context=recovery.context,watermark=recovery.watermark;recovery=null;
  // The fresh replay cannot regress the Health watermark that scheduled it.
  // Check before Projection can drain buffered frames and hide that regression.
  // This floor is captured at dispatch, not raised by later live frames.
  if(reply?.ok===true&&(!Number.isSafeInteger(reply.payload?.throughGlobalSeq)||reply.payload.throughGlobalSeq<watermark)){phase='blocked';return false;}
  if(!projection.applyReply(reply,context)){phase='blocked';return false;}
  if(projection.inspect().needsReplay){phase='blocked';return false;}phase='idle';return true;
 };
 const stop=()=>{phase='stopped';pending.clear();recovery=null;};
 return Object.freeze({createHealth,receiveHealth,receiveReplay,stop,inspect});
}
