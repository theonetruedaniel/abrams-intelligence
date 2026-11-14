import test from 'node:test';
import assert from 'node:assert/strict';
import {createOwnedReferenceCoreTransport} from './owned-reference-core-transport.mts';
import {createShellCoreAdapter} from './shell-core-adapter.mts';
const enc=(v:unknown)=>new TextEncoder().encode(JSON.stringify(v));
const turn=()=>new Promise(r=>setTimeout(r,0));
const intent=(runId='A')=>({runId,fixtureId:'H',approvalId:'approval_'+runId,approvalRevision:1});
const construct=()=>createOwnedReferenceCoreTransport({testOnly:true,sessionId:'synthetic-owned-transport',fixtureConfiguration:{version:1,H:{outputs:['owned-output']}}});
const approve=(o:ReturnType<typeof construct>,runId='A')=>o.owner.approve({approvalId:'approval_'+runId,revision:1,runId,fixtureId:'H',epoch:o.owner.inspectState().epoch});
const request=(type='health',payload:unknown={},requestId='q')=>enc({v:1,type,requestId,payload});
test('owner construction supplies a frozen renderer-only byte port',()=>{
 const owned=construct();
 assert.ok(owned,'owner construction is implemented');
 assert.ok(Object.isFrozen(owned.port));
 assert.deepEqual(Object.keys(owned.port).sort(),['protocol','binding','openEvents','request'].sort());
});
test('construction rejects non-synthetic inputs',()=>{
 assert.throws(()=>createOwnedReferenceCoreTransport({testOnly:false,sessionId:'synthetic-bad'} as any));
 assert.throws(()=>createOwnedReferenceCoreTransport({testOnly:true,sessionId:'real-session'}));
});
test('full shell adapter follows actual owner approval, output, cancel and Stop',async()=>{
 const o=construct(),a=createShellCoreAdapter(o.port);assert.equal(await a.reconnect(),true);
 approve(o);approve(o,'B');assert.equal(await a.startMockRun(intent()),true);assert.equal(await a.startMockRun(intent('B')),true);
 o.owner.tick('A');assert.equal(a.snapshot().view.cursor,3);assert.equal(await a.cancel('A'),true);assert.equal(await a.globalStop(),true);
 assert.deepEqual(a.snapshot().view.runs,{A:'cancelled',B:'stopped'});assert.equal(o.owner.inspectState().epoch,2);
 a.shutdown();await turn();assert.equal(o.owner.inspectTransport().deliveryActive,false);assert.equal(a.snapshot().cleanupPending,false);
});
test('missing approval is denied by actual Core, with no retry or invented run',async()=>{
 const o=construct(),a=createShellCoreAdapter(o.port);await a.reconnect();assert.equal(await a.startMockRun(intent()),false);await turn();
 const before=o.owner.inspectState();assert.equal(await a.startMockRun(intent()),false);assert.deepEqual(o.owner.inspectState(),before);assert.equal(before.runs.length,0);
});
test('owner revoke emits end, retires adapter and cannot manufacture terminal state',async()=>{
 const o=construct(),a=createShellCoreAdapter(o.port);await a.reconnect();approve(o);await a.startMockRun(intent());o.owner.revoke('cancel');await turn();
 assert.equal(a.snapshot().connected,false);assert.equal(a.snapshot().cleanupPending,false);assert.equal(await a.cancel('A'),false);assert.equal(o.owner.inspectState().runs[0].state,'running');
 assert.equal(o.owner.inspectTransport().pending,0);
});
test('closed lease rejects old requests even though raw LocalChannel authenticates old context',async()=>{
 const o=construct(),close=await o.port.openEvents(1,()=>true,()=>{});await close();const before=o.owner.inspectState();
 await assert.rejects(o.port.request(request(),1));assert.deepEqual(o.owner.inspectState(),before);assert.equal(o.owner.inspectTransport().deliveryActive,false);
});
test('wrong generations and overlapping subscriptions leave original lease intact',async()=>{
 const o=construct(),close=await o.port.openEvents(1,()=>true,()=>{});const before=o.owner.inspectState();
 await assert.rejects(o.port.openEvents(2,()=>true,()=>{}));await assert.rejects(o.port.request(request(),2));assert.deepEqual(o.owner.inspectState(),before);
 assert.equal(JSON.parse(new TextDecoder().decode(await o.port.request(request(),1))).ok,true);await close();
});
test('release is idempotent, verified and old release cannot close replacement',async()=>{
 const o=construct(),close=await o.port.openEvents(1,()=>true,()=>{});const first=close();assert.equal(close(),first);await first;
 const next=await o.port.openEvents(2,()=>true,()=>{});await close();assert.equal(o.owner.inspectTransport().active,true);await next();
 assert.deepEqual(o.owner.inspectTransport(),{active:false,busy:false,disposed:false,uncertain:false,generation:2,deliveryActive:false,pending:0});
});
test('generation skip, reuse and invalid acquisition cannot replace authority',async()=>{
 const o=construct();for(const g of [0,2,NaN,2147483648])await assert.rejects(o.port.openEvents(g,()=>true,()=>{}));
 const close=await o.port.openEvents(1,()=>true,()=>{});await close();await assert.rejects(o.port.openEvents(1,()=>true,()=>{}));const next=await o.port.openEvents(2,()=>true,()=>{});await next();
});
test('explicit adapter disconnect and reconnect replay reference state with next generation',async()=>{
 const o=construct(),a=createShellCoreAdapter(o.port);await a.reconnect();approve(o);await a.startMockRun(intent());a.disconnect();await turn();o.owner.tick('A');
 assert.equal(await a.reconnect(),true);assert.equal(a.snapshot().view.cursor,2);assert.equal(o.owner.inspectTransport().generation,2);a.shutdown();await turn();
});
test('replacement adapter cannot reset generation or bypass an active owner lease',async()=>{
 const o=construct(),a=createShellCoreAdapter(o.port);await a.reconnect();const b=createShellCoreAdapter(o.port);assert.equal(await b.reconnect(),false);
 assert.equal(a.snapshot().connected,true);assert.equal(b.snapshot().cleanupPending,true);a.shutdown();await turn();
 const c=createShellCoreAdapter(o.port);assert.equal(await c.reconnect(),false);assert.equal(o.owner.inspectTransport().generation,1);
});
test('reentrant event requests and controls are rejected before Core mutation',async()=>{
 const o=construct();approve(o);let nested:Promise<unknown>|null=null,calls=0;
 const close=await o.port.openEvents(1,()=>{calls++;nested=o.port.request(request('global-stop',{expectedEpoch:1},'nested'),1);assert.throws(()=>o.owner.tick('A'));assert.throws(()=>o.owner.pump());return true;},()=>{});
 await o.port.request(request('start-mock-run',{...intent(),expectedEpoch:1}),1);await assert.rejects(nested!);assert.equal(calls,1);assert.equal(o.owner.inspectState().epoch,1);assert.equal(o.owner.inspectState().journal.length,1);await close();
});
test('reentrant release closes only after callback exits and blocks replacement',async()=>{
 const o=construct();approve(o);let close!:()=>Promise<void>,retired!:Promise<void>,replacement!:Promise<unknown>,inside=false;
 close=await o.port.openEvents(1,()=>{inside=true;retired=close();assert.equal(o.owner.inspectTransport().busy,true);assert.equal(o.owner.inspectTransport().active,false);replacement=o.port.openEvents(2,()=>true,()=>{});inside=false;return true;},()=>{});
 await o.port.request(request('start-mock-run',{...intent(),expectedEpoch:1}),1);await assert.rejects(replacement);await retired;assert.equal(inside,false);
 assert.equal(o.owner.inspectTransport().pending,0);const next=await o.port.openEvents(2,()=>true,()=>{});await next();
});
test('event rejection ends once, prevents further delivery, and release proves cleanup',async()=>{
 const o=construct();approve(o);let ended=0,events=0;const close=await o.port.openEvents(1,()=>{events++;return false;},()=>{ended++;});
 await o.port.request(request('start-mock-run',{...intent(),expectedEpoch:1}),1);assert.equal(ended,1);assert.equal(events,1);await close();await close();assert.equal(ended,1);
 await assert.rejects(o.port.request(request(),1));assert.equal(o.owner.inspectTransport().pending,0);
});
test('throwing receiver and throwing end callback cannot retain dispatch authority',async()=>{
 const o=construct();approve(o);let ended=0;const close=await o.port.openEvents(1,()=>{throw Error('subscriber');},()=>{ended++;throw Error('end');});
 await assert.rejects(o.port.request(request('start-mock-run',{...intent(),expectedEpoch:1}),1));await close();assert.equal(ended,1);assert.equal(o.owner.inspectState().runs.length,1);
 await assert.rejects(o.port.request(request(),1));
});
test('pending adapter reply after event-triggered shutdown settles before replacement',async()=>{
 const o=construct();let a:ReturnType<typeof createShellCoreAdapter>;const port={...o.port,async request(b:Uint8Array,g:number){const result=await o.port.request(b,g);if(JSON.parse(new TextDecoder().decode(b)).type==='start-mock-run')a.shutdown();return result;}};
 a=createShellCoreAdapter(port);await a.reconnect();approve(o);assert.equal(await a.startMockRun(intent()),false);await turn();assert.equal(a.snapshot().cleanupPending,false);assert.equal(o.owner.inspectState().runs.length,1);assert.equal(o.owner.inspectTransport().active,false);
});
test('owner shutdown during delivery denies reentrant command and permanently ends transport',async()=>{
 const o=construct();approve(o);let ended=0,nested!:Promise<unknown>;const close=await o.port.openEvents(1,()=>{o.owner.shutdown();nested=o.port.request(request(),1);return true;},()=>{ended++;});
 await o.port.request(request('start-mock-run',{...intent(),expectedEpoch:1}),1);await assert.rejects(nested);await close();assert.equal(ended,1);await assert.rejects(o.port.openEvents(2,()=>true,()=>{}));assert.throws(()=>o.owner.tick('A'));
});
test('invalid owner transition fails closed and existing state remains unchanged',async()=>{
 const o=construct(),a=createShellCoreAdapter(o.port);await a.reconnect();const before=o.owner.inspectState();assert.throws(()=>o.owner.tick('missing'));await turn();
 assert.deepEqual(o.owner.inspectState(),before);assert.equal(a.snapshot().connected,false);assert.equal(a.snapshot().cleanupPending,false);assert.equal(o.owner.inspectTransport().pending,0);
});
test('release inside receive prevents remaining queued replay delivery',async()=>{
 const o=construct();approve(o);approve(o,'B');const first=await o.port.openEvents(1,()=>true,()=>{});
 await o.port.request(request('start-mock-run',{...intent(),expectedEpoch:1},'a'),1);await o.port.request(request('start-mock-run',{...intent('B'),expectedEpoch:1},'b'),1);await first();
 let count=0,close!:()=>Promise<void>,pending!:Promise<void>;
 close=await o.port.openEvents(2,()=>{count++;pending=close();return true;},()=>{});
 await o.port.request(request('health',{},'h'),2);await pending;assert.equal(count,1);assert.equal(o.owner.inspectTransport().pending,0);assert.equal(o.owner.inspectTransport().deliveryActive,false);
});
test('end callback cannot acquire next generation during retiring operation',async()=>{
 const o=construct();approve(o);let replacement!:Promise<unknown>,ended=0;
 const close=await o.port.openEvents(1,()=>false,()=>{ended++;replacement=o.port.openEvents(2,()=>true,()=>{});assert.throws(()=>o.owner.pump());});
 await o.port.request(request('start-mock-run',{...intent(),expectedEpoch:1}),1);await assert.rejects(replacement);await close();assert.equal(ended,1);
 const next=await o.port.openEvents(2,()=>true,()=>{});await next();
});
test('caller byte subclass cannot close the lease during parsing then mutate Core',async()=>{
 const o=construct();approve(o);let close!:()=>Promise<void>;
 class ReentrantBytes extends Uint8Array {get byteLength(){void close();return super.byteLength;}}
 close=await o.port.openEvents(1,()=>true,()=>{});const before=o.owner.inspectState();
 await assert.rejects(o.port.request(new ReentrantBytes(request('start-mock-run',{...intent(),expectedEpoch:1})),1));
 assert.deepEqual(o.owner.inspectState(),before);await close();
});
test('raw byte port cannot invoke owner-only control operations',async()=>{
 const o=construct(),close=await o.port.openEvents(1,()=>true,()=>{});
 for(const type of ['approve','tick','revoke','invalidate','open-store']){
  const before=o.owner.inspectState(),reply=JSON.parse(new TextDecoder().decode(await o.port.request(request(type,{},type),1)));
  assert.equal(reply.ok,false);assert.equal(reply.payload.code,'unknown_type');assert.deepEqual(o.owner.inspectState(),before);
 }await close();
});
test('lying-length oversized subclass and non-byte inputs cannot bypass request bound',async()=>{
 class LyingBytes extends Uint8Array {get byteLength(){return 1;}}
 const raw=request();const padded=new LyingBytes(65537);padded.fill(32);padded.set(raw);
 const ownLength=new Uint8Array(65537);ownLength.fill(32);ownLength.set(raw);Object.defineProperty(ownLength,'byteLength',{get:()=>1});
 for(const input of [padded,ownLength,new Uint8Array(65537),{},null,new Uint8Array(new SharedArrayBuffer(2))]){
  const o=construct(),close=await o.port.openEvents(1,()=>true,()=>{}),before=o.owner.inspectState();
  await assert.rejects(o.port.request(input as Uint8Array,1));assert.deepEqual(o.owner.inspectState(),before);await close();
 }
});
test('malformed UTF8 bytes do not mutate authoritative state',async()=>{
 const o=construct(),close=await o.port.openEvents(1,()=>true,()=>{}),before=o.owner.inspectState();
 const reply=JSON.parse(new TextDecoder().decode(await o.port.request(new Uint8Array([255]),1)));
 assert.equal(reply.kind,'uncorrelated');assert.deepEqual(o.owner.inspectState(),before);await close();
});
test('caller byte Proxy intake reentry cannot dispatch after release',async()=>{
 const o=construct();approve(o);const close=await o.port.openEvents(1,()=>true,()=>{}),before=o.owner.inspectState();
 const raw=new Proxy(request('start-mock-run',{...intent(),expectedEpoch:1}),{getPrototypeOf(){void close();return Uint8Array.prototype;}});
 await assert.rejects(o.port.request(raw,1));await close();assert.deepEqual(o.owner.inspectState(),before);
});
test('plain byte snapshot ignores own accessor hooks and later caller mutation',async()=>{
 const o=construct(),close=await o.port.openEvents(1,()=>true,()=>{}),raw=request();let hooks=0;
 for(const name of ['byteLength','buffer',Symbol.iterator])Object.defineProperty(raw,name,{get(){hooks++;o.owner.shutdown();throw Error('caller hook');}});
 const pending=o.port.request(raw,1);raw.fill(255);const reply=JSON.parse(new TextDecoder().decode(await pending));
 assert.equal(reply.ok,true);assert.equal(hooks,0);assert.equal(o.owner.inspectTransport().active,true);await close();
});
test('caller-owned shared-buffer prototype spoof cannot pass non-shared byte admission',async()=>{
 const o=construct(),close=await o.port.openEvents(1,()=>true,()=>{}),before=o.owner.inspectState();
 const buffer=new SharedArrayBuffer(request().length);Object.setPrototypeOf(buffer,ArrayBuffer.prototype);const raw=new Uint8Array(buffer);raw.set(request());
 await assert.rejects(o.port.request(raw,1));assert.deepEqual(o.owner.inspectState(),before);await close();
});
test('caller-owned Uint16Array prototype spoof cannot pass genuine Uint8Array admission',async()=>{
 const o=construct(),close=await o.port.openEvents(1,()=>true,()=>{}),before=o.owner.inspectState();
 const raw=new Uint16Array(request());Object.setPrototypeOf(raw,Uint8Array.prototype);
 await assert.rejects(o.port.request(raw as any,1));assert.deepEqual(o.owner.inspectState(),before);await close();
});
