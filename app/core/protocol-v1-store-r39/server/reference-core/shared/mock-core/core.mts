import {assertSameStoreActive} from '../../../recovery/admission.mts';
import { randomUUID } from 'node:crypto';
import { parseInbound } from '../contracts/protocol.mts';
import { evaluateRequest, evaluateControl, errorReply } from './state.mts';
import { SQLiteStore } from '../store-sqlite/store.mts';
import {assertCleanAdmissionActive} from '../../../clean-admission/session.mts';
// Owned synchronous harness only. No listener, renderer controls or delivery adapter.
export class DurableCore {
  #store:SQLiteStore; #state:any; #status='ready'; #binding:any; #cleanCapability:any; #sameStoreCapability:any;
  #unavailableListeners=new Set<()=>unknown>();#notificationFailures=0;
  static open(o:{root:string,sessionId:string,fixtureConfiguration?:any,cleanCapability?:object,sameStoreCapability?:object}){return new DurableCore(o);}
  constructor(o:{root:string,sessionId:string,fixtureConfiguration?:any,cleanCapability?:object,sameStoreCapability?:object}) {this.#sameStoreCapability=o.sameStoreCapability;this.#cleanCapability=o.cleanCapability;this.#store=SQLiteStore.open(o);this.#state=this.#store.load();this.#binding=Object.freeze({sessionId:o.sessionId,launchNonce:randomUUID()});}
  get binding(){return this.#binding;}
  get configuration(){return structuredClone(this.#store.configuration);}
  get checkpointCount(){return this.#store.checkpointCount;}
  get fixtureManifestIdentity(){return this.#store.fixtureManifestIdentity;}
  #retire(status:'unavailable'|'closed'='unavailable'){
    if(this.#status!=='ready')return;this.#status=status;
    const listeners=[...this.#unavailableListeners];this.#unavailableListeners.clear();
    for(const listener of listeners)try{const result=listener();if(result!==undefined){this.#notificationFailures++;try{Promise.prototype.then.call(result,()=>{},()=>{});}catch{}}}catch{this.#notificationFailures++;}
  }
  #ready(){if(this.#status!=='ready')throw Error('Core '+this.#status);try{if(this.#sameStoreCapability)assertSameStoreActive(this.#sameStoreCapability);if(this.#cleanCapability)assertCleanAdmissionActive(this.#cleanCapability);}catch(error){this.#retire();throw error;}}
  assertAvailable(){this.#ready();}
  onUnavailable(listener:()=>unknown){this.#ready();if(typeof listener!=='function'||this.#unavailableListeners.size>=16)throw Error('bounded synchronous availability listener required');this.#unavailableListeners.add(listener);return ()=>{this.#unavailableListeners.delete(listener);};}
  inspectAvailability(){return Object.freeze({phase:this.#status,notificationFailures:this.#notificationFailures});}
  inspectPersistenceFailure(){const v=this.#store.failureEvidence;if(!v)return null;const sites=['begin-immediate','commit-record-insert','approval-upsert','run-upsert','journal-insert','accepted-request-insert','session-update','commit','checkpoint','state-publication'];return Object.freeze({committed:v.committed===true,rollbackVerified:v.rollbackVerified===true,uncertain:v.uncertain===true,sqlOperation:sites.includes(v.sqlOperation)?v.sqlOperation:'other',sqliteCode:Number.isSafeInteger(v.sqliteCode)&&v.sqliteCode>=0&&v.sqliteCode<=2147483647?v.sqliteCode:null});}
  inspectState(){this.#ready();return structuredClone(this.#state);}
  abortO32Fault(){this.#retire();this.#store.abortO32Fault();}
  armO32Fault(callback:(witness:any)=>unknown){this.#ready();try{return this.#store.armO32Fault(callback);}catch(error){this.#retire();throw error;}}
  inspectAcceptedLedger(){this.#ready();try{return this.#store.inspectAcceptedLedger();}catch(error){this.#retire();throw error;}}
  #commit(u:any){try{this.#store.commit(u);this.#state=structuredClone(u.state);}catch(e){this.#retire();throw e;}}
  execute(bytes:Uint8Array,binding:any):any {
    this.#ready();if(binding!==this.#binding)return {kind:'uncorrelated',code:'invalid_binding'};
    try{this.#store.assertFixtureManifest();}catch(e){this.#retire();throw e;}
    const parsed=parseInbound(bytes);if(parsed.kind==='uncorrelated')return parsed;
    if(parsed.kind==='reply-error')return errorReply({v:1,type:parsed.type,requestId:parsed.requestId,payload:{}},parsed.code);
    const u=evaluateRequest(this.#state,parsed.request);if(u.source)this.#commit(u);return structuredClone(u.reply);
  }
  #control(c:any){this.#ready();this.#commit(evaluateControl(this.#state,c));}
  approve(approval:any){this.#control({type:'approve',approval});}
  invalidate(approvalId:string,revision:number){this.#control({type:'invalidate',approvalId,revision});}
  revoke(requestType:string){this.#control({type:'revoke',requestType});}
  tick(runId:string){this.#control({type:'tick',runId});}
  close(){this.#ready();try{this.#store.close();this.#retire('closed');}catch(e){this.#retire();throw e;}}
}
