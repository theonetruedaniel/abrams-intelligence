import {parseBootstrap} from '../strict-reply.mts';
import {DOCUMENT_BODY} from '../document/markup.mts';
const owned=new WeakSet<object>(),encoder=new TextEncoder();
export type DocumentContract={version:1,prefix:string,suffix:string,csp:string,maxBytes:number};
export async function createDocumentContract(code:string):Promise<DocumentContract>{
 if(typeof code!=='string'||encoder.encode(code).length<1||encoder.encode(code).length>262144||/<\/script/i.test(code))throw Error('invalid fixed startup code');
 const digest=new Uint8Array(await crypto.subtle.digest('SHA-256',encoder.encode(code))),alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';let hash='';
 for(let i=0;i<digest.length;i+=3){const n=digest[i]*65536+(digest[i+1]??0)*256+(digest[i+2]??0);hash+=alphabet[n>>>18]+alphabet[(n>>>12)&63]+(i+1<digest.length?alphabet[(n>>>6)&63]:'=')+(i+2<digest.length?alphabet[n&63]:'=');}
 const csp="default-src 'none'; script-src 'sha256-"+hash+"'; connect-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'";
 const prefix='<!doctype html><html lang="en" data-abrams-document="3"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="'+csp+'"><title>Abrams Intelligence synthetic consumer</title></head><body>'+DOCUMENT_BODY+'<p>Synthetic selection: run A, fixture H, approval reference approval_A revision 1. Selection is not an approval grant.</p><script id="abrams-bootstrap" type="application/json">';
 const suffix='</script><script id="abrams-startup">'+code+'</script></body></html>';
 const value=Object.freeze({version:1 as const,prefix,suffix,csp,maxBytes:encoder.encode(prefix).length+4096+encoder.encode(suffix).length});owned.add(value);return value;
}
export function requireDocumentContract(value:any):asserts value is DocumentContract{if(!value||!owned.has(value))throw Error('owned document contract required');}
export function parseInitialConfiguration(bytes:Uint8Array){
 if(!(bytes instanceof Uint8Array)||bytes.length<1||bytes.length>4096)throw Error('bounded initial configuration required');
 if(new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes)==='null')return null;
 return parseBootstrap(bytes);
}
export function renderOwnedDocument(contract:DocumentContract,bootstrap:any=null){
 requireDocumentContract(contract);const json=JSON.stringify(bootstrap).replace(/[<>&\u2028\u2029]/g,c=>'\\u'+c.charCodeAt(0).toString(16).padStart(4,'0'));parseInitialConfiguration(encoder.encode(json));return contract.prefix+json+contract.suffix;
}
export function extractDocumentBootstrap(bytes:Uint8Array,contract:DocumentContract):Uint8Array{
 requireDocumentContract(contract);if(!(bytes instanceof Uint8Array)||bytes.length>contract.maxBytes)throw Error('invalid owned document');const text=new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes);
 if(!text.startsWith(contract.prefix)||!text.endsWith(contract.suffix))throw Error('invalid owned document framing');const json=encoder.encode(text.slice(contract.prefix.length,text.length-contract.suffix.length));parseBootstrap(json);return json;
}
