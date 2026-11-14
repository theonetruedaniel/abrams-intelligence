import {evaluateControl,canonical} from './state.mts';
// Owner-only deterministic producer gate. No caller-selected arbitrary journal append.
export function evaluateFixtureEvent(state:any,event:any):any {
  const run=state.runs.find((r:any)=>r.runId===event?.runId);
  if(!run||run.state!=='running')return {accepted:false,state};
  let unit:any;try{unit=evaluateControl(state,{type:'tick',runId:run.runId});}catch(e:any){if(['tick unavailable','fixture_limit'].includes(e.message))return {accepted:false,state};throw e;}
  if(canonical(unit.events[0].event)!==canonical(event))return {accepted:false,state};
  return {accepted:true,unit};
}
