import {lstatSync,realpathSync,openSync,fstatSync,readSync,closeSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {canonical} from '../mock-core/state.mts';
export const testAnchor='C:\\abrams-synthetic\\abrams-reference-r3\\test-data';
export const batchPattern=/^fixture-admission-[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;
const hash=(bytes:Uint8Array)=>createHash('sha256').update(bytes).digest('hex');
const exact=(v:any,keys:string[])=>v&&typeof v==='object'&&!Array.isArray(v)&&Object.keys(v).sort().join(',')===keys.sort().join(',');
export function checkOwnedPath(path:string):void {
  if(!/^C:\\[A-Za-z0-9 _.-]+(?:\\[A-Za-z0-9 _.-]+)*$/.test(path)||path.split('\\').some(p=>p==='.'||p==='..'||p.endsWith('.')||p.endsWith(' ')))throw Error('owner admission path refused');
  if(path!==testAnchor&&!path.startsWith(testAnchor+'\\'))throw Error('owner admission outside granted anchor');
  // The owner validates ancestors BEFORE launching this process. Public Node fs calls stay granted.
  let current=testAnchor;
  const segments=path===testAnchor?['']:['',...path.slice(testAnchor.length+1).split('\\')];
  for(const segment of segments){
    if(segment)current=join(current,segment);const stat=lstatSync(current);
    if(stat.isSymbolicLink()||realpathSync(current)!==current)throw Error('owner admission path alias/reparse refused');
  }
}
export const evidenceBounds=Object.freeze({inventory:2097152,receipt:262144,consumer:1024,manifest:65536});
export function readOwnedBytes(path:string,max:number):Buffer {
  if(!Number.isSafeInteger(max)||max<1||max>evidenceBounds.inventory)throw Error('owner evidence bound invalid');
  checkOwnedPath(path);
  if(!lstatSync(path).isFile())throw Error('owner evidence requires regular file');
  // Public path-based open retains Node permissions. The handle is never caller supplied.
  const fd=openSync(path,'r');
  try{
    const stat=fstatSync(fd);
    if(!stat.isFile())throw Error('owner evidence requires regular file');
    if(!Number.isSafeInteger(stat.size)||stat.size<0||stat.size>max)throw Error('owner evidence size bound');
    const bytes=Buffer.alloc(stat.size);let offset=0;
    while(offset<bytes.length){const n=readSync(fd,bytes,offset,bytes.length-offset,offset);if(n===0)throw Error('owner evidence truncated');offset+=n;}
    const tail=Buffer.alloc(1);
    if(readSync(fd,tail,0,1,bytes.length)!==0||fstatSync(fd).size!==bytes.length)throw Error('owner evidence changed size');
    return bytes;
  }finally{closeSync(fd);}
}
export function readOwnedJSON(path:string,max:number):any {
  const bytes=readOwnedBytes(path,max),text=new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes),value=JSON.parse(text);
  if(canonical(value)!==text)throw Error('owner admission noncanonical bytes');return {bytes,value};
}
export function readBatch(batch:string,inventorySha256:string,flushReceiptSha256:string):any {
  if(!/^[a-f0-9]{64}$/.test(inventorySha256)||!/^[a-f0-9]{64}$/.test(flushReceiptSha256))throw Error('independent owner flush identity required');
  if(!batchPattern.test(batch))throw Error('owner admission batch refused');
  const dir=join(testAnchor,batch);checkOwnedPath(dir);
  const inventory=readOwnedJSON(join(dir,'inventory.json'),evidenceBounds.inventory),v=inventory.value;
  const actualHash=hash(inventory.bytes);if(actualHash!==inventorySha256)throw Error('owner admission inventory digest');
  if(!exact(v,['format','version','batch','roots'])||v.format!=='abrams-owner-fixture-inventory'||v.version!==1||v.batch!==batch||!Array.isArray(v.roots)||v.roots.length<1||v.roots.length>400)throw Error('owner admission inventory schema');
  let total=0;
  for(const [i,row] of v.roots.entries()){
    if(!exact(row,['root','group','bytes','sha256','configurationDigest','manifestBase64'])||row.root!=='root-'+String(i).padStart(4,'0')||typeof row.group!=='string'||!/^[a-z-]{1,32}$/.test(row.group))throw Error('owner admission root schema');
    if(!Number.isSafeInteger(row.bytes)||row.bytes<0||row.bytes>65536||typeof row.manifestBase64!=='string'||row.manifestBase64.length>87384)throw Error('owner admission manifest bound');
    const body=Buffer.from(row.manifestBase64,'base64');if(body.toString('base64')!==row.manifestBase64||body.length!==row.bytes||hash(body)!==row.sha256||!(/^[a-f0-9]{64}$/).test(row.configurationDigest))throw Error('owner admission manifest digest');
    total+=body.length;
  }
  if(total>1048576)throw Error('owner admission total bound');
  const receipt=readOwnedJSON(join(dir,'flush-receipt.json'),evidenceBounds.receipt),r=receipt.value;
  if(hash(receipt.bytes)!==flushReceiptSha256)throw Error('owner admission independently published flush identity');
  const files=v.roots.filter((x:any)=>x.bytes>0).map(({root,bytes,sha256,configurationDigest}:any)=>({root,bytes,sha256,configurationDigest}));
  if(canonical(r)!==canonical({format:'abrams-owner-flush-receipt',version:1,batch,inventorySha256:actualHash,files}))throw Error('owner admission flush receipt');
  return {dir,inventory:v,inventorySha256:actualHash,receiptSha256:hash(receipt.bytes)};
}
// This consumes owner evidence; it does not expose a flush operation to the restricted Core.
export function requireFixtureAdmission(root:string,expectedBytes:string):any {
  const match=new RegExp('^'+testAnchor.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\\\(fixture-admission-[a-f0-9-]+)\\\\(root-[0-9]{4})$').exec(root);
  if(!match)throw Error('owner fixture admission required');
  const batch=readBatch(match[1],process.env.ABRAMS_INVENTORY_SHA256??'',process.env.ABRAMS_FLUSH_RECEIPT_SHA256??'');checkOwnedPath(root);
  const consumer=readOwnedJSON(join(batch.dir,'run-consumer.json'),evidenceBounds.consumer).value;
  if(canonical(consumer)!==canonical({batch:match[1],inventorySha256:batch.inventorySha256,pid:process.pid}))throw Error('owner admission consumer identity');
  const row=batch.inventory.roots.find((x:any)=>x.root===match[2]);const expected=Buffer.from(expectedBytes,'utf8');
  if(!row||row.bytes!==expected.length||row.sha256!==hash(expected)||row.manifestBase64!==expected.toString('base64'))throw Error('journal_corrupt: fixture manifest owner configuration identity');
  if(!readOwnedBytes(join(root,'fixture-manifest.json'),evidenceBounds.manifest).equals(expected))throw Error('journal_corrupt: fixture manifest bytes/configuration mismatch');
  return {inventorySha256:batch.inventorySha256,flushReceiptSha256:batch.receiptSha256,batch:match[1],root:match[2],scope:'trusted-owner synthetic preparation; hostile concurrent-path containment unqualified'};
}
