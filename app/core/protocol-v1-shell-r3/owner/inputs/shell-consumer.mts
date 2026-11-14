import {createShellCoreAdapter} from './shell-core-adapter.mts';
// Shell source entry seam. Native invoke/listen remain deliberately absent.
export const shellCore=createShellCoreAdapter();
