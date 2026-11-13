# A short guide to the project

Daniel Abrams defines the requirements, priorities and evaluation questions for Abrams Intelligence, with AI assistance for research, documentation and development. This public selection covers architecture research, published offline development tooling and summaries of partial local implementation. The platform is still in Phase 2 implementation and verification, not a released personal-assistant product.

Status reconciled November 13, 2026 (UTC). Start with the [progress ledger](progress.md) and [dated update history](../CHANGELOG.md) for the latest evidence and remaining gates.

## Three decisions to explore

| Situation | Design choice | Cost or unresolved question |
|---|---|---|
| A user changes their model provider | Keep project records, permissions and task identity in the core; replace the model adapter | Each provider needs a compatible adapter and explicit disclosure rules |
| A tool times out after an external action | Record the action and reconcile its outcome before retrying | Recovery needs receipts or an unresolved state; a timeout cannot establish failure |
| A memory tool produces a new inferred preference | Keep the original source and separate the proposed inference from active user settings | Evaluate provenance, conflicting facts, user correction and deletion |

These are design choices. The public architecture explorer illustrates them with mock components. Local Store recovery behavior has [scoped process-crash evidence](evidence/phase2/2026-11-09-recovery-checkpoint.md), and [later correctness results](evidence/phase2/2026-11-10-correctness-checkpoint.md) cover bounded browser/reconstruction and capacity cases. These do not establish every intended behavior, blanket browser safety or full product acceptance.

## Research example: choosing an agent runtime

A framework can offer useful checkpoints and workflow structure. That still leaves a practical question: after a crash, can the platform avoid repeating an external action? The [candidate research](candidate-research.md) connects that question to LangGraph's documented interruption behavior. The [evaluation method](evaluation-method.md) translates it into a proposed failure case with observable evidence.

That sequence, from requirement to source review to acceptance case, is the main work sample here. No runtime has won this comparison.

## Evidence map

| Work | What you can inspect here | Status |
|---|---|---|
| Architecture and tradeoffs | [Architecture](architecture.md), [design decisions](design-decisions.md) | Public summaries of established planning |
| Component selection research | [Candidate assessments and source revisions](candidate-research.md) | Source-reviewed proposals |
| Experiment design and measured limits | [Evaluation method](evaluation-method.md), [results](results-and-evidence.md), [result-record example](../examples/evaluation-record.json) | Method and example remain illustrative; dated dispatcher, selector and scoped recovery results are separate |
| Product interaction | [Architecture explorer](https://theonetruedaniel.github.io/architecture/) | Synthetic simulation |
| Core/client/SQLite implementation | [Progress](progress.md), [recovery checkpoint](evidence/phase2/2026-11-09-recovery-checkpoint.md), [roadmap](roadmap.md) | Partial local implementation; separately reviewed recovery/browser/capacity results, two open RC07 fault cases and other unfinished Phase 2 obligations |
| Startup-admission component | [November 13 test scope](evidence/phase2/2026-11-13-precontent-admission-unit.md) | 28/28 headless Rust fixture tests; no Tauri application, GUI/WebView or RC07 qualification |
| Offline developer dispatcher | [Runnable component](../tools/development-dispatcher/README.md), [published verification](../tools/development-dispatcher/VERIFICATION.md) | Published source and synthetic tests; no live-dispatch or whole-product acceptance |

The working project contains a 19-document baseline, traceability and foundation tooling. Those private artifacts are summarized rather than reproduced here. See [source notes](source-notes.md) for the limits of the public evidence.

## A deeper review path

1. Read the [worked research task](research-workflow-walkthrough.md) to see how a request becomes scope, source records, actions and an artifact.
2. Inspect the [ownership boundaries](architecture-deep-dive.md): which responsibilities remain with Abrams when a model or runtime changes?
3. Read the [desktop-shell decision study](desktop-shell-decision.md) for a concrete unresolved choice with preregistered measurement criteria.
4. Follow the [acceptance evidence map](acceptance-evidence-map.md) from a requirement to a failure fixture and the evidence needed to pass.

The examples explain the design; dated evidence summaries identify what was actually checked. No shell winner, production runtime/model pairing or full product acceptance is claimed.
