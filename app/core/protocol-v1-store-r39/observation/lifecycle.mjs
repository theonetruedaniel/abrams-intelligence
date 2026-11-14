// Injected server ownership only. No process, listener or browser imports.
export function createObservationLifecycle({arm,closeAdmission,closeOwner,closeListener,destroySockets,snapshot}) {
  if (![arm,closeAdmission,closeOwner,closeListener,destroySockets,snapshot].every(f=>typeof f==='function')) throw Error('explicit owner ports required');
  let phase='preparing', outcome='incomplete', reason=null, closing=null, cancelLife=null, cancelGrace=null, uncertain=false, failed=false,cleanupSettled=false;
  const retired=new Set();
  const view=()=>({phase,outcome,reason,uncertain,cleanupPending:!cleanupSettled&&(phase==='closing'||phase==='cleanup-uncertain'),retiredGenerations:[...retired].sort()});
  const close=(why='incomplete')=>{
    if(closing)return closing;
    let resolve;closing=new Promise(r=>resolve=r);phase='closing';reason=why;
    try{cancelLife?.();closeAdmission();}catch{uncertain=true;}
    try{cancelGrace=arm(10000,()=>{uncertain=true;phase='cleanup-uncertain';try{destroySockets();}catch{};});}catch{uncertain=true;}
    void (async()=>{let flowValid=false;try{const closed=await Promise.allSettled([Promise.resolve().then(closeListener),Promise.resolve().then(closeOwner)]);if(closed.some(r=>r.status==='rejected'))throw Error('cleanup failure');const s=snapshot();flowValid=s.flowValid===true;if(s.active!==0||s.sockets!==0||s.listening||s.ownerPhase!=='closed')throw Error('retained');}catch{uncertain=true;}finally{cleanupSettled=true;try{cancelGrace?.();}catch{uncertain=true;}phase=uncertain?'cleanup-uncertain':'closed';outcome=!uncertain&&!failed&&flowValid&&why==='flow-complete'?'server-flow-complete':'incomplete';resolve(view());}})();
    return closing;
  };
  const reject=()=>{failed=true;void close('admission-rejected');}; // No untrusted data retained.
  return Object.freeze({snapshot:view,close,reject,
    ready(){if(phase!=='preparing')throw Error('readiness already consumed');phase='ready';cancelLife=arm(300000,()=>{void close('observation-deadline');});if(phase!=='ready')throw Error('readiness retired');},
    streamClosed(generation,{applicationCount,epoch,runs,rowsSettled}={}){
      if(phase!=='ready')return;
      if(retired.has(generation)){reject();return;}
      if(generation===1&&applicationCount===6&&epoch===2&&runs?.length===1&&runs[0].runId==='A'&&runs[0].state==='cancelled')retired.add(1);
      else if(generation===2&&retired.has(1)&&applicationCount===9&&epoch===2&&rowsSettled===true){retired.add(2);void close('flow-complete');}
      else void close('early-client-disconnect');
    },
    refreshAllowed(){return phase==='ready'&&retired.has(1);}
  });
}





