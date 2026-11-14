import {createHash} from 'node:crypto';
import {canonical} from '../mock-core/state.mts';
export function makeLedgerInspection(recovered:any,cached:any,beforeTransaction:any,afterTransaction:any,schemaSha256:string):any{
 if(beforeTransaction!==false||afterTransaction!==false||canonical(recovered)!==canonical(cached)||!Array.isArray(recovered.accepted)||recovered.accepted.length>4096||!/^[a-f0-9]{64}$/.test(schemaSha256))throw Error('physical ledger inspection unproven');
 const ids=new Set();for(const entry of recovered.accepted){if(typeof entry?.request?.requestId!=='string'||ids.has(entry.request.requestId)||entry.reply?.requestId!==entry.request.requestId)throw Error('physical ledger entries differ');ids.add(entry.request.requestId);}
 const used=recovered.accepted.length,entries=recovered.accepted.map((a:any)=>({message:structuredClone(a.request),reply:structuredClone(a.reply)}));
 return {ledger:{capacity:4096,usedSlots:used,remainingSlots:4096-used,uncommittedReservations:0,entries},witness:{autocommit:true,recoveredStateSha256:createHash('sha256').update(canonical(recovered)).digest('hex'),schemaSha256,reservationBasis:'exact synchronous schema and checked physical recovery at quiescent autocommit; not WAL/free-space or arbitrary-writer proof'}};
}
