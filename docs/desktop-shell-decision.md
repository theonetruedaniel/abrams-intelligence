# Decision study: desktop shell or local web app?

**Status: proposed comparison. ADR-0019 remains POC Required; ADR-0020 remains Proposed. Neither candidate has been measured in this experiment.**

## The question

Does a Tauri desktop shell offer enough native lifecycle, packaging and accessibility value to justify its privileged bridge and operating cost compared with a small local web/PWA client?

This is a narrower decision than choosing the entire platform. A shell preference should not automatically choose a production core, agent framework, model provider or database.

## Compare equivalent implementations

| Option | Proposed shape | Value to test | Cost to test |
|---|---|---|---|
| Tauri candidate | Tauri 2 with React/TypeScript and a narrow command/event bridge | Native window/tray lifecycle and packaging | Native permissions, build tooling, WebView lifecycle and maintenance |
| Local web/PWA control | A browser client on loopback using the same mock core | Whether a simpler client is sufficient | Browser process overhead, lifecycle limits and packaging differences |

Both candidates would use identical synthetic fixtures and the same mock protocol. The mock core is a deterministic test double: it produces controlled events without a real AI model or external account.

The planned messages are health, start-mock-run, stream-event, cancel, global-stop and reconnect. The renderer would receive no arbitrary shell, filesystem, credential or unrestricted-network capability.

## Why isolate this decision?

A polished screen can hide unreliable recovery. A small renderer can also appear inexpensive if its browser helpers or service processes are omitted from memory totals. The proposed experiment measures the whole owned process group and exercises failure paths.

Choosing Tauri would not prove that a particular production core arrangement is best. The separate BO-02 comparison uses runtime, communication, packaging and recovery evidence before the production core decision.

## Planned acceptance criteria

These are selected thresholds from the September 4 preregistration, not results.

| Area | Planned criterion |
|---|---|
| Typed contract | All fixture cases pass; zero unauthorized native capability succeeds |
| Event integrity | No duplicate visible events; missing-event state appears within 1 second |
| Cancel/Stop | Local acknowledgement p95 at most 500 ms; mock terminal state p95 at most 1 second |
| Reconnect | Disconnect visible within 1 second; reconstruction within 2 seconds after endpoint return |
| Launch | Cold-process ready p95 at most 5 seconds; warm ready p95 at most 2 seconds |
| Memory | Aggregate working set and aggregate private commit each at most 500,000,000 bytes |
| Host headroom | Available physical memory at least 1.5 GiB; committed memory at most 18 GiB |
| Accessibility | No blocking failures in keyboard, focus, screen-reader smoke, 200% zoom and relevant display preference checks |
| Teardown | No unexplained residual owned process or listener |

Here p95 is the observation at rank ceil(0.95 × N) in the sorted sample. It describes the slower end of the observed distribution, not a guarantee for every future run.

## Make the comparison reproducible

Before running, freeze tool versions, dependencies, fixture rate, workload, power/display settings, background-process allowance, measurement intervals and candidate order.

The planned launch sample is 30 cold-process and 30 warm launches per candidate. Each latency flow needs at least 100 individual events across at least 10 sessions. Report failures, timeouts and session variability alongside timings. A cold-process launch does not mean the operating system's disk cache was cleared.

Keep process-group measurements separate from the host baseline. Count browser/service workers and helpers; do not subtract background pressure to make a candidate appear to pass. If the host cannot meet safe headroom, stop and record the limitation.

## How a decision would be made

- **Adopt:** deterministic gates pass and native value justifies the cost within the registered resource envelope.
- **Conditional adopt:** gates pass but a named, bounded lifecycle, installer or resource condition remains with an owner and expiry.
- **Reject:** a boundary failure occurs, reliable reconstruction is missing, or native value does not justify the complexity.

The user owns adoption. No score average can compensate for an unauthorized action. The result should include exact configuration, failures, limitations, cleanup evidence and the reason for the choice.

## Current evidence and unresolved work

The working project has a prepared experiment and dated host-readiness observations. Controlled resource admission, exact dependency intake and execution remain open. No launch timing, memory result or shell winner is claimed here.

**Source basis:** working preregistration `phase-2-tauri-walking-skeleton-proposal.md`, September 4 roadmap and ADR status index. This public summary omits host inventories and operational details.

See the [evaluation method](evaluation-method.md), [acceptance map](acceptance-evidence-map.md) and [roadmap](roadmap.md).
