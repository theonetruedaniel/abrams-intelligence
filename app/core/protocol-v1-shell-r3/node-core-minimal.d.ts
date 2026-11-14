// Limited declarations for the exact already-used Node builtins in frozen Core.
// This is not a replacement for full Node typings or native API qualification.
declare const Buffer: {byteLength(value:string,encoding:'utf8'):number};
declare module 'node:crypto' {
 interface SyntheticSha256Hash {
  update(value:string|Uint8Array):SyntheticSha256Hash;
  digest(encoding:'hex'):string;
 }
 export function createHash(algorithm:'sha256'):SyntheticSha256Hash;
}
