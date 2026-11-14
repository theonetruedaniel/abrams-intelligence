import {createRendererController,type RendererHandlers,type RendererSnapshot,type RendererView} from '../base/renderer/controller.mts';
import type {ShellCorePort,MockRunIntent} from '../base/renderer/shell-core-adapter.mts';
export interface DomHost {readonly document:Document;readonly container:HTMLElement}

// Only the explicitly supplied container receives a newly owned subtree.
function domView(host:DomHost){
 const doc=host.document,container=host.container;
 if(container.ownerDocument!==doc)throw Error('container must belong to supplied document');
 let alive=true,binding=false,mutating=false,invoking=false,cleaning=false;
 let handlers:RendererHandlers|null=null,last:RendererSnapshot|null=null;
 let selected:Readonly<MockRunIntent>|null=null,cancelId:string|null=null;
 let invocation=0,syncCancelValue=false;
 let failure=()=>{try{dispose();}catch{}};
 let root:HTMLElement|null=null;
 const releases:Array<()=>void>=[];
 const check=()=>{if(!alive)throw Error('DOM view retired');};
 const step=<T,>(f:()=>T):T=>{check();const value=f();check();return value;};
 const dispose=()=>{
  alive=false;handlers=null;selected=null;cancelId=null;
  if(cleaning)throw Error('reentrant DOM cleanup');
  cleaning=true;let failed=false;
  try{
   for(let i=releases.length-1;i>=0;i--){try{releases[i]();releases.splice(i,1);}catch{failed=true;}}
   try{if(root&&root.parentNode===container)container.removeChild(root);}catch{failed=true;}
  }finally{cleaning=false;}
  if(failed)throw Error('DOM cleanup incomplete');
 };
 const node=<K extends keyof HTMLElementTagNameMap,>(tag:K,text?:string)=>{
  const n=step(()=>doc.createElement(tag));
  if(text!==undefined)step(()=>{n.textContent=text;});
  return n;
 };
 const append=(parent:HTMLElement,child:HTMLElement)=>step(()=>parent.appendChild(child));
 const listen=(n:HTMLElement,event:string,listener:(event:Event)=>void)=>{
  // Track before registration, including an implementation that adds then throws.
  releases.push(()=>n.removeEventListener(event,listener));
  step(()=>n.addEventListener(event,listener));
 };
 let status!:HTMLParagraphElement,command!:HTMLParagraphElement,runs!:HTMLParagraphElement,events!:HTMLPreElement;
 let selection!:HTMLParagraphElement,cancelSelection!:HTMLParagraphElement,cancelInput!:HTMLInputElement;
 const buttons=new Map<string,HTMLButtonElement>();
 const ready=()=>alive&&!binding&&!mutating&&!invoking&&last!==null&&last.mounted&&last.pending===null&&!last.core.busy;
 const connected=()=>ready()&&!!last?.core.connected&&!last.core.view.degraded&&!last.core.cleanupPending;
 const action=(name:string,call:(h:RendererHandlers)=>Promise<boolean>|void)=>{
  if(!alive||binding||mutating||!handlers||!last?.mounted)return;
  if(name==='disconnect'){if(!last.core.connected)return;invocation++;invoking=false;handlers.disconnect();return;}
  if(!ready())return;
  const eligible=name==='reconnect'?!last!.core.unconnected&&!last!.core.connected&&!last!.core.cleanupPending:
   name==='disconnect'?last!.core.connected:name==='health'?last!.core.connected&&!last!.core.cleanupPending:connected()&&(name!=='start'||selected!==null)&&(name!=='cancel'||cancelId!==null&&last!.core.view.runs[cancelId]==='running');
  if(!eligible)return;
  invoking=true;const ticket=++invocation;
  try{const result=call(handlers);void Promise.resolve(result).catch(()=>{}).finally(()=>{if(ticket===invocation)invoking=false;});}
  catch{invoking=false;}
 };
 const paint=(s:RendererSnapshot)=>{
  last=s;
  if(cancelId&&s.core.view.runs[cancelId]!=='running'){cancelId=null;syncCancelValue=true;}
  const blocked=s.pending!==null||s.core.busy;
  const usable=s.mounted&&!blocked&&s.core.connected&&!s.core.cleanupPending&&!s.core.view.degraded;
  const connection=s.core.unconnected?'No consumer port; disconnected':s.core.cleanupPending?'Disconnected; cleanup pending or unknown':s.core.connected?(s.core.view.degraded?'Connected; degraded; Check health to request one journal recovery':'Connected'):'Disconnected; explicit reconnect required';
  step(()=>{status.textContent='Connection: '+connection+(s.pending?'; pending '+s.pending:'');});
  step(()=>{command.textContent='Last command acknowledgement: '+(s.lastCommand?s.lastCommand.name+': '+(s.lastCommand.ok?'acknowledged':'rejected'):'none')+'. Authoritative events determine run state.';});
  step(()=>{selection.textContent='Start selection: '+(selected?selected.runId+' / '+selected.fixtureId+'; external approval reference supplied':'none')+'. The host supplies approval; this view cannot approve.';});
  step(()=>{cancelSelection.textContent='Cancel selection: '+(cancelId??'none')+'; enter an authoritative running run ID, then change focus.';});
  if(syncCancelValue){syncCancelValue=false;step(()=>{cancelInput.value=cancelId??'';});}
  step(()=>{cancelInput.disabled=!usable;});
  step(()=>{runs.textContent='Runs from authoritative events: '+(Object.entries(s.core.view.runs).map(([id,state])=>id+': '+state).join(', ')||'none');});
  step(()=>{events.textContent='Authoritative event cursor: '+s.core.view.cursor+'\n'+s.core.view.records.map((r:any)=>'Event '+r.globalSeq+' '+r.runId+' '+r.kind+' '+JSON.stringify(r.data)).join('\n');});
  for(const [name,b] of buttons){
   const enabled=name==='reconnect'?s.mounted&&!blocked&&!s.core.unconnected&&!s.core.connected&&!s.core.cleanupPending:
    name==='disconnect'?s.mounted&&s.core.connected:name==='health'?s.mounted&&!blocked&&s.core.connected&&!s.core.cleanupPending:usable&&(name!=='start'||selected!==null)&&(name!=='cancel'||cancelId!==null&&s.core.view.runs[cancelId]==='running');
   step(()=>{b.disabled=!enabled;});
  }
 };
 const update=(f:()=>boolean)=>{
  if(!alive||binding||mutating||invoking)return false;
  mutating=true;
  try{const ok=f();check();if(ok&&last)paint(last);return ok;}finally{mutating=false;}
 };
 const setStartIntent=(intent:MockRunIntent|null)=>update(()=>{
  if(intent===null){selected=null;return true;}
  // Reject accessors; proxy metadata calls remain liveness-guarded.
  const keys=step(()=>Object.keys(intent));
  if(keys.sort().join(',')!=='approvalId,approvalRevision,fixtureId,runId')return false;
  const data:Record<string,unknown>={};
  for(const k of keys){const d=step(()=>Object.getOwnPropertyDescriptor(intent,k));if(!d||!('value' in d))return false;data[k]=d.value;}
  if(!['runId','fixtureId','approvalId'].every(k=>typeof data[k]==='string'&&/^[A-Za-z0-9_-]{1,64}$/.test(data[k] as string))||!Number.isSafeInteger(data.approvalRevision)||(data.approvalRevision as number)<1)return false;
  selected=Object.freeze({runId:data.runId as string,fixtureId:data.fixtureId as string,approvalId:data.approvalId as string,approvalRevision:data.approvalRevision as number});return true;
 });
 const selectCancelRun=(id:string|null)=>update(()=>{
  if(id!==null&&(typeof id!=='string'||last?.core.view.runs[id]!=='running'))return false;
  cancelId=id;syncCancelValue=true;return true;
 });
 const view:RendererView={
  bind(h){
   if(binding||handlers||!alive)throw Error('DOM view binds once');
   binding=true;handlers=h;
   try{
    root=node('section');step(()=>root!.setAttribute('aria-label','Abrams synthetic run controls'));
    append(root,node('h2','Abrams reference run controls'));
    status=node('p');step(()=>status.setAttribute('role','status'));step(()=>status.setAttribute('aria-live','polite'));append(root,status);
    command=node('p');append(root,command);selection=node('p');append(root,selection);
    cancelSelection=node('p');append(root,cancelSelection);
    const label=node('label','Run ID to cancel: ');cancelInput=node('input');step(()=>{cancelInput.type='text';});append(label,cancelInput);append(root,label);
    listen(cancelInput,'input',()=>{
     if(!ready())return;
     try{update(()=>{cancelId=null;syncCancelValue=false;return true;});}catch{failure();}
    });
    listen(cancelInput,'keydown',event=>{
     if(!alive||binding||mutating)return;
     mutating=true;
     try{if(step(()=>(event as KeyboardEvent).key)==='Enter')step(()=>event.preventDefault());}catch{failure();}finally{mutating=false;}
    });
    listen(cancelInput,'change',()=>{
     if(!ready())return;
     try{update(()=>{const id=step(()=>cancelInput.value);cancelId=id!==''&&last?.core.view.runs[id]==='running'?id:null;syncCancelValue=true;return true;});}catch{failure();}
    });
    const specs:Array<[string,string,(h:RendererHandlers)=>Promise<boolean>|void]>=[
     ['reconnect','Reconnect explicitly',h=>h.reconnect()],['health','Check health',h=>h.health()],
     ['start','Start selected run',h=>h.start(selected!)],['cancel','Cancel selected run',h=>h.cancel(cancelId!)],
     ['stop','Stop all runs globally',h=>h.stop()],['disconnect','Disconnect locally',h=>h.disconnect()]
    ];
    for(const [name,text,call] of specs){const b=node('button',text);step(()=>{b.type='button';});buttons.set(name,b);listen(b,'click',()=>action(name,call));append(root,b);}
    runs=node('p');append(root,runs);events=node('pre');append(root,events);
    append(container,root);binding=false;return dispose;
   }catch(error){binding=false;try{dispose();}catch{}throw error;}
  },
  render(s){if(!alive)return;if(mutating)throw Error('reentrant DOM render');mutating=true;try{paint(s);}finally{mutating=false;}}
 };
 return {view,setStartIntent,selectCancelRun,dispose,setFailureHandler:(f:()=>void)=>{failure=f;}};
}

// Host supplies an admitted consumer port, or deliberately supplies none.
export function mountDomRenderer(host:DomHost,port:ShellCorePort|null=null){
 const local=domView(host);
 let controller:ReturnType<typeof createRendererController>;
 try{controller=createRendererController(local.view,port);}catch(error){try{local.dispose();}catch{}throw error;}
 local.setFailureHandler(()=>{controller.unmount();});
 const set=<T,>(call:(value:T)=>boolean,value:T)=>{try{return call(value);}catch{controller.unmount();return false;}};
 return Object.freeze({snapshot:controller.snapshot,unmount:controller.unmount,
  setStartIntent:(intent:MockRunIntent|null)=>set(local.setStartIntent,intent),
  selectCancelRun:(id:string|null)=>set(local.selectCancelRun,id)
 });
}



