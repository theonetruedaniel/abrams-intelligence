# Progress and next steps

Updated October 7, 2026. This page distinguishes published code, locally verified
work, reviewed specifications and unrun product acceptance. It is an evidence
snapshot, not a live operational status feed.

## Progress in plan order

| Plan stage | Completed evidence | Remaining work |
| --- | --- | --- |
| A: architecture and evaluation foundation | Preserved 19-document baseline; approved amendment; requirement and capability maps; 150-record frozen discovery catalog and source-coverage obligations. Later intake adds 35 proposed records. | New research does not qualify or adopt a candidate. |
| B: scoped host readiness | Later readiness evidence admits attended, signed-in, AC-powered synthetic development within its fixed resource boundary. Native C/Rust smoke and locked source acquisition are recorded. | Historical readiness is not current headroom or unrestricted workload admission. |
| C: contracts, shared reference and comparisons | October 1 R3 specification inputs have a recorded freeze after two scoped independent reviews. Historical fixture expectations and corrections are retained. | Shared reference implementation and runtime tests remain unrun. Native/build/containment prerequisites still apply before equivalent Tauri/PWA and runtime comparisons. |
| D: authority and durable data foundation | Architecture and acceptance criteria are specified. | Product store, grants, broker, budgets, effects, Stop and synthetic restore acceptance remain future work after C. |
| E onward: useful capabilities and release | Capability prerequisites and comparison questions are registered. | Exact model routes, real runtime/model pairings, optional integrations and release/recovery evidence remain separately gated. |

The older baseline ledger and later readiness worktree describe different dated
checkpoints. The later scoped host disposition and R3 freeze supplement that
history; neither implies that a product Core has run or a production placement
has been selected.

## Developer tooling

The dispatcher is a separately authorized development aid. Its progress does not
advance the product's C-to-D gates.

| Snapshot | Evidence | Publication and limits |
| --- | --- | --- |
| October 1 selected demonstration | 88 selected tests passed and four CLI-preview assertions passed. | Historical selected coverage, not the full suite. |
| October 4 published source | 250 default tests discovered: 227 passed, 23 skipped. Five demo scenarios and three focused demo tests passed. | [PR #1](https://github.com/theonetruedaniel/abrams-intelligence/pull/1) published the component; see [verification](../tools/development-dispatcher/VERIFICATION.md) and [demo](../tools/development-dispatcher/DEMO.md). No live dispatch was admitted. |
| October 4 synthetic write-runner candidate | 261 default tests discovered: 238 passed, 23 skipped. All 11 focused runner tests, nine controller probes and five demo scenarios passed in the review export. | A separate nine-file local candidate, not yet included in the published component. This documentation does not publish or activate it. |

The write-runner candidate tests exact file outcomes, independent integration and
recovery statuses, conflicts, Stop, interruption, missing termination evidence,
scope denial and continued live-admission denial. It creates each completed
receipt exclusively, flushes and fsyncs it before updating the aggregate. A later
aggregate-write failure can leave an incomplete report while earlier completed
receipts remain available. It does not promise universal power-loss durability.

Its copy records and verifier receipts are synthetic. No model or contained
verifier runs. Protected sentinel preservation is not protected-read containment.
Seven live categories remain unrun. The 23 skipped tests comprise nine Linux
transport cases, twelve opt-in containment cases and two unavailable symlink
privilege cases. Skips are not passes.

Local candidate patch SHA-256:
`b82062ca59df0487ac60070b6a4ac4f2c0531b4105f7456e61fb4cf3e5be9aeb`.
This identifies the reviewed snapshot; it is not a public source commit or a
live-admission pin. No hosted CI result is inferred from local tests.

## Evaluations actually completed

The [Laya development-selector experiment](results-and-evidence.md#september-29-laya-development-selector)
measured one frozen configuration: 18/40 ordinary proposals were acceptable
(45%, below the 90% gate). Corrected warm p95 was approximately 0.5466 seconds.
A separate earlier classifier-process memory measurement was approximately
2.37 GiB against a 2 GiB limit; it was not an entire process-tree upper bound.
Default adoption was rejected for that exact candidate.

One October 4 retry used the existing configuration and stopped under the
host-memory guard. Termination was observed; no new quality score or memory
qualification resulted. The historical score remains separate from that retry.

No completed product Tauri/PWA, runtime, Core-placement or memory bake-off is
claimed. The [83-repository catalog](repository-catalog.md) separates measured
work from source screening, planned comparisons and collected references.

## Next unfinished step

Continue C in the existing order. Do not select a convenient demo or a subset of
runtimes as a substitute for the plan.

1. **Complete shared-reference implementation preflight.** Verify the R3 frozen
   inputs and existing acquisition receipts, then check current AC/host headroom.
   Complete the required exact native source/ABI/build-permission review,
   runtime provenance, capture-lifetime and containment qualification, and the
   scoped implementation/test plan. Do not repeat source acquisition merely to
   restart work.
2. **Implement the shared deterministic reference and runner** against those
   reviewed protocol/oracle inputs. Exercise actual persistence, stale replies,
   cancellation, rollback and recovery cases. Fixture shape checks alone do not
   satisfy these behavior requirements.
3. **Run the equivalent Tauri/PWA comparison** only when its executable intake,
   resource and execution requirements pass.
4. **Qualify every eligible initial runtime against the same oracle**, then use
   actual runtime/IPC/recovery/packaging observations for the BO-02 production
   Core decision. Keep blocked candidates visible with reasons.
5. Build D controls before E model-route and production-pairing admission. Later
   optional studies retain their capability-specific gates.

R3 input aggregate SHA-256:
`07070bc5d03892ae6a6741cf292e56ce34913774369901b3b4a05c8983391745`.
This is a reviewed specification identity, not executed acceptance evidence.

The immediately useful next work is that bounded preflight and outstanding
source/contract review. A successful build or bake-off today cannot be promised
before its resource and executable-review prerequisites pass. This public
summary exposes no private host inventory, credentials or operating records.
