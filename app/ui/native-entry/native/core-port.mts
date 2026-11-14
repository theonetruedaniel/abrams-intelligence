import type {ShellCorePort} from '../dom/base/renderer/shell-core-adapter.mts';
import {parseInbound, parseStreamEvent} from '../dom/base/inputs/shared/contracts/protocol.mts';

export type NativeInvoke = (command: string, args: Record<string, unknown>) => Promise<unknown>;
type Lease = {generation:number; native:number; readId:number; requestPending:boolean; active:boolean; opened:boolean; close:Promise<void>|null; timer:ReturnType<typeof setTimeout>|null; receive:(g:number,b:Uint8Array)=>boolean; end:()=>void};
const length = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype),'byteLength')!.get!;
const buffer = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype),'buffer')!.get!;
const brand = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype),Symbol.toStringTag)!.get!;
const ordinaryBuffer = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,'byteLength')!.get!;
function requestCopy(input:Uint8Array):Uint8Array {
  if(Object.getPrototypeOf(input)!==Uint8Array.prototype || brand.call(input)!=='Uint8Array') throw Error('plain byte input required');
  ordinaryBuffer.call(buffer.call(input));
  if(length.call(input)>65536) throw Error('request too large');
  const copy = new Uint8Array(input);
  if(parseInbound(copy).kind!=='request') throw Error('v1 request required');
  return copy;
}
function dataArray(input:unknown, max:number):unknown[] {
  if(!Array.isArray(input)) throw Error('array required');
  const n = Object.getOwnPropertyDescriptor(input,'length')?.value;
  if(!Number.isSafeInteger(n)||n<0||n>max) throw Error('bounded array required');
  const copy:unknown[]=[];
  for(let i=0;i<n;i++){
    const d=Object.getOwnPropertyDescriptor(input,String(i));
    if(!d||!Object.hasOwn(d,'value')) throw Error('own data elements required');
    copy.push(d.value);
  }
  return copy;
}
function nativeBytes(input:unknown,max=65536):Uint8Array {
  const values=dataArray(input,max);
  if(values.length===0 || values.some(x=>typeof x!=='number'||!Number.isInteger(x)||x<0||x>255)) throw Error('byte response required');
  return Uint8Array.from(values as number[]);
}

// Explicit host injection only. No endpoint discovery, Core construction or
// auto-connect. Polling carries authoritative stream-event bytes, not fake events.
export function createNativeCorePort(invoke:NativeInvoke):ShellCorePort {
  if(typeof invoke!=='function') throw Error('native invoker required');
  const binding=Object.freeze({});
  let lease:Lease|null=null,last=0,uncertain=false;
  let tail:Promise<unknown>=Promise.resolve();
  const serial=<T,>(work:()=>Promise<T>):Promise<T>=>{
    const result=tail.then(work); tail=result.then(()=>undefined,()=>undefined); return result;
  };
  const current=(s:Lease)=>lease===s&&s.active&&!uncertain;
  const close=(s:Lease):Promise<void>=>{
    if(s.close)return s.close;
    s.active=false;
    if(s.timer!==null){clearTimeout(s.timer);s.timer=null;}
    // Wait for every already-issued request/read, then require native proof.
    s.close=serial(async()=>{
      try{
        if(!s.opened)throw Error('acquisition cleanup unproven');
        const ack=await invoke('core_close',{generation:s.native});
        if(ack!==null)throw Error('invalid close acknowledgement');
        if(lease===s)lease=null;
      }catch(error){uncertain=true;throw error;}
      finally{s.receive=()=>false;s.end=()=>{};}
    });
    return s.close;
  };
  const fail=(s:Lease)=>{
    if(!s.active)return;
    const end=s.end;
    const closing=close(s);
    try{end();}catch{/* End callbacks cannot restore authority. */}
    void closing.catch(()=>{}); // Failure remains latched and release still rejects.
  };
  const poll=(s:Lease)=>{
    if(!current(s))return;
    s.timer=setTimeout(()=>{
      s.timer=null;
      void serial(async()=>{
        if(!current(s))return;
        if(s.readId===2147483647)throw Error('read operation exhausted');
        const raw=await invoke('core_read_events',{generation:s.native,readId:++s.readId});
        if(!current(s))return;
        const events=dataArray(raw,16).map(item=>nativeBytes(item));
        // Validate the entire batch before delivering any member.
        for(const bytes of events)parseStreamEvent(bytes);
        for(const bytes of events){
          if(!current(s))return;
          if(s.receive(s.generation,bytes)!==true)throw Error('event rejected');
        }
      }).then(()=>poll(s),()=>fail(s));
    },100);
  };
  return Object.freeze({protocol:1 as const,binding,
    async openEvents(generation:number,receive:Lease['receive'],end:Lease['end']){
      if(uncertain||lease||!Number.isInteger(generation)||generation<1||generation>2147483647||generation!==last+1||typeof receive!=='function'||typeof end!=='function')throw Error('subscription unavailable');
      const s:Lease={generation,native:0,readId:0,requestPending:false,active:true,opened:false,close:null,timer:null,receive,end};lease=s;last=generation;
      try{
        const operationId=crypto.randomUUID(); // Correlation only, never approval authority.
        const ack=await serial(()=>invoke('core_open',{operationId}));
        if(typeof ack!=='number'||!Number.isInteger(ack)||ack<1||ack>2147483647)throw Error('invalid native lease handle');
        s.native=ack;
        s.opened=true;poll(s);
        return ()=>close(s);
      }catch(error){s.active=false;uncertain=true;s.receive=()=>false;s.end=()=>{};throw error;}
    },
    async request(input:Uint8Array,generation:number){
      const s=lease;
      if(!s||!current(s)||s.generation!==generation)throw Error('inactive generation');
      if(s.requestPending)throw Error('native request already pending');
      s.requestPending=true;
      try {
      const bytes=requestCopy(input);
      return await serial(async()=>{
        if(!current(s))throw Error('retired before request');
        try{
          const raw=await invoke('core_request',{generation:s.native,bytes:Array.from(bytes)});
          if(!current(s))throw Error('retired reply');
          const reply=nativeBytes(raw,1048576);
          if(!current(s))throw Error('retired reply');
          return reply;
        }catch(error){fail(s);throw error;}
      });
      } finally {s.requestPending=false;}
    }
  });
}
