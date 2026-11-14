import type { Request } from '../contracts/protocol.mts';
export const canonical = (v: any): string => JSON.stringify(v === null || typeof v !== 'object' ? v : Array.isArray(v) ? v.map(x => JSON.parse(canonical(x))) : Object.fromEntries(Object.keys(v).sort().map(k => [k, JSON.parse(canonical(v[k]))])));
export const initialState = (sessionId: string) => ({ sessionId, epoch:1, commitSeq:0, grants:['health','start-mock-run','cancel','global-stop','reconnect'], approvals:[], runs:[], journal:[], accepted:[] } as any);
export const errorReply = (q: Request, code: string) => ({v:1,type:q.type,requestId:q.requestId,ok:false,payload:{code}});
const event = (s:any, r:any, kind:string, data:any={}) => {
  if(s.journal.length>=128) throw Error('fixture_limit');
  s.journal.push({event:{epoch:r.epoch,globalSeq:s.journal.length+1,runId:r.runId,runSeq:s.journal.filter((j:any)=>j.event.runId===r.runId).length+1,kind,data},commitSeq:s.commitSeq});
  r.lastCommitSeq=s.commitSeq;
  if(!['started','output'].includes(kind)){r.state=kind;r.terminalReserved=0;}
};
const unit = (before:any,state:any,source:string,control:any={},accepted:any=null) => ({ before, state, source, control, accepted, events:state.journal.slice(before.journal.length), reply:accepted?.reply });
export function evaluateRequest(before:any, q:Request):any {
  const deny=(code:string)=>({state:before,reply:errorReply(q,code)});
  if(!before.grants.includes(q.type)) return deny('not_granted');
  const cached=before.accepted.find((x:any)=>x.request.requestId===q.requestId);
  if(cached) return canonical(cached.request)===canonical(q) ? {state:before,reply:structuredClone(cached.reply)} : deny('request_conflict');
  const p:any=q.payload;
  if(['start-mock-run','cancel','global-stop'].includes(q.type)&&p.expectedEpoch!==before.epoch) return deny('stale_epoch');
  if(before.accepted.length>=4096||before.commitSeq>=Number.MAX_SAFE_INTEGER) return deny('fixture_limit');
  const s=structuredClone(before);s.commitSeq++;
  let payload:any;
  if(q.type==='health') payload={protocol:1,epoch:s.epoch,lastGlobalSeq:s.journal.length};
  else if(q.type==='start-mock-run') {
    if(!['C','E','H'].includes(p.fixtureId)) return deny('unknown_fixture');
    if(s.runs.some((r:any)=>r.runId===p.runId)) return deny('run_exists');
    const a=s.approvals.find((a:any)=>a.approvalId===p.approvalId&&a.revision===p.approvalRevision);
    const latestRevision=s.approvals.filter((a:any)=>a.approvalId===p.approvalId).reduce((latest:number,a:any)=>Math.max(latest,a.revision),0);
    if(!a||a.revision!==latestRevision||!a.valid||a.consumed||a.runId!==p.runId||a.fixtureId!==p.fixtureId||a.epoch!==s.epoch) return deny('stale_approval');
    if(s.runs.length>=32||s.journal.length+s.runs.filter((r:any)=>r.terminalReserved).length+2>128) return deny('fixture_limit');
    a.consumed=true;a.lastCommitSeq=s.commitSeq;
    const r={runId:p.runId,fixtureId:p.fixtureId,epoch:s.epoch,state:'running',fixturePosition:0,terminalReserved:1,lastCommitSeq:s.commitSeq};s.runs.push(r);event(s,r,'started');
    payload={runId:r.runId,accepted:true,epoch:s.epoch};
  } else if(q.type==='cancel') {
    const r=s.runs.find((r:any)=>r.runId===p.runId);if(!r) return deny('unknown_run');
    if(r.state==='running') event(s,r,'cancelled');payload={runId:r.runId,state:r.state};
  } else if(q.type==='global-stop') {
    if(s.epoch===Number.MAX_SAFE_INTEGER) return deny('fixture_limit');
    const active=s.runs.filter((r:any)=>r.state==='running').sort((a:any,b:any)=>a.runId<b.runId?-1:a.runId>b.runId?1:0);
    for(const r of active) event(s,r,'stopped');
    for(const a of s.approvals) if(a.valid&&!a.consumed){a.valid=false;a.lastCommitSeq=s.commitSeq;}
    s.epoch++;payload={epoch:s.epoch,stoppedRunIds:active.map((r:any)=>r.runId)};
  } else if(q.type==='reconnect') {
    if(p.epoch>s.epoch||p.afterGlobalSeq>s.journal.length) return deny('invalid_cursor');
    payload={epoch:s.epoch,throughGlobalSeq:s.journal.length,events:s.journal.filter((j:any)=>p.epoch<s.epoch||j.event.globalSeq>p.afterGlobalSeq).map((j:any)=>structuredClone(j.event))};
  } else return deny('unknown_type');
  const accepted={request:structuredClone(q),reply:{v:1,type:q.type,requestId:q.requestId,ok:true,payload},commitSeq:s.commitSeq};
  if(Buffer.byteLength(canonical(accepted.reply),'utf8')>1048576) throw Error('fixture_limit');
  s.accepted.push(accepted);return unit(before,s,'accepted-request',{},accepted);
}
const identifier=(v:any)=>typeof v==='string'&&/^[A-Za-z0-9_-]{1,64}$/.test(v);
const exact=(v:any,keys:string[])=>v&&typeof v==='object'&&!Array.isArray(v)&&Object.keys(v).sort().join(',')===keys.sort().join(',');
export function evaluateControl(before:any,c:any):any {
  if(before.commitSeq>=Number.MAX_SAFE_INTEGER) throw Error('fixture_limit');
  const s=structuredClone(before);s.commitSeq++;
  if(c.type==='approve') {
    const a=c.approval;
    if(!exact(c,['type','approval'])||!exact(a,['approvalId','revision','runId','fixtureId','epoch'])||![a.approvalId,a.runId,a.fixtureId].every(identifier)||!['C','E','H'].includes(a.fixtureId)||!Number.isSafeInteger(a.revision)||a.revision<1||a.epoch!==s.epoch||s.approvals.some((x:any)=>x.approvalId===a.approvalId&&x.revision===a.revision)) throw Error('invalid approval control');
    if(s.approvals.some((x:any)=>x.approvalId===a.approvalId&&x.revision>=a.revision)) throw Error('approval revision must increase');
    s.approvals.push({...a,valid:true,consumed:false,lastCommitSeq:s.commitSeq});
  } else if(c.type==='invalidate') {
    if(!exact(c,['type','approvalId','revision'])) throw Error('invalid control');
    const a=s.approvals.find((a:any)=>a.approvalId===c.approvalId&&a.revision===c.revision);if(!a||!a.valid||a.consumed) throw Error('invalid invalidation');a.valid=false;a.lastCommitSeq=s.commitSeq;
  } else if(c.type==='revoke') {
    if(!exact(c,['type','requestType'])||!s.grants.includes(c.requestType)) throw Error('invalid revocation');s.grants=s.grants.filter((x:string)=>x!==c.requestType);
  } else if(c.type==='tick') {
    const persisted=exact(c,['type','runId','count','step']);
    if(!persisted&&!exact(c,['type','runId'])) throw Error('invalid tick');
    const r=s.runs.find((r:any)=>r.runId===c.runId);if(!r||r.state!=='running'||r.fixtureId==='H') throw Error('tick unavailable');
    const steps=r.fixtureId==='C'?['alpha','beta','succeeded']:['alpha','failed'];const step=steps[r.fixturePosition];if(!step) throw Error('tick unavailable');
    if(['alpha','beta'].includes(step)&&s.journal.length+s.runs.filter((r:any)=>r.terminalReserved).length+1>128) throw Error('fixture_limit');
    const resulting={kind:['alpha','beta'].includes(step)?'output':step,data:step==='failed'?{code:'fixture_error'}:['alpha','beta'].includes(step)?{text:step}:{}};
    if(persisted&&(c.count!==1||canonical(c.step)!==canonical(resulting)))throw Error('invalid persisted tick step');
    c={type:'tick',runId:c.runId,count:1,step:resulting};
    r.fixturePosition++;event(s,r,resulting.kind,resulting.data);
  } else throw Error('unknown control');
  return unit(before,s,c.type,structuredClone(c));
}
