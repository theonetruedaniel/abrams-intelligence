# Results and evidence limits

Updated October 1, 2026. This page reports existing observations; no new candidate experiments were run for this documentation update. Working-project receipts were inspected and summarized without publishing private operational records or the pending source candidate.

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
| Warm p95 at most 5 seconds | 0.4513 seconds; maximum 0.5016 seconds | Passed on this corpus |
| Cold ready-frame latency | 10.033 seconds, excluding inventory | Observation, not full end-to-end startup |
| Classifier memory at most 2 GiB | 2,548,977,664 bytes, approximately 2.37 GiB | Failed; classifier process only, not a process-tree upper bound |
| At least 12 paired development tasks | Not performed because editing admission was unresolved | No success-rate, task-latency or savings claim |

**Decision: default adoption rejected for this exact evaluated candidate.** No production selector pin is installed; deterministic rules remain the fallback. A fast classification did not offset failed quality/memory criteria. The now-observed corpus cannot be reused for tuning and then presented as independent validation. Any future artifact/backend needs a separately justified evaluation.

The timing comes directly from the corpus summary (`warm_p95_seconds = 0.4513049459999934`). A proposed 0.547-second value could not be supported by the inspected primary receipts and is not reported. The overall 27/60 acceptable count must not replace the preregistered ordinary-case denominator of 40.

## Product acceptance remains planned

No Tauri/PWA candidate comparison, product Core/oracle execution, production runtime/model pairing qualification, graph-memory bake-off, browser submission, clean-host product recovery or product soak is established here. The public walkthroughs, acceptance map and JSON examples remain synthetic design artifacts with unmeasured/null results. Installed compiler smoke and source acquisition are preparation evidence, not application acceptance.

The candidate register's other dated intake proposals have no benchmark/adoption records. Design-selected SQLite/FTS5 or a narrowly approved advisory skill should not be described as deployed integrations. See the [evaluation method](evaluation-method.md), [candidate register](candidate-research.md) and [source notes](source-notes.md).
