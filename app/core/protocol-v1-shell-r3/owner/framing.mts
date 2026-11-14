// Transport framing only. Core envelopes remain opaque, unchanged v1 bytes.
export const HEADER=24, REQUEST_LIMIT=65536, REPLY_LIMIT=1048576, EVENT_LIMIT=65536, BATCH_LIMIT=16;
export const BODY_LIMIT=BATCH_LIMIT*(4+EVENT_LIMIT), FRAME_LIMIT=HEADER+BODY_LIMIT;
export type Frame={op:number;kind:number;seq:number;lease:number;readId:number;body:Uint8Array};
const proto=Object.getPrototypeOf(Uint8Array.prototype);
const len=Object.getOwnPropertyDescriptor(proto,'byteLength')!.get!;
const buf=Object.getOwnPropertyDescriptor(proto,'buffer')!.get!;
const brand=Object.getOwnPropertyDescriptor(proto,Symbol.toStringTag)!.get!;
const offset=Object.getOwnPropertyDescriptor(proto,'byteOffset')!.get!;
const ordinary=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,'byteLength')!.get!;
export function viewBytes(input:Uint8Array,max:number):Uint8Array{
 if(Object.getPrototypeOf(input)!==Uint8Array.prototype||brand.call(input)!=='Uint8Array')throw Error('byte_brand');
 const buffer=buf.call(input);ordinary.call(buffer);const length=len.call(input);if(length>max)throw Error('byte_limit');return new Uint8Array(buffer,offset.call(input),length);
}
export const copyBytes=(input:Uint8Array,max:number)=>new Uint8Array(viewBytes(input,max));
export function declaredSize(header:Uint8Array,requestOnly=false):number{
 if(header.length<HEADER)throw Error('short_header');
 if(header[0]!==65||header[1]!==66||header[2]!==80||header[3]!==49||header[6]!==0||header[7]!==0)throw Error('header');
 const d=new DataView(header.buffer,header.byteOffset,HEADER),op=header[4]!,kind=header[5]!,seq=d.getUint32(8,true),lease=d.getUint32(12,true),readId=d.getUint32(16,true),n=d.getUint32(20,true);
 if(op<1||op>4||kind>2||seq<1||seq>2147483647||lease>2147483647||readId>2147483647||(requestOnly&&kind!==0))throw Error('header_fields');
 if(n>BODY_LIMIT)throw Error('frame_limit');
 if(kind===0){
  if(op===1&&(lease!==0||readId!==0||n!==0))throw Error('open_fields');
  if(op!==1&&lease===0)throw Error('lease_required');
  if(op===2&&(readId!==0||n===0||n>REQUEST_LIMIT))throw Error('request_fields');
  if(op===3&&(readId===0||n!==0))throw Error('read_fields');
  if(op===4&&(readId!==0||n!==0))throw Error('close_fields');
 }else if(kind===2&&n>64)throw Error('error_limit');
 else if(kind===1&&op===2&&n>REPLY_LIMIT)throw Error('reply_limit');
 return HEADER+n;
}
export function decode(input:Uint8Array):Frame{
 const view=viewBytes(input,FRAME_LIMIT);if(view.length<HEADER||declaredSize(view)!==view.length)throw Error('frame_size');const b=new Uint8Array(view);
 const d=new DataView(b.buffer);const f={op:b[4],kind:b[5],seq:d.getUint32(8,true),lease:d.getUint32(12,true),readId:d.getUint32(16,true),body:b.slice(HEADER)};
 if(f.op<1||f.op>4||f.kind>2||f.seq<1||f.seq>2147483647||f.lease>2147483647||f.readId>2147483647)throw Error('frame_fields');return f;
}
export function encode(f:Frame):Uint8Array{
 const body=copyBytes(f.body,BODY_LIMIT);const b=new Uint8Array(HEADER+body.length);b.set([65,66,80,49,f.op,f.kind,0,0]);const d=new DataView(b.buffer);
 d.setUint32(8,f.seq,true);d.setUint32(12,f.lease,true);d.setUint32(16,f.readId,true);d.setUint32(20,body.length,true);b.set(body,HEADER);return b;
}
export function packEvents(events:Uint8Array[]):Uint8Array{
 if(events.length>BATCH_LIMIT)throw Error('batch_limit');let size=0;for(const e of events){if(!e.length||e.length>EVENT_LIMIT)throw Error('event_limit');size+=4+e.length;}
 const out=new Uint8Array(size);const d=new DataView(out.buffer);let offset=0;for(const e of events){d.setUint32(offset,e.length,true);offset+=4;out.set(e,offset);offset+=e.length;}return out;
}
export function unpackEvents(body:Uint8Array):Uint8Array[]{
 const b=copyBytes(body,BODY_LIMIT),d=new DataView(b.buffer);let offset=0;const events:Uint8Array[]=[];
 while(offset<b.length){if(offset+4>b.length||events.length===BATCH_LIMIT)throw Error('batch_format');const n=d.getUint32(offset,true);offset+=4;if(!n||n>EVENT_LIMIT||offset+n>b.length)throw Error('event_limit');events.push(b.slice(offset,offset+n));offset+=n;}return events;
}
