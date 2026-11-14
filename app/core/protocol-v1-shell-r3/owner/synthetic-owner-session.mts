import {createOwnedReferenceCoreTransport} from './inputs/owned-reference-core-transport.mts';
import {createOwnerEndpoint} from './owner-endpoint.mts';
import {bindOwnerByteChannel} from './owner-channel.mts';
import type {OwnerDuplex} from './owner-channel.mts';

// Explicit test-only owner construction. Never imported into renderer modules.
// Approval/tick/invalidation stay on owner; none is a wire opcode.
export function createSyntheticOwnerByteSession(options:{testOnly:true;sessionId:string;fixtureConfiguration?:unknown},channel:OwnerDuplex){
 const owned=createOwnedReferenceCoreTransport(options);
 let releaseProofs=0;
 const port=Object.freeze({...owned.port,async openEvents(...args:Parameters<typeof owned.port.openEvents>){
  const release=await owned.port.openEvents(...args);
  return async()=>{
   const before=JSON.stringify(owned.owner.inspectState());
   await release();
   if(JSON.stringify(owned.owner.inspectState())!==before)throw Error('local_release_changed_Core');
   releaseProofs++;
  };
 }});
 const endpoint=createOwnerEndpoint(port,()=>owned.owner.inspectTransport());
 const server=bindOwnerByteChannel(endpoint,channel);
 return Object.freeze({server,owner:owned.owner,inspect:endpoint.inspect,releaseProofs:()=>releaseProofs});
}
