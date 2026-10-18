# Planned bake-off method

A bake-off compares candidates on the same task and records enough evidence to explain the choice. This page summarizes planned evaluations from the working project. Most product comparisons remain unexecuted. A separate development-selector experiment and selected offline dispatcher tests have existing results, summarized in [results and evidence limits](results-and-evidence.md); they do not establish product adoption.

## Comparison index and qualification lanes

The canonical index distinguishes 15 scheduled bake-offs, ten trigger-only comparisons and two single-candidate qualification lanes. The [full candidate inventory](candidate-research.md) includes later Q intake studies without making unrelated candidates prerequisites for the Core.

| IDs | Comparison |
| --- | --- |
| BO-01 / BO-02 | Tauri versus local web/PWA; actual Core placement |
| BO-03 | Every eligible initial runtime against the same deterministic oracle and at least 20 frozen mock tasks |
| BO-04 / BO-05 | Local inference runtime/backend, then exact model/task/hardware tier |
| BO-06 / BO-07 | Full relational/FTS retrieval versus vector/hybrid; graph projection only after passing controls |
| BO-08 | Managed Playwright control; restricted CDP only for a named gap |
| BO-09 / BO-14 / BO-15 | Specialist/reviewer, reusable skill and compiled-playbook value |
| BO-10 | Three interactive desktop concepts; static screenshots cannot decide |
| BO-11 / BO-12 / BO-13 | Evaluation harness; isolated security-engine value; encrypted backup adapter |
| BO-T01–BO-T10 | Trigger-only database, workflow, research/lifecycle, document/mobile, vector, remote-route, device-controller and catalog-classifier alternatives |
| Q-01 / Q-02 | Native-device adapter and Agency catalog qualification; not automatic comparative winners |

## Separate comparison lanes

| Lane | Baseline | Question |
|---|---|---|
| Runtime | Deterministic Abrams runtime contract reference | Can the candidate handle task events, interruption and recovery within core-owned permissions? |
| Retrieval | Simple relational/full-text retrieval | Does extra memory machinery improve supported answers enough to justify cost and complexity? |
| Development workflow | Existing requirements and review workflow | Do templates improve defect detection or implementation quality without excessive overhead? |
| Build versus reuse | Smallest useful Abrams design under the same requirements | Should the capability use upstream, reuse eligible components, or be implemented independently, considering total development, operation and maintenance costs? |

The contract reference describes expected behavior; it is not a model-quality competitor. Use the same model route, inputs, tool scope and resource budget within each applicable comparison.

## Build, reuse and paid dependencies

Planning addition approved October 18, 2026. For each relevant capability, consider using the existing project, reusing selected components under their licenses, independently implementing the smallest useful capability within Abrams, or deferring/rejecting the option. Record applicability and unresolved questions. This is an assessment requirement, not a requirement to build every alternative or a completed pricing audit of the collection.

| Approach | What the evaluation must establish |
|---|---|
| Use upstream | Exact feature fit, integration and license eligibility, operating cost, updates and exit path. |
| Reuse components | Eligible code/assets and dependencies, retained license and attribution duties, adapter effort and patch burden. |
| Implement independently | Behavior specification and provenance, permitted evidence, required dependencies, development estimate and independent verification against the same tasks. |
| Defer or reject | Why the capability is unnecessary, blocked or uneconomical, and what evidence would reopen the decision. |

The existing Q-38 [Reverse Engineer Anything repository](https://github.com/morluto/rea) is an optional investigation aid when shipped artifacts or behavior need examination. Source-first inspection and direct tools remain the control. REA may help produce an evidence-linked specification or integration map; its findings do not qualify the implementation. Pin and independently test any new implementation as its own variant. Preserve existing required comparisons, phase gates and the separation between implementation approach and formal adoption.

Check what payment buys: app features or orchestration, managed hosting, model inference, proprietary data, external APIs, compute, hardware or license rights. Record exact feature/version, free or self-hosted limitations, dated pricing/terms sources, quotas and unknowns. A rebuilt interface or workflow may still depend on paid services; client inspection does not establish access to server code, proprietary data or model weights. Public source does not establish that every feature is free or reusable.

Compare analysis, development, setup, integration, verification, recurring service/infrastructure costs, updates, maintenance and export/removal over the same stated workload and period. Separate estimates from measurements and leave unknown costs unknown. Preserve the USD 25 monthly metered allocation; this planning addition authorizes no purchase or paid execution.

Assess source, asset, model and dependency rights, intended use and permitted access for the selected target. Decompilation, translation or AI rewriting does not by itself establish independent ownership or remove obligations. Document evidence separation where independence matters; do not label a process clean-room without support. This method authorizes no access-control bypass, installation, REA/provider/target execution or adoption.

Use this record outline at the next relevant intake: capability and exact identities; approach applicability; rights/provenance; paid dependencies and replacement feasibility; dated cost assumptions; matched tasks and acceptance criteria; recommendation; remaining unknowns and next gate. Revisit the affected decision after material changes to features, rights, prices, quotas, dependencies, workload or maintenance evidence. Existing results retain their original scope and run identities.

## Freeze the experiment before running

Record the source revision, exact dependency/configuration selection, synthetic corpus, expected outcomes, repetitions, time and cost limits, and acceptance thresholds. Define how to handle failed runs and ambiguous outcomes before seeing results. Prerequisite and execution approval must be resolved in the working project.

Use isolated synthetic fixtures first. Real provider calls or external actions need a separately specified evaluation scope. A documentation review cannot establish runtime behavior.

## Representative acceptance cases

These cases summarize the intended checks; they are not an executable suite.

| Case | Expected observation | Evidence to retain |
|---|---|---|
| Tool asks for an action outside the task's grant | Core denies the action before dispatch | Proposed action, scope decision and dispatch log |
| Timeout after a simulated external action | Mark outcome unresolved; reconcile before a retry | Action identifier, mock receipt and recovery trace |
| User stops a running task | No new dispatch after revocation; outstanding work has an explicit state | Revocation time, subsequent events and cancellation outcome |
| Selected provider becomes unavailable | Expose a choice when a fallback changes privacy, cost or authentication | Route selection and attempted-call log |
| User corrects or deletes a remembered fact | Preserve correction provenance and exclude deleted material from retrieval | Source revision, retrieval output and deletion checks |
| Reviewer sees a deliberately flawed specification | Identify the bad premise rather than score simple compliance as success | Frozen specification, findings and independent assessment |

## Score useful outcomes and operating costs

Measure task completion against expected results, supported-answer quality where relevant, latency, total model/tool cost, memory use and operator corrections. Retrieval studies also need retrieval quality and rebuild/deletion checks. Development studies need valid findings, false positives and review effort. Build-versus-reuse studies also need development/integration time, paid-dependency costs, patch burden, maintenance ownership and removal/export effort.

Treat prohibited actions and scope violations as disqualifying gates. Speed or answer quality cannot average away an authorization failure. Publish repetitions and uncertainty alongside aggregate results; explain missing measurements.

## Keep research, testing and adoption separate

Store source review, immutable identity/eligibility, execution approval, benchmark outcomes and adoption as different facts. Retain failures and unsupported combinations. Compare requested routes with server acceptance separately from unobserved backend execution. A test double is an oracle, not a production winner. After mock runtime conformance, real-route quality and every proposed production pairing still need relevant evidence and user adoption authority.

The September 4 amendment calls for separate independent implementation and security reviews in fresh contexts, with the same frozen inputs and disclosed limitations. Reviews supply evidence; they cannot grant adoption or publication automatically. No speed, cost or quality score overrides an authority or data-loss failure. [Laya's recorded rejection](results-and-evidence.md) is an example of that separation.

## Record a decision

The [synthetic evaluation record](../examples/evaluation-record.json) shows the fields a future result would need. Null measurements mean unmeasured. A later decision should link raw evidence, describe failures and tradeoffs, and record an implementation approach alongside the formal evaluation/adoption disposition. An independent implementation remains untested and unadmitted until its own evidence and decision support promotion.

The simpler option remains the baseline unless the evidence justifies additional complexity. A new dependency needs an exit plan as well as an installation plan.
