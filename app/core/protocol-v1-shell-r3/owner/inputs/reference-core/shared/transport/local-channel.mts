import {evaluateFixtureEvent} from '../mock-core/fixture-events.mts';
import {canonical} from '../mock-core/state.mts';
// Synchronous owned in-process harness channel; not HTTP/SSE, framing or Tauri bridge.
export class LocalChannel {
  #core:any;#binding:any;#generation=0;#active=false;#pending:any[]=[];#lastSeq=0;
  constructor(core:any){this.#core=core;this.#binding=core.binding;}
  get context(){return Object.freeze({binding:this.#binding,generation:this.#generation});}
  get active(){return this.#active;}
  get pendingCount(){return this.#pending.length;}
  #ready(){try{return this.#core.inspectState();}catch(e){this.closeDelivery();throw e;}}
  #auth(c:any){return this.#generation>0&&c?.binding===this.#binding&&c.generation===this.#generation&&this.#core.binding===this.#binding;}
  register(generation:number){
    const state=this.#ready();if(!Number.isSafeInteger(generation)||generation<1||generation>2147483647||generation!==this.#generation+1)throw Error('invalid subscription generation');
    this.closeDelivery();this.#generation=generation;this.#pending=state.journal.map((j:any)=>structuredClone(j.event));this.#lastSeq=state.journal.length;this.#active=true;return this.context;
  }
  closeDelivery(){this.#active=false;this.#pending=[];}
  #collect(){const state=this.#ready();if(!this.#active)return;const events=state.journal.slice(this.#lastSeq).map((j:any)=>structuredClone(j.event));if(this.#pending.length+events.length>128){this.closeDelivery();throw Error('bounded delivery overflow');}this.#pending.push(...events);this.#lastSeq=state.journal.length;}
  execute(bytes:Uint8Array,context:any){
    this.#ready();if(!this.#auth(context))return {kind:'uncorrelated',code:'transport_unavailable'};
    try{const reply=this.#core.execute(bytes,this.#binding);this.#collect();return reply;}catch(e){this.closeDelivery();throw e;}
  }
  approve(approval:any){this.#ready();this.#core.approve(approval);this.#collect();}
  invalidate(approvalId:string,revision:number){this.#ready();this.#core.invalidate(approvalId,revision);this.#collect();}
  tick(runId:string){this.#ready();this.#core.tick(runId);this.#collect();}
  revoke(type:string){this.#ready();this.#core.revoke(type);this.closeDelivery();}
  attemptFixtureEvent(event:any){
    const before=this.#ready(),evaluated=evaluateFixtureEvent(before,event);if(!evaluated.accepted)return false;
    this.#core.tick(event.runId);if(canonical(this.#core.inspectState())!==canonical(evaluated.unit.state)){this.closeDelivery();throw Error('fixture admission/state mismatch');}this.#collect();return true;
  }
  drain(sink:any){let count=0;this.#ready();if(!this.#active)return 0;const callbackContext=Object.freeze({...this.context,lifecycle:sink.eventContext?.lifecycle});try{while(this.#pending.length){this.#ready();const event=this.#pending[0];sink.receiveEvent(structuredClone(event),callbackContext);this.#pending.shift();count++;}return count;}catch(e){this.closeDelivery();throw e;}}
  deliverFixture(events:any[],sink:any){
    this.#ready();if(!this.#active)throw Error('delivery closed');
    if(!Array.isArray(events)||events.length>256)throw Error('fixture injection bound');
    const callbackContext=Object.freeze({...this.context,lifecycle:sink.eventContext?.lifecycle});
    for(const event of events){this.#ready();sink.receiveEvent(structuredClone(event),callbackContext);this.#pending=this.#pending.filter(e=>canonical(e)!==canonical(event));}
  }
}
