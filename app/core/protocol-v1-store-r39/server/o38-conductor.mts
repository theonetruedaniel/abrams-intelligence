import {canonical} from './reference-core/shared/mock-core/state.mts';
import {O38,sha256} from './o38-registration.mts';
const used=new WeakSet<object>();
const check=(v:unknown)=>{if(!v)throw Error('O38 evidence incomplete; retain caller-owned Core without retry');};
const copy=(v:any)=>structuredClone(v);
const ledger=(state:any)=>({capacity:4096,usedSlots:state.accepted.length,remainingSlots:4096-state.accepted.length,uncommittedReservations:0,entries:state.accepted.map((a:any)=>({message:a.request,reply:a.reply}))});

// Synchronous, one-use, fixed oracle conductor. Imports never construct/open Core,
// Store, native resources or runtime admission. Caller retains every resource.
export function runOwnedO38(core:any){
 check(core&&typeof core==='object'&&!used.has(core));used.add(core);
 const names=['inspectState','approve','tick','execute','inspectAcceptedLedger'];
 check(names.every(n=>typeof core[n]==='function'));
 const ports:any=Object.fromEntries(names.map(n=>[n,core[n].bind(core)])),binding=core.binding;
 check(binding&&binding.sessionId==='synthetic-session');
 const invoke=(name:string,...args:any[])=>{const v=ports[name](...args);check(!(v&&(typeof v==='object'||typeof v==='function')&&'then' in v));return v;};
 const state=(expected:any)=>{const actual=invoke('inspectState');check(canonical(actual)===canonical(expected));return copy(actual);};
 const request=(q:any,reply:any)=>{const actual=invoke('execute',new TextEncoder().encode(JSON.stringify(q)),binding);check(canonical(actual)===canonical(reply));return copy(actual);};
 const inspect=(expected:any)=>{const v=invoke('inspectAcceptedLedger');check(v&&Object.keys(v).sort().join(',')==='ledger,witness'&&canonical(v.ledger)===canonical(ledger(expected)));
  check(v.witness&&Object.keys(v.witness).sort().join(',')==='autocommit,recoveredStateSha256,reservationBasis,schemaSha256'&&v.witness.autocommit===true&&v.witness.recoveredStateSha256===sha256(canonical(expected))&&/^[a-f0-9]{64}$/.test(v.witness.schemaSha256)&&v.witness.reservationBasis==='exact synchronous schema and checked physical recovery at quiescent autocommit; not WAL/free-space or arbitrary-writer proof');state(expected);return copy(v);};
 state(O38.initial);const checkpointCount=core.checkpointCount;check(Number.isSafeInteger(checkpointCount)&&checkpointCount>=0);
 check(invoke('approve',copy(O38.approval))===undefined);state(O38.states[1]);
 request(O38.startRequest,O38.startReply);state(O38.states[2]);
 for(let n=0;n<126;n++){check(invoke('tick','A')===undefined);state(O38.states[n+3]);}
 const before=state(O38.prefix),physicalBefore=inspect(O38.prefix);let rejected=false;
 try{invoke('tick','A');}catch(error:any){check(error?.message==='fixture_limit');rejected=true;}
 check(rejected);state(before);check(core.checkpointCount===checkpointCount);
 const stopReply=request(O38.stopRequest,O38.stopReply),after=state(O38.final),physicalAfter=inspect(O38.final);
 check(physicalBefore.witness.schemaSha256===physicalAfter.witness.schemaSha256&&core.checkpointCount===checkpointCount);
 return {format:'abrams-o38-capacity-source-observation',version:1,sourceSha256:O38.sourceSha256,configurationSha256:O38.configurationSha256,capacityTickRejected:true,before,after,beforeSha256:sha256(canonical(before)),afterSha256:sha256(canonical(after)),stopReply,physicalBefore,physicalAfter,checkpointCount,runtimeAcceptance:'not-established',physicalWitnessProvenance:'caller-owned Core; actual Store producer requires runtime closure',nativeRetirement:'not-established',automaticRetry:false};
}
