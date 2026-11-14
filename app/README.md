# App source

This is the product source for Abrams Intelligence as it stands in Phase 2. It is not an installable assistant yet. It contains the pieces being compared to choose a desktop shell, plus the Core they talk to. All data and fixtures here are synthetic.

| Path | What it is |
| --- | --- |
| [`core/protocol-v1-shell-r3/`](core/protocol-v1-shell-r3/) | Reference Core (TypeScript) as the native shell runs it: an in-memory Core reached over a framed pipe |
| [`core/protocol-v1-store-r39/`](core/protocol-v1-store-r39/) | The Core with its SQLite-backed store, recovery code and the local HTTP serving path the browser variant uses |
| [`shell/`](shell/) | The Tauri (Rust) desktop shell: window, command bridge, Core worker, profile policy and bundle checks |
| [`ui/native-entry/`](ui/native-entry/) | The renderer shown inside the Tauri window |
| [`ui/pwa/`](ui/pwa/) | The browser (PWA) variant of the same interface |
| [`fixtures/`](fixtures/) | Synthetic fixtures, including the frozen retry fixture |

The two Core folders both speak wire protocol version 1 but come from different source revisions. They are kept separate on purpose; see [`core/README.md`](core/README.md).

## Check it yourself

With Node 24 or later, from the repository root:

```bash
npm ci --ignore-scripts
npm run prepare:pwa-document
npm run typecheck:native && npm run typecheck:entry && npm run typecheck:core-shell-tests
npm run typecheck:core-store && npm run typecheck:pwa && npm run typecheck:pwa-serving
npm run test:core-shell && npm run test:native-recovery && npm run test:native-adapter
npm run test:native-controller && npm run test:native-dom && npm run test:pwa
npm run test:pwa-serving && npm run test:server-lifecycle && npm run test:server-composition
```

That is six type-checks and nine test suites (197 tests). The same commands run in the [App source checks](../.github/workflows/app-checks.yml) workflow. These are source-level and in-memory tests: they use fake DOM objects, injected transports and an in-memory Core. They do not launch the app, a browser or SQLite.

## What this does not include or prove

- **No native build from this tree.** The Rust shell has been compiled and linked on the development machine from the same source in its earlier layout. It has not been rebuilt from this layout, and the frontend bundle, the pinned Node runtime and the Core bundle it embeds are not in the repository.
- **No connected run.** The shell has opened once in a witnessed run with the Core disconnected. Shell and Core have not yet run connected in a window.
- **Three files differ from the tested bytes.** `core/protocol-v1-store-r39/server/clean-admission/schema.mts`, `server/recovery/admission.mts` and `server/reference-core/shared/store-sqlite/fixture-admission.mts` each hard-code the folder a synthetic test store may open. Those folder paths pointed at the development machine and are replaced here with `C:\abrams-synthetic\...`. Nothing else in those files changed. Every other file is byte-identical to the private source tree it was copied from.
- **One known failing script.** `npm run typecheck:core-shell` fails because that configuration includes test files but intentionally has no Node type declarations. `typecheck:core-shell-tests` covers the tests.
- **Not here yet:** the newer pre-content shell admission code, whose full build has not completed.

Line endings and bytes under `app/` are preserved exactly (`app/.gitattributes`), so some files have long lines and no formatting pass has been applied.
