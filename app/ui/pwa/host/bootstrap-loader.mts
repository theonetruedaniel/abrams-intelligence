import {parseBootstrap} from '../strict-reply.mts';
import {requireDocumentContract,extractDocumentBootstrap} from './document-contract.mts';
// Strictly the currently owned inert bootstrap response. Never insert fetched
// HTML into DOM or execute it. No global fetch, URL discovery or credential use.
export function createBootstrapLoader({testOnly,origin,fetchImpl,documentContract,initialBytes}:any){
 if(testOnly!==true||typeof origin!=='string'||!/^http:\/\/127\.0\.0\.1:[1-9][0-9]{0,4}$/.test(origin)||Number(new URL(origin).port)>65535||typeof fetchImpl!=='function')throw Error('fake owned bootstrap ports required');
 requireDocumentContract(documentContract);
 let initial:Uint8Array|undefined;if(initialBytes!==undefined){if(!(initialBytes instanceof Uint8Array))throw Error('invalid initial bootstrap');initial=new Uint8Array(initialBytes);parseBootstrap(initial);}
 let cleanupFailed=false;const quarantine=new Promise<never>(()=>{});
 return async(signal:AbortSignal):Promise<Uint8Array>=>{
  if(cleanupFailed)return quarantine;
  if(!signal?.addEventListener||signal.aborted)throw Error('bootstrap_unavailable');
  if(initial){const bytes=initial;initial=undefined;return bytes;}
  let response:any,reader:any,complete=false,cancellation:Promise<void>|undefined;
  const cancel=()=>cancellation??=Promise.resolve().then(async()=>{try{if(reader)await reader.cancel();else if(response?.body)await response.body.cancel();}catch{cleanupFailed=true;}});
  const abort=()=>{void cancel();};
  try{
   response=await fetchImpl(origin+'/',{method:'GET',mode:'same-origin',credentials:'omit',redirect:'error',cache:'no-store',signal});
   if(signal.aborted||response?.status!==200||response.redirected||response.url!==origin+'/'||response.headers.get('cache-control')!=='no-store'||response.headers.get('content-type')!=='text/html; charset=utf-8'||response.headers.get('content-security-policy')!==documentContract.csp||!response.body?.getReader)throw Error('bootstrap_unavailable');
   let forbidden=false;response.headers.forEach((_value:string,name:string)=>{const key=name.toLowerCase();if(['content-encoding','set-cookie','set-cookie2','location'].includes(key)||key.startsWith('access-control-'))forbidden=true;});if(forbidden)throw Error('bootstrap_unavailable');
   reader=response.body.getReader();signal.addEventListener('abort',abort,{once:true});if(signal.aborted){abort();throw Error('bootstrap_unavailable');}
   const buffer=new Uint8Array(documentContract.maxBytes);let used=0;
   while(true){
    if(signal.aborted)throw Error('bootstrap_unavailable');const item=await reader.read();if(signal.aborted)throw Error('bootstrap_unavailable');if(item.done){complete=true;break;}
    if(!(item.value instanceof Uint8Array)||used+item.value.length>buffer.length)throw Error('bootstrap_unavailable');buffer.set(item.value,used);used+=item.value.length;
   }
   return extractDocumentBootstrap(buffer.subarray(0,used),documentContract);
  }catch{throw Error('bootstrap_unavailable');}
  finally{
   signal.removeEventListener('abort',abort);
   if(!complete||cancellation)await cancel();
   if(reader)try{reader.releaseLock();}catch{cleanupFailed=true;}
   // Match the controller's failed-cleanup rule: one quarantined attempt, no
   // retry/new fetch or false successful cleanup after cancellation failure.
   if(cleanupFailed)await quarantine;
  }
 };
}
