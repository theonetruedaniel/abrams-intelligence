import {parseStreamEvent} from './shared/contracts/protocol.mts';
// Fake transport owner creates one opaque key per launch/generation. The
// delivery never exposes that key or publication authority. No IO or polling.
export function createEventLease(key:object,onClosed:()=>void|Promise<void>=()=>{},assertAvailability:()=>void=()=>{}){
 if(key===null||typeof key!=='object')throw Error('lease key required');
 if(typeof onClosed!=='function'||typeof assertAvailability!=='function')throw Error('owner cleanup and availability ports required');
 const retired=new AbortController();
 let closed=false,mode='',acquired=false,busy=false,waiter:(()=>void)|undefined,inProgress:any;
 const queue:{seq:number,bytes:Uint8Array}[]=[];
 let complete!:()=>void,failed!:(error:any)=>void;const cleaned=new Promise<void>((resolve,reject)=>{complete=resolve;failed=reject;});
 // A signal may close before its owner awaits cleanup; retain rejection for
 // that await without creating an unhandled rejection in the meantime.
 void cleaned.catch(()=>{});
 const close=()=>{if(closed)return;closed=true;queue.length=0;inProgress=undefined;retired.abort();const wake=waiter;waiter=undefined;wake?.();cleanupSignal?.();try{Promise.resolve(onClosed()).then(complete,failed);}catch(error){failed(error);}};
 let cleanupSignal:(()=>void)|undefined;
 const guard=()=>{try{if(closed||assertAvailability()!==undefined||closed)throw Error('delivery unavailable');}catch(error){close();throw error;}};
 const select=(next:string)=>{if(mode&&mode!==next)throw Error('single lease consumer required');mode=next;};
 const enqueue=(authority:object,seq:number,frame:Uint8Array)=>{
  if(authority!==key||closed)return false;
  try{
   guard();
   if(!Number.isSafeInteger(seq)||seq<1||!(frame instanceof Uint8Array)||frame.length<5||frame.length>65540)throw Error('invalid frame');
   // Buffer.slice and caller overrides may alias. Construct ordinary owned
   // Uint8Array storage directly, then validate only that owned byte view.
   const bytes=new Uint8Array(frame),length=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength).getUint32(0,false);
   if(length<1||length>65536||length!==bytes.length-4||(parseStreamEvent(bytes.subarray(4)).payload as any).globalSeq!==seq)throw Error('invalid sequence');
   const duplicate=queue.find(e=>e.seq===seq)||(inProgress?.seq===seq?inProgress:undefined);
   if(duplicate){if(bytes.length!==duplicate.bytes.length||bytes.some((v,i)=>v!==duplicate.bytes[i]))throw Error('conflicting duplicate');guard();return true;}
   if(queue.length>=128)throw Error('stream overflow');
   guard();queue.push({seq,bytes});const wake=waiter;waiter=undefined;wake?.();return true;
  }catch{close();return false;}
 };
 const delivery=Object.freeze({
  get closed(){return closed;},
  signal:retired.signal,assertAvailable:guard,
  // Compatibility for bounded, manual, fake-only fixtures. Mixing modes fails.
  takeFrames(){select('manual');if(closed)return [];guard();const frames=queue.splice(0).map(e=>e.bytes.slice());guard();return frames;},
  read(signal:AbortSignal):AsyncIterableIterator<Uint8Array>{
   select('async');if(acquired)throw Error('single lease consumer required');acquired=true;
   if(!signal||typeof signal.addEventListener!=='function') {close();throw Error('abort signal required');}
   const abort=()=>close();cleanupSignal=()=>signal.removeEventListener('abort',abort);
   if(!closed){signal.addEventListener('abort',abort,{once:true});if(signal.aborted)close();}
   else cleanupSignal=undefined;
   const iterator:AsyncIterableIterator<Uint8Array>={
    [Symbol.asyncIterator](){return this;},
    async next(){
     if(busy)throw Error('concurrent next forbidden');busy=true;
     try{
      // next() acknowledges release of the prior frame, including on EOF.
      inProgress=undefined;
      while(!closed&&!queue.length)await new Promise<void>(resolve=>{waiter=resolve;});
      if(closed)return {done:true,value:undefined};
      guard();inProgress=queue.shift();const bytes=inProgress.bytes.slice();guard();return {done:false,value:bytes};
     }finally{busy=false;}
    },
    async return(){close();await cleaned;return {done:true,value:undefined};},
    async throw(error:any){close();await cleaned;throw error;}
   };
   return iterator;
  }
 });
 return Object.freeze({enqueue,cancel:(authority:object)=>{if(authority!==key)return false;close();return true;},delivery,cleaned,inspect:()=>({closed,queued:queue.length,inProgress:inProgress?1:0,waiters:waiter?1:0})});
}
// Deliberately not an async generator: return() works before first next().
export const streamBytes=(delivery:any,signal:AbortSignal):AsyncIterableIterator<Uint8Array>=>delivery.read(signal);
