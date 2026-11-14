import type {Projection} from './projection.mts';
import {FrameDecoder} from '../shared/transport/frame-decoder.mts';
// Renderer-side prerequisite only; no transport, Core/store or timing promises.
export class RendererLifecycle {
 #projection:Projection;#revision=0;#connected=true;#acceptingEvents=true;
 constructor(projection:Projection){this.#projection=projection;}
 snapshot(){const state=this.#projection.snapshot();return {...state,degraded:state.degraded||!this.#connected};}
 captureEvents(){
  const revision=this.#revision,context=this.#projection.eventContext;
  // The existing Projection buffers current-channel live events while its
  // replay is in flight, then drains events beyond the reply watermark.
  return Object.freeze({receiveEvent:(event:any)=>this.#acceptingEvents&&revision===this.#revision?this.#projection.receiveEvent(event,context):false});
 }
 captureFramedEvents(storage:ConstructorParameters<typeof FrameDecoder>[0]['storage']){
  const revision=this.#revision,sink=this.captureEvents();
  return new FrameDecoder({storage,headerAccepted:()=>{},event:event=>{
   if(!sink.receiveEvent(event.payload))throw Error('obsolete or rejected renderer channel');
  },channelFailed:()=>{if(revision===this.#revision)this.disconnect();}});
 }
 refresh(){this.#projection.refresh();return this.reconnect();}
 disconnect(){this.#revision++;this.#connected=false;this.#acceptingEvents=false;}
 reconnect(){
  const revision=++this.#revision;this.#connected=false;this.#acceptingEvents=true;
  const request=this.#projection.createRequest('reconnect',{epoch:this.#projection.inspect().epoch,afterGlobalSeq:0});
  const context=this.#projection.issue(request);let settled=false;
  return Object.freeze({request,receiveReply:(reply:any)=>{
   if(settled||revision!==this.#revision)return false;
   settled=true;const accepted=this.#projection.applyReply(reply,context);
   if(accepted)this.#connected=true;else this.#acceptingEvents=false;return accepted;
  }});
 }
}
