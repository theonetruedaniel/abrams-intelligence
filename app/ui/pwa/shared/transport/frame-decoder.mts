import {parseStreamEvent} from '../contracts/protocol.mts';

type Storage={allocate:(bytes:number,role:'header'|'body',frame:number)=>Uint8Array;release:(bytes:Uint8Array)=>void};
type Hooks={storage:Storage;event:(event:Record<string,unknown>)=>void;headerAccepted:(frame:number,length:number)=>void;channelFailed:()=>void};

// Pure synthetic stream decoder. No IO, queue, SQLite, authentication or bridge.
// Caller owns input bytes; only header and current body are decoder-owned.
export class FrameDecoder {
  #hooks:Hooks;#header:Uint8Array|undefined;#headerUsed=0;
  #body:Uint8Array|undefined;#bodyUsed=0;#length=0;#frame=0;
  #failed=false;#ended=false;#pushing=false;
  constructor(hooks:Hooks) {
    this.#hooks=hooks;
    this.#header=hooks.storage.allocate(4,'header',0);
  }
  get failed(){return this.#failed;}
  get degraded(){return this.#failed;}
  #releaseBody() {
    const previous=this.#body;this.#body=undefined;this.#bodyUsed=0;this.#length=0;
    if(previous)this.#hooks.storage.release(previous);
  }
  #releaseHeader() {
    const previous=this.#header;this.#header=undefined;this.#headerUsed=0;
    if(previous)this.#hooks.storage.release(previous);
  }
  #fail() {
    if(this.#failed)return;
    this.#failed=true;this.#ended=true;
    // Terminal state is latched before calling user hooks. Cleanup must still
    // attempt both ownership releases if notification or a release hook throws.
    try {this.#hooks.channelFailed();}
    finally {try{this.#releaseBody();}finally{this.#releaseHeader();}}
  }
  push(bytes:Uint8Array):void {
    if(this.#ended)return;
    if(this.#pushing||!(bytes instanceof Uint8Array)){this.#fail();return;}
    this.#pushing=true;
    try {
      let offset=0;
      while(offset<bytes.byteLength&&!this.#ended) {
        if(!this.#body) {
          while(this.#headerUsed<4&&offset<bytes.byteLength)
            this.#header![this.#headerUsed++]=bytes[offset++];
          if(this.#headerUsed<4)return;
          const h=this.#header!;
          // Multiplication avoids signed bitwise overflow at uint32 max.
          const length=h[0]*16777216+h[1]*65536+h[2]*256+h[3];
          if(length<1||length>65536){this.#fail();return;}
          this.#hooks.headerAccepted(this.#frame,length);
          if(this.#ended)return; // callback may reenter push/end and fail us
          this.#length=length;
          this.#body=this.#hooks.storage.allocate(length,'body',this.#frame);
          this.#headerUsed=0;
        }
        // Copy only into the current admitted body. Never concatenate chunks,
        // retain caller input, or create copied slices/whole-chunk staging.
        const count=Math.min(this.#length-this.#bodyUsed,bytes.byteLength-offset);
        for(let i=0;i<count;i++)this.#body![this.#bodyUsed++]=bytes[offset++];
        if(this.#bodyUsed===this.#length) {
          let event:Record<string,unknown>;
          try{event=parseStreamEvent(this.#body!);}
          catch{this.#fail();return;}
          this.#releaseBody();
          if(this.#ended)return;
          this.#frame++;
          this.#hooks.event(event);
        }
      }
    } catch(error) {
      // A callback exception makes dropping the remaining input explicit and
      // terminal. Preserve the primary error if failure notification also throws.
      try{this.#fail();}catch{}
      throw error;
    } finally {this.#pushing=false;}
  }
  end():void {
    if(this.#ended)return;
    if(this.#pushing){this.#fail();return;}
    if(this.#headerUsed!==0||this.#body){this.#fail();return;}
    this.#ended=true;this.#releaseHeader();
  }
}
