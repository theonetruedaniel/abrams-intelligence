import {EventEmitter} from 'node:events';
const encode=(text:string)=>new TextEncoder().encode(text);
// Test bridge only. No node:http, socket or listener. Uses the actual exchange
// handler with duplicate-preserving rawHeaders and asynchronous response bytes.
export function createInjectedHttp(component:any,origin:string){
 const jobs=new Set<Promise<void>>(),records:any[]=[];let slow=false,onWrite:((record:any)=>void)|null=null;
 const fetch=async(url:string,options:any={})=>{
  const target=new URL(url);if(target.origin!==origin)throw Error('fixed injected origin');
  const headers:string[]=['Host',target.host];if(options.method==='POST')headers.push('Origin',origin);
  for(const [k,v] of Object.entries(options.headers??{}))headers.push(k,String(v));
  return exchange(options.method??'GET',target.pathname,headers,options.body??new Uint8Array(),options.signal);
 };
 const exchange=(method:string,path:string,rawHeaders:string[],bytes:Uint8Array,signal?:AbortSignal)=>{
  const req:any=new EventEmitter();req.method=method;req.url=path;req.rawHeaders=rawHeaders;req[Symbol.asyncIterator]=async function*(){if(bytes.length)yield bytes;};
  const res:any=new EventEmitter();res.destroyed=false;let status=0,responseHeaders:any={},sent=false,ended=false,stream:any;
  let yes!:(value:Response)=>void,no!:(error:any)=>void;const response=new Promise<Response>((resolve,reject)=>{yes=resolve;no=reject;});
  const record:any={method,path,rawHeaders:[...rawHeaders],writes:0,ended:false,destroyed:false};records.push(record);
  const cleanup=()=>signal?.removeEventListener('abort',abort);
  const body=new ReadableStream<Uint8Array>({start(c){stream=c;},cancel(){res.destroy();}});
  const publish=()=>{if(sent)return;sent=true;const v=new Response(body,{status,headers:responseHeaders});Object.defineProperty(v,'url',{value:origin+path});record.status=status;record.headers={...responseHeaders};yes(v);};
  res.writeHead=(code:number,h:any)=>{status=code;responseHeaders=h;};
  res.flushHeaders=()=>publish();
  res.write=(chunk:Uint8Array)=>{if(res.destroyed)throw Error('closed fake response');publish();stream.enqueue(new Uint8Array(chunk));record.writes++;onWrite?.(record);if(slow){queueMicrotask(()=>res.emit('drain'));return false;}return true;};
  res.end=(value?:string,callback?:()=>void)=>{if(res.destroyed)return;publish();if(value)stream.enqueue(encode(value));ended=true;record.ended=true;stream.close();cleanup();callback?.();res.emit('finish');};
  res.destroy=()=>{if(res.destroyed)return;res.destroyed=true;record.destroyed=true;cleanup();if(!ended)try{stream.close();}catch{}if(!sent)no(Error('injected response destroyed'));res.emit('close');};
  const abort=()=>{req.emit('aborted');res.destroy();};signal?.addEventListener('abort',abort,{once:true});
  if(signal?.aborted)abort();
  const job=component.exchange(req,res);jobs.add(job);void job.catch(no).finally(()=>jobs.delete(job));
  return response;
 };
 return {fetch,exchange,records,setBackpressure(value:boolean){slow=value;},onWrite(fn:typeof onWrite){onWrite=fn;},async settle(){await Promise.all([...jobs]);},active:()=>jobs.size};
}
