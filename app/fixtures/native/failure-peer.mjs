// Fixed fixture fault peer only. No Core authority, files, listeners or children.
const mode = process.argv[2];
if (process.argv.length !== 3 || !['no-reply','nonzero-eof','truncated','malformed','partial-start'].includes(mode)) throw new Error('invalid fixture');
process.stdin.on('error', () => { process.exitCode = 29; });
process.stdout.on('error', () => { process.exitCode = 29; });
if (mode === 'no-reply' || mode === 'partial-start') {
  // Explicitly survive input EOF until the retained Rust Child is killed.
  process.stdin.resume();
  setInterval(() => {}, 1000);
} else {
  let used = false;
  process.stdin.on('data', () => {
    if (used) return;
    used = true;
    process.stdin.pause();
    process.stdin.destroy();
    if (mode === 'nonzero-eof') { process.exitCode = 23; process.stdout.end(); return; }
    const head = Buffer.alloc(24);
    head.write('ABP1'); head[4] = 1; head[5] = 1;
    head.writeUInt32LE(1, 8); head.writeUInt32LE(1, 12);
    if (mode === 'truncated') head.writeUInt32LE(8, 20); // body never sent
    else head[6] = 1; // reserved header field invalid
    process.stdout.end(head);
  });
  process.stdin.resume();
}