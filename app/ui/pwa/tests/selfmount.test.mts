import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {webcrypto,createHash} from 'node:crypto';import {createContext,runInContext} from 'node:vm';
import {consumerFixture,delay} from './consumer-fixture.mts';
const artifact=JSON.parse(readFileSync(new URL('../../../../.work/pwa/generated/document.json',import.meta.url),'utf8')),bounded={timeout:4000};
const initial={protocol:1,binding:'FAKE_TEST_ONLY_MATCHED_PWA',nextSubscriptionGeneration:1};
class Element {textContent='';disabled=true;listeners=new Set<()=>void>();addEventListener(_n:string,fn:()=>void){this.listeners.add(fn);}removeEventListener(_n:string,fn:()=>void){this.listeners.delete(fn);}click(){if(!this.disabled)for(const fn of [...this.listeners])fn();}}
function fixture(configuration:any=null,options:any={}){
 const core=consumerFixture(),elements:any={},callbacks=new Set<()=>void>(),calls:any[]=[];
 for(const match of artifact.html.matchAll(/id="([^"]+)"/g))elements[match[1]]=new Element();
 elements['abrams-startup'].textContent=artifact.inline;elements['abrams-bootstrap'].textContent=options.raw??JSON.stringify(configuration);
 const meta={getAttribute:()=>options.csp??artifact.contract.csp};
 const document={documentElement:{getAttribute:()=>options.marker??'3'},querySelectorAll(selector:string){if(selector==='meta[http-equiv="Content-Security-Policy"]')return [meta];const e=elements[selector.slice(1)];return e?(options.duplicate===selector?[e,e]:[e]):[];},getElementById:(id:string)=>elements[id]};
 const window={addEventListener(name:string,fn:()=>void){assert.equal(name,'pagehide');callbacks.add(fn);},removeEventListener(name:string,fn:()=>void){assert.equal(name,'pagehide');callbacks.delete(fn);}};
 let getMode='valid';
 const fetch=async(url:string,o:any)=>{calls.push({url,options:o});if(o.method!=='GET')return core.port.fetchImpl(url,o);const next=JSON.parse(new TextDecoder().decode(await core.port.loadBootstrap()));if(getMode==='binding')next.binding='FAKE_TEST_ONLY_DIFFERENT';const text=artifact.contract.prefix+(getMode==='null'?'null':JSON.stringify(next))+artifact.contract.suffix;if(getMode==='quarantine')return {status:200,redirected:false,url,headers:new Headers({'cache-control':'public'}),body:{cancel:async()=>{throw Error('injected cancellation failure');}}};const response=new Response(getMode==='body'?text+'tamper':text,{headers:{'cache-control':getMode==='cache'?'public':'no-store','content-type':'text/html; charset=utf-8','content-security-policy':getMode==='csp'?'wrong':artifact.contract.csp}});if(getMode==='cookie')response.headers.set('set-cookie','synthetic=1');Object.defineProperty(response,'url',{value:url});return response;};
 const context:any=createContext({URL,crypto:options.crypto??webcrypto,TextEncoder,TextDecoder,Uint8Array,AbortController,performance,structuredClone,setTimeout,clearTimeout,document,window,location:{origin:options.origin??core.port.origin},fetch});
 return {core,elements,callbacks,calls,context,setGetMode:(mode:string)=>{getMode=mode;},start:()=>{runInContext(artifact.inline,context,{timeout:1000});return context.AbramsPwaReady;},click:(id:string)=>elements['abrams-page-'+id].click(),hide:()=>{for(const fn of [...callbacks])fn();},cleanup:async()=>{for(const fn of [...callbacks])fn();await delay();core.cleanup();}};
}
test('actual inline self-mounts null disconnected without caller or requests; config cannot upgrade it',bounded,async()=>{
 const f=fixture();try{assert.equal(await f.start(),true);assert.equal(f.calls.length,0);assert.equal(f.elements['abrams-page-status'].textContent,'Disconnected');f.elements['abrams-bootstrap'].textContent=JSON.stringify(initial);f.click('connect');f.click('runStart');assert.equal(f.calls.length,0);assert.equal(f.elements['abrams-page-connect'].disabled,true);}finally{await f.cleanup();}
});
test('configured self-mount waits for Connect then sends Start Cancel Stop via real reference memory Core',bounded,async()=>{
 const f=fixture(initial);try{assert.equal(await f.start(),true);assert.equal(f.calls.length,0);assert.equal(f.core.requests.length,0);f.click('connect');await delay(15);assert.equal(f.elements['abrams-page-status'].textContent,'Ready');f.click('runStart');await delay(15);assert.equal(f.elements['abrams-page-outputs'].textContent,'pipe-output');f.click('runCancel');await delay(15);f.click('globalStop');await delay(15);assert.deepEqual(f.core.requests.map(x=>x.request.type),['reconnect','start-mock-run','cancel','global-stop']);assert.equal(f.core.state().epoch,2);}finally{await f.cleanup();}
});
test('refresh verifies new exact document and reconstructs with next generation',bounded,async()=>{
 const f=fixture(initial);try{await f.start();f.click('connect');await delay(15);f.click('runStart');await delay(15);f.click('refresh');await delay(15);assert.equal(f.core.requests.at(-1).generation,2);assert.equal(f.elements['abrams-page-cursor'].textContent,'2');const get=f.calls.find(x=>x.options.method==='GET');assert.equal(get.options.credentials,'omit');assert.equal(get.options.redirect,'error');assert.equal(get.options.cache,'no-store');}finally{await f.cleanup();}
});
test('refresh null or changed binding never registers replacement authority',bounded,async()=>{
 for(const mode of ['null','binding']){const f=fixture(initial);try{await f.start();f.click('connect');await delay(15);f.setGetMode(mode);f.click('refresh');await delay(15);assert.equal(f.core.requests.length,1);assert.equal(f.calls.filter(x=>x.url.endsWith('/events')).length,1);assert.equal(f.elements['abrams-page-status'].textContent,'Disconnected');}finally{await f.cleanup();}}
});
test('refresh changed body CSP or caching fails exact document proof before events',bounded,async()=>{
 for(const mode of ['body','csp','cache','cookie']){const f=fixture(initial);try{await f.start();f.click('connect');await delay(15);f.setGetMode(mode);f.click('refresh');await delay(15);assert.equal(f.core.requests.length,1);assert.equal(f.calls.filter(x=>x.url.endsWith('/events')).length,1);}finally{await f.cleanup();}}
});
test('malformed duplicate config unknown origin and mismatched CSP reject before requests',bounded,async()=>{
 for(const options of [{raw:'{"protocol":1,"protocol":1,"binding":"FAKE_TEST_ONLY_MATCHED_PWA","nextSubscriptionGeneration":1}'},{raw:'{}'},{origin:'https://example.com'},{origin:'http://localhost:45679'},{csp:'wrong'},{marker:'2'},{duplicate:'#abrams-bootstrap'}]){const f=fixture(initial,options);try{assert.equal(await f.start(),false);assert.equal(f.calls.length,0);assert.equal(f.callbacks.size,0);assert.equal(f.elements['abrams-page-status'].textContent,'Unavailable');}finally{await f.cleanup();}}
});
test('pagehide during delayed script hash prevents mount and requests',bounded,async()=>{
 let release!:(v:any)=>void;const hash=new Promise(r=>release=r),f=fixture(initial,{crypto:{subtle:{digest:()=>hash},randomUUID:()=>webcrypto.randomUUID()}});try{const ready=f.start();f.hide();assert.equal(await ready,false);assert.equal(f.calls.length,0);assert.equal(f.callbacks.size,0);release(new ArrayBuffer(32));await delay();assert.equal(f.elements['abrams-page-connect'].listeners.size,0);}finally{release(new ArrayBuffer(32));await f.cleanup();}
});
test('local shutdown removes self-mounted lifecycle and emits no global Stop',bounded,async()=>{
 const f=fixture(initial);try{await f.start();f.click('connect');await delay(15);f.click('runStart');await delay(15);const saved=[...f.elements['abrams-page-globalStop'].listeners];f.click('shutdown');for(const fn of saved)fn();await delay();assert.equal(f.callbacks.size,0);assert.equal(f.core.state().runs[0].state,'running');assert.equal(f.core.requests.some(x=>x.request.type==='global-stop'),false);}finally{await f.cleanup();}
});
test('selfmounted hide rejects pending command reply and same-stack saved Stop',bounded,async()=>{
 const f=fixture(initial);let release!:()=>void;const gate=new Promise<void>(r=>release=r);try{await f.start();f.click('connect');await delay(15);f.core.afterExecute(async q=>{if(q.type==='start-mock-run')await gate;});f.click('runStart');await delay();const saved=[...f.elements['abrams-page-globalStop'].listeners],n=f.core.requests.length;f.hide();for(const fn of saved)fn();release();await delay();assert.equal(f.core.requests.length,n);assert.equal(f.elements['abrams-page-status'].textContent,'Stopped');}finally{release();await f.cleanup();}
});
test('inline hash/CSP and owner-free module closure match generated bytes',bounded,()=>{
 assert.equal(artifact.modules.length,18);assert.equal(artifact.modules.some((m:any)=>/owner|mock-core/.test(m.path)),false);assert.equal(artifact.contract.csp.includes("'sha256-"+createHash('sha256').update(artifact.inline).digest('base64')+"'"),true);assert.equal(artifact.html,artifact.contract.prefix+'null'+artifact.contract.suffix);assert.equal(artifact.inline.includes('startOwnedDocument({document,window'),true);
});
test('failed refresh body cancellation quarantines attempt and prevents another fetch',bounded,async()=>{
 const f=fixture(initial);try{await f.start();f.click('connect');await delay(15);f.setGetMode('quarantine');f.click('refresh');await delay(1100);const count=f.calls.length;assert.equal(f.elements['abrams-page-refresh'].disabled,true);assert.match(f.elements['abrams-page-message'].textContent,/Waiting for cancelled transport cleanup/);f.click('refresh');f.click('connect');assert.equal(f.calls.length,count);}finally{await f.cleanup();}
});
test('startup listener removal reentry retires readiness rather than reporting success',bounded,async()=>{
 const f=fixture(initial);const remove=f.context.window.removeEventListener;let once=false;f.context.window.removeEventListener=(name:string,fn:any)=>{if(!once&&f.callbacks.size===2){once=true;fn();}remove(name,fn);};try{assert.equal(await f.start(),false);assert.equal(f.calls.length,0);assert.equal(f.callbacks.size,0);assert.equal(f.elements['abrams-page-connect'].listeners.size,0);}finally{await f.cleanup();}
});
test('failed mount cleanup remains explicitly retryable through generated failure handle',bounded,async()=>{
 const f=fixture(initial);const add=f.context.window.addEventListener,remove=f.context.window.removeEventListener;let count=0,blocked=true;f.context.window.addEventListener=(name:string,fn:any)=>{add(name,fn);if(++count===2)throw Error('postinstall failure');};f.context.window.removeEventListener=(name:string,fn:any)=>{if(blocked)throw Error('retained removal fixture');remove(name,fn);};try{assert.equal(await f.start(),false);assert.equal(f.calls.length,0);assert.equal(typeof f.context.AbramsPwaCleanup,'function');assert.ok(f.callbacks.size>0);blocked=false;assert.equal(await f.context.AbramsPwaCleanup(),true);assert.equal(f.callbacks.size,0);}finally{blocked=false;await f.cleanup();}
});
test('generated host default integer monotonic clock supports explicit health',bounded,async()=>{
 const f=fixture(initial);let mounted:any;try{const api=runInContext(artifact.code,f.context,{timeout:1000});mounted=await api.startOwnedDocument({document:f.context.document,window:f.context.window,origin:f.context.location.origin,fetchImpl:f.context.fetch});assert.equal(f.calls.length,0);f.click('connect');await delay(15);assert.equal(await mounted.observeHealth(),true);assert.equal(f.core.requests.at(-1).request.type,'health');}finally{await mounted?.shutdown();await f.cleanup();}
});

test('generated host rejects replay below observed Health watermark without buffered-frame masking',bounded,async()=>{
 const f=fixture(initial);let mounted:any,healthThrough:number|undefined,replayThrough:number|undefined;
 try{
  const api=runInContext(artifact.code,f.context,{timeout:1000});mounted=await api.startOwnedDocument({document:f.context.document,window:f.context.window,origin:f.context.location.origin,fetchImpl:f.context.fetch});assert.equal(f.calls.length,0);
  f.click('connect');await delay(15);f.core.drop(1);f.click('runStart');await delay(15);assert.equal(f.core.state().journal.length,2);assert.equal(f.elements['abrams-page-cursor'].textContent,'0');
  f.core.rewrite((reply,q)=>{if(q.type==='health')healthThrough=reply.payload.lastGlobalSeq;if(q.type==='reconnect'){replayThrough=reply.payload.throughGlobalSeq;return {...reply,payload:{...reply.payload,throughGlobalSeq:1,events:reply.payload.events.slice(0,1)}};}return reply;});
  const n=f.core.requests.length;assert.equal(await mounted.observeHealth(),false);assert.equal(healthThrough,2);assert.equal(replayThrough,2);assert.deepEqual(f.core.requests.slice(n).map(x=>x.request.type),['health','reconnect']);assert.equal(f.core.requests.at(-1).generation,1);assert.equal(f.elements['abrams-page-status'].textContent,'Disconnected');assert.equal(f.elements['abrams-page-cursor'].textContent,'0');assert.equal(f.core.requests.filter(x=>x.request.type==='start-mock-run').length,1);assert.equal(f.core.requests.some(x=>x.request.type==='global-stop'),false);
 }finally{await mounted?.shutdown();await f.cleanup();}
});

test('generated host accepts replay at observed Health floor and restores authoritative output',bounded,async()=>{
 const f=fixture(initial);let mounted:any,healthThrough:number|undefined,replayThrough:number|undefined;
 try{
  const api=runInContext(artifact.code,f.context,{timeout:1000});mounted=await api.startOwnedDocument({document:f.context.document,window:f.context.window,origin:f.context.location.origin,fetchImpl:f.context.fetch});assert.equal(f.calls.length,0);
  f.click('connect');await delay(15);f.core.drop(1);f.click('runStart');await delay(15);assert.equal(f.core.state().journal.length,2);assert.equal(f.elements['abrams-page-cursor'].textContent,'0');
  f.core.rewrite((reply,q)=>{if(q.type==='health')healthThrough=reply.payload.lastGlobalSeq;if(q.type==='reconnect')replayThrough=reply.payload.throughGlobalSeq;return reply;});
  const n=f.core.requests.length;assert.equal(await mounted.observeHealth(),true);assert.equal(healthThrough,2);assert.equal(replayThrough,2);assert.deepEqual(f.core.requests.slice(n).map(x=>x.request.type),['health','reconnect']);assert.equal(f.core.requests.at(-1).generation,1);assert.equal(f.elements['abrams-page-status'].textContent,'Ready');assert.equal(f.elements['abrams-page-cursor'].textContent,'2');assert.equal(f.elements['abrams-page-outputs'].textContent,'pipe-output');assert.equal(f.core.requests.filter(x=>x.request.type==='start-mock-run').length,1);
 }finally{await mounted?.shutdown();await f.cleanup();}
});
