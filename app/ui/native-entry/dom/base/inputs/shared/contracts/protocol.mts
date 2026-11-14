// Shared Phase2 contract parser. Frozen R3 input; pure, no dispatch or storage.
export type Request = { v: 1; type: string; requestId: string; payload: Record<string, unknown> };
export type ParseResult =
  | { kind: 'request'; request: Request }
  | { kind: 'uncorrelated'; code: 'malformed' | 'wrong_direction' }
  | { kind: 'reply-error'; code: 'unsupported_version' | 'unknown_type'; type: string; requestId: string };

const identifier = (v: unknown): v is string => typeof v === 'string' && /^[A-Za-z0-9_-]{1,64}$/.test(v);
const integer = (v: unknown, minimum = 0): v is number => typeof v === 'number' && Number.isSafeInteger(v) && v >= minimum;
const object = (v: unknown): v is Record<string, unknown> => v !== null && typeof v === 'object' && !Array.isArray(v);
const fields = (v: unknown, names: readonly string[]) =>
  object(v) && Object.keys(v).length === names.length && names.every(n => Object.hasOwn(v, n));
const scalarString = (text: string) => {
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    if (c >= 0xd800 && c <= 0xdbff) {
      const next = text.charCodeAt(++i);
      if (!(next >= 0xdc00 && next <= 0xdfff)) return false;
    } else if (c >= 0xdc00 && c <= 0xdfff) return false;
  }
  return true;
};

// Walk raw JSON before JSON.parse can collapse duplicate decoded keys.
function strictJSON(text: string): unknown {
  let i = 0;
  const fail = (): never => { throw new SyntaxError('malformed JSON'); };
  const space = () => { while (i < text.length && /[ \t\r\n]/.test(text[i])) i++; };
  const string = (): string => {
    const start = i;
    if (text[i++] !== '"') fail();
    while (i < text.length) {
      const c = text[i++];
      if (c === '\\') { i++; continue; }
      if (c === '"') {
        const value = JSON.parse(text.slice(start, i));
        if (typeof value !== 'string' || !scalarString(value)) fail();
        return value;
      }
    }
    return fail();
  };
  const value = (depth = 0): void => {
    // All valid frozen envelopes are shallow. Bound malformed nesting before recursion.
    if (depth > 256) fail();
    space();
    const c = text[i];
    if (c === '"') { string(); return; }
    if (c === '{') {
      i++; space();
      const keys = new Set<string>();
      if (text[i] === '}') { i++; return; }
      for (;;) {
        space(); const key = string();
        if (keys.has(key)) fail();
        keys.add(key); space();
        if (text[i++] !== ':') fail();
        value(depth + 1); space();
        const delimiter = text[i++];
        if (delimiter === '}') return;
        if (delimiter !== ',') fail();
      }
    }
    if (c === '[') {
      i++; space();
      if (text[i] === ']') { i++; return; }
      for (;;) {
        value(depth + 1); space();
        const delimiter = text[i++];
        if (delimiter === ']') return;
        if (delimiter !== ',') fail();
      }
    }
    for (const literal of ['true', 'false', 'null']) {
      if (text.startsWith(literal, i)) { i += literal.length; return; }
    }
    const token = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/.exec(text.slice(i));
    if (!token || !Number.isFinite(Number(token[0]))) fail();
    i += token![0].length;
  };
  value(); space();
  if (i !== text.length) fail();
  return JSON.parse(text);
}

function validEvent(value: Record<string, unknown>): boolean {
  if (!fields(value, ['v', 'type', 'payload']) || value.v !== 1) return false;
  const p = value.payload;
  if (!fields(p, ['epoch', 'globalSeq', 'runId', 'runSeq', 'kind', 'data'])) return false;
  const e = p as Record<string, unknown>;
  if (!integer(e.epoch, 1) || !integer(e.globalSeq, 1) || !integer(e.runSeq, 1) || !identifier(e.runId)) return false;
  if (e.kind === 'output') return fields(e.data, ['text']) && typeof (e.data as any).text === 'string' && [...(e.data as any).text].length <= 1024;
  if (e.kind === 'failed') return fields(e.data, ['code']) && (e.data as any).code === 'fixture_error';
  return ['started', 'succeeded', 'cancelled', 'stopped'].includes(e.kind as string) && fields(e.data, []);
}

function validPayload(type: string, p: Record<string, unknown>): boolean {
  switch (type) {
    case 'health': return fields(p, []);
    case 'start-mock-run':
      return fields(p, ['runId', 'fixtureId', 'approvalId', 'approvalRevision', 'expectedEpoch']) &&
        identifier(p.runId) && identifier(p.fixtureId) && identifier(p.approvalId) &&
        integer(p.approvalRevision, 1) && integer(p.expectedEpoch, 1);
    case 'cancel': return fields(p, ['runId', 'expectedEpoch']) && identifier(p.runId) && integer(p.expectedEpoch, 1);
    case 'global-stop': return fields(p, ['expectedEpoch']) && integer(p.expectedEpoch, 1);
    case 'reconnect': return fields(p, ['epoch', 'afterGlobalSeq']) && integer(p.epoch, 1) && integer(p.afterGlobalSeq);
    default: return false;
  }
}

export function parseInbound(bytes: Uint8Array): ParseResult {
  const malformed = { kind: 'uncorrelated', code: 'malformed' } as const;
  if (!(bytes instanceof Uint8Array) || bytes.byteLength > 65536) return malformed;
  let value: unknown;
  try { value = strictJSON(new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes)); }
  catch { return malformed; }
  if (!object(value)) return malformed;
  if (value.type === 'stream-event') return validEvent(value) ? { kind: 'uncorrelated', code: 'wrong_direction' } : malformed;
  if (!fields(value, ['v', 'type', 'requestId', 'payload']) ||
      !integer(value.v) || typeof value.type !== 'string' ||
      !identifier(value.requestId) || !object(value.payload)) return malformed;
  if (value.v !== 1) return { kind: 'reply-error', code: 'unsupported_version', type: value.type, requestId: value.requestId };
  if (!['health', 'start-mock-run', 'cancel', 'global-stop', 'reconnect'].includes(value.type))
    return { kind: 'reply-error', code: 'unknown_type', type: value.type, requestId: value.requestId };
  if (!validPayload(value.type, value.payload)) return malformed;
  return { kind: 'request', request: value as Request };
}

// Outbound validation is a separate pure route. Never dispatch an event as a
// request or treat wrong_direction as an accepted transport response.
export function parseStreamEvent(bytes:Uint8Array):Record<string,unknown> {
  if(!(bytes instanceof Uint8Array)||bytes.byteLength<1||bytes.byteLength>65536)
    throw new SyntaxError('invalid event byte length');
  const value=strictJSON(new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes));
  if(!object(value)||value.type!=='stream-event'||!validEvent(value))
    throw new SyntaxError('invalid outbound event');
  return value;
}
