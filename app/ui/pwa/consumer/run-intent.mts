export interface MockRunIntent {runId:string;fixtureId:string;approvalId:string;approvalRevision:number}
// Copy only ordinary own data. No caller epoch or owner approval operation.
export function copyRunIntent(value:unknown):MockRunIntent {
 if(!value||typeof value!=='object'||Object.getPrototypeOf(value)!==Object.prototype)throw Error('plain run intent required');
 const keys=['runId','fixtureId','approvalId','approvalRevision'];
 if(Reflect.ownKeys(value).length!==keys.length)throw Error('exact run intent required');
 const copy:any={};
 for(const key of keys){const d=Object.getOwnPropertyDescriptor(value,key);if(!d||!Object.hasOwn(d,'value'))throw Error('own data intent required');copy[key]=d.value;}
 if(!['runId','fixtureId','approvalId'].every(k=>typeof copy[k]==='string'&&/^[A-Za-z0-9_-]{1,64}$/.test(copy[k]))||!Number.isSafeInteger(copy.approvalRevision)||copy.approvalRevision<1)throw Error('invalid intent');
 return Object.freeze(copy);
}
