import {readFileSync,writeFileSync} from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {createDocumentContract,renderOwnedDocument} from './host/document-contract.mts';
const root=dirname(fileURLToPath(import.meta.url)),modules=new Map<string,number>(),pins:any[]=[];
const names=['shared/contracts/protocol.mts','consumer/canonical.mts','consumer/projection.mts','shared/transport/frame-decoder.mts','consumer/renderer-lifecycle.mts','strict-reply.mts','browser-wire.mts','consumer/response-recovery.mts','consumer/run-intent.mts','consumer/page-controller.mts','consumer/pwa-consumer.mts','app/page-controls.mts','consumer/page-controls.mts','document/entrypoint.mts','document/markup.mts','host/document-contract.mts','host/bootstrap-loader.mts','host/startup.mts'];
let code='(()=>{\n"use strict";const m=[];\n';
for(const name of names){
 const path=resolve(root,name),input=readFileSync(path,'utf8');let source=stripTypeScriptTypes(input.replace(/\r\n?/g,'\n'),{mode:'strip'});const exports:string[]=[];
 source=source.replace(/import\s+\{([^}]+)\}\s+from\s+(['"])([^'"]+)\2;?/g,(_whole,bindings,_quote,ref)=>{const index=modules.get(resolve(dirname(path),ref));if(index===undefined)throw Error('dependency order '+name);return 'const {'+bindings.replace(/\bas\b/g,':')+'}=m['+index+'];';});
 source=source.replace(/export\s+(async\s+)?(function|class|const|let)\s+(\w+)/g,(_whole,asyncPart,kind,key)=>{exports.push(key);return (asyncPart??'')+kind+' '+key;});
 if(/\b(?:import|export)\s/.test(source))throw Error('unsupported module syntax '+name);
 const index=modules.size;modules.set(path,index);code+='m['+index+']=(()=>{\n'+source+'\nreturn Object.freeze({'+exports.join(',')+'});})();\n';pins.push({path:name,sha256:createHash('sha256').update(input).digest('hex')});
}
code+='return m[17];})();';code=code.replace(/<\/script/gi,'<\\/script');
if(Buffer.byteLength(code)>262144)throw Error('bounded document code');
const inline='globalThis.AbramsPwaReady=(async()=>{const api='+code+'await api.startOwnedDocument({document,window,origin:location.origin,fetchImpl:(url,options)=>fetch(url,options)});return true;})().catch(error=>{if(error&&typeof error.cleanup==="function")globalThis.AbramsPwaCleanup=error.cleanup;try{const status=document.getElementById("abrams-page-status");if(status)status.textContent="Unavailable";for(const key of ["connect","refresh","disconnect","shutdown","runStart","runCancel","globalStop"]){const el=document.getElementById("abrams-page-"+key);if(el)el.disabled=true;}}catch{}return false;});';
const contract=await createDocumentContract(inline),html=renderOwnedDocument(contract,null);
const artifact=JSON.stringify({version:1,code,inline,html,contract,modules:pins},null,2)+'\n';
writeFileSync(resolve(root,'../../../.work/pwa/generated/document.json'),artifact,{flag:'wx'});
writeFileSync(resolve(root,'../../../.work/pwa/generated/GENERATION-RECEIPT.json'),JSON.stringify({node:process.version,moduleCount:pins.length,codeSha256:createHash('sha256').update(code).digest('hex'),inlineSha256:createHash('sha256').update(inline).digest('hex'),htmlSha256:createHash('sha256').update(html).digest('hex'),artifactSha256:createHash('sha256').update(artifact).digest('hex'),runtimeQualified:false},null,2)+'\n',{flag:'wx'});
console.log('Generated self-mounting document from '+pins.length+' owner-free modules.');