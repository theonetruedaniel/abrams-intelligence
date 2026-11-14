import {createSyntheticOwnerByteSession} from './owner/synthetic-owner-session.mts';
import {FRAME_LIMIT} from './owner/framing.mts';

// Explicit test-only entry. Importing the accepted owner modules does not start IO.
if(process.argv.length!==3||process.argv[2]!=='--synthetic-owned-pipe')throw Error('explicit_fixture_marker_required');
process.stdin.pause();
let receive=null,ended=null,subscribed=false,started=false,eof=false,failed=false,pump=null;
let session=null,finishing=null;
let resolveDone,rejectDone;
const done=new Promise((resolve,reject)=>{resolveDone=resolve;rejectDone=reject;});
const fail=()=>{
 failed=true;process.stdin.pause();
 if(!finishing)finishing=(async()=>{
  try{await session?.server.close();}catch{}
  process.stdin.removeListener('data',onData);process.stdin.removeListener('end',onEnd);process.stdin.removeListener('error',fail);
  process.stdin.destroy();process.stdout.destroy();rejectDone(Error('owned_pipe_failed'));
 })();
};
const onData=chunk=>{
 process.stdin.pause();
 if(!started||!subscribed||pump||failed||!Buffer.isBuffer(chunk)||chunk.byteLength>FRAME_LIMIT){fail();return;}
 const plain=new Uint8Array(chunk); // accepted channel requires plain nonshared bytes, not Buffer.
 const work=(async()=>{
  await receive(plain);
  // Fixed synthetic owner work, not a wire capability. Exactly one output per run.
  for(const id of ['A','B']){
   const run=session.owner.inspectState().runs.find(r=>r.runId===id);
   if(run?.state==='running'&&run.fixturePosition===0)session.owner.tick(id);
  }
 })();
 pump=work;
 void work.then(()=>{if(pump===work)pump=null;if(!failed&&!eof&&subscribed)process.stdin.resume();},()=>{if(pump===work)pump=null;fail();});
};
const onEnd=()=>{
 eof=true;
 if(finishing)return;
 finishing=(async()=>{
  if(pump)await pump;
  const before=JSON.stringify(session.owner.inspectState());
  ended?.();
  await session.server.close();
  const s=session.owner.inspectState(),t=session.owner.inspectTransport(),v=session.server.inspect();
  if(failed||t.active!==false||t.deliveryActive!==false||t.pending!==0||t.busy!==false||v.unknown||v.cleanupPending||subscribed||
     JSON.stringify(s)!==before||session.releaseProofs()!==t.generation)throw Error('owner_cleanup_state_changed_or_delivery_live');
  // No owner.shutdown/global Stop is hidden in local IPC cleanup.
  await new Promise((resolve,reject)=>process.stdout.end(error=>error?reject(error):resolve()));
  process.stdout.removeListener('error',fail);
  await new Promise((resolve,reject)=>process.stderr.write('OWNER_LOCAL_DELIVERY_RETIRED_STATE_UNCHANGED\n',error=>error?reject(error):resolve()));
  resolveDone();
 })();
 void finishing.catch(()=>{failed=true;rejectDone(Error('owner_finalization_failed'));});
};
const channel={binding:Object.freeze({}),
 async subscribe(r,e){
  if(subscribed)throw Error('duplicate_subscription');receive=r;ended=e;subscribed=true;
  return async()=>{
   subscribed=false;process.stdin.pause();
   process.stdin.removeListener('data',onData);process.stdin.removeListener('end',onEnd);process.stdin.removeListener('error',fail);
   if(pump)await pump;receive=null;ended=null;
  };
 },
 write(frame){
  if(failed||frame.byteLength>FRAME_LIMIT)return Promise.reject(Error('write_unavailable'));
  // Callback means pipe-write acceptance, never peer receipt. One write is outstanding.
  return new Promise((resolve,reject)=>process.stdout.write(frame,error=>error?reject(error):resolve()));
 }
};
try{
 process.stdout.on('error',fail);
 session=createSyntheticOwnerByteSession({testOnly:true,sessionId:'synthetic-rust-node-pipe',fixtureConfiguration:{version:1,H:{outputs:['pipe-output']}}},channel);
 for(const runId of ['A','B'])session.owner.approve({approvalId:'approval_'+runId,revision:1,runId,fixtureId:'H',epoch:1});
 await session.server.ready;
 started=true;process.stdin.on('data',onData);process.stdin.on('end',onEnd);process.stdin.on('error',fail);process.stdin.resume();
 await done;
}catch{
 process.exitCode=1;
 process.stderr.write('OWNER_PIPE_FAILURE\n');
 process.stdin.destroy();process.stdout.destroy();
}
