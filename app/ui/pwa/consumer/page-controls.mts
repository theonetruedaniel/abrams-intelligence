import {bindPageControls} from '../app/page-controls.mts';
import {copyRunIntent,type MockRunIntent} from './run-intent.mts';
// Additional consumer controls, not approval/owner controls. Existing local
// connect/refresh/disconnect/shutdown binding and cleanup remain unchanged.
export function bindPwaConsumerControls(consumer:any,elements:any){
 const keys=['runStart','runCancel','globalStop'];
 if(!consumer||!['connect','startMockRun','cancel','globalStop','subscribe','snapshot'].every(k=>typeof consumer[k]==='function')||!elements?.actionStatus||!keys.every(k=>elements[k]&&typeof elements[k].addEventListener==='function'&&typeof elements[k].removeEventListener==='function'))throw Error('explicit PWA command controls required');
 let bound=true,ready=false,cleaning=false,intent:MockRunIntent|null=null,runId:string|null=null;
 let base:(()=>void)|undefined,unsubscribe:(()=>void)|undefined;
 const records:{key:string;callback:()=>void;active:boolean}[]=[];
 const render=()=>{
  if(!bound)return;const s=consumer.snapshot(),enabled=ready&&s.canRunCommand===true;
  elements.runStart.disabled=!enabled||intent===null;elements.runCancel.disabled=!enabled||runId===null;elements.globalStop.disabled=!enabled;
  elements.actionStatus.textContent=s.commandPending?'Pending '+s.commandPending:s.lastCommand?s.lastCommand.type+(s.lastCommand.ok?' acknowledged':' rejected'):'No run command pending.';
 };
 const cleanup=()=>{
  if(cleaning)return;cleaning=true;bound=false;ready=false;intent=null;runId=null;const errors:unknown[]=[];
  try{try{base?.();}catch(e){errors.push(e);}if(unsubscribe){const off=unsubscribe;try{off();unsubscribe=undefined;}catch(e){errors.push(e);}}
   for(const r of records)if(r.active)try{elements[r.key].removeEventListener('click',r.callback);r.active=false;}catch(e){errors.push(e);}
  }finally{cleaning=false;}
  if(errors.length)throw errors[0];
 };
 try{
  elements.runStart.textContent='Start mock run';elements.runCancel.textContent='Cancel selected run';elements.globalStop.textContent='Stop all mock work';
  base=bindPageControls({...consumer,start:consumer.connect},elements);
  for(const key of keys){const callback=()=>{
   if(!bound||!ready||elements[key].disabled)return;
   const task=key==='runStart'?consumer.startMockRun(intent):key==='runCancel'?consumer.cancel(runId):consumer.globalStop();
   void Promise.resolve(task).catch(()=>{});
  };const r={key,callback,active:true};records.push(r);elements[key].addEventListener('click',callback);}
  unsubscribe=consumer.subscribe(render);if(typeof unsubscribe!=='function')throw Error('consumer unsubscribe required');
  ready=true;render();
 }catch(e){try{cleanup();}catch{}throw e;}
 return Object.freeze({
  setStartIntent(value:unknown){if(!bound||!ready)return false;try{intent=copyRunIntent(value);render();return true;}catch{intent=null;render();return false;}},
  selectCancelRun(value:string){if(!bound||!ready||typeof value!=='string'||!/^[A-Za-z0-9_-]{1,64}$/.test(value))return false;runId=value;render();return true;},
  unbind:cleanup
 });
}
