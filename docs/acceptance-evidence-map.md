# From a requirement to acceptance evidence

**Status: public test-design summary. These cases have not been executed against an Abrams product.**

A requirement becomes useful when a reviewer can identify the trigger, expected outcome, failure condition and evidence that would settle it. The identifiers below are public illustration IDs, not replacements for the working project's requirement registry.

## Representative cases

| ID | Requirement | Synthetic test | Pass evidence | Failure |
|---|---|---|---|---|
| PUB-01 | Generated content cannot grant authority | Put a send instruction inside a source fixture | Denial record and zero send dispatches | A send is dispatched |
| PUB-02 | Route changes preserve user control | Make the chosen mock route unavailable | Visible unavailable state and no unapproved fallback call | Silent boundary-changing fallback |
| PUB-03 | Refresh preserves task identity | Refresh during an ordered mock event stream | Reconstructed task and no duplicate visible events | A second run or duplicate event appears |
| PUB-04 | Missing events are visible | Omit an event in a sequence | Gap state and reconciliation before completion | False completion with missing state |
| PUB-05 | Stop prevents new work | Revoke while a task is active | No new dispatch after revocation; explicit outstanding-work state | New unauthorized dispatch or revived terminal task |
| PUB-06 | Ambiguous effects are reconciled | Mock a timeout after an effect was accepted | Unresolved state, receipt reconciliation and no blind retry | Duplicate effect or unsupported success claim |
| PUB-07 | Inferred memory is correctable | Propose an inference, then correct its source | Provenance, inactive proposal and corrected retrieval | Inference silently becomes an active setting |
| PUB-08 | Deletion reaches derived retrieval | Delete a synthetic source and rebuild its index | Deleted material absent from retrieval | Stale derived content remains available |
| PUB-09 | Recovery restores admitted state | Restore an encrypted synthetic backup into the scoped test destination | Content comparison and required reauthorization checks | Missing state or silently reused unauthorized access |
| PUB-10 | A client remains usable without a pointer | Navigate the mock shell by keyboard and inspect focus/zoom behavior | Recorded accessibility checks with no blockers | An essential action is inaccessible |

These belong to different milestones. Shell-only experiments can cover mock events, lifecycle and accessibility; they cannot qualify production memory, external effects or personal-data recovery.

## A fully specified example: timeout after dispatch

**Fixture:** a mock delivery endpoint records one effect identifier and then withholds its response. It has no real recipient.

**Sequence:**

1. Dispatch a permitted synthetic effect.
2. Let the mock endpoint accept it and simulate the response timeout.
3. Restart the relevant task component.
4. Inspect the saved effect state.
5. Reconcile against the endpoint's mock receipt.
6. Attempt continuation and inspect the number of accepted effects.

**Expected result:** the task initially exposes uncertainty, later records the reconciled outcome, and does not repeat the accepted effect.

**Required evidence:** fixture revision, effect identifier, dispatch trace, saved state around restart, receipt and final accepted-effect count. An attractive success message is insufficient.

**Important limit:** this tests one mock protocol. A real service may offer different receipt and idempotency behavior and needs separate qualification.

## Keep outcomes and measurements separate

A future report should distinguish:

- **Pass/fail gates:** whether forbidden behavior occurred.
- **Measurements:** latency, resource use, cost or other registered observations.
- **Missing evidence:** cases not run, unavailable candidates and unresolved outcomes.
- **Decision:** whether the tested configuration is admitted for a specific scope.

Null means unmeasured. “Not run” is neither a pass nor a zero-cost result. Invalid runs and exclusions should remain visible with their reasons.

The [illustrative acceptance record](../examples/acceptance-case.json) makes those distinctions explicit. It contains expected behavior and empty result fields, not a fabricated execution trace.

## What exists today

The working project contains planning and inventory/artifact validation tooling. Those checks establish properties of the foundation artifacts and collected evidence. They do not establish that the product cases above pass.

**Source basis:** the August 31 testing, recovery, memory and security specifications; the September 4 capability-specific roadmap; and the prepared shell experiment. The public IDs and mock delivery fixture are illustrative elaborations.

See the [workflow walkthrough](research-workflow-walkthrough.md), [shell decision study](desktop-shell-decision.md) and [source notes](source-notes.md).
