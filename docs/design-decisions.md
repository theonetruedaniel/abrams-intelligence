# Design decisions and tradeoffs

These are public summaries of the project's architecture decisions, not claims that the corresponding features have shipped.

| Decision | Why it matters | Tradeoff |
|---|---|---|
| Keep authoritative project data local | Preserves continuity across provider and runtime changes | Backup, migration and recovery become platform responsibilities |
| Put integrations behind adapters | Makes replacement and evaluation practical | Adapter contracts and compatibility checks require upkeep |
| Separate source data from derived memory | Allows indexes and summaries to be rebuilt | Retrieval must retain provenance back to source records |
| Keep permission checks outside model output | Prevents a generated instruction from granting authority | Requires explicit action types and deterministic checks |
| Track actions and reconcile uncertainty | Reduces accidental duplicate external operations | Recovery behavior must handle partial and ambiguous outcomes |
| Make route and budget changes visible | Gives users meaningful control over cost and data disclosure | Some tasks pause for a decision instead of silently continuing |
| Evaluate candidates before adopting them | Avoids treating a promising repository as a proven dependency | Progress depends on evidence from bounded evaluations |

## A concrete example

A research task may read a selected set of public pages and draft a local report. Sending that report to someone is a distinct action with its own destination and payload. A useful draft does not establish that delivery was authorized or completed.

If the user switches models during that task, project records and the task's permissions remain with Abrams. The new provider receives only the context allowed by the configured route and scope.

## Evaluation questions

Before admitting a component, the project asks whether it can report useful events, respect cancellation, recover after interruption, expose usage accurately and be replaced without losing authoritative state. Candidate discovery is the beginning of that evaluation, not an adoption decision.
