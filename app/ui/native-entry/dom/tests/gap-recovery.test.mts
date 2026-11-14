import test from 'node:test';
import assert from 'node:assert/strict';
import {createShellCoreAdapter,type ShellCorePort} from '../base/renderer/shell-core-adapter.mts';
import {Projection} from '../base/renderer/projection.mts';
import {createPureCorePort} from '../../../../core/protocol-v1-shell-r3/owner/inputs/test-support/pure-core-port.mts';
import {LocalChannel} from '../../../../core/protocol-v1-shell-r3/owner/inputs/reference-core/shared/transport/local-channel.mts';
import {createCoreTransportPort} from '../../../../core/protocol-v1-shell-r3/owner/inputs/core-transport-port.mts';
import {mountDomRenderer} from '../renderer/dom-view.mts';
import {FakeDocument} from './fake-dom.mts';
const bytes=(v:unknown)=>new TextEncoder().encode(JSON.stringify(v));
const turn=()=>new Promise<void>(r=>setTimeout(r,0));
const intent=(runId='A')=>({runId,fixtureId:'H',approvalId:'approval_'+runId,approvalRevision:1});
function fixture(){
 const core=createPureCorePort({testOnly:true,sessionId:'synthetic-gap-recovery',fixtureConfiguration:{version:1,H:{outputs:['first','second']}}}),local=createCoreTransportPort({testOnly:true,channel:new LocalChannel(core)});
 let receive!:(g:number,b:Uint8Array)=>boolean,generation=0,opened=0,closed=0;
 const requests:any[]=[];
 let transform:(q:any,r:any)=>Promise<any>=async(_q,r)=>r;
 const port:ShellCorePort={protocol:1,binding:local.binding,
  async openEvents(g,rx){opened++;generation=g;receive=rx;local.register(g);return async()=>{closed++;local.closeDelivery();};},
  async request(b,g){const q=JSON.parse(new TextDecoder().decode(b));requests.push(q);const r=local.execute(b,{binding:local.binding,generation:g});return bytes(await transform(q,r));}
 };
 const adapter=createShellCoreAdapter(port);
 const approve=(id='A')=>core.approve({approvalId:'approval_'+id,revision:1,runId:id,fixtureId:'H',epoch:core.inspectState().epoch});
 const emit=(index:number)=>receive(generation,bytes({v:1,type:'stream-event',payload:core.inspectState().journal[index].event}));
 return {core,port,adapter,requests,approve,emit,get opened(){return opened;},get closed(){return closed;},transform(f:typeof transform){transform=f;}};
}
async function gap(){const f=fixture();assert.equal(await f.adapter.reconnect(),true);f.approve();f.approve('B');assert.equal(await f.adapter.startMockRun(intent()),true);assert.equal(await f.adapter.startMockRun(intent('B')),true);assert.equal(f.emit(1),true);assert.equal(f.adapter.snapshot().view.degraded,true);return f;}
const cleanup=async(f:ReturnType<typeof fixture>)=>{f.adapter.shutdown();await turn();};

test('missing first event recovers on explicit Health with one full replay and no new lease',async()=>{
 const f=await gap(),before=f.requests.length;assert.equal(await f.adapter.globalStop(),false);assert.equal(await f.adapter.health(),true);
 assert.deepEqual(f.requests.slice(before).map(q=>q.type),['health','reconnect']);assert.equal(f.requests.at(-1).payload.afterGlobalSeq,0);assert.equal(f.opened,1);assert.equal(f.adapter.snapshot().view.cursor,2);assert.equal(f.adapter.snapshot().view.degraded,false);
 assert.equal(f.emit(0),true);assert.equal(f.emit(1),true);assert.equal(f.adapter.snapshot().view.cursor,2);assert.deepEqual(f.adapter.snapshot().view.runs,{A:'running',B:'running'});await cleanup(f);
});
test('healthy observation performs no replay; mutations are not retried by Health',async()=>{
 const f=fixture();await f.adapter.reconnect();const n=f.requests.length;assert.equal(await f.adapter.health(),true);assert.deepEqual(f.requests.slice(n).map(q=>q.type),['health']);await cleanup(f);
});
test('epoch change requires full authoritative replay on same subscription',async()=>{
 const f=await gap();f.core.execute(bytes({v:1,type:'global-stop',requestId:'external_stop',payload:{expectedEpoch:1}}),f.core.binding);
 assert.equal(await f.adapter.health(),true);assert.equal(f.requests.at(-1).payload.epoch,2);assert.equal(f.requests.at(-1).payload.afterGlobalSeq,0);assert.deepEqual(f.adapter.snapshot().view.runs,{A:'stopped',B:'stopped'});assert.equal(f.opened,1);await cleanup(f);
});
test('incomplete replay below health watermark retires without another request',async()=>{
 const f=await gap();f.transform(async(q,r)=>q.type==='reconnect'?{...r,payload:{epoch:1,throughGlobalSeq:1,events:r.payload.events.slice(0,1)}}:r);
 const n=f.requests.length;assert.equal(await f.adapter.health(),false);assert.deepEqual(f.requests.slice(n).map(q=>q.type),['health','reconnect']);assert.equal(f.adapter.snapshot().connected,false);await turn();assert.equal(f.closed,1);
});
test('newer pending frame during replay cannot be hidden by an older complete journal',async()=>{
 const f=await gap();f.transform(async(q,r)=>{if(q.type==='reconnect'){f.core.tick('B');f.core.tick('B');assert.equal(f.emit(3),true);}return r;});
 const n=f.requests.length;assert.equal(await f.adapter.health(),false);assert.equal(f.requests.length,n+2);assert.equal(f.adapter.snapshot().connected,false);await turn();assert.equal(f.closed,1);
});
test('conflicting replay cannot replace accepted prefix or manufacture repaired state',async()=>{
 const f=await gap();assert.equal(f.emit(0),true);f.transform(async(q,r)=>q.type==='health'?{...r,payload:{...r.payload,lastGlobalSeq:3}}:q.type==='reconnect'?{...r,payload:{...r.payload,events:r.payload.events.map((e:any,i:number)=>i===0?{...e,runId:'Z'}:e)}}:r);
 assert.equal(await f.adapter.health(),false);assert.equal(f.adapter.snapshot().connected,false);await turn();assert.equal(f.closed,1);
});
test('busy recovery blocks mutations and another health until exact replay settles',async()=>{
 const f=await gap();let release!:()=>void;const gate=new Promise<void>(r=>release=r);let replay=false;
 f.transform(async(q,r)=>{if(q.type==='reconnect'){replay=true;await gate;}return r;});const pending=f.adapter.health();await turn();assert.equal(replay,true);const n=f.requests.length;
 assert.equal(await f.adapter.health(),false);assert.equal(await f.adapter.globalStop(),false);assert.equal(await f.adapter.cancel('A'),false);assert.equal(f.requests.length,n);release();assert.equal(await pending,true);await cleanup(f);
});
test('disconnect during replay invalidates late result and waits for pending settlement',async()=>{
 const f=await gap();let release!:()=>void;const gate=new Promise<void>(r=>release=r);f.transform(async(q,r)=>{if(q.type==='reconnect')await gate;return r;});const pending=f.adapter.health();await turn();f.adapter.disconnect();await turn();assert.equal(f.adapter.snapshot().cleanupPending,true);assert.equal(await f.adapter.reconnect(),false);release();assert.equal(await pending,false);await turn();assert.equal(f.adapter.snapshot().connected,false);assert.equal(f.adapter.snapshot().cleanupPending,false);assert.equal(f.opened,1);
});
test('same-epoch health overtaken by live frames is consumed without applying freshness',async()=>{
 const f=fixture();await f.adapter.reconnect();f.approve();await f.adapter.startMockRun(intent());let appliedHealth=0;const original=Projection.prototype.applyReply;
 Projection.prototype.applyReply=function(r:any,c:any){if(r.type==='health')appliedHealth++;return original.call(this,r,c);};
 try{f.transform(async(q,r)=>{if(q.type==='health'){assert.equal(f.emit(0),true);return {...r,payload:{...r.payload,lastGlobalSeq:0}};}return r;});const n=f.requests.length;assert.equal(await f.adapter.health(),true);assert.equal(appliedHealth,0);assert.equal(f.requests.length,n+1);assert.equal(f.adapter.snapshot().view.cursor,1);}finally{Projection.prototype.applyReply=original;await cleanup(f);}
});
for(const bad of ['extra','negative','fractional','protocol'])test('overtaken health still rejects invalid '+bad+' payload',async()=>{
 const f=fixture();await f.adapter.reconnect();f.approve();await f.adapter.startMockRun(intent());f.emit(0);
 f.transform(async(q,r)=>q.type==='health'?{...r,payload:bad==='extra'?{protocol:1,epoch:1,lastGlobalSeq:0,extra:true}:bad==='negative'?{protocol:1,epoch:1,lastGlobalSeq:-1}:bad==='fractional'?{protocol:1,epoch:1,lastGlobalSeq:0.5}:{protocol:2,epoch:1,lastGlobalSeq:0}}:r);
 assert.equal(await f.adapter.health(),false);assert.equal(f.adapter.snapshot().connected,false);await turn();assert.equal(f.closed,1);
});
test('DOM exposes only Health and local Disconnect while degraded, then restores controls after replay',async()=>{
 const f=fixture(),d=new FakeDocument(),host=d.host();const view=mountDomRenderer({document:d as unknown as Document,container:host as unknown as HTMLElement},f.port);
 d.button('Reconnect explicitly').click();await turn();f.approve();f.approve('B');view.setStartIntent(intent());d.button('Start selected run').click();await turn();view.setStartIntent(intent('B'));d.button('Start selected run').click();await turn();assert.equal(f.emit(1),true);await turn();
 assert.equal(d.button('Check health').disabled,false);assert.equal(d.button('Stop all runs globally').disabled,true);assert.equal(d.button('Start selected run').disabled,true);assert.match(host.textContent,/Check health to request one journal recovery/);
 const n=f.requests.length;d.button('Check health').click();await turn();assert.deepEqual(f.requests.slice(n).map(q=>q.type),['health','reconnect']);assert.equal(view.snapshot().core.view.degraded,false);assert.equal(d.button('Stop all runs globally').disabled,false);view.unmount();await turn();assert.equal(f.closed,1);
});

test('overtaken health with an unresolved higher gap still dispatches one full replay without freshness',async()=>{
 const f=await gap();f.emit(0);f.core.tick('B');f.core.tick('B');f.emit(3);assert.equal(f.adapter.snapshot().view.cursor,2);assert.equal(f.adapter.snapshot().view.degraded,true);
 const original=Projection.prototype.applyReply;let appliedHealth=0;Projection.prototype.applyReply=function(r:any,c:any){if(r.type==='health')appliedHealth++;return original.call(this,r,c);};
 try{f.transform(async(q,r)=>q.type==='health'?{...r,payload:{...r.payload,lastGlobalSeq:1}}:r);const n=f.requests.length;assert.equal(await f.adapter.health(),true);assert.equal(appliedHealth,0);assert.deepEqual(f.requests.slice(n).map(q=>q.type),['health','reconnect']);assert.equal(f.adapter.snapshot().view.cursor,4);assert.equal(f.adapter.snapshot().view.degraded,false);}finally{Projection.prototype.applyReply=original;await cleanup(f);}
});
for(const stage of ['health','reconnect'])test('epoch 2 projection rejects lower-epoch '+stage+' observation',async()=>{
 const f=await gap();f.core.execute(bytes({v:1,type:'global-stop',requestId:'advance_epoch',payload:{expectedEpoch:1}}),f.core.binding);assert.equal(await f.adapter.health(),true);assert.equal(f.adapter.snapshot().view.cursor,4);
 f.transform(async(q,r)=>stage==='health'&&q.type==='health'?{...r,payload:{protocol:1,epoch:1,lastGlobalSeq:0}}:stage==='reconnect'&&q.type==='health'?{...r,payload:{...r.payload,lastGlobalSeq:5}}:q.type==='reconnect'?{...r,payload:{...r.payload,epoch:1}}:r);
 const n=f.requests.length;assert.equal(await f.adapter.health(),false);assert.deepEqual(f.requests.slice(n).map(q=>q.type),stage==='health'?['health']:['health','reconnect']);assert.equal(f.adapter.snapshot().connected,false);await turn();assert.equal(f.closed,1);
});
test('contiguous live frame received during replay survives without duplication',async()=>{
 const f=await gap();f.transform(async(q,r)=>{if(q.type==='reconnect'){f.core.tick('B');assert.equal(f.emit(2),true);}return r;});
 const n=f.requests.length;assert.equal(await f.adapter.health(),true);assert.deepEqual(f.requests.slice(n).map(q=>q.type),['health','reconnect']);assert.equal(f.adapter.snapshot().view.cursor,3);assert.equal(f.emit(2),true);assert.equal(f.adapter.snapshot().view.cursor,3);assert.equal(f.adapter.snapshot().view.degraded,false);await cleanup(f);
});

test('prior accepted health floor survives a later ignored stale health observation',async()=>{
 const f=await gap();assert.equal(await f.adapter.health(),true);assert.equal(f.adapter.snapshot().view.cursor,2);
 f.core.tick('B');f.core.tick('B');f.emit(3);const original=Projection.prototype.applyReply;let appliedHealth=0;
 Projection.prototype.applyReply=function(r:any,c:any){if(r.type==='health')appliedHealth++;return original.call(this,r,c);};
 try{f.transform(async(q,r)=>q.type==='health'?{...r,payload:{...r.payload,lastGlobalSeq:1}}:q.type==='reconnect'?{...r,payload:{epoch:1,throughGlobalSeq:1,events:r.payload.events.slice(0,1)}}:r);const n=f.requests.length;assert.equal(await f.adapter.health(),false);assert.equal(appliedHealth,0);assert.deepEqual(f.requests.slice(n).map(q=>q.type),['health','reconnect']);assert.equal(f.adapter.snapshot().connected,false);}finally{Projection.prototype.applyReply=original;await cleanup(f);}
});
