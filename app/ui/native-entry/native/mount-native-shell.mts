import {invoke} from '@tauri-apps/api/core';
import {createNativeCorePort} from './core-port.mts';
import {mountShell} from './shell-component.tsx';

// Explicit consumer mount only; owner construction remains in native launch.
// Pass an empty exclusively owned host, never the default already-mounted root.
export function mountNativeShell(host:HTMLElement) {
  return mountShell(host,createNativeCorePort(invoke));
}
