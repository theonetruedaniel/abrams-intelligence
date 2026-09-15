# A short guide to the project

Daniel Abrams defines the requirements, priorities and evaluation questions for Abrams Intelligence, with AI assistance for research, documentation and development. This public selection shows the architecture work behind a platform still in its foundation stage.

## Three decisions to explore

| Situation | Design choice | Cost or unresolved question |
|---|---|---|
| A user changes their model provider | Keep project records, permissions and task identity in the core; replace the model adapter | Each provider needs a compatible adapter and explicit disclosure rules |
| A tool times out after an external action | Record the action and reconcile its outcome before retrying | Recovery needs receipts or an unresolved state; a timeout cannot establish failure |
| A memory tool produces a new inferred preference | Keep the original source and separate the proposed inference from active user settings | Evaluate provenance, conflicting facts, user correction and deletion |

These are intended behaviors. The public architecture explorer illustrates them with mock components. The working project's inventory and artifact validators check foundations, not these product behaviors.

## Research example: choosing an agent runtime

A framework can offer useful checkpoints and workflow structure. That still leaves a practical question: after a crash, can the platform avoid repeating an external action? The [candidate research](candidate-research.md) connects that question to LangGraph's documented interruption behavior. The [evaluation method](evaluation-method.md) translates it into a proposed failure case with observable evidence.

That sequence, from requirement to source review to acceptance case, is the main work sample here. No runtime has won this comparison.

## Evidence map

| Work | What you can inspect here | Status |
|---|---|---|
| Architecture and tradeoffs | [Architecture](architecture.md), [design decisions](design-decisions.md) | Public summaries of established planning |
| Component selection research | [Candidate assessments and source revisions](candidate-research.md) | Source-reviewed proposals |
| Experiment design | [Evaluation method](evaluation-method.md), [result-record example](../examples/evaluation-record.json) | Proposed; no measurements |
| Product interaction | [Architecture explorer](https://daniel-abrams-portfolio-lab--danielmabrams.replit.app/architecture) | Synthetic simulation |
| Core implementation | [Roadmap](roadmap.md) | Not started |

The working project contains a 19-document baseline, traceability and foundation tooling. Those private artifacts are summarized rather than reproduced here. See [source notes](source-notes.md) for the limits of the public evidence.

## A deeper review path

1. Read the [worked research task](research-workflow-walkthrough.md) to see how a request becomes scope, source records, actions and an artifact.
2. Inspect the [ownership boundaries](architecture-deep-dive.md): which responsibilities remain with Abrams when a model or runtime changes?
3. Read the [desktop-shell decision study](desktop-shell-decision.md) for a concrete unresolved choice with preregistered measurement criteria.
4. Follow the [acceptance evidence map](acceptance-evidence-map.md) from a requirement to a failure fixture and the evidence needed to pass.

The new examples expose the reasoning in more detail while keeping planned behavior separate from measured results. No candidate winner or production implementation is implied.
