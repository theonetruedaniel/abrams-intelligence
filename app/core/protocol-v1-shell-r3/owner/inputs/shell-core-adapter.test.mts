import test from 'node:test';
import assert from 'node:assert/strict';
import {createShellCoreAdapter,type ShellCorePort} from './shell-core-adapter.mts';
import {shellCore} from './shell-consumer.mts';
import {createPureCorePort} from './test-support/pure-core-port.mts';
import {LocalChannel} from './reference-core/shared/transport/local-channel.mts';
import {createCoreTransportPort} from './core-transport-port.mts';
const bytes=(v:unknown)=>new TextEncoder().encode(JSON.stringify(v));
const turn=async()=>{await new Promise(r=>setTimeout(r,0));};
const intent=(runId='A')=>({runId,fixtureId:'H',approvalId:'approval_'+runId,approvalRevision:1});
function fixture(){
 const core=createPureCorePort({testOnly:true,sessionId:'synthetic-shell-adapter'}),channel=new LocalChannel(core),local=createCoreTransportPort({testOnly:true,channel});
 let ended=()=>{};
 let receiver!:(g:number,b:Uint8Array)=>boolean,generation=0,closed=0,requests:any[]=[],mutate:((r:any)=>Uint8Array)=(r:any)=>bytes(r),gate:Promise<void>|null=null,release=()=>{},suppress=false;
 const pump=()=>local.drain({receiveEvent:(e:any)=>receiver(generation,bytes({v:1,type:'stream-event',payload:e}))});
 const port:ShellCorePort={protocol:1,binding:local.binding,
  async openEvents(g,receive,disconnected){ended=disconnected;generation=g;receiver=receive;local.register(g);return async()=>{closed++;local.closeDelivery();};},
  async request(b,g){const q=JSON.parse(new TextDecoder().decode(b));requests.push(q);const result=local.execute(b,{binding:local.binding,generation:g});if(!suppress)pump();if(gate)await gate;return mutate(result);}
 };
 const adapter=createShellCoreAdapter(port);
 return {core,channel,adapter,requests,port,pump,get receiver(){return receiver;},get generation(){return generation;},get closed(){return closed;},
  end(){ended();},get endCallback(){return ended;},
  approve(id='A'){core.approve({approvalId:'approval_'+id,revision:1,runId:id,fixtureId:'H',epoch:core.inspectState().epoch});},
  mutate(fn:(r:any)=>Uint8Array){mutate=fn;},suppress(){suppress=true;},hold(){gate=new Promise(r=>release=r);},release(){gate=null;release();}
 };
}
test('shell default is frozen, explicitly unconnected and cannot dispatch',async()=>{
 assert.ok(Object.isFrozen(shellCore));assert.equal(shellCore.snapshot().unconnected,true);assert.equal(await shellCore.reconnect(),false);assert.equal(await shellCore.health(),false);assert.equal(await shellCore.startMockRun(intent()),false);
 assert.deepEqual(Object.keys(shellCore).sort(),['snapshot','reconnect','health','startMockRun','cancel','globalStop','disconnect','shutdown'].sort());
});
test('actual reference transitions through health/start/event/cancel/Stop and new subscription',async()=>{
 const f=fixture();assert.equal(await f.adapter.reconnect(),true);assert.equal(await f.adapter.health(),true);
 f.approve();f.approve('B');assert.equal(await f.adapter.startMockRun(intent()),true);assert.equal(await f.adapter.startMockRun(intent('B')),true);
 assert.deepEqual(f.adapter.snapshot().view.runs,{A:'running',B:'running'});
 assert.equal(await f.adapter.cancel('A'),true);assert.equal(await f.adapter.globalStop(),true);
 assert.deepEqual(f.adapter.snapshot().view.runs,{A:'cancelled',B:'stopped'});assert.equal(f.core.inspectState().epoch,2);
 f.adapter.disconnect();await turn();assert.equal(f.closed,1);assert.equal(await f.adapter.reconnect(),true);assert.equal(f.generation,2);
 assert.deepEqual(f.adapter.snapshot().view.runs,{A:'cancelled',B:'stopped'});f.adapter.shutdown();await turn();
});
test('start acknowledgement never manufactures a visible run',async()=>{
 const f=fixture();await f.adapter.reconnect();f.suppress();f.approve();assert.equal(await f.adapter.startMockRun(intent()),true);assert.deepEqual(f.adapter.snapshot().view.runs,{});
 assert.equal(await f.adapter.health(),true);assert.equal(f.adapter.snapshot().view.degraded,true);assert.equal(await f.adapter.globalStop(),false);
 f.adapter.disconnect();await turn();await f.adapter.reconnect();assert.deepEqual(f.adapter.snapshot().view.runs,{A:'running'});f.adapter.shutdown();await turn();
});
test('malformed intent and caller epoch never dispatch',async()=>{
 const f=fixture();await f.adapter.reconnect();const n=f.requests.length;
 for(const value of [{...intent(),expectedEpoch:1},{...intent(),approvalRevision:0},{...intent(),runId:'A\n'},null])assert.equal(await f.adapter.startMockRun(value as any),false);
 assert.equal(await f.adapter.cancel('bad!'),false);assert.equal(f.requests.length,n);f.adapter.shutdown();await turn();
});
for(const [name,change] of Object.entries({version:(r:any)=>({...r,v:2}),correlation:(r:any)=>({...r,requestId:'other'}),type:(r:any)=>({...r,type:'cancel'}),payload:(r:any)=>({...r,payload:{...r.payload,extra:true}}),startRun:(r:any)=>({...r,payload:{...r.payload,runId:'other'}}),startEpoch:(r:any)=>({...r,payload:{...r.payload,epoch:2}}),accepted:(r:any)=>({...r,payload:{...r.payload,accepted:false}})})){
 test('rejects '+name+' reply and blocks uncertain retry',async()=>{const f=fixture();await f.adapter.reconnect();f.approve();f.mutate(r=>bytes(change(r)));assert.equal(await f.adapter.startMockRun(intent()),false);assert.equal(f.adapter.snapshot().connected,false);assert.equal(await f.adapter.startMockRun(intent()),false);assert.equal(f.core.inspectState().runs.length,1);await turn();});
}
for(const [name,raw] of Object.entries({duplicate:new TextEncoder().encode('{"v":1,"v":1,"type":"health","requestId":"x","ok":true,"payload":{}}'),utf8:new Uint8Array([255]),empty:new Uint8Array(),oversize:new Uint8Array(1048577)}))test('rejects '+name+' reply bytes',async()=>{const f=fixture();await f.adapter.reconnect();f.mutate(()=>raw);assert.equal(await f.adapter.health(),false);await turn();assert.equal(f.closed,1);});
test('Core error is not success; no approval/tick/revoke capability escapes',async()=>{const f=fixture();await f.adapter.reconnect();assert.equal(await f.adapter.startMockRun(intent()),false);assert.equal(f.core.inspectState().runs.length,0);await turn();});
test('duplicate events are idempotent; wrong generation and retained callback cannot alter new state',async()=>{
 const f=fixture();await f.adapter.reconnect();f.approve();await f.adapter.startMockRun(intent());const old=f.receiver,g=f.generation;
 const event=bytes({v:1,type:'stream-event',payload:f.core.inspectState().journal[0].event});assert.equal(old(g,event),true);assert.equal(f.adapter.snapshot().view.cursor,1);assert.equal(old(g+1,event),false);
 f.adapter.disconnect();await turn();await f.adapter.reconnect();const before=f.adapter.snapshot();assert.equal(old(g,event),false);assert.deepEqual(f.adapter.snapshot(),before);f.adapter.shutdown();await turn();
});
test('malformed event closes current channel without applying content',async()=>{const f=fixture();await f.adapter.reconnect();assert.equal(f.receiver(f.generation,bytes({v:2,type:'stream-event',payload:{}})),false);assert.equal(f.adapter.snapshot().connected,false);assert.equal(f.adapter.snapshot().view.cursor,0);await turn();});
test('pending command blocks duplicates and replacement until late reply settles',async()=>{
 const f=fixture();await f.adapter.reconnect();f.approve();f.hold();const pending=f.adapter.startMockRun(intent());await turn();assert.equal(await f.adapter.globalStop(),false);
 f.adapter.disconnect();await turn();assert.equal(await f.adapter.reconnect(),false);f.release();assert.equal(await pending,false);await turn();assert.equal(await f.adapter.reconnect(),true);assert.equal(f.adapter.snapshot().view.runs.A,'running');f.adapter.shutdown();await turn();
});
test('throwing request retires session; close failure blocks replacement',async()=>{
 const f=fixture();const port={...f.port,request:async()=>{throw Error('transport');},openEvents:async()=>async()=>{throw Error('close');}};
 const a=createShellCoreAdapter(port);assert.equal(await a.reconnect(),false);await turn();assert.equal(a.snapshot().cleanupPending,true);assert.equal(await a.reconnect(),false);
});
test('late subscription acquisition is released before replacement is allowed',async()=>{
 let release!:(close:()=>Promise<void>)=>void,closed=0;
 const port:ShellCorePort={protocol:1,binding:{},openEvents:()=>new Promise(r=>release=r),request:async()=>{throw Error('must not dispatch');}};
 const a=createShellCoreAdapter(port),pending=a.reconnect();a.disconnect();assert.equal(await a.reconnect(),false);
 release(async()=>{closed++;});assert.equal(await pending,false);await turn();assert.equal(closed,1);assert.equal(a.snapshot().cleanupPending,false);a.shutdown();assert.equal(await a.reconnect(),false);
});
test('binding change is rejected and no request is sent',async()=>{const f=fixture();await f.adapter.reconnect();(f.port as any).binding={};assert.equal(await f.adapter.health(),false);f.adapter.disconnect();await turn();assert.equal(f.requests.length,1);});
test('stream end retires current subscription; a retained end callback cannot retire its replacement',async()=>{
 const f=fixture();await f.adapter.reconnect();const oldEnd=f.endCallback;f.end();assert.equal(f.adapter.snapshot().connected,false);await turn();assert.equal(f.closed,1);assert.equal(await f.adapter.reconnect(),true);oldEnd();assert.equal(f.adapter.snapshot().connected,true);f.adapter.shutdown();await turn();
});
test('conflicting duplicate event fails closed without changing accepted prefix',async()=>{
 const f=fixture();await f.adapter.reconnect();f.approve();await f.adapter.startMockRun(intent());const e=f.core.inspectState().journal[0].event;
 assert.equal(f.receiver(f.generation,bytes({v:1,type:'stream-event',payload:{...e,runId:'B'}})),false);assert.equal(f.adapter.snapshot().connected,false);assert.deepEqual(f.adapter.snapshot().view.runs,{A:'running'});await turn();
});
test('stale epoch is denied without extra mutation and requires explicit reconnection',async()=>{
 const f=fixture();await f.adapter.reconnect();f.core.execute(bytes({v:1,type:'global-stop',requestId:'external_stop',payload:{expectedEpoch:1}}),f.core.binding);const state=f.core.inspectState();
 assert.equal(await f.adapter.globalStop(),false);assert.deepEqual(f.core.inspectState(),state);await turn();assert.equal(await f.adapter.reconnect(),true);assert.equal(await f.adapter.globalStop(),true);assert.equal(f.core.inspectState().epoch,3);f.adapter.shutdown();await turn();
});
test('revoked command is rejected without pretending terminal success',async()=>{
 const f=fixture();await f.adapter.reconnect();f.approve();await f.adapter.startMockRun(intent());f.core.revoke('cancel');const before=f.core.inspectState();assert.equal(await f.adapter.cancel('A'),false);assert.deepEqual(f.core.inspectState(),before);assert.equal(f.adapter.snapshot().view.runs.A,'running');await turn();
});
test('caller getter shutdown and throwing Proxy cannot escape pre-dispatch ownership',async()=>{
 const f=fixture();await f.adapter.reconnect();f.approve();const q=intent();Object.defineProperty(q,'runId',{enumerable:true,get(){f.adapter.shutdown();return 'A';}});
 assert.equal(await f.adapter.startMockRun(q),false);assert.equal(f.requests.length,1);assert.equal(f.core.inspectState().runs.length,0);await turn();
 const other=fixture();await other.adapter.reconnect();assert.equal(await other.adapter.startMockRun(new Proxy(intent(),{ownKeys(){throw Error('keys');}})),false);assert.equal(other.requests.length,1);await turn();
});
test('true synchronous request throw is captured and subscription retired',async()=>{
 const f=fixture();const a=createShellCoreAdapter({...f.port,request(){throw Error('sync request');}});assert.equal(await a.reconnect(),false);await turn();assert.equal(f.closed,1);assert.equal(a.snapshot().cleanupPending,false);
});
test('synchronous open callback failure still releases acquired subscription',async()=>{
 let closed=0,requests=0;const a=createShellCoreAdapter({protocol:1,binding:{},openEvents:async(g,receive)=>{receive(g,new Uint8Array([255]));return async()=>{closed++;};},request:async()=>{requests++;return new Uint8Array();}});
 assert.equal(await a.reconnect(),false);await turn();assert.equal(closed,1);assert.equal(requests,0);assert.equal(a.snapshot().cleanupPending,false);
});
for(const epoch of [1,3])test('Stop acknowledgement epoch '+epoch+' must match exact transition',async()=>{
 const f=fixture();await f.adapter.reconnect();f.mutate(r=>bytes({...r,payload:{...r.payload,epoch}}));assert.equal(await f.adapter.globalStop(),false);assert.equal(f.adapter.snapshot().connected,false);assert.equal(f.core.inspectState().epoch,2);await turn();
});
test('out-of-order events preserve cursor then drain in authoritative order',async()=>{
 const f=fixture();await f.adapter.reconnect();f.suppress();f.approve();f.approve('B');await f.adapter.startMockRun(intent());await f.adapter.startMockRun(intent('B'));
 const events=f.core.inspectState().journal.map((j:any)=>bytes({v:1,type:'stream-event',payload:j.event}));
 assert.equal(f.receiver(f.generation,events[1]),true);assert.equal(f.adapter.snapshot().view.cursor,0);assert.equal(f.adapter.snapshot().view.degraded,true);const count=f.requests.length;assert.equal(await f.adapter.globalStop(),false);assert.equal(f.requests.length,count);
 assert.equal(f.receiver(f.generation,events[0]),true);assert.equal(f.adapter.snapshot().view.cursor,2);assert.equal(f.adapter.snapshot().view.degraded,false);assert.deepEqual(f.adapter.snapshot().view.runs,{A:'running',B:'running'});f.adapter.shutdown();await turn();
});
test('persistent gap requires explicit cleanup and full replay',async()=>{
 const f=fixture();await f.adapter.reconnect();f.suppress();f.approve();f.approve('B');await f.adapter.startMockRun(intent());await f.adapter.startMockRun(intent('B'));const e=f.core.inspectState().journal[1].event;
 f.receiver(f.generation,bytes({v:1,type:'stream-event',payload:e}));assert.equal(f.adapter.snapshot().view.cursor,0);f.adapter.disconnect();await turn();assert.equal(await f.adapter.reconnect(),true);assert.equal(f.adapter.snapshot().view.cursor,2);assert.equal(f.adapter.snapshot().view.degraded,false);f.adapter.shutdown();await turn();
});
for(const mode of ['sync','reject','invalid'])test('ambiguous '+mode+' subscription acquisition blocks replacement',async()=>{
 const a=createShellCoreAdapter({protocol:1,binding:{},openEvents:mode==='sync'?(()=>{throw Error('sync open');}):mode==='reject'?(async()=>{throw Error('open');}):(async()=>null as any),request:async()=>{throw Error('must not request');}});
 assert.equal(await a.reconnect(),false);await turn();assert.equal(a.snapshot().cleanupPending,true);assert.equal(await a.reconnect(),false);
});
test('request method getter shutdown cannot dispatch after retirement',async()=>{
 const f=fixture();let armed=false;const port={...f.port};
 // Use a closure over the actual adapter, not the fixture adapter.
 let adapter:ReturnType<typeof createShellCoreAdapter>;Object.defineProperty(port,'request',{configurable:true,get(){if(armed)adapter.shutdown();return f.port.request;}});
 adapter=createShellCoreAdapter(port);await adapter.reconnect();armed=true;assert.equal(await adapter.health(),false);assert.equal(f.requests.length,1);await turn();
});
for(const mode of ['sync','reject','invalid'])test('retired callback then '+mode+' acquisition retains uncertain ownership',async()=>{
 const a=createShellCoreAdapter({protocol:1,binding:{},openEvents:((g:number,receive:(g:number,b:Uint8Array)=>boolean,ended:()=>void)=>{ended();if(mode==='sync')throw Error('sync after ended');if(mode==='reject')return Promise.reject(Error('reject after ended'));return Promise.resolve(null as any);}),request:async()=>{throw Error('must not request');}});
 assert.equal(await a.reconnect(),false);await turn();assert.equal(a.snapshot().cleanupPending,true);assert.equal(await a.reconnect(),false);
});
