import {requireDocumentContract} from '../../../ui/pwa/host/document-contract.mts';
const rejected={kind:'uncorrelated',code:'transport_unavailable'};
function returnQuietly(iterator:any){try{if(iterator?.return)void Promise.resolve(iterator.return()).catch(()=>{});}catch{}}
function abortable(promise:Promise<any>,signal:AbortSignal){
 return new Promise<any>((resolve,reject)=>{
  const abort=()=>{cleanup();reject(Error('aborted'));};const cleanup=()=>signal.removeEventListener('abort',abort);
  promise.then(v=>{cleanup();resolve(v);},e=>{cleanup();reject(e);});
  if(signal.aborted){reject(Error('aborted'));return;}
  signal.addEventListener('abort',abort,{once:true});
 });
}
async function readRequest(req:any,signal:AbortSignal){
 if(!['GET','POST'].includes(req.method)||!['/','/events','/request'].includes(req.url)||!Array.isArray(req.rawHeaders)||req.rawHeaders.length%2||req.rawHeaders.length>128)throw Error('request_rejected');
 if((req.url==='/'&&req.method!=='GET')||(req.url!=='/'&&req.method!=='POST'))throw Error('request_rejected');
 const headers:string[][]=[];let units=0;
 for(let i=0;i<req.rawHeaders.length;i+=2){const name=req.rawHeaders[i],value=req.rawHeaders[i+1];if(typeof name!=='string'||typeof value!=='string')throw Error('request_rejected');units+=name.length+value.length;if(units>8192)throw Error('request_rejected');headers.push([name,value]);}
 const buffer=new Uint8Array(req.url==='/request'?65536:0);let used=0,finished=false;const iterator=req[Symbol.asyncIterator]();
 try{
  while(true){if(signal.aborted)throw Error('aborted');const item=await abortable(iterator.next(),signal);if(item.done){finished=true;break;}const chunk=item.value;if(!(chunk instanceof Uint8Array)||used+chunk.length>buffer.length)throw Error('body_bound');buffer.set(chunk,used);used+=chunk.length;}
 }finally{if(!finished)returnQuietly(iterator);}
 return {method:req.method,path:req.url,headers,body:buffer.subarray(0,used)};
}
function drain(res:any,signal:AbortSignal){
 return new Promise<void>((resolve,reject)=>{
  const cleanup=()=>{res.removeListener('drain',ready);res.removeListener('close',closed);res.removeListener('error',closed);signal.removeEventListener('abort',closed);};
  const ready=()=>{cleanup();resolve();};const closed=()=>{cleanup();reject(Error('closed'));};
  if(res.destroyed||signal.aborted){reject(Error('closed'));return;}
  res.once('drain',ready);res.once('close',closed);res.once('error',closed);signal.addEventListener('abort',closed,{once:true});
 });
}
// Attachable Node request/response handler only: deliberately no createServer,
// listen, Core construction or default stream-source polling implementation.
// streamBytes is a trusted owner async-byte-source/cancellation contract.
export async function serveExchange(req:any,res:any,{testOnly,application,streamBytes,signal,documentContract,onFailure}:any){
 let headersSent=false,iterator:any,upstream:any,applicationResult:Promise<any>|undefined,sourceStarted=false,deliverySignal:any,deliveryAbort:(()=>void)|undefined;
 const control=new AbortController();let closed=false,failed=false,peerClosed=false,internalFailure=false,responseCode:string|null=null;
 const writable=()=>!closed&&!failed&&!res.destroyed;
 const close=()=>{closed=true;control.abort();};
 const cancel=()=>{close();try{res.destroy?.();}catch{}};
 const responseError=(error?:any)=>{failed=true;responseCode=['ECONNRESET','EPIPE','ERR_STREAM_PREMATURE_CLOSE','ERR_STREAM_DESTROYED'].includes(error?.code)?error.code:'other';cancel();};
 const head=(status:number,headers:any)=>{if(!writable())throw Error('closed');try{res.writeHead(status,headers);headersSent=true;}catch{internalFailure=true;cancel();throw Error('closed');}};
 const end=async(body?:string)=>{
  if(!writable())return;
  await new Promise<void>((resolve,reject)=>{
   try{res.end(body,(error?:unknown)=>{if(error){responseError(error);reject(Error('closed'));}else resolve();});}catch(error){internalFailure=true;responseError(error);reject(Error('closed'));}
  });
 };
 // An error listener spans body/application/source waits AND end callback.
 // writeHead alone does not send headers on a real Node ServerResponse.
 const peerClose=()=>{peerClosed=true;close();};const peerAbort=()=>{peerClosed=true;cancel();};
 res.on('error',responseError);res.once('close',peerClose);req.once?.('aborted',peerAbort);
 try{
  requireDocumentContract(documentContract);
  if(testOnly!==true||typeof application?.handle!=='function'||!signal?.addEventListener)throw Error('fake_port_required');
  upstream=signal;upstream.addEventListener('abort',cancel,{once:true});if(upstream.aborted)cancel();signal=control.signal;
  const input=await readRequest(req,signal);if(signal.aborted||!writable())throw Error('closed');applicationResult=Promise.resolve(application.handle(input,{signal}));const reply=await abortable(applicationResult,signal);
  const headers:any={'cache-control':'no-store'},seen=new Set<string>();let streamGeneration:any;
  if(!Number.isInteger(reply.status)||reply.status<200||reply.status>=600||(reply.status>=300&&reply.status<400))throw Error('invalid_response');
  for(const [raw,value] of Object.entries(reply.headers??{})){
   const name=raw.toLowerCase();if(seen.has(name)||name==='content-encoding'||name==='set-cookie'||name.startsWith('access-control-')||name==='location')throw Error('invalid_response');seen.add(name);
   if(name==='x-abrams-subscription-generation')streamGeneration=value;
   if(name==='content-security-policy'){if(input.path!=='/'||reply.status!==200||value!==documentContract.csp)throw Error('invalid_response');headers[name]=value;}
  }
  if(input.path==='/'&&reply.status===200&&headers['content-security-policy']!==documentContract.csp)throw Error('owned_document_policy_required');
  if(reply.stream){
   if(input.path!=='/events'||reply.status!==200||typeof streamBytes!=='function')throw Error('stream_port_required');
   if(typeof reply.stream.assertAvailable!=='function'||typeof reply.stream.signal?.addEventListener!=='function')throw Error('availability_bound_stream_required');
   const availability=reply.stream.assertAvailable.bind(reply.stream);
   const guard=()=>{if(availability()!==undefined||signal.aborted||!writable())throw Error('closed');};
   deliverySignal=reply.stream.signal;deliveryAbort=cancel;deliverySignal.addEventListener('abort',deliveryAbort,{once:true});if(deliverySignal.aborted)cancel();guard();
   if(typeof streamGeneration!=='string'||!/^[1-9][0-9]{0,9}$/.test(streamGeneration)||Number(streamGeneration)>2147483647)throw Error('invalid_generation');headers['x-abrams-subscription-generation']=streamGeneration;
   sourceStarted=true;iterator=streamBytes(reply.stream,signal)[Symbol.asyncIterator]();
   headers['content-type']='application/octet-stream';head(200,headers);if(!writable())throw Error('closed');try{res.flushHeaders();}catch{internalFailure=true;cancel();throw Error('closed');}
   while(true){if(signal.aborted||!writable())throw Error('closed');const item=await abortable(iterator.next(),signal);if(item.done)break;if(!(item.value instanceof Uint8Array)||item.value.length<1||item.value.length>65540)throw Error('frame_chunk_bound');const bytes=new Uint8Array(item.value),write=res.write.bind(res);guard();let accepted:boolean;try{accepted=write(bytes);if(typeof accepted!=='boolean')throw Error('write_result');}catch(error){responseError(error);throw Error('closed');}if(!accepted){await drain(res,signal);guard();}}
   await end();
  }else{
   const body=typeof reply.body==='string'?reply.body:JSON.stringify(reply.body);if(new TextEncoder().encode(body).length>1048576)throw Error('reply_bound');
   headers['content-type']=input.path==='/'&&reply.status===200?'text/html; charset=utf-8':'application/json';head(reply.status,headers);await end(body);
  }
 }catch(error:any){
  if(typeof onFailure==='function')onFailure(Object.freeze({reason:['closed','aborted'].includes(error?.message)?error.message:'other',peerClosed,responseCode,internalFailure}));
  if(!headersSent&&writable()){head(400,{'cache-control':'no-store','content-type':'application/json','connection':'close'});await end(JSON.stringify(rejected));}
  else if(writable())await end();
 }finally{
  control.abort();if(iterator)returnQuietly(iterator);
  else if(applicationResult&&!sourceStarted&&typeof streamBytes==='function')void applicationResult.then(reply=>{
   if(reply?.stream)try{returnQuietly(streamBytes(reply.stream,control.signal)[Symbol.asyncIterator]());}catch{}
  }).catch(()=>{});
  upstream?.removeEventListener('abort',cancel);res.removeListener('error',responseError);res.removeListener('close',peerClose);req.removeListener?.('aborted',peerAbort);
  deliverySignal?.removeEventListener('abort',deliveryAbort);
 }
}
