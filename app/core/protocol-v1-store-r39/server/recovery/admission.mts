import {createHash} from 'node:crypto';
import {win32} from 'node:path';
import {inspectUncommittedSuffix} from './wal-boundary.mts';
import {canonical} from '../reference-core/shared/mock-core/state.mts';
const anchor='C:\\abrams-synthetic\\abrams-o32-wal-source-r18-20261109\\synthetic-only';
const uuid='[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}';
const check=(v:any)=>{if(!v)throw Error('same-store recovery admission unproven');};
const hash=(b:Uint8Array|string)=>createHash('sha256').update(b).digest('hex');
const exact=(v:any,keys:string[])=>v&&typeof v==='object'&&!Array.isArray(v)&&Object.keys(v).sort().join(',')===[...keys].sort().join(',');
const identity=(v:any)=>exact(v,['pid','birth'])&&Number.isSafeInteger(v.pid)&&v.pid>0&&v.pid<=0xffffffff&&typeof v.birth==='string'&&/^[1-9][0-9]{0,19}$/.test(v.birth)&&BigInt(v.birth)<=0xffffffffffffffffn;
function synchronous(v:any){check(!v||typeof v.then!=='function');return v;}
const sha=(s:any)=>typeof s==='string'&&/^[a-f0-9]{64}$/.test(s);
type State={binding:any,phase:string,channel:any,io:any,active:boolean,manifest:string};
const states=new WeakMap<object,State>();const attemptedChannels=new WeakSet<object>();
function consumerBody(binding:any){const body={...binding};delete body.consumerSha256;return body;}
export function isSameStoreRoot(root:any){return typeof root==='string'&&new RegExp('^'+anchor.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\\\same-store-v1-'+uuid+'\\\\root-0000$').test(root);}
function get(cap:any){const s=cap&&typeof cap==='object'?states.get(cap):undefined;check(s&&s.active);return s!;}
function raw(s:State,path:string,max:number){const b=s.io.read(path,max);check(b instanceof Uint8Array&&b.length<=max);return Buffer.from(b);}
function json(s:State,path:string,max:number){const b=raw(s,path,max),text=new TextDecoder('utf-8',{fatal:true}).decode(b),v=JSON.parse(text);check(canonical(v)===text);return {bytes:b,text,value:v};}
function verify(s:State){
 s.channel.assertActive();check(s.channel.owner.pid===s.binding.owner.pid&&s.channel.owner.birth===s.binding.owner.birth);
 const b=s.binding,manifest=raw(s,win32.join(b.root,'fixture-manifest.json'),65536);check(hash(manifest)===b.manifestSha256);
 const consumer=json(s,win32.join(win32.dirname(b.root),'consumer-'+b.generation+'.json'),16384);check(hash(consumer.bytes)===b.consumerSha256&&canonical(consumer.value)===canonical(consumerBody(b)));
 if(b.generation===2){
  const old=json(s,win32.join(b.root,'writer-owner.json'),1024);check(hash(old.bytes)===b.previous.markerSha256&&exact(old.value,['nonce','pid'])&&old.value.nonce===b.previous.markerNonce&&old.value.pid===b.previous.child.pid);
  const used=json(s,win32.join(win32.dirname(b.root),'generation-1-used.json'),1024);check(canonical(used.value)===canonical({attempt:b.attempt,generation:1,child:b.previous.child,consumerSha256:b.previous.consumerSha256}));
  const oldConsumer=json(s,win32.join(win32.dirname(b.root),'consumer-1.json'),16384),oc=oldConsumer.value;
  check(exact(oc,['format','version','caseId','attempt','root','sessionId','manifestSha256','owner','child','generation','nonce','previous']));
  check(hash(oldConsumer.bytes)===b.previous.consumerSha256&&oc.format===b.format&&oc.version===1&&oc.caseId==='O32'&&oc.attempt===b.attempt&&oc.root===b.root&&oc.sessionId===b.sessionId&&oc.manifestSha256===b.manifestSha256&&oc.generation===1&&oc.previous===null&&canonical(oc.owner)===canonical(b.owner)&&canonical(oc.child)===canonical(b.previous.child)&&sha(oc.nonce));
  check(s.io.exists(win32.join(b.root,'mock-core.db'))&&s.io.fileIdentity(win32.join(b.root,'mock-core.db'))===b.previous.dbIdentity);
  const wal=win32.join(b.root,'mock-core.db-wal');check(s.io.exists(wal)===(b.previous.walIdentity!==null));if(b.previous.walIdentity!==null)check(s.io.fileIdentity(wal)===b.previous.walIdentity);
  const receipt=json(s,win32.join(win32.dirname(b.root),'death-1.json'),4096),control=json(s,win32.join(win32.dirname(b.root),'control-1-interrupted.json'),4096),d={...b.previous.death};delete d.receiptSha256;
  check(hash(receipt.bytes)===b.previous.death.receiptSha256&&canonical(receipt.value)===canonical({format:'abrams-o32-owned-death',version:1,attempt:b.attempt,owner:b.owner,...d,controlSha256:hash(control.bytes)}));
  check(control.value.format==='abrams-o32-boundary'&&control.value.stage==='interrupted-before-commit'&&control.value.sourceSha256==='bc7a28ebf6f833c7f3be6af7782964f1c1009f4319e8d0df587c2f116d9b9e51');
  const before=raw(s,win32.join(win32.dirname(b.root),'o32-wal-before.bin'),1048576),saved=raw(s,win32.join(win32.dirname(b.root),'o32-wal-observed.bin'),1048576),physical=raw(s,win32.join(b.root,'mock-core.db-wal'),1048576);
  check(hash(before)===b.previous.death.walBeforeSha256&&hash(saved)===b.previous.death.walAfterDeathSha256&&hash(physical)===b.previous.death.walAfterDeathSha256&&canonical(inspectUncommittedSuffix(before,physical))===canonical(control.value.wal));
 }
 return manifest.toString('utf8');
}
export async function startSameStoreAdmission(expected:any,channel:any,io:any,currentPid:number){
 // This is a trusted pinned-worker bootstrap, not an authority factory for models.
 // A native owner/channel producer remains required; data validation is not death proof.
 check(channel&&typeof channel==='object'&&!attemptedChannels.has(channel));attemptedChannels.add(channel);
 const expectedBytes=canonical(expected);check(Buffer.byteLength(expectedBytes)<=16384);expected=JSON.parse(expectedBytes);
 check(exact(expected,['format','version','caseId','attempt','root','sessionId','manifestSha256','owner','child','generation','nonce','previous','consumerSha256'])&&expected.format==='abrams-same-store-binding'&&expected.version===1&&expected.caseId==='O32'&&new RegExp('^'+uuid+'$').test(expected.attempt)&&isSameStoreRoot(expected.root)&&expected.root===win32.join(anchor,'same-store-v1-'+expected.attempt,'root-0000')&&typeof expected.sessionId==='string'&&/^[A-Za-z0-9_-]{1,64}$/.test(expected.sessionId)&&identity(expected.owner)&&identity(expected.child)&&expected.owner.pid!==expected.child.pid&&expected.child.pid===currentPid&&[1,2].includes(expected.generation)&&sha(expected.manifestSha256)&&sha(expected.nonce)&&sha(expected.consumerSha256));
 if(expected.generation===1)check(expected.previous===null);else{
  const p=expected.previous;check(exact(p,['child','markerNonce','markerSha256','consumerSha256','dbIdentity','walIdentity','death'])&&identity(p.child)&&p.child.pid!==currentPid&&new RegExp('^'+uuid+'$').test(p.markerNonce)&&sha(p.markerSha256)&&sha(p.consumerSha256)&&typeof p.dbIdentity==='string'&&p.dbIdentity.length<=128&&(p.walIdentity===null||typeof p.walIdentity==='string'&&p.walIdentity.length<=128));
  const d=p.death;check(exact(d,['child','exitCode','totalProcesses','activeProcesses','terminatedByLimit','requestEof','acknowledgementBytes','receiptSha256','walBeforeSha256','walAfterDeathSha256'])&&canonical(d.child)===canonical(p.child)&&d.exitCode===77&&d.totalProcesses===1&&d.activeProcesses===0&&d.terminatedByLimit===0&&d.requestEof===true&&d.acknowledgementBytes===0&&sha(d.receiptSha256)&&sha(d.walBeforeSha256)&&sha(d.walAfterDeathSha256));
 }
 check(channel&&typeof channel.receiveGrant==='function'&&typeof channel.assertActive==='function'&&identity(channel.owner)&&io&&['read','exists','fileIdentity','writeNew','list'].every(k=>typeof io[k]==='function'));
 let state:State|undefined;
 function checked(call:()=>any){if(state)check(state.active);const phase=state?.phase;const value=synchronous(call());if(state)check(state.active&&state.phase===phase);return value;}
 const active=channel.assertActive.bind(channel),receive=channel.receiveGrant.bind(channel),owner={...channel.owner};
 const heldChannel={owner,assertActive(){check(canonical(channel.owner)===canonical(owner));check(checked(active)===undefined);}};
 const heldIo:any={};for(const name of ['read','exists','fileIdentity','writeNew','list']){const call=io[name].bind(io);heldIo[name]=(...args:any[])=>{const value=checked(()=>call(...args));if(name==='writeNew')check(value===undefined);if(name==='exists')check(typeof value==='boolean');return value;};}
 const text=await receive();check(typeof text==='string'&&Buffer.byteLength(text)<=16384&&canonical(JSON.parse(text))===text&&text===expectedBytes);
 const capability=Object.freeze({}),s:State={binding:JSON.parse(expectedBytes),phase:'admitted',channel:heldChannel,io:heldIo,active:true,manifest:''};states.set(capability,s);
 state=s;
 try{s.manifest=verify(s);return capability;}catch(e){s.active=false;throw e;}
}
export function consumeSameStoreAdmission(cap:any,root:string,manifest:string){
 const s=get(cap);check(s.phase==='admitted');s.phase='opening';
 try{
  check(root===s.binding.root&&manifest===s.manifest&&verify(s)===manifest);
  if(s.binding.generation===1)check(canonical(s.io.list(root).sort())===canonical(['fixture-manifest.json']));
  else{const names=s.io.list(root);check(names.includes('mock-core.db')&&names.includes('writer-owner.json')&&names.every((n:string)=>['fixture-manifest.json','mock-core.db','mock-core.db-wal','mock-core.db-shm','writer-owner.json'].includes(n)));}
  // The owner seals consumer-N before the grant; constructor consumption is wx.
  s.io.writeNew(win32.join(win32.dirname(root),'generation-'+s.binding.generation+'-used.json'),canonical({attempt:s.binding.attempt,generation:s.binding.generation,child:s.binding.child,consumerSha256:s.binding.consumerSha256}));
  return {generation:s.binding.generation,existingRequired:s.binding.generation===2,writerMarker:s.binding.generation===1?'writer-owner.json':'writer-owner.recovery-1.json',scope:'trusted participating fresh owner; not protected snapshot or hostile-writer exclusion'};
 }catch(e){s.active=false;throw e;}
}
export function assertSameStoreActive(cap:any){const s=get(cap);try{check(['opening','opened'].includes(s.phase));s.channel.assertActive();}catch(e){s.active=false;throw e;}}
export function readSameStoreManifest(cap:any){const s=get(cap);assertSameStoreActive(cap);return raw(s,win32.join(s.binding.root,'fixture-manifest.json'),65536);}
export function markSameStoreOpened(cap:any){const s=get(cap);check(s.phase==='opening');s.phase='opened';}
export function markSameStoreClosed(cap:any){const s=get(cap);check(s.phase==='opened');s.phase='closed';s.active=false;}
export function failSameStore(cap:any){const s=states.get(cap);if(s)s.active=false;}

export function assertO32FaultOwner(cap:any){const s=get(cap);assertSameStoreActive(cap);check(s.phase==='opened'&&s.binding.caseId==='O32'&&s.binding.generation===1);}
