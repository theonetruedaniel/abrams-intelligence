declare const Buffer: {byteLength(value:string,encoding?:'utf8'):number};
declare module 'node:crypto' {export function createHash(name:string):{update(value:string):any;digest(format:string):string};}
