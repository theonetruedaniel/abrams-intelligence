# Results and evidence limits

Updated November 13, 2026 (UTC). This page reports existing observations; no new candidate experiments were run for this documentation update. Private operational records remain unpublished. The developer dispatcher is published; its synthetic write-runner update remains a separate local candidate.

## Current local product work

Abrams Intelligence is a general-purpose, local-first personal intelligence platform in active, AI-assisted development. Local development includes partial shared in-process Core, client and SQLite-backed storage implementation with scoped tests. This work is not yet published as a complete product in this repository. Full integration, product acceptance and Phase 2 completion remain unfinished.

Scoped Store recovery checks now go beyond the earlier isolated browser/transport fixtures. The November 9 results below do not change historical dispatcher counts, establish production adoption or complete Phase 2. Later scoped browser results are described below; they are not blanket browser or network-safety qualification. See the [progress ledger](progress.md).

## November 13: headless startup-admission fixture

The independently reviewed local Rust fixture passed **28/28 tests**, with zero failed, ignored or filtered tests. Its 20 new admission/thread cases use fake factories; the eight inherited cases comprise five actual task-directory tests and three injected policy tests. Both compiler/test processes exited zero and their process groups retired naturally, with no forced termination or recorded cleanup uncertainty.

This is component behavior and local test-process evidence. It does not establish a full Tauri build, actual WebView/profile/runtime readback, GUI responsiveness, the full worker/pipe suite or native SQLite fault qualification. RC07 remains unrun and unpassed. See the [test breakdown and exclusions](evidence/phase2/2026-11-13-precontent-admission-unit.md).

## November 9 to 10: scoped product verification and pending native faults

- Six previously open rows have separate reviewed process-crash results: O31, O39, RC06, RC04, RC05 and O32. [Published recovery evidence](evidence/phase2/2026-11-09-recovery-checkpoint.md) explains the real Store/WAL observations and exclusions. The results use separately pinned candidates, so they do not establish a new whole-candidate aggregate.
- RC04 verified exact replay of an earlier health reply after later work. RC05 verified reconnect-snapshot replay and revocation before returning cached content. O32 recovered the committed prefix after eight actual noncommitting WAL frames without inventing cancel success.
- These controlled worker-process-crash results retain a continuous trusted owner and OS. They do not establish power-loss or owner-restart durability, partial/torn-write or uncertain-flush behavior, browser correctness or complete product recovery.
- The reviewed O34 owned-page method recorded 33 Node cases, nine runtime-wrapper memory compositions, seven HTTP failure-observer memory cases, strict TypeScript and complete pin checks, plus helper compilation and native-free rule checks. Its next admitted submission stopped at the action-time memory gate before any workload began. Earlier uncertain browser attempts remain preserved. That early submission did not pass O34; a later independent scoped result did.
- Subsequent independently reviewed passes cover O19, O20, O34, O35, O38 and O40. These later results supersede the eight-open count and O34-unpassed status at the earlier checkpoint, without altering its receipts or uncertainty. See the [November 10 correctness checkpoint](evidence/phase2/2026-11-10-correctness-checkpoint.md) for each result and limit.
- The November 10 pre-restart RC07 checkpoint recorded an inactive successor packet, source-reviewed build configuration, and staged arm-uncertainty regression cases. Two preparation-script sources parsed and eight packet hashes verified. At that checkpoint regression execution and correction review were pending. The earlier native build outcome remains unconfirmed, and no native fault execution or RC07 pass is established.

Only the two RC07 native partial-write/uncertain-flush cases remain from those eight oracle rows. Shell, packaging, accessibility, capability-denial and runtime/Core-placement obligations remain separate; extensive performance qualification is deferred.

## October 4: published tooling and separate local update

The published dispatcher snapshot recorded **227 passed and 23 skipped** in its full 250-test default suite, plus five passing demo scenarios. See the [published verification](../tools/development-dispatcher/VERIFICATION.md).

A later **unpublished nine-file write-runner candidate** recorded **238 passed and 23 skipped** in its 261-test default suite, all 11 focused tests, nine synthetic controller probes and the same five demo scenarios. These counts refer to different exact snapshots. The candidate preserves completed per-probe receipts before aggregate rewrites; interrupted or malformed reports are incomplete, never passing. Constructed records and verifier receipts do not establish live containment. The skips are nine Linux transport cases, twelve opt-in containment cases and two unavailable symlink-privilege cases.

One October 4 Laya retry stopped at the host-memory guard with termination observed. It produced **no new quality score or memory qualification**. The corrected September 29 result below remains the last completed quality measurement.

The [progress ledger](progress.md) maps these observations to the canonical sequence. The October 1 R3 specification-input freeze is completed review evidence; partial local shared-reference/Core/client implementation now exists, while full product and shell acceptance remain incomplete.

## October 1: offline developer dispatcher

The existing developer dispatcher was copied into an isolated local snapshot. A private 50-file review archive was then extracted into a fresh folder and tested with Python 3.13.14 in isolated mode with site packages disabled. The exact source/fixture hashes were checked; original source bytes were preserved.

| Check | Observation | Scope |
| --- | --- | --- |
| Selected unit/protocol/lifecycle suite | 88 passed; zero failures, errors or skips in the corrected/final runs | Eleven selected modules, fake clients/classifier and owned synthetic Python children |
| Actual CLI preview | Four assertions passed: exit zero, Luna/low route, explicit offline evidence label, `dispatched: false` | Synthetic routine manifest/catalog; no live model dispatch |
| Isolated import inventory | No external Python modules loaded by controller/test process | Isolated interpreter, site packages disabled; child fixture sources standard-library-only |
| Source preservation | Copied source/fixtures still matched their recorded hashes | No product-source modifications |

An initial wrapper run passed 87/88; its process-death child could not import the copied package because the wrapper used the wrong working directory. Correcting only that wrapper yielded 88/88; the failed first result remains recorded. This was a demonstration-wrapper issue, not an inferred product defect.

The selected coverage includes deterministic routing, manifest validation, bounded retry, journal recovery, Stop, malformed mock replies, trusted-verifier separation, shadow selection and fail-closed tool-surface checks. Two symlink/junction escape cases were explicitly excluded. Remaining dispatcher modules, permission-change tests, live/WSL qualification, real models, selector quality comparisons, product Core and Phase 2 acceptance were unrun. No Linux/second-host pass is claimed. This is not the full dispatcher suite or an executed product recovery test.

The preview's `action: dispatch` is a policy proposal; `dispatched: false` is the execution fact. GPT-6 names are development presets, not a requirement that the product use only OpenAI models. Live editing remains blocked by incomplete direct-tool enforcement/current-build qualification. The source candidate is not published by this documentation commit; no cost savings or live-model performance is established.

## September 29: Laya development selector

Exact evaluated code: [Laya 0.3.20](https://github.com/NandhaKishorM/laya/tree/4066d5d5fbf08b66c6757ddeedbd797bd7655bc0). Exact checkpoint: [laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual/tree/e4e9ddf21a7b1903b7acffd8814ad4307bf63a67). CPU inference used an isolated Linux runtime. These results concern a development-task classifier, not product model selection or the Apple CoreML port.

| Criterion | Measured observation | Disposition |
| --- | --- | --- |
| Ordinary acceptable proposals at least 90% | 18/40 = 45% | Failed |
| At least 60 frozen cases, including 15 consequential | 60 cases; 15 consequential, 5 exceptional | Corpus requirement met |
| No consequential-floor violations after deterministic policy | 0/20 protected policy violations; nine raw protected under-routes | Offline policy composition passed; no live routing proof |
| Raw under-routing comparison | 13 raw under-routes against trusted corpus expectations | Failed; not a separately measured natural-language rules classifier |
| Warm p95 at most 5 seconds | Corrected CLI run: 0.546621837 seconds (~0.5466); maximum 0.637726800 seconds (~0.6377) | Passed on this run |
| Cold ready-frame latency | Corrected CLI run: 10.7412 seconds, excluding inventory and sandbox argument construction | Observation, not full end-to-end startup |
| Classifier memory at most 2 GiB | Separate earlier measurement: 2,548,977,664 bytes, approximately 2.37 GiB | Failed then; not remeasured by corrected CLI run; classifier process only, not a process-tree upper bound |
| At least 12 paired development tasks | Not performed because editing admission was unresolved | No success-rate, task-latency or savings claim |

**Decision: default adoption rejected for this exact evaluated candidate.** No production selector pin is installed; deterministic rules remain the fallback. A fast classification did not offset failed quality/memory criteria. The now-observed corpus cannot be reused for tuning and then presented as independent validation. Any future artifact/backend needs a separately justified evaluation.

Two September 29 timing runs must remain distinct. The earlier `2026-09-29-laya-corpus-results.json` records warm p95 0.451304946 seconds, maximum 0.501580487 seconds and cold ready-frame time 10.0326 seconds. Its nearest-rank p95 is sorted observation 57/60 (`complex-07`). These are historical observations, not the later corrected CLI result.

The later `2026-09-29-selector-cli-results.json` records warm p95 0.546621837 seconds (rounded to ~0.547), maximum 0.637726800 seconds and cold startup 10.7412 seconds. Its nearest-rank p95 is observation 57/60 (`screening-03`); all 60 supervisor warm durations match the evaluation rows. The receipt identifies its timing source as Linux-supervisor monotonic cold-start and warm-request durations. The transport measures lazy launch through the ready frame and subtracts startup from the first request; inventory and sandbox argument construction are excluded. An initial CLI receipt with incorrect constructor-based attribution was retained as invalid timing evidence; it should not be conflated with the earlier corpus run.

Artifact SHA-256 identities: earlier corpus `8ac5e9c50bb45e56669631afac2492100df4d11888b0dfb75d2acd86b54b573d`; corrected CLI `38478329660e7dd23a48b56604baf8bc5b95e36c037d85a6a1d695f427818aa4`. Timing-code changes produced a new evaluation-only runtime digest. The corrected run did not remeasure memory or perform paired development tasks, and did not create a production admission pin. Quality remained 18/40 (45%) and adoption remained false. The overall 27/60 acceptable count must not replace the preregistered ordinary-case denominator of 40.

## Product acceptance remains incomplete

No completed Tauri/PWA candidate comparison, full product Core/oracle acceptance, production runtime/model pairing qualification, graph-memory bake-off, browser submission, clean-host product recovery or product soak is established here. The public walkthroughs, acceptance map and JSON examples remain synthetic design artifacts with unmeasured/null results. Installed compiler smoke and source acquisition are preparation evidence, not application acceptance.

The candidate register's other dated intake proposals have no benchmark/adoption records. Design-selected SQLite/FTS5 or a narrowly approved advisory skill should not be described as deployed integrations. See the [evaluation method](evaluation-method.md), [candidate register](candidate-research.md) and [source notes](source-notes.md).
