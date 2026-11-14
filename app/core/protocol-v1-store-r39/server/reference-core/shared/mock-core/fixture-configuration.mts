import {createHash} from 'node:crypto';
import {canonical} from './state.mts';
const exact=(v:any,keys:string[])=>v&&typeof v==='object'&&!Array.isArray(v)&&Object.keys(v).sort().join(',')===keys.sort().join(',');
// Owner-only pre-admission configuration. C/E remain fixed; H emits text and stays running.
export function normalizeFixtureConfiguration(input:any=undefined):any {
  const v=input===undefined?{version:1,H:{outputs:[]}}:input;
  if(!exact(v,['version','H'])||v.version!==1||!exact(v.H,['outputs'])||!Array.isArray(v.H.outputs)||v.H.outputs.length>128)throw Error('invalid fixture configuration');
  for(const text of v.H.outputs){
    if(typeof text!=='string'||[...text].length>1024||/[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/u.test(text))throw Error('invalid fixture configuration text');
  }
  return {version:1,fixtures:{C:[{kind:'output',data:{text:'alpha'}},{kind:'output',data:{text:'beta'}},{kind:'succeeded',data:{}}],E:[{kind:'output',data:{text:'alpha'}},{kind:'failed',data:{code:'fixture_error'}}],H:v.H.outputs.map((text:string)=>({kind:'output',data:{text}}))}};
}
export function fixtureManifest(sessionId:string,configuration:any):any {
  const configurationDigest=createHash('sha256').update(canonical(configuration)).digest('hex');
  const manifest={format:'abrams-owned-fixture-manifest',version:1,sessionId,configuration,configurationDigest};
  const bytes=canonical(manifest);
  return {bytes,identity:{configurationDigest,sha256:createHash('sha256').update(bytes).digest('hex')}};
}
