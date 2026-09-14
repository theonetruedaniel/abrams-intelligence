# Planned bake-off method

A bake-off compares candidates on the same task and records enough evidence to explain the choice. This page summarizes planned evaluations from the working project. Execution has not started. There are no measured scores, winners or validated integrations in this showcase.

## Separate comparison lanes

| Lane | Baseline | Question |
|---|---|---|
| Runtime | Deterministic Abrams runtime contract reference | Can the candidate handle task events, interruption and recovery within core-owned permissions? |
| Retrieval | Simple relational/full-text retrieval | Does extra memory machinery improve supported answers enough to justify cost and complexity? |
| Development workflow | Existing requirements and review workflow | Do templates improve defect detection or implementation quality without excessive overhead? |
| Build versus adapt | Smallest useful Abrams design under the same requirements | Would adapting an existing assistant reduce total implementation and maintenance work? |

The contract reference describes expected behavior; it is not a model-quality competitor. Use the same model route, inputs, tool scope and resource budget within each applicable comparison.

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

Measure task completion against expected results, supported-answer quality where relevant, latency, total model/tool cost, memory use and operator corrections. Retrieval studies also need retrieval quality and rebuild/deletion checks. Development studies need valid findings, false positives and review effort. Build-versus-adapt studies need setup time, patch burden and removal/export effort.

Treat prohibited actions and scope violations as disqualifying gates. Speed or answer quality cannot average away an authorization failure. Publish repetitions and uncertainty alongside aggregate results; explain missing measurements.

## Record a decision

The [synthetic evaluation record](../examples/evaluation-record.json) shows the fields a future result would need. Null measurements mean unmeasured. A later decision should link raw evidence, describe failures and tradeoffs, and choose among further evaluation, selective reuse, adoption or deferral.

The simpler option remains the baseline unless the evidence justifies additional complexity. A new dependency needs an exit plan as well as an installation plan.
