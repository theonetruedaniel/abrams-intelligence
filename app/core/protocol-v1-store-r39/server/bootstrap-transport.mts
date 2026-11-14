import {requireDocumentContract} from '../../../ui/pwa/host/document-contract.mts';
import {parseInbound,parseStreamEvent} from './shared/contracts/protocol.mts';
import {createEventLease} from './event-lease.mts';
const noStore=Object.freeze({'cache-control':'no-store'});
const fake=(v:any)=>typeof v==='string'&&v.startsWith('FAKE_TEST_ONLY_');
const fakeWire=(v:any)=>fake(v)&&/^FAKE_TEST_ONLY_[A-Za-z0-9_-]{1,64}$/.test(v);
const hostValid=(v:any)=>typeof v==='string'&&/^127\.0\.0\.1:[1-9][0-9]{0,4}$/.test(v)&&Number(v.split(':')[1])<=65535;
const reject=()=>({ok:false as const}); // Never reflect headers or identifiers.
export function nextSubscriptionGeneration(registered:number,available:boolean):number|null{
 if(!Number.isInteger(registered)||registered<0||registered>2147483647)throw Error('invalid registered generation');
 return available&&registered<2147483647?registered+1:null;
}
export function encodeBootstrap(binding:string,next:number|null,documentContract:any){
 requireDocumentContract(documentContract);
 if(!fakeWire(binding))throw Error('fake bootstrap identifier required');
 if(next!==null&&(!Number.isInteger(next)||next<1||next>2147483647))throw Error('invalid generation hint');
 const json=JSON.stringify({protocol:1,binding,nextSubscriptionGeneration:next}).replace(/[<>&\u2028\u2029]/g,c=>'\\u'+c.charCodeAt(0).toString(16).padStart(4,'0'));
 return {html:documentContract.prefix+json+documentContract.suffix,headers:{...noStore,'content-type':'text/html; charset=utf-8','content-security-policy':documentContract.csp}};
}
// Pure synthetic route validation; raw duplicate-preserving pairs required.
// GET navigation has no mandatory Origin. POST requires exact Origin/binding.
export function validateTransport(request:any,context:any):any {
 if(!hostValid(context?.host)||!fakeWire(context?.binding)||!(request?.body instanceof Uint8Array)||!Array.isArray(request.headers)||request.headers.length>64)return reject();
 const headers=new Map<string,string>();
 let headerBytes=0;
 for(const pair of request.headers){
  if(!Array.isArray(pair)||pair.length!==2||typeof pair[0]!=='string'||typeof pair[1]!=='string'||!/^[A-Za-z0-9-]+$/.test(pair[0])||/[^\x20-\x7e]/.test(pair[1]))return reject();
  headerBytes+=pair[0].length+pair[1].length;if(headerBytes>8192)return reject();
  const name=pair[0].toLowerCase();if(headers.has(name))return reject();headers.set(name,pair[1]);
  if(name==='forwarded'||name.startsWith('x-forwarded-')||['cookie','authorization','content-encoding','transfer-encoding'].includes(name))return reject();
 }
 if(headers.get('host')!==context.host)return reject();
 const origin='http://'+context.host;
 if(headers.has('content-length')&&headers.get('content-length')!==String(request.body.length))return reject();
 if(request.method==='GET'&&request.path==='/'){
  if(request.body.length||headers.has('x-abrams-transport-binding')||headers.has('x-abrams-subscription-generation')||(headers.has('origin')&&headers.get('origin')!==origin))return reject();
  return {ok:true,route:'bootstrap'};
 }
 if(request.method!=='POST'||!['/request','/events'].includes(request.path)||headers.get('origin')!==origin||headers.get('x-abrams-transport-binding')!==context.binding)return reject();
 const raw=headers.get('x-abrams-subscription-generation');
 if(!raw||!/^[1-9][0-9]{0,9}$/.test(raw))return reject();
 const generation=Number(raw);if(!Number.isSafeInteger(generation)||generation>2147483647)return reject();
 if(request.path==='/events'){
  if(request.body.length||headers.has('content-type')||generation!==context.generation+1)return reject();
  return {ok:true,route:'events',generation};
 }
 if(generation!==context.generation||context.generation<1||headers.get('content-type')!=='application/json'||request.body.length<1||request.body.length>65536)return reject();
 return {ok:true,route:'request',generation};
}
// Queue and stream behavior are pure/injected. Fake-only guard prevents accidental
// operational use. No listener, Core/store constructor, randomness, logs or IO.
export class SyntheticTransport {
 #document:any;#host:string;#binding:string;#channel:any;#generation=0;#context:any;#queue=Promise.resolve();#stream:any;#launch=1;#unavailable=false;
 #usedBearers=new Set<string>();#usedBindingObjects=new Set<object>();
 #unsubscribe:(()=>void)|undefined;
 constructor(options:any){this.#check(options);this.#document=options.documentContract;requireDocumentContract(this.#document);this.#host=options.host;this.#binding=options.binding;this.#channel=options.channel;this.#usedBearers.add(this.#binding);this.#usedBindingObjects.add(this.#channel.binding);this.#watchAvailability();}
 #check(o:any){if(!fakeWire(o?.binding))throw Error('fake wire identifier required');if(o?.channel?.testOnly!==true||o.channel.binding===null||typeof o.channel.binding!=='object'||Array.isArray(o.channel.binding)||!['register','execute','drain','closeDelivery','assertAvailable','onUnavailable'].every(k=>typeof o.channel[k]==='function'))throw Error('availability-bound channel required');if(o.host!==undefined&&!hostValid(o.host))throw Error('invalid fixed host');}
 #watchAvailability(){
  const channel=this.#channel,launch=this.#launch;
  try{
   this.#unsubscribe=channel.onUnavailable(()=>{if(this.#channel!==channel||this.#launch!==launch)return;this.#unavailable=true;const cleaned=this.#close();if(cleaned)void cleaned.catch(()=>{});});
   if(typeof this.#unsubscribe!=='function')throw Error('availability retirement subscription required');
  }catch(error){this.#unsubscribe=undefined;this.#unavailable=true;try{const cleaned=this.#close();if(cleaned)void cleaned.catch(()=>{});}catch{}throw error;}
 }
 #enqueue(operation:()=>any):Promise<any>{const next=this.#queue.then(operation);this.#queue=next.then(()=>undefined,()=>undefined);return next;}
 #response(status:number,body:any){return {status,headers:{...noStore},body};}
 #retireStream(){if(this.#stream){const stream=this.#stream;this.#stream=undefined;stream.lease.cancel(stream.key);return stream.lease.cleaned;}}
 #close(){const cleaned=this.#retireStream();this.#channel.closeDelivery();return cleaned;}
 #drain(){if(this.#stream&&!this.#stream.lease.delivery.closed)this.#channel.drain(this.#stream.sink);}
 handle(request:any):Promise<any>{
  // Bound before copying, and select only declared request fields. Generation
  // validation remains on the queue so registration and reconnect serialize.
  if(!(request?.body instanceof Uint8Array)||request.body.length>65536||!Array.isArray(request.headers)||request.headers.length>64||typeof request.method!=='string'||request.method.length>16||typeof request.path!=='string'||request.path.length>256)return Promise.resolve(this.#response(403,{kind:'uncorrelated',code:'transport_unavailable'}));
  let headerBytes=0;
  for(const pair of request.headers){
   if(!Array.isArray(pair)||pair.length!==2||typeof pair[0]!=='string'||typeof pair[1]!=='string')return Promise.resolve(this.#response(403,{kind:'uncorrelated',code:'transport_unavailable'}));
   headerBytes+=pair[0].length+pair[1].length;if(headerBytes>8192)return Promise.resolve(this.#response(403,{kind:'uncorrelated',code:'transport_unavailable'}));
  }
  const input={method:request.method,path:request.path,headers:request.headers.map((p:any)=>[p[0],p[1]]),body:request.body.slice()};
  return this.#enqueue(()=>{
   const validated=validateTransport(input,{host:this.#host,binding:this.#binding,generation:this.#generation});
   if(!validated.ok)return this.#response(403,{kind:'uncorrelated',code:'transport_unavailable'});
   if(validated.route==='bootstrap'){const bootstrap=encodeBootstrap(this.#binding,nextSubscriptionGeneration(this.#generation,!this.#unavailable),this.#document);return {status:200,headers:bootstrap.headers,body:bootstrap.html};}
   if(this.#unavailable)return this.#response(503,{kind:'uncorrelated',code:'transport_unavailable'});
   try{
    if(validated.route==='events'){
     const context=this.#channel.register(validated.generation);
     if(context?.binding!==this.#channel.binding||context.generation!==validated.generation)throw Error('invalid stub registration');
     this.#retireStream();this.#context=context;this.#generation=validated.generation;
     const launch=this.#launch,key=Object.freeze({}),stream:any={key};
     const guard=()=>{const valid=()=>!this.#unavailable&&this.#stream===stream&&this.#launch===launch&&this.#context===context&&this.#generation===context.generation&&this.#channel.binding===context.binding;
      if(!valid())throw Error('retired delivery');this.#channel.assertAvailable();if(!valid())throw Error('retired delivery');};
     const lease=createEventLease(key,()=>this.#enqueue(()=>{
      // A return/abort retires only the still-current captured delivery.
      // Replacement registration may already be ahead of this queue entry.
      if(this.#stream!==stream||this.#launch!==launch||this.#context!==context||this.#generation!==context.generation)return;
      this.#stream=undefined;
      try{this.#channel.closeDelivery();}catch{this.#unavailable=true;throw Error('delivery cleanup failed');}
     }),guard);stream.lease=lease;this.#stream=stream;
     stream.sink=Object.freeze({receiveEvent:(event:any,c:any)=>{
      if(lease.delivery.closed||this.#stream!==stream||launch!==this.#launch||c?.binding!==context.binding||c.generation!==context.generation)return false;
      try{
       const bytes=new TextEncoder().encode(JSON.stringify({v:1,type:'stream-event',payload:event}));parseStreamEvent(bytes);
       const frame=new Uint8Array(4+bytes.length);new DataView(frame.buffer).setUint32(0,bytes.length,false);frame.set(bytes,4);if(!lease.enqueue(key,event.globalSeq,frame))throw Error('closed lease');return true;
      }catch{this.#close();return false;}
     }});
     const publicStream=lease.delivery;
     this.#drain();return {status:200,headers:{...noStore,'x-abrams-subscription-generation':String(this.#generation)},stream:publicStream};
    }
    const parsed=parseInbound(input.body);
    if(parsed.kind==='uncorrelated')return this.#response(400,parsed);
    if(parsed.kind==='reply-error')return this.#response(400,{v:1,type:parsed.type,requestId:parsed.requestId,ok:false,payload:{code:parsed.code}});
    const body=this.#channel.execute(input.body,this.#context);
    if(new TextEncoder().encode(JSON.stringify(body)).length>1048576)throw Error('reply bound');
    this.#drain();return this.#response(200,body);
   }catch{this.#unavailable=true;this.#close();return this.#response(503,{kind:'uncorrelated',code:'transport_unavailable'});}
  });
 }
 // Release the queue before awaiting cleanup, whose scoped retirement itself
 // runs on that queue. Authenticated request context remains registered.
 closeEvents(){return this.#enqueue(()=>({cleaned:this.#close()})).then(result=>result.cleaned);}
 // Trusted fake owner calls only after its existing commit/publication gate.
 committed(){return this.#enqueue(()=>{if(!this.#unavailable){try{this.#drain();}catch{this.#unavailable=true;this.#close();}}});}
 restart(options:any){
  this.#check(options);const binding=options.binding,channel=options.channel,bindingObject=channel.binding;
  if(options.host!==undefined&&options.host!==this.#host)throw Error('fixed synthetic host required');
  return this.#enqueue(()=>{
   if(channel.binding!==bindingObject||this.#usedBearers.has(binding)||this.#usedBindingObjects.has(bindingObject))throw Error('fresh fake launch required');
   // Never evict retired authority to make room. Exhaustion rejects the new
   // launch while leaving the current mapping, stream and generation intact.
   if(this.#usedBearers.size>=128)throw Error('launch history exhausted');
   this.#usedBearers.add(binding);this.#usedBindingObjects.add(bindingObject);
   this.#close();this.#unsubscribe?.();this.#unsubscribe=undefined;this.#launch++;this.#binding=binding;this.#channel=channel;this.#generation=0;this.#context=undefined;this.#unavailable=false;this.#watchAvailability();
  });
 }
}
