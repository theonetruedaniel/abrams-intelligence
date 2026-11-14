import {canonical} from '../reference-core/shared/mock-core/state.mts';
export const realAnchor='C:\\abrams-synthetic\\abrams-reference-r3\\test-data';
export const scratchAnchor='C:\\abrams-synthetic\\abrams-o38-clean-store-r39-source-20261109\\o38-anchor-v1';
export const cleanBatch=/^clean-fixture-v1-[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;
const uuid=/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;
export function exact(v:any,keys:string[]):boolean{return !!v&&typeof v==='object'&&!Array.isArray(v)&&Object.keys(v).sort().join(',')===[...keys].sort().join(',');}
function identity(v:any){return exact(v,['pid','birth'])&&Number.isSafeInteger(v.pid)&&v.pid>0&&v.pid<=0xffffffff&&typeof v.birth==='string'&&/^[1-9][0-9]{0,19}$/.test(v.birth)&&BigInt(v.birth)<=18446744073709551615n;}
function plainData(v:any,depth=0):void{if(depth>3)throw Error('clean binding depth');if(v===null||['string','boolean','number'].includes(typeof v))return;if(typeof v!=='object'||Array.isArray(v)||![Object.prototype,null].includes(Object.getPrototypeOf(v)))throw Error('clean binding plain data');for(const key of Reflect.ownKeys(v)){if(typeof key!=='string')throw Error('clean binding symbol');const d=Object.getOwnPropertyDescriptor(v,key)!;if(!d.enumerable||!('value' in d))throw Error('clean binding accessor');plainData(d.value,depth+1);}}
export function validateCleanBinding(input:any,currentPid:number):any {
  // Authority is never reconstructed here: this is data validation only.
  plainData(input);const text=canonical(input);if(typeof text!=='string'||Buffer.byteLength(text)>8192)throw Error('clean binding bound');
  const v=JSON.parse(text);
  if(!exact(v,['version','attempt','caseId','anchor','batch','root','inventorySha256','manifestSha256','flushReceiptSha256','sourceSha256','owner','child','generation','nonce'])||v.version!==1||v.caseId!=='O38'||v.generation!==1||typeof v.attempt!=='string'||!uuid.test(v.attempt)||v.anchor!==scratchAnchor||typeof v.batch!=='string'||v.batch!=='clean-fixture-v1-'+v.attempt||!cleanBatch.test(v.batch)||v.root!==v.anchor+'\\'+v.batch+'\\root-0000'||!identity(v.owner)||!identity(v.child)||v.child.pid!==currentPid||v.owner.pid===v.child.pid)throw Error('clean binding schema');
  for(const k of ['inventorySha256','manifestSha256','flushReceiptSha256','sourceSha256','nonce'])if(typeof v[k]!=='string'||!/^[a-f0-9]{64}$/.test(v[k]))throw Error('clean binding digest');
  return Object.freeze({...v,owner:Object.freeze(v.owner),child:Object.freeze(v.child)});
}
export function isCleanRoot(root:any):boolean{return typeof root==='string'&&root.split('\\').some(x=>x.startsWith('clean-fixture-v1-'));}
