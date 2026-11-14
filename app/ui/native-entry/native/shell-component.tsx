import React, {useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {mountDomRenderer} from '../dom/renderer/dom-view.mts';
import type {ShellCorePort, MockRunIntent} from '../dom/base/renderer/shell-core-adapter.mts';
import '../src/style.css';

type View = ReturnType<typeof mountDomRenderer>;
type Lease = {retired: View[]; disposed: boolean; active: View|null; rootRetired: boolean; rootFailed: boolean; mountFailed: boolean};
const hosts = new WeakMap<HTMLElement, Lease>();
const consumedPorts = new WeakSet<ShellCorePort>();
const consumedBindings = new WeakSet<object>();
let inspectingPort = false;
function capturePort(port: ShellCorePort|null): ShellCorePort|null {
  if (port === null) return null;
  if (inspectingPort) throw Error('Reentrant consumer inspection');
  inspectingPort = true;
  try {
    const values = ['protocol','binding','request','openEvents'].map(key => {
      const descriptor = Object.getOwnPropertyDescriptor(port, key);
      if (!descriptor || !Object.hasOwn(descriptor, 'value')) throw Error('Consumer requires own data properties');
      return descriptor.value;
    });
    const [protocol,binding,request,openEvents] = values;
    if (protocol !== 1 || !binding || typeof binding !== 'object' || typeof request !== 'function' || typeof openEvents !== 'function') throw Error('Versioned consumer data required');
    if (consumedPorts.has(port) || consumedBindings.has(binding)) throw Error('Consumer port or binding already used; supply a fresh admitted binding');
    return Object.freeze({protocol: 1 as const,binding,request,openEvents});
  } finally { inspectingPort = false; }
}
const sections = ['Projects', 'Activity', 'Approvals', 'Degraded', 'Advanced'];
const clear = (lease: Lease) => !lease.mountFailed && lease.retired.every(v => {
  const s = v.snapshot();
  return !s.core.cleanupPending && !s.unbindFailed;
});

// The host owns this root exclusively. The consumer is passed here, never discovered.
export function mountShell(host: HTMLElement, port: ShellCorePort|null = null) {
  if (inspectingPort) throw Error('Reentrant consumer inspection');
  const previous = hosts.get(host);
  if (previous && (!previous.disposed || !previous.rootRetired || previous.rootFailed || !clear(previous))) throw Error('Shell host still owned or cleanup pending');
  if (host.childNodes.length !== 0) throw Error('Shell requires an empty, exclusively owned host');
  const consumer = capturePort(port);
  const lease: Lease = {retired: [], disposed: false, active: null, rootRetired: false, rootFailed: false, mountFailed: false};
  hosts.set(host, lease);
  let root: ReturnType<typeof createRoot>|null = null;
  const retire = (view = lease.active) => {
    if (lease.active === view) lease.active = null;
    if (view) { if (!lease.retired.includes(view)) lease.retired.push(view); view.unmount(); }
  };
  const retireRoot = () => {
    if (lease.rootRetired || lease.rootFailed) return;
    try { root?.unmount(); lease.rootRetired = true; }
    catch { lease.rootFailed = true; }
  };
  function App() {
    const container = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const node = container.current;
      if (lease.disposed || !node) return;
      if (!clear(lease) || (consumer && consumedBindings.has(consumer.binding))) {
        node.textContent = 'Renderer not replaced: previous local cleanup or consumed consumer port blocks replay. Explicit host remount with a fresh admitted port is required.';
        return;
      }
      if (port && consumer) { consumedPorts.add(port); consumedBindings.add(consumer.binding); }
      let view: View;
      try { view = mountDomRenderer({document: node.ownerDocument, container: node}, consumer); }
      catch {
        lease.mountFailed = true;
        try { node.textContent = 'Renderer mount failed; cleanup is unproven. Replacement is blocked.'; } catch {}
        return;
      }
      if (lease.disposed) { lease.retired.push(view); view.unmount(); return; }
      lease.active = view;
      return () => retire(view);
    }, []);
    return <main>
      <p className="eyebrow">Synthetic Phase 2 shell source integration</p>
      <h1>Abrams Intelligence</h1>
      <p>Source wiring only. Native transport, window behavior and accessibility remain unqualified.</p>
      <section id="chat"><h2>Chat and run controls</h2><p>Injected consumer view. No model, account or personal data is loaded by this entry.</p><div ref={container}/></section>
      <nav aria-label="Fixture sections">{sections.map(x => <a key={x} href={'#' + x.toLowerCase()}>{x}</a>)}</nav>
      {sections.map(x => <section id={x.toLowerCase()} key={x}><h2>{x}</h2><p>Placeholder only. No {x.toLowerCase()} workflow is implemented in this checkpoint.</p></section>)}
    </main>;
  }
  try { root = createRoot(host); root.render(<App/>); }
  catch (error) {
    lease.disposed = true;
    if (root === null) lease.rootFailed = true;
    retire(); retireRoot(); throw error;
  }
  return Object.freeze({
    snapshot: () => lease.active?.snapshot() ?? null,
    setStartIntent: (intent: MockRunIntent|null) => !lease.disposed && (lease.active?.setStartIntent(intent) ?? false),
    selectCancelRun: (runId: string|null) => !lease.disposed && (lease.active?.selectCancelRun(runId) ?? false),
    unmount() {
      if (!lease.disposed) { lease.disposed = true; retire(); retireRoot(); }
      for (const view of lease.retired) if (view.snapshot().unbindFailed) view.unmount();
      return lease.rootRetired && !lease.rootFailed && clear(lease);
    }
  });
}

