// Injected elements only. Owner approval/tick/fault never become page controls.
export function bindPageControls(controller: any, elements: any) {
  const controls = ['connect', 'refresh', 'disconnect', 'shutdown'];
  const text = ['status', 'message', 'cursor', 'outputs'];
  if (!controller || !['snapshot', 'subscribe', 'start', 'refresh', 'disconnect', 'shutdown'].every(k => typeof controller[k] === 'function') || !elements || ![...controls, ...text].every(k => elements[k] && 'textContent' in elements[k]) || !controls.every(k => typeof elements[k].addEventListener === 'function' && typeof elements[k].removeEventListener === 'function')) throw Error('owned page elements required');

  const labels: any = { idle: 'Disconnected', starting: 'Connecting', ready: 'Ready', disconnected: 'Disconnected', unavailable: 'Unavailable', stopped: 'Stopped', 'cleanup-pending': 'Cleanup pending' };
  const setText = (element: any, value: string) => { if (element.textContent !== value) element.textContent = value; };
  let bound = true;
  let cleaning = false;
  const handlers: [string, () => void][] = [];
  const render = (s: any) => {
    if (!bound) return;
    setText(elements.status, s.phase === 'ready' && s.view.degraded ? 'Degraded' : labels[s.phase]);
    setText(elements.message, s.message);
    elements.cursor.textContent = String(s.view.cursor);
    setText(elements.outputs, s.view.records.filter((e: any) => e.kind === 'output').map((e: any) => e.data.text).join('\n'));
    for (const [key, enabled] of [['connect', s.canConnect], ['refresh', s.canRefresh], ['disconnect', s.canDisconnect], ['shutdown', s.canShutdown]]) elements[key].disabled = !enabled;
  };
  // Keep failed removals for a later cleanup attempt. Their callbacks are inert
  // as soon as bound is false, even if a caller retained the callback itself.
  const removeHandlers = (errors: unknown[]) => {
    for (let i = 0; i < handlers.length;) {
      const [key, handler] = handlers[i];
      try {
        elements[key].removeEventListener('click', handler);
        handlers.splice(i, 1);
      } catch (error) {
        errors.push(error);
        i++;
      }
    }
  };

  let unsubscribe: () => void;
  try {
    for (const key of controls) {
      const handler = () => {
        if (!bound || elements[key].disabled) return;
        void controller[key === 'connect' ? 'start' : key]().catch(() => {});
      };
      // Track before registration so a registration that throws after installing
      // the handler can still be cleaned up.
      handlers.push([key, handler]);
      elements[key].addEventListener('click', handler);
    }
    unsubscribe = controller.subscribe(render);
    if (typeof unsubscribe !== 'function') throw Error('controller unsubscribe function required');
  } catch (error) {
    bound = false;
    removeHandlers([]);
    throw error;
  }

  return () => {
    if (cleaning || (!bound && handlers.length === 0)) return;
    cleaning = true;
    const errors: unknown[] = [];
    try {
      if (bound) {
        bound = false;
        try { unsubscribe(); } catch (error) { errors.push(error); }
      }
      removeHandlers(errors);
    } finally {
      cleaning = false;
    }
    // Preserve the original unsubscribe failure when cleanup also encounters
    // an error, while still attempting every listener removal.
    if (errors.length) throw errors[0];
  };
}
