import {parseInbound} from '../inputs/shared/contracts/protocol.mts';
import {canonical} from './canonical.mts';
const exact=(v:any,keys:string[])=>v!==null&&typeof v==='object'&&!Array.isArray(v)&&Object.keys(v).sort().join(',')===keys.slice().sort().join(',');
const integer=(v:any,min=0,max=Number.MAX_SAFE_INTEGER)=>Number.isSafeInteger(v)&&v>=min&&v<=max;
const identifier=(v:any)=>typeof v==='string'&&/^[A-Za-z0-9_-]{1,64}$/.test(v);
const validEvent=(e:any)=>integer(e?.globalSeq,1,128)&&integer(e?.runSeq,1,128)&&(()=>{const p=parseInbound(new TextEncoder().encode(JSON.stringify({v:1,type:'stream-event',payload:e})));return p.kind==='uncorrelated'&&p.code==='wrong_direction';})();
const frozen=(v:any):any=>{if(v&&typeof v==='object'){for(const x of Object.values(v))frozen(x);Object.freeze(v);}return v;};
const append=(records:any[],e:any)=>{
  if(!validEvent(e)||e.globalSeq!==records.length+1)throw Error('invalid event/sequence');
  const prior=records.filter(x=>x.runId===e.runId);const last=prior.at(-1);
  if(e.runSeq!==prior.length+1||(!last&&e.kind!=='started')||(last&&(e.epoch!==last.epoch||!['started','output'].includes(last.kind)||e.kind==='started')))throw Error('invalid per-run transition');
  records.push(structuredClone(e));
};
// Shared client state only; no DOM, browser requests, timers, HTTP or native bridge.
export class Projection {
  #binding:any;#generation:number;#lifecycle=1;#reconciliation=0;#epoch=1;#records:any[]=[];#pending=new Map<number,any>();
  #integritySeq:number|null=null;#needsHealth=false;#requiresFull=false;#disconnected=false;#hintThrough=0;#needsReplay=false;#inflight:any=null;
  #contexts=new WeakSet<object>();#issued=new Set<string>();#generated=new Map<string,string>();#outbox:any[]=[];#lastSuccessfulTraffic:number|null=null;
  constructor(o:{binding:any,generation:number}){if(!o.binding||!integer(o.generation,1,2147483647))throw Error('invalid projection context');this.#binding=o.binding;this.#generation=o.generation;}
  #auth(context:any){return context?.binding===this.#binding&&context.generation===this.#generation;}
  get eventContext(){return Object.freeze({binding:this.#binding,generation:this.#generation,lifecycle:this.#lifecycle});}
  #eligible(context:any){return this.#contexts.has(context)&&this.#auth(context)&&context.lifecycle===this.#lifecycle&&context.reconciliation===this.#reconciliation;}
  #fail(seq:number){this.#integritySeq??=integer(seq,1,128)?seq:0;this.#needsReplay=true;}
  #settleFailed(context:any){if(this.#inflight===context){this.#inflight=null;this.#requiresFull=true;this.#needsReplay=true;this.#drain();}}
  #queueHealth(){if(this.#outbox.length>=4||this.#outbox.some(x=>x.request.type==='health'))return;const request=this.createRequest('health',{});this.#outbox.push({request,context:this.issue(request)});}
  #apply(e:any){try{append(this.#records,e);this.#epoch=Math.max(this.#epoch,e.epoch);return true;}catch{this.#fail(e?.globalSeq);return false;}}
  #drain(){
    if(this.#inflight||this.#integritySeq!==null)return;
    while(this.#pending.has(this.#records.length+1)){
      const seq=this.#records.length+1,e=this.#pending.get(seq);if(!this.#apply(e))return;this.#pending.delete(seq);
    }
    if(this.#pending.size===0&&this.#hintThrough<=this.#records.length&&!this.#requiresFull&&!this.#needsHealth)this.#needsReplay=false;
  }
  snapshot(){return {cursor:this.#records.length,records:structuredClone(this.#records),runs:Object.fromEntries([...new Set(this.#records.map(e=>e.runId))].map(id=>{const last=this.#records.filter(e=>e.runId===id).at(-1);return [id,['started','output'].includes(last.kind)?'running':last.kind];})),degraded:this.#integritySeq!==null||this.#pending.size>0||this.#hintThrough>this.#records.length||this.#needsHealth||this.#requiresFull||this.#disconnected};}
  inspect(){return {...this.snapshot(),epoch:this.#epoch,integritySeq:this.#integritySeq,needsReplay:this.#needsReplay,lifecycle:this.#lifecycle,reconciliation:this.#reconciliation,pendingCount:this.#pending.size,replayInFlight:this.#inflight!==null,lastSuccessfulTraffic:this.#lastSuccessfulTraffic};}
  createRequest(type:string,payload:any){
    if(this.#generated.size>=4096)throw Error('fixture_limit: generated client IDs');
    const id='client_'+globalThis.crypto.randomUUID().replaceAll('-','');
    const request=frozen({v:1,type,requestId:id,payload:structuredClone(payload)});const parsed=parseInbound(new TextEncoder().encode(JSON.stringify(request)));if(parsed.kind!=='request')throw Error('invalid generated client request');
    if(this.#generated.has(id)||this.#issued.has(id))throw Error('client request ID collision');this.#generated.set(id,canonical(request));return request;
  }
  takeRequests(){const requests=this.#outbox;this.#outbox=[];return requests;}
  issue(request:any){
    const parsed=parseInbound(new TextEncoder().encode(JSON.stringify(request)));if(parsed.kind!=='request')throw Error('invalid client request');
    if(!this.#issued.has(request.requestId)&&this.#issued.size>=4096)throw Error('fixture_limit: client IDs');
    if(request.type==='reconnect'){this.#reconciliation++;this.#outbox=[];}
    const context=Object.freeze({binding:this.#binding,generation:this.#generation,lifecycle:this.#lifecycle,reconciliation:this.#reconciliation,request:frozen(structuredClone(request)),freshRequestId:this.#generated.get(request.requestId)===canonical(request)&&!this.#issued.has(request.requestId)});
    this.#issued.add(request.requestId);this.#contexts.add(context);if(request.type==='reconnect')this.#inflight=context;return context;
  }
  receiveEvent(e:any,context:any){
    if(!this.#auth(context)||context.lifecycle!==this.#lifecycle)return false;
    if(!validEvent(e)){this.#fail(e?.globalSeq);return false;}
    const observed=this.#records[e.globalSeq-1];if(observed){if(canonical(observed)!==canonical(e))this.#fail(e.globalSeq);return canonical(observed)===canonical(e);}
    const queued=this.#pending.get(e.globalSeq);if(queued){if(canonical(queued)!==canonical(e))this.#fail(e.globalSeq);return canonical(queued)===canonical(e);}
    if(this.#pending.size>=128){this.#fail(e.globalSeq);return false;}
    this.#pending.set(e.globalSeq,structuredClone(e));if(e.globalSeq>this.#records.length+1)this.#needsReplay=true;this.#drain();return true;
  }
  applyReply(reply:any,context:any){
    if(!this.#eligible(context))return false;
    const q=context.request;
    if(!exact(reply,['v','type','requestId','ok','payload'])||reply.v!==1||reply.type!==q.type||reply.requestId!==q.requestId||typeof reply.ok!=='boolean'||new TextEncoder().encode(canonical(reply)).length>1048576){this.#fail(0);this.#settleFailed(context);return false;}
    if(!reply.ok){if(!exact(reply.payload,['code'])||typeof reply.payload.code!=='string')this.#fail(0);this.#settleFailed(context);return false;}
    const p=reply.payload;
    if(q.type==='health'){
      if(!exact(p,['protocol','epoch','lastGlobalSeq'])||p.protocol!==1||!integer(p.epoch,1)||!integer(p.lastGlobalSeq,0,128)){this.#fail(0);return false;}
      if(p.epoch<this.#epoch||p.lastGlobalSeq<Math.max(this.#records.length,this.#hintThrough)||!context.freshRequestId)return false;
      if(p.epoch>this.#epoch){this.#requiresFull=true;this.#needsReplay=true;}
      this.#epoch=p.epoch;this.#hintThrough=p.lastGlobalSeq;
      if(p.lastGlobalSeq>this.#records.length)this.#needsReplay=true;
      if(p.lastGlobalSeq===this.#records.length&&this.#pending.size===0&&this.#integritySeq===null&&!this.#requiresFull){this.#needsHealth=false;this.#disconnected=false;this.#needsReplay=false;}
      this.#lastSuccessfulTraffic=performance.now();return true;
    }
    if(q.type==='cancel'){
      if(!exact(p,['runId','state'])||p.runId!==q.payload.runId||!['cancelled','stopped','succeeded','failed'].includes(p.state)){this.#fail(0);return false;}
      // Acknowledgement is not an event. Only the authoritative journal may
      // change the visible run state or advance the event cursor.
      if(context.freshRequestId)this.#lastSuccessfulTraffic=performance.now();return true;
    }
    if(q.type==='global-stop'){
      if(!exact(p,['epoch','stoppedRunIds'])||!integer(p.epoch,1)||!Array.isArray(p.stoppedRunIds)||p.stoppedRunIds.length>32||!p.stoppedRunIds.every(identifier)||canonical(p.stoppedRunIds)!==canonical([...new Set(p.stoppedRunIds)].sort())){this.#fail(0);return false;}
      if(p.epoch<this.#epoch)return false;this.#epoch=p.epoch;if(context.freshRequestId)this.#lastSuccessfulTraffic=performance.now();return true;
    }
    if(q.type!=='reconnect')return false;
    if(!exact(p,['epoch','throughGlobalSeq','events'])||!integer(p.epoch,1)||!integer(p.throughGlobalSeq,0,128)||!Array.isArray(p.events)||p.events.length>128){this.#fail(0);this.#settleFailed(context);return false;}
    if(p.epoch<this.#epoch||p.throughGlobalSeq<this.#records.length){this.#needsReplay=true;this.#inflight=null;return false;}
    const full=q.payload.afterGlobalSeq===0||q.payload.epoch<p.epoch;
    if((this.#integritySeq!==null||this.#requiresFull)&&!full){this.#needsReplay=true;this.#inflight=null;return false;}
    const start=full?1:q.payload.afterGlobalSeq+1;
    if(p.events.length!==Math.max(0,p.throughGlobalSeq-start+1)){this.#fail(0);this.#inflight=null;return false;}
    const wasIntegrity=this.#integritySeq!==null;
    try {
      const candidate=full?[]:structuredClone(this.#records.slice(0,q.payload.afterGlobalSeq));
      for(const e of p.events){if(e.epoch>p.epoch)throw Error('future journal epoch');append(candidate,e);}
      if(candidate.length!==p.throughGlobalSeq)throw Error('snapshot watermark mismatch');
      if(!wasIntegrity)for(let i=0;i<this.#records.length;i++)if(canonical(candidate[i])!==canonical(this.#records[i]))throw Error('overlap conflict');
      for(const [seq,e] of this.#pending)if(seq<=p.throughGlobalSeq&&!wasIntegrity&&canonical(candidate[seq-1])!==canonical(e))throw Error('buffered overlap conflict');
      this.#records=candidate;this.#epoch=p.epoch;if(full){this.#integritySeq=null;this.#requiresFull=false;}
      for(const seq of [...this.#pending.keys()])if(seq<=p.throughGlobalSeq)this.#pending.delete(seq);
      this.#inflight=null;this.#needsHealth=!context.freshRequestId;this.#disconnected=false;this.#drain();
      if(context.freshRequestId)this.#lastSuccessfulTraffic=performance.now();else this.#queueHealth();return true;
    }catch{this.#fail(0);this.#settleFailed(context);return false;}
  }
  replace(o:{binding:any,generation:number}){
    if(!o.binding||!integer(o.generation,1,2147483647)||(o.binding===this.#binding?o.generation!==this.#generation+1:o.generation!==1))throw Error('invalid replacement generation');
    this.#binding=o.binding;this.#generation=o.generation;this.#lifecycle++;this.#reconciliation++;this.#pending.clear();this.#outbox=[];this.#inflight=null;this.#disconnected=true;this.#requiresFull=true;this.#needsReplay=true;
  }
  refresh(){this.#lifecycle++;this.#reconciliation++;this.#records=[];this.#pending.clear();this.#outbox=[];this.#integritySeq=null;this.#inflight=null;this.#hintThrough=0;this.#needsHealth=true;this.#requiresFull=true;this.#needsReplay=true;}
}
