import {parseInbound} from './shared/contracts/protocol.mts';
import {parseReply} from './strict-reply.mts';
const generationValid=(g:any)=>Number.isInteger(g)&&g>=1&&g<=2147483647;
async function replyBytes(body:any){
 if(!body?.getReader)throw Error('invalid_reply');
 const reader=body.getReader(),buffer=new Uint8Array(1048576);let used=0,complete=false;
 try{
  while(true){const item=await reader.read();if(item.done){complete=true;return buffer.subarray(0,used);}if(!(item.value instanceof Uint8Array)||used+item.value.length>buffer.length)throw Error('reply_bound');buffer.set(item.value,used);used+=item.value.length;}
 }finally{if(!complete)await reader.cancel().catch(()=>{});reader.releaseLock();}
}
// Explicit generation input and injected fetch only. No browser storage,
// bootstrap refresh policy, timers, credential generation or automatic retry.
export function createBrowserWire({origin,binding,fetchImpl}:any):any {
 if(typeof origin!=='string'||!/^http:\/\/127\.0\.0\.1:[1-9][0-9]{0,4}$/.test(origin)||Number(new URL(origin).port)>65535||typeof binding!=='string'||!/^FAKE_TEST_ONLY_[A-Za-z0-9_-]{1,64}(?![\s\S])/.test(binding)||typeof fetchImpl!=='function')throw Error('fake_fixed_origin_required');
 let registered:number|null=null,registering=false,registrationFailed=false;
 const options=(g:number,signal:any)=>{
  if(!signal?.addEventListener||signal.aborted)throw Error('owned_signal_required');
  return {method:'POST',headers:{'X-Abrams-Transport-Binding':binding,'X-Abrams-Subscription-Generation':String(g)},mode:'same-origin',credentials:'omit',redirect:'error',cache:'no-store',signal};
 };
 const check=(response:any,path:string,mime:string)=>{
  if(response.status!==200||response.redirected||response.url!==origin+path||response.headers.get('cache-control')!=='no-store'||response.headers.get('content-encoding')!==null||response.headers.get('content-type')!==mime)throw Error('invalid_response');
 };
 return Object.freeze({
  async openEvents(g:number,signal:any){
   if(registrationFailed||!generationValid(g)||registering||(registered!==null&&g!==registered+1))throw Error('invalid_registration');
   const init=options(g,signal);registering=true;let response:any;
   try{
    response=await fetchImpl(origin+'/events',init);check(response,'/events','application/octet-stream');
    if(response.headers.get('x-abrams-subscription-generation')!==String(g)||!response.body?.getReader)throw Error('invalid_registration');
    registered=g;return Object.freeze({generation:g,reader:response.body.getReader()});
   }catch{registered=null;registrationFailed=true;await response?.body?.cancel().catch(()=>{});throw Error('registration_unavailable');}
   finally{registering=false;}
  },
  async request(bytes:Uint8Array,g:number,signal:any,beforeDispatch?:()=>void){
   if(beforeDispatch!==undefined&&typeof beforeDispatch!=='function')throw Error('invalid_dispatch_port');
   if(registering||registered===null||g!==registered)throw Error('transport_not_registered');
   if(!(bytes instanceof Uint8Array)||bytes.length<1||bytes.length>65536)throw Error('invalid_request');
   const parsed=parseInbound(bytes);if(parsed.kind!=='request')throw Error('invalid_request');
   const init:any=options(g,signal);init.headers['Content-Type']='application/json';init.body=bytes.slice();let response:any;
   try{beforeDispatch?.();if(signal.aborted||registering||registered!==g)throw Error('retired_before_dispatch');response=await fetchImpl(origin+'/request',init);check(response,'/request','application/json');const reply=parseReply(await replyBytes(response.body),parsed.request);if(registering||registered!==g)throw Error('obsolete_reply');return reply;}
   catch{await response?.body?.cancel().catch(()=>{});throw Error('request_unavailable');}
  }
 });
}
