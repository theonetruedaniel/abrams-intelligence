import { DatabaseSync } from 'node:sqlite';
import { readFileSync, writeFileSync, unlinkSync, existsSync, realpathSync } from 'node:fs';
import { join, isAbsolute } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { canonical, initialState, evaluateRequest, evaluateControl } from '../mock-core/state.mts';
import { parseInbound } from '../contracts/protocol.mts';
import {normalizeFixtureConfiguration,fixtureManifest} from '../mock-core/fixture-configuration.mts';
import {requireFixtureAdmission,readOwnedBytes,evidenceBounds} from './fixture-admission.mts';
import {isCleanRoot,consumeCleanStoreAdmission,assertCleanAdmissionActive,markCleanStoreOpened,markCleanStoreClosed,readCleanFixtureManifest,failCleanAdmission} from '../../../clean-admission/session.mts';
import {isSameStoreRoot,consumeSameStoreAdmission,assertSameStoreActive,readSameStoreManifest,markSameStoreOpened,markSameStoreClosed,failSameStore,assertO32FaultOwner} from '../../../recovery/admission.mts';
import {O32} from '../../../recovery/o32-registration.mts';
import {makeLedgerInspection} from './ledger-inspection.mts';
const schema=readFileSync(new URL('./schema-v1.sql',import.meta.url),'utf8');
const digest=(v:any)=>createHash('sha256').update(canonical(v)).digest('hex');
const options={allowExtension:false,enableForeignKeyConstraints:true,enableDoubleQuotedStringLiterals:false};
const schemaRows=(db:any,prepare=(sql:string)=>db.prepare(sql))=>prepare("SELECT type,name,tbl_name,sql FROM sqlite_schema ORDER BY type,name").all();
let expectedSchema:string|undefined;
function getExpectedSchema(){if(expectedSchema===undefined){const db=new DatabaseSync(':memory:',options);try{db.exec(schema);expectedSchema=canonical(schemaRows(db));}finally{db.close();}}return expectedSchema;}
// Retain uncertain connections and live clean lifetimes strongly: no GC cleanup on owner loss.
const uncertainStores=new Set<SQLiteStore>();
const approvals=(s:any)=>s.approvals.map((a:any)=>({session_id:s.sessionId,approval_id:a.approvalId,revision:a.revision,run_id:a.runId,fixture_id:a.fixtureId,epoch:a.epoch,valid:+a.valid,consumed:+a.consumed,last_commit_seq:a.lastCommitSeq}));
const runs=(s:any)=>s.runs.map((r:any)=>({session_id:s.sessionId,run_id:r.runId,fixture_id:r.fixtureId,epoch:r.epoch,state:r.state,fixture_position:r.fixturePosition,terminal_reserved:r.terminalReserved,last_commit_seq:r.lastCommitSeq}));
const journals=(s:any)=>s.journal.map((j:any)=>({session_id:s.sessionId,global_seq:j.event.globalSeq,run_id:j.event.runId,run_seq:j.event.runSeq,epoch:j.event.epoch,kind:j.event.kind,event_json:canonical(j.event),commit_seq:j.commitSeq}));
const acceptedRow=(s:any,a:any)=>{
  const full=a.reply;const reconnect=a.request.type==='reconnect';const reply=structuredClone(full);
  const events=reconnect?reply.payload.events:[];if(reconnect) delete reply.payload.events;
  return {session_id:s.sessionId,request_id:a.request.requestId,request_json:canonical(a.request),reply_kind:reconnect?'reconnect':'ordinary',reply_json:canonical(reply),snapshot_start_seq:events.length?events[0].globalSeq:0,snapshot_through_seq:reconnect?full.payload.throughGlobalSeq:0,reply_epoch:reconnect||a.request.type==='health'||a.request.type==='start-mock-run'||a.request.type==='global-stop'?full.payload.epoch:s.epoch,original_reply_digest:digest(full),commit_seq:a.commitSeq};
};
const commitRow=(u:any)=>({session_id:u.state.sessionId,commit_seq:u.state.commitSeq,source:u.source,control_json:canonical(u.control),epoch:u.state.epoch,first_event_seq:u.events.length?u.events[0].event.globalSeq:0,last_event_seq:u.events.length?u.events.at(-1).event.globalSeq:0});
export class SQLiteStore {
  #db:any; #root:string; #marker:string; #token:string; #state:any; #status='opening'; #statements=new Map<string,any>();
  #fixtureConfiguration:any; #manifestPath:string; #manifestBytes:string; #manifestIdentity:any;
  #cleanCapability:any; #sameStoreCapability:any;
  #o32Fault:null|{callback:(witness:any)=>unknown,used:boolean,cacheSize:number,cacheSpill:number}=null;
  configuration:any; checkpointCount=0; failureEvidence:any=null;
  static open(o:{root:string,sessionId:string,fixtureConfiguration?:any,cleanCapability?:object,sameStoreCapability?:object}) {return new SQLiteStore(o);}
  constructor(o:{root:string,sessionId:string,fixtureConfiguration?:any,cleanCapability?:object,sameStoreCapability?:object}) {
    this.#fixtureConfiguration=normalizeFixtureConfiguration(o.fixtureConfiguration);
    if(!isAbsolute(o.root)||!/^C:\\/i.test(o.root)||! /^[A-Za-z0-9_-]{1,64}$/.test(o.sessionId)) throw Error('invalid owned store location/session');
    this.#root=realpathSync(o.root);if(this.#root.toLowerCase()!==o.root.toLowerCase()) throw Error('store root alias refused');
    this.#manifestPath=join(this.#root,'fixture-manifest.json');
    const manifest=fixtureManifest(o.sessionId,this.#fixtureConfiguration);this.#manifestBytes=manifest.bytes;this.#manifestIdentity=manifest.identity;
    const clean=isCleanRoot(o.root),same=isSameStoreRoot(o.root);
    if(!same&&o.sameStoreCapability!==undefined||same&&o.cleanCapability!==undefined)throw Error('mixed same-store admission');
    if(!clean&&o.cleanCapability!==undefined)throw Error('clean capability cannot admit ordinary root');
    const admission=same?consumeSameStoreAdmission(o.sameStoreCapability,this.#root,this.#manifestBytes):clean?consumeCleanStoreAdmission(o.cleanCapability,this.#root,this.#manifestBytes):requireFixtureAdmission(this.#root,this.#manifestBytes);
    if(clean){this.#cleanCapability=o.cleanCapability;uncertainStores.add(this);}
    if(same){this.#sameStoreCapability=o.sameStoreCapability;uncertainStores.add(this);}
    this.#manifestIdentity={...this.#manifestIdentity,ownerAdmission:admission};
    this.#marker=join(this.#root,same?admission.writerMarker:'writer-owner.json');this.#token=randomUUID();
    try{writeFileSync(this.#marker,canonical({nonce:this.#token,pid:process.pid}),{flag:'wx'});}catch(e:any){if(e.code==='EEXIST')throw Error('owned writer already present; no stale reclamation');throw e;}
    try {
      const path=join(this.#root,'mock-core.db');const fresh=!existsSync(path);if(same&&admission.existingRequired&&fresh)throw Error('recovery database missing; never fresh initialize');
      if(fresh&&(existsSync(path+'-wal')||existsSync(path+'-shm')))throw Error('journal_corrupt: orphan sidecar');
      // Manifest creation/checked flush belongs to owner setup BEFORE this Node consumer exists.
      // Missing or mismatched owner evidence was denied above, before marker/SQLite creation.
      this.assertFixtureManifest();
      this.#db=new DatabaseSync(path,options);this.#db.enableDefensive(true);
      this.#db.exec('PRAGMA busy_timeout=0; PRAGMA foreign_keys=ON; PRAGMA trusted_schema=OFF; PRAGMA synchronous=FULL; PRAGMA wal_autocheckpoint=0;');
      const mode=this.#prepare('PRAGMA journal_mode=WAL').get().journal_mode;
      const pragma=(name:string)=>Object.values(this.#prepare('PRAGMA '+name).get())[0];
      this.configuration={journalMode:mode,synchronous:pragma('synchronous'),foreignKeys:pragma('foreign_keys'),trustedSchema:pragma('trusted_schema'),autoCheckpoint:pragma('wal_autocheckpoint')};
      if(canonical(this.configuration)!==canonical({journalMode:'wal',synchronous:2,foreignKeys:1,trustedSchema:0,autoCheckpoint:0}))throw Error('store configuration mismatch');
      if(fresh){this.#db.exec('BEGIN IMMEDIATE');this.#db.exec(schema);const s=initialState(o.sessionId,this.#fixtureConfiguration);this.#prepare('INSERT INTO session VALUES(?,?,?,?)').run(s.sessionId,s.epoch,0,canonical(s.grants));this.#db.exec('COMMIT');}
      this.#state=this.#recover(o.sessionId);if(this.#sameStoreCapability)markSameStoreOpened(this.#sameStoreCapability);if(this.#cleanCapability)markCleanStoreOpened(this.#cleanCapability);this.#status='ready';
    } catch(e:any) {
      // Opening a corrupt/uncertain existing store retains its marker and connection for diagnosis.
      if(this.#sameStoreCapability)failSameStore(this.#sameStoreCapability);if(this.#cleanCapability)failCleanAdmission(this.#cleanCapability);this.#status='unavailable';uncertainStores.add(this);throw e;
    }
  }
  load(){this.#ready();return structuredClone(this.#state);}
  inspectAcceptedLedger(){
    this.#ready();
    try{
      this.assertFixtureManifest();const before=this.#db.isTransaction;if(before!==false)throw Error('ledger transaction active');
      // Re-read actual schema, integrity and every persisted ledger/journal row.
      const recovered=this.#recover(this.#state.sessionId),schemaSha256=digest(schemaRows(this.#db,(sql:string)=>this.#prepare(sql)));const after=this.#db.isTransaction;this.#ready();
      return makeLedgerInspection(recovered,this.#state,before,after,schemaSha256);
    }catch(error){
      if(this.#sameStoreCapability)failSameStore(this.#sameStoreCapability);if(this.#cleanCapability)failCleanAdmission(this.#cleanCapability);
      this.#status='unavailable';uncertainStores.add(this);throw Error('store unavailable: ledger inspection retained uncertainty',{cause:error});
    }
  }
  get fixtureManifestIdentity(){return structuredClone(this.#manifestIdentity);}
  assertFixtureManifest(){try{const bytes=this.#sameStoreCapability?readSameStoreManifest(this.#sameStoreCapability):this.#cleanCapability?readCleanFixtureManifest(this.#cleanCapability):readOwnedBytes(this.#manifestPath,evidenceBounds.manifest);if(!bytes.equals(Buffer.from(this.#manifestBytes,'utf8')))throw Error('bytes/configuration mismatch');}catch(e:any){if(this.#sameStoreCapability)failSameStore(this.#sameStoreCapability);if(this.#cleanCapability)failCleanAdmission(this.#cleanCapability);this.#status='unavailable';uncertainStores.add(this);throw Error('journal_corrupt: fixture manifest '+e.message,{cause:e});}}
  #ready(){if(this.#sameStoreCapability)assertSameStoreActive(this.#sameStoreCapability);if(this.#cleanCapability)assertCleanAdmissionActive(this.#cleanCapability);if(this.#status!=='ready')throw Error('store '+this.#status);}
  #prepare(sql:string){
    if(this.#statements.has(sql))return this.#statements.get(sql);
    if(this.#statements.size>=32)throw Error('store statement capacity exceeded');
    const statement=this.#db.prepare(sql);this.#statements.set(sql,statement);return statement;
  }
  #rows(table:string){return this.#prepare('SELECT * FROM '+table).all();}
  #insert(table:string,row:any,upsertKeys:string[]=[]) {
    const keys=Object.keys(row);let sql='INSERT INTO '+table+' ('+keys.join(',')+') VALUES('+keys.map(()=>'?').join(',')+')';
    if(upsertKeys.length)sql+=' ON CONFLICT('+upsertKeys.join(',')+') DO UPDATE SET '+keys.filter(k=>!upsertKeys.includes(k)).map(k=>k+'=excluded.'+k).join(',');
    this.#prepare(sql).run(...keys.map(k=>row[k]));
  }
  #recover(sessionId:string) {
    try {
      if(canonical(schemaRows(this.#db,(sql:string)=>this.#prepare(sql)))!==getExpectedSchema()||this.#prepare('PRAGMA user_version').get().user_version!==1)throw Error('schema mismatch');
      const integrity=this.#prepare('PRAGMA integrity_check').all();if(integrity.length!==1||integrity[0].integrity_check!=='ok'||this.#prepare('PRAGMA foreign_key_check').all().length)throw Error('physical/FK integrity');
      let s=initialState(sessionId,this.#fixtureConfiguration);const commits=this.#rows('commit_record').sort((a:any,b:any)=>a.commit_seq-b.commit_seq);const accepted=this.#rows('accepted_request');
      for(const row of commits) {
        if(row.session_id!==sessionId||row.commit_seq!==s.commitSeq+1)throw Error('commit sequence');
        let u:any;
        if(row.source==='accepted-request') {
          const matches=accepted.filter((a:any)=>a.commit_seq===row.commit_seq);if(matches.length!==1)throw Error('accepted linkage');
          const a=matches[0];const parsed=parseInbound(new TextEncoder().encode(a.request_json));if(parsed.kind!=='request'||canonical(parsed.request)!==a.request_json)throw Error('request encoding');
          u=evaluateRequest(s,parsed.request);if(!u.accepted||canonical(acceptedRow(u.state,u.accepted))!==canonical(a))throw Error('original reply/state/digest mismatch');
        } else {const control=JSON.parse(row.control_json);if(canonical(control)!==row.control_json)throw Error('control encoding');u=evaluateControl(s,control);}
        if(canonical(commitRow(u))!==canonical(row))throw Error('commit metadata');s=u.state;
      }
      const equalRows=(table:string,expected:any[])=>{const norm=(rows:any[])=>rows.map(canonical).sort();if(canonical(norm(this.#rows(table)))!==canonical(norm(expected)))throw Error(table+' mismatch');};
      equalRows('session',[{session_id:sessionId,epoch:s.epoch,commit_seq:s.commitSeq,grants_json:canonical(s.grants)}]);
      equalRows('approval',approvals(s));equalRows('run',runs(s));equalRows('journal',journals(s));
      if(accepted.length!==s.accepted.length)throw Error('accepted count');return s;
    } catch(e:any){throw Error('journal_corrupt: '+e.message,{cause:e});}
  }
  #poisonO32(reason:string){
    this.#status='unavailable';if(this.#sameStoreCapability)failSameStore(this.#sameStoreCapability);if(this.#cleanCapability)failCleanAdmission(this.#cleanCapability);uncertainStores.add(this);
    this.failureEvidence={uncertain:true,o32Fault:true,reason};
  }
  abortO32Fault(){if(!this.#o32Fault)throw Error('no O32 fault armed');this.#poisonO32('fault-observation-incomplete');}
  armO32Fault(callback:(witness:any)=>unknown){
    this.#ready();assertO32FaultOwner(this.#sameStoreCapability);
    try{
      if(this.#o32Fault||typeof callback!=='function')throw Error('one-use O32 fault arm');
      if(canonical(this.#state)!==canonical(O32.prefix)||this.#db.isTransaction)throw Error('O32 committed-prefix arm differs');
      this.#o32Fault={callback,used:false,cacheSize:1,cacheSpill:1};
      this.#db.exec('PRAGMA main.cache_size=1');this.#db.exec('PRAGMA cache_spill=ON');this.#db.exec('PRAGMA main.cache_spill=1');
      const cacheSize=this.#prepare('PRAGMA main.cache_size').get().cache_size,cacheSpill=this.#prepare('PRAGMA main.cache_spill').get().cache_spill;
      if(cacheSize!==1||cacheSpill!==1||this.#db.isTransaction)throw Error('O32 cache settings not observed');
      return Object.freeze({cacheSize,cacheSpill,transactionOpen:false});
    }catch(error){this.#poisonO32('fault-arm-failed');throw error;}
  }
  commit(u:any) {
    this.#ready();try{this.assertFixtureManifest();if(!u.source||u.before.commitSeq!==this.#state.commitSeq||canonical(u.before)!==canonical(this.#state)||u.state.commitSeq!==this.#state.commitSeq+1)throw Error('invalid commit predecessor');}catch(error){if(this.#o32Fault)this.#poisonO32('fault-predecessor-invalid');throw error;}
    let committed=false,sqlOperation='begin-immediate';
    try {
      if(this.#o32Fault&&(this.#o32Fault.used||canonical(u)!==canonical(O32.transition)))throw Error('fixed O32 cancel subject differs');
      this.#db.exec('BEGIN IMMEDIATE');sqlOperation='commit-record-insert';this.#insert('commit_record',commitRow(u));
      sqlOperation='approval-upsert';for(const row of approvals(u.state))if(row.last_commit_seq===u.state.commitSeq)this.#insert('approval',row,['session_id','approval_id','revision']);
      sqlOperation='run-upsert';for(const row of runs(u.state))if(row.last_commit_seq===u.state.commitSeq)this.#insert('run',row,['session_id','run_id']);
      sqlOperation='journal-insert';for(const row of journals(u.state).filter((r:any)=>r.commit_seq===u.state.commitSeq))this.#insert('journal',row);
      sqlOperation='accepted-request-insert';if(u.accepted)this.#insert('accepted_request',acceptedRow(u.state,u.accepted));
      sqlOperation='session-update';
      this.#prepare('UPDATE session SET epoch=?,commit_seq=?,grants_json=? WHERE session_id=?').run(u.state.epoch,u.state.commitSeq,canonical(u.state.grants),u.state.sessionId);
      if(this.#o32Fault){
        const fault=this.#o32Fault;if(!this.#db.isTransaction)throw Error('O32 transaction not open');fault.used=true;
        const witness=Object.freeze({transactionOpen:true,committedStateSha256:digest(this.#state),pendingStateSha256:digest(u.state),cacheSize:fault.cacheSize,cacheSpill:fault.cacheSpill});
        this.#poisonO32('before-commit-interruption');fault.callback(witness);
        throw Error('O32 interruption callback returned');
      }
      sqlOperation='commit';this.#db.exec('COMMIT');committed=true;if(this.#db.isTransaction)throw Error('COMMIT did not reach autocommit');
      if(u.state.commitSeq%256===0){sqlOperation='checkpoint';this.#checkpoint();}
      sqlOperation='state-publication';this.#state=structuredClone(u.state);
    } catch(e:any) {
      const base=Number(e.errcode)&255;let rollbackVerified=false;let uncertain=this.#o32Fault!==null||committed||sqlOperation==='commit'||sqlOperation==='checkpoint'||[10,11,13,26].includes(base);
      if(!uncertain)try {if(this.#db.isTransaction)this.#db.exec('ROLLBACK');rollbackVerified=!this.#db.isTransaction;if(!rollbackVerified)throw Error('rollback not autocommit');}catch{uncertain=true;}
      this.failureEvidence={committed,rollbackVerified,uncertain,sqlOperation,message:e.message,sqliteCode:e.errcode??null};
      if(uncertain){if(this.#sameStoreCapability)failSameStore(this.#sameStoreCapability);if(this.#cleanCapability)failCleanAdmission(this.#cleanCapability);if(this.#o32Fault)this.#poisonO32('fault-transaction-incomplete');this.#status='unavailable';uncertainStores.add(this);throw Error('store unavailable: retained uncertainty',{cause:e});}
      this.#status='retired';try{this.#db.close();this.#release();this.#statements.clear();}catch(closeError:any){if(this.#sameStoreCapability)failSameStore(this.#sameStoreCapability);if(this.#cleanCapability)failCleanAdmission(this.#cleanCapability);this.#status='unavailable';uncertainStores.add(this);this.failureEvidence.uncertain=true;this.failureEvidence.closeError=closeError.message;throw Error('store unavailable: retirement failed',{cause:closeError});}
      throw Error('store retired: transaction rolled back',{cause:e});
    }
  }
  #checkpoint() {
    const r=this.#prepare('PRAGMA wal_checkpoint(FULL)').get();
    if(r.busy!==0||r.log!==r.checkpointed)throw Error('checked checkpoint incomplete');this.checkpointCount++;
  }
  #release(){const owner=JSON.parse(readFileSync(this.#marker,'utf8'));if(owner.nonce!==this.#token)throw Error('writer ownership changed');unlinkSync(this.#marker);}
  close(){this.#ready();if(this.#o32Fault){this.#poisonO32('fault-close-forbidden');throw Error('armed O32 Store retained');}try{this.#checkpoint();this.#db.close();this.#release();this.#statements.clear();if(this.#sameStoreCapability){markSameStoreClosed(this.#sameStoreCapability);uncertainStores.delete(this);}if(this.#cleanCapability){markCleanStoreClosed(this.#cleanCapability);uncertainStores.delete(this);}this.#status='closed';}catch(e){if(this.#sameStoreCapability)failSameStore(this.#sameStoreCapability);if(this.#cleanCapability)failCleanAdmission(this.#cleanCapability);this.#status='unavailable';uncertainStores.add(this);throw e;}}
}


