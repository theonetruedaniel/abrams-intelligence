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

export function parseReply(bytes:Uint8Array,request:any){
 if(!(bytes instanceof Uint8Array)||bytes.length<1||bytes.length>1048576)throw Error('invalid_reply');
 const v:any=strictJSON(new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes));
 if(!v||Array.isArray(v)||typeof v!=='object'||Object.keys(v).sort().join(',')!=='ok,payload,requestId,type,v'||v.v!==1||v.type!==request.type||v.requestId!==request.requestId||typeof v.ok!=='boolean'||!v.payload||typeof v.payload!=='object'||Array.isArray(v.payload))throw Error('invalid_reply');
 return v;
}

export function parseBootstrap(bytes:Uint8Array):{protocol:1,binding:string,nextSubscriptionGeneration:number|null}{
 if(!(bytes instanceof Uint8Array)||bytes.length<1||bytes.length>4096)throw Error('invalid_bootstrap');
 const v:any=strictJSON(new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes));
 if(!v||typeof v!=='object'||Array.isArray(v)||Object.keys(v).sort().join(',')!=='binding,nextSubscriptionGeneration,protocol'||v.protocol!==1||typeof v.binding!=='string'||!/^FAKE_TEST_ONLY_[A-Za-z0-9_-]{1,64}(?![\s\S])/.test(v.binding)||(v.nextSubscriptionGeneration!==null&&(!Number.isInteger(v.nextSubscriptionGeneration)||v.nextSubscriptionGeneration<1||v.nextSubscriptionGeneration>2147483647)))throw Error('invalid_bootstrap');
 return v;
}
