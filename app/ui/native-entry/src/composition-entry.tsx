import {mountNativeShell} from '../native/mount-native-shell.mts';
import {mountShell} from '../native/shell-component.tsx';
const host=document.getElementById('root');
if(!host)throw Error('Shell root missing');
// Native initialization selects a consumer, never constructs/approves a Core.
const admission=Object.getOwnPropertyDescriptor(window,'__ABRAMS_SYNTHETIC_ADMITTED__');
const synthetic=admission?.value===true;
const mounted=synthetic?mountNativeShell(host):mountShell(host,null);
let removeControls=()=>{};
if(synthetic){
 const panel=document.createElement('section');panel.setAttribute('aria-label','Preapproved synthetic fixtures');
 const label=document.createElement('p');label.textContent='Synthetic only: select A or B, then use Start, Cancel or Stop below. Each reference was preapproved by the native fixture owner at epoch 1; selection cannot approve or renew it.';
 const status=document.createElement('p');status.setAttribute('role','status');
 const remove:(()=>void)[]=[];panel.append(label);
 for(const runId of ['A','B']){
  const button=document.createElement('button');button.type='button';button.textContent='Select synthetic '+runId;
  const choose=()=>{
   const start=mounted.setStartIntent({runId,fixtureId:'H',approvalId:'approval_'+runId,approvalRevision:1});
   const cancel=mounted.selectCancelRun(runId);
   status.textContent=start&&cancel?'Selected '+runId+'. Core still validates the one-use approval and epoch.':'View is not ready. Select again after the controls appear.';
  };
  button.addEventListener('click',choose);remove.push(()=>button.removeEventListener('click',choose));panel.append(button);
 }
 panel.append(status);host.before(panel);removeControls=()=>{for(const off of remove)off();panel.remove();};
}
window.addEventListener('pagehide',()=>{removeControls();mounted.unmount();},{once:true});