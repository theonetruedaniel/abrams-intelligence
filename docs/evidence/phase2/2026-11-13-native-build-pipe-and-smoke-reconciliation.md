# Native builds, real pipes and desktop smoke: November 12–13, 2026

This correction adds completed work omitted from the earlier November 13 public update and separates it from the newer interrupted build. These are local development results; the product source and binaries are not being released here.

## November 12: actual Rust–Node process and pipe tests

The first headless run passed **15/15 test functions**: 14 inherited Rust broker regressions and one actual Rust-to-Node reference-Core scenario over anonymous pipes. The scenario exercised health/reconnect, real output, Cancel, global Stop, event replay, local close/reopen of the same live Core and explicit owner cleanup. Same-process reopen is not durable restart recovery.

A separate successor also passed **15/15 test functions**. Its one serial integration function repeated the positive scenario and exercised five failures: no reply, intentional nonzero peer exit, truncated response, malformed response header and an injected interruption immediately after writer creation. The other 14 broker tests overlap the first run. These are not 30 unique tests or 20 independent failure-test functions.

Each failure verified child reaping and all started I/O-worker joins. No-reply and partial-start cases deliberately terminated their retained child; those expected inner terminations are not natural Node retirement. Both runs' outer compiler/test jobs exited zero, retired naturally to zero active processes and closed without forced termination or cleanup uncertainty. This is scoped synthetic headless transport, not a Core-connected desktop or complete fault matrix.

### Later bundle and worker checks

A pinned-bundle successor passed the same **21-test suite at two local Windows paths**, one containing a space. That is 21 distinct tests repeated, not 42 unique tests. Each location exercised the positive pipe flow and the five named failures using its own bundled Node, plus missing-file/tamper/default-disconnect and file-custody checks. Compiler and both test jobs retired naturally. The earlier 20/21 failed attempt remains historical; its result was not rewritten.

A separate focused test then exercised the real CoreWorker with that bundle: **one passed, 20 filtered**, including output, same-Core local delivery close/reopen and explicit shutdown. The filtered tests were not rerun. Compilation and testing exited zero with natural cleanup.

These are same-host headless checks, not a portable GUI, complete loader confinement, adversarial parent-crash qualification or network sandbox. Their receipt/review hashes and the two 21-test output logs were independently checked for this correction.

## November 12: three successfully linked Windows executables

Three independently reviewed offline release builds completed:

| Successor | Build completed (UTC) | Verified local artifact |
| --- | --- | --- |
| Tauri/Core composition | 09:54 | Linked executable, 8,845,824 bytes |
| Fixed-sibling synthetic Node/Core bundle | 10:59 | Linked executable, 8,863,744 bytes, with the pinned local bundle staged beside it |
| Fresh-profile and policy-presence guards | 11:31 | Linked executable, 8,897,024 bytes |

Each Cargo root exited zero, reported a successful build and had natural whole-job retirement, zero active processes, successful job closure and no forced termination or cleanup uncertainty. Independent reviews checked artifact identities, source pins and bounded static executable structure. The build steps did not launch the applications. These results do not retroactively pass earlier failed build attempts, identify their unknown survivors or establish a distributable release.

## November 13: newer pre-content build interrupted

The separate [28/28 headless admission result](2026-11-13-precontent-admission-unit.md) remains accepted. Its newer full Tauri build runner was subsequently **invoked once**, then the tool session stopped on a network-policy denial. It is no longer accurate to describe that invocation as merely prepared or unexecuted.

Read-only reconciliation found empty attempt, target and temporary directories, no compiler logs, no final runner receipt and no executable. Compiler start, completion of the runner's full preflight and formal cleanup remain unproven. The requesting component is unknown. A coordinator checkpoint records the interruption but does not replace the missing receipt. No retry or alternate route is claimed; the build remains stopped.

## November 13: witnessed disconnected desktop smoke

From 05:15:21 to 05:15:40 UTC, the older accepted fresh-profile executable ran once with no arguments and Core disconnected by default. Its root exited zero; the owned job retired naturally to zero, closed successfully and reported no forced termination, primary failure or cleanup uncertainty. Both application logs were empty.

A separate contemporaneous manual witness confirmed the window opened and closed on its own and described menu-like text. The immutable process receipt still says the witness was pending; the later witness record supplements it rather than rewriting it. The 18 pinned staged product files and their originals matched; this does not mean the runtime created no additional files.

This is a limited desktop smoke, not automated window attribution, validated content or usable controls. Actual runtime identity, pre-content profile-directory readback, network/identity isolation, Core-connected GUI behavior, accessibility and performance remain unqualified. It used the older executable, not the blocked pre-content successor.

## Verification and remaining gates

For this public correction, **six primary receipt hashes** were independently rechecked: two pipe runs, three linked builds and one disconnected smoke. Their six outcome-review hashes matched; the later relocation and focused-worker receipt/review pairs were also verified. The test logs, executable identities, smoke's 36 staged/original identity checks, separate witness records and interruption checkpoint were also checked. This is saved-evidence verification, not a rerun.

The six earlier scoped correctness acceptances, O19/O20/O34/O35/O38/O40, were separately reconciled against their acceptance index and review hashes. No new whole-candidate aggregate is inferred.

Both **RC07 native SQLite partial-write and uncertain-flush cases remain restricted, unrun and unpassed**. Shell comparison, runtime/isolation, packaging/rights, accessibility and the other Phase 2 gates remain open. Private paths, operational records, personal data and product implementation source remain unpublished.
