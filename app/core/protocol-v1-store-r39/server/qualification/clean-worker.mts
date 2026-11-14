import {readFileSync,lstatSync,realpathSync,existsSync,fstatSync,openSync,closeSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {canonical} from '../reference-core/shared/mock-core/state.mts';
import {startCleanBootstrap,reportCleanStoreOpened,waitCleanCloseRequest,finishCleanSession} from '../clean-admission/session.mts';
import {O38} from '../o38-registration.mts';
import {runOwnedO38} from '../o38-conductor.mts';
const source=dirname(dirname(fileURLToPath(import.meta.url))),sha=(v:any)=>createHash('sha256').update(v).digest('hex');
let stage='source-pins',nonce='',retainedCore:any,retainedSession:any;
const check=(v:any)=>{if(!v)throw Error('clean scratch worker assertion');};
const send=async(packet:any)=>{const line=canonical(packet)+'\n';check(Buffer.byteLength(line)<=262144);await new Promise<void>((resolve,reject)=>process.stdout.write(line,e=>e?reject(e):resolve()));};
function bounded(path:string,max:number){const st=lstatSync(path);check(st.isFile()&&!st.isSymbolicLink()&&realpathSync(path)===path&&st.size<=max);const b=readFileSync(path);check(b.length===st.size);return b;}
function evidenceIdentity(path:string){const fd=openSync(path,'r');try{const s=fstatSync(fd,{bigint:true});return {path,dev:s.dev.toString(),ino:s.ino.toString(),size:s.size.toString()};}finally{closeSync(fd);}}
try{
 check(process.argv.length===4&&process.permission!==undefined);const configBytes=bounded(process.argv[2],65536);check(sha(configBytes)===process.argv[3]);const config=JSON.parse(configBytes.toString('utf8'));nonce=config.nonce;
 const manifestBytes=bounded(join(source,'CHILD-SOURCE-PINS.json'),65536);check(sha(manifestBytes)===config.sourceSha256);const manifest=JSON.parse(manifestBytes.toString('utf8'));
 check(manifest.format==='abrams-clean-child-source'&&manifest.version===1&&manifest.files.length>=8&&manifest.files.length<=64);
 const seen=new Set();for(const row of manifest.files){check(typeof row.path==='string'&&/^[A-Za-z0-9._/-]+$/.test(row.path)&&!row.path.split('/').some((x:string)=>['','..','.'].includes(x))&&!seen.has(row.path));seen.add(row.path);check(sha(bounded(join(source,row.path),1048576))===row.sha256);}
 stage='waiting-binding';
 // Keep the first grant buffered. The parent publishes the protected expected
 // binding after native creation supplies the child's actual retained birth.
 await new Promise<void>((resolve,reject)=>{
  const clear=()=>{process.stdin.removeListener('readable',ready);process.stdin.removeListener('end',lost);process.stdin.removeListener('error',lost);};
  const ready=()=>{clear();process.stdin.readableEnded?reject(Error('owner lost')):resolve();};const lost=()=>{clear();reject(Error('owner lost'));};
  process.stdin.once('readable',ready);process.stdin.once('end',lost);process.stdin.once('error',lost);
 });
 const expectedBytes=bounded(config.expectedBindingPath,8192),expected=JSON.parse(expectedBytes.toString('utf8'));check(canonical(expected)===expectedBytes.toString('utf8')&&expected.nonce===nonce&&expected.sourceSha256===config.sourceSha256&&expected.anchor===config.anchor);
 stage='grant';retainedSession=await startCleanBootstrap(expected);
 stage='reader-identity';const identities=[join(expected.anchor,expected.batch,'inventory.json'),join(expected.root,'fixture-manifest.json'),join(expected.anchor,expected.batch,'flush-receipt.json')].map(evidenceIdentity);
 stage='constructor-denials';
 const {SQLiteStore}=await import('../reference-core/shared/store-sqlite/store.mts');
 const {DurableCore}=await import('../reference-core/shared/mock-core/core.mts');
 const options={root:expected.root,sessionId:'synthetic-session',fixtureConfiguration:O38.inputConfiguration};
 let denied=0;for(const create of [()=>new SQLiteStore({...options,cleanCapability:{}}),()=>SQLiteStore.open({...options,cleanCapability:{}}),()=>DurableCore.open(options)]){try{create();}catch{denied++;}}
 check(denied===3&&!existsSync(join(expected.root,'writer-owner.json'))&&!existsSync(join(expected.root,'mock-core.db')));
 stage='real-store';retainedCore=DurableCore.open({...options,cleanCapability:retainedSession.capability});
 check(canonical(retainedCore.configuration)===canonical({journalMode:'wal',synchronous:2,foreignKeys:1,trustedSchema:0,autoCheckpoint:0}));
 stage='capacity';const observation=runOwnedO38(retainedCore),state=retainedCore.inspectState();check(canonical(state)===canonical(O38.final)&&retainedCore.checkpointCount===0);
 await reportCleanStoreOpened(retainedSession.capability);
 await send({type:'clean-worker-evidence',id:4,nonce,deniedConstructors:denied,identities,stateSha256:sha(canonical(state)),configuration:retainedCore.configuration,observation});
 stage='waiting-close';await waitCleanCloseRequest(retainedSession.capability);
 stage='store-close';retainedCore.close();check(!existsSync(join(expected.root,'writer-owner.json'))&&retainedCore.checkpointCount===1);
 let reopenDenied=false;try{new SQLiteStore({...options,cleanCapability:retainedSession.capability});}catch{reopenDenied=true;}check(reopenDenied);
 await send({type:'clean-close-evidence',id:5,nonce,checkpointCount:retainedCore.checkpointCount,writerMarkerAbsent:true,reopenDenied});
 await finishCleanSession(retainedSession.capability);stage='finished';
}catch(error:any){
 const safe=(v:any)=>typeof v==='string'&&/^[A-Za-z0-9_:-]{1,80}$/.test(v)?v:'other';process.stderr.write(JSON.stringify({stage,name:safe(error?.name),code:safe(error?.code),syscall:safe(error?.syscall)})+'\n');
 process.stdout.write(canonical({type:'clean-uncertain',stage,nonce})+'\n');
 // Deliberately retain state and a live owned process for explicit owner action.
 process.stdin.resume();setInterval(()=>{},1000);
}
