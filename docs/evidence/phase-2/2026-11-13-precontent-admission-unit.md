# Headless startup-admission checks: November 13, 2026

A local Rust fixture passed **28 of 28 tests**, with zero failures, ignored tests or filtered tests. An independent saved-evidence review accepted that result within the fixture's scope. The run finished at 03:15 UTC on November 13.

The fixture checks the gate that waits for startup observations before allowing content startup, and the thread that retains ownership of a pending startup operation. It uses the Rust standard library and does not compile or launch the Tauri application.

## What ran

| Group | Cases | Evidence |
| --- | ---: | --- |
| Admission and retained-thread behavior | 20 | Injected fake factories and controlled callbacks |
| Profile-directory behavior | 5 | Actual filesystem operations in the task's test directories |
| Policy-presence handling | 3 | Injected observations; no real registry or policy readback |

The 20 admission/thread cases cover both orders of the blank-page/readback barrier, missing or partial admission, rejected pending commands, duplicate and late reports, failure paths, and close racing with a committed factory. They also check that queued readiness without a Started event does not count as success, that finalization is explicit, and that blocking factory work runs on a retained thread rather than the caller.

An already admitted factory can still execute when it races with close. These tests do not establish global Stop behavior or absence of effects after cancellation.

Both the compiler and test processes exited successfully. Their owned process groups retired naturally to zero active processes and closed without forced termination or recorded cleanup uncertainty. The reviewer checked all 101 frozen source-file pins, the test executable identity, the receipt and the output logs. The four compiler warnings were for unused functions; source review confirmed that the fixture did not invoke the real registry-observation functions.

## What this does not establish

The fixture did not compile Tauri's application entry point, commands or COM observer. It did not create a WebView, inspect a live profile/runtime version, launch a GUI or start Node. It does not prove actual UI responsiveness, real browser event ordering or IPC, actual Core startup failure, the 15-second admission-timeout path, or the complete worker/pipe regression set.

At this 03:15 UTC unit-test checkpoint, the newer successor's full Tauri build was still being prepared. It was subsequently invoked and interrupted by a policy denial, with no final receipt or executable. Three earlier November 12 linked builds and the later November 13 disconnected desktop smoke are separate evidence, not outcomes of these 28 tests. See the [reconciled chronology](2026-11-13-native-build-pipe-and-smoke-reconciliation.md). These unit tests establish no runtime/isolation, accessibility, shell-selection or Phase 2 completion.

The two **RC07 native SQLite partial-write and uncertain-flush cases remain unrun and unpassed**. This independent headless result does not advance those cases or change their execution restrictions.

This page is a public summary of checked source and saved evidence. Private paths, operational records, implementation source and machine identifiers are not published.
