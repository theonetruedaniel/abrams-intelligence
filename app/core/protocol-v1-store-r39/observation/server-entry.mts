// Live-only Node adapters. Not imported by source tests. No browser control.
import {createServer} from 'node:http';
import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {composeServerObservation} from './server-composition.mts';
export const runServerObservation=(options:any)=>composeServerObservation({...options,ports:{createServer,readFileSync,writeFileSync,createHash,setTimeout,clearTimeout,setInterval,clearInterval}});
