import {createResponseRecovery} from './response-recovery.mts';
import {parseBootstrap} from '../strict-reply.mts';
import {createBrowserWire} from '../browser-wire.mts';
import {Projection} from './projection.mts';
import {RendererLifecycle} from './renderer-lifecycle.mts';
import {parseInbound} from '../shared/contracts/protocol.mts';
import {copyRunIntent} from './run-intent.mts';
const emptyView=()=>({cursor:0,records:[],runs:{},degraded:true});
const encode=(v:any)=>new TextEncoder().encode(JSON.stringify(v));
// Fake-only composition. All transport/bootstrap ports are injected. No global
// fetch, DOM, sockets, persistence, owner controls or automatic reconnect.
export function createPageController({testOnly,origin,loadBootstrap,fetchImpl,healthNow,startupMs=1000,shutdownMs=1000,commandMs=1000,admit=()=>true}:any):any{
 if(testOnly!==true||typeof origin!=='string'||!/^http:\/\/127\.0\.0\.1:[1-9][0-9]{0,4}$/.test(origin)||Number(new URL(origin).port)>65535||typeof loadBootstrap!=='function'||typeof fetchImpl!=='function'||![startupMs,shutdownMs,commandMs].every(n=>Number.isInteger(n)&&n>=1&&n<=10000))throw Error('fake bounded page ports required');
 let attempt:any=null,visible:RendererLifecycle|null=null,phase='idle',message='Ready to connect.',disposed=false,transition=false,serial=0;
 const listeners=new Set<(s:any)=>void>();
 const snapshot=()=>({phase, message:attempt&&!attempt.active?'Waiting for cancelled transport cleanup.':message,recoveryTiming:attempt?.recoveryTiming?{...attempt.recoveryTiming}:null,view:visible?.snapshot()??emptyView(),cleanupPending:!!attempt&&!attempt.active,busy:transition||!!attempt?.commandBusy||!!attempt?.healthBusy,commandPending:attempt?.commandName??null,lastCommand:attempt?.lastCommand?{...attempt.lastCommand}:null,canRunCommand:!disposed&&!transition&&!!attempt?.active&&phase==='ready'&&!attempt.commandBusy&&!attempt.healthBusy&&!attempt.projection.inspect().degraded&&!attempt.projection.inspect().replayInFlight,canConnect:!disposed&&!attempt&&!transition,canRefresh:!disposed&&!transition&&(!attempt||attempt.active),canDisconnect:!disposed&&!!attempt?.active,canShutdown:!disposed});
 const emit=()=>{for(const listener of listeners)try{listener(snapshot());}catch{}};
 const current=(a:any)=>attempt===a&&a.active&&!a.abort.signal.aborted&&!disposed&&admit();
 const finish=(a:any)=>{
  if(a.active||a.pending||a.cleanupFailed)return;
  a.complete();if(attempt===a){attempt=null;if(phase==='cleanup-pending'){phase=a.targetPhase;message=a.targetMessage;}emit();}
 };
 const watch=(a:any,operation:()=>any)=>{
  // Reserve before any external port executes: a synchronous cancellation or
  // throw must not let finish() retire this slot while work is still returned.
  a.pending++;
  let promise:Promise<any>;try{promise=Promise.resolve(operation());}catch(error){promise=Promise.reject(error);}
  const watched=promise.finally(()=>{a.pending--;finish(a);});
  void watched.catch(()=>{});return watched;
 };
 const disposeUnstartedReader=async(a:any,reader:any)=>{
  try{await reader.cancel();}catch{a.cleanupFailed=true;}
  finally{try{reader.releaseLock();}catch{a.cleanupFailed=true;}if(a.reader===reader)a.reader=null;}
 };
 const abortable=(a:any,promise:Promise<any>)=>new Promise<any>((resolve,reject)=>{
  const signal=a.abort.signal,stop=()=>{signal.removeEventListener('abort',stop);reject(Error('cancelled page attempt'));};
  promise.then(value=>{signal.removeEventListener('abort',stop);resolve(value);},error=>{signal.removeEventListener('abort',stop);reject(error);});
  if(signal.aborted)stop();else signal.addEventListener('abort',stop,{once:true});
 });
 const retire=(a:any,targetPhase:string,targetMessage:string)=>{
  if(!a.active)return a.done;
  a.active=false;a.targetPhase=targetPhase;a.targetMessage=targetMessage;
  if(attempt===a){phase=targetPhase;message=targetMessage;}
  a.recovery?.stop();a.abort.abort();a.life?.disconnect();try{a.decoder?.end();}catch{}
  if(a.reader){
   const reader=a.reader;
   try{void watch(a,async()=>{if(a.pumpStarted){if(!a.readerTerminal)try{await reader.cancel();}catch{if(!a.readerTerminal&&a.pumpDone)try{await a.pumpDone;}catch{}if(!a.readerTerminal)a.cleanupFailed=true;}}else await disposeUnstartedReader(a,reader);});}
   catch{a.cleanupFailed=true;}
  }
  finish(a);emit();return a.done;
 };
 const boundedCleanup=(a:any)=>a.cleanupWait??=new Promise<boolean>(resolve=>{
  const timer=setTimeout(()=>{if(attempt===a){phase='cleanup-pending';message='Waiting for cancelled transport cleanup.';emit();}resolve(false);},shutdownMs);
  a.done.then(()=>{clearTimeout(timer);resolve(true);});
 });
 const readFrames=async(a:any)=>{
  const reader=a.reader;
  try{
   while(current(a)){
    let item:any;
    try{item=await reader.read();}catch(error){a.readerTerminal=true;throw error;}
    if(item.done)a.readerTerminal=true;
    if(!current(a))break;
    if(item.done){a.readerTerminal=true;retire(a,'disconnected','Event stream ended. Refresh to reconnect.');break;}
    a.decoder.push(item.value);if(a.decoder.failed)throw Error('invalid event frame');emit();
   }
  }catch{if(current(a))retire(a,'disconnected','Event stream failed. Refresh to reconnect.');}
  finally{
   try{reader.releaseLock();}catch{a.cleanupFailed=true;}
   if(a.reader===reader)a.reader=null;
   try{a.decoder?.end();}catch{}
  }
 };
 const start=async()=>{
  if(disposed||attempt||transition)return false;
  transition=true;visible=null;phase='starting';message='Connecting to the synthetic transport.';
  let complete!:()=>void;const a:any={id:++serial,active:true,abort:new AbortController(),pending:0,reader:null,cleanupFailed:false,done:new Promise<void>(r=>complete=r),complete:()=>complete()};attempt=a;emit();
  const timer=setTimeout(()=>retire(a,'disconnected','Connection timed out. Refresh to try again.'),startupMs);
  try{
   if(!current(a))return false; // A status observer may synchronously shut down.
   const bootstrap=parseBootstrap(await abortable(a,watch(a,()=>loadBootstrap(a.abort.signal))));if(!current(a))return false;
   if(bootstrap.nextSubscriptionGeneration===null){retire(a,'unavailable','Transport registration unavailable.');return false;}
   const g=bootstrap.nextSubscriptionGeneration,wire=createBrowserWire({origin,binding:bootstrap.binding,fetchImpl});
   // Transfer ownership as registration resolves, before an abortable await can
   // discard its value. Abort in the following microtask still owns this reader.
   const acquisition=watch(a,()=>wire.openEvents(g,a.abort.signal).then(async(opened:any)=>{if(current(a))a.reader=opened.reader;else await disposeUnstartedReader(a,opened.reader);return opened;}));
   await abortable(a,acquisition);if(!current(a))return false;
   a.projection=new Projection({binding:Object.freeze({fakePageAttempt:a.id}),generation:g});a.life=new RendererLifecycle(a.projection);visible=a.life;a.wire=wire;a.generation=g;
   // reconnect establishes the revision captured by this decoder. Start read()
   // before sending replay so commits overlapping the snapshot are retained.
   const replay=a.life.reconnect();a.decoder=a.life.captureFramedEvents({allocate:(n:number)=>new Uint8Array(n),release:()=>{}});
   a.pumpStarted=true;a.pumpDone=watch(a,()=>readFrames(a));if(!current(a))return false;
   const reply=await abortable(a,watch(a,()=>wire.request(encode(replay.request),g,a.abort.signal)));if(!current(a))return false;
   if(!replay.receiveReply(reply))throw Error('replay rejected');
   if(typeof healthNow==='function')a.recovery=createResponseRecovery({testOnly:true,projection:a.projection,now:healthNow,emitRecovery:(ticket:any)=>{
    a.replayTask=(async()=>{
     try{
      if(!current(a))return false;
      const recovered=await abortable(a,watch(a,()=>a.wire.request(encode(ticket.request),a.generation,a.abort.signal,()=>{
       const dispatchAt=healthNow();if(!current(a)||!Number.isSafeInteger(dispatchAt)||dispatchAt<ticket.scheduledAt||dispatchAt-ticket.hintAt>1000)throw Error('recovery dispatch deadline or ownership');
       a.recoveryTiming=Object.freeze({hintAt:ticket.hintAt,scheduledAt:ticket.scheduledAt,dispatchAt,afterGlobalSeq:ticket.request.payload.afterGlobalSeq});
      })));
      if(!current(a))return false;
      if(!a.recovery.receiveReplay(ticket,recovered)){retire(a,'disconnected','Recovery unavailable. Refresh to reconnect.');return false;}
      emit();return current(a);
     }catch{if(current(a))retire(a,'disconnected','Recovery unavailable. Refresh to reconnect.');return false;}
    })();
   }});
   phase='ready';message='Connected to synthetic events.';emit();return current(a);
  }catch{if(current(a))retire(a,'disconnected','Connection unavailable. Refresh to try again.');return false;}
  finally{clearTimeout(timer);transition=false;emit();}
 };
 const disconnect=async()=>{
  if(!attempt)return true;
  const a=attempt;retire(a,disposed?'stopped':'disconnected',disposed?'Page stopped.':'Disconnected. Refresh to reconnect.');return boundedCleanup(a);
 };
 // Explicit observation only: no polling or automatic transport reconnection.
 const observeHealth=async()=>{
  const a=attempt;if(!a||!current(a)||phase!=='ready'||!a.recovery||a.healthBusy||a.commandBusy||transition)return false;
  a.healthBusy=true;a.replayTask=null;
  try{
   const ticket=a.recovery.createHealth();
   const reply=await abortable(a,watch(a,()=>a.wire.request(encode(ticket.request),a.generation,a.abort.signal)));
   if(!current(a))return false;
   if(!a.recovery.receiveHealth(ticket,reply)){if(current(a))retire(a,'disconnected','Health observation unavailable. Refresh to reconnect.');return false;}
   if(!current(a))return false;
   emit();if(!current(a))return false;
   if(a.replayTask&&!await a.replayTask)return false;
   if(!current(a))return false;emit();return true;
  }catch{if(current(a))retire(a,'disconnected','Health observation unavailable. Refresh to reconnect.');return false;}
  finally{a.healthBusy=false;if(current(a))emit();}
 };
 const command=async(type:'start-mock-run'|'cancel'|'global-stop',input?:unknown)=>{
  const a=attempt;
  if(!a||!current(a)||transition||phase!=='ready'||a.commandBusy||a.healthBusy||a.projection.inspect().degraded||a.projection.inspect().replayInFlight)return false;
  // Reserve before reading caller data or notifying subscribers: reentry may
  // disconnect/refresh but cannot issue another overlapping command.
  a.commandBusy=true;a.commandName=type;a.lastCommand=null;
  let timer:ReturnType<typeof setTimeout>|undefined;
  try{
   if(type==='cancel'&&typeof input!=='string')return false;
   const epoch=a.projection.inspect().epoch;
   const payload=type==='start-mock-run'?{...copyRunIntent(input),expectedEpoch:epoch}:type==='cancel'?{runId:input,expectedEpoch:epoch}:{expectedEpoch:epoch};
   const candidate={v:1,type,requestId:'validate',payload};
   if(parseInbound(encode(candidate)).kind!=='request')return false;
   if(!current(a))return false;
   timer=setTimeout(()=>{if(current(a))retire(a,'disconnected','Command timed out. Refresh to reconnect.');},commandMs);
   emit();if(!current(a))return false;
   const request=a.projection.createRequest(type,payload),context=a.projection.issue(request);
   const reply=await abortable(a,watch(a,()=>a.wire.request(encode(request),a.generation,a.abort.signal)));
   if(!current(a))return false;
   if(type==='start-mock-run'){
    const p=reply.payload;
    if(!reply.ok||!p||typeof p!=='object'||Array.isArray(p)||Object.keys(p).sort().join(',')!=='accepted,epoch,runId'||p.runId!==request.payload.runId||p.accepted!==true||p.epoch!==epoch)throw Error('invalid start acknowledgement');
   }else{
    if(type==='global-stop'&&reply.ok&&reply.payload.epoch!==epoch+1)throw Error('invalid Stop epoch');
    if(!a.projection.applyReply(reply,context))throw Error('rejected command reply');
   }
   a.lastCommand={type,ok:true};emit();return current(a);
  }catch{
   if(current(a)){a.lastCommand={type,ok:false};retire(a,'disconnected','Command unavailable. Refresh to reconnect.');}
   return false;
  }finally{if(timer!==undefined)clearTimeout(timer);a.commandBusy=false;a.commandName=null;if(current(a))emit();}
 };
 return Object.freeze({snapshot,start,observeHealth,
  startMockRun:(intent:unknown)=>command('start-mock-run',intent),
  cancel:(runId:string)=>command('cancel',runId),
  globalStop:()=>command('global-stop'),
  async refresh(){if(disposed||transition)return false;if(!await disconnect())return false;return start();},
  disconnect,
  async shutdown(){disposed=true;if(attempt){const a=attempt;if(!a.active){a.targetPhase='stopped';a.targetMessage='Page stopped.';if(phase!=='cleanup-pending'){phase='cleanup-pending';message='Waiting for cancelled transport cleanup.';emit();}}return disconnect();}phase='stopped';message='Page stopped.';emit();return true;},
  subscribe(listener:any){if(typeof listener!=='function'||listeners.size>=4)throw Error('bounded page subscriber required');listeners.add(listener);try{listener(snapshot());}catch(error){listeners.delete(listener);throw error;}return ()=>listeners.delete(listener);}
 });
}
