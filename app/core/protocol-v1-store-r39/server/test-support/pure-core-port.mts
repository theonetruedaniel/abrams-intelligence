import {parseInbound} from '../reference-core/shared/contracts/protocol.mts';
import {initialState,evaluateRequest,evaluateControl,errorReply} from '../reference-core/shared/mock-core/state.mts';
import {normalizeFixtureConfiguration} from '../reference-core/shared/mock-core/fixture-configuration.mts';
// Test-only in-memory replacement for persistence, NOT DurableCore or a store.
// Reuses reference parser/transitions. No fs, SQLite, listener or native imports.
export function createPureCorePort({testOnly,sessionId,fixtureConfiguration}:any){
 if(testOnly!==true||typeof sessionId!=='string'||!/^synthetic-[A-Za-z0-9_-]{1,48}$/.test(sessionId))throw Error('bounded synthetic session required');
 let phase='ready',notificationFailures=0;const listeners=new Set<()=>unknown>();const available=()=>{if(phase!=='ready')throw Error('reference memory Core '+phase);};
 let state=initialState(sessionId,normalizeFixtureConfiguration(fixtureConfiguration));const binding=Object.freeze({syntheticMemoryPort:true,sessionId});
 const execute=(bytes:Uint8Array,providedBinding:any)=>{
  available();if(providedBinding!==binding)return {kind:'uncorrelated',code:'invalid_binding'};
  const parsed=parseInbound(bytes);if(parsed.kind==='uncorrelated')return structuredClone(parsed);
  if(parsed.kind==='reply-error')return errorReply({v:1,type:parsed.type,requestId:parsed.requestId,payload:{}},parsed.code);
  const unit=evaluateRequest(state,parsed.request);if(unit.source)state=structuredClone(unit.state);return structuredClone(unit.reply);
 };
 const control=(c:any)=>{available();state=structuredClone(evaluateControl(state,c).state);};
 return Object.freeze({binding,execute,kind:'reference-memory-core',assertAvailable:available,inspectAvailability:()=>Object.freeze({phase,notificationFailures}),onUnavailable(listener:()=>unknown){available();if(typeof listener!=='function'||listeners.size>=16)throw Error('bounded synchronous availability listener required');listeners.add(listener);return ()=>{listeners.delete(listener);};},close(){available();phase='closed';const pending=[...listeners];listeners.clear();for(const listener of pending)try{const result=listener();if(result!==undefined){notificationFailures++;try{Promise.prototype.then.call(result,()=>{},()=>{});}catch{}}}catch{notificationFailures++;}},inspectState:()=>{available();return structuredClone(state);},approve:(approval:any)=>control({type:'approve',approval}),tick:(runId:string)=>control({type:'tick',runId}),revoke:(requestType:string)=>control({type:'revoke',requestType}),invalidate:(approvalId:string,revision:number)=>control({type:'invalidate',approvalId,revision})});
}
