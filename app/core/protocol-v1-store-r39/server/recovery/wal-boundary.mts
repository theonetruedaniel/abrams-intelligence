import {createHash} from 'node:crypto';
const maxBytes=1048576;
const check=(v:unknown)=>{if(!v)throw Error('O32 physical WAL evidence incomplete');};
const sha=(b:Uint8Array)=>createHash('sha256').update(b).digest('hex');
function snapshot(value:Uint8Array){check(value instanceof Uint8Array&&value.byteLength>=32&&value.byteLength<=maxBytes);return Buffer.from(value);}
function sums(parts:Uint8Array[],seed:[number,number],little:boolean):[number,number]{
 let [a,b]=seed;
 for(const part of parts){check(part.byteLength%8===0);const view=new DataView(part.buffer,part.byteOffset,part.byteLength);for(let i=0;i<part.byteLength;i+=8){a=(a+view.getUint32(i,little)+b)>>>0;b=(b+view.getUint32(i+4,little)+a)>>>0;}}
 return [a,b];
}
function parse(bytes:Buffer){
 const magic=bytes.readUInt32BE(0);check(magic===0x377f0682||magic===0x377f0683);check(bytes.readUInt32BE(4)===3007000);
 const pageSize=bytes.readUInt32BE(8);check(pageSize>=512&&pageSize<=65536&&(pageSize&(pageSize-1))===0);
 const stride=24+pageSize;check((bytes.length-32)%stride===0);const count=(bytes.length-32)/stride;check(count>0);
 const little=magic===0x377f0682,salt1=bytes.readUInt32BE(16),salt2=bytes.readUInt32BE(20);
 let rolling=sums([bytes.subarray(0,24)],[0,0],little);check(rolling[0]===bytes.readUInt32BE(24)&&rolling[1]===bytes.readUInt32BE(28));
 const frames:{index:number,page:number,commitSize:number}[]=[];let lastCommittedFrame=0;
 for(let i=0;i<count;i++){
  const offset=32+i*stride,page=bytes.readUInt32BE(offset),commitSize=bytes.readUInt32BE(offset+4);check(page>0&&bytes.readUInt32BE(offset+8)===salt1&&bytes.readUInt32BE(offset+12)===salt2);
  rolling=sums([bytes.subarray(offset,offset+8),bytes.subarray(offset+24,offset+stride)],rolling,little);
  check(rolling[0]===bytes.readUInt32BE(offset+16)&&rolling[1]===bytes.readUInt32BE(offset+20));
  if(commitSize!==0)lastCommittedFrame=i+1;frames.push(Object.freeze({index:i+1,page,commitSize}));
 }
 return Object.freeze({bytes:bytes.length,sha256:sha(bytes),pageSize,salt1,salt2,checksumOrder:little?'little':'big',frames:Object.freeze(frames),lastCommittedFrame});
}
export function inspectWal(value:Uint8Array){return parse(snapshot(value));}
export function inspectUncommittedSuffix(beforeValue:Uint8Array,afterValue:Uint8Array){
 const before=snapshot(beforeValue),after=snapshot(afterValue),a=parse(before),b=parse(after);
 check(a.lastCommittedFrame===a.frames.length&&after.length>before.length&&after.subarray(0,before.length).equals(before));
 check(a.pageSize===b.pageSize&&a.salt1===b.salt1&&a.salt2===b.salt2&&b.frames.length>a.frames.length);
 check(b.frames.slice(a.frames.length).every(f=>f.commitSize===0)&&b.lastCommittedFrame===a.lastCommittedFrame);
 return Object.freeze({format:'abrams-o32-wal-suffix',baselineBytes:a.bytes,observedBytes:b.bytes,baselineSha256:a.sha256,observedSha256:b.sha256,pageSize:a.pageSize,salt1:a.salt1,salt2:a.salt2,checksumOrder:a.checksumOrder,baselineFrames:a.frames.length,observedFrames:b.frames.length,newFrames:b.frames.length-a.frames.length,lastCommittedFrame:b.lastCommittedFrame});
}
