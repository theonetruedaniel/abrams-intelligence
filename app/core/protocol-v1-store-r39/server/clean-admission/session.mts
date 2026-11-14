import {lstatSync,realpathSync,openSync,fstatSync,readSync,closeSync,writeFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join} from 'node:path';
import {canonical} from '../reference-core/shared/mock-core/state.mts';
import {normalizeFixtureConfiguration} from '../reference-core/shared/mock-core/fixture-configuration.mts';
import {O38} from '../o38-registration.mts';
import {validateCleanBinding,exact,isCleanRoot} from './schema.mts';
export {isCleanRoot};
const hash=(b:Uint8Array|string)=>createHash('sha256').update(b).digest('hex');
type State={binding:any,active:boolean,phase:string,manifest:string,closeRequested:boolean,openedReported:boolean,closeWaited:boolean,closeWaiters:Array<{resolve:()=>void,reject:(e:Error)=>void}>};
const states=new WeakMap<object,State>();let attempted=false;
function state(cap:any):State{const s=cap&&typeof cap==='object'?states.get(cap):undefined;if(!s||!s.active)throw Error('clean admission inactive or forged');return s;}
function plain(path:string,anchor:string){
  if(path!==anchor&&!path.startsWith(anchor+'\\'))throw Error('clean path scope');
  for(const part of path.slice(3).split('\\'))if(!/^[A-Za-z0-9 _.-]+$/.test(part)||part==='.'||part==='..'||part.endsWith('.')||part.endsWith(' '))throw Error('clean path segment');
  // The retained owner checks all ancestors on its native file observations.
  // This child checks the canonical anchor and every granted descendant without
  // expanding its read permission to unrelated ancestor directories.
  const check=(p:string)=>{const st=lstatSync(p);if((p===anchor&&!st.isDirectory())||st.isSymbolicLink()||realpathSync(p)!==p)throw Error('clean path alias');};
  let p=anchor;check(p);if(path!==anchor)for(const part of path.slice(anchor.length+1).split('\\')){p=join(p,part);check(p);}
}
function bytes(path:string,max:number,anchor:string){
  plain(path,anchor);if(!lstatSync(path).isFile())throw Error('clean evidence not file');const fd=openSync(path,'r');
  try{const st=fstatSync(fd,{bigint:true});if(!st.isFile()||st.size<0n||st.size>BigInt(max))throw Error('clean evidence bound');const b=Buffer.alloc(Number(st.size));let o=0;while(o<b.length){const n=readSync(fd,b,o,b.length-o,o);if(n<=0)throw Error('clean evidence short');o+=n;}const tail=Buffer.alloc(1);if(readSync(fd,tail,0,1,b.length)!==0)throw Error('clean evidence growth');const end=fstatSync(fd,{bigint:true});plain(path,anchor);const at=lstatSync(path,{bigint:true});for(const k of ['dev','ino','size','mtimeNs','ctimeNs'] as const)if(st[k]!==end[k]||end[k]!==at[k])throw Error('clean evidence identity changed');return b;}finally{closeSync(fd);}
}
function json(path:string,max:number,anchor:string){const b=bytes(path,max,anchor);const t=new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(b);const v=JSON.parse(t);if(canonical(v)!==t)throw Error('clean evidence noncanonical');return {b,v,t};}
function readEvidence(b:any,consumerPresent=false):string {
  const dir=join(b.anchor,b.batch);plain(dir,b.anchor);plain(b.root,b.anchor);
  const inv=json(join(dir,'inventory.json'),2097152,b.anchor),v=inv.v;
  if(hash(inv.b)!==b.inventorySha256||!exact(v,['format','version','batch','roots'])||v.format!=='abrams-owner-fixture-inventory'||v.version!==1||v.batch!==b.batch||!Array.isArray(v.roots)||v.roots.length!==1)throw Error('clean inventory');
  const row=v.roots[0];if(!exact(row,['root','group','bytes','sha256','configurationDigest','manifestBase64'])||row.root!=='root-0000'||row.group!=='configuration-capacity'||!Number.isSafeInteger(row.bytes)||row.bytes<1||row.bytes>65536||typeof row.manifestBase64!=='string'||row.manifestBase64.length>87384||!/^[a-f0-9]{64}$/.test(row.configurationDigest))throw Error('clean inventory row');
  const manifest=Buffer.from(row.manifestBase64,'base64');if(manifest.toString('base64')!==row.manifestBase64||manifest.length!==row.bytes||hash(manifest)!==row.sha256||row.sha256!==b.manifestSha256)throw Error('clean manifest pin');
  const actual=json(join(b.root,'fixture-manifest.json'),65536,b.anchor),m=actual.v;
  const config=normalizeFixtureConfiguration(O38.inputConfiguration);
  if(!actual.b.equals(manifest)||!exact(m,['format','version','sessionId','configuration','configurationDigest'])||m.format!=='abrams-owned-fixture-manifest'||m.version!==1||typeof m.sessionId!=='string'||!/^[A-Za-z0-9_-]{1,64}$/.test(m.sessionId)||canonical(m.configuration)!==canonical(config)||m.configurationDigest!==hash(canonical(config))||m.configurationDigest!==row.configurationDigest)throw Error('clean exact H manifest');
  const receipt=json(join(dir,'flush-receipt.json'),262144,b.anchor);if(hash(receipt.b)!==b.flushReceiptSha256||canonical(receipt.v)!==canonical({format:'abrams-owner-flush-receipt',version:1,batch:b.batch,inventorySha256:b.inventorySha256,files:[{root:row.root,bytes:row.bytes,sha256:row.sha256,configurationDigest:row.configurationDigest}]}))throw Error('clean receipt');
  if(canonical(readdirSync(dir).sort())!==canonical(consumerPresent?['flush-receipt.json','inventory.json','root-0000','run-consumer.json']:['flush-receipt.json','inventory.json','root-0000'])||canonical(readdirSync(b.root).sort())!==canonical(['fixture-manifest.json']))throw Error('clean root not fresh');
  return actual.t;
}
export async function startCleanBootstrap(expected:any):Promise<{capability:object,root:string,binding:any}> {
  if(attempted)throw Error('clean bootstrap already attempted');attempted=true;
  const binding=validateCleanBinding(expected,process.pid),cap=Object.freeze({}),s:State={binding,active:true,phase:'waiting',manifest:'',closeRequested:false,openedReported:false,closeWaited:false,closeWaiters:[]};states.set(cap,s);
  return await new Promise((resolve,reject)=>{
    let buffer=Buffer.alloc(0),received=false,settled=false;
    const fail=()=>{if(s.phase==='finished')return;s.active=false;s.phase='uncertain';for(const w of s.closeWaiters.splice(0))w.reject(Error('clean owner channel unavailable'));if(!settled){settled=true;reject(Error('clean owner channel unavailable or invalid'));}};
    process.stdin.on('end',fail);process.stdin.on('close',fail);process.stdin.on('error',fail);process.stdout.on('error',fail);
    process.stdin.on('data',(chunk:Buffer)=>{
      if(!s.active)return;
      if(!Buffer.isBuffer(chunk)||buffer.length+chunk.length>16384){fail();return;}buffer=Buffer.concat([buffer,chunk]);const end=buffer.indexOf(10);if(end<0)return;
      if(end!==buffer.length-1){fail();return;}
      try{const t=new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(buffer.subarray(0,end));const msg=JSON.parse(t);if(canonical(msg)!==t)throw Error('clean control noncanonical');buffer=Buffer.alloc(0);
        if(received){if(s.phase!=='store-opened'||!s.openedReported||s.closeRequested||!exact(msg,['type','id','nonce'])||msg.type!=='clean-close'||msg.id!==2||msg.nonce!==binding.nonce)throw Error('clean close mismatch');s.closeRequested=true;for(const w of s.closeWaiters.splice(0))w.resolve();return;}
        received=true;if(!exact(msg,['type','id','binding'])||msg.type!=='clean-grant'||msg.id!==1||canonical(validateCleanBinding(msg.binding,process.pid))!==canonical(binding))throw Error('clean grant mismatch');
        s.phase='consumer-creating';s.manifest=readEvidence(binding);
        // Irreversible even if creation or acknowledgement reports failure.
        writeFileSync(join(binding.anchor,binding.batch,'run-consumer.json'),canonical({batch:binding.batch,inventorySha256:binding.inventorySha256,pid:process.pid}),{flag:'wx'});
        s.phase='consumer-created';process.stdout.write(canonical({type:'clean-grant-ack',id:1,nonce:binding.nonce})+'\n',(error)=>{if(error||!s.active){fail();return;}if(settled)return;settled=true;resolve({capability:cap,root:binding.root,binding});});
      }catch{fail();}
    });process.stdin.resume();
  });
}
export function consumeCleanStoreAdmission(cap:any,root:string,manifestBytes:string):any {
  const s=state(cap);if(s.phase!=='consumer-created'||root!==s.binding.root||manifestBytes!==s.manifest)throw Error('clean Store admission mismatch or consumed');
  s.phase='store-opening';
  try{const consumer=json(join(s.binding.anchor,s.binding.batch,'run-consumer.json'),1024,s.binding.anchor);
  if(canonical(consumer.v)!==canonical({batch:s.binding.batch,inventorySha256:s.binding.inventorySha256,pid:process.pid})||readEvidence(s.binding,true)!==manifestBytes)throw Error('clean Store evidence changed');}catch(e){failCleanAdmission(cap);throw e;}
  return {batch:s.binding.batch,inventorySha256:s.binding.inventorySha256,flushReceiptSha256:s.binding.flushReceiptSha256,root:'root-0000',scope:'trusted participating clean owner; no hostile writer exclusion'};
}
export function assertCleanAdmissionActive(cap:any):void{const s=state(cap);if(!['store-opening','store-opened'].includes(s.phase))throw Error('clean Store phase');}
export function readCleanFixtureManifest(cap:any):Buffer{const s=state(cap);assertCleanAdmissionActive(cap);return bytes(join(s.binding.root,'fixture-manifest.json'),65536,s.binding.anchor);}
export function failCleanAdmission(cap:any):void{const s=cap&&typeof cap==='object'?states.get(cap):undefined;if(s){s.active=false;s.phase='uncertain';}}
export function markCleanStoreOpened(cap:any):void{const s=state(cap);if(s.phase!=='store-opening')throw Error('clean Store opened phase');s.phase='store-opened';}
export function markCleanStoreClosed(cap:any):void{const s=state(cap);if(s.phase!=='store-opened')throw Error('clean Store close phase');s.phase='store-closed';}
function sendPacket(cap:any,packet:any):Promise<void>{const s=state(cap);return new Promise((resolve,reject)=>{try{process.stdout.write(canonical(packet)+'\n',error=>{if(error||!s.active){failCleanAdmission(cap);reject(Error('clean acknowledgement uncertain'));return;}resolve();});}catch{failCleanAdmission(cap);reject(Error('clean acknowledgement uncertain'));}});}
export async function reportCleanStoreOpened(cap:any):Promise<void>{const s=state(cap);if(s.phase!=='store-opened'||s.openedReported)throw Error('clean Store not opened or already reported');s.openedReported=true;await sendPacket(cap,{type:'clean-store-opened',id:2,nonce:s.binding.nonce});}
export async function waitCleanCloseRequest(cap:any):Promise<void>{const s=state(cap);if(s.phase!=='store-opened'||s.closeWaited)throw Error('clean close wait phase');s.closeWaited=true;if(s.closeRequested)return;await new Promise<void>((resolve,reject)=>s.closeWaiters.push({resolve,reject}));}
export async function finishCleanSession(cap:any):Promise<void>{const s=state(cap);if(s.phase!=='store-closed'||!s.closeRequested)throw Error('clean Store not closed after close request');await sendPacket(cap,{type:'clean-closed',id:3,nonce:s.binding.nonce});s.phase='finished';s.active=false;process.stdin.pause();const input=process.stdin as typeof process.stdin&{unref?:()=>void};if(typeof input.unref==='function')input.unref();}
