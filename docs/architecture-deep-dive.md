# Architecture deep dive: ownership and boundaries

**Status: intended architecture. Core application implementation has not started.**

The central design choice is to keep durable project state and action authority in Abrams while allowing models, runtimes and retrieval tools to change.

## Who owns what?

| Component | Intended responsibility | Boundary |
|---|---|---|
| Interface | Present projects, route selection, activity, approvals and Stop | Cannot bypass core authorization |
| Core | Task identity, policy, grants, budgets, effects and recovery coordination | Model output is a proposal, not authority |
| Canonical store | Source records, project state, artifacts and provenance | An external memory index is not the source of truth |
| Runtime adapter | Translate admitted task execution and events | Cannot own permissions, credentials or authoritative effect state |
| Model adapter/router | Select an admitted route and expose its disclosure/cost characteristics | No silent fallback across privacy, cost or authentication boundaries |
| Tool adapter | Implement an exact action contract and report outcomes | Its declared scope does not expand through prompt text |
| Derived retrieval | Index permitted source material for search | Must support rebuilding, correction and deletion |
| Credential broker | Mediate scoped access for admitted integrations | Secrets are not ordinary task context |

These are responsibility boundaries. The eventual process layout is a separate decision.

## Data lifecycle

1. Preserve an original source record with provenance.
2. Associate it with a project and permitted use.
3. Produce summaries or retrieval entries as derived material.
4. Link generated artifacts back to their supporting sources.
5. Keep corrections, conflicts and deletion behavior explicit.
6. Rebuild derived indexes from admitted source data when needed.

An inferred preference is a proposal. It should not silently override a user setting. A memory vendor can improve retrieval without becoming the owner of the user's identity or authoritative records.

## Action lifecycle

Before dispatch, the core must establish that the exact operation is within scope and available budget. It then needs an effect record sufficient to explain what was attempted and how the outcome was established.

After interruption, “no response” cannot be treated as “nothing happened.” Recovery must distinguish actions safe to retry from effects requiring reconciliation. Revocation prevents further authority use; it does not reverse an already completed operation.

These rules motivate the [failure tests](acceptance-evidence-map.md). The implementation still has to prove them under concurrency, crashes and delayed events.

## Resource and cost control

Local-first does not require every model to run locally. A useful route may be local or hosted if its resource, data and cost boundaries are explicit.

The roadmap starts with a smaller relational/full-text retrieval baseline. Larger vector/graph workloads require their own resource and quality evidence. Optional specialists should be admitted for demonstrated value rather than run permanently by default.

The design calls for budget reservation, cancellation and usage accounting in core-owned controls. Candidate-reported usage still needs validation; a provider's availability does not make an unapproved paid route acceptable.

## Why adapters do not solve everything

Adapters reduce coupling, but they create work: translating events, reconciling errors, preserving cancellation semantics, handling version changes and testing removal. A common interface does not establish equivalent behavior.

Runtime conformance and model quality therefore have separate evaluations. The intended production pairing also needs evidence for its particular tools, authentication, events and recovery. See the [planned comparison method](evaluation-method.md).

## Delivery sequence

The amended roadmap moves through host readiness, controlled shell/runtime experiments, core controls and storage, then useful chat/projects/files and admitted routes. Mission packages and additional interfaces build on the capabilities they actually require.

Employment preparation is the first major mission package. Research, coding, planning and documents remain broader product goals. Optional graph, voice or companion work should not hold up an otherwise qualified smaller capability.

**Source basis:** August 31 master architecture and subsystem specifications, plus the September 4 delivery amendment. This is a public explanation of design intent, not an implementation diagram or deployment inventory.

Return to the [overview](../README.md) or follow the [worked research task](research-workflow-walkthrough.md).
