# Scoped correctness checkpoint: November 10, 2026

Six of the eight oracle rows left open by the [earlier November 9 recovery checkpoint](2026-11-09-recovery-checkpoint.md) now have independently accepted, scoped results: O19, O20, O34, O35, O38 and O40. These are separate exact-candidate results, not one new full-suite score. The two RC07 native partial-write and uncertain-flush cases remain unpassed.

| Case | Reviewed observation | Scope and limit |
| --- | --- | --- |
| O19 | A fresh renderer rebuilt from cursor zero after a real reload. | Distinct refresh case with no stored-preference dependency; it does not inherit acceptance from O40. |
| O20 | A normal Core replacement reopened the same real SQLite Store and journal, preserving one started event and one consumed approval. | Normal replacement and page reconstruction; not crash or power-loss recovery. |
| O34 | The fixed hostile payload appeared as literal DOM text with no parsed image or handler. Startup/CSP, navigation and authenticated traffic evidence agreed. | One bounded literal-rendering case with a memory Core; not blanket browser, OS-egress or hostile-content safety. |
| O35 | A browser recovered a missing terminal event using the health watermark and replay; hint-to-replay dispatch met the one-second bound. | Reference-memory Core; the timing is replay dispatch, not end-to-end recovery latency, and supplies no persistence credit. |
| O38 | The real SQLite Store reached capacity rejection, preserved the reserved terminal slot and completed Stop. | Bounded capacity/Stop behavior for the reviewed Store candidate; not a native write/flush fault result. |
| O40 | After a real reload, the renderer ignored stored cursor two for reconstruction, requested cursor zero and rebuilt the complete state. | Distinct stored-cursor reconstruction case; does not automatically establish O19 or broader recovery. |

The accepted attempts completed their checked resource retirement. The saved-evidence reviews are separate from source/VM tests and typechecking. Earlier failed or uncertain attempts remain retained in their original classifications.

## What remains

- **RC07:** real native partial-write and uncertain-flush injection, with a pinned test-only SQLite I/O mechanism, verified native build, owner/grant controls and protected recovery evidence. JavaScript simulations, ordinary SQLite errors, memory-backed VFS checks and earlier crash tests cannot substitute.
- **Other Phase 2 obligations:** shell/capability, packaging, accessibility and runtime/Core-placement work remain separate. These six passes do not close them or complete Phase 2.
- **Performance and product selection:** extensive performance qualification remains deferred. No Tauri/PWA winner, production runtime/model pairing, whole-product acceptance or release is claimed.

## November 10 pre-restart native-fault checkpoint

The RC07 work has component/source checks, including callback and memory-backed VFS assertions, Store-boundary tests and Core-delivery regressions. Those evidence classes remain distinct from actual SQLite fault acceptance.

The pre-restart inactive successor packet contains a source-reviewed, narrowly scoped x64 ICU configuration correction and a separate Store arm-uncertainty correction with three staged regressions. Those regressions and the correction review were still pending at that checkpoint. Two preparation-script sources parsed and eight packet hashes verified. No successor extraction, regeneration, build or native fault execution had occurred at that checkpoint. The prior native build outcome remains unconfirmed; no RC07 pass is inferred.

This public summary describes verified outcomes and limitations. It does not publish the local implementation, private operational records, host/process identifiers or local paths.
