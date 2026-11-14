import {createPureCorePort} from '../../../core/protocol-v1-shell-r3/owner/inputs/test-support/pure-core-port.mts';
import {LocalChannel} from '../../../core/protocol-v1-shell-r3/owner/inputs/reference-core/shared/transport/local-channel.mts';
import {schedule} from '../../../fixtures/pwa/schedule.mts';
const bytes=(v:any)=>new TextEncoder().encode(JSON.stringify(v));
export const intent=(runId='A')=>({runId,fixtureId:'H',approvalId:'approval_'+runId,approvalRevision:1});
export const delay=(ms=0)=>new Promise<void>(r=>setTimeout(r,ms));
export function consumerFixture(){
 const core=createPureCorePort(schedule),channel=new LocalChannel(core);
 for(const approval of schedule.approvals)channel.approve(approval);
 const binding=Object.freeze({}),wireBinding='FAKE_TEST_ONLY_MATCHED_PWA',origin='http://127.0.0.1:45679';
 let generation=0,stream:ReadableStreamDefaultController<Uint8Array>|null=null,clock=0;
 let afterExecute:((q:any)=>Promise<void>)|null=null,rewrite:((reply:any,q:any)=>any)|null=null,dropSeq:number|null=null;
 const requests:any[]=[];
 const deliver=(event:any)=>{
  if(!stream||event.globalSeq===dropSeq)return;
  const body=bytes({v:1,type:'stream-event',payload:event}),frame=new Uint8Array(body.length+4);new DataView(frame.buffer).setUint32(0,body.length,false);frame.set(body,4);stream.enqueue(frame);
 };
 const drain=()=>channel.drain({receiveEvent:deliver});
 const port={protocol:1 as const,testOnly:true as const,binding,origin,
  loadBootstrap:async()=>bytes({protocol:1,binding:wireBinding,nextSubscriptionGeneration:generation+1}),
  healthNow:()=>++clock,
  async fetchImpl(url:string,o:any){
   const g=Number(o.headers['X-Abrams-Subscription-Generation']);
   if(o.headers['X-Abrams-Transport-Binding']!==wireBinding||o.signal.aborted)throw Error('fixture binding/abort');
   let response:Response;
   if(url===origin+'/events'){
    channel.register(g);generation=g;
    const body=new ReadableStream<Uint8Array>({start(c){stream=c;},cancel(){channel.closeDelivery();stream=null;}});
    response=new Response(body,{headers:{'cache-control':'no-store','content-type':'application/octet-stream','x-abrams-subscription-generation':String(g)}});
   }else if(url===origin+'/request'){
    if(g!==generation)throw Error('old fixture generation');
    const q=JSON.parse(new TextDecoder().decode(o.body));requests.push({request:structuredClone(q),generation:g});
    let reply=channel.execute(o.body,channel.context);
    // Same owner-side H scheduling as the compiled Tauri fixture, not a wire opcode.
    for(const id of ['A','B']){const run=core.inspectState().runs.find((r:any)=>r.runId===id);if(run?.state==='running'&&run.fixturePosition===0)channel.tick(id);}
    drain();if(afterExecute)await afterExecute(q);if(rewrite)reply=rewrite(reply,q);
    response=new Response(JSON.stringify(reply),{headers:{'cache-control':'no-store','content-type':'application/json'}});
   }else throw Error('unexpected fixture URL');
   Object.defineProperty(response,'url',{value:url});return response;
  }
 };
 return {port,requests,state:()=>core.inspectState(),deliver,
  afterExecute(fn:typeof afterExecute){afterExecute=fn;},rewrite(fn:typeof rewrite){rewrite=fn;},drop(seq:number|null){dropSeq=seq;},
  invalidate(id:string,revision:number){channel.invalidate(id,revision);},
  localClosed:()=>!channel.active,
  cleanup(){channel.closeDelivery();if(stream)try{stream.close();}catch{}stream=null;}
 };
}
