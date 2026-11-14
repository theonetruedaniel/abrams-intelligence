# Repository catalog

November 9 source-review follow-through: 166 of 166 changed or previously unpinned GitHub sources assessed at exact revisions. Review outcomes: 2 provenance-blocked, 164 source-reviewed. Assessments include source-specific findings and primary-source citations. Existing tests, provenance blocks and adoption decisions remain separate; no candidate was installed or executed.

November 9, 2026 currentness audit: all 299 registered IDs reconciled and all 196 GitHub remote HEADs resolved. 30 match a recorded revision; 115 differ from recorded revisions; 51 have no reviewed revision recorded. Observed HEADs and review requirements are recorded separately in the machine-readable catalog. Five model repositories and Mercury 3 documentation were also checked. The initial inventory identified 166 source-review requirements; see the follow-through assessment above. Historical tests and adoption status remain preserved.

Model/route observations on November 9: Qwen3.8 has a newer upstream revision; Laya current metadata differs from the historical experiment scope, whose checkpoint and results are preserved. Mercury 3 remains documented, without an API availability test. The official Kimi model list marks hosted kimi-k2.5 deprecated; K3 stays a separate intake-required candidate. Moonshot documentation redirects to platform.kimi.ai. The XDA context-placement source could not be accessed; its supporting Anthropic sources resolve. No new token-saving measurement is claimed.

Updated November 14, 2026. This is a deduplicated map of **206 GitHub repositories** actually recorded in Abrams discovery and research, plus five related model repositories and one hosted model route. The underlying register contains **309 entries** (150 frozen catalog records plus 159 later proposals). Routes, configurations, controls and platform prerequisites are not all separate repositories.

[Interactive explorer](https://theonetruedaniel.github.io/architecture/#repository-catalog) · [Machine-readable catalog](repository-catalog.json) · [Full register](candidate-research.md) · [Progress in plan order](progress.md)

## Browse by role

Start with the capability you need. These projects span different roles; they are not all competitors in one benchmark. The [evaluation method](evaluation-method.md) defines comparisons within each relevant role and separates using upstream, reusing eligible components, implementing independently and deferring a capability. See [recorded results](results-and-evidence.md) for measured findings; catalog membership alone does not establish a completed comparison.

- [Agent runtimes](#agent-runtimes) · [Decision components](#decision-components)
- [Devices and access](#devices-and-access) · [Interface and media](#interface-and-media)
- [Memory and research](#memory-and-research) · [Models and inference](#models-and-inference)
- [Safety and recovery](#safety-and-recovery) · [Skills and development](#skills-and-development)
- [Tools and browsing](#tools-and-browsing) · [Related model repositories and hosted routes](#related-model-repositories-and-hosted-routes)

## Status and coverage

- **Collected reference:** recorded source or idea; no scheduled execution is implied.
- **Shortlisted / planned:** a named intake or comparison exists. Deferred, blocked and trigger-only scopes stay visible. This does not imply eligibility, installation or a completed run.
- **Tested / not admitted:** measurements exist for the exact stated scope. Laya failed its development-selector gates.
- **Selected advisory content:** one pinned design skill is selected; its repository is not adopted as a runtime.
- **Adopted integration:** an exact accepted product integration. None is claimed in this catalog.

Counts: 179 shortlisted/planned, 25 collected references, 1 tested development selector, 1 selected advisory-content source; **zero adopted product integrations**.

Coverage is the union of GitHub identities explicitly linked in the September 4 frozen catalog, dated intake overlays through November 8, and the collected research references. Six September 22 Jev references remain research-only without registration records; Foreman is now registered under Q-56. Documentation-only technologies, model/API routes and local controls remain in the full register. Transitive dependency trees and every project in an upstream directory are not asserted to be evaluated candidates.

Free Claude Code, LiteRT-LM, Open Generative AI, DeepSeek Harness, MCPToon, Hono, OpenWhispr, PocketBase, Trail-Code and OpenWorker were checked on October 17. AgentBridge, MinerU, OpenRig, Foreman, AX, the ten post projects and Letta's current-source pointer were checked on October 16; LangGraph was already present. OpenMausBot and SkillSpector were checked on October 15. AirLLM, PentAGI, OpenGrok, Camofox Browser and LibreChat were checked on October 13. REA was checked on October 12. Invisible Playwright was checked on October 10. Magpie, iFixAi, Orca, fframes, PageIndex, Hindsight, AI Employees, SkillOpt and System Prompts Leaks links were checked on October 9. Existing repository links were checked on October 7 against public GitHub metadata; five redirects were resolved and historical names retained. Link checks establish availability and identity, not an audit of today's code. Historical intake revisions do not become current-build admission pins.

## Architecture map

| Layer | Role in Abrams |
| --- | --- |
| Agent runtimes | Replaceable workers or separately scoped assistant studies; Core owns grants, routes and effects. |
| Decision components | Advisory typed decisions; deterministic controls retain authority. |
| Devices and access | Device/platform-specific qualification; one target cannot qualify another. |
| Interface and media | Replaceable presentation and media-job components; accessibility and artifact controls remain required. |
| Memory and research | Source-supported research and rebuildable projections, separate from canonical records. |
| Models and inference | Separate engine, model-quality and production-pairing comparisons. |
| Safety and recovery | Independent evaluation, security and restore controls; optional tools do not replace required checks. |
| Skills and development | Reviewed advisory content, reusable methods and bounded tooling. |
| Tools and browsing | Capability-scoped adapters; no inherited tool or account authority. |

## Agent runtimes

<a id="open-jarvis-openjarvis"></a>
### OpenJarvis

[open-jarvis/OpenJarvis](https://github.com/open-jarvis/OpenJarvis) · **Shortlisted / planned**

- **Purpose:** Composable local-first personal-AI framework with selectable inference engines, agent/tool presets, retrieval/memory, trace-driven learning and accuracy/energy/latency/cost evaluation; optional desktop, cloud and scheduled integrations.
- **Architecture fit:** E/H/I/J; separately gated C / Q-150: General personal-assistant framework versus existing Core/runtime adapters and eligible agent frameworks; compare engine/provider routing under BO-05, retrieval/trace-learning components and bake-off instrumentation by role. Whole framework, selected components and original adapters require separate evidence; no change to frozen initial runtime set or production Core decision.
- **Current status:** Source researched; planned and untested. Apache-2.0 root, Alpha metadata, Python>=3.10,<3.14; source GUI Node>=22.22/npm11.19+, optional Rust/native/model stacks. Native Windows installers are documented, not Abrams-qualified. Cloud routing, trace privacy, execution backend parity, auth and Stop/budget behavior remain gates; shell/code execution integration deferred pending those controls.
- **Next gate:** Compare upstream exact preset/framework, eligible engine/router/retrieval/trace/evaluation components, minimal original Core adapters and defer. Pin source/release/model/dependencies/rights and exact Windows/WSL/macOS engine pairing; qualify installer PATH/service/background-model effects and clean removal. Enforce Core-owned routes/manual overrides, recipient consent, canonical state/trace retention/deletion/export, credential/OAuth scopes, authenticated API/WS/tools, fail-closed capability/action grants and real sandboxing. Prove Python/Rust shell environment/timeout/exit-status parity, all-child/provider Stop and ambiguous-effect recovery, aggregate pre-reserved token/time/USD budgets, protected learning/holdouts and promotion approval. Report energy/FLOPs/cost as measured, estimated or unavailable without conflating them; preserve USD25 monthly metered cap.
- **Evidence:** Pinned README/LICENSE/pyproject/frontend manifests, Windows/Bash installer and telemetry documentation, representative API/tool execution and engine/router/trace/learning/evaluation source, with two independent bounded source reviews. No install/build, models, providers, credentials/OAuth, schedules, personal-data access or candidate benchmark.
- **Registered records:** `assistant.openjarvis`.
- **Recorded revision:** `6201505cd3425079459589f54764667b4758ce48`.
- **Review date:** 2026-11-11.

- Apache-2.0 framework source is separate from model, skill and native dependency rights. Python is capped below3.14 for Windows wheel compatibility; MLX optional dependencies are macOS-specific. The source frontend requires Node>=22.22/npm11.19+. A source pin is not a packaged-desktop/model/backend admission pin.
- Installers can install Python/git/uv/Ollama, change PATH/config, start Ollama, pull a starter model and continue Rust/larger-model work in the background; native Windows service setup is a separate scheduled-task/elevation scope. No installer, model or background work was started for this review.
- The tool-free chat-simple preset differs from coding, research, scheduled monitoring and OAuth-connected digest presets. Local-first is a design goal; actual recipient, tool and recurring-effect authority must be qualified for each chosen configuration.
- MultiEngine rejects an unknown non-cloud model rather than silently treating it as cloud. The broader engine discovery path can fall back across engine classes when an exact key is omitted; explicit engine selection does not substitute on failure. Learned query-class routing is not calibrated capability or privacy enforcement.
- Full response text, conversation messages and tool arguments/results can be retained in local trace storage; trace/telemetry collection and optional PostHog analytics are different controls. Analytics is opt-in, while local trace/telemetry defaults need separate minimization/retention review. Local storage is not proof of no cloud or model egress.
- Learning can write evolved configuration before optional evaluation and can accept when no evaluation callback exists; learning and skill auto-optimization defaults are disabled. Protect holdouts and require independent promotion. Optional teacher/session budget defaults do not replace Abrams's shared USD25 monthly cap.
- API authentication depends on configured keys; non-loopback binding has a separate safety check and WebSocket paths need their own checker. Tool confirmation fails closed without an interactive callback, but capability enforcement requires an installed policy. These controls do not establish a complete Core grant boundary.
- Shell guarantees are backend-dependent: the Python path prepares restricted environment/timeout, while the inspected Rust bridge forwards command/cwd to a shell path without equivalent environment clearing or timeout and may lose failure-status meaning in the Python wrapper. Shell/code integration remains deferred until exact backend parity and host containment are proven.
- Running Python-thread tools cannot necessarily be cancelled; queued-work shutdown and post-tick positive maxcost/maxtoken checks do not prove hard all-child Stop or pre-reserved aggregate spend. Upstream efficiency/accuracy results and framework telemetry must remain separate from Abrams measurements and exact device/backend resource qualification.
- Unknown model prices can be reported as zero; missing energy monitors can produce zero totals. Abrams must preserve unavailable versus measured zero, estimated versus billed cost, monitor method/rail basis and quality-equivalent task boundaries. CPU RAPL is Linux-specific; native Windows and GPU monitoring require separate qualification.

Sources: [source 1](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/README.md); [source 2](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/LICENSE); [source 3](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/pyproject.toml); [source 4](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/frontend/package.json); [source 5](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/deploy/windows/install.ps1); [source 6](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/docs/getting-started/install.md); [source 7](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/docs/telemetry.md); [source 8](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/shell_exec.py#L137); [source 9](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/shell_exec.py#L213); [source 10](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/rust/crates/openjarvis-python/src/tools.rs#L116); [source 11](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/rust/crates/openjarvis-tools/src/builtin/shell.rs#L39); [source 12](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/_stubs.py#L31); [source 13](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/_stubs.py#L92); [source 14](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/_stubs.py#L434); [source 15](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/agent_manager_routes.py#L1696); [source 16](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/agents/manager.py#L288); [source 17](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/app.py#L321); [source 18](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/_stubs.py#L220); [source 19](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/_stubs.py#L280); [source 20](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/_stubs.py#L394); [source 21](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/docs/user-guide/security.md#L63); [source 22](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/docs/user-guide/security.md#L124); [source 23](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/app.py#L201); [source 24](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/auth_middleware.py#L37); [source 25](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/auth_middleware.py#L104); [source 26](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/auth_middleware.py#L160); [source 27](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/app.py#L500); [source 28](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/cloud_router.py#L1); [source 29](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/cloud_router.py#L367); [source 30](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/routes.py#L945); [source 31](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/server/app.py#L36); [source 32](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/agents/executor.py#L807); [source 33](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/code_interpreter.py#L1); [source 34](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/code_interpreter.py#L93); [source 35](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/tools/code_interpreter.py#L185); [source 36](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/engine/multi.py#L43); [source 37](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/engine/_discovery.py#L201); [source 38](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/engine/_discovery.py#L221); [source 39](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/learning/routing/router.py#L55); [source 40](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/learning/routing/learned_router.py#L43); [source 41](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/learning/routing/learned_router.py#L92); [source 42](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/learning/routing/learned_router.py#L221); [source 43](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/core/config.py#L1191); [source 44](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/traces/collector.py#L81); [source 45](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/traces/collector.py#L150); [source 46](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/traces/collector.py#L184); [source 47](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/traces/store.py#L17); [source 48](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/traces/store.py#L67); [source 49](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/core/config.py#L954); [source 50](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/memory/extractor.py#L55); [source 51](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/core/config.py#L797); [source 52](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/core/config.py#L833); [source 53](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/learning/learning_orchestrator.py#L149); [source 54](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/learning/training/data.py#L52); [source 55](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/engine/cloud.py#L274); [source 56](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/evals/core/pricing.py#L8); [source 57](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/core/config.py#L839); [source 58](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/telemetry/energy_rapl.py#L19); [source 59](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/telemetry/energy_rapl.py#L92); [source 60](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/telemetry/energy_nvidia.py#L77); [source 61](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/bench/energy.py#L111); [source 62](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/bench/energy.py#L143); [source 63](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/bench/latency.py#L17); [source 64](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/src/openjarvis/bench/energy.py#L17); [source 65](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/docs/showcase/cost-savings.md#L10); [source 66](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/README.md#L35); [source 67](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/docs/getting-started/windows-native.md#L1); [source 68](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/docs/getting-started/windows-native.md#L16); [source 69](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/docs/getting-started/windows-native.md#L74); [source 70](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/pyproject.toml#L14); [source 71](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/pyproject.toml#L55); [source 72](https://github.com/open-jarvis/OpenJarvis/blob/6201505cd3425079459589f54764667b4758ce48/rust/crates/openjarvis-tools/src/executor.rs#L92).


<a id="bearisbug-imbo"></a>
### Imbo

[Bearisbug/imbo](https://github.com/Bearisbug/imbo) · **Shortlisted / planned**

- **Purpose:** Cross-tool and cross-machine messaging for coding-agent sessions, with background delivery, contacts/groups, attachments and optional phone/web access.
- **Architecture fit:** H/I/J / Q-143: Bounded agent handoffs, cross-review and remote coordination for Abrams development/bake-off work; compare AgentBridge, OpenRig, PuppyOne handoffs, manual relay and minimal Core review queue. Messaging is not a complete assistant, sandbox or grant to execute requests.
- **Current status:** Source researched; planned and untested. Apache-2.0 Rust0.2.26/MSRV1.90, macOS/Linux only. Direct automatic inbound execution deferred: MCP instructions tell agents to follow sender requests without local confirmation and exempt replies from outbound checks. Setup expands tool approvals/hooks; messages may reopen sessions. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain deferred automatic inbound execution; replace trust-on-message instructions with sender/task/effect grants and explicit outbound replies, isolate attachments/wake-ups, qualify setup mutations, credential/retention scope, budgets, replay and all-session Stop.
- **Evidence:** Pinned README/Cargo/license and representative client/server delivery/auth/setup source with independent read-only review; no install, daemon/hooks/config changes, accounts/contacts/messages, attachments, provider calls or benchmark. Dates: 2026-11-08.
- **Registered records:** `coordination.imbo`.
- **Recorded revision:** `f91d019f2732e1aa2b46b9d4160474c83bfe8334`.

- **November 9 source assessment:** `source-reviewed-bounded` at `76c5b5f768bec60b5bf250bff0b84c3a72b236df`.
  - Imbo advanced to Rust0.2.26/MSRV1.90, Apache2.0, with macOS/Linux platform scope. Server authentication and hosted-account/billing controls do not authorize local agent execution.
  - Critical prior boundary remains: MCP instructions tell agents to follow sender requests without local user confirmation and exempt Imbo replies from outbound checks. Reading a message can mark it delivered and download attachments.
  - Sender identity/messages are external input, not Core grants. Setup hooks/approval expansion and session wake-up must remain separately constrained; direct automatic inbound execution stays deferred.
- **Assessment sources:** [source1](https://github.com/Bearisbug/imbo/blob/76c5b5f768bec60b5bf250bff0b84c3a72b236df/LICENSE#L1); [source2](https://github.com/Bearisbug/imbo/blob/76c5b5f768bec60b5bf250bff0b84c3a72b236df/Cargo.toml#L1); [source3](https://github.com/Bearisbug/imbo/blob/76c5b5f768bec60b5bf250bff0b84c3a72b236df/README.md#L14); [source4](https://github.com/Bearisbug/imbo/blob/76c5b5f768bec60b5bf250bff0b84c3a72b236df/imbo/src/mcp.rs#L24); [source5](https://github.com/Bearisbug/imbo/blob/76c5b5f768bec60b5bf250bff0b84c3a72b236df/imbo/src/mcp.rs#L110); [source6](https://github.com/Bearisbug/imbo/blob/76c5b5f768bec60b5bf250bff0b84c3a72b236df/imbo-server/src/auth.rs#L100); [source7](https://github.com/Bearisbug/imbo/blob/76c5b5f768bec60b5bf250bff0b84c3a72b236df/imbo/src/cli/setup.rs#L1). Representative source screening; no execution or admission.

<a id="cloudflare-computer"></a>
### Cloudflare Computer

[cloudflare/computer](https://github.com/cloudflare/computer) · **Shortlisted / planned**

- **Purpose:** Durable Object SQLite-backed virtual filesystem and pluggable execution workspace with isolated JavaScript, simulated shell and Linux container backends.
- **Architecture fit:** E/H/I/J / Q-139: Bounded cloud workers, durable scratch files, code execution and artifact creation for the broad personal assistant and bake-off integration; compare Core minimal workers, Substrate, SPACE and qualified sandbox controls. Separate filesystem-only, JavaScript, shell and container variants.
- **Current status:** Source researched; planned and untested. MIT @cloudflare/computer0.9.0 at a main source pin; release availability unverified. Upstream marks core filesystem/JavaScript stable but shell/container/sync/recovery features experimental. Cloud SQLite authority stays scoped to the workspace, not Abrams canonical state.
- **Next gate:** Compare optional remote workspace backend against local controls; pin runtime/projection mode and cloud account, qualify RPC auth/data recipients, durableVFS versus shim visibility/replay, independent effect outcomes and kill/dispose recovery, storage/compute/network cost.
- **Evidence:** Pinned README/license/package/status and representative workspace/runtime/egress/backend source with independent read-only review; no install, deployment, Cloudflare resources/accounts/credentials, model/provider calls, private-data upload or benchmark. Dates: 2026-11-04.
- **Registered records:** `infra.cloudflare-computer`.
- **Recorded revision:** `b995d86503eab22793ba1feb07c3c67818e6f6b9`.

- **November 9 source assessment:** `source-screened-not-tested` at `9f70253dad2faef23739633e6760d1ce81f9f7dd`.
  - Cloudflare Computer keeps authoritativeSQLite VFS in DurableObject and projects execution to container or isolate backends; adopting this backend cannot move Abrams canonical authority by implication.
  - RPC RunnerLike exposes exec/events/get/kill/dispose, but interface shape alone is not observed process retirement or effect cancellation.
  - Sync adapter comments explicitly say afterApply and beforeFetch hook errors log without failing committed push/fetch; a successful synchronization response can differ from shim-settled disk visibility.
- **Assessment sources:** [source1](https://github.com/cloudflare/computer/blob/9f70253dad2faef23739633e6760d1ce81f9f7dd/README.md#L3); [source2](https://github.com/cloudflare/computer/blob/9f70253dad2faef23739633e6760d1ce81f9f7dd/packages/rpc/src/server.ts#L31); [source3](https://github.com/cloudflare/computer/blob/9f70253dad2faef23739633e6760d1ce81f9f7dd/packages/rpc/src/server.ts#L60); [source4](https://github.com/cloudflare/computer/blob/9f70253dad2faef23739633e6760d1ce81f9f7dd/LICENSE#L1). Representative source screening; no execution or admission.

<a id="jetbrains-thinkrail"></a>
### ThinkRail

[JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) · **Shortlisted / planned**

- **Purpose:** Agentic coding IDE around pi, with worktree workspaces, living specs, concurrent chats, multi-provider/custom model servers and desktop/browser workbench.
- **Architecture fit:** E/H/I/J / Q-136: Development and bake-off integration workspace plus general-assistant interaction/component research versus Core/current tools, Meldwork, Orkas and existing chatbot UI study; coding scope does not establish a complete personal assistant.
- **Current status:** Source researched; planned and untested. Apache-2.0; Bun1.4.4/pi1.5.0 with Windows source/artifact paths. Worktrees are not sandboxes. Keyed human runs retain basic/error telemetry despite no-analytics; saved-model fallback can select another available model without a separate warning.
- **Next gate:** Preserve exactWindows/package/provider, commands/MCP/extensions/GitHub grants and worktreeisolation gates; explicitly qualify mandatory basic/erroranalytics versusadditionaloptout, authcommands/secret recipients, savedmodel fallbackvisibility, all-childStop/recovery and fullcost/removal.
- **Evidence:** Pinned README/license/package and representative source with independent read-only review; no installation, candidate execution, credentials/provider calls, benchmark, downloads of models/firmware or host changes. Dates: 2026-11-03.
- **Registered records:** `workspace.thinkrail`.
- **Recorded revision:** `c10f8808cee693e4abffeeb1844a132ed0a91cc5`.

- **November 9 source assessment:** `reviewed` at `1aba63011e81a5a05d705aacd6965f17a34dd576`.
  - Root still Bun1.4.4/pi1.5.0; README now describes WindowsCLI/setup/DLL signing and retained basic/error analytics even when no-analytics disables only additionalsharing. Exactdownloadsignatures not verified.
  - Current newchatmodel resolver falls from saveddefault to piDefault then preferredavailablemodel without warning in this function; explicitrequestedmodel takes precedence. Core manualroute/fallbackvisibility must remain independent.
  - Providerauth description differentiatescentral/OAuth/APIkey/env/models.jsoncommand sources; localIDE/worktrees do not establish isolation or localprovider.
- **Assessment sources:** [source1](https://github.com/JetBrains/thinkrail/blob/1aba63011e81a5a05d705aacd6965f17a34dd576/package.json#L4); [source2](https://github.com/JetBrains/thinkrail/blob/1aba63011e81a5a05d705aacd6965f17a34dd576/README.md#L225); [source3](https://github.com/JetBrains/thinkrail/blob/1aba63011e81a5a05d705aacd6965f17a34dd576/packages/server/src/host/newChatModel.ts#L36); [source4](https://github.com/JetBrains/thinkrail/blob/1aba63011e81a5a05d705aacd6965f17a34dd576/packages/server/src/agent/providerAuth.ts#L32). Representative source screening; no execution or admission.

<a id="orkas-ai-orkas"></a>
### Orkas

[Orkas-AI/Orkas](https://github.com/Orkas-AI/Orkas) · **Shortlisted / planned**

- **Purpose:** Electron multi-agent desktop workspace with a coordinating Commander, specialist agents, project context/memory, to-dos, scheduled automations, connectors and external CLI agents.
- **Architecture fit:** E/H/I/J / Q-131: General-assistant research, writing, documents/media/projects and bake-off coordination versus single-agent/Core workflows, Meldwork Q-128, Hermes, OpenMuse and Ruflo; whole-app adaptation and components separately compared.
- **Current status:** Source researched; planned and untested. MIT root signal; Windows/macOS packaging and cloud/local route claims need exact artifact/pairing qualification. Local-first state does not prove offline inference, bounded autonomy, enforced permissions or accurate outcomes.
- **Next gate:** Compare workspace/components/minimal Core and defer; qualify source versus packaged credentials and services, scheduler/auto-advance grants, all external agents/tools/voice recipients, effect replay, Windows lifecycle and all-task Stop/aggregate cost. No local-only claim from app label.
- **Evidence:** Pinned README/package/license and representative source screening with independent review; no install/build/postinstall, model download/provider/CLI/connector calls, schedules or benchmark. Dates: 2026-11-02.
- **Registered records:** `workspace.orkas`.
- **Recorded revision:** `dce78adb2a2ffdfbf9159cc89352e4335940bc64`.

- **November 9 source assessment:** `source-screened-not-tested` at `a3d9747284fca03f7ef92f336b8d901ba0ce199b`.
  - Orkas current source requires Node 22.12+ and supports Windows/macOS plus glibcLinux source; packaged cloud sync/publishing are explicitly absent in open source build.
  - Voice source configuration can send audio to Orkas paid credits despite broad local-first descriptions; exact service/model/CLI routes require separate recipient grants.
  - Standalone core-agent persists OAuth/API credentials in JSON, while host-managed encrypted envelopes are recognized and not overwritten; choose actual embedding path before security conclusions.
- **Assessment sources:** [source1](https://github.com/Orkas-AI/Orkas/blob/a3d9747284fca03f7ef92f336b8d901ba0ce199b/README.md#L5); [source2](https://github.com/Orkas-AI/Orkas/blob/a3d9747284fca03f7ef92f336b8d901ba0ce199b/README.md#L91); [source3](https://github.com/Orkas-AI/Orkas/blob/a3d9747284fca03f7ef92f336b8d901ba0ce199b/README.md#L169); [source4](https://github.com/Orkas-AI/Orkas/blob/a3d9747284fca03f7ef92f336b8d901ba0ce199b/src/core-agent/src/auth/store.ts#L1); [source5](https://github.com/Orkas-AI/Orkas/blob/a3d9747284fca03f7ef92f336b8d901ba0ce199b/src/core-agent/src/auth/store.ts#L67). Representative source screening; no execution or admission.

<a id="ryder-sun-meldwork"></a>
### Meldwork

[Ryder-Sun/Meldwork](https://github.com/Ryder-Sun/Meldwork) · **Shortlisted / planned**

- **Purpose:** Local-first Electron workspace coordinating existing agent CLIs through direct chats, concurrent responses and multi-agent discussion with run history and human decisions.
- **Architecture fit:** E/H/I/J / Q-128: General-assistant research/writing/projects and bake-off coordination versus single-agent/Core workflows, Hermes/Ruflo and existing workspace studies; product adaptation, component reuse and independent implementation separate.
- **Current status:** Current source reviewed; planned and untested. Apache2signal;1.0.9preview targetsAppleSiliconmacOS, ad-hocsigned/notnotarized. NativeCLI/provider permissions and exactStop remain unqualified.
- **Next gate:** Preserve platform/IPC/attachment/conflict/cost/export gates; requalify1.0.9exactCLI/Magpie stop-reason behavior and all-childStop/recovery, credentials/egress and reviewedworkspacerights before evaluation; Windows portability unresolved.
- **Evidence:** Pinned README/package/license/commercial/security metadata and representative source screening with independent review; no install, CLI/provider invocation, workspace attachment import, build or benchmark. Dates: 2026-10-31.
- **Registered records:** `workspace.meldwork`.
- **Recorded revision:** `ef405bb7219c9d929d86d26893da37c6741e8df7`.

- **November 9 source assessment:** `reviewed` at `1ddf3fbdd76ef6e6b3baddfa6a460a72570aa7fd`.
  - README now advertises1.0.9prerelease forAppleSiliconmacOS, replacing stale1.0.8text; previewad-hocsigned/notnotarized and market-validationMVPstate remain.
  - Agents use own nativeCLIcredentials viaElectronmain; localcollaboration logs do not establish localmodels or containment. Frontend recipientrouting parses agentnames/negation; it is conversationrouting rather than writeauthorization.
  - README documents Magpie stop→tool_callsnullcompatibility issue and isolatedhotfix in upstreamtest; this reinforces exactCLI/version/Stop qualification instead of treating peerreview as independent verification.
- **Assessment sources:** [source1](https://github.com/Ryder-Sun/Meldwork/blob/1ddf3fbdd76ef6e6b3baddfa6a460a72570aa7fd/README.md#L18); [source2](https://github.com/Ryder-Sun/Meldwork/blob/1ddf3fbdd76ef6e6b3baddfa6a460a72570aa7fd/README.md#L124); [source3](https://github.com/Ryder-Sun/Meldwork/blob/1ddf3fbdd76ef6e6b3baddfa6a460a72570aa7fd/frontend/src/agent-routing.js#L74); [source4](https://github.com/Ryder-Sun/Meldwork/blob/1ddf3fbdd76ef6e6b3baddfa6a460a72570aa7fd/SECURITY.md#L3). Representative source screening; no execution or admission.

<a id="ruvnet-ruflo"></a>
### Ruflo

[ruvnet/ruflo](https://github.com/ruvnet/ruflo) · **Shortlisted / planned**

- **Purpose:** Agent meta-harness with swarm/workflow coordination, memory/learning, model-routing integrations, MCP tools and client-specific hooks/plugins.
- **Architecture fit:** E/H/I/J / Q-117: General-assistant worker coordination and development/bake-off workflows versus Core queues/direct adapters, OpenRig, Paperclip and Reason Network; exact cloud/local route and memory quality tests separate.
- **Current status:** Source researched; planned and untested. MIT root signal; repository retains Claude Flow package identities. Advertised orchestration, learning and governance do not establish exact package/client enforcement, useful-task gains or production admission. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Pin the actual V3 package graph and host; qualify MCP tool policy, model-download recipients/cache, hook/mod authority, credentials, aggregate costs and all-worker Stop before synthetic integration.
- **Evidence:** Pinned README, root package/license/security and selected host/audit/meta-harness docs with independent representative source screening; no install, init/hooks/mods, agents, model calls or benchmark. Dates: 2026-10-24.
- **Registered records:** `orchestration.ruflo`.
- **Recorded revision:** `d36d72a9ff6c8fa4fa728f44ff535f2c0b5bd7cc`.

- **November 9 source assessment:** `source-reviewed-bounded` at `29be054e85636b61788f3955d0bd4d0bcbcfe3f6`.
  - Root package remains claude-flow, now version3.74.1, with Node>=20 and numerous optional native/vector packages; source identity continuity is explicit rather than a separate Ruflo-only runtime.
  - CLI entry redirects to the V3 CLI. Its MCP path is automatically selected for piped stdin; the all-tools advertisement default and environment tool selector require explicit Core scoping.
  - CLI comments identify cold-cache ONNX model downloads from heavy imports; this is a resource/egress consideration, not a measured Abrams startup result. MIT root notice remains separate from dependencies and installed mods.
- **Assessment sources:** [source1](https://github.com/ruvnet/ruflo/blob/29be054e85636b61788f3955d0bd4d0bcbcfe3f6/package.json#L1); [source2](https://github.com/ruvnet/ruflo/blob/29be054e85636b61788f3955d0bd4d0bcbcfe3f6/package.json#L78); [source3](https://github.com/ruvnet/ruflo/blob/29be054e85636b61788f3955d0bd4d0bcbcfe3f6/LICENSE#L1); [source4](https://github.com/ruvnet/ruflo/blob/29be054e85636b61788f3955d0bd4d0bcbcfe3f6/bin/cli.js#L1); [source5](https://github.com/ruvnet/ruflo/blob/29be054e85636b61788f3955d0bd4d0bcbcfe3f6/v3/@claude-flow/cli/bin/cli.js#L36); [source6](https://github.com/ruvnet/ruflo/blob/29be054e85636b61788f3955d0bd4d0bcbcfe3f6/v3/@claude-flow/cli/bin/cli.js#L131). Representative source screening; no execution or admission.

<a id="souravberaakaspeed-xiryn"></a>
### Xiryn

[SouravBeraAkaSpeed/xiryn](https://github.com/SouravBeraAkaSpeed/xiryn) · **Shortlisted / planned**

- **Purpose:** Self-hosted personal agents with per-agent Docker Linux desktops, cloud/local model selection, memory, routines and optional Telegram control.
- **Architecture fit:** E/H/I/J / Q-113: General-assistant product/runtime and background workstation comparison versus Core/direct adapters, Hermes, OpenClaw and CUA; model routing evaluated separately.
- **Current status:** Source researched; planned and untested. MIT root signal. Self-hosting does not establish local inference, safe Docker control, protected secrets or authority over effects. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Qualify exact Windows/Docker socket and guest mounts, host/proxy exposure, per-agent model recipients, shell/action grants, routine cancellation, all-process Stop, costs and removal with synthetic data.
- **Evidence:** Pinned README, architecture, security, deployment and package metadata reviewed with independent representative source screening; no install, Docker/model/Telegram execution or runtime qualification. Dates: 2026-10-21.
- **Registered records:** `runtime.xiryn`
- **Recorded revision:** `0a55cd9ecdc9f2d8dbb7ff057226607613dcc64b`

- **November 9 source assessment:** `source-reviewed-bounded` at `c56fd59c642ef56a4fa9e697ed218581473529ad`.
  - Xiryn is version0.7.0 with a Docker Linux workstation; shell tool explicitly offers passwordless sudo inside that workstation. Docker separation is not proof of host containment.
  - SECURITY documents loopback/browser-key assumptions and says non-local exposure requires an authenticating proxy; container Dockerfile binds0.0.0.0:6796, so effective deployment binding must be checked.
  - Runtime cancellation calls AbortController and waits on active work, but inspected cancellation paths do not establish all-container process termination or effect reconciliation. Root license is MIT.
- **Assessment sources:** [source1](https://github.com/SouravBeraAkaSpeed/xiryn/blob/c56fd59c642ef56a4fa9e697ed218581473529ad/package.json#L1); [source2](https://github.com/SouravBeraAkaSpeed/xiryn/blob/c56fd59c642ef56a4fa9e697ed218581473529ad/LICENSE#L1); [source3](https://github.com/SouravBeraAkaSpeed/xiryn/blob/c56fd59c642ef56a4fa9e697ed218581473529ad/Dockerfile#L35); [source4](https://github.com/SouravBeraAkaSpeed/xiryn/blob/c56fd59c642ef56a4fa9e697ed218581473529ad/SECURITY.md#L32); [source5](https://github.com/SouravBeraAkaSpeed/xiryn/blob/c56fd59c642ef56a4fa9e697ed218581473529ad/lib/agent/tools.ts#L178); [source6](https://github.com/SouravBeraAkaSpeed/xiryn/blob/c56fd59c642ef56a4fa9e697ed218581473529ad/lib/agent/runtime.ts#L80). Representative source screening; no execution or admission.

<a id="e2b-dev-awesome-ai-agents"></a>
### E2B Awesome AI Agents

[e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) · **Collected reference**

- **Purpose:** Discovery directory of open and closed agent projects and use cases.
- **Architecture fit:** E-J / Q-107: gap discovery for general-assistant capabilities and bake-off tooling; individual projects need separate direct-source intake.
- **Current status:** Collected discovery reference; source reviewed, no executable candidate admission. Root LICENSE.md signals CC-BY-NC-SA-4.0. Descriptions may be stale; list membership is not qualification.
- **Next gate:** Resolve canonical identities and duplicates, verify selected projects directly, then assess rights, maintenance, cloud/local fit, data routes, costs and independent useful-task evidence. Do not bulk-install or inherit directory claims.
- **Evidence:** Pinned README and root-tree/license metadata reviewed; lexical link overlap only, no validation of every listed project or execution. Dates: 2026-10-20.
- **Registered records:** None; discovery reference only.
- **Recorded revision:** `9596ab1e69fbbb6c95291141c8dab5c181083216`
- **Currentness (November 9):** `unchanged`; observed HEAD `9596ab1e69fbbb6c95291141c8dab5c181083216`. Matches a recorded revision; no runtime qualification implied.

<a id="paperclipai-paperclip"></a>
### Paperclip

[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · **Shortlisted / planned**

- **Purpose:** Task/goal and agent orchestration dashboard with adapters, heartbeats, approvals and reported-spend budgets.
- **Architecture fit:** H/I/J / Q-83: product-side multi-provider worker coordination and bake-off management versus Core queue/direct adapters, Q-81 Reason Network, Q-59 AgentBridge and n8n; not a base model.
- **Current status:** Source researched; planned and untested. MIT root signal; default no-login loopback mode, agent secret handoff, adapter containment, budget overshoot and dual-state authority remain gates.
- **Next gate:** Compare supervision components versus Core queue; qualify fork/tenant token isolation including legacy fallback, secret/export redaction, telemetry opt-out and bounded in-flight budget/termination behavior; Windows runner proof separate.
- **Evidence:** Pinned README, package/license identity, deployment/budget/secret/adapter docs and selected Codex adapter source reviewed; no installation, onboarding, agents, credentials/accounts, heartbeat/provider calls or full audit. Dates: 2026-10-18.
- **Registered records:** orchestration.paperclip
- **Recorded intake revision:** c9669a6c2237626ab0b0b2059d34c3965a86f02f

- **November 9 source assessment:** `source-screened-not-tested` at `d7d0f96f3f500a0e7a2028a323c42ace2aa2fa77`.
  - Current Paperclip remains agent-team governance UI/server, now explicitly documenting trusted-local versus authenticated deployments and native-runner build requirements.
  - Run JWT defaults to48 hours and derives per-company/per-instance keys; legacy raw-master fallback must be disabled after token expiry for complete cryptographic instance isolation.
  - README acknowledges budgets enforce recorded spend with in-flight lag, exports may retain plain env/paths, and anonymous telemetry is enabled by default.
- **Assessment sources:** [source1](https://github.com/paperclipai/paperclip/blob/d7d0f96f3f500a0e7a2028a323c42ace2aa2fa77/server/src/agent-auth-jwt.ts#L40); [source2](https://github.com/paperclipai/paperclip/blob/d7d0f96f3f500a0e7a2028a323c42ace2aa2fa77/README.md#L289); [source3](https://github.com/paperclipai/paperclip/blob/d7d0f96f3f500a0e7a2028a323c42ace2aa2fa77/README.md#L401); [source4](https://github.com/paperclipai/paperclip/blob/d7d0f96f3f500a0e7a2028a323c42ace2aa2fa77/README.md#L543). Representative source screening; no execution or admission.

<a id="aaif-goose-goose"></a>
### Goose

[aaif-goose/goose](https://github.com/aaif-goose/goose) · **Shortlisted / planned**

- **Purpose:** General-purpose local agent with desktop, CLI/API, MCP extensions and reusable recipes.
- **Architecture fit:** C/H/I / Q-79 alongside BO-03, Hermes, OpenHands and OpenCode: runtime admission, development-control and product/interface scopes separate.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal; documented default Autonomous mode, ACP tool forwarding, session/privacy and exact host/provider admission remain gates.
- **Next gate:** Test externally enforced grants across native/MCP/ACP tools, mode/session persistence, recipe trust, effect receipts/retries, Stop, session export/delete, provider identity/eligibility, full cost and Windows/build resources.
- **Evidence:** Pinned README, license/build metadata and permission, ACP, recipe, session/security docs reviewed; no install, credentials/accounts, agent/tool/provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** agent.goose
- **Recorded intake revision:** bfcc6ee6f1ee18d0c4c852a65c49b25f87ee40dc

- **November 9 source assessment:** `reviewed` at `0edf2bdc8161d06f79daf639c148bf3559e26cf0`.
  - Current README positions native desktop/CLI/API across Windows/macOS/Linux and15+ provider choices; ACP subscriptions and MCP remain separate recipients/transports.
  - GooseMode source defaults Auto with automatically approved tool calls; Approve/SmartApprove/Chat are alternative modes. This confirms need for external grants and mode-persistence checks, not a harmless default assumption.
- **Assessment sources:** [source1](https://github.com/aaif-goose/goose/blob/0edf2bdc8161d06f79daf639c148bf3559e26cf0/README.md#L27); [source2](https://github.com/aaif-goose/goose/blob/0edf2bdc8161d06f79daf639c148bf3559e26cf0/crates/goose-provider-types/src/goose_mode.rs#L22); [source3](https://github.com/aaif-goose/goose/blob/0edf2bdc8161d06f79daf639c148bf3559e26cf0/Cargo.toml#L1). Representative source screening; no execution or admission.

<a id="anthropics-claude-code"></a>
### Claude Code

[anthropics/claude-code](https://github.com/anthropics/claude-code) · **Shortlisted / planned**

- **Purpose:** Vendor coding-agent development control and separately scoped worker comparison.
- **Architecture fit:** C/H / Q-77: Existing Codex development tooling, OpenCode and eligible BO-03 adapters; distinct from Free Claude Code proxy.
- **Current status:** Source researched; planned and untested. All rights reserved; Anthropic Commercial Terms of Service. Public repository does not establish an open-source client implementation; Windows installation documented; no account/executable admission. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Review exact client/executable terms and version, account/provider eligibility, MCP/hooks/shell/filesystem grants, egress/retention, costs, cancellation and removal; reusable public mod scope must be licensed separately.
- **Evidence:** Pinned README and LICENSE.md reviewed; no installation, accounts/credentials, runtime/provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** agent.claude-code
- **Recorded intake revision:** c017428c8c27e604840435048d5bce6a9a22c040

- **November 9 source assessment:** `source-reviewed-bounded` at `0ed94698aa0aeee471465fc9c867c2e8434c4d68`.
  - The public repository remains all-rights-reserved under Anthropic Commercial Terms; a public source tree is not an open-source license for the proprietary client.
  - README documents Windows installer/WinGet paths. Inspected sec-default mod reads organization MCP allowlist server names; that mod is a policy component, not proof of installed executable enforcement.
  - Development container fetches external release scripts/artifacts; source-only inspection does not admit the installer, dependency supply chain, subscription/API route or runtime permissions.
- **Assessment sources:** [source1](https://github.com/anthropics/claude-code/blob/0ed94698aa0aeee471465fc9c867c2e8434c4d68/LICENSE.md#L1); [source2](https://github.com/anthropics/claude-code/blob/0ed94698aa0aeee471465fc9c867c2e8434c4d68/README.md#L19); [source3](https://github.com/anthropics/claude-code/blob/0ed94698aa0aeee471465fc9c867c2e8434c4d68/.devcontainer/Dockerfile#L45); [source4](https://github.com/anthropics/claude-code/blob/0ed94698aa0aeee471465fc9c867c2e8434c4d68/mods/sec-default/hooks/policy/managed-tools-restored/is-org-tool/org-server-names/org-server-names.ts#L1). Representative source screening; no execution or admission.

<a id="langgenius-dify"></a>
### Dify

[langgenius/dify](https://github.com/langgenius/dify) · **Shortlisted / planned**

- **Purpose:** Visual AI app/workflow platform, RAG and agent product comparison.
- **Architecture fit:** C/H/I / Q-74: Core-owned orchestration/direct adapters, n8n and separately scoped Langflow; component study distinct from platform replacement.
- **Current status:** Source researched; planned and untested. Modified Apache-2.0 with workspace/multi-tenant and branding conditions. Compose includes 1.17.1 app images, database/cache and sandbox components; server/host not qualified.
- **Next gate:** Keep workflow/RAG/component research conditional on exact reuse and branding rights; qualify configured auth on every sandbox/control path, Compose isolation, provider/embedding egress, retained data, cancellation and full stack resources/cost.
- **Evidence:** Pinned README, LICENSE and Compose manifest reviewed; no installation, accounts/credentials, runtime/provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** platform.dify
- **Recorded intake revision:** 7c7f93bd530cc0a9fb7465ef59c28803edd1e286

- **November 9 source assessment:** `source-screened-not-tested` at `8457639de54591969d8333bc749151a09dfb61a0`.
  - Dify license is modified Apache-2.0: multi-tenant operation requires written authorization/commercial license and frontend logo/copyright removal is restricted; frontend interaction design also asserts appearance-patent protection.
  - Agent-server bearer dependency deliberately permits all requests when expected_token is None; constant-time comparison applies only when configured.
  - Current quickstart instructs generating an agent sandbox auth token; configuration and caller wiring must be checked before trusting deployment isolation.
- **Assessment sources:** [source1](https://github.com/langgenius/dify/blob/8457639de54591969d8333bc749151a09dfb61a0/LICENSE#L1); [source2](https://github.com/langgenius/dify/blob/8457639de54591969d8333bc749151a09dfb61a0/dify-agent/src/dify_agent/server/auth.py#L6); [source3](https://github.com/langgenius/dify/blob/8457639de54591969d8333bc749151a09dfb61a0/README.md#L75). Representative source screening; no execution or admission.

<a id="anomalyco-opencode"></a>
### OpenCode

[anomalyco/opencode](https://github.com/anomalyco/opencode) · **Shortlisted / planned**

- **Purpose:** Terminal/desktop coding-agent worker and integration-bake-off development control.
- **Architecture fit:** C/H / Q-71: BO-03 runtime controls, OpenHands and existing coding adapters; product worker and development tool scopes separate.
- **Current status:** Source reviewed at current pin; planned and untested. MIT; root2.2.5/Bun1.4.4. Permissions are not isolation; passwordless server and exact Windows/provider pairing remain unqualified.
- **Next gate:** Qualify exact client/provider pairing, filesystem/shell/tool grants, session storage, config/plugins, model identity, retry/effect handling, cost and Stop.
- **Evidence:** Pinned README and root package metadata reviewed; no installation, accounts/credentials, runtime/provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** agent.opencode
- **Recorded intake revision:** 86c7f7c84048d776ba94b94bfab782b2b0a6d776

- **November 9 source assessment:** `reviewed` at `12a661ea40cd5863b271a89bb06b8a3ddb7ab5a0`.
  - Root metadata is now2.2.5 with Bun1.4.4; old catalog2.0.32/Bun1.4.2 text is stale.
  - Security policy explicitly says permission prompts are UX rather than sandboxing, and opt-in server mode is unauthenticated without password.
  - Server auth derives signed30-day sessions from server password; rotating password invalidates sessions, but default config has no password.
- **Assessment sources:** [source1](https://github.com/anomalyco/opencode/blob/12a661ea40cd5863b271a89bb06b8a3ddb7ab5a0/package.json#L5); [source2](https://github.com/anomalyco/opencode/blob/12a661ea40cd5863b271a89bb06b8a3ddb7ab5a0/SECURITY.md#L15); [source3](https://github.com/anomalyco/opencode/blob/12a661ea40cd5863b271a89bb06b8a3ddb7ab5a0/packages/server/src/auth.ts#L16). Representative source screening; no execution or admission.

<a id="deepseek-ai-deepseek-harness"></a>
### DeepSeek Harness

[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) · **Shortlisted / planned**

- **Purpose:** Plugin-composed agent harness with replaceable model, tool, session and interaction components.
- **Architecture fit:** C/H/I / Q-66 alongside BO-03: runtime/component and bake-off-worker study; exact composed profile and external Core controls required.
- **Current status:** Source researched; planned and untested. Developer preview; profile-dependent permissions, plugin lifecycle, persistence and host isolation remain unqualified. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Qualify exact Windows/native host packaging, cookie audience/HTTPS and launch-token handling, model/backend identity, tool mediation, all-child Stop and resource/cost bounds before product or development use.
- **Evidence:** Pinned README, package/safety, architecture/config-catalog and base/sdk-minimal bundle docs reviewed; no install, plugins, sessions, calls or full audit. Dates: 2026-10-17.
- **Registered records:** agent.deepseek-harness
- **Recorded intake revision:** 687f282e8625c6b8d11ff58211a90524be2e4317

- **November 9 source assessment:** `source-reviewed-bounded` at `fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159`.
  - DeepSeek Harness root version0.2.2-rc.1 requires Node>=24.9.0 and pnpm11.28.5; MIT root notice does not qualify native components or packaged releases.
  - Browser authentication uses random per-process launch tokens, a credential-provider secret, HMAC/timing-safe comparisons and HttpOnly/SameSite=Strict cookies; Secure is conditioned on secure transport.
  - The inspected authentication implementation is substantially more concrete than a README claim, but no browser-session isolation, network deployment or tool-executor permissions were exercised.
- **Assessment sources:** [source1](https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/package.json#L1); [source2](https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/LICENSE#L1); [source3](https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/packages/client/connection/src/browser-auth.ts#L14); [source4](https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/packages/client/connection/src/browser-auth.ts#L61); [source5](https://github.com/deepseek-ai/deepseek-harness/blob/fcc0ad462172522aaf5c93a7b2e01f6b9f0b0159/packages/client/connection/src/browser-auth.ts#L105). Representative source screening; no execution or admission.

<a id="andrewyng-openworker"></a>
### OpenWorker

[andrewyng/openworker](https://github.com/andrewyng/openworker) · **Shortlisted / planned**

- **Purpose:** Desktop personal-assistant runtime with documents, connectors, scheduled work and approval/audit controls.
- **Architecture fit:** C/E-I / Q-60: general-assistant and component comparison alongside BO-03; Core retains grants, sources, effects and Stop.
- **Current status:** Source researched; planned and untested. Beta, optional sandbox/connector boundaries and exact Windows/build qualification remain open.
- **Next gate:** Compare Desktop and Harness separately; qualify actual Windows sandbox/installer trust, grant floors/model-review autonomy, OAuth broker/manual route egress, remote revocation, retry/effect receipts and full Stop/cost outcomes.
- **Evidence:** Pinned README, security/package metadata and Windows/OpenShell sandbox docs reviewed; no installation, accounts, connectors, model calls or full audit. Dates: 2026-10-17.
- **Registered records:** agent.openworker
- **Recorded intake revision:** 7e20213dc88faaaaccace59461876c76e76b134a

- **November 9 source assessment:** `source-screened-not-tested` at `ddb8b361bd5889703a429af8beaa804554bd858a`.
  - Current Desktop app Python engine and Rust/TypeScript Harness release-candidate are explicitly separate products/surfaces; do not transfer qualification between them.
  - Windows download is advertised but unsigned; source path requires Git Bash/WSL bootstrap and separate Windows sandbox qualification.
  - OpenRouter auth exchanges PKCE code then validates issued key against authenticated auth/key; cancel clears attempt/server/timer locally, which is not remote key revocation.
  - Reference server team creation requires control authorization and activated shared profile; reference client restricts APIs to loopback and retains request IDs across retries.
- **Assessment sources:** [source1](https://github.com/andrewyng/openworker/blob/ddb8b361bd5889703a429af8beaa804554bd858a/README.md#L17); [source2](https://github.com/andrewyng/openworker/blob/ddb8b361bd5889703a429af8beaa804554bd858a/README.md#L104); [source3](https://github.com/andrewyng/openworker/blob/ddb8b361bd5889703a429af8beaa804554bd858a/coworker/providers/openrouter_auth.py#L20); [source4](https://github.com/andrewyng/openworker/blob/ddb8b361bd5889703a429af8beaa804554bd858a/coworker/providers/openrouter_auth.py#L65); [source5](https://github.com/andrewyng/openworker/blob/ddb8b361bd5889703a429af8beaa804554bd858a/harness/server-reference/src/agent_teams.rs#L37); [source6](https://github.com/andrewyng/openworker/blob/ddb8b361bd5889703a429af8beaa804554bd858a/harness/server-reference/client.mjs#L7). Representative source screening; no execution or admission.

<a id="mvschwarz-openrig"></a>
### OpenRig

[mvschwarz/openrig](https://github.com/mvschwarz/openrig) · **Shortlisted / planned**

- **Purpose:** Persistent coding-agent teams with topology, task ownership/queues, shared context, tmux sessions and recovery.
- **Architecture fit:** H/I/J / Q-57 refresh: General-assistant development and bake-off coordination versus serial work/simple Core queue, AgentBridge Q-59, Paperclip Q-83 and Ruflo Q-117; lifecycle/supervision evidence separate.
- **Current status:** Source researched; planned and untested. New source pin reports 0.7.1. WSL2 remains the Windows route; native Windows unsupported and WSL2 automation unverified. Kernel and team permission defaults differ; no runtime admission.
- **Next gate:** Compare pinned upstream, eligible coordination components, minimal original Core queue and defer; qualify exact WSL2/client/native modules, setup/startup trust/hooks/global mutations, effective permissions/routes, context/queue/effect recovery, aggregate budgets, all-child Stop, resources and removal.
- **Evidence:** Pinned README, license/security/package metadata and independent representative source screening refreshed; historical intake retained; no install, setup, hooks, daemon/team launch, session adoption, messages or provider calls. Dates: 2026-10-16, 2026-10-26.
- **Registered records:** `orchestration.openrig` (existing Q-57 refreshed; no count increase).
- **Recorded revisions:** `e0c65c41e429678272522eb5f9875583a69b48a5`, `44e10a1e5b44012d65319b689d22aad607a6b2bc`.

- **November 9 source assessment:** `reviewed` at `1fb614b7c95e5fab5148997d451fbd6da0cc6f35`.
  - Root remains0.7.1, Node22/24 and tmux; README still requires WSL2 for Windows and says automated WSL2 tests do not run.
  - Kernel launch permissions differ from team defaults; permissive modes include danger-full-access/never. Mode choice and actual applied launch must remain explicit.
  - Permission drift observer stores applied-launch observations and consults a bounded1-second claude-help subprocess; it observes state rather than enforcing containment.
- **Assessment sources:** [source1](https://github.com/mvschwarz/openrig/blob/1fb614b7c95e5fab5148997d451fbd6da0cc6f35/package.json#L3); [source2](https://github.com/mvschwarz/openrig/blob/1fb614b7c95e5fab5148997d451fbd6da0cc6f35/README.md#L45); [source3](https://github.com/mvschwarz/openrig/blob/1fb614b7c95e5fab5148997d451fbd6da0cc6f35/README.md#L61); [source4](https://github.com/mvschwarz/openrig/blob/1fb614b7c95e5fab5148997d451fbd6da0cc6f35/packages/daemon/src/domain/permission-drift-observer.ts#L36). Representative source screening; no execution or admission.

<a id="google-ax"></a>
### AX

[google/ax](https://github.com/google/ax) · **Shortlisted / planned**

- **Purpose:** Declarative cluster orchestration of agent tasks, workspaces and model bindings on Agent Substrate.
- **Architecture fit:** H/I/J / Q-55: optional cluster-worker lifecycle study alongside Q-16 Substrate versus a simpler isolated-worker controller.
- **Current status:** Source researched; optional/deferred cluster-worker study planned and untested. Cluster/Substrate/runner admission and current-versus-roadmap enforcement remain open. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Qualify cluster/Substrate identity and deployment rights, TLS/auth and ingress, image/mount/network boundaries, debug/SSH grants, PostgreSQL durability, child cancellation and cloud-resource release/costs.
- **Evidence:** Pinned README, sandbox/roadmap documentation and go.mod screened; no execution or full audit. Dates: 2026-10-16.
- **Record IDs:** `orchestration.google-ax`.
- **Historical intake revision:** `92d297e97c43ff381f82d83315736c270ea1bc69`.

- **November 9 source assessment:** `source-reviewed-bounded` at `241bc4d0c682a6898da5f718a9ec84fe7c9197f9`.
  - AX server defaults to HTTP:8080, PostgreSQL with sslmode=disable locally, and a cluster Substrate endpoint; bearer token and CA files are separate configuration inputs.
  - Flags expose explicit insecure-TLS/plaintext alternatives. These are configuration choices requiring confinement, not evidence that secure deployment was tested.
  - Metadata guest services expose process/file access and are documented as reachable inside the task container; debug must be enabled for ax ssh. This remains infrastructure coordination, not a local personal-assistant shell.
- **Assessment sources:** [source1](https://github.com/google/ax/blob/241bc4d0c682a6898da5f718a9ec84fe7c9197f9/cmd/ax-server/main.go#L39); [source2](https://github.com/google/ax/blob/241bc4d0c682a6898da5f718a9ec84fe7c9197f9/internal/metadata/server.go#L33); [source3](https://github.com/google/ax/blob/241bc4d0c682a6898da5f718a9ec84fe7c9197f9/cmd/ax/main.go#L979). Representative source screening; no execution or admission.

<a id="kortix-ai-suna"></a>
### Kortix CompanyOS (historically Suna)

[kortix-ai/suna](https://github.com/kortix-ai/CompanyOS) · **Shortlisted / planned**

- **Purpose:** Cloud-native multi-agent company workspace with persistent session computers, event/schedule triggers, shared memory and reviewed repository changes.
- **Architecture fit:** E-I; separate H / Q-54: Abrams and eligible whole-app assistant studies; single-worker/direct adapters.
- **Current status:** Source reviewed; planned and untested. Current branding CompanyOS; Elastic License2.0 eligibility and any separate white-label terms require intended-use review; hosted/sandbox authority unqualified.
- **Next gate:** Review intended-use/license eligibility, exact sandbox/cloud/connector/approval paths, canonical state, credentials, all-child Stop, durable schedules and full costs.
- **Evidence:** Dated carousel identity review and pinned primary README/metadata; additional license/maintenance screening where recorded; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `assistant.kortix-suna`.
- **Historical intake revision:** `a76952539cc075933bb5e27089283eb2db17ef73`.

- **November 9 source assessment:** `reviewed` at `e16bb636ac5a0645007d250b6cae3a5e726293e4`.
  - Current README brands repository Kortix CompanyOS and links kortix-ai/CompanyOS; old Suna/Kortix-only identity wording needs update without discarding history.
  - Elastic License2.0 still restricts substantial hosted/managed service offerings; README open-source marketing and white-label offering are not blanket eligibility.
  - Sandbox control-auth source fails503 if sandbox token unset and permits bearer or signed user context; scoped user-context and service authority must be qualified separately.
- **Assessment sources:** [source1](https://github.com/kortix-ai/suna/blob/e16bb636ac5a0645007d250b6cae3a5e726293e4/README.md#L8); [source2](https://github.com/kortix-ai/suna/blob/e16bb636ac5a0645007d250b6cae3a5e726293e4/LICENSE#L18); [source3](https://github.com/kortix-ai/suna/blob/e16bb636ac5a0645007d250b6cae3a5e726293e4/apps/kortix-sandbox-agent-server/src/routes/kortix/control-auth.ts#L30). Representative source screening; no execution or admission.

<a id="pydantic-pydantic-ai"></a>
### Pydantic AI

[pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai) · **Shortlisted / planned**

- **Purpose:** Typed agent/tool/output framework with optional harness, graphs and evals.
- **Architecture fit:** C/H/J / Q-53: Schema validation plus simple model wrapper; separate BO-03 adapter and independent eval controls.
- **Current status:** README/metadata researched; planned and untested. Types and valid schemas do not guarantee zero hallucinations or fully reliable effects. Core, Harness, Evals, optional gateway and observability services need distinct component scope.
- **Next gate:** Test semantic correctness beyond schema validity, wrong tools/arguments, repair/retry costs, allowlists, provider semantics, Stop and observability egress.
- **Evidence:** Dated carousel identity review and pinned primary README/metadata; additional license/maintenance screening where recorded; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `agent.pydantic-ai`.
- **Historical intake revision:** `0ca0fde41c5e08343e23aab7c6601c3a9afce1e0`.

- **November 9 source assessment:** `reviewed` at `0d972ac375fe0d61e5b21a3c9415fd12b0fd6a0b`.
  - Current repository spans SDK, Harness, Evals/Graph, Logfire and Gateway; selecting SDK does not authorize hosted observability or gateway routes.
  - Representative subagent toolset exposes optional per-delegate request/token limits, timeouts, max_calls and read_only=false default; budgets are opt-in and child soft failures can steer rather than stop the parent. Core aggregate budgets and trusted tool scoping remain necessary.
- **Assessment sources:** [source1](https://github.com/pydantic/pydantic-ai/blob/0d972ac375fe0d61e5b21a3c9415fd12b0fd6a0b/README.md#L32); [source2](https://github.com/pydantic/pydantic-ai/blob/0d972ac375fe0d61e5b21a3c9415fd12b0fd6a0b/src/pydantic_ai_harness/pydantic_ai_harness/subagents/_toolset.py#L222); [source3](https://github.com/pydantic/pydantic-ai/blob/0d972ac375fe0d61e5b21a3c9415fd12b0fd6a0b/src/pydantic_ai_harness/pydantic_ai_harness/subagents/_toolset.py#L259). Representative source screening; no execution or admission.

<a id="microsoft-autogen"></a>
### AutoGen (archived)

[microsoft/autogen](https://github.com/microsoft/autogen) · **Shortlisted / planned**

- **Purpose:** Archived multi-agent framework retained as a historical architecture/component and matched-runtime comparator; upstream recommends Microsoft Agent Framework for new users, requiring separate intake.
- **Architecture fit:** C/H / Q-52: Single-worker/BO-03 runtime controls; bounded matched delegation.
- **Current status:** Archived upstream; retained as historical/component comparator, untested and not admitted. New integration deferred pending maintenance/security ownership and exact scope review.
- **Next gate:** Defer new runtime admission for archived upstream; retain historical matched comparator/component research only after dependency/security ownership and exact executor/auth/Stop qualification. Treat Agent Framework as a distinct future intake, not automatic replacement.
- **Evidence:** Dated carousel identity review and pinned primary README/metadata; additional license/maintenance screening where recorded; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `agent.autogen`.
- **Historical intake revision:** `027ecf0a379bcc1d09956d46d12d44a3ad9cee14`.

- **November 9 source assessment:** `source-screened-not-tested` at `d07c667a3239ea4ab7af62a53b0f4ff205a1f23d`.
  - New pinned README explicitly declares AutoGen archived and unsupported: Microsoft provides no bug/security fixes or production support and recommends Agent Framework for new users.
  - Existing executable-agent and Docker/Jupyter surfaces remain useful historical design references, not a maintained default runtime. Jupyter connection token is optional and auth headers are omitted when absent.
  - Code MIT and documentation CC-BY4.0 are separate grants; provider examples require external model credentials.
- **Assessment sources:** [source1](https://github.com/microsoft/autogen/blob/d07c667a3239ea4ab7af62a53b0f4ff205a1f23d/README.md#L14); [source2](https://github.com/microsoft/autogen/blob/d07c667a3239ea4ab7af62a53b0f4ff205a1f23d/README.md#L228); [source3](https://github.com/microsoft/autogen/blob/d07c667a3239ea4ab7af62a53b0f4ff205a1f23d/python/packages/autogen-ext/src/autogen_ext/code_executors/docker_jupyter/_jupyter_server.py#L25); [source4](https://github.com/microsoft/autogen/blob/d07c667a3239ea4ab7af62a53b0f4ff205a1f23d/python/packages/autogen-ext/src/autogen_ext/code_executors/docker_jupyter/_jupyter_server.py#L49). Representative source screening; no execution or admission.

<a id="agno-agi-agno"></a>
### Agno

[agno-agi/agno](https://github.com/agno-agi/agno) · **Shortlisted / planned**

- **Purpose:** Agent framework/runtime with service, memory and control-plane integration.
- **Architecture fit:** C/H/I / Q-51: BO-03 runtime/single-worker controls; direct services with Core-owned state.
- **Current status:** README/metadata researched; planned and untested. Treat the current AgentOS/control-plane/deployment stack separately from framework benchmarks. Do not execute the README's setup prompt or import linked templates as additional candidates. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Choose framework versus AgentOS/control-plane scope; pin Python package and templates, disable/qualify telemetry, explicitly configure auth/audience/user isolation, paid model/embedding recipients, durable recovery and Stop.
- **Evidence:** Dated carousel identity review and pinned primary README/metadata; additional license/maintenance screening where recorded; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `agent.agno`.
- **Historical intake revision:** `7f5dcdf53d0caf6c10381f2e2cd8c6acbca46fb8`.

- **November 9 source assessment:** `source-reviewed-bounded` at `047cf37a47f3f5788faf63ce3437715bd6780123`.
  - Agno now presents agents, AgentOS and Company OS as distinct platform capabilities; README setup points to an external Railway template and os.agno.com, so framework reuse and hosted control-plane adoption are separate.
  - README explicitly discloses per-agent telemetry and AGNO_TELEMETRY=false opt-out. The current root license is Apache2.0; the previous generic platform shortlist is retained rather than following setup instructions.
  - JWT middleware centralizes audience fallback across REST, MCP and WebSocket paths. The example server enables Bearer authentication only when OS_SECURITY_KEY is set and uses external OpenAI model/embedding routes.
- **Assessment sources:** [source1](https://github.com/agno-agi/agno/blob/047cf37a47f3f5788faf63ce3437715bd6780123/README.md#L17); [source2](https://github.com/agno-agi/agno/blob/047cf37a47f3f5788faf63ce3437715bd6780123/README.md#L90); [source3](https://github.com/agno-agi/agno/blob/047cf37a47f3f5788faf63ce3437715bd6780123/libs/agno/agno/os/middleware/jwt.py#L80); [source4](https://github.com/agno-agi/agno/blob/047cf37a47f3f5788faf63ce3437715bd6780123/cookbook/05_agent_os/03_python_client/_server.py#L1); [source5](https://github.com/agno-agi/agno/blob/047cf37a47f3f5788faf63ce3437715bd6780123/cookbook/05_agent_os/03_python_client/06_auth.py#L24). Representative source screening; no execution or admission.

<a id="openhands-openhands"></a>
### Agent Canvas / OpenHands

[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · **Shortlisted / planned**

- **Purpose:** Self-hosted developer control center and supervision UI for OpenHands and other coding agents across local, remote and cloud backends; each backend/runtime remains separately qualified.
- **Architecture fit:** H; separate E-I / Q-50: Plain single-worker terminals/dashboard and eligible Q-23/Q-34/Q-45 app controls.
- **Current status:** Current source researched: Agent Canvas multi-agent developer control center, not a standalone qualification of every OpenHands/backend runtime; planned, untested and not admitted.
- **Next gate:** Reconcile Agent Canvas UI/backend identities; compare eligible supervision UI and adapter components separately from each agent runtime; qualify host/remote URL, API/session keys, Windows Docker lifecycle, all-backend Stop, data and cost.
- **Evidence:** Dated carousel identity review and pinned primary README/metadata; additional license/maintenance screening where recorded; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `assistant.openhands`.
- **Historical intake revision:** `d3a58cd1cc045bbb1b24f2c8c0d79a8404ef239b`.

- **November 9 source assessment:** `source-screened-not-tested` at `82196a4d99d6414fa7333ac1876cefbd59e2eeb7`.
  - Current root product is Agent Canvas (@openhands/agent-canvas1.37.0), a multi-agent developer control center; separate it from the OpenHands agent/server runtime formerly implied by repository name.
  - README offers unsandboxed Node 24+/uv and Docker-sandbox options, plus Windows-specific instructions. Backend selection is explicit, API key is optional in client options, and host can come from override/conversation URL.
  - Control-plane UI success is not backend containment or route authentication evidence.
- **Assessment sources:** [source1](https://github.com/OpenHands/OpenHands/blob/82196a4d99d6414fa7333ac1876cefbd59e2eeb7/README.md#L5); [source2](https://github.com/OpenHands/OpenHands/blob/82196a4d99d6414fa7333ac1876cefbd59e2eeb7/README.md#L62); [source3](https://github.com/OpenHands/OpenHands/blob/82196a4d99d6414fa7333ac1876cefbd59e2eeb7/package.json#L1); [source4](https://github.com/OpenHands/OpenHands/blob/82196a4d99d6414fa7333ac1876cefbd59e2eeb7/src/api/agent-server-client-options.ts#L35). Representative source screening; no execution or admission.

<a id="letta-ai-letta-code"></a>
### Letta Code (Letta)

[letta-ai/letta-code](https://github.com/letta-ai/letta-code) · **Shortlisted / planned**

- **Purpose:** Stateful agent harness with persistent memory and identity.
- **Architecture fit:** E/I / Q-47: Core-owned relational/FTS memory and single-worker controls; eligible Hindsight/app studies.
- **Current status:** README/metadata researched; planned and untested. The post links letta-ai/letta, whose README points here. Current README defaults to Letta Cloud; automatic client reflection is disabled by default on native Windows. Do not enable reflection or self-modification from intake.
- **Next gate:** Review cloud/local defaults, memory corrections/deletion, reflection, self-modification, egress and exact Windows/background behavior.
- **Evidence:** Dated carousel identity review and pinned primary README/metadata; additional license/maintenance screening where recorded; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `agent.letta`.
- **Historical intake revision:** `1297870b0aa6662d6c70729d273f5073c1bcbdea`.

- **November 9 source assessment:** `reviewed` at `7f7300a2c8d4d8aef150d9ea9d01f0edd4f9d710`.
  - README now offers explicit Cloud/local backend choice with Cloud default; native Windows automatic client reflection remains disabled unless opted in.
  - Cloud memory/conversations and bundled prompt updates are separate from local tools; preserved-prompt environment switch is documented.
  - Memory auth resolves credentials per Git operation: local-only memfs returns empty token, otherwise session token then client API key. Cloud/local and credential pathways must remain distinct.
- **Assessment sources:** [source1](https://github.com/letta-ai/letta-code/blob/7f7300a2c8d4d8aef150d9ea9d01f0edd4f9d710/README.md#L62); [source2](https://github.com/letta-ai/letta-code/blob/7f7300a2c8d4d8aef150d9ea9d01f0edd4f9d710/README.md#L33); [source3](https://github.com/letta-ai/letta-code/blob/7f7300a2c8d4d8aef150d9ea9d01f0edd4f9d710/src/agent/memory-auth.ts#L5). Representative source screening; no execution or admission.

<a id="crewaiinc-crewai"></a>
### CrewAI

[crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) · **Shortlisted / planned**

- **Purpose:** Crews and event-driven Flows for agent collaboration.
- **Architecture fit:** C/H / Q-46: Single-worker/rules controls and BO-03 runtime adapters.
- **Current status:** README/metadata researched; planned and untested. OSS framework and commercial AMP/control-plane features require distinct scope; agent count is not task success.
- **Next gate:** Separate Crew/Flow state from Core; bound delegation, tool authority, restart/retries, Stop and aggregate costs.
- **Evidence:** Dated carousel identity review and pinned primary README/metadata; additional license/maintenance screening where recorded; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `agent.crewai`.
- **Historical intake revision:** `6115839576d68d2e83b9f7f31e6c55d471e1fc64`.

- **November 9 source assessment:** `reviewed` at `83d7407aa50b94d5b9f110c10ca295d3e0f360ee`.
  - Current README separates OSS Crew/Flow framework from commercial AMP control plane and documents Windows C++ build requirements for a native dependency.
  - README discloses anonymous telemetry by default and full task/context/output sharing when share_crew is enabled; egress needs distinct configuration verification.
  - Representative A2A auth implementation supports bearer, enterprise, OIDC and OAuth2, including network-backed JWKS/introspection paths; type/schema validity does not qualify downstream effects.
- **Assessment sources:** [source1](https://github.com/crewAIInc/crewAI/blob/83d7407aa50b94d5b9f110c10ca295d3e0f360ee/README.md#L590); [source2](https://github.com/crewAIInc/crewAI/blob/83d7407aa50b94d5b9f110c10ca295d3e0f360ee/README.md#L594); [source3](https://github.com/crewAIInc/crewAI/blob/83d7407aa50b94d5b9f110c10ca295d3e0f360ee/lib/crewai/src/crewai/a2a/auth/server_schemes.py#L5). Representative source screening; no execution or admission.

<a id="milind-soni-openmausbot"></a>
### OpenMausBot

[milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) · **Shortlisted / planned**

- **Purpose:** Local-first chat interface and harness for CLI agents, computer sessions and connected apps.
- **Architecture fit:** E-I / Q-45: whole-app build-versus-adapt plus separate H component/UI study against Abrams and eligible LibreChat/OpenMuse/Open Dot/Hermes studies.
- **Current status:** Source researched; whole-app and selected-component studies planned and untested. OSS/enterprise, CLI permissions and platform-specific computer access remain unqualified.
- **Next gate:** Preserve existing scope/platform/grant gates; additionally qualify Fish Audio speech egress on Windows/Linux, CDP authentication origin/retention, exact named read tools versus effect tools and all-child Stop.
- **Evidence:** Pinned README, licensing guide, security-policy excerpts and package metadata screened; no execution or full audit. Dates: 2026-10-15.
- **Record IDs:** `assistant.openmausbot`.
- **Historical intake revision:** `113ec83256971c62088a0bbd507c6fa3a2cd4091`.

- **November 9 source assessment:** `reviewed` at `1de1164d5040d8699f55e0907552270bd9fbd38f`.
  - Current README documents Windows x64/Electron/Node24+, but host computer control differs by OS and mic transcription on Windows/Linux uses Fish Audio rather than on-device Apple speech. Local-first UI therefore does not imply all-local data handling.
  - Agent-tool policy uses explicit names for reviewed read-only built-ins, not arbitrary MCP annotations; CDP HTTP-auth challenges wait at most5minutes and refuse proxy authentication. These controls require exact integration checks.
- **Assessment sources:** [source1](https://github.com/milind-soni/OpenMausBot/blob/1de1164d5040d8699f55e0907552270bd9fbd38f/README.md#L234); [source2](https://github.com/milind-soni/OpenMausBot/blob/1de1164d5040d8699f55e0907552270bd9fbd38f/README.md#L354); [source3](https://github.com/milind-soni/OpenMausBot/blob/1de1164d5040d8699f55e0907552270bd9fbd38f/server/agent-tool-policy.ts#L3); [source4](https://github.com/milind-soni/OpenMausBot/blob/1de1164d5040d8699f55e0907552270bd9fbd38f/server/browser/cdp/auth.ts#L13). Representative source screening; no execution or admission.

<a id="significant-gravitas-autogpt"></a>
### AutoGPT

[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · **Shortlisted / planned**

- **Purpose:** Classic runtime, Platform workflow concepts and selected benchmark fixtures.
- **Architecture fit:** C / proposed BO-03 for Classic; H / BO-15 concepts; BO-T02 remains trigger-only.
- **Current status:** Current source reviewed; mixed component rights preserved. Classic remains proposed separately; Platform integration deferred and untested.
- **Next gate:** Resolve component-specific reuse rights and fit; qualify each scope independently.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-09.
- **Record IDs:** `agent.autogpt-classic`, `evaluation.autogpt-classic-fixtures`, `workflow.autogpt-platform`.
- **Historical intake revision:** `98381ab27f733468bfe1f9c4f4942b4b416d9a8b`.

- **November 9 source assessment:** `reviewed` at `9cb76f9026d388c9bf2e098af2beae1cc864f055`.
  - README now foregrounds Otto/Experts and hosted or self-hosted Platform; its component table still separates Polyform Shield autogpt_platform from MIT Classic/rest. Whole-repository reuse cannot inherit Classic terms.
  - Platform permission source distinguishes org/workspace roles and permits team members to use credentials/create agents; this is application RBAC, not proof of restricted browser/tool effects.
- **Assessment sources:** [source1](https://github.com/Significant-Gravitas/AutoGPT/blob/9cb76f9026d388c9bf2e098af2beae1cc864f055/README.md#L157); [source2](https://github.com/Significant-Gravitas/AutoGPT/blob/9cb76f9026d388c9bf2e098af2beae1cc864f055/autogpt_platform/autogpt_libs/autogpt_libs/auth/permissions.py#L63). Representative source screening; no execution or admission.

<a id="cline-cline"></a>
### Cline

[cline/cline](https://github.com/cline/cline) · **Shortlisted / planned**

- **Purpose:** Agent runtime and SDK configurations for controlled task execution.
- **Architecture fit:** C / BO-03: compare Agent, Core, Hub and SDK configurations behind AbramsRuntime; no incumbent advantage.
- **Current status:** Intake candidate; no completed runtime qualification.
- **Next gate:** Compare actual SDK/CLI/desktop artifact separately against Core; qualify nonlocal hub binding/room-secret exposure, shell/MCP grants, credentials/telemetry, aggregate routes/cost, owned-process Stop and Windows lifecycle.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `agent.cline-agent`, `agent.cline-core`, `agent.cline-hub`, `agent.cline-sdk`.

- **November 9 source assessment:** `source-screened-not-tested` at `5413dc180c10700ce2e26547ab75991360dd0486`.
  - Cline now spans IDE, CLI and native Windows/macOS desktop, with Bun1.4.2/Node 22+ monorepo build; evaluate surfaces separately rather than assuming IDE-only scope.
  - Hub browser authorization validates Host and Origin, and requires roomSecret only if configured; query-string secret handling and actual bind/public-route settings require deployment-specific inspection.
  - Apache-2.0 root rights do not qualify model providers, installed MCP servers or shell effects.
- **Assessment sources:** [source1](https://github.com/cline/cline/blob/5413dc180c10700ce2e26547ab75991360dd0486/README.md#L58); [source2](https://github.com/cline/cline/blob/5413dc180c10700ce2e26547ab75991360dd0486/package.json#L15); [source3](https://github.com/cline/cline/blob/5413dc180c10700ce2e26547ab75991360dd0486/package.json#L50); [source4](https://github.com/cline/cline/blob/5413dc180c10700ce2e26547ab75991360dd0486/apps/cline-hub/src/server/browser-auth.ts#L99); [source5](https://github.com/cline/cline/blob/5413dc180c10700ce2e26547ab75991360dd0486/LICENSE#L1). Representative source screening; no execution or admission.

<a id="nousresearch-hermes-agent"></a>
### Hermes Agent

[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · **Shortlisted / planned**

- **Purpose:** Assistant runtime, memory, skills and scheduling reference.
- **Architecture fit:** C/E-I / Q-19: runtime admission and component/product studies are separate.
- **Current status:** Researched; initial runtime-set admission unresolved. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Freeze exact backend/provider and tool surface, qualify host versus container effects, hooks/skill-learning promotion, credential scopes, long-lived memory, egress, subagent aggregate budgets and all-backend Stop.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-23.
- **Record IDs:** `agent.hermes`.
- **Historical intake revision:** `3dca25b6f65ae8e6bccc99ed1396cefdf9977b9c`.

- **November 9 source assessment:** `source-reviewed-bounded` at `0b37335f2112822df9aca9a22f1d4f8bf483fdb1`.
  - Hermes retains MIT root licensing and multiple interchangeable terminal backends; README now documents Linux/macOS/WSL2 plus desktop/subagent controls, which remain unqualified on this machine.
  - Python metadata exact-pins direct dependencies, while root package scripts still install Git hooks during prepare. Setup has host effects separate from agent-model quality.
  - MCP transport deliberately excludes context-dependent tools and browser_exec because model-written Python would run on the Hermes host outside Codex sandbox/approval UI. SECURITY distinguishes backend confinement from other in-process host effects.
- **Assessment sources:** [source1](https://github.com/NousResearch/hermes-agent/blob/0b37335f2112822df9aca9a22f1d4f8bf483fdb1/LICENSE#L1); [source2](https://github.com/NousResearch/hermes-agent/blob/0b37335f2112822df9aca9a22f1d4f8bf483fdb1/README.md#L19); [source3](https://github.com/NousResearch/hermes-agent/blob/0b37335f2112822df9aca9a22f1d4f8bf483fdb1/package.json#L1); [source4](https://github.com/NousResearch/hermes-agent/blob/0b37335f2112822df9aca9a22f1d4f8bf483fdb1/pyproject.toml#L5); [source5](https://github.com/NousResearch/hermes-agent/blob/0b37335f2112822df9aca9a22f1d4f8bf483fdb1/agent/transports/hermes_tools_mcp_server.py#L45); [source6](https://github.com/NousResearch/hermes-agent/blob/0b37335f2112822df9aca9a22f1d4f8bf483fdb1/SECURITY.md#L39). Representative source screening; no execution or admission.

<a id="moonshotai-kimi-code"></a>
### Kimi Code

[MoonshotAI/kimi-code](https://github.com/MoonshotAI/kimi-code) · **Shortlisted / planned**

- **Purpose:** Coding-agent runtime and adapter candidate.
- **Architecture fit:** C / BO-03: runtime conformance is distinct from Kimi model quality.
- **Current status:** Collected in the frozen runtime inventory; untested.
- **Next gate:** Preserve runtime/model distinction; inspect concrete credential storage and least-privilege tool policy, Git Bash/Windows process containment, exact provider data/cost and cancellation before eligible adapter trials.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `model.kimi-code`.

- **November 9 source assessment:** `source-screened-not-tested` at `27bd9baba10e9f73d3db0e0fdd6f81046b4cbac9`.
  - Current Kimi Code is an MIT terminal agent with native installation instructions for Windows but requires Git Bash; compatible provider support is separate from local-model route qualification.
  - MCP OAuth persistence delegates to atomic document storage under credentials/mcp; this adapter alone does not establish OS-backed encryption or secure deletion.
  - Shell/edit/web-fetch/MCP authority must be scoped independently of the model family; Kimi Code is not itself another Kimi model.
- **Assessment sources:** [source1](https://github.com/MoonshotAI/kimi-code/blob/27bd9baba10e9f73d3db0e0fdd6f81046b4cbac9/README.md#L8); [source2](https://github.com/MoonshotAI/kimi-code/blob/27bd9baba10e9f73d3db0e0fdd6f81046b4cbac9/packages/agent-core-v2/src/app/mcpConfig/oauthStore.ts#L15); [source3](https://github.com/MoonshotAI/kimi-code/blob/27bd9baba10e9f73d3db0e0fdd6f81046b4cbac9/LICENSE#L1). Representative source screening; no execution or admission.

<a id="langchain-ai-langchain"></a>
### LangChain

[langchain-ai/langchain](https://github.com/langchain-ai/langchain) · **Shortlisted / planned**

- **Purpose:** Agent construction and middleware configuration.
- **Architecture fit:** C / proposed BO-03: a distinct create_agent configuration alongside LangGraph.
- **Current status:** Selected source reviewed; initial-set admission still proposed. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Select a minimal current package/agent path, avoid legacy shims, qualify model/tool middleware and serialization/checkpoint state, per-integration secrets/egress, replay/idempotency, budgets and cancellation.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-09.
- **Record IDs:** `agent.langchain`.
- **Historical intake revision:** `1611938f49dda48aa069d1fdce429430257488b7`.

- **November 9 source assessment:** `source-reviewed-bounded` at `82f2e3f995abbba1304128a48d2cfb268bc1c755`.
  - LangChain remains a MIT integration/framework library rather than a finished assistant. Current README emphasizes model/tool/retrieval integrations, which each retain independent data and credential boundaries.
  - Current agent factory composes middleware and tool/model transformations; classic OpenAPI agent-toolkit paths in the collected packet are compatibility shims, so they must not be mistaken for the active execution implementation.
  - No provider integration or graph persistence was run; adding middleware/checkpoint plumbing alone does not establish Core authority or tool approval enforcement.
- **Assessment sources:** [source1](https://github.com/langchain-ai/langchain/blob/82f2e3f995abbba1304128a48d2cfb268bc1c755/LICENSE#L1); [source2](https://github.com/langchain-ai/langchain/blob/82f2e3f995abbba1304128a48d2cfb268bc1c755/README.md#L47); [source3](https://github.com/langchain-ai/langchain/blob/82f2e3f995abbba1304128a48d2cfb268bc1c755/libs/langchain_v1/langchain/agents/factory.py#L1); [source4](https://github.com/langchain-ai/langchain/blob/82f2e3f995abbba1304128a48d2cfb268bc1c755/libs/langchain_v1/langchain/agents/factory.py#L75); [source5](https://github.com/langchain-ai/langchain/blob/82f2e3f995abbba1304128a48d2cfb268bc1c755/libs/langchain/langchain_classic/agents/agent_toolkits/openapi/base.py#L1). Representative source screening; no execution or admission.

<a id="langchain-ai-langgraph"></a>
### LangGraph

[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) · **Shortlisted / planned**

- **Purpose:** Graph-based agent orchestration with persistence and interrupts.
- **Architecture fit:** C / BO-03: replaceable runtime; Core retains canonical state, grants and effects.
- **Current status:** Documentation researched; runtime behavior untested in Abrams.
- **Next gate:** Qualify exact graph/checkpointer/version pair, replay and external-effect idempotency, explicit server auth/tenant filters, interrupted-tool Stop and total provider cost; compare minimal Core adapter without moving canonical authority.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. October 16 carousel/README reconciliation confirms existing agent.langgraph; no duplicate record or execution/adoption. Dates: 2026-09-04, 2026-09-09, 2026-10-16.
- **Record IDs:** `agent.langgraph`.
- **Historical intake revision:** `e539ac122f4126f6dd850581c1494948cf620e31`, `e77a5cb08c1f3ff306d997dd76fc7169afdab5ea`.

- **November 9 source assessment:** `source-screened-not-tested` at `e5e37b5d70dbfd93c7006bd90a658c6179a95946`.
  - LangGraph remains low-level stateful orchestration, with durable-execution/human-interrupt claims requiring independent workload evidence.
  - create_react_agent is deprecated and moved to langchain.agents.create_agent; adapter comparisons must pin compatible LangChain/LangGraph APIs.
  - SDK Auth requires application-provided authentication/authorization handlers; example demonstrates explicit default deny, not automatic policy for every deployment.
- **Assessment sources:** [source1](https://github.com/langchain-ai/langgraph/blob/e5e37b5d70dbfd93c7006bd90a658c6179a95946/README.md#L24); [source2](https://github.com/langchain-ai/langgraph/blob/e5e37b5d70dbfd93c7006bd90a658c6179a95946/libs/prebuilt/langgraph/prebuilt/chat_agent_executor.py#L274); [source3](https://github.com/langchain-ai/langgraph/blob/e5e37b5d70dbfd93c7006bd90a658c6179a95946/libs/sdk-py/langgraph_sdk/auth/__init__.py#L13); [source4](https://github.com/langchain-ai/langgraph/blob/e5e37b5d70dbfd93c7006bd90a658c6179a95946/LICENSE#L1). Representative source screening; no execution or admission.

<a id="ruvnet-open-claude-code"></a>
### Open Claude Code (ruvnet)

[ruvnet/open-claude-code](https://github.com/ruvnet/open-claude-code) · **Shortlisted / planned**

- **Purpose:** Alternative coding-agent runtime implementation.
- **Architecture fit:** C / BO-03: independently qualify behind the same authority boundary.
- **Current status:** Blocked on clean-room and provenance evidence; no download, execution, reuse, distribution eligibility or adoption. A public MIT notice and v2 implementation do not establish rights in proprietary-derived material.
- **Next gate:** Retain provenance stop. Obtain independently verifiable clean-room development and distribution-rights evidence before considering reuse; public metadata or implementation features cannot clear this gate. No further implementation review for eligibility.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `agent.openclaude.ruvnet`.

- **November 9 source assessment:** `blocked-provenance` at `d6672914796622ee9ed6747aa436317c6adf7381`.
  - Provenance remains blocked. Collected public text was inspected before this stop was reasserted; implementation observations below do not establish clean-room origin or reuse eligibility.
  - Open Claude Code remains MIT with active v2 implementation and an archived earlier client; README still requires Anthropic API credentials for its documented simple path and disclaims full provider parity.
  - v2 delegation intersects requested tools with inherited parent names and registry membership. Permission checker supports an explicit bypassPermissions mode, so containment depends on exact effective configuration.
  - OAuth module includes multiple provider flows; these source paths do not establish subscription eligibility or approval for capturing credentials. Upstream tests and safety descriptions are not local measurements.
- **Assessment sources:** [source1](https://github.com/ruvnet/open-claude-code/blob/d6672914796622ee9ed6747aa436317c6adf7381/LICENSE#L1); [source2](https://github.com/ruvnet/open-claude-code/blob/d6672914796622ee9ed6747aa436317c6adf7381/README.md#L32); [source3](https://github.com/ruvnet/open-claude-code/blob/d6672914796622ee9ed6747aa436317c6adf7381/README.md#L92); [source4](https://github.com/ruvnet/open-claude-code/blob/d6672914796622ee9ed6747aa436317c6adf7381/v2/src/tools/agent.mjs#L145); [source5](https://github.com/ruvnet/open-claude-code/blob/d6672914796622ee9ed6747aa436317c6adf7381/v2/src/permissions/checker.mjs#L12); [source6](https://github.com/ruvnet/open-claude-code/blob/d6672914796622ee9ed6747aa436317c6adf7381/v2/src/auth/oauth.mjs#L1). Representative source screening; no execution or admission.

<a id="ymichael-open-codex"></a>
### Open Codex (ymichael)

[ymichael/open-codex](https://github.com/ymichael/open-codex) · **Shortlisted / planned**

- **Purpose:** Codex-derived agent runtime candidate.
- **Architecture fit:** C / BO-03: isolated worker; compare fork behavior independently.
- **Current status:** Planned; fork delta and WSL isolation review remain open.
- **Next gate:** Treat as conditional provider-routing/coding comparator; qualify Linux/WSL container isolation and shell/path/effect approvals, API dialect fidelity, retries/Stop and costs. Never import the broad always-sandbox claim as a guarantee.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `agent.opencodex.ymichael`.

- **November 9 source assessment:** `source-screened-not-tested` at `c15beb3a3f9ef393e597a1ea6d5c0c84022b36d3`.
  - This fork uses Chat Completions and multiple providers; it is separate from current official Codex app/CLI.
  - README says Linux has no default sandbox and Windows requires WSL2 despite another broad always-sandbox sentence; use explicit platform statement and implementation.
  - Executor selects macOS Seatbelt only for that sandbox enum and otherwise raw execution, with10 second default and optional shell interpretation; cancellation signal alone does not prove descendant retirement.
- **Assessment sources:** [source1](https://github.com/ymichael/open-codex/blob/c15beb3a3f9ef393e597a1ea6d5c0c84022b36d3/README.md#L6); [source2](https://github.com/ymichael/open-codex/blob/c15beb3a3f9ef393e597a1ea6d5c0c84022b36d3/README.md#L140); [source3](https://github.com/ymichael/open-codex/blob/c15beb3a3f9ef393e597a1ea6d5c0c84022b36d3/README.md#L350); [source4](https://github.com/ymichael/open-codex/blob/c15beb3a3f9ef393e597a1ea6d5c0c84022b36d3/codex-cli/src/utils/agent/exec.ts#L14); [source5](https://github.com/ymichael/open-codex/blob/c15beb3a3f9ef393e597a1ea6d5c0c84022b36d3/codex-cli/src/utils/agent/review.ts#L1). Representative source screening; no execution or admission.

<a id="composio-community-open-dot"></a>
### Open Dot

[composio-community/open-dot](https://github.com/composio-community/open-dot) · **Shortlisted / planned**

- **Purpose:** Assistant components spanning browser, approvals, schedules and voice.
- **Architecture fit:** E-I / Q-27: compare with Abrams controls and eligible assistant studies.
- **Current status:** Source screened; missing license evidence and execution eligibility unresolved.
- **Next gate:** Reuse rights, Windows fit, durable scheduling, exact grants and service qualification.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-10-03.
- **Record IDs:** `app.open-dot`.
- **Historical intake revision:** `f838e17cf5c3a88ade5ceea54680a8145d048c1d`.
- **Currentness (November 9):** `unchanged`; observed HEAD `f838e17cf5c3a88ade5ceea54680a8145d048c1d`. Matches a recorded revision; no runtime qualification implied.

<a id="gitlawb-openclaude"></a>
### OpenClaude (Gitlawb lineage)

[Twigpine/openclaude](https://github.com/Twigpine/openclaude) · **Shortlisted / planned**

- **Purpose:** Coding-agent CLI considered as an alternative runtime.
- **Architecture fit:** C / BO-03: separate candidate from ruvnet's similarly named project.
- **Current status:** Blocked pending provenance and distribution eligibility; not adopted.
- **Next gate:** Resolve exact historical artifact and reuse eligibility before runtime execution.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `agent.openclaude.gitlawb`.
- **Identity note:** recorded as `Gitlawb/openclaude`; current destination verified October 7. The redirect does not transfer historical results to new code.

- **November 9 source assessment:** `blocked-provenance` at `20b5645e983d5e40bf25cb556373da609b5a0155`.
  - Existing provenance/distribution block remains. Current root LICENSE says code derives from proprietary Claude Code; MIT covers contributor modifications only where legally permissible, not the original code.
  - No implementation use or runtime eligibility review performed after this stop; historical record retained.
- **Assessment sources:** [source1](https://github.com/Twigpine/openclaude/blob/20b5645e983d5e40bf25cb556373da609b5a0155/LICENSE#L5); [source2](https://github.com/Twigpine/openclaude/blob/20b5645e983d5e40bf25cb556373da609b5a0155/LICENSE#L13). Representative source screening; no execution or admission.

<a id="openclaw-openclaw"></a>
### OpenClaw

[openclaw/openclaw](https://github.com/openclaw/openclaw) · **Shortlisted / planned**

- **Purpose:** Assistant runtime/gateway and build-versus-adapt reference.
- **Architecture fit:** C and E-I by capability: one canonical authority owner must remain clear.
- **Current status:** Source researched; initial runtime-set admission unresolved. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Qualify exact plugin/channel/runtime identity, do not omit authority validator in adapters, require narrowly scoped account grants, pin data migrations and recipients, verify scheduled-action/effect recovery, Stop and aggregate cost.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-09.
- **Record IDs:** `agent.openclaw`.
- **Historical intake revision:** `78bfb8ad4674183268efdb954c6675b069c0cea4`.

- **November 9 source assessment:** `source-reviewed-bounded` at `bbf0d7380315f660bf79561223da1d34eadd4ac3`.
  - OpenClaw root metadata is2026.11.1 with SQLite/Postgres schema families and interchangeable channel/model plugins; local storage claims do not make connected provider inference local.
  - Runtime-authority helper validates when identity/validator exist but returns permissively when either is absent; its production-dispatch assumption must be preserved in any adapter.
  - GitHub OAuth implementation requests repo/workflow/read:org/gist/offline_access scope. This is a concrete broad-account scope to narrow or defer, not an implicit grant from the assistant catalog. MIT root scope remains separate from plugins.
- **Assessment sources:** [source1](https://github.com/openclaw/openclaw/blob/bbf0d7380315f660bf79561223da1d34eadd4ac3/LICENSE#L1); [source2](https://github.com/openclaw/openclaw/blob/bbf0d7380315f660bf79561223da1d34eadd4ac3/package.json#L1); [source3](https://github.com/openclaw/openclaw/blob/bbf0d7380315f660bf79561223da1d34eadd4ac3/README.md#L18); [source4](https://github.com/openclaw/openclaw/blob/bbf0d7380315f660bf79561223da1d34eadd4ac3/src/gateway/server-methods/agent-runtime-authority.ts#L5); [source5](https://github.com/openclaw/openclaw/blob/bbf0d7380315f660bf79561223da1d34eadd4ac3/src/agents/github-oauth-client.ts#L15). Representative source screening; no execution or admission.

<a id="copilotkit-openmuse"></a>
### OpenMuse

[CopilotKit/openmuse](https://github.com/CopilotKit/openmuse) · **Shortlisted / planned**

- **Purpose:** General-assistant components and whole-app adaptation reference.
- **Architecture fit:** E-I / Q-22: compare selected capabilities with Abrams controls.
- **Current status:** Researched; no live service or product adoption. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Compare sample, live browser, Docker and E2B separately; qualify single-owner token/proxy boundaries, provider-account scopes, mail/calendar approval and uncertain-effect reconciliation, browser isolation, all-worker Stop and paid costs.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-29.
- **Record IDs:** `app.openmuse`.
- **Historical intake revision:** `34b15bc80340e582fb8c25573646cfb0bbc5184d`.

- **November 9 source assessment:** `source-reviewed-bounded` at `a4944f4c471d3dc93b8bfc060b5da309b5216ab2`.
  - OpenMuse separates a local fictional sample from live mode requiring a CopilotKit Intelligence project key. Root0.1.0 metadata specifies pnpm11.19.0; README recommends Node24 while package accepts>=22.
  - SECURITY limits deployments to one owner/shared access key and says the private persistent Chromium worker runs without its internal sandbox. Optional Docker and E2B computer variants have different boundaries.
  - Google OAuth explicitly includes read-only mail/calendar scopes and optional sending scopes. Bearer-owner authentication and AbortSignal browser requests exist in source but do not demonstrate end-to-end effect safety. MIT root licensing remains.
- **Assessment sources:** [source1](https://github.com/CopilotKit/openmuse/blob/a4944f4c471d3dc93b8bfc060b5da309b5216ab2/README.md#L45); [source2](https://github.com/CopilotKit/openmuse/blob/a4944f4c471d3dc93b8bfc060b5da309b5216ab2/package.json#L1); [source3](https://github.com/CopilotKit/openmuse/blob/a4944f4c471d3dc93b8bfc060b5da309b5216ab2/LICENSE#L1); [source4](https://github.com/CopilotKit/openmuse/blob/a4944f4c471d3dc93b8bfc060b5da309b5216ab2/SECURITY.md#L9); [source5](https://github.com/CopilotKit/openmuse/blob/a4944f4c471d3dc93b8bfc060b5da309b5216ab2/apps/server/src/auth.ts#L26); [source6](https://github.com/CopilotKit/openmuse/blob/a4944f4c471d3dc93b8bfc060b5da309b5216ab2/apps/server/src/google-auth.ts#L108); [source7](https://github.com/CopilotKit/openmuse/blob/a4944f4c471d3dc93b8bfc060b5da309b5216ab2/apps/server/src/browser.ts#L73). Representative source screening; no execution or admission.

<a id="primeintellect-ai-prime-agent"></a>
### Prime Agent

[PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) · **Shortlisted / planned**

- **Purpose:** Persistent programmatic harness, lifecycle and reviewed learning patterns.
- **Architecture fit:** E/H/J / Q-28: compare harness components with single-agent controls.
- **Current status:** October 5 intake; documentation only, no execution. Worker isolation is not a security sandbox.
- **Next gate:** Compare current Rust RLM loop/components versus Core; exclude !command config until explicitly granted, qualify external sandbox/user rights, Windows lifecycle and all-worker shutdown, exact model egress and aggregate nested-call budgets.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-10-05.
- **Record IDs:** `agent.prime-agent`.
- **Historical intake revision:** `41e1f41c072e8f31ac6a79ad1b7fe19920c6d61f`.

- **November 9 source assessment:** `source-screened-not-tested` at `bfad069bf7ce95795886a0b5a74592d672b7f8bb`.
  - Current MIT Rust RLM harness documents Windows x64 installer checksum validation but explicitly says model-generated Python/project commands execute with user permissions, not a security sandbox.
  - Credential config values prefixed with ! execute shell commands; Unix uses bash and Windows configured shell or ComSpec, caching successful output. Config intake therefore carries code-execution authority.
  - Shutdown command claim does not demonstrate retirement of all model/Python/background descendants on this host.
- **Assessment sources:** [source1](https://github.com/PrimeIntellect-ai/prime-agent/blob/bfad069bf7ce95795886a0b5a74592d672b7f8bb/README.md#L49); [source2](https://github.com/PrimeIntellect-ai/prime-agent/blob/bfad069bf7ce95795886a0b5a74592d672b7f8bb/README.md#L111); [source3](https://github.com/PrimeIntellect-ai/prime-agent/blob/bfad069bf7ce95795886a0b5a74592d672b7f8bb/crates/pa-core/src/auth/resolve_config_value.rs#L11); [source4](https://github.com/PrimeIntellect-ai/prime-agent/blob/bfad069bf7ce95795886a0b5a74592d672b7f8bb/crates/pa-core/src/auth/resolve_config_value.rs#L53). Representative source screening; no execution or admission.

<a id="qwenlm-qwen-code"></a>
### Qwen Code

[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · **Shortlisted / planned**

- **Purpose:** Coding-agent runtime candidate.
- **Architecture fit:** C / BO-03: compare the adapter and runtime using model-neutral fixtures.
- **Current status:** Collected candidate; no completed runtime comparison. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Freeze CLI versus managed-server scope, exact model/account route, auth/TLS defaults and memory-root handling; qualify shell/CUA/MCP grants, credentials, all-child Stop, costs and recovery without treating multi-protocol support as portability proof.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `model.qwen-code`.

- **November 9 source assessment:** `source-reviewed-bounded` at `aeacedc4c4bbe41f38550ce7eac305ff086e9b2f`.
  - Qwen Code0.27.0 requires Node>=22 and pnpm11.24.0; README supports OpenAI/Anthropic/Gemini/Qwen protocols and local Ollama/vLLM, but protocol support is not account or route admission.
  - Managed-agent documentation distinguishes open versus HMAC-signed authentication and guards against non-loopback plaintext exposure. Memory-scoped permission code merges decisions and denies writes outside allowed roots/pinned memory.
  - Apache2.0 root notice remains. A generated OpenAPI document exceeded the bounded text read; implementation review used handwritten memory permissions and auth-provider helpers instead.
- **Assessment sources:** [source1](https://github.com/QwenLM/qwen-code/blob/aeacedc4c4bbe41f38550ce7eac305ff086e9b2f/README.md#L24); [source2](https://github.com/QwenLM/qwen-code/blob/aeacedc4c4bbe41f38550ce7eac305ff086e9b2f/LICENSE#L1); [source3](https://github.com/QwenLM/qwen-code/blob/aeacedc4c4bbe41f38550ce7eac305ff086e9b2f/package.json#L1); [source4](https://github.com/QwenLM/qwen-code/blob/aeacedc4c4bbe41f38550ce7eac305ff086e9b2f/packages/managed-agent-server/configuration-descriptions.json#L1); [source5](https://github.com/QwenLM/qwen-code/blob/aeacedc4c4bbe41f38550ce7eac305ff086e9b2f/packages/core/src/memory/memory-scoped-agent-config.ts#L68); [source6](https://github.com/QwenLM/qwen-code/blob/aeacedc4c4bbe41f38550ce7eac305ff086e9b2f/packages/core/src/memory/memory-scoped-agent-config.ts#L292). Representative source screening; no execution or admission.

<a id="truefoundry-trueforge"></a>
### TrueForge

[truefoundry/trueforge](https://github.com/truefoundry/trueforge) · **Shortlisted / planned**

- **Purpose:** Agent framework candidate in the frozen runtime inventory.
- **Architecture fit:** C / BO-03: compare runtime conformance, separate from model quality.
- **Current status:** Collected in the initial catalog; qualification unrun.
- **Next gate:** Inspect concrete authorizer and tool invocation/approval path before integration; qualify Daytona provisioning/secrets/egress, tenant resources, cancellation/replay, Windows server support and total sandbox/model spend. Retain Core authority and compare minimal components.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `agent.trueforge`.


## Decision components

- **November 9 source assessment:** `source-screened-not-tested` at `c29131547d50e344adaeaf115bcacd32838d5a8e`.
  - MIT Node 22.14+ harness exposes UI/API/SDK and model/MCP/skills catalogs, with Daytona sandbox provider described separately from local harness.
  - Permissions adapter only lists permissions; actual API resolves request context and dispatches typed resource scope to injected authorizer. Listing a permission is not enforcement evidence for each effect.
- **Assessment sources:** [source1](https://github.com/truefoundry/trueforge/blob/c29131547d50e344adaeaf115bcacd32838d5a8e/README.md#L34); [source2](https://github.com/truefoundry/trueforge/blob/c29131547d50e344adaeaf115bcacd32838d5a8e/package.json#L1); [source3](https://github.com/truefoundry/trueforge/blob/c29131547d50e344adaeaf115bcacd32838d5a8e/packages/trueforge/src/apis/permissions.ts#L24). Representative source screening; no execution or admission.

<a id="elevatormusic-hermes-warm-compaction"></a>
### Hermes Warm Compaction

[Elevatormusic/hermes-warm-compaction](https://github.com/Elevatormusic/hermes-warm-compaction) · **Shortlisted / planned**

- **Purpose:** Hermes context compaction using a cached main-model handoff, retained tail and tool-derived work ledger.
- **Architecture fit:** E/H/J / Q-103: General-assistant continuity and bake-off context fidelity versus native summaries, Q-11A Jev and bounded Core projections.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal. Cache benefit is route/server-dependent; historical synthetic results do not qualify current behavior. Hermes plugin is not durable canonical memory.
- **Next gate:** Compare pinned plugin, eligible ledger/layout components, minimal original Core projection and deferral; qualify exact host/provider/cache path, fallback egress, evidence/constraint retention, clipping, route races, cancellation, costs and rollback.
- **Evidence:** Pinned README/provider-support, Python/plugin metadata and selected engine/warm/fallback/ledger/register source reviewed; no installation, host configuration, provider/model calls, benchmark replication or full audit. Dates: 2026-10-19.
- **Registered records:** `context.hermes-warm-compaction`
- **Recorded intake revision:** `be1ca35321d5eb61de8c593dcd8011e205928b9d`

- **November 9 source assessment:** `reviewed` at `b95952763305bfbe2e6ea8d1653bcf046c732aff`.
  - Current source replays captured main-model request with new rows for cache reuse, then deterministic work ledger; fallback can use an auxiliary model and ledger-only result if model summaries fail. Cache benefit remains route/server-dependent.
  - Warm request implementation rejects history drift via row digests/tool-call matching and uses300-second HTTP timeout; these are concrete source controls, not proof of cancellation or semantic evidence retention.
  - README synthetic ten-case DGX/LM Studio measurements remain vendor evidence, not Abrams results.
- **Assessment sources:** [source1](https://github.com/Elevatormusic/hermes-warm-compaction/blob/b95952763305bfbe2e6ea8d1653bcf046c732aff/README.md#L73); [source2](https://github.com/Elevatormusic/hermes-warm-compaction/blob/b95952763305bfbe2e6ea8d1653bcf046c732aff/README.md#L36); [source3](https://github.com/Elevatormusic/hermes-warm-compaction/blob/b95952763305bfbe2e6ea8d1653bcf046c732aff/warm_compaction/warm.py#L27); [source4](https://github.com/Elevatormusic/hermes-warm-compaction/blob/b95952763305bfbe2e6ea8d1653bcf046c732aff/warm_compaction/warm.py#L55). Representative source screening; no execution or admission.

<a id="logicrw-awesome-jev-projects"></a>
### Awesome Jev Projects

[logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) · **Collected reference**

- **Purpose:** Discovery directory for Jev applications and reference implementations.
- **Architecture fit:** Q-10/Q-11 discovery support; entries are not automatically candidates.
- **Current status:** Collected reference; directory contents are not bulk-admitted. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain discovery-reference status; admit each named upstream independently with pinned source/provenance, model egress and rights review. If reusing radar, isolate GitHub tokens, fetched untrusted text and publication permissions; no directory-wide adoption.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-23.
- **Historical intake revision:** `0c003c525f73db1d286c3acfd9c30315dd2dc2af`.

- **November 9 source assessment:** `source-reviewed-bounded` at `2edd51355ec72bd2638caa1c3058f76aec144e3b`.
  - This is a static directory/build project, not an admitted set of Jev integrations. SECURITY explicitly describes unauthenticated static browsing and says third-party text is data rather than executed code.
  - Radar implementation checks exact TypeSafe/OpenRouter decision markers and implementation evidence; directory inclusion is heuristic evidence, not accuracy, safety or current runtime qualification.
  - MIT root notice and package build/radar scripts were inspected. Generated README exceeded500KB; bounded review used handwritten radar implementation and frontend entry points, without bulk-admitting directory entries.
- **Assessment sources:** [source1](https://github.com/logicrw/awesome-jev-projects/blob/2edd51355ec72bd2638caa1c3058f76aec144e3b/LICENSE#L1); [source2](https://github.com/logicrw/awesome-jev-projects/blob/2edd51355ec72bd2638caa1c3058f76aec144e3b/package.json#L1); [source3](https://github.com/logicrw/awesome-jev-projects/blob/2edd51355ec72bd2638caa1c3058f76aec144e3b/SECURITY.md#L1); [source4](https://github.com/logicrw/awesome-jev-projects/blob/2edd51355ec72bd2638caa1c3058f76aec144e3b/scripts/radar-sync.mjs#L1); [source5](https://github.com/logicrw/awesome-jev-projects/blob/2edd51355ec72bd2638caa1c3058f76aec144e3b/scripts/radar-sync.mjs#L69); [source6](https://github.com/logicrw/awesome-jev-projects/blob/2edd51355ec72bd2638caa1c3058f76aec144e3b/scripts/radar-sync.mjs#L395); [source7](https://github.com/logicrw/awesome-jev-projects/blob/2edd51355ec72bd2638caa1c3058f76aec144e3b/src/main.tsx#L1). Representative source screening; no execution or admission.

<a id="qkal-canny"></a>
### Canny

[qkal/Canny](https://github.com/qkal/Canny) · **Collected reference**

- **Purpose:** Deterministic completion ledger with optional model advice.
- **Architecture fit:** H / Q-11C reference: advice cannot replace acceptance checks.
- **Current status:** Researched reference; no completion-accuracy result.
- **Next gate:** Compare evidence/done-gate heuristics with Core deterministic receipts; preserve fail-open/non-strict semantics, review trusted configuration path, collect false-pass/false-block labels, Jev egress/full costs and complete hook disable/rollback.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-20.

- **November 9 source assessment:** `source-screened-not-tested` at `f2c5e53779445d60dc4a09d2dbced2308fccb820`.
  - Current Canny is a coding-supervision ledger/done gate; Jev optional judgment remains distinct from deterministic facts.
  - Config explicitly documents fail-open hooks and a non-strict Stop mode that allows second stop with warning; strict mode changes that behavior.
  - Workspace weakening fields are ignored until exact contents are trusted; user trust store hashes content, reducing silent agent-edited configuration weakening but not proving runtime isolation.
- **Assessment sources:** [source1](https://github.com/qkal/Canny/blob/f2c5e53779445d60dc4a09d2dbced2308fccb820/README.md#L1); [source2](https://github.com/qkal/Canny/blob/f2c5e53779445d60dc4a09d2dbced2308fccb820/src/config.ts#L7); [source3](https://github.com/qkal/Canny/blob/f2c5e53779445d60dc4a09d2dbced2308fccb820/src/config.ts#L45). Representative source screening; no execution or admission.

<a id="tamaratran-fast-jev-compaction"></a>
### Fast Jev Compaction

[tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) · **Collected reference**

- **Purpose:** Keep, truncate and drop decisions for conversation context.
- **Architecture fit:** E/H / Q-11A reference: compare compaction with existing context selection.
- **Current status:** Documentation reference; no measured token or task-quality gain.
- **Next gate:** Pin exact Jev endpoint/model and explicit cancellation/timeout; label retention of constraints/errors/receipts and malformed-score failure behavior on matched replays; account full repeated-state tokens, privacy and plugin history mutation.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-20.

- **November 9 source assessment:** `reviewed` at `e3f262a7f4d42bd8dd32ced30d26176f7cb545b0`.
  - Current implementation defaults keep threshold0.5,6recent messages,25k estimated state and30k estimated request tokens; it uses separate keep-call/keep-result judgment questions.
  - Client sends conversation-derived state to configurable Jev HTTP route with API key; shown fetch path has no AbortSignal or explicit timeout. Deleting/truncating evidence can still lose essential constraints even when kept text remains verbatim.
- **Assessment sources:** [source1](https://github.com/tamaratran/fast-jev-compaction/blob/e3f262a7f4d42bd8dd32ced30d26176f7cb545b0/src/compact.ts#L17); [source2](https://github.com/tamaratran/fast-jev-compaction/blob/e3f262a7f4d42bd8dd32ced30d26176f7cb545b0/src/compact.ts#L56); [source3](https://github.com/tamaratran/fast-jev-compaction/blob/e3f262a7f4d42bd8dd32ced30d26176f7cb545b0/src/client.ts#L36). Representative source screening; no execution or admission.

<a id="thruwire-foreman"></a>
### Foreman

[thruwire/foreman](https://github.com/thruwire/foreman) · **Shortlisted / planned**

- **Purpose:** Decision-model supervision of coding-worker progress, drift, stalls and completion.
- **Architecture fit:** H/J / Q-56 alongside Q-11C: advisory supervision; Core owns Stop, retries and grants.
- **Current status:** Source researched; planned and untested. No demonstrated supervisory advantage or runtime admission.
- **Next gate:** Replay frozen stalled, legitimately slow and false-completion traces against deterministic heuristics; assess calibration, harmful interventions, independent outputs, cost, egress and exact worker/host containment.
- **Evidence:** Pinned README, evidence/routing/feasibility docs, package and security metadata reviewed; no execution or full audit. Dates: 2026-09-22, 2026-10-16.
- **Registered records:** supervision.foreman
- **Recorded intake revision:** c3142ef636617f32f772140125aa310d81ceece9
- **Currentness (November 9):** `unchanged`; observed HEAD `c3142ef636617f32f772140125aa310d81ceece9`. Matches a recorded revision; no runtime qualification implied.

<a id="sutro-sh-jev-align"></a>
### Jev Align

[sutro-sh/jev-align](https://github.com/sutro-sh/jev-align) · **Collected reference**

- **Purpose:** Reviewed labels and definition revisions for typed decisions.
- **Architecture fit:** Later J / Q-11-related idea: controlled improvement with an untouched holdout.
- **Current status:** Collected in September 22 research; not a newly registered candidate. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Keep collected-reference status unless individually registered; protect holdouts and total optimization budgets, qualify backend/registry recipients and credential file permissions, prohibit automatic publish/promotion, and verify cancellation/export.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-22.

- **November 9 source assessment:** `source-reviewed-bounded` at `5390ee05e4d9863e1c1eb623ca60c9c7bec27128`.
  - jev-align0.1.9 is an Apache2.0 Python>=3.11 alpha optimization/evaluation toolkit with multiple backends, not only a Jev runtime.
  - Registry authentication uses GitHub device/OAuth flows and defaults to ai-functions.dev; its local credential writer and hosted worker auth introduce separate secret-storage and network scopes.
  - Optimization and registry publishing must remain separate from protected evaluator/holdout authority. No evaluation improvement, hosted function or provider cost was measured here.
- **Assessment sources:** [source1](https://github.com/sutro-sh/jev-align/blob/5390ee05e4d9863e1c1eb623ca60c9c7bec27128/LICENSE#L1); [source2](https://github.com/sutro-sh/jev-align/blob/5390ee05e4d9863e1c1eb623ca60c9c7bec27128/pyproject.toml#L5); [source3](https://github.com/sutro-sh/jev-align/blob/5390ee05e4d9863e1c1eb623ca60c9c7bec27128/README.md#L20); [source4](https://github.com/sutro-sh/jev-align/blob/5390ee05e4d9863e1c1eb623ca60c9c7bec27128/README.md#L89); [source5](https://github.com/sutro-sh/jev-align/blob/5390ee05e4d9863e1c1eb623ca60c9c7bec27128/src/jev_align/registry_auth.py#L19); [source6](https://github.com/sutro-sh/jev-align/blob/5390ee05e4d9863e1c1eb623ca60c9c7bec27128/src/jev_align/registry_auth.py#L128); [source7](https://github.com/sutro-sh/jev-align/blob/5390ee05e4d9863e1c1eb623ca60c9c7bec27128/ai-functions.dev/worker/auth.ts#L1). Representative source screening; no execution or admission.

<a id="0xnatoshi-jev-codex-router"></a>
### Jev Codex Router

[0xNatoshi/jev-codex-router](https://github.com/0xNatoshi/jev-codex-router) · **Collected reference**

- **Purpose:** Per-turn model selection reference.
- **Architecture fit:** E/H / Q-11D: compare advisory selection over identical eligible routes.
- **Current status:** Archived upstream; retained as a pinned historical per-call routing/component reference, source-screened but untested and not admitted. No current quota savings claim.
- **Next gate:** Qualify exact Codex/router provider and reasoning contracts, local credential protection/egress, held-out per-turn routing and fallback, full continuations/cost/latency and cancellation. Keep historical simulation separate from current measured benefit.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-20.

- **November 9 source assessment:** `source-screened-not-tested` at `8701ef788aa8cb0948f299538747fb01029d32b8`.
  - GitHub repository metadata observed November9 marks this repository archived. Retain as a pinned historical router/component reference; new integration needs an explicit maintenance/security ownership decision.
  - Current router chooses model and thinking effort per continuation; README explicitly labels60 percent saving as historical simulation, not measured current Codex quota savings.
  - Quickstart remains macOS Codex desktop plus Node 22.19/Python 3.11/TypeSafe; Windows parity unproven.
  - Local transport credential provisioner preserves existing nonempty key or creates32 random bytes then delegates credential transaction; it does not validate the external Jev model route.
- **Assessment sources:** [source1](https://github.com/0xNatoshi/jev-codex-router/blob/8701ef788aa8cb0948f299538747fb01029d32b8/README.md#L8); [source2](https://github.com/0xNatoshi/jev-codex-router/blob/8701ef788aa8cb0948f299538747fb01029d32b8/README.md#L299); [source3](https://github.com/0xNatoshi/jev-codex-router/blob/8701ef788aa8cb0948f299538747fb01029d32b8/server/configure-auth.mjs#L8). Representative source screening; no execution or admission.

<a id="jkudish-jev-mcp"></a>
### Jev MCP

[jkudish/jev-mcp](https://github.com/jkudish/jev-mcp) · **Collected reference**

- **Purpose:** Ranking and evidence-assessment tools through MCP.
- **Architecture fit:** E/F / Q-11B reference and direct-versus-wrapper comparison.
- **Current status:** Documentation researched; no admitted MCP or model route.
- **Next gate:** Preserve independent labels; qualify each of12tool semantics and abstention, exact pinned provider route/egress, transport auth/TLS, import-versus-bin side effects, bounded retries, cancellation and total costs before admission.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-20.

- **November 9 source assessment:** `reviewed` at `d119eb5c3555d1daff5e6923d2d3cf8225a8d796`.
  - README now exposes12judgment tools including diff review and completion gate; tool verdicts remain probabilistic evidence rather than authorization or independently calibrated correctness.
  - Transport default is stdio; shared HTTP requires separate auth/TLS ingress and bounded concurrency/body policy. Source createServer is side-effect-free; bin chooses transport.
  - Provider model resolves JEV_MCP_MODEL or mutable jev-latest and provider envelopes are normalized before tools interpret answers; exact provider/model/retry/cancellation contracts remain unqualified.
- **Assessment sources:** [source1](https://github.com/jkudish/jev-mcp/blob/d119eb5c3555d1daff5e6923d2d3cf8225a8d796/README.md#L12); [source2](https://github.com/jkudish/jev-mcp/blob/d119eb5c3555d1daff5e6923d2d3cf8225a8d796/README.md#L148); [source3](https://github.com/jkudish/jev-mcp/blob/d119eb5c3555d1daff5e6923d2d3cf8225a8d796/src/server.ts#L88); [source4](https://github.com/jkudish/jev-mcp/blob/d119eb5c3555d1daff5e6923d2d3cf8225a8d796/src/server.ts#L117). Representative source screening; no execution or admission.

<a id="browser-use-jev-ultrafast"></a>
### Jev Ultrafast

[browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) · **Shortlisted / planned**

- **Purpose:** Browser action-selection component.
- **Architecture fit:** G / Q-10: compare decisions with deterministic and general-model controls.
- **Current status:** Selected source reviewed; no browser task benchmark or model call qualification. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Pin decision and typing model identities separately; benchmark complete accepted browser tasks, stale/uncertain-action recovery, grants and privacy redaction, total calls/latency/cost, owned-target cleanup and Stop on authorized synthetic pages.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-20.
- **Record IDs:** `browser.jev-ultrafast`.
- **Historical intake revision:** `1231850a0bf1a0c0341fe408ef1668dbbfdfac46`.

- **November 9 source assessment:** `source-reviewed-bounded` at `8251e272398011cdef648965204d1c20cd838333`.
  - Jev Ultrafast remains a typed decision browser demo rather than a text-generating general assistant. Python>=3.12 uses browser-harness0.1.13; TypeSafe selects and a separate optional text model writes field values.
  - Agent consumes a decision before mutation, checks observed fingerprints/freshness, enforces model-call/action budgets and records execution before the next observation. Browser implementation rechecks node visibility/connectivity and closes its owned target.
  - model.py sends observed page URL/title/text to api.typesafe.ai and uses mutable jev-latest by default. Field generation requires a separate key/model; fast decision time alone excludes that cost and browser settling.
- **Assessment sources:** [source1](https://github.com/browser-use/jev-ultrafast/blob/8251e272398011cdef648965204d1c20cd838333/LICENSE#L1); [source2](https://github.com/browser-use/jev-ultrafast/blob/8251e272398011cdef648965204d1c20cd838333/pyproject.toml#L1); [source3](https://github.com/browser-use/jev-ultrafast/blob/8251e272398011cdef648965204d1c20cd838333/jev_ultrafast/agent.py#L65); [source4](https://github.com/browser-use/jev-ultrafast/blob/8251e272398011cdef648965204d1c20cd838333/jev_ultrafast/agent.py#L120); [source5](https://github.com/browser-use/jev-ultrafast/blob/8251e272398011cdef648965204d1c20cd838333/jev_ultrafast/browser.py#L88); [source6](https://github.com/browser-use/jev-ultrafast/blob/8251e272398011cdef648965204d1c20cd838333/jev_ultrafast/browser.py#L140); [source7](https://github.com/browser-use/jev-ultrafast/blob/8251e272398011cdef648965204d1c20cd838333/jev_ultrafast/model.py#L107); [source8](https://github.com/browser-use/jev-ultrafast/blob/8251e272398011cdef648965204d1c20cd838333/jev_ultrafast/model.py#L160). Representative source screening; no execution or admission.

<a id="moritzkremb-jev-voice-browser"></a>
### Jev Voice Browser

[moritzkremb/jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) · **Collected reference**

- **Purpose:** Incremental voice interpretation and browser-control reference.
- **Architecture fit:** Later G/I: speech interpretation and browser effects have separate boundaries.
- **Current status:** Collected research; no voice, microphone or browser-control admission.
- **Next gate:** Keep prototype/reference status; qualify mic/speech/Jev egress grants, stale targets, destructive-effect confirmation and exact host matching, independent action outcome, Windows headed browser behavior and immediate input/recognizer/requests Stop.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-22.

- **November 9 source assessment:** `source-screened-not-tested` at `198a0764395a666f8398026c0d8abdaf6d1866c5`.
  - Voice demo sends partial Web Speech transcripts to Node then Jev for typed intent/target selection; speech and page-data recipients are separate from browser execution.
  - Executor retries navigation and can accept changed URL containing target host; click failure falls back to DOM el.click, which can change action semantics.
  - Type action may submit Enter after filling; action success flags are not independent outcome or authorization proof.
- **Assessment sources:** [source1](https://github.com/moritzkremb/jev-voice-browser/blob/198a0764395a666f8398026c0d8abdaf6d1866c5/README.md#L1); [source2](https://github.com/moritzkremb/jev-voice-browser/blob/198a0764395a666f8398026c0d8abdaf6d1866c5/src/executor.js#L31). Representative source screening; no execution or admission.

<a id="jkrup-jeveryword"></a>
### Jeveryword

[jkrup/jeveryword](https://github.com/jkrup/jeveryword) · **Collected reference**

- **Purpose:** Field extraction using original source-word spans and offsets.
- **Architecture fit:** F/H research and ingestion reference; outputs remain proposals.
- **Current status:** Experimental reference; no Abrams extraction benchmark.
- **Next gate:** Retain exact-span/wrong-subject/abstention labels; explicitly admit or disable Gateway-to-TypeSafe fallback, pin effective model/recipient, verify disconnect/timeout, retry costs and source-data egress before real-data use.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-22.

- **November 9 source assessment:** `reviewed` at `6fed1518bbb84cc4865401630f37c01dc3decc10`.
  - Extraction returns exact input substrings/offsets via numbered-word choices, but README still calls it experimental without benchmark; offset identity does not prove correct subject/field.
  - Client now supports Vercel Gateway first with persistent fallback to TypeSafe when both credentials exist, bounded retries and shouldContinue hook. This changes recipient/route on failure and must not silently bypass manual selection/privacy/budget policy.
- **Assessment sources:** [source1](https://github.com/jkrup/jeveryword/blob/6fed1518bbb84cc4865401630f37c01dc3decc10/README.md#L32); [source2](https://github.com/jkrup/jeveryword/blob/6fed1518bbb84cc4865401630f37c01dc3decc10/README.md#L27); [source3](https://github.com/jkrup/jeveryword/blob/6fed1518bbb84cc4865401630f37c01dc3decc10/src/client.mjs#L38); [source4](https://github.com/jkrup/jeveryword/blob/6fed1518bbb84cc4865401630f37c01dc3decc10/src/client.mjs#L40). Representative source screening; no execution or admission.

<a id="fazlerocks-jevmail"></a>
### Jevmail

[fazlerocks/jevmail](https://github.com/fazlerocks/jevmail) · **Collected reference**

- **Purpose:** Message classification and attention queues.
- **Architecture fit:** Later integration reference; separate predictions, corrections and source messages.
- **Current status:** Collected research; no inbox connection or model route admitted. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Keep collected research; compare synthetic multi-domain triage against rules/other decision models, qualify Gmail token retention, exact Gateway recipient/state minimization, calibration and abstention, user overrides, budgets and deletion.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-22.

- **November 9 source assessment:** `source-reviewed-bounded` at `f6f20af9c2805efd924c29cbea59547e72c558fc`.
  - Jevmail remains a read-only Gmail prioritization reference: auth.ts requests gmail.readonly and implements Google token refresh, which still exposes sensitive inbox data to the application.
  - Classification calls evaluate with typesafe-ai/jev and maxRetries0; model ID and token usage are returned for reporting. Read-only mail permission does not prevent mail-derived state from being sent through a model gateway.
  - MIT root scope and0.1.0 Next app metadata remain; no inbox, OAuth grant, Gateway account, relevance result or per-mail cost was exercised.
- **Assessment sources:** [source1](https://github.com/fazlerocks/jevmail/blob/f6f20af9c2805efd924c29cbea59547e72c558fc/LICENSE#L1); [source2](https://github.com/fazlerocks/jevmail/blob/f6f20af9c2805efd924c29cbea59547e72c558fc/package.json#L1); [source3](https://github.com/fazlerocks/jevmail/blob/f6f20af9c2805efd924c29cbea59547e72c558fc/src/auth.ts#L1); [source4](https://github.com/fazlerocks/jevmail/blob/f6f20af9c2805efd924c29cbea59547e72c558fc/src/auth.ts#L24); [source5](https://github.com/fazlerocks/jevmail/blob/f6f20af9c2805efd924c29cbea59547e72c558fc/src/lib/classify.ts#L1); [source6](https://github.com/fazlerocks/jevmail/blob/f6f20af9c2805efd924c29cbea59547e72c558fc/src/lib/classify.ts#L105). Representative source screening; no execution or admission.

<a id="keltokhy-jlink"></a>
### Jlink

[keltokhy/jlink](https://github.com/keltokhy/jlink) · **Collected reference**

- **Purpose:** Candidate generation and typed pair judgments for record matching.
- **Architecture fit:** F/H deduplication reference; propose links while preserving originals.
- **Current status:** Collected research; upstream mixed results are not Abrams measurements.
- **Next gate:** Compare deterministic linkage/blocking versus Jev with authorized synthetic records and held-out false-merge labels; pin external jevkit runtime, establish provider fields/retention/cost reservations and in-flight cancellation; qualify core Python and each language binding separately.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-22.

- **November 9 source assessment:** `source-screened-not-tested` at `d3ab99f583a13b732738acb1fb9b7d887fa8649f`.
  - jlink is record linkage, not a general assistant; natural-language identity/rule questions send selected record fields to Jev.
  - Current judge defaults5 dollar budget and32 concurrency; None means unlimited and zero still allows exact/cached/already-in-flight answers. Exact-text acceptance is opt-in.
  - README warns Stata/R convenience integrations do not yet support Windows; core Python route requires its own host evidence and datasets retain separate terms.
- **Assessment sources:** [source1](https://github.com/keltokhy/jlink/blob/d3ab99f583a13b732738acb1fb9b7d887fa8649f/src/jlink/judge.py#L1); [source2](https://github.com/keltokhy/jlink/blob/d3ab99f583a13b732738acb1fb9b7d887fa8649f/src/jlink/judge.py#L45); [source3](https://github.com/keltokhy/jlink/blob/d3ab99f583a13b732738acb1fb9b7d887fa8649f/src/jlink/judge.py#L87); [source4](https://github.com/keltokhy/jlink/blob/d3ab99f583a13b732738acb1fb9b7d887fa8649f/README.md#L491); [source5](https://github.com/keltokhy/jlink/blob/d3ab99f583a13b732738acb1fb9b7d887fa8649f/pyproject.toml#L1). Representative source screening; no execution or admission.

<a id="jaredpalmer-kev"></a>
### Kev

[jaredpalmer/kev](https://github.com/jaredpalmer/kev) · **Shortlisted / planned**

- **Purpose:** Self-hosted typed-decision models.
- **Architecture fit:** E/H / Q-24: classification, evidence triage and separately scoped routing advice.
- **Current status:** Researched; Windows feasibility unresolved; reviewed 0.8B tool routing excluded.
- **Next gate:** Keep0.8B tool-routing exclusion/history; qualify exact checkpoint/revision/calibration/backend rather than jev-latest alias, auth/bind and truncation, Windows/RAM/KVresources, independent labels and full costs.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-29.
- **Record IDs:** `decision.kev`.
- **Historical intake revision:** `0fe8fc97c2bcc247fa3efb6e5c32af4e99770e91`.

- **November 9 source assessment:** `reviewed` at `2074cc44256200bb37540103fa4572901faa10f3`.
  - Current README advertises0.8B/4B/9B/27B checkpoint family on Qwen3.5/3.8, recommends4B, and distinguishes checkpoint-specific validated context. Marketing/API compatibility is not quality equivalence to Jev.
  - Serving source opens without auth when KEV_API_KEY unset, exposes kev-latest and jev-latest aliases for same checkpoint, and rejects overlong input by default unless explicit truncation enabled. Exact checkpoint identity cannot come from alias alone.
  - CUDA/MLX and CPU serving paths exist; Windows-specific runtime/resource eligibility and historical0.8B tool-routing exclusion remain unresolved.
- **Assessment sources:** [source1](https://github.com/jaredpalmer/kev/blob/2074cc44256200bb37540103fa4572901faa10f3/README.md#L28); [source2](https://github.com/jaredpalmer/kev/blob/2074cc44256200bb37540103fa4572901faa10f3/kev/serve.py#L6); [source3](https://github.com/jaredpalmer/kev/blob/2074cc44256200bb37540103fa4572901faa10f3/kev/serve.py#L35). Representative source screening; no execution or admission.

<a id="nandhakishorm-laya"></a>
### Laya

[NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) · **Tested / not admitted**

- **Purpose:** Typed-decision classifier evaluated for developer task routing.
- **Architecture fit:** Separate development experiment; no product Auto-router adoption.
- **Current status:** Tested, not admitted: 18/40 ordinary proposals acceptable (45% vs 90% gate); earlier memory failed. October 4 retry stopped without a new score. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain tested/not-admitted historical disposition; separately pin current model/config/backend, require explicit server auth and recipients, satisfy resource admission, then obtain a separately authorized preregistered quality/memory/cost/Stop rerun.
- **Evidence:** September 29 development-selector receipts and October 4 cancelled rerun; model quality, memory and timing scopes remain separate. Dates: 2026-09-29, 2026-10-04.

- **November 9 source assessment:** `source-reviewed-bounded` at `b8a0f0991d95a953411f2e16f91bddc2ffdaf79a`.
  - Laya current package0.4.30 is Apache2.0 Python>=3.10, substantially separate from the frozen failed development-selector experiment; current source cannot overwrite18/40 historical results.
  - SECURITY explicitly states LAYA_API_KEY is optional and the server is unauthenticated when unset. MCP can target a configurable remote server, separating inference host from local connector.
  - Agent and ONNX loaders use restricted allow_patterns for model artifacts; that reduces fetch scope but does not establish model provenance, hardware readiness or decision quality. No model files were downloaded.
- **Assessment sources:** [source1](https://github.com/NandhaKishorM/laya/blob/b8a0f0991d95a953411f2e16f91bddc2ffdaf79a/LICENSE#L1); [source2](https://github.com/NandhaKishorM/laya/blob/b8a0f0991d95a953411f2e16f91bddc2ffdaf79a/pyproject.toml#L5); [source3](https://github.com/NandhaKishorM/laya/blob/b8a0f0991d95a953411f2e16f91bddc2ffdaf79a/SECURITY.md#L59); [source4](https://github.com/NandhaKishorM/laya/blob/b8a0f0991d95a953411f2e16f91bddc2ffdaf79a/laya/mcp/server.py#L145); [source5](https://github.com/NandhaKishorM/laya/blob/b8a0f0991d95a953411f2e16f91bddc2ffdaf79a/laya/agent.py#L648); [source6](https://github.com/NandhaKishorM/laya/blob/b8a0f0991d95a953411f2e16f91bddc2ffdaf79a/laya/onnx_agent.py#L160). Representative source screening; no execution or admission.

<a id="mizorewww-laya-coreml"></a>
### Laya CoreML

[mizorewww/laya-coreml](https://github.com/mizorewww/laya-coreml) · **Shortlisted / planned**

- **Purpose:** Apple CoreML conversion and local decision-model backend.
- **Architecture fit:** E/F/H / Q-12: conversion fidelity and task quality are separate questions.
- **Current status:** Hardware-deferred on this Windows host; not the tested Linux Laya configuration.
- **Next gate:** Retain Mac-only comparative lane and original failed/unadmitted Laya evidence separately; pin exact converted model/weights and conversion versions, label per-language/task calibration, memory/thermal/energy costs and route timeout/Stop before host use.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-21.
- **Record IDs:** `decision.laya-coreml`.
- **Historical intake revision:** `12b7501583c7f03a6b2e49ebe118a2c6302505b9`.

- **November 9 source assessment:** `source-screened-not-tested` at `a51fa1751fbb90c4a322bd1d42eed941179a2573`.
  - Still Apple Silicon/macOS15+/Python 3.11-3.13, not Windows local backend; new README timing is M3 Max upstream claim, not Abrams measured performance.
  - Router now distinguishes English, multilingual and typed-decisions checkpoints; source documents poor high-confidence off-English behavior and makes typed-decisions auto-routing opt-in.
  - Default model identifiers resolve mutable hub checkpoints; source pin alone does not freeze downloaded CoreML artifacts/conversion provenance.
- **Assessment sources:** [source1](https://github.com/mizorewww/laya-coreml/blob/a51fa1751fbb90c4a322bd1d42eed941179a2573/README.md#L3); [source2](https://github.com/mizorewww/laya-coreml/blob/a51fa1751fbb90c4a322bd1d42eed941179a2573/laya_coreml/router.py#L1); [source3](https://github.com/mizorewww/laya-coreml/blob/a51fa1751fbb90c4a322bd1d42eed941179a2573/laya_coreml/router.py#L56); [source4](https://github.com/mizorewww/laya-coreml/blob/a51fa1751fbb90c4a322bd1d42eed941179a2573/NOTICE#L1). Representative source screening; no execution or admission.

<a id="bespokelabsai-nimble"></a>
### Nimble

[bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) · **Shortlisted / planned**

- **Purpose:** Local typed-decision model and contrastive-fixture reference.
- **Architecture fit:** E/F/H / Q-13: compare with rules, eligible Jev/Laya and matched base Qwen.
- **Current status:** Documentation researched; source/model eligibility and serving resources unresolved.
- **Next gate:** Resolve explicit root/code/model/dataset rights; qualify exact GPU/MLX or Windows backend,8192-versus2048length quality, calibration, frontend auth/egress and bind, checkpoint/compiler contracts, Stop and full RAM/VRAM/cost.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-21.
- **Record IDs:** `decision.nimble`.
- **Historical intake revision:** `f136b3f75721fda4ea961f73993cc50b08488835`.

- **November 9 source assessment:** `reviewed` at `4edb0703a2e75d0170c3a45645a1961f4d1a2867`.
  - Current source describes typed choice/noul decisions from Qwen3.5-9B; no root LICENSE appears in captured complete tree, while plugin skill has its own LICENSE. Repository/code/model/data rights need explicit resolution rather than borrowed skill license.
  - Serving source verifies prompt compiler SHA against training contract, defaults8192prompt tokens versus2048trained budget, and describes confidence as entropy concentration rather than calibrated accuracy.
  - GPU backend binds loopback but public uvicorn frontend binds0.0.0.0; NVIDIA SGLang bf16/static0.80memory path differs from MLX. Exact frontend auth and exposed route require review.
- **Assessment sources:** [source1](https://github.com/bespokelabsai/nimble/blob/4edb0703a2e75d0170c3a45645a1961f4d1a2867/README.md#L9); [source2](https://github.com/bespokelabsai/nimble/blob/4edb0703a2e75d0170c3a45645a1961f4d1a2867/nimble/serving/server.py#L40); [source3](https://github.com/bespokelabsai/nimble/blob/4edb0703a2e75d0170c3a45645a1961f4d1a2867/nimble/serving/server.py#L89); [source4](https://github.com/bespokelabsai/nimble/blob/4edb0703a2e75d0170c3a45645a1961f4d1a2867/nimble/serving/server.py#L116). Representative source screening; no execution or admission.

<a id="itsmostafa-typesafe-mcp"></a>
### TypeSafe MCP reference

[itsmostafa/system-one-connector](https://github.com/itsmostafa/system-one-connector) · **Collected reference**

- **Purpose:** Typed-decision MCP wrapper reference, now System One Connector.
- **Architecture fit:** Q-11 adapter comparison; the historical TypeSafe scope remains the assessed scope.
- **Current status:** Researched reference; current repository rename does not expand admission. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain researched-reference scope; pin connector and exact endpoint/model, qualify client config writes and key precedence, state minimization, confidence/abstention, cancellation/timeouts, cost accounting and reversible removal.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-20.
- **Identity note:** recorded as `itsmostafa/typesafe-mcp`; current destination verified October 7. The redirect does not transfer historical results to new code.

- **November 9 source assessment:** `source-reviewed-bounded` at `580795791d6f6af3401ee769ccfa0f99d4225b74`.
  - Historical typesafe-mcp now resolves to system-one-connector, whose Go module requires Go1.27.1. README setup discovers and registers MCP into multiple installed clients, so setup changes client configuration.
  - The evaluate tool documents typed judgments/probabilities, confidence versus correctness and escalation without generated reasoning. Route selection prefers an active profile, then TypeSafe key, then OpenRouter; TypeSafe wins when both keys exist.
  - MIT source and routing precedence are implementation evidence, not proof that model calibration, current prices or every supported client is correct.
- **Assessment sources:** [source1](https://github.com/itsmostafa/system-one-connector/blob/580795791d6f6af3401ee769ccfa0f99d4225b74/LICENSE#L1); [source2](https://github.com/itsmostafa/system-one-connector/blob/580795791d6f6af3401ee769ccfa0f99d4225b74/go.mod#L1); [source3](https://github.com/itsmostafa/system-one-connector/blob/580795791d6f6af3401ee769ccfa0f99d4225b74/README.md#L31); [source4](https://github.com/itsmostafa/system-one-connector/blob/580795791d6f6af3401ee769ccfa0f99d4225b74/cmd/evaluate/main.go#L32); [source5](https://github.com/itsmostafa/system-one-connector/blob/580795791d6f6af3401ee769ccfa0f99d4225b74/cmd/evaluate/main.go#L119); [source6](https://github.com/itsmostafa/system-one-connector/blob/580795791d6f6af3401ee769ccfa0f99d4225b74/eval/internal/openrouter/price.go#L12). Representative source screening; no execution or admission.

<a id="ghalebdweikat-winnow"></a>
### Winnow

[GhalebDweikat/winnow](https://github.com/GhalebDweikat/winnow) · **Collected reference**

- **Purpose:** Recoverable filtering of model-visible context.
- **Architecture fit:** E / Q-11A reference; preserve canonical history outside the filtered view.
- **Current status:** Researched reference; no context-quality benchmark.
- **Next gate:** Qualify Windows ACLs explicitly instead of Unix-mode assumptions; label hidden critical evidence/regret/recovery and provider/summary egress, cache deletion, plugin stop/disable behavior and aggregate downstream quality/token/latency cost.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-20.


## Devices and access

<a id="josssphzhou-poki"></a>
### Poki

[JosssphZhou/poki](https://github.com/JosssphZhou/poki) · **Shortlisted / planned**

- **Purpose:** Physical-iPhone and iOS Simulator observation/action through a native bridge and MCP daemon, with separate iPhone app/setup utility, optional standalone agent and messaging channels.
- **Architecture fit:** G/H/I/J / Q-149: Broad personal-assistant mobile tasks versus PhoneUse Q-145, Mobile MCP, go-ios/WebDriverAgent, qualified direct app APIs and existing device controls. Real iPhone, simulator, on-phone app, setup utility and channel/agent variants require separate comparisons.
- **Current status:** Source researched; planned and untested. AGPL-3.0-only original MCP code, package0.1.1/Node24+; dependency and app/artifact rights separate. Native MCP targets macOS15+/full Xcode; Windows setup-app support does not establish native Windows MCP eligibility. Real-device findings remain limited upstream evidence; no Abrams device trial.
- **Next gate:** Compare upstream, eligible licensed observation/bridge components, minimal original Core device adapter and defer. Pin exact app/runner/native bridge/model and dependency artifacts; qualify AGPL/third-party distribution and provider terms, macOS/Windows/setup/community-port separation, reset-device iOS/language/orientation/IME matrix, signing/pairing/VPN/DeveloperMode recovery, exact device/action grants and approvals, screenshot/passcode/record/model/channel recipients and storage, auth/TLS/replay, stale-frame/action receipts, all-child Stop/takeover/ambiguous-effect recovery, resources and total lifecycle cost. No Apple login, signing, install, pairing, real screen access or actions under this intake.
- **Evidence:** Pinned README/license/manifests, notices, setup/configuration/verification/agent documentation and representative implementation with independent read-only source review; no install/build, Apple credentials, signing/pairing, phone or screen access, model/provider calls or benchmark. Dates: 2026-11-10.
- **Registered records:** `device.poki`.
- **Recorded revision:** `0b986264db2ba036599e44fb2a87b6e65f302178`.

- AGPL-3.0-only root metadata covers original Poki MCP contributions. Notices separately pin idevice/MIT, idb references, WebDriverAgent and optional downloaded BlueBubbles/native/codec assets; repository source pin alone does not admit rolling release binaries or all distribution terms.
- Native MCP requires macOS15+, full Xcode, Rust/Node24+/ffmpeg for source setup; a prebuilt arm64 package removes only some build prerequisites. The iPhone app/setup route has different macOS14+/iOS18+/Apple signing/VPN requirements and a Windows setup utility. Community Linux/Windows MCP ports remain separate unqualified repositories.
- Physical-phone verification is upstream single-setup evidence, limited to Chinese UI and portrait; sent:true means a write to a connection without device acknowledgement. screen_changed and a screenshot are evidence to inspect, not proof the intended effect occurred. Simulator timings and fixture tests do not qualify the real phone.
- HTTP bridge defaults to loopback, random per-start bearer token and Host validation; remote binds and fixed tokens are separate deployment surfaces. POKI_MCP_APPROVAL_MODE=allow preapproves listed sensitive operations; session queues/device locks are coordination, not Core action authorization.
- Standalone agent currently uses OpenAI/pi credential routes and defaults GPT-6.1 Terra low with Fast requested; screen data goes to the configured model. Its step clock can reset on progress and is not a whole-task deadline; route learning and task records persist under agent/.runtime. No local-model or subscription entitlement is established by this source review.
- Experimental typing panel is explicitly not yet device-validated. Installer dry-run downloads and starts a real setup helper, and its records command exports personal conversations/logs: neither is a harmless offline/source-only check. Apple accounts, passcodes, signing and phone data need separately scoped owner handling.
- MCP human approval covers seven named tools, not ordinary taps/typing or an in-app deletion confirmed by tapping. All tools are registered while the profile filters tools/list; hidden tools are not an authorization allowlist. iPhone-app approval heuristics are a separate surface and cannot be credited to MCP.
- Stop is transport-specific: stdio forwards abort/session cleanup, but already-dispatched input cannot be undone; native iOS Core ignores notifications/cancelled, and the app loop stops after the current step. Telegram/iMessage require exact sender configuration; literal /stop interrupts while other mid-task text steers. No global all-device/effect/billing Stop is proven.
- Standalone agent defaults serviceTier=priority and supports OpenAI API-key/ChatGPT routes only; advertised iPhone-app provider names include partially wired options. Reply-photo opt-in is not model-image-egress consent. App Keychain handling and host agent credential/session stores require separate exact-route privacy and entitlement checks.

Sources: [source 1](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/README.md); [source 2](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/package.json); [source 3](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/THIRD_PARTY_NOTICES.md); [source 4](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/docs/verification.md); [source 5](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/docs/configuration.md); [source 6](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/agent/README.md); [source 7](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/bin/install-iphone.mjs); [source 8](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/src/device.mjs#L496); [source 9](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/src/tools.mjs#L82); [source 10](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/src/coordination.mjs#L52); [source 11](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/agent/model-config.mjs#L1); [source 12](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/native/ios/PokiCore/Sources/PokiCore/Core.swift#L456); [source 13](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/native/ios-app/Poki/Chat/PiLoop.swift#L85); [source 14](https://github.com/JosssphZhou/poki/blob/0b986264db2ba036599e44fb2a87b6e65f302178/native/ios/PokiCore/Sources/PokiCore/Approvals.swift#L3).


- **November 9 source assessment:** `source-screened-not-tested` at `4547a81b88ac59a902bad7b0006137c7d4147aeb`.
  - Context sieve preserves hidden material and restoration keys; Jev and Haiku adapter differ in calibration and recipient/cost, so cannot inherit one another qualification.
  - Full hidden text, decision log and API env live in ~/.winnow. secure_home uses Unix umask/chmod but explicitly notes these are near no-ops on Windows and assumes private profile.
  - Stopping sidecar and disabling plugin differ: existing sessions can retain module while results pass through; qualify cleanup and evidence recovery.
- **Assessment sources:** [source1](https://github.com/GhalebDweikat/winnow/blob/4547a81b88ac59a902bad7b0006137c7d4147aeb/README.md#L5); [source2](https://github.com/GhalebDweikat/winnow/blob/4547a81b88ac59a902bad7b0006137c7d4147aeb/README.md#L267); [source3](https://github.com/GhalebDweikat/winnow/blob/4547a81b88ac59a902bad7b0006137c7d4147aeb/sidecar/src/winnow/config.py#L49). Representative source screening; no execution or admission.

<a id="lxe-phoneuse"></a>
### PhoneUse

[lxe/phoneuse](https://github.com/lxe/phoneuse) · **Shortlisted / planned**

- **Purpose:** Real-iPhone observation and input transport from Linux: AirPlay screen mirroring plus Bluetooth HID mouse/keyboard, optional ESP32 Wi-Fi bridge, CLI and MCP actions.
- **Architecture fit:** G/H/I/J / Q-145: Separately gated real-iPhone observation/action and user takeover for broad personal-assistant mobile tasks; compare qualified iPhone access/direct app APIs and relevant cua/desktop controls by role, without inheriting Android/emulator/simulator results.
- **Current status:** Source researched; planned and untested. MIT technology demo tested upstream on one iPhone 17 Pro/iOS26 Arch/Hyprland setup; no native Windows qualification. Installation changes privileged Bluetooth services; saved passcode, screenshot/model handling and optional bridge require exact device/host scope.
- **Next gate:** Keep one-setup demo planned/untested; require exact Linux/iPhone/model/HID pairing, explicit ask/Core per-action grants replacing auto default, Bluetooth install rollback/auth and passcode/screen recipients, stale frames/effect receipts and fail-closed takeover/all-input Stop/cost.
- **Evidence:** Pinned README/license/architecture and representative install/config/unlock/HID/vision source with independent read-only review; no installation, services, pairing, phone/screen/passcode access, firmware/model download, input actions or benchmark. Dates: 2026-11-08.
- **Registered records:** `device.phoneuse`.
- **Recorded revision:** `3bcecde243b5e024989bd7b043794271a9180863`.

- **November 9 source assessment:** `source-screened-not-tested` at `1c0ca0c98ac401550b6e695b3bbd8d1cc63db472`.
  - PhoneUse remains technology demo tested on one iPhone 17 Pro/Arch Linux/Hyprland/NVIDIA GPU setup; no Windows support or general device qualification follows.
  - Current session state has idle/requested/driving/paused with shared listeners and60 second renewable inactivity window; source is useful takeover design, not independently observed all-input Stop.
  - New access modes auto/countdown/ask default to auto when missing/invalid config unless legacy ask flag exists. This is not fail-closed human approval and cannot supply Core action authorization.
- **Assessment sources:** [source1](https://github.com/lxe/phoneuse/blob/1c0ca0c98ac401550b6e695b3bbd8d1cc63db472/README.md#L3); [source2](https://github.com/lxe/phoneuse/blob/1c0ca0c98ac401550b6e695b3bbd8d1cc63db472/README.md#L23); [source3](https://github.com/lxe/phoneuse/blob/1c0ca0c98ac401550b6e695b3bbd8d1cc63db472/phoneuse/agent_session.py#L1); [source4](https://github.com/lxe/phoneuse/blob/1c0ca0c98ac401550b6e695b3bbd8d1cc63db472/phoneuse/agent_session.py#L33); [source5](https://github.com/lxe/phoneuse/blob/1c0ca0c98ac401550b6e695b3bbd8d1cc63db472/phoneuse/agent_session.py#L78). Representative source screening; no execution or admission.

<a id="vercel-labs-agent-desktop"></a>
### Agent Desktop

[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) · **Shortlisted / planned**

- **Purpose:** Native accessibility-tree computer-use CLI and C library with snapshot-scoped element references, structured action/errors and platform-specific desktop adapters.
- **Architecture fit:** G/H/I/J / Q-132: General-assistant native desktop observation/action and verification versus qualified native UIA, trycua/cua, OpenMausBot and agent-bridge controls; accessibility transport, agent/model and exact app/action pairing separate.
- **Current status:** Source researched; planned and untested. Apache-2.0 signal; Windows/macOS/Linux source and packages require exact host/helper qualification. Headless accessibility actions still create effects; stale-reference guards do not replace authorization or Stop.
- **Next gate:** Compare pinned upstream, eligible components, minimal Core native adapter and defer; qualify Windows integrity/helper identity, app/window/refs and headed fallback, action grants/receipts, screenshot/clipboard/artifact and JEV egress, CLI/C surfaces, Stop/recovery, costs and removal.
- **Evidence:** Pinned README/Cargo/license/security metadata and representative native/source screening with independent review; no install/build/permission grant, screen/app/clipboard access, CLI/FFI execution or model call. Dates: 2026-11-03.
- **Registered records:** `desktop.agent-desktop`.
- **Recorded revision:** `d3dc190afbf34cd2377252398ddd5c30efbd093a`.

- **November 9 source assessment:** `reviewed` at `b43ac4f6e892ef608f8851428613c4009f0e84c7`.
  - CurrentApache2source uses OSaccessibilitytree/refs and documents private content in snapshots/clipboard/screenshots/artifacts; effects exist even without pixels or focus changes.
  - Windows permission source probes COMUIAutomation in interactive desktops and distinguishes restrictedtokens/AppContainer/access-denied and screencapture capability. A successfulUIAprobe is not app/action coverage or permissiongrant.
  - Crossplatform adapters, optionalJev mapping, stale/ambiguous refs and headedfallback remain exactsurface qualifications.
- **Assessment sources:** [source1](https://github.com/vercel-labs/agent-desktop/blob/b43ac4f6e892ef608f8851428613c4009f0e84c7/README.md#L14); [source2](https://github.com/vercel-labs/agent-desktop/blob/b43ac4f6e892ef608f8851428613c4009f0e84c7/crates/windows/src/system/permissions.rs#L3); [source3](https://github.com/vercel-labs/agent-desktop/blob/b43ac4f6e892ef608f8851428613c4009f0e84c7/crates/windows/src/system/permissions.rs#L20). Representative source screening; no execution or admission.

<a id="danielpaulus-go-ios"></a>
### go-ios

[danielpaulus/go-ios](https://github.com/danielpaulus/go-ios) · **Shortlisted / planned**

- **Purpose:** iOS device transport prerequisite.
- **Architecture fit:** I: one component in an independently qualified real-device control route.
- **Current status:** Deferred; no iOS device-control admission.
- **Next gate:** Keep device-control deferred; verify exact driver/tunnel signing and host changes, enrolled device/action grants, REST bind/token/revocation, logs, transport recovery and all-child Stop before reconsideration.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `platform.go-ios`.

- **November 9 source assessment:** `reviewed` at `63c0d5705a010b03c340de888ba6c7c4052d763b`.
  - README requires iOS17+tunnel and on Windows instructs placing Wintun DLL in system32; device/driver privileges remain separate admission work.
  - Experimental REST server now refuses startup unless GO_IOS_API_KEY supplied or --disable-auth explicit; binds all interfaces:8080 and exposes full device-control routes. Authentication is a concrete current source improvement, not device-control qualification.
- **Assessment sources:** [source1](https://github.com/danielpaulus/go-ios/blob/63c0d5705a010b03c340de888ba6c7c4052d763b/README.md#L13); [source2](https://github.com/danielpaulus/go-ios/blob/63c0d5705a010b03c340de888ba6c7c4052d763b/restapi/api/server.go#L23); [source3](https://github.com/danielpaulus/go-ios/blob/63c0d5705a010b03c340de888ba6c7c4052d763b/restapi/api/server.go#L43). Representative source screening; no execution or admission.

<a id="mobile-next-mobilecli"></a>
### Mobile CLI

[mobile-next/mobilecli](https://github.com/mobile-next/mobilecli) · **Shortlisted / planned**

- **Purpose:** Transitive native command backend for mobile control.
- **Architecture fit:** I / Q-01: qualify with the exact Mobile MCP adapter tuple.
- **Current status:** Collected prerequisite; does not independently authorize device actions. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Before prerequisite reuse resolve FSL rights and exact OS/device backend, qualify persistent daemon/tunnels, device/user binding and action grants, listen auth/network scope, credentials, all-input Stop and cleanup; no device access granted.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `runtime.mobilecli`.

- **November 9 source assessment:** `source-reviewed-bounded` at `83e47ca93fa9ecfc0fedc0dc56cc7180d8db0ff6`.
  - MobileCLI current source is FSL1.1 with an Apache2.0 future license, not an unconditional current Apache license. Applicable use/reuse terms require explicit review.
  - Per-user daemon persists device discovery, iOS tunnels and on-device agents. Server listen can be configured to localhost or0.0.0.0; daemon cancels request context on disconnect, which does not prove remote device effect rollback.
  - CLI OAuth uses app.mobilenext.ai device login endpoints; Go toolchain1.26.10 and go-ios/native device dependencies are separate host and account prerequisites.
- **Assessment sources:** [source1](https://github.com/mobile-next/mobilecli/blob/83e47ca93fa9ecfc0fedc0dc56cc7180d8db0ff6/LICENSE#L1); [source2](https://github.com/mobile-next/mobilecli/blob/83e47ca93fa9ecfc0fedc0dc56cc7180d8db0ff6/go.mod#L1); [source3](https://github.com/mobile-next/mobilecli/blob/83e47ca93fa9ecfc0fedc0dc56cc7180d8db0ff6/README.md#L504); [source4](https://github.com/mobile-next/mobilecli/blob/83e47ca93fa9ecfc0fedc0dc56cc7180d8db0ff6/cli/auth.go#L22); [source5](https://github.com/mobile-next/mobilecli/blob/83e47ca93fa9ecfc0fedc0dc56cc7180d8db0ff6/cli/server.go#L34); [source6](https://github.com/mobile-next/mobilecli/blob/83e47ca93fa9ecfc0fedc0dc56cc7180d8db0ff6/daemon/server.go#L198). Representative source screening; no execution or admission.

<a id="mobile-next-mobile-mcp"></a>
### Mobile MCP

[mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) · **Shortlisted / planned**

- **Purpose:** Native-device control through a mobile MCP adapter.
- **Architecture fit:** I / Q-01: Android emulator, reset Android and iOS scopes are separate.
- **Current status:** Qualification scheduled; no device platform is adopted.
- **Next gate:** Qualify each exact phone/emulator/driver/host pair, local/cloud endpoint auth and screenshot egress, telemetry opt-out, failure-session cleanup, stale targets and fail-closed input/recording Stop; Android evidence never qualifies iPhone.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `mcp.mobile-next`.

- **November 9 source assessment:** `source-screened-not-tested` at `3b51952bcd83955f3a743f731f5a9beaebecdab7`.
  - Mobile MCP now explicitly spans local and cloud device automation, screen snapshots and coordinate effects; platform/device types remain separate eligibility claims.
  - WebDriverAgent HTTP methods carry no auth header in this client; network/transport restriction must be qualified outside it. withinSession lacks try/finally around effect, so failure can skip deleteSession.
  - PostHog/Scarf telemetry is disclosed with disable flag; real-device media/recording and cloud access create additional recipients/permissions.
- **Assessment sources:** [source1](https://github.com/mobile-next/mobile-mcp/blob/3b51952bcd83955f3a743f731f5a9beaebecdab7/README.md#L1); [source2](https://github.com/mobile-next/mobile-mcp/blob/3b51952bcd83955f3a743f731f5a9beaebecdab7/README.md#L546); [source3](https://github.com/mobile-next/mobile-mcp/blob/3b51952bcd83955f3a743f731f5a9beaebecdab7/src/webdriver-agent.ts#L25). Representative source screening; no execution or admission.

<a id="appium-webdriveragent"></a>
### WebDriverAgent

[appium/WebDriverAgent](https://github.com/appium/WebDriverAgent) · **Shortlisted / planned**

- **Purpose:** iOS UI automation prerequisite.
- **Architecture fit:** I: scoped iOS adapter; separate from desktop or Android evidence.
- **Current status:** Historical repository; development moved to appium/appium-ios/packages/webdriveragent. iOS execution remains deferred and unadopted.
- **Next gate:** Preserve historical repo/pin separately from successor. Successor reviewed only as source16.18.3; resolve BSD LICENSE versus Apache2package metadata, then exact Xcode/signing/device build, bind/auth/action grants, Stop and recovery before execution.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `platform.webdriveragent`.


## Interface and media

<a id="vercel-labs-ui"></a>
### UI SDK (Vercel Labs)

[vercel-labs/ui](https://github.com/vercel-labs/ui) · **Shortlisted / planned**

- **Purpose:** Headless UI behavior primitives for keyboard navigation, focus, selection, dismissal, popups, drag/drop and form/ARIA behavior, with framework adapters and optional page-agent/WebMCP bridges plus development guidance.
- **Architecture fit:** E/I/J; separate H / Q-155: Accessible personal-assistant interface foundations and optional typed UI automation versus native HTML/current controls, eligible Radix/Base UI/headless alternatives, CopilotKit interaction components and minimal original primitives. Compare exact upstream core+adapter, selected licensed behaviors, original adapter and defer. Separate interface behavior, agent bridge and developer skill; no product model/API router or Core/runtime adoption.
- **Current status:** Source researched; planned and untested. Apache-2.0 root/packages; core/React source version0.1.0-beta.2, React>=19 peer requirement, repository Node24/pnpm10.34.5. Five adapter implementations and upstream tests are evidence to investigate, not Abrams accessibility/browser/SSR/Windows qualification. Agent actions and WebMCP exposure remain separately gated; no SDK install or skill activation.
- **Next gate:** Compare exact core+adapter, eligible behavior components, minimal original implementation and defer against actual interface gaps. Pin release/package/dependencies and intended asset/skill rights; qualify existing React/build/SSR/Tauri-WebView2/native browser pairing without changing frozen runtime decisions. Test keyboard/focus/ARIA, screen-reader and touch/IME/RTL/zoom/high-contrast behavior, portals/modal nesting, controlled form state, hydration and subscription/listener disposal. Preserve Core canonical state and backend-enforced recipient/action grants; explicitly deny unapproved agent actions and keep WebMCP registration opt-in. Verify stale/disabled/read-only/hidden targets, async approval race/timeout/disposal, partial-action receipts/history limitations and all host-effect Stop. Measure bundle/interaction/resource and development/maintenance/exit costs; no arbitrary cloud or paid service dependency and preserve USD25 monthly metered cap.
- **Evidence:** Pinned README/LICENSE/root and core/React manifests, repository toolchain metadata and representative behavior/adapter, page-agent/WebMCP/permission and test source with two independent bounded reviews. No installation, target import/build/tests/browser execution, skill activation, providers or candidate benchmark.
- **Registered records:** `ui.vercel-ui-sdk`.
- **Recorded revision:** `724a7d6c2d0ca1251a8eb6172462ae220c484714`.
- **Review date:** 2026-11-14.

- UI SDK is a behavior/component foundation, not a complete chat application, model, generative-UI runtime or provider router. Shared core and React/Vue/Svelte/Solid/Web Component adapters need independent host-specific qualification; optional agent tooling is a separate capability.
- Root and package metadata declare Apache-2.0. Core/React version0.1.0-beta.2 and README beta status imply version/API stability and migration questions. React adapter requires React/ReactDOM>=19; repository .nvmrc24 and pnpm10.34.5 describe development tooling, not a verified Windows/browser runtime matrix or a runtime Node minimum.
- Development skill and agent-oriented documentation are untrusted intake content, not activated project instructions. No npx skills/npm/pnpm commands were run; preserve user/project precedence, exact package/artifact rights, build-hook review and the existing test/quality requirements before any reuse.
- createAgent supports direct component actions and a configurable allow callback; ordinary supported actions can be accepted when no callback exists, while confirmation-marked targets have separate protection. WebMCP registration requires its own allow function but can still be configured permissively. UI annotations and frontend callbacks are not Core/backend authorization or irreversible-effect consent.
- Source rechecks disabled/read-only/marks after asynchronous approval and supports approval-wait abort/timeout and registration cleanup. Multiple-step actions can leave earlier steps applied after a later refusal; history/undo and UI disposal cannot be assumed to reverse remote/filesystem/payment effects or terminate already-running host work. Require durable per-action receipts and Core Stop for effects.
- Permission documentation and implementation can diverge: the reviewed query/listItems source does not supply the opening callback, while an inspected permissions paragraph still describes query opening a closed list. Use exact pinned behavior tests and receipts rather than treating documentation or tool descriptions as proof.
- Native button/link/form semantics receive explicit handling, but default submits and component callbacks can perform real application effects. Core-attached events have a contract different from React handlers: a user React preventDefault cannot suppress certain core events. Verify form/state/composition and validation in actual pages rather than assuming pointer-handler equivalence.
- React subscriptions/ref detach, deferred instance destruction for StrictMode/Activity/Suspense and idempotent core cleanup are implemented. Modal scroll locks change page-wide styles with per-document reference tracking/restoration. These are source controls, not zero-leak, callback-settlement or external-job cancellation evidence.
- The authored browser matrix is incomplete across adapters: Chromium covers framework projects, Firefox/WebKit primarily the web adapter; leak checks use Chromium CDP. Some axe fixtures disable page-structure rules and CI allows retries. No tests were run here and neither accessibility certification nor Abrams screen-reader/WebView2/SSR support follows from test presence.
- Hidden/secret marks constrain bridge snapshots/actions but do not establish isolation from every application observer or raw DOM access. WebMCP annotations are hints, not authorization or prompt-injection protection. Minimize and grant snapshot/change-log recipients explicitly; act success or history/undo is not a receipt for an external effect.

Sources: [source 1](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/README.md); [source 2](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/LICENSE); [source 3](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/package.json); [source 4](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/package.json); [source 5](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/react/package.json); [source 6](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/.nvmrc); [source 7](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/apps/docs/content/docs/agents/connect-an-agent/permissions.mdx); [source 8](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/apps/docs/content/docs/agents/skills.mdx#L6-L28); [source 9](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/skills/ui-sdk/references/agent-ready.md#L15-L68); [source 10](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1892-L1956); [source 11](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1155-L1191); [source 12](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1215-L1249); [source 13](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1794-L1801); [source 14](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L241-L311); [source 15](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L397-L422); [source 16](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1435-L1515); [source 17](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/apps/docs/content/docs/agents/connect-an-agent/permissions.mdx#L107-L131); [source 18](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1631-L1682); [source 19](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/apps/docs/content/docs/agents/connect-an-agent/permissions.mdx#L83-L105); [source 20](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1921-L1937); [source 21](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1716-L1754); [source 22](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1596-L1628); [source 23](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/apps/docs/content/docs/agents/connect-an-agent/permissions.mdx#L127-L131); [source 24](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1905-L1956); [source 25](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1830-L1875); [source 26](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/page/agent/agent.ts#L1161-L1191); [source 27](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/README.md#L3-L22); [source 28](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/foundation/platform/button.ts#L20-L99); [source 29](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/foundation/forms/form.ts#L1-L10); [source 30](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/foundation/forms/form.ts#L178-L224); [source 31](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/react/src/use-primitive.tsx#L101-L128); [source 32](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/react/src/use-primitive.tsx#L195-L260); [source 33](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/react/src/use-primitive.tsx#L754-L775); [source 34](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/react/src/use-primitive.tsx#L934-L943); [source 35](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/foundation/kernel/primitive.ts#L450-L465); [source 36](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/foundation/popups/modal.ts#L6-L50); [source 37](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/src/foundation/popups/modal.ts#L80-L99); [source 38](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/tests/playwright.config.ts#L12-L28); [source 39](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/tests/playwright.config.ts#L77-L108); [source 40](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/tests/playwright.config.ts#L133-L154); [source 41](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/tests/specs/dialog.a11y.spec.ts#L12-L44); [source 42](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/tests/specs/dialog.a11y.spec.ts#L67-L101); [source 43](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/tests/specs/dialog.ssr.spec.ts#L5-L47); [source 44](https://github.com/vercel-labs/ui/blob/724a7d6c2d0ca1251a8eb6172462ae220c484714/packages/core/skills/ui-sdk/references/testing.md#L1-L7).


<a id="lemomo-ai-lemo-opuscar"></a>
### Lemo-Opuscar

[lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) · **Shortlisted / planned**

- **Purpose:** Coding-agent film-style library and code-rendered creative toolkit using browser graphics, ffmpeg, audio and optional voice/image generation.
- **Architecture fit:** H / Q-154: optional general personal-assistant creative production versus ComfyUI, OpenMontage, fframes and a minimal original renderer/job adapter. Compare exact upstream plugin/library, eligible licensed components, original implementation and defer; no assistant-runtime or Core-model adoption.
- **Current status:** Source researched; planned and untested. Mixed MIT/CC BY-NC4/CC BY4 rights with commercial-film permission and exclusions require intended-use review.99 current styles are inventory, not qualified workflows; Windows/dependencies, account egress, resources, lifecycle and Stop remain gates.
- **Next gate:** Resolve code/docs/product-embedding/commercial-film and per-asset/voice/output rights; compare upstream, eligible components, minimal original adapter and defer. Pin library commit plus dependency/browser/ffmpeg/voice/model/assets and reject implicit mutable updates/install. Qualify synthetic creative fixtures, task quality and accessibility, Windows shell/GPU and full render resources, file/network/provider/account grants, consent and retention/deletion. Require durable owned job IDs, queued/in-flight browser/ffmpeg/voice/image Stop and descendant receipts, bounded retries/time/disk and aggregate spend reservations within USD25 monthly metered cap. No install, download, render or provider call authorized.
- **Evidence:** Pinned README/license/plugin/setup/dependency and representative render/image/voice source review; style prompt inventory excluding template. No candidate execution/import/install, model/media download, provider/account/personal-data use or benchmark.
- **Record IDs:** `media.lemo-opuscar`.
- **Current reviewed revision:** `f2471cacca270963baa2e1c72b8a7b25dfe0d95c`.
- **Link/intake check:** 2026-11-12; source review dated 2026-11-12.

- Current README advertises99 styles after33 additions on November12; pinned tree contains99 style STYLE.md files excluding styles/_template. The screenshot66 is historical. Styles and demo availability are not99 tested workflows or measured output quality.
- This is a coding-agent creative skill/library and code-rendering toolkit, not an autonomous assistant or video foundation model. Plugin hands the host agent library instructions; script/content execution and host model usage are separate capabilities.
- Licensing is mixed: MIT code, CC BY-NC4 documentation/style prompts, CC BY4 demo films/stills with third-party exceptions. Additional permission allows making and delivering commercial/client films and keeping adapted personal styles, but embedding docs/adaptations into a commercially advantaged product/service beyond that permission needs a commercial license. Six narration tracks, Clawd and third-party marks are excluded; per-demo assets/voices/fonts/data and output rights require separate review.
- Skill instructions request automatic library fetch/update and early dependency installation. Managed setup follows mutable main with fetch/reset-hard; source pin does not pin the later library checkout. Node20+, ffmpeg7+, Python3.11+ or uv are required; npm/Python/browser installs and optional voice/model downloads are consequential deferred effects.
- Asset fetcher verifies manifest SHA256 after download, but that does not qualify all transitive packages, browser binaries, demo source or newly generated content. Core Python dependencies are largely unpinned and npm manifests use version ranges; record exact resolved artifacts before execution.
- Voice paths differ: English Kokoro uses local model files; voice requirements also include online edge-tts and Whisper. Optional image generation invokes the user signed-in Codex CLI, so prompts and account usage are not local-only and need explicit recipient/account/cost authorization. No provider or model/media calls were performed.
- Renderer uses headless Chromium and ffmpeg with default3 workers, per-output PID locks, exit/signal cleanup and bounded page-readiness wait. WebGL loss detection/software fallback warnings are source controls, not proof of supported Windows GPU performance or full CPU/RAM/VRAM/disk/latency bounds.
- Local static serving binds127.0.0.1, but browser pages and agent-authored code still require explicit file/network authority. Image helper uses timeout and process-group kill with fallback; qualify Windows-specific behavior, descendant cleanup and cancellation of browser/ffmpeg/provider work. No Abrams durable job identity, aggregate cost reservation or all-process Stop qualification is established.

Sources: [source 1](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/README.md#L7-L26); [source 2](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/README.md#L45-L105); [source 3](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/LICENSE#L8-L56); [source 4](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/plugin/.claude-plugin/plugin.json#L1-L8); [source 5](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/plugin/skills/lemo-opuscar/SKILL.md#L8-L24); [source 6](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/plugin/skills/lemo-opuscar/scripts/setup.sh#L8-L43); [source 7](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/plugin/skills/lemo-opuscar/scripts/setup.sh#L87-L113); [source 8](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/package.json#L1-L13); [source 9](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/requirements.txt#L1-L8); [source 10](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/requirements-voice.txt#L1-L6); [source 11](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/tools/fetch.sh#L90-L101); [source 12](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/core/render/video.mjs#L9-L52); [source 13](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/core/render/browser.mjs#L1-L18); [source 14](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/core/render/serve.mjs#L1-L41); [source 15](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/core/render/page.mjs#L76-L93); [source 16](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/core/image/gen_image.py#L187-L213); [source 17](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/core/image/gen_image.py#L221-L261); [source 18](https://github.com/lemomo-ai/lemo-opuscar/blob/f2471cacca270963baa2e1c72b8a7b25dfe0d95c/core/tts/tts.py#L21-L54).


<a id="meta-astryx"></a>
### Astryx

[meta/astryx](https://github.com/meta/astryx) · **Shortlisted / planned**

- **Purpose:** Beta React19+ design system with typed components, themes, prebuilt CSS and agent-oriented documentation/scaffolding/customization CLI.
- **Architecture fit:** E/H/I/J / Q-146: Broad personal-assistant chat, projects, files, settings and activity UI primitives versus SpaceUI Q-112, Lightswind Q-119, current primitives and minimal original components; Impeccable remains a separate advisory-content baseline.
- **Current status:** Source researched; planned and untested. MIT root; core/CLI0.7.12, React19+ and StyleX. Component accessibility and consumer styling claims require rendered qualification. CLI/global setup, scaffolding, codemods and source ejection are separate file/config-changing capabilities. CLI/global setup deferred: global invocation defaults to home-level agent-instruction writes and can start detached workers/package downloads.
- **Next gate:** Keep CLI/global setup deferred; separate file/config grants, background worker retirement and package-cache/network review before any tooling trial. Compare upstream library, eligible components/tokens, minimal original UI and defer. Pin package/CSS/theme/dependency/assets and delivered CLI content; qualify Windows/Node/React bundling, keyboard/screen-reader/focus/reduced-motion/zoom, SSR/hydration/theme layering, resource costs, file/config grants/diffs/rollback, Core approval/route/Stop bindings and removal.
- **Evidence:** Pinned README/LICENSE/core+CLI manifests and documentation, representative implementation and independent source review; no package install, scaffolding, global setup, rendering or runtime accessibility/security benchmark. Dates: 2026-11-09.
- **Registered records:** `ui.astryx`.
- **Recorded revision:** `c0327e060d77676be9754e10998995fe4f38a345`.

- Root MIT license inspected; package manifests core/CLI0.7.12. React19+ peer requirement aligns with the separate browser demo React19.2 manifest, but does not qualify package integration or product UI.
- Consumers can use shipped CSS without adopting the source-build StyleX plugin; full source builds, themes, experimental lab and canary chart packages have distinct dependency/maintenance scopes.
- CLI requires Node>=22.13; project/global entry points, init, swizzle and codemods require separate file/config grants and rollback. README explicitly warns the unscoped npx astryx name resolves to an unrelated package.
- Accessibility and production-readiness claims remain upstream claims pending actual keyboard/focus/screen-reader/responsive/rendered tests. No library should own Core grants, credentials, route selection or Stop semantics.

Sources: [source 1](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/README.md); [source 2](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/LICENSE); [source 3](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/packages/core/package.json); [source 4](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/packages/core/README.md); [source 5](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/packages/cli/package.json); [source 6](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/packages/cli/README.md).


- **November 9 source assessment:** `reviewed` at `3d6a4e03cdd673e540289c610f7e189f8ffea434`.
  - Current README explicitly states development moved to appium/appium-ios packages/webdriveragent; existing repository is historical source, not current development destination.
  - Xcode runner/device signing requirements remain; native HTTP server header documents default all-interface bind unless interface configured. Transport exposure and iOS permission scope remain unresolved.
  - Advertised successor inspected at monorepo20c3bde38f8413bd760187c521ace065a62538a6: package appium-webdriveragent16.18.3, README retains Xcode runner guidance and BSD badge/LICENSE while package metadata says Apache2.0. Resolve component licensing discrepancy before reuse; no new registered candidate.
- **Assessment sources:** [source1](https://github.com/appium/WebDriverAgent/blob/3d6a4e03cdd673e540289c610f7e189f8ffea434/README.md#L10); [source2](https://github.com/appium/WebDriverAgent/blob/3d6a4e03cdd673e540289c610f7e189f8ffea434/README.md#L26); [source3](https://github.com/appium/WebDriverAgent/blob/3d6a4e03cdd673e540289c610f7e189f8ffea434/WebDriverAgentLib/Routing/FBHTTPServer.h#L44); [source4](https://github.com/appium/appium-ios/blob/20c3bde38f8413bd760187c521ace065a62538a6/packages/webdriveragent/README.md#L24); [source5](https://github.com/appium/appium-ios/blob/20c3bde38f8413bd760187c521ace065a62538a6/packages/webdriveragent/package.json#L16); [source6](https://github.com/appium/appium-ios/blob/20c3bde38f8413bd760187c521ace065a62538a6/packages/webdriveragent/LICENSE#L7); [source7](https://github.com/appium/appium-ios/blob/20c3bde38f8413bd760187c521ace065a62538a6/packages/webdriveragent/WebDriverAgentLib/Routing/FBHTTPServer.h#L44). Representative source screening; no execution or admission.


- **Independent CLI finding:** Global CLI handoff can start an agent-text worker; missing/unreadable settings default computerAgentText.install=true. Worker writes home-level skill/instruction links or copies, with edited/foreign-file safeguards. Update-notifier opt-out is not a universal write/download opt-out. Windows skips background Core fetch, but read commands can fetch it on demand.
  - [Pinned source](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/packages/cli/foundation/release/handoff.mjs)
  - [Pinned source](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/packages/cli/foundation/env/user-settings.mjs)
  - [Pinned source](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/packages/cli/foundation/release/agent-text-worker.mjs)
  - [Pinned source](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/packages/cli/foundation/agent-docs/computer-agent-text.mjs)
  - [Pinned source](https://github.com/meta/astryx/blob/c0327e060d77676be9754e10998995fe4f38a345/packages/cli/foundation/release/global-state.mjs)
<a id="puppyone-ai-puppyone"></a>
### PuppyOne

[puppyone-ai/puppyone](https://github.com/puppyone-ai/puppyone) · **Shortlisted / planned**

- **Purpose:** File-centric Electron workspace for local folders, document views, agent sessions and optional Git-backed cloud collaboration with MCP/CLI/SSH access.
- **Architecture fit:** E/H/I/J / Q-141: Broad personal-assistant file/artifact workspace and local/cloud multi-agent handoff, plus bake-off integration review; compare Core file adapters, Cloudflare Computer, Meldwork and Orkas. Keep local-only, cloud sharing and each agent/provider pairing separate.
- **Current status:** Source researched; planned and untested. Apache-2.0 desktop0.4.2/Electron41 source with Windows-x64 packaging paths; brands and third-party assets have separate terms. Optional cloud/agent connectivity and Git history do not establish data grants, full rollback or complete audit.
- **Next gate:** Compare upstream, eligible workspace/document/adapter components, minimal original Core file interface and defer. Qualify exact Windows/native/runtime pairing, path/IPC/tool permissions, agent/model/cloud recipients and auth, telemetry, file fidelity/conflicts/history/restore/deletion, all-agent Stop, cloud-service provenance/entitlements, costs and removal; preserve canonical Core state.
- **Evidence:** Pinned README/package/license/NOTICE/privacy and representative cloud/agent/filesystem source with independent read-only review; no install/build, folder opening/import, cloud publication/sync, agent/credential/provider calls or benchmark. Dates: 2026-11-07.
- **Registered records:** `workspace.puppyone`.
- **Recorded revision:** `1dcc67b9ade2e5c23e484fbb2e8d483d0e95d60e`.
- **Currentness (November 9):** `unchanged`; observed HEAD `1dcc67b9ade2e5c23e484fbb2e8d483d0e95d60e`. Matches a recorded revision; no runtime qualification implied.

<a id="copilotkit-generative-ui"></a>
### CopilotKit Generative UI guide

[CopilotKit/generative-ui](https://github.com/CopilotKit/generative-ui) · **Shortlisted / planned**

- **Purpose:** Documentation and examples for controlled, declarative and open-ended agent UI; supplied repository is README/assets and points to the existing CopilotKit monorepo.
- **Architecture fit:** E/H/I/J / Q-126: General-assistant task cards, forms, research/project views and interactive artifacts versus fixed UI; extends CopilotKit Q-21 alongside OpenMuse Q-22 without selecting an interface concept.
- **Current status:** Source researched; planned and untested. Guide/resource repository, not a runnable standalone framework. No root license found at intake; CopilotKit licensing does not automatically license this snapshot/assets. Monorepo implementation requires separate artifact review.
- **Next gate:** Compare existing fixed UI, selected upstream patterns, rights-cleared components, minimal original Core UI and defer; qualify implementation/spec versions, generated content/schema/iframe isolation, state/effect grants, accessibility, replay/Stop, routes, costs and removal.
- **Evidence:** Pinned guide/asset-tree review and independent consolidation/license screen; no package installed, demo run, generated UI rendered, service/model call or benchmark. Dates: 2026-10-29.
- **Registered records:** `ui.generative-ui-patterns`.
- **Recorded revision:** `12aa81e3deeb9c6c15c7863b67a3f8f63144e383`.
- **Currentness (November 9):** `unchanged`; observed HEAD `12aa81e3deeb9c6c15c7863b67a3f8f63144e383`. Matches a recorded revision; no runtime qualification implied.

<a id="codewithmuhilan-lightswind-ui-library"></a>
### Lightswind UI

[codewithMUHILAN/Lightswind-UI-Library](https://github.com/codewithMUHILAN/Lightswind-UI-Library) · **Shortlisted / planned**

- **Purpose:** Copy-source React UI components with animated effects, CLI delivery and MCP discovery; free and Pro content have separate scopes.
- **Architecture fit:** H/I/J / Q-119: Selected general-assistant presentation components versus SpaceUI Q-112/current primitives and original components; Q-118 interaction studies remain separate.
- **Current status:** Source researched; planned and untested. MIT public-root signal; Pro assets separately licensed. Accessibility, motion, responsive/resource behavior and mutable hosted delivery need qualification.
- **Next gate:** Retain selected-component comparison; freeze delivered source/dependencies and Pro rights, inspect actual CLI/MCP side effects/credential storage, then render keyboard/focus/reduced-motion and host-resource fixtures.
- **Evidence:** Pinned README/package/license, representative component/CLI/MCP source and official pricing-page screen; no install, auth, UI rendering or runtime accessibility/security qualification. Dates: 2026-10-26.
- **Registered records:** `ui.lightswind`.
- **Recorded revision:** `53ef2ee0cf211a794a3bb4b2ed1e62d3f0f2544a`.

- **November 9 source assessment:** `source-screened-not-tested` at `a3895bd6968b5d96425eb45edcc84a1d79b3ecb4`.
  - Still a source-copy React18/19 component library, not an assistant runtime; package3.2.6 exposes CLI and MCP build entries.
  - Root MIT does not clear paid Pro blocks; README separates Pro authentication and stores credentials in ~/.lightswindrc.
  - Representative GitHub fetch client follows mutable master with optional GITHUB_TOKEN; pinning this repository does not pin all content delivered later.
- **Assessment sources:** [source1](https://github.com/codewithMUHILAN/Lightswind-UI-Library/blob/a3895bd6968b5d96425eb45edcc84a1d79b3ecb4/package.json#L21); [source2](https://github.com/codewithMUHILAN/Lightswind-UI-Library/blob/a3895bd6968b5d96425eb45edcc84a1d79b3ecb4/package.json#L74); [source3](https://github.com/codewithMUHILAN/Lightswind-UI-Library/blob/a3895bd6968b5d96425eb45edcc84a1d79b3ecb4/README.md#L162); [source4](https://github.com/codewithMUHILAN/Lightswind-UI-Library/blob/a3895bd6968b5d96425eb45edcc84a1d79b3ecb4/lib/githubClient.ts#L5). Representative source screening; no execution or admission.

<a id="spacedriveapp-spaceui"></a>
### SpaceUI

[spacedriveapp/spaceui](https://github.com/spacedriveapp/spaceui) · **Shortlisted / planned**

- **Purpose:** React design-system packages for tokens, primitives, forms, AI interaction and file-explorer interfaces.
- **Architecture fit:** H/I/J / Q-112: Reusable presentation components for Abrams chat, tools, models, knowledge and artifact views; compare existing UI primitives and minimal original components.
- **Current status:** Source researched; planned and untested. MIT root signal. Component presentation does not implement provider routing, permission grants, canonical task/memory state or file authority.
- **Next gate:** Compare upstream packages, eligible component reuse, minimal original UI and deferral; qualify React/Tailwind/bundler fit, untrusted rendering, keyboard/screen-reader/focus/contrast/motion, Core state/approval/Stop bindings, performance, rights, costs and removal.
- **Evidence:** Pinned README, integration guide and package metadata reviewed with independent representative component source screening; no dependency install/build, rendered accessibility/security test or runtime adoption. Dates: 2026-10-21.
- **Registered records:** `ui.spaceui`
- **Recorded revision:** `a48b17047d3ff1d05268acb6f88a79460ad4fa7b`
- **Currentness (November 9):** `unchanged`; observed HEAD `a48b17047d3ff1d05268acb6f88a79460ad4fa7b`. Matches a recorded revision; no runtime qualification implied.

<a id="vert-sh-vert"></a>
### VERT

[VERT-sh/VERT](https://github.com/VERT-sh/VERT) · **Shortlisted / planned**

- **Purpose:** Browser-based file conversion UI using local WebAssembly/media engines, with a separate server option for video.
- **Architecture fit:** F/H/I/J / Q-110: General-assistant document/media transformation and conversion bake-offs versus direct Pandoc/FFmpeg/ImageMagick and smaller Core adapters.
- **Current status:** Source researched; planned and untested. AGPL-3.0 root signal. Local browser conversion, external asset requests and video-server processing are distinct paths; no blanket offline/privacy qualification.
- **Next gate:** Compare pinned upstream, eligible components, minimal original conversion adapter and deferral; qualify exact format fidelity/rights, offline egress, explicit video recipient, parser/resource limits, cancellation, artifact metadata, Windows/browser fit, costs and removal.
- **Evidence:** Pinned README, package/env/video docs and selected converter/Pandoc/FFmpeg source reviewed; no install/build, file uploads/conversions, daemon, API/model execution or full audit. Dates: 2026-10-21.
- **Registered records:** `conversion.vert`
- **Recorded revision:** `257bcb3b2bb6a501bae0faf9ffb05060ee00c3f7`
- **Currentness (November 9):** `unchanged`; observed HEAD `257bcb3b2bb6a501bae0faf9ffb05060ee00c3f7`. Matches a recorded revision; no runtime qualification implied.

<a id="calesthio-openmontage"></a>
### OpenMontage

[calesthio/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) · **Shortlisted / planned**

- **Purpose:** Agentic video planning, asset assembly, editing and render workflows.
- **Architecture fit:** H/I / Q-91: fframes, Q-67 media study and simple licensed-asset FFmpeg workflows.
- **Current status:** Source researched; planned and untested. AGPL-3.0 root signal. Python3.10+, Node18+, FFmpeg; a stock-footage/local path differs from a paid generative path. No publish/upload rights implied. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Scope upstream/component versus independent media pipeline with AGPL obligations; pin providers/models/media rights, private project paths and board binding, subprocess resources, explicit spend/generation grants, all-job cancellation and output review before publishing.
- **Evidence:** Pinned README and provider guide reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** media.openmontage
- **Recorded intake revision:** c8066452325cb57c8fc1ba8c2a71b6e8842e6b65

- **November 9 source assessment:** `source-reviewed-bounded` at `fecb9a1e3cc23ef84de30b272059457a427f16f8`.
  - OpenMontage retains AGPL3 root licensing; model, stock-media and generated-output rights remain separate. Current Python requirements include multiple paid media/model SDKs and a local FastAPI/uvicorn board.
  - Backlot server exposes project state, event and media routes and invokes a subprocess for thumbnail work; this is local file/media tooling that needs path/resource/host binding qualification.
  - Collected provider client examples distinguish global/EU endpoints. Provider-rich demos do not establish zero cost, production suitability or publication permission; no generation, render, upload or benchmark ran.
- **Assessment sources:** [source1](https://github.com/calesthio/OpenMontage/blob/fecb9a1e3cc23ef84de30b272059457a427f16f8/LICENSE#L1); [source2](https://github.com/calesthio/OpenMontage/blob/fecb9a1e3cc23ef84de30b272059457a427f16f8/requirements.txt#L1); [source3](https://github.com/calesthio/OpenMontage/blob/fecb9a1e3cc23ef84de30b272059457a427f16f8/backlot/server.py#L174); [source4](https://github.com/calesthio/OpenMontage/blob/fecb9a1e3cc23ef84de30b272059457a427f16f8/backlot/server.py#L253); [source5](https://github.com/calesthio/OpenMontage/blob/fecb9a1e3cc23ef84de30b272059457a427f16f8/backlot/server.py#L345); [source6](https://github.com/calesthio/OpenMontage/blob/fecb9a1e3cc23ef84de30b272059457a427f16f8/.agents/skills/bfl-api/references/code-examples/python-client.py#L95). Representative source screening; no execution or admission.

<a id="agent37-platform-minions"></a>
### Minions

[agent37-platform/minions](https://github.com/agent37-platform/minions) · **Shortlisted / planned**

- **Purpose:** Hermes task/session supervision board with local task metadata.
- **Architecture fit:** H/I / Q-89: Core queue/UI and Q-83 Paperclip plus manual supervision.
- **Current status:** Source researched; planned and untested. MIT root signal. README Node 18+ differs from package engines >=20; 0.1.27 shell/rsync build paths need Windows qualification.
- **Next gate:** Verify Hermes version/schema, dual SQLite ownership, auth/bind, heartbeat/cron/child sessions, grants, claims/effect retries, model routes, Stop and export.
- **Evidence:** Pinned README and package.json reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** surface.minions
- **Recorded intake revision:** a0787971cb207fd80f7e54991a52665874fe914a
- **Currentness (November 9):** `unchanged`; observed HEAD `a0787971cb207fd80f7e54991a52665874fe914a`. Matches a recorded revision; no runtime qualification implied.

<a id="open-webui-open-webui"></a>
### Open WebUI

[open-webui/open-webui](https://github.com/open-webui/open-webui) · **Shortlisted / planned**

- **Purpose:** Self-hosted chat/research interface with local and cloud model adapters.
- **Architecture fit:** H/I / Q-75: LibreChat, CopilotKit and current interface concepts; UI/component evaluation separate from backend adoption.
- **Current status:** Source researched; planned and untested. Custom Open WebUI License with branding conditions and stated exceptions. Pinned Python >=3.11,<3.13.0a1 excludes the available planning Python 3.13; offline claims require network verification.
- **Next gate:** Qualify precise reuse rights/version, provider/embedding/RAG egress and storage, explicit tool modes/defaults and immutable grant boundary, plugin code isolation, Stop and Windows/container resources; compare current UI components separately.
- **Evidence:** Pinned README, LICENSE and pyproject reviewed; no installation, accounts/credentials, runtime/provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** surface.open-webui
- **Recorded intake revision:** 91ea4e3421d1d8069f13d4a463fcb5986d94ea60

- **November 9 source assessment:** `source-screened-not-tested` at `b0e6098e940942281d9c83f3529ea117287a3a22`.
  - Current self-hosted chat platform supports Ollama and OpenAI-compatible local/cloud routes; offline operation depends on exact enabled features and recipients.
  - Current license requires branding retention except explicit <=50 end-users/30 days or permission/enterprise exceptions; historical contributions retain original licenses.
  - Tool policy distinguishes full/ask/auto. Disabled permissions resolve to full access; saved auto preference falls back to ask if auto feature disabled. Auto model judgment is not a Core grant.
- **Assessment sources:** [source1](https://github.com/open-webui/open-webui/blob/b0e6098e940942281d9c83f3529ea117287a3a22/README.md#L1); [source2](https://github.com/open-webui/open-webui/blob/b0e6098e940942281d9c83f3529ea117287a3a22/LICENSE#L20); [source3](https://github.com/open-webui/open-webui/blob/b0e6098e940942281d9c83f3529ea117287a3a22/backend/open_webui/utils/tool_permissions.py#L14); [source4](https://github.com/open-webui/open-webui/blob/b0e6098e940942281d9c83f3529ea117287a3a22/backend/open_webui/utils/tool_permissions.py#L72). Representative source screening; no execution or admission.

<a id="anil-matcha-open-generative-ai"></a>
### Open Generative AI

[Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · **Shortlisted / planned**

- **Purpose:** Creative-media studio with cloud-backed image/video/audio workflows and separate local inference paths.
- **Architecture fit:** H/I / Q-67 alongside Q-06 Open Higgsfield, Q-22 OpenMuse and Q-35 rendering: scoped media UI/job-adapter comparison.
- **Current status:** Source researched; planned and untested. Self-hosted UI is not local/free model access; exact provider, model, submodule and native-engine admission pending.
- **Next gate:** Compare matched media jobs and independent artifacts; verify MuAPI/local route identities, upload/key privacy, full costs, cancellation/retry receipts, exact submodules/builds, Windows resources and removal.
- **Evidence:** Pinned README/package, submodule/deployment metadata and selected proxy/Electron/local-provider source reviewed; no install, accounts, models, uploads or execution audit. Dates: 2026-10-17.
- **Registered records:** media.open-generative-ai
- **Recorded intake revision:** 0668c210ebfe893f16c5149405a08d00b9ae90df

- **November 9 source assessment:** `reviewed` at `dab60665ff5f0c3d7edf4dd6926fe20e680a1af3`.
  - Desktop README now distinguishes bundled sd.cpp image engine from user-installed Wan2GP video engine/MCP on another host; hosted web version always uses cloud APIs. Self-hosting does not establish free/local generation.
  - Representative agent API proxy targets api.muapi.ai, accepts x-api-key header, strips browser cookies and forwards POST/PUT/DELETE operations; body/key egress and effect/cancellation semantics need qualification.
- **Assessment sources:** [source1](https://github.com/Anil-matcha/Open-Generative-AI/blob/dab60665ff5f0c3d7edf4dd6926fe20e680a1af3/README.md#L186); [source2](https://github.com/Anil-matcha/Open-Generative-AI/blob/dab60665ff5f0c3d7edf4dd6926fe20e680a1af3/README.md#L264); [source3](https://github.com/Anil-matcha/Open-Generative-AI/blob/dab60665ff5f0c3d7edf4dd6926fe20e680a1af3/app/api/agents/[[...path]]/route.js#L3); [source4](https://github.com/Anil-matcha/Open-Generative-AI/blob/dab60665ff5f0c3d7edf4dd6926fe20e680a1af3/app/api/agents/[[...path]]/route.js#L16). Representative source screening; no execution or admission.

<a id="openwhispr-openwhispr"></a>
### OpenWhispr

[OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr) · **Shortlisted / planned**

- **Purpose:** Desktop voice dictation, meeting transcription and notes with local or cloud speech models.
- **Architecture fit:** H/I / Q-63: voice-input/component comparison; separate ASR quality, Windows audio capture, text insertion and optional assistant actions.
- **Current status:** Source researched; planned and untested. Exact model/engine/build, focused-target behavior, system-audio scope and privacy remain gates. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Qualify exact desktop/native/model build, microphone/system-audio grants, focus and paste target, explicit local/cloud routing and fail-closed fallback, recordings/transcript retention, cancellation and total cost; no audio capture authorized.
- **Evidence:** Pinned README, package/license/security metadata and selected Windows loopback-manager source reviewed; no install, models, recording, accounts or full audit. Dates: 2026-10-17.
- **Registered records:** voice.openwhispr
- **Recorded intake revision:** 3577e5c9b2b06f7667a4b9d489935addba488341

- **November 9 source assessment:** `source-reviewed-bounded` at `b2e624b717b22b7d7584ad5956d0070ce5eb7b39`.
  - OpenWhispr1.11.1 is an MIT desktop dictation/meeting application requiring Node>=24 and platform-specific native helpers; availability badges are not local platform verification.
  - Transcription routing carries secret references rather than literal keys. It explicitly blocks streaming-only providers from falling through to an OpenAI batch POST, a concrete privacy boundary that adapters must retain.
  - Cloud/mobile auth defaults to api.openwhispr.com while local whisper.cpp is a separate route. Meeting/system audio, focused-target insertion and fallback recipients remain independently gated.
- **Assessment sources:** [source1](https://github.com/OpenWhispr/openwhispr/blob/b2e624b717b22b7d7584ad5956d0070ce5eb7b39/LICENSE#L1); [source2](https://github.com/OpenWhispr/openwhispr/blob/b2e624b717b22b7d7584ad5956d0070ce5eb7b39/package.json#L1); [source3](https://github.com/OpenWhispr/openwhispr/blob/b2e624b717b22b7d7584ad5956d0070ce5eb7b39/README.md#L17); [source4](https://github.com/OpenWhispr/openwhispr/blob/b2e624b717b22b7d7584ad5956d0070ce5eb7b39/src/helpers/transcriptionRoute.ts#L1); [source5](https://github.com/OpenWhispr/openwhispr/blob/b2e624b717b22b7d7584ad5956d0070ce5eb7b39/src/helpers/transcriptionRoute.ts#L50); [source6](https://github.com/OpenWhispr/openwhispr/blob/b2e624b717b22b7d7584ad5956d0070ce5eb7b39/openwhispr-mobile/src/lib/authClient.ts#L1). Representative source screening; no execution or admission.

<a id="librechat-ai-librechat"></a>
### LibreChat

[LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) · **Shortlisted / planned**

- **Purpose:** Self-hosted multi-provider chat and agent interface with files, tools and artifacts.
- **Architecture fit:** H / Q-39: compare selected interface/components; separate E-I build-versus-adapt study with Abrams and eligible assistant candidates.
- **Current status:** Source researched; interface/component, app-adaptation and evaluation-interface studies planned and untested. Core authority and independent harness evidence remain required. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Separately compare interface reuse, whole-app adaptation and evaluation UI; prove Core-owned auth/effects, exact tool-call enforcement and persistent approval scope, tenant/data boundaries, model recipients, migrations/export, resource costs and Stop.
- **Evidence:** Pinned README, package metadata, Compose definition and security policy screened; no execution or full audit. Dates: 2026-10-13.
- **Record IDs:** `interface.librechat`.
- **Historical intake revision:** `e1dfc10449ff713faffacd60273fddcfe2c0a698`.

- **November 9 source assessment:** `source-reviewed-bounded` at `f4154b649efa37e1345ccc517a4d8d1ed2178c82`.
  - LibreChatv0.8.9-rc1 retains MIT root licensing and a multi-service deployment: API, search and RAG endpoints plus0.0.0.0 bindings require a deployment-level threat boundary.
  - Tool routes apply agent-resource VIEW permission on the agent-tool listing route, while individual call/auth paths delegate to controller middleware. Listing permission alone cannot establish execution authorization.
  - The codebase now includes persistent tool approvals and trace/cost features, but large agent client implementation was only representatively screened; no account, MCP tool, model or interface bake-off ran.
- **Assessment sources:** [source1](https://github.com/LibreChat-AI/LibreChat/blob/f4154b649efa37e1345ccc517a4d8d1ed2178c82/LICENSE#L1); [source2](https://github.com/LibreChat-AI/LibreChat/blob/f4154b649efa37e1345ccc517a4d8d1ed2178c82/package.json#L1); [source3](https://github.com/LibreChat-AI/LibreChat/blob/f4154b649efa37e1345ccc517a4d8d1ed2178c82/docker-compose.yml#L14); [source4](https://github.com/LibreChat-AI/LibreChat/blob/f4154b649efa37e1345ccc517a4d8d1ed2178c82/Dockerfile#L76); [source5](https://github.com/LibreChat-AI/LibreChat/blob/f4154b649efa37e1345ccc517a4d8d1ed2178c82/api/server/routes/agents/tools.js#L19); [source6](https://github.com/LibreChat-AI/LibreChat/blob/f4154b649efa37e1345ccc517a4d8d1ed2178c82/api/server/routes/agents/tools.js#L65); [source7](https://github.com/LibreChat-AI/LibreChat/blob/f4154b649efa37e1345ccc517a4d8d1ed2178c82/api/server/controllers/agents/client.js#L55). Representative source screening; no execution or admission.

<a id="dmtrkovalenko-fframes"></a>
### fframes

[dmtrKovalenko/fframes](https://github.com/dmtrKovalenko/fframes) · **Shortlisted / planned**

- **Purpose:** Rust/SVG motion-video authoring with GPU rendering and frame/audio inspection.
- **Architecture fit:** H / Q-35: optional media artifact pipeline versus ordinary FFmpeg/template workflows.
- **Current status:** README and repository metadata researched; planned and untested. Admit each render as a bounded artifact job; preserve asset provenance, output review, budgets and Stop.
- **Next gate:** Preserve artifact-job controls; pin Windows FFmpeg9shared/LLVM/Vulkan binaries and codec license configuration, verify output fidelity/resource limits, process cancellation, asset rights and reproducible removal.
- **Evidence:** Pinned README and public repository metadata screened; no execution, benchmark replication or full audit. Dates: 2026-10-09.
- **Record IDs:** `media.fframes`.
- **Historical intake revision:** `e2b552892c0373a5c8dc79de9280a3289670f27b`.

- **November 9 source assessment:** `reviewed` at `e8f01b97f61eee3a06c144445682f506f1530ca1`.
  - MIT Rust video framework source includes Skia/Vulkan/native studio and codec-dependent builds; Windows now documents prebuilt FFmpeg9.0 shared build plus LLVM rather than source-built codec features.
  - CLI scaffolding explicitly links prebuilt FFmpeg DLL on Windows; example build-portable/source codecs differ by target. FFmpeg distribution/license and native driver artifacts need separate eligibility and pinning.
- **Assessment sources:** [source1](https://github.com/dmtrKovalenko/fframes/blob/e8f01b97f61eee3a06c144445682f506f1530ca1/README.md#L352); [source2](https://github.com/dmtrKovalenko/fframes/blob/e8f01b97f61eee3a06c144445682f506f1530ca1/README.md#L354); [source3](https://github.com/dmtrKovalenko/fframes/blob/e8f01b97f61eee3a06c144445682f506f1530ca1/cargo-fframes/src/main.rs#L491). Representative source screening; no execution or admission.

<a id="agentsystemlabs-agent-office"></a>
### Agent Office

[AgentSystemLabs/agent-office](https://github.com/AgentSystemLabs/agent-office) · **Shortlisted / planned**

- **Purpose:** Spatial view for coding-worker activity and supervision.
- **Architecture fit:** E/H / Q-23: compare against a plain activity dashboard.
- **Current status:** Documentation researched; optional presentation, not worker authority.
- **Next gate:** Compare plain dashboard and selected spatial supervision UI under same events; qualify exact account/shared-session revocation, terminal/port-forward grants, remote cloud billing and all-worker Stop/resource/accessibility behavior.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-29.
- **Record IDs:** `ui.agent-office`.
- **Historical intake revision:** `44aecc1ecf175939bce2049123626aa2bcddd7e2`.

- **November 9 source assessment:** `source-screened-not-tested` at `852e2ab28c4f3f31bffdf4b20353bd119c9d3270`.
  - Current Agent Office is explicitly fast-changing work-in-progress for author workflow; Node 20+ Windows/macOS/Linux claim is not host qualification.
  - Auth uses scrypt and timing-safe comparisons,14 day signed sessions and in-memory one-use sign-in links; shared-password versus account sessions have different revocation semantics.
  - AWS/Railway/Fly recipes, agent credentials and automatic dev-server port forwards add cloud spend/exposure outside spatial UI study.
- **Assessment sources:** [source1](https://github.com/AgentSystemLabs/agent-office/blob/852e2ab28c4f3f31bffdf4b20353bd119c9d3270/README.md#L1); [source2](https://github.com/AgentSystemLabs/agent-office/blob/852e2ab28c4f3f31bffdf4b20353bd119c9d3270/README.md#L52); [source3](https://github.com/AgentSystemLabs/agent-office/blob/852e2ab28c4f3f31bffdf4b20353bd119c9d3270/README.md#L124); [source4](https://github.com/AgentSystemLabs/agent-office/blob/852e2ab28c4f3f31bffdf4b20353bd119c9d3270/src/server/auth.ts#L5); [source5](https://github.com/AgentSystemLabs/agent-office/blob/852e2ab28c4f3f31bffdf4b20353bd119c9d3270/src/server/auth.ts#L69). Representative source screening; no execution or admission.

<a id="comfy-org-comfyui"></a>
### ComfyUI

[Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) · **Shortlisted / planned**

- **Purpose:** Node-graph creative workflow engine, UI and API for model-based image, video, audio and other media processing.
- **Architecture fit:** H/I/J / Q-106: General-assistant creative backend and reproducible media-workflow bake-offs versus direct model APIs and smaller admitted pipelines.
- **Current status:** Source researched; planned and untested. GPL-3.0 root signal; models, frontend, nodes and hosted terms separate. Custom nodes execute Python; local and paid partner/cloud paths need distinct admission.
- **Next gate:** Compare upstream process/API, eligible licensed components, minimal original Core job adapter and deferral; qualify exact model/workflow/node pins, GPL/distribution rights, VRAM/RAM, process/files/network, queue/effect identity, Stop, metadata/privacy, costs and removal.
- **Evidence:** Pinned README, Python/requirements/version/security metadata and selected server/CLI/node-loader excerpts reviewed; no installation, models/nodes/downloads, API or workflow execution, accounts/credentials or full audit. Dates: 2026-09-04, 2026-10-20.
- **Registered records:** `image.comfyui` (existing record; October 20 qualification refresh)
- **Recorded intake revision:** `b1a247c9cf9dbfda4b2c0a0c1d50950667eeaa0c`

- **November 9 source assessment:** `reviewed` at `fca60fe70e5b84c5c6b058263653d15cb3401e44`.
  - Current README separates local desktop/manual/portable and paid Comfy Cloud, with Windows GPU/runtime-specific builds. GPL root rights remain separate from models/frontend/custom nodes.
  - Security policy explicitly trusts anyone reaching URL and treats custom nodes as arbitrary trusted Python; loopback default is not permission isolation.
  - Server implements queue/history deletion and nodes.interrupt_processing, requiring job-specific cancellation and output receipt validation rather than assuming interrupt rolls back files/provider costs.
- **Assessment sources:** [source1](https://github.com/Comfy-Org/ComfyUI/blob/fca60fe70e5b84c5c6b058263653d15cb3401e44/SECURITY.md#L9); [source2](https://github.com/Comfy-Org/ComfyUI/blob/fca60fe70e5b84c5c6b058263653d15cb3401e44/SECURITY.md#L8); [source3](https://github.com/Comfy-Org/ComfyUI/blob/fca60fe70e5b84c5c6b058263653d15cb3401e44/server.py#L1284); [source4](https://github.com/Comfy-Org/ComfyUI/blob/fca60fe70e5b84c5c6b058263653d15cb3401e44/README.md#L219). Representative source screening; no execution or admission.

<a id="copilotkit-copilotkit"></a>
### CopilotKit

[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) · **Shortlisted / planned**

- **Purpose:** Interaction SDK and agent/UI integration patterns.
- **Architecture fit:** E/H / Q-21: compare with a custom interaction/event layer.
- **Current status:** Documentation researched; SDK and hosted-service scopes remain separate. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Choose self-hosted SDK versus paid Intelligence route explicitly; qualify runtime identity callbacks, thread/tenant ownership, tool approvals and replay, generated-UI trust, downstream Stop receipts, egress, accessibility and costs.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-29.
- **Record IDs:** `ui.copilotkit`.
- **Historical intake revision:** `b3d1aad2e3b4a5f0860ec7f3dd9c12ab757d0a13`.

- **November 9 source assessment:** `source-reviewed-bounded` at `c7815d9ac96f48fb3a64ad8c18e176a870c81763`.
  - CopilotKit remains MIT SDK/integration infrastructure; self-hosted runtime examples and Intelligence-project templates have different credential and service boundaries.
  - Current stop handler rejects unknown scope keys/invalid run IDs, resolves thread owner or Intelligence user, and checks thread-agent binding before resolving the agent. This is scoped Stop implementation evidence, not demonstrated termination of downstream work.
  - Demo auth routes use a static demonstration Bearer token; do not copy that into a product authentication design or treat frontend components as Core authorization.
- **Assessment sources:** [source1](https://github.com/CopilotKit/CopilotKit/blob/c7815d9ac96f48fb3a64ad8c18e176a870c81763/LICENSE#L1); [source2](https://github.com/CopilotKit/CopilotKit/blob/c7815d9ac96f48fb3a64ad8c18e176a870c81763/README.md#L112); [source3](https://github.com/CopilotKit/CopilotKit/blob/c7815d9ac96f48fb3a64ad8c18e176a870c81763/templates/claude-managed-agents-flutter/server/lib/intelligence-config.ts#L1); [source4](https://github.com/CopilotKit/CopilotKit/blob/c7815d9ac96f48fb3a64ad8c18e176a870c81763/packages/runtime/src/v2/runtime/handlers/handle-stop.ts#L20); [source5](https://github.com/CopilotKit/CopilotKit/blob/c7815d9ac96f48fb3a64ad8c18e176a870c81763/showcase/integrations/ms-agent-python/src/app/api/copilotkit-auth/[[...slug]]/route.ts#L1). Representative source screening; no execution or admission.

<a id="louis-cfm-coucou"></a>
### Coucou

[Louis-CFM/coucou](https://github.com/Louis-CFM/coucou) · **Shortlisted / planned**

- **Purpose:** Compact activity and companion presentation.
- **Architecture fit:** E/H/I / Q-26: compare with conventional tray and activity views.
- **Current status:** Documentation researched; no live hooks; code and media rights differ.
- **Next gate:** Split platform/features and asset rights; qualify desktop/phone token pairing/revocation and stale pending approvals, CLI/provider handoff, mic/recording and service data grants, accessibility/resources and complete link/agent Stop.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-10-01.
- **Record IDs:** `ui.coucou`.
- **Historical intake revision:** `835421c7fff260f0f0be48927591b96bfad81cad`.

- **November 9 source assessment:** `source-screened-not-tested` at `b1bc09de7f7c24a80bd8eca5729b8bee60f66402`.
  - Coucou now spans Mac/Windows/Linux and phones; dictation/notetaker and several cloud/local provider cards remain Mac-only, so earlier Mac-only description needs feature-specific update.
  - Code MIT and proprietary Coucou/Mochi/audio assets are distinct rights; do not copy branded assets under code license.
  - Windows phone-link source uses TLS, token/version handshake and boundedline/connection timeouts; optional details/answers/diffs/services default off. This is source-level defense, not verified remote approval safety.
- **Assessment sources:** [source1](https://github.com/Louis-CFM/coucou/blob/b1bc09de7f7c24a80bd8eca5729b8bee60f66402/README.md#L7); [source2](https://github.com/Louis-CFM/coucou/blob/b1bc09de7f7c24a80bd8eca5729b8bee60f66402/README.md#L34); [source3](https://github.com/Louis-CFM/coucou/blob/b1bc09de7f7c24a80bd8eca5729b8bee60f66402/README.md#L61); [source4](https://github.com/Louis-CFM/coucou/blob/b1bc09de7f7c24a80bd8eca5729b8bee60f66402/windows/src-tauri/src/phone_link/server.rs#L1); [source5](https://github.com/Louis-CFM/coucou/blob/b1bc09de7f7c24a80bd8eca5729b8bee60f66402/windows/src-tauri/src/phone_link/server.rs#L39). Representative source screening; no execution or admission.


<a id="purpledoubled-locally-uncensored"></a>
### Locally Uncensored

[PurpleDoubleD/locally-uncensored](https://github.com/PurpleDoubleD/locally-uncensored) · **Shortlisted / planned**

- **Purpose:** Desktop AI studio combining chat/projects/memory, selectable local and cloud engines, image/video/audio creation and coding/agent interfaces; whole-app and selected-component comparisons are separate.
- **Architecture fit:** E/H/I/J / existing Q-08: General personal-assistant chat/project/model-choice UX and selected inference/media/coding components versus Abrams Core adapters and eligible studios. Separate BO-04 engine feasibility from BO-05 model quality; compare upstream, AGPL-compatible components, a minimal original implementation and defer. No change to frozen initial runtimes or Core decision.
- **Current status:** Source researched; refreshed November12 at source package3.0.10, planned and untested. AGPL-3.0-only; Windows release claims are upstream, not Abrams qualification. Installer/backend/model rights, real host/resources, cloud recipients, tool grants, durable state and Stop remain gates; desktop/mobile/remote/voice/training variants require separate admission.
- **Next gate:** Compare exact upstream app, eligible licensed components, independent Core adapters and defer. Resolve AGPL/dependency/model/media rights; pin release/build/updater/transitive downloads and exact Windows/engine/model pairing. Qualify selectable routes/manual overrides, no unapproved cloud fallback, endpoint auth/egress, credentials and local/remote capability grants. Test backup/restore/deletion with attachments and tombstones, desktop versus mobile credential retention, run lineage, queued versus in-flight all-child shell/media/MCP Stop, ambiguity/replay and aggregate budget reservation. Measure full RAM/VRAM/disk, useful task quality/latency, provider and maintenance/removal costs; preserve USD25 monthly metered cap.
- **Evidence:** November12 bounded pinned source refresh: README/LICENSE/package/Cargo/Tauri, backup/recovery/privacy and independent engine/route and tool/permission/Stop reviews. Source package3.0.10 is not a verified release artifact. No installation/build, candidate execution, downloads of models/binaries, providers, personal data, voice capture, benchmark or adoption. September17 and November9 evidence remains historical.
- **Record IDs:** `desktop.locally-uncensored.purpledoubled`.
- **Current reviewed revision:** `3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3`.
- **Review date:** 2026-11-12.

- Source package, Cargo and Tauri manifests report3.0.10 and AGPL-3.0-only; frontend requires Node>=22. App code, model/media weights, engines and third-party artifacts have separate rights and provenance. A signed update channel is not proof of a code-signed or qualified Windows installer.
- README documents chat/project/engine choice, media and coding/agent surfaces, with local and optional nonlocal modes. Cloud-only media and connected/remote features must not inherit a local-only privacy claim or tool grant; exact configured endpoints and modes require separate Core admission.
- Current README describes3.0.10 chat-loss/backup recovery changes. The inspected recovery helper reads native backup and merges conversations by id and updatedAt; that heuristic is not a proven tombstone journal, crash-safe canonical store or complete deletion/restore guarantee. Test attachment migration, partial writes, failures and intentional deletion with synthetic fixtures.
- Backup credential cleanup is explicitly conditional on mobile mode: valueForSnapshot returns raw values on desktop and only runs selected secret cleaners on mobile. Local backup storage can therefore retain sensitive state; require exact secure-store fallback, file permissions/encryption, backup/retention/deletion/export and per-platform restore review.
- The privacy image helper returns external URLs directly in Tauri mode while development uses a local proxy. Tauri CSP permits named cloud/model/media domains; CSP and localhost routing do not prove network isolation or no recipient visibility. Review actual request recipients and logs per feature.
- Fresh provider state enables the loopback LU engine; explicit provider/model routing and unprefixed Ollama routing are different paths. A stale extra-provider entry is rejected rather than silently rerouted. Explicit selection alone does not qualify all auxiliary recipients, model discovery, engine downloads or cloud features.
- Cloud-content consent is installed by the phone path; the inspected desktop path has no additional gate and the helper permits the call. Memory extraction is enabled in the inspected defaults with cloud memory opt-in true; LUCloud silent extraction may choose another model through a preferred-model list or parameter-size heuristic and consumes billable tokens like chat; the heuristic does not verify actual prices. Qualify every background model/recipient and reserve combined spend; local default selection is not evidence that cloud-mode memory stays on device.
- Representative permission/executor/shell source is byte-identical to the November9 pin, so this refresh establishes no new executor fix. Current source has per-call shell cancel IDs, early-cancel race handling and process-tree kill plumbing, while optional run context/signal and mode-dependent approval remain qualification questions. Verify actual process retirement and each shell/media/MCP path; an AbortSignal or source test does not prove all-child Stop.
- Credential persistence has OS-vault and fallback paths; failed or unavailable vault paths can use reversible obfuscation in localStorage. Native Windows build support exists for the managed llama.cpp backend, while MLX media is Apple-Silicon/macOS-only. Feature thresholds and GGUF planners are resource estimates, not current free-headroom or model/backend qualification.
- Artifact checks vary: model verification can be size-only, SHA256 or unconfirmed; the Windows Ollama installer path uses a mutable current-release URL and signature checks without an exact version/digest in that call. Managed ComfyUI and app updater pins/signatures are separate controls. Pin every acquired backend/model/helper and verify removal, update and rollback behavior before execution.

Sources: [source 1](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/README.md); [source 2](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/LICENSE); [source 3](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/package.json); [source 4](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/Cargo.toml); [source 5](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/tauri.conf.json); [source 6](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/chat-backup-recovery.ts); [source 7](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/store-backup.ts); [source 8](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/privacy.ts); [source 9](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/agent-approval-policy.ts#L124-L189); [source 10](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/agents/sub-agent.ts#L340-L427); [source 11](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/agent-context.ts#L64-L166); [source 12](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/agent-context.ts#L205-L259); [source 13](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/agents/tool-executor.ts#L357-L404); [source 14](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/mcp/builtin-tools.ts#L951-L989); [source 15](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/shell-command-classify.ts#L60-L150); [source 16](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/shell.rs#L882-L987); [source 17](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/mcp/builtin-tools.ts#L1100-L1121); [source 18](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/shell.rs#L650-L763); [source 19](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/shell.rs#L232-L325); [source 20](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/shell.rs#L989-L1074); [source 21](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/agents/tool-executor.ts#L399-L485); [source 22](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/shell.rs#L31-L69); [source 23](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/shell.rs#L904-L918); [source 24](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/hooks/codexShellGate.ts#L39-L100); [source 25](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/stores/providerStore.ts#L112); [source 26](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/providers/registry.ts#L70); [source 27](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/providers/retry.ts#L30); [source 28](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/providers/lu-cloud-provider.ts#L35); [source 29](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/cloud/config.ts#L1); [source 30](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/README.md#L118); [source 31](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/cloud-content-gate.ts#L1); [source 32](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/api/cloud/memory-sync.ts#L47); [source 33](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/constants.ts#L114); [source 34](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/stores/memoryStore.ts#L501); [source 35](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/silent-model-calls.ts#L3); [source 36](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/silent-model-calls.ts#L35); [source 37](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/stores/providerStore.ts#L20); [source 38](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/stores/providerStore.ts#L103); [source 39](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/scripts/build-llama.sh#L11); [source 40](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/scripts/build-llama.sh#L50); [source 41](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/mlx.rs#L117); [source 42](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src/lib/hardware.ts#L33); [source 43](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/vram_plan.rs#L13); [source 44](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/model_verify.rs#L144); [source 45](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/install/ollama.rs#L157); [source 46](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/install/download.rs#L275); [source 47](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/src/commands/install/comfy_pin.rs#L1); [source 48](https://github.com/PurpleDoubleD/locally-uncensored/blob/3dff4291f8ad5a86078679e23c7a0a2cd2adf9b3/src-tauri/tauri.conf.json#L32).

#### Historical September17 intake and November9 source assessment

[PurpleDoubleD/locally-uncensored](https://github.com/PurpleDoubleD/locally-uncensored) · **Shortlisted / planned**

- **Purpose:** Desktop AI studio and engine, media and coding components.
- **Architecture fit:** E/H / Q-08: score concepts, component reuse and whole-app adaptation separately.
- **Current status:** Source researched; license, host and execution intake pending.
- **Next gate:** Compare selected AGPL-compatible components/whole app/minimal implementation; verify per-surface run identity, approval policy and actual in-flight shell/media Stop, exact model/engine/resources and all cloud/update recipients/cost.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-17.
- **Record IDs:** `desktop.locally-uncensored.purpledoubled`.
- **Historical intake revision:** `bc8dcc08520557ad63270a79b5362462150707d3`.

- **November 9 source assessment:** `source-screened-not-tested` at `d4935af470a8a4b231d0ffef3b8c8708fdd4a10c`.
  - AGPLv3 studio still combines local chat/media/coding with optional nonlocal routes; Windows installer/release test claims remain upstream, not Abrams tests.
  - Parallel executor groups side-effect keys, validates arguments and awaits explicit runtime approval; runtime may explicitly approve all, so gate wiring matters.
  - Run context is optional for unthreaded surfaces; AbortSignal is forwarded to cancellable tools, but source comments document prior long-running shell cancellation gap. Qualify each actual tool implementation, not presence of signal alone.
- **Assessment sources:** [source1](https://github.com/PurpleDoubleD/locally-uncensored/blob/d4935af470a8a4b231d0ffef3b8c8708fdd4a10c/README.md#L7); [source2](https://github.com/PurpleDoubleD/locally-uncensored/blob/d4935af470a8a4b231d0ffef3b8c8708fdd4a10c/README.md#L40); [source3](https://github.com/PurpleDoubleD/locally-uncensored/blob/d4935af470a8a4b231d0ffef3b8c8708fdd4a10c/src/api/agents/tool-executor.ts#L34); [source4](https://github.com/PurpleDoubleD/locally-uncensored/blob/d4935af470a8a4b231d0ffef3b8c8708fdd4a10c/src/api/agents/tool-executor.ts#L76); [source5](https://github.com/PurpleDoubleD/locally-uncensored/blob/d4935af470a8a4b231d0ffef3b8c8708fdd4a10c/src/api/agents/tool-executor.ts#L357). Representative source screening; no execution or admission.

<a id="wide-trace-open-higgsfield"></a>
### Open Higgsfield

[wide-trace/open-higgsfield](https://github.com/wide-trace/open-higgsfield) · **Shortlisted / planned**

- **Purpose:** Image/video studio concepts, composer, history and job workflows.
- **Architecture fit:** H / Q-06: compare image jobs with the provider-neutral control; video separate.
- **Current status:** Source screened; unresolved reuse rights and provider/data boundaries.
- **Next gate:** License, exact endpoints, media egress, credentials, budgets and cancellation review.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-17.
- **Record IDs:** `media.open-higgsfield.wide-trace`.
- **Historical intake revision:** `b16a0efe4d7e2707b56f8ccb02387fd2a9d2eddf`.
- **Currentness (November 9):** `unchanged`; observed HEAD `b16a0efe4d7e2707b56f8ccb02387fd2a9d2eddf`. Matches a recorded revision; no runtime qualification implied.

<a id="ryensx-opencodex"></a>
### OpenCodex browser adjacency

[RyensX/OpenCodex](https://github.com/RyensX/OpenCodex) · **Shortlisted / planned**

- **Purpose:** Browser-facing adjacency to a Codex workflow.
- **Architecture fit:** C / Q-03: fixed-loopback study; remote access remains a separate scope.
- **Current status:** Planned adjacency qualification, not a BO-03 runtime competitor.
- **Next gate:** Exact artifact, loopback boundary, authentication and lifecycle qualification.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `surface.opencodex.ryensx`.


## Memory and research

- **November 9 source assessment:** `reviewed` at `f6fd79ccffe2b631db99556e862b008cba04f5ab`.
  - Current source describes a desktop-runtime/browser intermediary for both legacy Codex Desktop and newer ChatGPT Desktop; it remains adjacency/remote UI scope, not independently qualified coding runtime.
  - Gateway auth source limits login body8KiB and tokens256, parses password configuration and supports hashed storage; exact fail-closed remote exposure/auth lifecycle still requires runtime evidence.
  - AGPL root license and proprietary desktop dependency are distinct reuse/transport gates; remote LAN/Tailscale setup is not automatically authorized.
- **Assessment sources:** [source1](https://github.com/RyensX/OpenCodex/blob/f6fd79ccffe2b631db99556e862b008cba04f5ab/README.md#L5); [source2](https://github.com/RyensX/OpenCodex/blob/f6fd79ccffe2b631db99556e862b008cba04f5ab/gateway/runtime/http/auth.cjs#L17); [source3](https://github.com/RyensX/OpenCodex/blob/f6fd79ccffe2b631db99556e862b008cba04f5ab/gateway/runtime/http/auth.cjs#L24). Representative source screening; no execution or admission.

<a id="itzcrazykns-vane"></a>
### Vane (formerly Perplexica)

[ItzCrazyKns/Vane](https://github.com/ItzCrazyKns/Vane) · **Shortlisted / planned**

- **Purpose:** Self-hosted search-and-answer workspace combining SearxNG, web/document retrieval, citations, research modes and selectable local or cloud model providers.
- **Architecture fit:** E/F/H/I/J / Q-144: General-assistant research/learning, cited answers and document questions versus Core search/source adapter, HyperResearch, GPT Researcher and Open Notebook; research pipeline, selected UI components and whole application are separate comparisons.
- **Current status:** Source researched; planned and untested. MIT package1.12.2/Next16 with SQLite/native/browser dependencies; old Perplexica repository redirects to this same identity. Local deployment does not make web searches, remote models or uploaded-document processing private/offline; citations require independent verification.
- **Next gate:** Compare upstream, eligible retrieval/source/UI components, minimal original Core research adapter and defer. Qualify auth/config/secret boundaries, exact provider/embedding/search recipients, URL/SSRF/browser and upload isolation, source fidelity/citation coverage, retention/deletion/export, host/resources, complete cancellation and total per-answer cost.
- **Evidence:** Pinned README/license/package/Compose/config/search/upload source and verified Perplexica redirect with independent read-only review; no install/build, searches/scraping, uploads, credentials, model/provider calls or benchmark. Dates: 2026-11-08.
- **Registered records:** `research.vane`.
- **Recorded revision:** `348feca3e378fb4157b217724ed508dc707f853f`.
- **Currentness (November 9):** `unchanged`; observed HEAD `348feca3e378fb4157b217724ed508dc707f853f`. Matches a recorded revision; no runtime qualification implied.

<a id="nvidia-auto-ontology"></a>
### NVIDIA Auto-Ontology

[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) · **Shortlisted / planned**

- **Purpose:** Semantic catalog and ontology layer over relational metadata/data, with graph-based context retrieval, natural-language SQL workflows and API/CLI/MCP access.
- **Architecture fit:** E/F/I/J / Q-142; BO-06/BO-07: Broad-assistant structured-data understanding, entity/metric definitions, provenance and grounded analytics versus Core relational/FTS, curated schemas and eligible graph/retrieval controls including Semantica/Hindsight. Schema generation, retrieval and SQL execution are separate variants.
- **Current status:** Source researched; planned and untested. Apache-2.0 package1.2.0/Python>=3.12,<3.14, Postgres/pgvector plus web/backend/ingestion stack. Defaults use hosted NVIDIA NIM roles; local deployment does not establish local inference. Generated ontologies and SQL remain proposals, not canonical facts or guaranteed deterministic answers.
- **Next gate:** Compare upstream, eligible metadata/schema/retrieval components, minimal original Core semantic adapter and defer. Qualify source rights and provenance/certification/corrections, database/tenant read-only grants and query limits, model endpoint/key/embedding pairing and egress, secrets/auth/ports, host/resources, all-query/worker Stop, deletion/export, total costs and independent held-out answer checks.
- **Evidence:** Pinned README/license/package/deployment/model configuration and representative catalog/query/auth source with independent read-only review; no install, containers, source/database import, credentials, model/API/query execution or benchmark. Dates: 2026-11-08.
- **Registered records:** `knowledge.auto-ontology`.
- **Recorded revision:** `c447003f72a822301e927196a4ecb5b597c308d5`.
- **Currentness (November 9):** `unchanged`; observed HEAD `c447003f72a822301e927196a4ecb5b597c308d5`. Matches a recorded revision; no runtime qualification implied.

<a id="mempalace-mempalace"></a>
### MemPalace

[MemPalace/mempalace](https://github.com/MemPalace/mempalace) · **Shortlisted / planned**

- **Purpose:** Verbatim conversation/project memory with structured semantic retrieval, pluggable vector backends, temporal entity graph and CLI/MCP access.
- **Architecture fit:** E/F/I/J / Q-135; BO-06/BO-07: General-assistant source-linked recall across people, projects, research and everyday tasks versus Core relational/FTS, Hindsight, AgentMemory and Memvid; shared hub, background ingestion and task coordination are separately gated variants.
- **Current status:** Source researched; planned and untested. MIT package3.12.0/Python>=3.10 at a develop pin. Default embedded Chroma disables anonymized telemetry; local embeddings need first-use model downloads. Upstream retrieval-recall scores do not establish answer accuracy or superiority over other memory systems.
- **Next gate:** Preregister retrieval and grounded-answer metrics separately against Core FTS/Hindsight; qualify imports/chunk reconstruction/updates/deletion/export/provenance, backend/embedder pins and recipients, Windows wheels/RAM/disk, MCP grants and interrupted-write recovery/Stop.
- **Evidence:** Pinned README/license/package, benchmark disclosure and representative backend/embedding/provider/MCP/deletion source with independent review; no install, model download, personal-data scan/import, hooks/services/schedules, hub connection, API/model calls or benchmark. Dates: 2026-11-03.
- **Registered records:** `memory.mempalace`.
- **Recorded revision:** `4f7745afbd9d0197c6475b4c7ac846d4932eaeda`.

- **November 9 source assessment:** `source-screened-not-tested` at `927d467d72764ced1f2be900b95cbc7dae4b4581`.
  - MemPalace is verbatim/pluggable memory;96.6 percentR@5 remains upstream retrieval benchmark, not end-to-end assistant truth or Abrams result.
  - Optional OpenAI-compatible remote embeddings require reindex because vectors differ; only genuinely local/LAN endpoint preserves claimed network locality.
  - Write/read compatibility resolves both parent_drawer_id and parent_entry_id for logical chunks and redacts source path/inode from response metadata; this does not establish storage deletion, tenant grants or canonical history integrity.
- **Assessment sources:** [source1](https://github.com/MemPalace/mempalace/blob/927d467d72764ced1f2be900b95cbc7dae4b4581/README.md#L5); [source2](https://github.com/MemPalace/mempalace/blob/927d467d72764ced1f2be900b95cbc7dae4b4581/README.md#L338); [source3](https://github.com/MemPalace/mempalace/blob/927d467d72764ced1f2be900b95cbc7dae4b4581/mempalace/mcp_server/tools_write.py#L24); [source4](https://github.com/MemPalace/mempalace/blob/927d467d72764ced1f2be900b95cbc7dae4b4581/mempalace/mcp_server/tools_write.py#L67); [source5](https://github.com/MemPalace/mempalace/blob/927d467d72764ced1f2be900b95cbc7dae4b4581/pyproject.toml#L1). Representative source screening; no execution or admission.

<a id="egonex-ai-understand-anything"></a>
### Understand Anything

[Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) · **Shortlisted / planned**

- **Purpose:** Interactive codebase and knowledge-base graphs, explanations, guided tours, search and change-impact views combining static analysis and LLM interpretation.
- **Architecture fit:** H/I/J / Q-123: Personal/project knowledge exploration and development/bake-off repository understanding versus rg/Git/LSP, OpenGrok Q-41, Codebase Memory MCP Q-88 and REA Q-38; retrieval and inferred relationships evaluated separately.
- **Current status:** Source researched; planned and untested. MIT public-root signal; generated graph claims and advertised client compatibility are not verified completeness, correctness, permissions or Windows results.
- **Next gate:** Compare pinned upstream, eligible components, minimal original Core projection and defer; qualify source/claim provenance, graph freshness and deletion, client/model egress, project/path grants, dashboard endpoints, native builds/resources, Stop, costs and export/removal.
- **Evidence:** Pinned README/package/license and representative source screening with independent review; no installation, project scanning, graph generation, server/client activation, model calls or benchmark. Dates: 2026-10-27.
- **Registered records:** `knowledge.understand-anything`.
- **Recorded revision:** `4e6d3299017a7432da15957874992837a315c5b4`.

- **November 9 source assessment:** `reviewed` at `a6ea4024767df85ce4f99140d4f12ecfc5a81eb6`.
  - Current MITpackage combinesLLMprompt-generated summaries withstaticanalysis and derives graph in.ua orlegacyfolder; generated architecture/summary claims need independent validation and freshness/deletion.
  - Representative analyzer injects source content/projectcontext into model prompt; localdashboard/source storage does not establish offline model processing or injection isolation.
  - MCPdashboard source bindsloopback and exposes token-bearing URL; securitypolicy says filecontents use graph-derived pathallowlist. TokenURL/log exposure and exact graph boundary remain qualification gates.
- **Assessment sources:** [source1](https://github.com/Egonex-AI/Understand-Anything/blob/a6ea4024767df85ce4f99140d4f12ecfc5a81eb6/package.json#L5); [source2](https://github.com/Egonex-AI/Understand-Anything/blob/a6ea4024767df85ce4f99140d4f12ecfc5a81eb6/understand-anything-plugin/packages/core/src/analyzer/llm-analyzer.ts#L19); [source3](https://github.com/Egonex-AI/Understand-Anything/blob/a6ea4024767df85ce4f99140d4f12ecfc5a81eb6/understand-anything-plugin/packages/mcp/bin/understand-anything-mcp.mjs#L465); [source4](https://github.com/Egonex-AI/Understand-Anything/blob/a6ea4024767df85ce4f99140d4f12ecfc5a81eb6/SECURITY.md#L34). Representative source screening; no execution or admission.

<a id="rohitg00-agentmemory"></a>
### AgentMemory

[rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) · **Shortlisted / planned**

- **Purpose:** Persistent cross-session and cross-agent observations, decisions and lessons, with coding-agent integrations and MCP access.
- **Architecture fit:** F/H/I/J / Q-121: General-assistant continuity and development/bake-off handoffs versus Core canonical memory, Hindsight, Mem0 and explicit notes; broader personal-domain value measured separately.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal; default shared agent scope, provider auto-detection and consolidation require explicit isolation and route qualification.
- **Next gate:** Compare Core FTS/Hindsight/Memvid with synthetic memory recall/deletion/contradiction fixtures; qualify runtime dependency/artifacts, authenticated endpoint and credential ACLs, capture loss/retry/source provenance, embedding recipients, hooks removal and Stop/resource costs.
- **Evidence:** Pinned README/license/package metadata and representative source screening with independent review; no installation, memory capture/import, model/provider/MCP calls or benchmark. Dates: 2026-10-27.
- **Registered records:** `memory.agentmemory`.
- **Recorded revision:** `c5b8ebfb32eb6a08fe301d3bb75840f3597b66c8`.

- **November 9 source assessment:** `source-screened-not-tested` at `be8f01e697c6816392beb9c07136e5315bf5a7b4`.
  - AgentMemory current Apache-2.0 coding-session capture supports many clients; keyword recall needs no provider, semantic embeddings introduce separate local/remote resource and egress choices.
  - OpenCode capture defaults localhost3111, resolves implicit local secret only for loopback URLs, and sends optional Bearer authorization. Explicit remote endpoints require their own key and recipient grants.
  - Capture POST errors are swallowed except debug logging and5 second clienttimeout; client timeout does not prove server cancellation or durable successful capture.
- **Assessment sources:** [source1](https://github.com/rohitg00/agentmemory/blob/be8f01e697c6816392beb9c07136e5315bf5a7b4/README.md#L99); [source2](https://github.com/rohitg00/agentmemory/blob/be8f01e697c6816392beb9c07136e5315bf5a7b4/README.md#L361); [source3](https://github.com/rohitg00/agentmemory/blob/be8f01e697c6816392beb9c07136e5315bf5a7b4/plugin/opencode/agentmemory-capture.ts#L7); [source4](https://github.com/rohitg00/agentmemory/blob/be8f01e697c6816392beb9c07136e5315bf5a7b4/plugin/opencode/agentmemory-capture.ts#L48); [source5](https://github.com/rohitg00/agentmemory/blob/be8f01e697c6816392beb9c07136e5315bf5a7b4/LICENSE#L1). Representative source screening; no execution or admission.

<a id="memvid-memvid"></a>
### Memvid

[memvid/memvid](https://github.com/memvid/memvid) · **Shortlisted / planned**

- **Purpose:** Portable single-file versioned memory and retrieval using the current Rust v2 .mv2 format, lexical search and optional vector/embedding features.
- **Architecture fit:** F/H/I/J / Q-122: Personal/project knowledge and portable derived memory versus Core SQLite FTS, Hindsight, LEANN Q-120 and conventional vector retrieval; memory policy and canonical truth stay in Core.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal; current v2 differs from legacy QR/video descriptions. Tombstone deletion is not demonstrated physical erasure; cloud and local features need separate qualification.
- **Next gate:** Compare pinned upstream, eligible components, minimal Core adapter and defer; qualify exact SDK/feature/model identity, Windows and native resources, offline/egress, WAL/crash/rebuild/concurrency, retained versions/deletion/export, Stop and full costs.
- **Evidence:** Pinned README/license/package metadata and representative source screening with independent review; no installation, memory capture/import, model/provider/MCP calls or benchmark. Dates: 2026-10-27.
- **Registered records:** `memory.memvid`.
- **Recorded revision:** `e6bd9f7b9c38cd8d5370fa0fc936ac1dcd751813`.
- **Currentness (November 9):** `unchanged`; observed HEAD `e6bd9f7b9c38cd8d5370fa0fc936ac1dcd751813`. Matches a recorded revision; no runtime qualification implied.

<a id="startrail-org-leann"></a>
### LEANN

[StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) · **Shortlisted / planned**

- **Purpose:** Compact vector retrieval using graph-based selective embedding recomputation, with document/code ingestion, RAG applications and MCP access.
- **Architecture fit:** F/H/I/J / Q-120: General-assistant personal/project knowledge and bake-off source retrieval versus Core FTS, conventional vector search and XERJ Q-115; embedding/answer routes separate.
- **Current status:** Source researched; planned and untested. MIT root signal; model/native dependency and data-source rights separate. Storage/privacy/accuracy claims are not local measurements; recomputation changes resource/latency trade-offs.
- **Next gate:** Preserve existing platform/retrieval/rights/resource/Stop gates; explicitly contain and authenticate optional HTTP search and unauthenticated ZMQ embedding endpoints, including environment-overridden bind, before any launch.
- **Evidence:** Pinned README, Python/MCP/security metadata and independent representative source screening; no install, data/index/model downloads, indexing, MCP/embedding/LLM calls or benchmark. Dates: 2026-10-26.
- **Registered records:** `retrieval.leann`.
- **Recorded revision:** `a63f484a0b00627fbc641b500ee377d35344eb72`.

- **November 9 source assessment:** `reviewed` at `07796bd7e40f2d5f3a4be9e45adf1f62a68481fd`.
  - Current source retains selective embedding recomputation; savings/accuracy remain upstream claims, not Abrams measurements.
  - HTTP app exposes index listing and search from current project without an authentication dependency in create_app; bind defaults to127.0.0.1 but is environment-overridable.
  - Security policy explicitly identifies unauthenticated ZMQ embedding servers; Windows native dependency build instructions do not establish host qualification.
- **Assessment sources:** [source1](https://github.com/StarTrail-org/LEANN/blob/07796bd7e40f2d5f3a4be9e45adf1f62a68481fd/README.md#L196); [source2](https://github.com/StarTrail-org/LEANN/blob/07796bd7e40f2d5f3a4be9e45adf1f62a68481fd/packages/leann-core/src/leann/server.py#L106); [source3](https://github.com/StarTrail-org/LEANN/blob/07796bd7e40f2d5f3a4be9e45adf1f62a68481fd/packages/leann-core/src/leann/server.py#L193); [source4](https://github.com/StarTrail-org/LEANN/blob/07796bd7e40f2d5f3a4be9e45adf1f62a68481fd/SECURITY.md#L33). Representative source screening; no execution or admission.

<a id="xerj-org-xerj"></a>
### XERJ

[xerj-org/xerj](https://github.com/xerj-org/xerj) · **Shortlisted / planned**

- **Purpose:** Local-first Rust search engine and MCP server for BM25, vector/hybrid retrieval, code/document indexing and derived agent-memory views.
- **Architecture fit:** F/H/I/J / Q-115: General-assistant knowledge/project/log retrieval and bake-off source search versus SQLite FTS, existing vector/search tools and minimal Core retrieval adapters; optional Jev reranking separate.
- **Current status:** Source researched; planned and untested. Apache-2.0 with NOTICE. Indexes/memory remain derived; insecure mode grants every reachable caller full access. Local, proxy embedding, reranking and corpus-import paths need separate qualification.
- **Next gate:** Retain existing retrieval/auth/deletion/Stop gates; separately qualify Query-1 model and program semantics, source-span/count evidence, UNKNOWN/CONFLICT calibration, resources and licensing before broadening scope.
- **Evidence:** Pinned README, Cargo/security/retrieval/corpus documentation and independent representative source screening; no install, indexing, model/corpus download, MCP/server/provider call or benchmark. Dates: 2026-10-23.
- **Registered records:** `retrieval.xerj`.
- **Recorded revision:** `5ad85724e14602259f264de3e33fd0a9b5d106f0`.

- **November 9 source assessment:** `reviewed` at `50e4ffded5518b1822cfac5450fa34d3829ab8ab`.
  - README now introduces Query-1 in rc.101: question-to-program execution with UNKNOWN/CONFLICT, quoted-span lookup evidence and CPU/offline claims. These are an additional model/component scope requiring separate labels and artifact rights.
  - Security model documents middleware plus engine visibility guards; absent guard allows internal access and detached work must propagate guard explicitly. Do not infer universal namespace isolation.
  - Existing no-admission and insecure-mode cautions remain; Windows MCP field reports remain upstream observations.
- **Assessment sources:** [source1](https://github.com/xerj-org/xerj/blob/50e4ffded5518b1822cfac5450fa34d3829ab8ab/README.md#L51); [source2](https://github.com/xerj-org/xerj/blob/50e4ffded5518b1822cfac5450fa34d3829ab8ab/docs/SECURITY_MODEL.md#L109); [source3](https://github.com/xerj-org/xerj/blob/50e4ffded5518b1822cfac5450fa34d3829ab8ab/engine/crates/xerj-server/src/main.rs#L3058). Representative source screening; no execution or admission.

<a id="lfnovo-open-notebook"></a>
### Open Notebook

[lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) · **Shortlisted / planned**

- **Purpose:** Self-hosted source notebooks with retrieval, source-backed chat, transformations and optional podcast workflows across model providers.
- **Architecture fit:** F/H/I/J / Q-111: General-assistant research/learning workspace and evidence organization; compare Core retrieval/notebook views, direct provider adapters and existing research tools.
- **Current status:** Source researched; planned and untested. MIT root signal. Self-hosted UI/storage does not imply all extraction, embedding, chat or speech is local. API password is optional in reviewed source. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Pin a compatible isolated Python/container environment, explicitly set auth/proxy/origins, qualify document parsing and provider egress per stage, canonical-source separation, deletion/export, resource/model cost and all-job cancellation.
- **Evidence:** Pinned README, Python/Compose/env/security metadata and selected auth/source/search/credential excerpts reviewed; no install/services, data ingestion, credentials, provider/media/API/model calls or full audit. Dates: 2026-10-21.
- **Registered records:** `research.open-notebook`
- **Recorded revision:** `a0f6f3081ae06328f0a451b3a3ef2959ca25721d`

- **November 9 source assessment:** `source-reviewed-bounded` at `a6b572eb9849785dfb7c747190a01b0bb99fedf2`.
  - Open Notebook1.15.1 is MIT with Python>=3.11,<3.13, which excludes this workspace Python3.13 from the declared package range without a separate environment.
  - PasswordAuthMiddleware explicitly disables authentication when OPEN_NOTEBOOK_PASSWORD is unset and supports a Docker-secret password file; CORS/preflight and documented public paths are exempt.
  - Docker binds API0.0.0.0 and README supports cloud/local providers; self-hosted storage does not imply local extraction, embedding or speech. Prior optional-password caveat remains current.
- **Assessment sources:** [source1](https://github.com/lfnovo/open-notebook/blob/a6b572eb9849785dfb7c747190a01b0bb99fedf2/LICENSE#L1); [source2](https://github.com/lfnovo/open-notebook/blob/a6b572eb9849785dfb7c747190a01b0bb99fedf2/pyproject.toml#L1); [source3](https://github.com/lfnovo/open-notebook/blob/a6b572eb9849785dfb7c747190a01b0bb99fedf2/api/auth.py#L12); [source4](https://github.com/lfnovo/open-notebook/blob/a6b572eb9849785dfb7c747190a01b0bb99fedf2/api/auth.py#L48); [source5](https://github.com/lfnovo/open-notebook/blob/a6b572eb9849785dfb7c747190a01b0bb99fedf2/Dockerfile#L103); [source6](https://github.com/lfnovo/open-notebook/blob/a6b572eb9849785dfb7c747190a01b0bb99fedf2/README.md#L61). Representative source screening; no execution or admission.

<a id="aiming-lab-autoresearchclaw"></a>
### AutoResearchClaw

[aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) · **Shortlisted / planned**

- **Purpose:** Staged literature, hypothesis, experiment, analysis and paper-drafting workflow with human-intervention modes.
- **Architecture fit:** F/H/J / Q-105: General-assistant evidence-backed research and bake-off experiment orchestration versus direct research and bounded Core workflows; complements Q-20.
- **Current status:** Source researched; planned and untested. MIT root signal. Pipeline/citation-verification claims are unreplicated; local sandbox defaults can execute generated code on the host.
- **Next gate:** Compare upstream, eligible stage/verification components, minimal original Core workflow and deferral; protect sources/holdouts, qualify subprocess/container/CLI/remote paths, grants, data/model routes, real versus simulated results, cost reservations, Stop and promotion.
- **Evidence:** Pinned README, package/config and selected local/container sandbox and pipeline executor excerpts reviewed; no install/setup, agents, credentials, generated-code/research/model execution or full audit. Dates: 2026-10-20.
- **Registered records:** `workflow.autoresearchclaw`
- **Recorded intake revision:** `be4ba4755bf1b52220f25e13b2293b5956590070`
- **Currentness (November 9):** `unchanged`; observed HEAD `be4ba4755bf1b52220f25e13b2293b5956590070`. Matches a recorded revision; no runtime qualification implied.

<a id="kepano-defuddle"></a>
### Defuddle

[kepano/defuddle](https://github.com/kepano/defuddle) · **Shortlisted / planned**

- **Purpose:** HTML main-content extraction and Markdown normalization for research input.
- **Architecture fit:** F/I / Q-94: Raw source/DOM plus current extraction, Q-72 Firecrawl and Readability-style controls.
- **Current status:** Source researched; planned and untested. MIT root signal. 0.19.5; browser/Node DOM/CLI paths differ, Node import requires ESM per docs. Parsing Markdown is not factual verification.
- **Next gate:** Compare matched page corpus against Readability/native extraction for evidence recall/format fidelity; pin DOM implementation and DocumentAPI migration, bound HTML size/time, inspect async extractors/network, retain source links and cancellation.
- **Evidence:** Pinned README and package.json reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** research.defuddle
- **Recorded intake revision:** 556d74e8c8fd68c49912d4b11a4ae9ec04d7b2b5

- **November 9 source assessment:** `source-screened-not-tested` at `3e8bde9f5f855bc968e95837a750c5968a9fe639`.
  - Defuddle remains content extraction/cleaning rather than retrieval authority or a model; README marks work-in-progress.
  - Node adapter accepts DOMDocument and awaits parseAsync then Markdown conversion; HTML-string/JSDOM-instance inputs are deprecated for next major release.
  - Rendered/cleaned content is still untrusted input; removed material can affect citations and evidence recall, and DOM/parser resource limits require tests.
- **Assessment sources:** [source1](https://github.com/kepano/defuddle/blob/3e8bde9f5f855bc968e95837a750c5968a9fe639/README.md#L1); [source2](https://github.com/kepano/defuddle/blob/3e8bde9f5f855bc968e95837a750c5968a9fe639/src/node.ts#L5). Representative source screening; no execution or admission.

<a id="deusdata-codebase-memory-mcp"></a>
### Codebase Memory MCP

[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · **Shortlisted / planned**

- **Purpose:** Local code indexing and graph queries through MCP with optional visualization/chat.
- **Architecture fit:** F/H / Q-88: rg/LSP and Q-41 OpenGrok plus source-preserving Core projections.
- **Current status:** Source researched; planned and untested. MIT root signal. Native C/SQLite/tree-sitter artifacts; main's Lens Beta differs from documented v0.11.0 release. Speed/token claims unverified.
- **Next gate:** Measure parser/graph correctness, stale/deleted/ignored files, generated code, file/privacy scope, resources, API/UI auth, read/write tools and exact local-model pairing.
- **Evidence:** Pinned README reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** memory.codebase-memory-mcp
- **Recorded intake revision:** 1346ac4ea2835c15b1aa257e970abbd520e92c74

- **November 9 source assessment:** `reviewed` at `612eee2518ef84cc573e491fdee5fa5c90264cb5`.
  - Current README still distinguishes core MCP from optional CBM Lens open beta0.0.1; native C and bundled grammars do not prove graph completeness or every advertised language/client path.
  - Representative C HTTP server binds loopback and validates same-server origins; another localhost port is treated as different principal. UI RPC owns separate read-only MCP instance, while indexing remains CLI operation.
  - These source controls strengthen specific origin/read surfaces but do not admit installer/hooks, local model pairing or mutation tools.
- **Assessment sources:** [source1](https://github.com/DeusData/codebase-memory-mcp/blob/612eee2518ef84cc573e491fdee5fa5c90264cb5/README.md#L21); [source2](https://github.com/DeusData/codebase-memory-mcp/blob/612eee2518ef84cc573e491fdee5fa5c90264cb5/src/ui/http_server.c#L117); [source3](https://github.com/DeusData/codebase-memory-mcp/blob/612eee2518ef84cc573e491fdee5fa5c90264cb5/src/ui/http_server.c#L205); [source4](https://github.com/DeusData/codebase-memory-mcp/blob/612eee2518ef84cc573e491fdee5fa5c90264cb5/graph-ui/tools/lib/cbm-server.mjs#L72). Representative source screening; no execution or admission.

<a id="zeropointrepo-youtube-skills"></a>
### YouTube Skills

[ZeroPointRepo/youtube-skills](https://github.com/ZeroPointRepo/youtube-skills) · **Shortlisted / planned**

- **Purpose:** YouTube transcript, video/channel/playlist search via TranscriptAPI-backed skills.
- **Architecture fit:** F/I / Q-86: Native transcript/source checks and direct eligible transcript services.
- **Current status:** Source researched; planned and untested. MIT root signal. Matched to ZeroPointRepo from description and author profile; screenshot has no owner. Keep original-post identity confirmation gate.
- **Next gate:** Verify intended repository, TranscriptAPI pricing/quotas/key storage, authorized access, timestamp/language fidelity, coverage, privacy and cancellation.
- **Evidence:** Pinned README including account/key setup reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** research.youtube-skills
- **Recorded intake revision:** 4f7994b94e7d5e250c3b51102d609992e04d5d0d
- **Currentness (November 9):** `unchanged`; observed HEAD `4f7994b94e7d5e250c3b51102d609992e04d5d0d`. Matches a recorded revision; no runtime qualification implied.

<a id="assafelovic-gpt-researcher"></a>
### GPT Researcher

[assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) · **Shortlisted / planned**

- **Purpose:** Web/local-document research worker with cited reports, recursive exploration and selectable passage filters.
- **Architecture fit:** F/I / Q-80 alongside Q-07 HyperResearch, Abrams-controlled research and Q-11 Jev evidence support; frozen-page filter ablations separate from end-to-end research.
- **Current status:** Source researched; planned and untested. Root Apache-2.0 conflicts with MIT package metadata; Jev/key-dependent filtering, keyword fallbacks, source fidelity, recursive costs and host/privacy remain gates. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Resolve exact redistribution notices, pin retrieval/filter/model and multi-agent path, protect source fidelity and holdouts, bound recursive search/embedding costs, restrict scraping/network recipients and verify cancellation/export before testing.
- **Evidence:** Pinned README, LICENSE/package/Compose/default config, context/deep-research/eval docs and selected context-selection source reviewed; no install, credentials/accounts, research/model/search/Jev calls or full audit. Dates: 2026-10-17.
- **Registered records:** research.gpt-researcher
- **Recorded intake revision:** 3582a6841fe7dc801e2a34e34ee408641aea9bce

- **November 9 source assessment:** `source-reviewed-bounded` at `bca58e1fd8e25658dae520d085b52ddc8bcf2b40`.
  - GPT Researcher0.16.0 still declares MIT in pyproject metadata while root LICENSE is Apache2.0; retain the existing rights inconsistency rather than declaring it resolved.
  - Current context retriever caps raw document input to avoid embedding token-limit failure. Multi-agent runner dynamically falls back between multi_agents and AG2 implementations, so exact orchestration route must be pinned.
  - README advertises optional Jev smart filtering and no-key defaults; this review did not replicate filtering quality, automatic fallback behavior or recursive research cost. Current source screening does not erase those prior gates.
- **Assessment sources:** [source1](https://github.com/assafelovic/gpt-researcher/blob/bca58e1fd8e25658dae520d085b52ddc8bcf2b40/LICENSE#L1); [source2](https://github.com/assafelovic/gpt-researcher/blob/bca58e1fd8e25658dae520d085b52ddc8bcf2b40/pyproject.toml#L1); [source3](https://github.com/assafelovic/gpt-researcher/blob/bca58e1fd8e25658dae520d085b52ddc8bcf2b40/requirements.txt#L1); [source4](https://github.com/assafelovic/gpt-researcher/blob/bca58e1fd8e25658dae520d085b52ddc8bcf2b40/README.md#L80); [source5](https://github.com/assafelovic/gpt-researcher/blob/bca58e1fd8e25658dae520d085b52ddc8bcf2b40/gpt_researcher/context/retriever.py#L1); [source6](https://github.com/assafelovic/gpt-researcher/blob/bca58e1fd8e25658dae520d085b52ddc8bcf2b40/backend/server/multi_agent_runner.py#L1). Representative source screening; no execution or admission.

<a id="pocketbase-pocketbase"></a>
### PocketBase

[pocketbase/pocketbase](https://github.com/pocketbase/pocketbase) · **Shortlisted / planned**

- **Purpose:** Embedded SQLite backend with authentication, files, realtime updates and an admin interface.
- **Architecture fit:** D/I / Q-62: optional storage/API and prototype-backend study versus current SQLite/API controls; no canonical-store replacement implied.
- **Current status:** Source-screened backend/component candidate; authoritative upstream moved off GitHub and was separately pinned/reviewed. Planned and untested; no replacement of Core Store or adoption.
- **Next gate:** Track historical GitHub identity and separately pinned authoritative forge source; qualify new module/dependency provenance/Windows Go 1.27 build, schema/upgrade/backup/recovery, auth and file/realtime exposure; retain Core canonical Store ownership.
- **Evidence:** Pinned README, go.mod, release targets and security policy plus dated official access/file/production/FAQ docs reviewed; no install, server, migration or full audit. Dates: 2026-10-17.
- **Registered records:** storage.pocketbase
- **Recorded intake revision:** 6f370ea741f33adf889eef02e3c1b884a47aa522

- **November 9 source assessment:** `source-screened-not-tested` at `7f2773ec234b62d0b80ca47c508397cb3d0da3ea`.
  - Pinned GitHub README announces migration to ganigeorgiev.com/pocketbase/pocketbase; resolving old GitHubHEAD does not prove latest primary source.
  - Advertised successor public refs identifies master4e4a8d5e7d2bb398945f99eeff42c37c4ee580a9; exact-pin README/LICENSE/go.mod/core inspected separately. Successor retains MIT and pre-1.0 compatibility caveat, changes Go module/import identity and requires Go 1.27.
  - Representative successor persistence methods validate via hooks and distinguish create/update; this does not replace Core transactional/replay/authority qualification.
- **Assessment sources:** [source1](https://github.com/pocketbase/pocketbase/blob/7f2773ec234b62d0b80ca47c508397cb3d0da3ea/README.md#L1); [source2](https://github.com/pocketbase/pocketbase/blob/7f2773ec234b62d0b80ca47c508397cb3d0da3ea/tools/auth/oidc.go#L20); [source3](https://ganigeorgiev.com/api/git/pocketbase/pocketbase/content/README.md?rev=4e4a8d5e7d2bb398945f99eeff42c37c4ee580a9); [source4](https://ganigeorgiev.com/api/git/pocketbase/pocketbase/content/LICENSE.md?rev=4e4a8d5e7d2bb398945f99eeff42c37c4ee580a9); [source5](https://ganigeorgiev.com/api/git/pocketbase/pocketbase/content/go.mod?rev=4e4a8d5e7d2bb398945f99eeff42c37c4ee580a9); [source6](https://ganigeorgiev.com/api/git/pocketbase/pocketbase/content/core/db.go?rev=4e4a8d5e7d2bb398945f99eeff42c37c4ee580a9). Representative source screening; no execution or admission.

<a id="opendatalab-mineru"></a>
### MinerU

[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · **Shortlisted / planned**

- **Purpose:** Document parsing and OCR into structured text, tables, formulas and page/block references.
- **Architecture fit:** E/I / Q-58 alongside Q-36 PageIndex and BO-06: compare ingestion quality independently of retrieval and answer models.
- **Current status:** Source reviewed; planned and untested. Custom Apache2-based terms with added thresholds/online attribution, model rights and tier/host qualification remain open; Doclib telemetry enabled initially.
- **Next gate:** Preserve labeled extraction/citation/resources gates; separately qualify Doclib versus parser server auth, telemetry disable/egress and remote upload consent, tier selection/recovery, custom-license/model obligations, deletion, Stop and full costs.
- **Evidence:** Pinned README, custom license, package/security metadata, quick-start and model-asset docs reviewed; no install, model download, execution or full audit. Dates: 2026-10-16.
- **Registered records:** documents.mineru
- **Recorded intake revision:** b7f3dd0c5f6e6d66a298239ffd02b328b873918e

- **November 9 source assessment:** `reviewed` at `8cd08422055858f55a64dff79f942318b51b96cc`.
  - Current README expands Doclib/tiered local library and automatic ONNX acceleration; parsing tiers and local/remote engines need separate quality/resource admission.
  - Doclib telemetry is initially enabled and has explicit disable controls; this should be visible in egress gate, not a blanket offline assumption.
  - Root license is Apache2with additional revenue/MAU thresholds and online-service attribution condition. Doclib bearer middleware rejects missing/duplicate/mismatched auth before consuming body; this is distinct from parser server and model rights.
- **Assessment sources:** [source1](https://github.com/opendatalab/MinerU/blob/8cd08422055858f55a64dff79f942318b51b96cc/README.md#L414); [source2](https://github.com/opendatalab/MinerU/blob/8cd08422055858f55a64dff79f942318b51b96cc/LICENSE.md#L12); [source3](https://github.com/opendatalab/MinerU/blob/8cd08422055858f55a64dff79f942318b51b96cc/mineru/doclib/auth.py#L30). Representative source screening; no execution or admission.

<a id="letta-ai-letta"></a>
### Letta historical source reference

[letta-ai/letta](https://github.com/letta-ai/letta) · **Collected reference**

- **Purpose:** Post's Letta URL and historical-source pointer to active Letta Code.
- **Architecture fit:** Q-47 discovery reference; one Letta evaluation record uses letta-ai/letta-code.
- **Current status:** Current landing/reference repository; active implementation in letta-ai/letta-code; archive branch retired V1. No independent runtime adoption.
- **Next gate:** Use pinned current source for Q-47; separate historical compatibility needs from new-project evaluation.
- **Evidence:** Pinned README source-migration notice screened; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `agent.letta`.
- **Historical intake revision:** `5bcdd177d70fa2b31a754cfcd801e77b2e1ab16a`.

- **November 9 source assessment:** `reviewed` at `8816d3a8516893bfdc0fa14bfb1235226012e295`.
  - Current main is a documentation/policy landing repository pointing to letta-ai/letta-code for active harness/App Server/runtime; archive branch holds retired V1 server. It is not an additional current implementation competitor.
  - Current root terms/privacy/security must not be confused with retired V1 source behavior or active Code client backend qualification. Historical revisions remain reproducibility references.
- **Assessment sources:** [source1](https://github.com/letta-ai/letta/blob/8816d3a8516893bfdc0fa14bfb1235226012e295/README.md#L5); [source2](https://github.com/letta-ai/letta/blob/8816d3a8516893bfdc0fa14bfb1235226012e295/README.md#L38); [source3](https://github.com/letta-ai/letta/blob/8816d3a8516893bfdc0fa14bfb1235226012e295/SECURITY.md#L1). Representative source screening; no execution or admission.

<a id="vectifyai-pageindex"></a>
### PageIndex

[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) · **Shortlisted / planned**

- **Purpose:** Hierarchical document indexing and model-guided retrieval for long documents.
- **Architecture fit:** E/I / Q-36 alongside BO-06: compare with FTS, hybrid retrieval and direct-document controls using matched answer models.
- **Current status:** README and repository metadata researched; planned and untested. Document trees and summaries are derived; Core owns canonical files, document grants, corrections, deletion, credentials and budgets.
- **Next gate:** Review local/cloud data flows, page citations, OCR/table limits, corpus authorization, indexing/query costs and host resources.
- **Evidence:** Pinned README and public repository metadata screened; no execution, benchmark replication or full audit. Dates: 2026-10-09.
- **Record IDs:** `retrieval.pageindex`.
- **Historical intake revision:** `1a060dfc5c512ece03aeaa9cb80d76dbb5358bdf`.

- **November 9 source assessment:** `reviewed` at `2ac8694bf8fe89a3840dda9bdb88db5119b77fc4`.
  - Current SDK explicitly supports local and Cloud indexing/storage; local mode still uses chosen model API or Claude Code subscription, so locally stored document tree does not imply offline/no-cost processing. Flash is local text-PDF default.
  - Client treats local/cloud modes explicitly, rejects ambiguous hosted/managed spellings, and requires explicit model on Anthropic-native surface rather than stock default. These are useful route safeguards but not verified extraction/retrieval fidelity.
  - Cloud corpus filesystem/MCP/storage remains distinct from local tree and its per-document model costs.
- **Assessment sources:** [source1](https://github.com/VectifyAI/PageIndex/blob/2ac8694bf8fe89a3840dda9bdb88db5119b77fc4/README.md#L34); [source2](https://github.com/VectifyAI/PageIndex/blob/2ac8694bf8fe89a3840dda9bdb88db5119b77fc4/README.md#L120); [source3](https://github.com/VectifyAI/PageIndex/blob/2ac8694bf8fe89a3840dda9bdb88db5119b77fc4/pageindex/client.py#L150); [source4](https://github.com/VectifyAI/PageIndex/blob/2ac8694bf8fe89a3840dda9bdb88db5119b77fc4/pageindex/client.py#L164). Representative source screening; no execution or admission.

<a id="vectorize-io-hindsight"></a>
### Hindsight

[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · **Shortlisted / planned**

- **Purpose:** Memory extraction, temporal/hybrid recall and evidence-linked observations and knowledge pages.
- **Architecture fit:** E/I / Q-31 alongside BO-06/BO-07: compare with relational/FTS and eligible hybrid controls.
- **Current status:** Source researched; planned and untested. Canonical sources remain under Abrams Core. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Keep memory projections replaceable; qualify bank/tenant/legacy-token isolation, model recipients and retention, per-worker aggregate budgets, stale-memory/conflict handling, deletion/rebuild/export, cancellation and resources against Core controls.
- **Evidence:** README, license header and repository tree screened; no independent replication or execution. Dates: 2026-10-09.
- **Record IDs:** `memory.hindsight`.
- **Historical intake revision:** `44d5340148fd47efb34e184d61f87ab5e2d8d1e2`.

- **November 9 source assessment:** `source-reviewed-bounded` at `0bd55015393d224deec1073d63b24bcc0faad164`.
  - Hindsight remains MIT memory infrastructure with a stateful standalone service and optional coding-agent MCP adapter; quickstart publishes API/UI ports and passes an external LLM key.
  - API admission controller distinguishes concurrency backpressure from bounded admission and explicitly states limits are per worker, so cluster capacity can multiply with worker count.
  - MCP defaults bank ID to default and supports a legacy MCP token checked before tenant-extension auth; bank/tenant propagation and authorization must be qualified together. Public benchmark claims remain unreplicated.
- **Assessment sources:** [source1](https://github.com/vectorize-io/hindsight/blob/0bd55015393d224deec1073d63b24bcc0faad164/LICENSE#L1); [source2](https://github.com/vectorize-io/hindsight/blob/0bd55015393d224deec1073d63b24bcc0faad164/README.md#L46); [source3](https://github.com/vectorize-io/hindsight/blob/0bd55015393d224deec1073d63b24bcc0faad164/README.md#L70); [source4](https://github.com/vectorize-io/hindsight/blob/0bd55015393d224deec1073d63b24bcc0faad164/hindsight-api-slim/hindsight_api/api/admission.py#L1); [source5](https://github.com/vectorize-io/hindsight/blob/0bd55015393d224deec1073d63b24bcc0faad164/hindsight-api-slim/hindsight_api/api/mcp.py#L19). Representative source screening; no execution or admission.

<a id="jordan-gibbs-hyperresearch"></a>
### HyperResearch

[jordan-gibbs/hyperresearch](https://github.com/jordan-gibbs/hyperresearch) · **Shortlisted / planned**

- **Purpose:** Research harness, source provenance and reusable evidence vault.
- **Architecture fit:** F / Q-07: compare against an Abrams-controlled research workflow.
- **Current status:** Source screening and a separate research-method exercise exist; product comparison unrun.
- **Next gate:** Compare current source components against installed HyperResearch/Core method without changing live skill/hooks; qualify exact Codex hook/agent permissions, vault path/grants and concurrent state, citation ground truth, optional embedding recipients, Stop and total research cost.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-17.
- **Record IDs:** `research.hyperresearch.jordan-gibbs`.
- **Historical intake revision:** `75b1ecfb2891184fad2cc1a2ddf9abe476f5b54c`.

- **November 9 source assessment:** `source-screened-not-tested` at `d4725a2bc384bc9c49f86d2032307bbfd6f3327e`.
  - Current HyperResearch adds Codex installation with steps/custom agents/Stop hook/AGENTS edits; local installed skill is a distinct artifact and was not updated here.
  - README explicitly says Codex tool locks are instructions, not per-agent enforced allowlists; hook trust and sandbox/network flags remain separate user choices.
  - MCP server exposes vault navigation; notes are directly written and auto-indexed. Optional embeddings default none; provider-enabled semantic search creates new egress/cost.
- **Assessment sources:** [source1](https://github.com/jordan-gibbs/hyperresearch/blob/d4725a2bc384bc9c49f86d2032307bbfd6f3327e/README.md#L28); [source2](https://github.com/jordan-gibbs/hyperresearch/blob/d4725a2bc384bc9c49f86d2032307bbfd6f3327e/README.md#L109); [source3](https://github.com/jordan-gibbs/hyperresearch/blob/d4725a2bc384bc9c49f86d2032307bbfd6f3327e/README.md#L254); [source4](https://github.com/jordan-gibbs/hyperresearch/blob/d4725a2bc384bc9c49f86d2032307bbfd6f3327e/src/hyperresearch/mcp/server.py#L11). Representative source screening; no execution or admission.

<a id="mem0ai-mem0"></a>
### Mem0

[mem0ai/mem0](https://github.com/mem0ai/mem0) · **Shortlisted / planned**

- **Purpose:** Retrieval and separately scored memory-extraction candidate.
- **Architecture fit:** E / proposed BO-06: optional projection; canonical SQLite stays authoritative.
- **Current status:** Selected source researched; no memory quality or isolation benchmark. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Choose OSS library/server versus hosted API, configure explicit auth/tenant scopes, qualify extraction/embedding and telemetry recipients, provenance/conflicts, deletion/export, cancellation and memory-quality/cost against Core canonical records.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-09.
- **Record IDs:** `memory.mem0`.
- **Historical intake revision:** `02f7a9b2c4fe38dedb96631e48c85c74ad58b605`.

- **November 9 source assessment:** `source-reviewed-bounded` at `f1791daa86d469249c9b002f62644d58a1eb96a0`.
  - Mem02.2.1 remains Apache2.0 with distinct library, self-hosted server and hosted routes. README credential-minting instructions are not authority to create an account or key.
  - Server auth supports explicit AUTH_DISABLED and ADMIN_API_KEY; access/refresh JWT handling rejects missing secret and uses single-use refresh identifiers. Configuration must be fixed for the chosen deployment.
  - Pi memory-tool integration receives AbortSignal and checks cancellation but also emits tool telemetry; memory content/metadata recipients and downstream storage cancellation remain separate questions.
- **Assessment sources:** [source1](https://github.com/mem0ai/mem0/blob/f1791daa86d469249c9b002f62644d58a1eb96a0/LICENSE#L1); [source2](https://github.com/mem0ai/mem0/blob/f1791daa86d469249c9b002f62644d58a1eb96a0/pyproject.toml#L5); [source3](https://github.com/mem0ai/mem0/blob/f1791daa86d469249c9b002f62644d58a1eb96a0/README.md#L100); [source4](https://github.com/mem0ai/mem0/blob/f1791daa86d469249c9b002f62644d58a1eb96a0/server/auth.py#L15); [source5](https://github.com/mem0ai/mem0/blob/f1791daa86d469249c9b002f62644d58a1eb96a0/server/auth.py#L50); [source6](https://github.com/mem0ai/mem0/blob/f1791daa86d469249c9b002f62644d58a1eb96a0/integrations/pi-agent-plugin/src/memory/tools.ts#L8); [source7](https://github.com/mem0ai/mem0/blob/f1791daa86d469249c9b002f62644d58a1eb96a0/integrations/pi-agent-plugin/src/memory/tools.ts#L55). Representative source screening; no execution or admission.

<a id="jexp-neo4jev"></a>
### Neo4jev

[jexp/neo4jev](https://github.com/jexp/neo4jev) · **Collected reference**

- **Purpose:** Graph-navigation reference using typed decisions.
- **Architecture fit:** Later I reference after relevant graph and resource prerequisites.
- **Current status:** Deferred reference; no new graph admission or evaluation record.
- **Next gate:** Use synthetic permitted graph; compare deterministic traversal/reranker/Jev on correct path/abstention and total per-hop latency/cost. Preserve stand-in labels, constrain graph fields/credentials, recursion/budget and cancellation before any runtime.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-20.

- **November 9 source assessment:** `source-screened-not-tested` at `d157bbe496eb91813475156942bef1c6badfb342`.
  - Neo4jev remains Neo4j graph-navigation demo: TypeSafe Choice/Noul per hop plus beam selection, not a general text-generating assistant.
  - Python 3.12+ and Neo4j credentials are required; config accepts explicit missing-TypeSafe-key mode, and README labels stand-in fallback rather than claiming real model output.
  - Graph relationship/node properties sent as decisions create data egress; graph knowledge truth and destination permissions cannot come from Jev probabilities.
- **Assessment sources:** [source1](https://github.com/jexp/neo4jev/blob/d157bbe496eb91813475156942bef1c6badfb342/README.md#L1); [source2](https://github.com/jexp/neo4jev/blob/d157bbe496eb91813475156942bef1c6badfb342/README.md#L80); [source3](https://github.com/jexp/neo4jev/blob/d157bbe496eb91813475156942bef1c6badfb342/src/neo4jev/config.py#L9). Representative source screening; no execution or admission.

<a id="semantica-agi-semantica"></a>
### Semantica

[semantica-agi/semantica](https://github.com/semantica-agi/semantica) · **Shortlisted / planned**

- **Purpose:** Graph and evidence-store candidate.
- **Architecture fit:** I / BO-07: optional projection after passing simpler retrieval controls.
- **Current status:** Deferred by dependency and hardware gates; no graph benchmark. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain deferred hardware/dependency scope; select exact Python/JS/MCP surface, require authenticated private deployment, constrain graph construction/provider egress, source lineage/deletion/rebuild, resources, cancellation and measurable retrieval benefit.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `graph.semantica`.


## Models and inference

<a id="justvugg-colibri"></a>
### Colibri

[JustVugg/colibri](https://github.com/JustVugg/colibri) · **Shortlisted / planned**

- **Purpose:** Hierarchical native inference engine that streams mixture-of-experts weights between disk, RAM and optional GPU tiers, with per-model C engines, GGUF support, Python setup/API gateway and dashboard/MCP lifecycle interfaces.
- **Architecture fit:** E/I/J; separate H / Q-152: BO-04 local engine and memory/I/O feasibility versus llama.cpp/Ollama, AirLLM, LiteRT-LM and direct Core adapters, with separate BO-05 exact model-quality controls. Compare exact upstream engine/API, eligible licensed streaming/cache/protocol components, a minimal original adapter and defer. Expert selection is model-internal routing, not Abrams cloud/local provider policy or an assistant runtime decision.
- **Current status:** Source researched; planned and untested. Apache-2.0 root with retained third-party notices; model, quantized artifact, tokenizer and backend rights are separate. Python>=3.10 launcher and native Windows/Linux/macOS source paths exist, but exact CPU/GPU/backend/model compatibility and useful latency on Abrams hardware are unqualified. Low resident-memory examples do not remove full model storage, I/O or KV/scratch costs. Setup, downloads, MCP jobs and exposed services remain deferred pending admission.
- **Next gate:** Compare upstream, eligible components, minimal original Core adapter and defer under exact source/release/model/tokenizer/quantization/backend/compiler/driver pins. Qualify native Windows CPU/Vulkan/CUDA eligibility, artifact hashes/rights, actual available RAM/VRAM/disk/SSD bandwidth and full cold/warm/context/concurrency resource usage. Require matched task quality, prompt/template/tool schemas, TTFT and sustained/tail decode, cache misses/bytes read, cancellation and disk/energy/full lifecycle cost versus simpler smaller models and resident engines. Review API/UI/MCP bind/auth/credential/recipient boundaries separately; prevent automatic setup or unapproved egress, preserve canonical state/run lineage and retention/deletion. Prove all engine/setup/download/worker Stop, retry/ambiguity handling and aggregate time/token/resource/spend reservations; preserve USD25 monthly metered cap. No binary/model download, compilation, installer, provider or candidate benchmark is authorized by this intake.
- **Evidence:** Pinned README/LICENSE/NOTICE/third-party notices/package and setup scripts, representative engine/platform/measurement and API/UI/MCP lifecycle source with two independent bounded reviews. No candidate imports, installation/build, binary/model/dataset downloads, providers, credentials, personal data or benchmark execution.
- **Registered records:** `inference.colibri`.
- **Recorded revision:** `0a5504a1dc64f86fcd0fe7db298b0448c730e7e6`.
- **Review date:** 2026-11-12.

- This is an inference engine and memory/I/O strategy, not a new LLM or a full assistant. Streaming experts reduces simultaneous residency while the full selected model still occupies disk; shared weights, KV cache, buffers, OS page cache and transfer bandwidth remain resource costs. Dense models and model-internal decision classifiers have different requirements.
- README advertises CPU-only operation and optional GPU paths; its minimum8GB RAM/22GB disk is for the smallest supported setup, not arbitrary frontier models. Its own examples include hundreds of GB of model storage and sub-token-per-second decode for some configurations. Headline resident RAM is not useful single-user latency or evidence of model quality.
- Root Apache-2.0 and third-party MIT/Apache/BSD notices are separate from model weights, GGUF/qpack conversions, backend binaries and oracle dependencies. Python package metadata is Beta with Python>=3.10; native Windows source paths and platform classifiers do not establish a qualified exact hardware/runtime pairing.
- START-HERE.bat can offer a user-scoped Python installation when missing, then runs setup. Setup can build or fetch engines, download large models and start a local service/dashboard. None of those actions or upstream assistant-setup instructions were executed; MCP lifecycle and automatic setup are separate effects from inference calls.
- The inference gateway defaults to loopback; a configured API key or explicit insecure override changes non-loopback admission. The separate UI server has different host/route controls, so the gateway guard cannot qualify every listening surface. Treat bind/auth/proxy/download endpoints as separate configuration scopes.
- MCP install can launch detached setup with yes/default auto-start; cancellation notifications are ignored in the inspected handler and service stop is separate from installation-job cancellation. A successful stop response does not prove all model downloads, compilers, engine children or GPU work retired; require owned-process and resource receipts.
- The inspected chat gateway emits model function-call names/arguments to its client; that is separate from MCP install/start/stop or UI coding-agent launch, which perform real host effects. OpenAI/Anthropic compatibility does not establish every schema, tool, vision, error, token-accounting or streaming behavior for Abrams clients.
- Generation cancellation sends a request-ID CANCEL and retains scheduler admission until engine acknowledgement; engine close uses bounded best-effort terminate/kill. These controls are useful but require runtime evidence for prefill/disconnect/unresponsive-engine and every descendant/setup/download path. Token/queue limits are not aggregate memory, I/O or spend reservations.
- Web search and public-page fetching introduce separate off-device recipients; image URL/path handling has different restrictions. Local inference alone does not establish offline operation across UI/search/MCP features. Bound prompt/usage/install logs, credential exposure, retention/deletion and recipient grants per surface.
- Expert-usage history adapts cache/residency placement; it is not demonstrated assistant memory or improved reasoning. Explicit cache-preferring routing and DEGRADE_ZERO can change outputs; reported lossy calibration is OLMoE-specific and warm-cache only. Keep approximate modes off for the initial correctness baseline and qualify each model/context independently.
- Native Windows GPU support is engine/backend-specific; documented HIP evidence is one configuration, and CPU fallback can preserve successful exit without GPU residency. Require actual resident tensors/backend diagnostics and numerical/task correctness. Published better-of-two throughput on one host is separate from matched rotating-prompt median, cold-start and tail latency.
- Laya/other decision-engine support is a separate numerical-parity and task-calibration study. Tiny or117-question upstream parity checks do not establish Abrams decision quality; the documented act/escalate head has no usable signal and cannot supply approval or escalation authority.

Sources: [source 1](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/README.md); [source 2](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/LICENSE); [source 3](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/NOTICE); [source 4](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/THIRD_PARTY_NOTICES.md); [source 5](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/pyproject.toml); [source 6](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/START-HERE.bat); [source 7](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L8179-L8230); [source 8](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L8450-L8465); [source 9](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L10272-L10305); [source 10](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/ui/server.py#L47-L81); [source 11](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/ui/server.py#L106-L146); [source 12](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/ui/server.py#L175-L228); [source 13](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L9490-L9515); [source 14](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/mcp_server.py#L65-L108); [source 15](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/ui/agents.py#L205-L255); [source 16](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/mcp_server.py#L45-L49); [source 17](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/mcp_server.py#L209-L281); [source 18](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L7500-L7584); [source 19](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L7639-L7677); [source 20](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/mcp_server.py#L382-L409); [source 21](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/mcp_server.py#L307-L311); [source 22](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/setup_flow.py#L1578-L1596); [source 23](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/ui/web.py#L117-L141); [source 24](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/ui/web.py#L211-L236); [source 25](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L3577-L3613); [source 26](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L8057-L8058); [source 27](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L5642-L5675); [source 28](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/openai_server.py#L10272-L10284); [source 29](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/expert_store.h#L16-L38); [source 30](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/expert_store.h#L40-L68); [source 31](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/colibri.c#L3640-L3682); [source 32](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/README.md#L52-L54); [source 33](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/docs/benchmarks.md#L7-L34); [source 34](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/README.md#L620-L636); [source 35](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/docs/windows.md#L31-L49); [source 36](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/GPU_BACKENDS.md#L100-L127); [source 37](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/docs/tuning.md#L35-L41); [source 38](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/docs/tuning.md#L188-L213); [source 39](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/colibri.c#L1563-L1577); [source 40](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/c/colibri.c#L7093-L7104); [source 41](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/docs/tuning.md#L294-L324); [source 42](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/README.md#L606-L618); [source 43](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/docs/benchmarks.md#L69-L98); [source 44](https://github.com/JustVugg/colibri/blob/0a5504a1dc64f86fcd0fe7db298b0448c730e7e6/docs/laya.md#L64-L108).


<a id="openbitsys-bitdecoding-fp4"></a>
### BitDecoding-FP4

[OpenBitSys/BitDecoding-FP4](https://github.com/OpenBitSys/BitDecoding-FP4) · **Shortlisted / planned**

- **Purpose:** FP4 KV-cache quantization and native NVIDIA attention/decode kernels integrated as a custom vLLM backend; a serving-efficiency component rather than a standalone model or assistant.
- **Architecture fit:** E/H/I/J / Q-151 and BO-04 engine/component qualification, with separate BO-05 model-quality controls: Conditional long-context inference-efficiency study for eligible local or self-hosted worker routes. Compare exact upstream vLLM backend, eligible quantization/kernel components, existing engine KV-cache alternatives, a minimal original Core adapter and defer. Not a cloud/local API switcher or a replacement for the current local prototype.
- **Current status:** Source researched; planned and untested. Documented target is NVIDIA B200/B300 SM100/SM103 with CUDA13+ and driver580+, Python3.12 setup; native Windows, consumer-GPU compatibility and Abrams host eligibility are not established. Original code MIT; packaged composition includes BSD and NVIDIA-proprietary helper terms. GPU execution/integration deferred pending hardware, rights, exact dependency and quality/cost qualification.
- **Next gate:** Compare upstream, eligible components, independent adapter and deferral under exact model/tokenizer/vLLM/submodule/kernel/compiler/GPU/driver pins. Qualify target hardware/platform and model/dataset/helper rights; isolate installation and generated-code grading, restrict egress and credentials, preserve calibration/holdout separation and replayable cache/session isolation. Measure actual task quality, long-context retrieval, per-task failures, TTFT/prefill/decode latency, concurrency, total VRAM including scales/BF16 buffers/scratch, energy and full setup/serving/maintenance/exit costs against BF16/FP8/native alternatives. Prove Core-owned route grants, all-process/GPU Stop and aggregate pre-reserved budgets; preserve USD25 monthly metered cap. No rented GPU, provider call or model/dataset download is authorized by this intake.
- **Evidence:** Pinned README, license/NOTICE/package/submodule metadata, bootstrap, benchmark/evaluation and representative kernel/vLLM source, with independent hardware/measurement and integration reviews. No install/build/kernel/model/dataset downloads, GPU runtime, provider calls or candidate benchmark.
- **Registered records:** `inference.bitdecoding-fp4`.
- **Recorded revision:** `4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f`.
- **Review date:** 2026-11-11.

- This changes attention/KV-cache storage and decoding, not all model weights or the whole assistant. BF16 sink/recent-token buffers, quantization scales and runtime scratch remain relevant to total memory; nominal FP4 payload is not whole-model fourfold memory reduction.
- README requires B200/B300 SM100/SM103, CUDA13+, driver580+ and Python3.12/uv. Package metadata permits Python>=3.10 but that is not a tested platform matrix. Bash bootstrap and Linux-style environment paths do not establish native Windows or consumer Blackwell compatibility.
- Original code is MIT but the package explicitly declares MIT AND BSD-3-Clause AND LicenseRef-NvidiaProprietary; NOTICE identifies a NVIDIA CUTLASS DSL helper under separate terms and Apache-2.0 vLLM submodule. Model, dataset, binary and transitive dependency rights require separate intake.
- The bootstrap creates a managed Python environment, installs CUDA PyTorch and editable vLLM/custom plugin plus evaluation packages, and uses multiple package indexes with unsafe-best-match. Source pinning alone does not lock all artifacts or authorize installation.
- Upstream near-lossless accuracy and 3.00x/2.62x B300 throughput are reported results for named Qwen models, long contexts and concurrency settings. These do not establish Abrams accuracy, single-user responsiveness, consumer-hardware speedup or spend savings; each quality/resource boundary needs matched independent measurement.
- Dataset preparation, calibration and generated-code grading are separate executable/data-access scopes. Use synthetic or authorized data, exact artifact hashes and uncontaminated held-out evaluation; calibration sidecars and output retention need provenance and cleanup controls.
- An out-of-tree vLLM backend does not provide Abrams authorization, cloud/local policy, shared budget reservation or all-process Stop. Keep those controls in Core and qualify exact engine/GPU worker cleanup before admitting a route. Hardware rental, storage, transfer, warmup/compilation and maintenance costs remain unknown, not free.
- The inspected backend fixes NVFP4 page/head sizes to128 and gates compute capability major10; configuration guards reject prefix caching, chunked prefill, speculative decode, KV offloading, pipeline parallelism above1, sliding-window attention, ALiBi and soft capping. These restrictions can change real workload tradeoffs; source backend eligibility is not tested hardware admission.
- The root records vLLM gitlink1ad84fea866bc478942efa8550036ffa52a51283, but precompiled wheels and all transitive artifacts still need independent identity and rights review. Evaluation uses trust_remote_code=True; mutable dataset/evaluator paths coexist with some pinned revisions and digest checks.
- LiveCodeBench grading executes generated code. Its user/network/PID namespaces do not establish filesystem or credential isolation; marker and no-sandbox bypasses exist. Per-process limits and best-effort engine shutdown do not prove aggregate resource reservation or all-child/GPU Stop. Grading must remain deferred on the shared personal-data host.
- The serving benchmark estimates decode rate from the median duration difference between2048-token and128-token generations at64K or128K prompts; it is not direct whole-request latency or time-to-first-token. Compare total startup/calibration/prefill/decode time, task quality and concurrency under matched settings, including restrictions that disable other engine optimizations.

Sources: [source 1](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/README.md); [source 2](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/LICENSE); [source 3](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/NOTICE); [source 4](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/pyproject.toml); [source 5](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/bootstrap_env.sh); [source 6](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/bootstrap_env.sh#L9); [source 7](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/.gitmodules#L1); [source 8](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/NOTICE#L4); [source 9](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/datasets/MANIFEST.json#L4); [source 10](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/engine.py#L14); [source 11](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/backend.py#L17); [source 12](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/backend.py#L69); [source 13](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/vllm_runner.py#L44); [source 14](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/calibrate.py#L1); [source 15](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/calibrate_key_smooth_sidecar.py#L60); [source 16](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/run_eval.py#L874); [source 17](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/prepare_data.py#L374); [source 18](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/lcb_data.py#L37); [source 19](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/lcb_data.py#L67); [source 20](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/score_lcb.py#L2); [source 21](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/score_lcb.py#L41); [source 22](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/score_lcb.py#L83); [source 23](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/score_lcb.py#L153); [source 24](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/vllm_runner.py#L312); [source 25](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/run_eval.py#L904); [source 26](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/run_eval.py#L1156); [source 27](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/README.md#L11); [source 28](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/backend.py#L18); [source 29](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_decode_kernel/interface.py#L14); [source 30](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/engine.py#L63); [source 31](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/README.md#L43); [source 32](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/backend.py#L89); [source 33](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/benchmark/bench_kernel_sm10x.py#L364); [source 34](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/tools/bootstrap_env.sh#L16); [source 35](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/pyproject.toml#L7); [source 36](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/backend.py#L79); [source 37](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/guards.py#L182); [source 38](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/guards.py#L271); [source 39](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/benchmark/README.md#L15); [source 40](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/README.md#L20); [source 41](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/config.py#L14); [source 42](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/config.py#L238); [source 43](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/compare.py#L38); [source 44](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/compare.py#L282); [source 45](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/src/nvfp4_vllm/probability_calibration.py#L46); [source 46](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/benchmark/README.md#L3); [source 47](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/benchmark/bench_kernel_sm10x.py#L130); [source 48](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/benchmark/bench_kernel_sm10x.py#L251); [source 49](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/benchmark/bench_e2e_throughput.py#L53); [source 50](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/benchmark/bench_e2e_throughput.py#L179); [source 51](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/benchmark/bench_e2e_throughput.py#L309); [source 52](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/benchmark/bench_e2e_throughput.py#L377); [source 53](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/README.md#L32); [source 54](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/pyproject.toml#L5); [source 55](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/NOTICE#L1); [source 56](https://github.com/OpenBitSys/BitDecoding-FP4/blob/4e2907d74d8b1cdb3bce2b4795fc86bf76385e7f/evaluation/vllm_runner.py#L47).


- **November 9 source assessment:** `source-reviewed-bounded` at `39cf7216d2326b012436efebf8a227e82f37dd3b`.
  - Semantica Python package is0.8.0 while root JS package is0.1.0; both MIT signals identify different integration surfaces rather than interchangeable release artifacts.
  - Explorer server distinguishes explicit anonymous mode from missing API key: anonymous mode warns against non-local exposure, while missing key leaves protected routes returning503.
  - Docker serves on0.0.0.0 with configured allowed origins and non-login user; these settings do not remove graph/dependency/resource gates or establish personal-data isolation. No graph benchmark ran.
- **Assessment sources:** [source1](https://github.com/semantica-agi/semantica/blob/39cf7216d2326b012436efebf8a227e82f37dd3b/LICENSE#L1); [source2](https://github.com/semantica-agi/semantica/blob/39cf7216d2326b012436efebf8a227e82f37dd3b/package.json#L1); [source3](https://github.com/semantica-agi/semantica/blob/39cf7216d2326b012436efebf8a227e82f37dd3b/pyproject.toml#L5); [source4](https://github.com/semantica-agi/semantica/blob/39cf7216d2326b012436efebf8a227e82f37dd3b/semantica/server.py#L32); [source5](https://github.com/semantica-agi/semantica/blob/39cf7216d2326b012436efebf8a227e82f37dd3b/semantica/server.py#L102); [source6](https://github.com/semantica-agi/semantica/blob/39cf7216d2326b012436efebf8a227e82f37dd3b/Dockerfile#L27); [source7](https://github.com/semantica-agi/semantica/blob/39cf7216d2326b012436efebf8a227e82f37dd3b/Dockerfile#L75); [source8](https://github.com/semantica-agi/semantica/blob/39cf7216d2326b012436efebf8a227e82f37dd3b/Dockerfile#L125). Representative source screening; no execution or admission.

<a id="zagitta-gpu-unlock"></a>
### GPU Unlock

[Zagitta/gpu-unlock](https://github.com/Zagitta/gpu-unlock) · **Collected reference**

- **Purpose:** Linux boot-time kernel module and packaging that adjust supported GeForce tensor speed selectors before the stock NVIDIA driver binds.
- **Architecture fit:** A/B/E/J / Q-138: Deferred optional host-performance research for eligible local inference/training/image workloads; compare unchanged stock configuration first. Not an inference engine, model, Windows utility or additional VRAM.
- **Current status:** Collected/deferred host experiment; untested. VERSION2.0.0, Linux kernel/initramfs/DKMS changes with separately licensed firmware. Workload-specific tensor-throughput claims do not imply faster memory-bound token decode; native Windows is outside this repository.
- **Next gate:** Before any execution establish actual supported GPU/PCI/OS/kernel/driver and task need, firmware/license provenance, signing/Secure Boot compatibility, boot/display/power/suspend recovery and reversible rollback on a separate recoverable host. Measure matched end-to-end quality/throughput/latency/power/thermals; preserve current host-readiness gates.
- **Evidence:** Pinned README/license/package and representative source with independent read-only review; no installation, candidate execution, credentials/provider calls, benchmark, downloads of models/firmware or host changes. Dates: 2026-11-03.
- **Registered records:** `host.gpu-unlock-reference`.
- **Recorded revision:** `7eb51bccae0a0b7e599e084d971170e9a1e82d0c`.
- **Currentness (November 9):** `unchanged`; observed HEAD `7eb51bccae0a0b7e599e084d971170e9a1e82d0c`. Matches a recorded revision; no runtime qualification implied.

<a id="routerhubsi-uncensored-ai-api"></a>
### RouterHub API reference

[routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) · **Collected reference**

- **Purpose:** Documentation and client examples for a hosted multi-model gateway advertising OpenAI/Anthropic compatibility; no self-hostable gateway backend found in the pinned tree.
- **Architecture fit:** E/H/J / Q-133: General-assistant cloud route/provider switching versus direct providers, OpenRouter, 9router and eligible local routes; hosted trust, exact model quality and client compatibility evaluated separately.
- **Current status:** Collected hosted-provider reference; planned and untested. MIT docs do not license or verify the service. Live public endpoint/model/rate listings differ from pinned dashboard-placeholder docs; upstream identity, privacy, billing and fallback remain unqualified.
- **Next gate:** Qualify counterparty/service terms, exact endpoint/model/version/account route and data recipients, retention/training/caching, billing/rate limits, SDK/stream/tool fidelity, failure/fallback/Stop and exit before a synthetic pilot. Compare direct use, eligible docs/client reuse, minimal Core adapter and defer.
- **Evidence:** Pinned documentation/tree/license and independent public-service screen; no account/key creation, authenticated dashboard, API/provider calls, payment, install or benchmark. Dates: 2026-11-03.
- **Registered records:** `provider.routerhub-reference`.
- **Recorded revision:** `0c361604156fa44c8f49c36d1847f6b9bdd0a53f`.
- **Currentness (November 9):** `unchanged`; observed HEAD `0c361604156fa44c8f49c36d1847f6b9bdd0a53f`. Matches a recorded revision; no runtime qualification implied.

<a id="joaniberian9588-janas"></a>
### Janas (identity unresolved)

[joaniberian9588/janas](https://github.com/joaniberian9588/janas) · **Collected reference**

- **Purpose:** Source/provenance check of a repository advertised as low-memory MoE inference; pinned tree instead identifies a Python paper-PDF retrieval/conversion package.
- **Architecture fit:** E/H/J / Q-129: Resolve identity and artifact provenance before any comparison with Edge0, AirLLM or local inference controls; observed paper tooling is not automatically a separate eligible candidate.
- **Current status:** Collected reference; provenance-blocked and untested. README, package metadata and source identity conflict. MIT text is present but does not establish download provenance, Windows/inference capability or archive safety.
- **Next gate:** Reconcile maintainer/upstream/history, source-to-release mapping and rights; require inspectable matching implementation and immutable artifact hashes before any execution review. Do not install, run linked downloads or load the bundled archive.
- **Evidence:** Pinned README, recursive tree, Python metadata/license/context and independent passive provenance screen; no binary/archive download, extraction, installation, model load or execution. Dates: 2026-11-01.
- **Registered records:** `research.janas-provenance`.
- **Recorded revision:** `c993d3227cd8f9fc1c870bbce9b7434cfc157434`.
- **Currentness (November 9):** `unchanged`; observed HEAD `c993d3227cd8f9fc1c870bbce9b7434cfc157434`. Matches a recorded revision; no runtime qualification implied.

<a id="mesh-llm-mesh-llm"></a>
### Mesh LLM

[Mesh-LLM/mesh-llm](https://github.com/Mesh-LLM/mesh-llm) · **Shortlisted / planned**

- **Purpose:** Distributed model serving with peer discovery/routing and Skippy native inference/stage splits behind an OpenAI-compatible API.
- **Architecture fit:** E/H/I/J / Q-125: General-assistant compute pooling and model access across permitted machines versus direct local serving, Core route adapters, Edge0 Q-124 and existing routing candidates; single-node, peer routing and model splits compared separately.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal; auto mode can download models and join a public mesh. Local API, encrypted transport and pooled compute do not establish private inference, trusted peers or model quality.
- **Next gate:** Compare single-host control before splitting; pin every peer/runtime/kernel/model and OS identity, separately qualify LAN/public peers/auth/grants/data flow, full RAM/VRAM/network costs, OpenAI/tool fidelity, cancellation and recovery under peer loss.
- **Evidence:** Pinned README/security/license/build metadata and representative source screening with independent review; no install, setup, model download, inference, peer discovery/network join or benchmark. Dates: 2026-10-28.
- **Registered records:** `inference.mesh-llm`.
- **Recorded revision:** `877de9fa94f8868b33091f4ae81b6cc25368ee55`.

- **November 9 source assessment:** `source-screened-not-tested` at `622a92b2a787b97f2d3f45c52046acea5f647511`.
  - Apache-2.0 distributed serving project now advertises native Windows CPU/CUDA/ROCm/Vulkan bundles as well as Linux/macOS; each backend/model/split remains separately qualified.
  - OS-authenticated plugin lifecycle capability matches launched child PID through Unix peer credentials or Windows named pipe clientPID; memory transport trusted only for host-owned runner. This control does not authenticate arbitrary mesh peers.
  - Pooling multiple machines exposes model/token/activation routes and aggregate resource/network/latency costs; one API does not imply one trusted local recipient.
- **Assessment sources:** [source1](https://github.com/Mesh-LLM/mesh-llm/blob/622a92b2a787b97f2d3f45c52046acea5f647511/README.md#L11); [source2](https://github.com/Mesh-LLM/mesh-llm/blob/622a92b2a787b97f2d3f45c52046acea5f647511/README.md#L230); [source3](https://github.com/Mesh-LLM/mesh-llm/blob/622a92b2a787b97f2d3f45c52046acea5f647511/mesh/crates/mesh-llm-host-runtime/src/plugin/runtime/socket_auth.rs#L7); [source4](https://github.com/Mesh-LLM/mesh-llm/blob/622a92b2a787b97f2d3f45c52046acea5f647511/mesh/crates/mesh-llm-host-runtime/src/plugin/runtime/socket_auth.rs#L40). Representative source screening; no execution or admission.

<a id="edge0-ai-edge0"></a>
### Edge0

[Edge0-AI/Edge0](https://github.com/Edge0-AI/Edge0) · **Shortlisted / planned**

- **Purpose:** Streaming sparse-MoE inference using SSD expert offload with platform-specific engines, model adapters and routing prediction.
- **Architecture fit:** E/H/I/J / Q-124: Local general-assistant model serving under memory pressure versus conventional llama.cpp/Ollama, AirLLM Q-43 and LiteRT-LM Q-68; engine conformance, model quality and exact pairing remain separate.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal; model/adapters and patched engine require separate pins and rights. Headline low-RAM claims and warm-memory Windows timings are not laptop measurements. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Pin exact patched engine/model/adapter and terms, qualify Windows Vulkan/device/RAM/storage admission, engine IPC/auth and port ownership, terminal cancellation/job crash cleanup, accepted-task quality, cold/warm cost/resources and removal.
- **Evidence:** Pinned README/platform/package/license and representative source screening with independent review; no install, build, model download/conversion, inference/server activation or benchmark. Dates: 2026-10-28.
- **Registered records:** `inference.edge0`.
- **Recorded revision:** `e9cc00cfb44b0fd2abf7195dcbe707b75ea6c3e5`.

- **November 9 source assessment:** `source-reviewed-bounded` at `8a52b68b7777b2f3da849c0603bfddc564c0fb77`.
  - Edge0 retains Apache2.0 root notice plus explicit patched MLX/llama.cpp provenance in NOTICE. Windows C++/Vulkan and macOS/Android/iOS paths are separate artifacts/backends.
  - Windows Tauri shell launches a separate engine on a random port and polls health; job metadata explicitly distinguishes successful KILL_ON_JOB_CLOSE attachment from fallback exit cleanup.
  - Inspected Job Object handling is useful lifecycle evidence but does not verify crash containment on this laptop. Low-RAM/warm-memory timing claims remain upstream claims and do not remove model/storage/system-memory gates.
- **Assessment sources:** [source1](https://github.com/Edge0-AI/Edge0/blob/8a52b68b7777b2f3da849c0603bfddc564c0fb77/LICENSE#L1); [source2](https://github.com/Edge0-AI/Edge0/blob/8a52b68b7777b2f3da849c0603bfddc564c0fb77/NOTICE#L1); [source3](https://github.com/Edge0-AI/Edge0/blob/8a52b68b7777b2f3da849c0603bfddc564c0fb77/README.md#L55); [source4](https://github.com/Edge0-AI/Edge0/blob/8a52b68b7777b2f3da849c0603bfddc564c0fb77/windows/app/src-tauri/src/engine.rs#L1); [source5](https://github.com/Edge0-AI/Edge0/blob/8a52b68b7777b2f3da849c0603bfddc564c0fb77/windows/app/src-tauri/src/engine.rs#L77); [source6](https://github.com/Edge0-AI/Edge0/blob/8a52b68b7777b2f3da849c0603bfddc564c0fb77/windows/app/src/api/client.ts#L48). Representative source screening; no execution or admission.

<a id="alishahryar1-free-claude-code"></a>
### Free Claude Code

[Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) · **Shortlisted / planned**

- **Purpose:** Local multi-provider protocol proxy and coding-agent launchers with optional browser/messaging interfaces.
- **Architecture fit:** E/H / Q-69 alongside Q-05 9Router and Q-32 Magpie: adapter/routing comparison; underlying model quality and runtime pairing separate.
- **Current status:** Source researched; planned and untested. Free-tier/account eligibility, AGPL reuse, credential/auth controls, fallback semantics and exact host/Python build remain gates.
- **Next gate:** Qualify AGPL reuse and actual provider terms/account authority, bind/admin auth and credential store, exact Anthropic/OpenAI streaming/tool/reasoning parity, fallback recipient bounds, cancellation/retries and full paid/quota cost.
- **Evidence:** Pinned README/pyproject and selected Claude launcher source reviewed; no install, account/credential access, proxy/session, provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** routing.free-claude-code
- **Recorded intake revision:** ec10cafdb0aaea86b135c5724ffd00394d385739

- **November 9 source assessment:** `source-screened-not-tested` at `6f5283a3946e9abcf96487e8cd732db012e41d2f`.
  - Current AGPLv3/Python 3.14 proxy adapts multiple upstream APIs; subscription routes and separately billed Anthropic keys remain distinct, free name is not cost or entitlement proof.
  - OpenRouter adapter validates extra fields cannot override canonical request fields and maps image-unsupported routing404 to deterministic nonretry400; reasoning replay is explicit.
  - Provider automatic key fallback expands recipient/key/billing scope and must remain within exact approved route, not mask unavailable upstream.
- **Assessment sources:** [source1](https://github.com/Alishahryar1/free-claude-code/blob/6f5283a3946e9abcf96487e8cd732db012e41d2f/README.md#L10); [source2](https://github.com/Alishahryar1/free-claude-code/blob/6f5283a3946e9abcf96487e8cd732db012e41d2f/README.md#L34); [source3](https://github.com/Alishahryar1/free-claude-code/blob/6f5283a3946e9abcf96487e8cd732db012e41d2f/README.md#L285); [source4](https://github.com/Alishahryar1/free-claude-code/blob/6f5283a3946e9abcf96487e8cd732db012e41d2f/src/free_claude_code/providers/open_router/client.py#L28); [source5](https://github.com/Alishahryar1/free-claude-code/blob/6f5283a3946e9abcf96487e8cd732db012e41d2f/src/free_claude_code/providers/open_router/client.py#L40). Representative source screening; no execution or admission.

<a id="google-ai-edge-litert-lm"></a>
### LiteRT-LM

[google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) · **Shortlisted / planned**

- **Purpose:** On-device language-model and embedding inference across eligible CPU/GPU/NPU backends.
- **Architecture fit:** E/I / Q-68 alongside BO-04/BO-05: engine feasibility, model quality and production pairing evaluated separately.
- **Current status:** Source researched; planned and untested. Exact release/model conversion, hardware/backend/API eligibility, licenses and resource headroom remain gates.
- **Next gate:** Preserve checkpoint/tokenizer/backend/driver/resources/Stop gates; explicitly verify v0.19/CAPI1ABI migration and web default-GPU/stream-load paths, local tool authority and per-model capability/rights/offline behavior before admission.
- **Evidence:** Pinned README/version/build docs and dated official overview reviewed; no SDK/build/model downloads, device changes, inference or full audit. Dates: 2026-10-17.
- **Registered records:** inference.litert-lm
- **Recorded intake revision:** 48b82892f1340013e6b0b42547c5b91ec712798d

- **November 9 source assessment:** `reviewed` at `02d7e8d80cb75cbb03d8cba4c63f51e2eb318ec5`.
  - README is nowv0.19.0 and calls out breaking C API1.0.0 status/out-parameter ABI plus stream-loaded web models/GPU default and ASR/TTS support. Exact engine/API/model pairings require renewed pin checks.
  - Representative Python tool example binds CPU Engine to provided model file and registers executable product callback. Tool calling is real local code execution, requiring externally scoped tool grants. Cross-platform marketing does not establish this Windows backend/model result.
- **Assessment sources:** [source1](https://github.com/google-ai-edge/LiteRT-LM/blob/02d7e8d80cb75cbb03d8cba4c63f51e2eb318ec5/README.md#L9); [source2](https://github.com/google-ai-edge/LiteRT-LM/blob/02d7e8d80cb75cbb03d8cba4c63f51e2eb318ec5/README.md#L13); [source3](https://github.com/google-ai-edge/LiteRT-LM/blob/02d7e8d80cb75cbb03d8cba4c63f51e2eb318ec5/python/litert_lm/examples/tool_main.py#L57). Representative source screening; no execution or admission.

<a id="lyogavin-airllm"></a>
### AirLLM

[lyogavin/airllm](https://github.com/lyogavin/airllm) · **Shortlisted / planned**

- **Purpose:** Layer-streamed local model execution to reduce resident GPU weight memory.
- **Architecture fit:** E/G / Q-43 alongside BO-04/BO-05: engine feasibility versus eligible resident/quantized/offload backends; quality and runtime/model pairing stay separate.
- **Current status:** Source researched; conditional engine-feasibility comparison planned and untested. Low VRAM claims do not establish full resources, latency or pairing admission.
- **Next gate:** Retain hardware-deferred large-model lane; pin model code/weights and engine/CUDA versions, calculate complete checkpoint/split disk+RAM+KV+prefetch envelope and deletion policy, qualify startup/throughput/quality and cancellation before downloads or host admission.
- **Evidence:** Pinned README, package metadata and selected AutoModel/base source excerpts screened; no execution or full audit. Dates: 2026-10-13.
- **Record IDs:** `inference.airllm`.
- **Historical intake revision:** `cb807515f640f9489f267adc0c66afb249e90a17`.

- **November 9 source assessment:** `source-screened-not-tested` at `3aef5f3c59738c51a61f25065a7f5a5722030eac`.
  - AirLLM remains disk-streaming inference, not proof enormous checkpoints fit host storage/RAM or offer useful interactive latency.
  - Current base source instantiates actual Transformers model on meta and hooks layer load/free/prefetch; default max pinned prefetched layer is2 GiB and device auto-selects CUDA/MPS/CPU.
  - README explicitly lists huge checkpoint disk, remote-code/Transformers/FlashAttention version constraints and deletion of original artifacts; low VRAM measurements are upstream model/host-specific claims.
- **Assessment sources:** [source1](https://github.com/lyogavin/airllm/blob/3aef5f3c59738c51a61f25065a7f5a5722030eac/README.md#L32); [source2](https://github.com/lyogavin/airllm/blob/3aef5f3c59738c51a61f25065a7f5a5722030eac/README.md#L144); [source3](https://github.com/lyogavin/airllm/blob/3aef5f3c59738c51a61f25065a7f5a5722030eac/air_llm/airllm/airllm_base.py#L58). Representative source screening; no execution or admission.

<a id="yetone-magpie"></a>
### Magpie

[yetone/magpie](https://github.com/yetone/magpie) · **Shortlisted / planned**

- **Purpose:** Local model/provider configuration manager and protocol gateway.
- **Architecture fit:** E/H / Q-32: compare with direct provider adapters and eligible Q-05 9Router controls.
- **Current status:** README and repository metadata researched; planned and untested. Core owns exact routes, manual pins, credentials, budgets and egress; automatic account/model fallback requires explicit admission. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Freeze approved account/model/endpoint and prohibit automatic unadmitted fallback; qualify gateway auth/network exposure, credential storage/header forwarding, MCP OAuth/browser grants, retry effects, explicit costs and all-route Stop.
- **Evidence:** Pinned README and public repository metadata screened; no execution, benchmark replication or full audit. Dates: 2026-10-09.
- **Record IDs:** `proxy.magpie`.
- **Historical intake revision:** `62d7cd7be305c6e0cc58ba8ad2604f2bb555d749`.

- **November 9 source assessment:** `source-reviewed-bounded` at `2b22425b45188237e808cd7c8f3b65613c79b8cd`.
  - Magpie now documents cross-account and cross-model/provider fallback after quotas; this changes recipient, billing and capability identity unless Core explicitly pins the route.
  - Auth-header implementation supports x-api-key versus Bearer and retries a vendor-compatible ordering. Remote MCP OAuth is a separate credential flow, while browser tools expose URL opening capabilities.
  - MIT root and Go1.26.8 metadata coexist with container binding0.0.0.0:3425; platform badges and API compatibility do not establish private authenticated deployment or account eligibility.
- **Assessment sources:** [source1](https://github.com/yetone/magpie/blob/2b22425b45188237e808cd7c8f3b65613c79b8cd/LICENSE#L1); [source2](https://github.com/yetone/magpie/blob/2b22425b45188237e808cd7c8f3b65613c79b8cd/go.mod#L1); [source3](https://github.com/yetone/magpie/blob/2b22425b45188237e808cd7c8f3b65613c79b8cd/README.md#L39); [source4](https://github.com/yetone/magpie/blob/2b22425b45188237e808cd7c8f3b65613c79b8cd/Dockerfile#L44); [source5](https://github.com/yetone/magpie/blob/2b22425b45188237e808cd7c8f3b65613c79b8cd/internal/catalog/authheader.go#L9); [source6](https://github.com/yetone/magpie/blob/2b22425b45188237e808cd7c8f3b65613c79b8cd/internal/mcpauth/mcpauth.go#L1); [source7](https://github.com/yetone/magpie/blob/2b22425b45188237e808cd7c8f3b65613c79b8cd/internal/gateway/browser_tools.go#L48). Representative source screening; no execution or admission.

<a id="decolua-9router"></a>
### 9Router

[decolua/9router](https://github.com/decolua/9router) · **Shortlisted / planned**

- **Purpose:** Optional provider-protocol adapter.
- **Architecture fit:** E / Q-05: compare against direct provider connections.
- **Current status:** Source screening complete; synthetic and real-route qualification unrun. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Compare only separately eligible API routes first; pin model/endpoint and disallow silent recipient/billing changes, qualify dashboard auth, OAuth/browser profile handling, streaming/tool parity, budget accounting, retries and all-route Stop.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-15.
- **Record IDs:** `proxy.9router.decolua`.
- **Historical intake revision:** `17c4cc76877bd1755030a8414f8d0083f48dcccf`.

- **November 9 source assessment:** `source-reviewed-bounded` at `1339107e624d1ab150c6a0c2c2ee22caa7e9db2f`.
  - 9Router0.5.116 remains an MIT protocol/router dashboard with browser-backed ChatGPT/Gemini executors alongside provider APIs; these are different eligibility and credential paths.
  - Local OAuth callback guard rejects non-loopback Origin headers while permitting top-level navigation without Origin; later callbacks combine state checks. Do not assume that callback guard covers public dashboard/server exposure.
  - Docker binds0.0.0.0 and compose adds a headroom service. Broad model/failover convenience cannot establish exact billing identity, account eligibility or safe fallback for Abrams.
- **Assessment sources:** [source1](https://github.com/decolua/9router/blob/1339107e624d1ab150c6a0c2c2ee22caa7e9db2f/LICENSE#L1); [source2](https://github.com/decolua/9router/blob/1339107e624d1ab150c6a0c2c2ee22caa7e9db2f/package.json#L1); [source3](https://github.com/decolua/9router/blob/1339107e624d1ab150c6a0c2c2ee22caa7e9db2f/Dockerfile#L65); [source4](https://github.com/decolua/9router/blob/1339107e624d1ab150c6a0c2c2ee22caa7e9db2f/docker-compose.yml#L11); [source5](https://github.com/decolua/9router/blob/1339107e624d1ab150c6a0c2c2ee22caa7e9db2f/src/lib/oauth/utils/server.js#L5); [source6](https://github.com/decolua/9router/blob/1339107e624d1ab150c6a0c2c2ee22caa7e9db2f/src/lib/oauth/utils/server.js#L475); [source7](https://github.com/decolua/9router/blob/1339107e624d1ab150c6a0c2c2ee22caa7e9db2f/src/lib/oauth/utils/server.js#L580); [source8](https://github.com/decolua/9router/blob/1339107e624d1ab150c6a0c2c2ee22caa7e9db2f/open-sse/executors/chatgpt-web/browserSession.js#L1). Representative source screening; no execution or admission.


<a id="tashfeenahmed-freellmapi"></a>
### FreeLLMAPI

[tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) · **Shortlisted / planned**

- **Purpose:** Self-hosted provider/model gateway with OpenAI, Responses, Anthropic, Gemini and optional Ollama-compatible surfaces; provider fallbacks, catalog/key quotas, optional compression/cache and multi-model synthesis.
- **Architecture fit:** E/I/J / existing Q-14: Abrams product-side manual/Auto local/cloud API switching and provider-neutral gateway comparison versus direct Core adapters, eligible9Router/LiteLLM and existing routers. Protocol compatibility, exact route fidelity, privacy and aggregate spend require separate evidence. Compare upstream, licensed router/protocol components, minimal original adapters and defer.
- **Current status:** Source researched; refreshed November12; planned and untested. MIT source, Node>=20.18<25/npm>=10 metadata; native SQLite/desktop/server variants separate. Advertised34providers/635endpoints/7.4Btokens are catalog/quota claims, not verified available capacity or provider entitlement. Free delayed feed versus paid live feed and actual third-party quotas/terms remain gates; no provider calls or adoption.
- **Next gate:** Qualify exact manual model/provider fidelity and disable unapproved fallback/fan-out/compression/cache/catalog changes. Review API/admin/MCP/tunnel bind/auth, credential encryption/revocation/backups, provider terms/quotas/retention and every retry/panel/judge recipient. Pin executable/catalog/artifacts and Windows/runtime dependencies; preserve canonical state, context lineage and full-response correctness. Prove cancellation/ambiguous effects, aggregate pre-reserved spend/time/token budgets across keys/processes/providers and rate limits; measure task quality, full latency/TTFT/cost plus maintenance/exit burden. Preserve USD25 monthly metered cap; no free-capacity pooling assumption or paid subscription authorized.
- **Evidence:** November12 pinned README/LICENSE/manifests and representative gateway auth, router/fallback, fusion, catalog-sync, crypto and per-key budget source. No install/build, credential/provider use, catalog service calls, live endpoint tests or candidate benchmark. Earlier pins/assessments remain historical.
- **Record IDs:** `proxy.freellmapi`.
- **Current reviewed revision:** `ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98`.
- **Link/intake check:** 2026-11-12; source review dated 2026-11-12.

- The screenshot endpoint count matches the README headline, not a verified count of callable models for this account. Provider keys/accounts, changing free-tier quotas and terms remain independent; neither catalog totals nor unused quotas establish interchangeable free capacity.
- README advertises a monthly delayed catalog and a premium live feed (claimed USD19/year). Source schedules signed catalog fetches twice daily against a configurable catalog origin and pinned verification key. Signing authenticates feed bytes, not route suitability, confidentiality, entitlement or unchanged routing; pin/approve catalog changes separately.
- Fallback and profile routing can select different models/keys/providers; optional fusion fans the prompt to multiple panel models and a judge. Model selection and recipient authorization must be exact and visible, including retry and synthesis paths; OpenAI/Anthropic wire compatibility is not proof of every client/tool/streaming semantic.
- Per-key monthly request/token caps are opt-in with0 meaning unlimited. The inspected code reserves estimated active-request tokens in the current process and settles successful usage in SQLite. This is useful admission plumbing, not exact billed USD or independently proven cross-process/global budgeting; combined provider/retry/panel spend remains Core-owned.
- Dashboard requireAuth validates its own session while the proxy uses a different unified-key boundary. Keys use AES-256-GCM; production requires explicit encryption key and development can create a local key file beside the DB. Qualify file permissions, key backup/rotation/revocation and every exposed API/admin/MCP/tunnel route independently.
- Compression/cache and optional handoff can alter what downstream models see; preserve raw request/response lineage, retention/deletion and matched quality. Abort signals and tool-call timeouts in fusion are not a universal guarantee that every downstream provider or asynchronous effect stops. No service, account, endpoint or quota was exercised.

Sources: [source 1](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/README.md#L5); [source 2](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/package.json#L23); [source 3](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/server/src/services/catalog-sync.ts#L24); [source 4](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/server/src/services/router.ts#L181); [source 5](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/server/src/lib/fallback-loop.ts#L1); [source 6](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/server/src/services/fusion.ts#L40); [source 7](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/server/src/services/key-budget.ts#L103); [source 8](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/server/src/middleware/requireAuth.ts#L4); [source 9](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/server/src/lib/crypto.ts#L12); [source 10](https://github.com/tashfeenahmed/freellmapi/blob/ae915683cdbfa074d89bf5aa5e8415dfcfc2ad98/server/src/services/compression/pipeline.ts#L1).

#### Historical intake and November9 assessment

- **Purpose:** Experimental provider gateway.
- **Architecture fit:** E / Q-14: compare with direct adapters and eligible 9Router routes.
- **Current status:** Source screened; no live calls, quotas or reliability validated.
- **Next gate:** Verify exact manually selected model/route fidelity and disable unapproved fallback; separately qualify API/admin/MCP/tunnel auth, key encryption/revocation, provider terms/quotas/data recipients, cancellation/retries and observed full cost; no aggregated free-capacity assumption.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-22.
- **Record IDs:** `proxy.freellmapi`.
- **Historical intake revision:** `37f07fdc3a2cdf14b2cc804e63ce82ff9a178854`.

- **November 9 source assessment:** `reviewed` at `7f3fece4f9daec0d32877d0a4b8038045dc9daf3`.
  - Current README advertises34providers/635free endpoints and aggregated7.4Btokens; these are vendor catalog/quota claims, not available Abrams capacity. Automatic fallback can change provider/model and cannot override manual route, privacy or budget.
  - Dashboard middleware validates its own session token; comment distinguishes /v1 unified-key auth from /api admin session boundary. Encrypted keys at rest do not establish provider eligibility or retention policy.
  - Desktop/Node20+/Windows routes and secure MCP tunnel are additional components requiring separate recipient/auth/Stop qualification.
- **Assessment sources:** [source1](https://github.com/tashfeenahmed/freellmapi/blob/7f3fece4f9daec0d32877d0a4b8038045dc9daf3/README.md#L5); [source2](https://github.com/tashfeenahmed/freellmapi/blob/7f3fece4f9daec0d32877d0a4b8038045dc9daf3/README.md#L7); [source3](https://github.com/tashfeenahmed/freellmapi/blob/7f3fece4f9daec0d32877d0a4b8038045dc9daf3/server/src/middleware/requireAuth.ts#L6). Representative source screening; no execution or admission.

<a id="flashml-org-freetoken"></a>
### FreeToken

[FlashML-org/FreeToken](https://github.com/FlashML-org/FreeToken) · **Shortlisted / planned**

- **Purpose:** Local model-serving engine with MoE expert offload, CPU/GPU hybrid execution, cache management and OpenAI/Anthropic-compatible APIs.
- **Architecture fit:** E/H/I/J / BO-04 + Q-114: Local backend feasibility for general-assistant chat, research, coding and tools; model quality BO-05 and exact runtime/model pairing remain separate.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal. Windows desktop availability, Linux CUDA CLI, WSL behavior and experimental AMD support require separate artifact qualification; offload does not remove RAM/storage limits. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain exact Windows/Linux/WSL/backend qualification and hardware gate; pin model/quant/native Torch build, require private auth and constrained media fetches, measure accepted quality/resources/cost, and require terminal Stop/resource-release receipts.
- **Evidence:** Pinned README, installation/model/CLI/package/security metadata and independent representative source screening; no install, weight download, engine/API/model call or benchmark. Dates: 2026-09-04, 2026-10-22.
- **Registered records:** `runtime.freetoken` (existing record refreshed; no count increase).
- **Recorded revision:** `546c5fe2e4468e2f3f8a574c64021a47016c35f7`

- **November 9 source assessment:** `source-reviewed-bounded` at `5a73685b1a836f523c692c77b70152c01698ed8e`.
  - FreeToken remains Apache2.0 local MoE offload infrastructure; build isolation pins Torch>=2.14,<2.15 and native-extension compatibility. GUI availability does not establish CPU/RAM/storage eligibility.
  - Server defaults127.0.0.1:1919 with optional API key; help explicitly says unset key serves unauthenticated. Media URL domain allowlist defaults empty, permitting any domain.
  - Stats separates abort-dispatched requests from explicitly terminal acknowledgments; this is useful lifecycle design evidence, not proof that a model worker stopped or released resources.
- **Assessment sources:** [source1](https://github.com/FlashML-org/FreeToken/blob/5a73685b1a836f523c692c77b70152c01698ed8e/LICENSE#L1); [source2](https://github.com/FlashML-org/FreeToken/blob/5a73685b1a836f523c692c77b70152c01698ed8e/pyproject.toml#L1); [source3](https://github.com/FlashML-org/FreeToken/blob/5a73685b1a836f523c692c77b70152c01698ed8e/python/freetoken/server/args.py#L38); [source4](https://github.com/FlashML-org/FreeToken/blob/5a73685b1a836f523c692c77b70152c01698ed8e/python/freetoken/server/args.py#L405); [source5](https://github.com/FlashML-org/FreeToken/blob/5a73685b1a836f523c692c77b70152c01698ed8e/python/freetoken/server/stats.py#L15). Representative source screening; no execution or admission.

<a id="moonshotai-kimi-k2"></a>
### Kimi K2

[MoonshotAI/Kimi-K2](https://github.com/MoonshotAI/Kimi-K2) · **Shortlisted / planned**

- **Purpose:** General-model family for route-specific comparison.
- **Architecture fit:** E / BO-05: model quality separate from runtime and pairing qualification.
- **Current status:** Cataloged; no admitted model route or local benchmark.
- **Next gate:** Pin exact hosted identity or local checkpoint/quantization/parser engine separately; retain local hardware deferral; test tool/message/finish behavior with Core grants and bounded iterations, total memory/disk/route cost and cancellation.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `model.kimi-k2`.

- **November 9 source assessment:** `source-screened-not-tested` at `1b4022bbb7187cf4011a8bdf0b4cd10e2daa26c4`.
  - Kimi-K2 code/model uses Modified MIT with conditional KimiK2 UI attribution for very large commercial user/revenue thresholds; do not flatten this into ordinaryMIT.
  - Tool-call guide requires engine-native parser support and keeps dispatch client-owned; sample loops through model finish_reason and directly invokes mapped tools, with no Core permissions/budget/iteration bound supplied by sample.
  - Large-model local versus hosted deployment and engine/weight rights remain separate; source guidance is not a working model benchmark.
- **Assessment sources:** [source1](https://github.com/MoonshotAI/Kimi-K2/blob/1b4022bbb7187cf4011a8bdf0b4cd10e2daa26c4/LICENSE#L1); [source2](https://github.com/MoonshotAI/Kimi-K2/blob/1b4022bbb7187cf4011a8bdf0b4cd10e2daa26c4/docs/tool_call_guidance.md#L1); [source3](https://github.com/MoonshotAI/Kimi-K2/blob/1b4022bbb7187cf4011a8bdf0b4cd10e2daa26c4/docs/tool_call_guidance.md#L42). Representative source screening; no execution or admission.

<a id="moonshotai-kimi-k3"></a>
### Kimi K3 local

[MoonshotAI/Kimi-K3](https://github.com/MoonshotAI/Kimi-K3) · **Shortlisted / planned**

- **Purpose:** Local large-model candidate retained for complete coverage.
- **Architecture fit:** E / BO-05: hardware eligibility is evaluated before inference.
- **Current status:** Local scope recorded as rejected/hardware-ineligible; not silently removed.
- **Next gate:** Preserve local hardware-ineligible/rejected status until new exact hardware/backend evidence; separately review KimiK3 custom-license intended use and retained thinking/tool protocol. Hosted API identity is not local execution evidence.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `model.kimi-k3-local`.

- **November 9 source assessment:** `reviewed` at `3cb39dfd32e51c3328e2e4b4af21341247d06c43`.
  - Current source is model documentation plus custom Kimi K3 LICENSE, not an executable local engine. It specifies2.8Tparameters/native vision/1Mcontext; weights/engine/hardware qualification remains separate.
  - License includes Model-as-Service revenue-triggered agreement and large-commercial-product attribution conditions with internal/official-service exceptions; do not replace with generic MIT/Apache label.
  - Thinking is always enabled with low/high/max(defaultmax); complete assistant reasoning/tool history must be retained. Existing local hardware-ineligible/rejected scope remains; hosted route reviewed separately.
- **Assessment sources:** [source1](https://github.com/MoonshotAI/Kimi-K3/blob/3cb39dfd32e51c3328e2e4b4af21341247d06c43/README.md#L30); [source2](https://github.com/MoonshotAI/Kimi-K3/blob/3cb39dfd32e51c3328e2e4b4af21341247d06c43/README.md#L617); [source3](https://github.com/MoonshotAI/Kimi-K3/blob/3cb39dfd32e51c3328e2e4b4af21341247d06c43/LICENSE#L19). Representative source screening; no execution or admission.

<a id="moonshotai-kimi-vl"></a>
### Kimi VL

[MoonshotAI/Kimi-VL](https://github.com/MoonshotAI/Kimi-VL) · **Shortlisted / planned**

- **Purpose:** Vision-model candidate for separately scoped multimodal work.
- **Architecture fit:** E/G/H / BO-05: vision task and route qualification.
- **Current status:** Deferred; no visual-task benchmark or production pairing. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain deferred visual-task scope; pin exact model/processor code and license, avoid remote-code autoexecution until reviewed, qualify GPU/RAM/image privacy, calibrated task quality, latency/cost and cancellation independently of hosted Kimi routes.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `model.kimi-vl-a3b`.

- **November 9 source assessment:** `source-reviewed-bounded` at `41d5ef072bc52a04524f94ab736ff9c29f125fda`.
  - Kimi-VL README separates16B-total/3B-active models and marks the original Thinking variant deprecated; that is distinct from current hosted Kimi-K3 or a generic Kimi route.
  - Example Transformers inference enables trust_remote_code=True for model and processor with device_map=auto; model repository code and memory resources require separate review. Requirements pin Torch2.5.1/Transformers4.51.3.
  - MIT repository notice does not by itself qualify each linked model artifact or publish benchmark results as Abrams measurements. Repository supplies reference inference recipes; no backend was executed.
- **Assessment sources:** [source1](https://github.com/MoonshotAI/Kimi-VL/blob/41d5ef072bc52a04524f94ab736ff9c29f125fda/LICENSE#L1); [source2](https://github.com/MoonshotAI/Kimi-VL/blob/41d5ef072bc52a04524f94ab736ff9c29f125fda/requirements.txt#L1); [source3](https://github.com/MoonshotAI/Kimi-VL/blob/41d5ef072bc52a04524f94ab736ff9c29f125fda/README.md#L55); [source4](https://github.com/MoonshotAI/Kimi-VL/blob/41d5ef072bc52a04524f94ab736ff9c29f125fda/README.md#L118). Representative source screening; no execution or admission.

<a id="moonshotai-kimi-dev"></a>
### Kimi-Dev

[MoonshotAI/Kimi-Dev](https://github.com/MoonshotAI/Kimi-Dev) · **Shortlisted / planned**

- **Purpose:** Specialist coding-model family reference.
- **Architecture fit:** E/H / BO-05: exact model route and coding-task evaluation.
- **Current status:** Planned; large-model resource eligibility unresolved.
- **Next gate:** Resolve Qwenbase and checkpoint rights, exact engine/model pair and full memory/disk; isolate benchmark harness retries/provider credentials and immutable holdouts, then matchedcoding/general-assistant relevance and total cost/Stop before any run.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `model.kimi-dev-72b`.

- **November 9 source assessment:** `source-screened-not-tested` at `5f60757f5ef54f66455c209aca169c8f850b96bd`.
  - Kimi-Dev72B is an issue-resolution model/agentless benchmark surface, not proof general-assistant adequacy; local hardware eligibility remains deferred.
  - License explicitly makes MIT conditional on upstream Qwen2.5-72B license, which must be reviewed separately.
  - Representative benchmark model API can retry Anthropic calls up to40 with500 second timeout and increasing sleep; this is unbounded-cost exposure relative to a single task unless externally constrained.
- **Assessment sources:** [source1](https://github.com/MoonshotAI/Kimi-Dev/blob/5f60757f5ef54f66455c209aca169c8f850b96bd/README.md#L3); [source2](https://github.com/MoonshotAI/Kimi-Dev/blob/5f60757f5ef54f66455c209aca169c8f850b96bd/LICENSE.md#L1); [source3](https://github.com/MoonshotAI/Kimi-Dev/blob/5f60757f5ef54f66455c209aca169c8f850b96bd/kimidev/agentlessnano/model_api.py#L57). Representative source screening; no execution or admission.

<a id="ggml-org-llama-cpp"></a>
### llama.cpp

[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) · **Shortlisted / planned**

- **Purpose:** Local model inference backend with CPU and Vulkan paths.
- **Architecture fit:** E / BO-04: compare eligible configurations against Ollama controls.
- **Current status:** Planned backend comparison; no Abrams production adoption.
- **Next gate:** Preserve exactbinary/model/backend/resource qualification; explicitly pin/disallow auto model resolution/download, auth/bind and UI/agent tools, distinguish process/embedded Stop, context/KVrequirements and quantization quality.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `runtime.llama-cpp`.

- **November 9 source assessment:** `reviewed` at `a0ad695cb212db3850f163121ddc687513448d42`.
  - Current backend exposes CLI/OpenAI-compatible server and UI/agentic surfaces; model quantization and CPU/GPUhybrid options remain exact pairing/resource questions, not universal small-memory eligibility.
  - Server implementation installs signal handlers with second interrupt hard exit; embedded mode can disable handlers and resolution/download behavior. Stop semantics and model auto-resolution must be qualified per process versus embedded mode.
- **Assessment sources:** [source1](https://github.com/ggml-org/llama.cpp/blob/a0ad695cb212db3850f163121ddc687513448d42/README.md#L72); [source2](https://github.com/ggml-org/llama.cpp/blob/a0ad695cb212db3850f163121ddc687513448d42/tools/server/server.cpp#L33); [source3](https://github.com/ggml-org/llama.cpp/blob/a0ad695cb212db3850f163121ddc687513448d42/tools/server/server.cpp#L43). Representative source screening; no execution or admission.

<a id="ollama-ollama"></a>
### Ollama

[ollama/ollama](https://github.com/ollama/ollama) · **Shortlisted / planned**

- **Purpose:** Local model-serving backend.
- **Architecture fit:** E / BO-04: CPU/Vulkan comparison before model-route adoption.
- **Current status:** Planned; installation or API availability is not qualification.
- **Next gate:** Preserve actual admitted prototype route separately; qualify current binary/engine/model digest, local bind/auth and cloud disabled/egress, memory/context resource envelope, unload/cancel/restart and quality/latencycost before changing backend.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `runtime.ollama`.

- **November 9 source assessment:** `source-screened-not-tested` at `d63b702609c4300a2ca07be2bdb0adb9834725e5`.
  - Ollama current README explicitly covers local and cloud models; privacy/offline claims require selecting a truly local route, not repository identity alone.
  - Registry authorization constructs nonce/timestamp challenge and refuses realm host differing from original requested host; this protects registry credential forwarding, not authentication of every local inference endpoint.
  - Existing Abrams prototype4B/9B measurements remain scoped historical results; current upstream source freshness does not rerun them.
- **Assessment sources:** [source1](https://github.com/ollama/ollama/blob/d63b702609c4300a2ca07be2bdb0adb9834725e5/README.md#L7); [source2](https://github.com/ollama/ollama/blob/d63b702609c4300a2ca07be2bdb0adb9834725e5/server/auth.go#L28); [source3](https://github.com/ollama/ollama/blob/d63b702609c4300a2ca07be2bdb0adb9834725e5/LICENSE#L1). Representative source screening; no execution or admission.

<a id="lidge-jun-opencodex"></a>
### OpenCodex provider proxy

[lidge-jun/opencodex](https://github.com/lidge-jun/opencodex) · **Shortlisted / planned**

- **Purpose:** Provider-protocol translation candidate.
- **Architecture fit:** E / Q-04: removable proxy only for a named protocol gap.
- **Current status:** Trigger-gated; not a BO-03 runtime competitor.
- **Next gate:** Prove a protocol gap and preserve Core route, credential and budget authority.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `proxy.opencodex.lidge-jun`.

- **November 9 source assessment:** `reviewed` at `a1d7d05eac28177588c6227ec58033e0358170b1`.
  - Current README gateway scope includes Codex, Claude Code/Desktop and other coding tools with managed config changes; this remains trigger-gated protocol adjacency rather than autonomous runtime competitor.
  - Runtime config source selects account-pool entries and writes config through saveConfigPreservingClaudeCode; management-auth imports distinct PID/expiry/nonce capabilities for local read/restart/reload/pairing. Do not assume one loopback token controls every surface.
  - Provider/account eligibility, manual routing and config rollback require separate proof; source-supported Windows MSI does not qualify host execution.
- **Assessment sources:** [source1](https://github.com/lidge-jun/opencodex/blob/a1d7d05eac28177588c6227ec58033e0358170b1/README.md#L2); [source2](https://github.com/lidge-jun/opencodex/blob/a1d7d05eac28177588c6227ec58033e0358170b1/src/codex/auth-api/runtime-config.ts#L6); [source3](https://github.com/lidge-jun/opencodex/blob/a1d7d05eac28177588c6227ec58033e0358170b1/src/server/management-auth.ts#L28). Representative source screening; no execution or admission.

<a id="qwenlm-qwen3"></a>
### Qwen3 family

[QwenLM/Qwen3](https://github.com/QwenLM/Qwen3) · **Shortlisted / planned**

- **Purpose:** Model family spanning local controls and larger capacity candidates.
- **Architecture fit:** E / BO-05: compare exact size, quantization, backend and task lane.
- **Current status:** Mixed scopes: smaller controls planned; larger variants deferred or hardware-gated. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Select exact model revision/quant/tokenizer/template and serving engine with per-artifact terms; qualify hardware/context budget, thinking/tool protocol, private API auth, accepted-task quality and Stop before changing any route.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `model.qwen3-14b`, `model.qwen3-30b-a3b`, `model.qwen3-32b`.

- **November 9 source assessment:** `source-reviewed-bounded` at `7a2f61ffc7a20d47efcd2bf97f6f2bf52729042e`.
  - Qwen3 repository documents a family spanning0.6B through235B MoE and separate Instruct/Thinking2507 variants; family-level support is not a single evaluated model artifact.
  - Transformers recipe requires>=4.51.0 and thinking-template behavior differs across variants. Docker web demo binds0.0.0.0 on port80; a demo server needs its own private/authenticated boundary.
  - Small local controls and large deferred variants must keep independent hardware, quantization and model-card terms. No actual weights, serving engine or benchmark were loaded.
- **Assessment sources:** [source1](https://github.com/QwenLM/Qwen3/blob/7a2f61ffc7a20d47efcd2bf97f6f2bf52729042e/README.md#L28); [source2](https://github.com/QwenLM/Qwen3/blob/7a2f61ffc7a20d47efcd2bf97f6f2bf52729042e/README.md#L87); [source3](https://github.com/QwenLM/Qwen3/blob/7a2f61ffc7a20d47efcd2bf97f6f2bf52729042e/README.md#L130); [source4](https://github.com/QwenLM/Qwen3/blob/7a2f61ffc7a20d47efcd2bf97f6f2bf52729042e/README.md#L190); [source5](https://github.com/QwenLM/Qwen3/blob/7a2f61ffc7a20d47efcd2bf97f6f2bf52729042e/docker/docker_web_demo.sh#L53). Representative source screening; no execution or admission.

<a id="qwenlm-qwen3-next"></a>
### Qwen3-Next reference

[QwenLM/Qwen3.8](https://github.com/QwenLM/Qwen3.8) · **Shortlisted / planned**

- **Purpose:** Recorded 80B-A3B model-family source reference.
- **Architecture fit:** E / BO-05: exact historical artifact remains distinct from the renamed repository.
- **Current status:** Cataloged; current URL redirects to Qwen3.8. No historical result transfers.
- **Next gate:** Keep original model record/pin history; separately establish exact Qwen3-Next80B modelcard/weights/quantization/config/engine and rights, retain hardware deferral, compare hosted/local routes without inheriting family or prototype results.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `model.qwen3-next-80b-a3b`.
- **Identity note:** recorded as `QwenLM/Qwen3-Next`; current destination verified October 7. The redirect does not transfer historical results to new code.

- **November 9 source assessment:** `source-screened-not-tested` at `2ea10dc725823bf7c3e21ce8557cbe15245132ae`.
  - Repository path Qwen3-Next now presents Qwen3.8 family README and news while retaining original Qwen3-Next80B release history; treat it as family documentation reference, not an exact current checkpoint artifact.
  - README explicitly sends model-weight licenses to each HF/ModelScope model page; repository Apache-2.0 cannot clear all models.
  - Current collection spans dramatically different sizes/architectures; reported family quality and hosted product features cannot qualify a local model/engine.
- **Assessment sources:** [source1](https://github.com/QwenLM/Qwen3.8/blob/2ea10dc725823bf7c3e21ce8557cbe15245132ae/README.md#L1); [source2](https://github.com/QwenLM/Qwen3.8/blob/2ea10dc725823bf7c3e21ce8557cbe15245132ae/README.md#L48); [source3](https://github.com/QwenLM/Qwen3.8/blob/2ea10dc725823bf7c3e21ce8557cbe15245132ae/README.md#L195); [source4](https://github.com/QwenLM/Qwen3.8/blob/2ea10dc725823bf7c3e21ce8557cbe15245132ae/LICENSE#L1). Representative source screening; no execution or admission.

<a id="qwenlm-qwen3-8-flash-next"></a>
### Qwen3.8 Flash Next

[QwenLM/Qwen3.8-Flash-Next](https://github.com/QwenLM/Qwen3.8-Flash-Next) · **Shortlisted / planned**

- **Purpose:** General-model candidate retained in the discovery inventory.
- **Architecture fit:** E / BO-05: qualify exact routes rather than a family name.
- **Current status:** Cataloged; model and provider qualification unrun.
- **Next gate:** Resolve exact model card/weights license, checkpoint/compiler/backend resources including total embeddings, or explicit hosted account/model/protocol/cost/privacy route; preserve unrun evaluation and no automatic Qwen4 substitution.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `model.qwen3.8-flash-next`.

- **November 9 source assessment:** `reviewed` at `69885871a64393807d988b27b1b5e380e8f28526`.
  - Captured tree contains README documentation, not inference implementation or root license. README says125Bmain+51Bngram embeddings with6Bactive/token; active count does not imply6Bweight/memory footprint.
  - README advertises QwenCloud/OpenAI/Anthropic API and multiple engines, but exact model artifact, backend and route qualification remain unrun. This architectural preview is not authority to relabel existing candidate Qwen4.
- **Assessment sources:** [source1](https://github.com/QwenLM/Qwen3.8-Flash-Next/blob/69885871a64393807d988b27b1b5e380e8f28526/README.md#L33); [source2](https://github.com/QwenLM/Qwen3.8-Flash-Next/blob/69885871a64393807d988b27b1b5e380e8f28526/README.md#L67); [source3](https://github.com/QwenLM/Qwen3.8-Flash-Next/blob/69885871a64393807d988b27b1b5e380e8f28526/README.md#L19). Representative source screening; no execution or admission.

<a id="huggingface-transformers"></a>
### Transformers

[huggingface/transformers](https://github.com/huggingface/transformers) · **Shortlisted / planned**

- **Purpose:** Model-loading and inference framework.
- **Architecture fit:** E / BO-04: backend candidate; experimental use does not admit the product route.
- **Current status:** Cataloged; no independent product backend qualification. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Pin library, model code/weights and native dependencies separately; require safe serialization, explicit remote-code decisions, route auth/CORS/network scope, hardware admission, quant/template parity, costs and confirmed cancellation.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `runtime.transformers`.

- **November 9 source assessment:** `source-reviewed-bounded` at `f262a8cdaae8d78ab5bf57c6fa41a0db6ca01a34`.
  - Transformers remains an Apache2.0 model library; SECURITY advises safetensors over unsafe pickle and warns model-dependent loading behavior needs explicit trust decisions.
  - Current serving factory supports chat/completion/response/transcription/SystemOne handlers and optional permissive CORS, disabled by default. This broad protocol surface is not an authenticated product backend qualification.
  - GPU Docker recipe fetches kernels@main and clones NVIDIA Apex, so pinning this repository alone does not freeze that build supply chain or CUDA hardware footprint.
- **Assessment sources:** [source1](https://github.com/huggingface/transformers/blob/f262a8cdaae8d78ab5bf57c6fa41a0db6ca01a34/LICENSE#L1); [source2](https://github.com/huggingface/transformers/blob/f262a8cdaae8d78ab5bf57c6fa41a0db6ca01a34/SECURITY.md#L10); [source3](https://github.com/huggingface/transformers/blob/f262a8cdaae8d78ab5bf57c6fa41a0db6ca01a34/src/transformers/cli/serving/server.py#L45); [source4](https://github.com/huggingface/transformers/blob/f262a8cdaae8d78ab5bf57c6fa41a0db6ca01a34/docker/transformers-gpu/Dockerfile#L15). Representative source screening; no execution or admission.

<a id="vllm-project-vllm"></a>
### vLLM

[vllm-project/vllm](https://github.com/vllm-project/vllm) · **Shortlisted / planned**

- **Purpose:** Model-serving engine candidate.
- **Architecture fit:** E / BO-04: evaluate only on an eligible host/backend.
- **Current status:** Cataloged; no current-host serving benchmark.
- **Next gate:** Choose actual Python/Rust executable/deployment, inspect full router and bind/auth configuration, pin kernels/model/template, measure full GPU/RAM/KV costs and batching/streaming/cancel/restart semantics against Core protocol; no generalWindows fit inferred.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `runtime.vllm`.


## Safety and recovery

- **November 9 source assessment:** `source-screened-not-tested` at `a3c14efbc77c018e8bf579935095a87721349e05`.
  - vLLM remains serving engine rather than model; current source spans Python/CUDA build and separate Rustserver implementation with hardware-specific kernels/configs.
  - Selected Rust auth guards /v1,/v2,/inference; OPTIONS/helper endpoints such as health bypass it, token matching hashes and constant-time compares. This does not prove every Python/deployment route has identical auth.
  - Engine/model/template/tool-parser versions, GPUmemory and Windows/WSL eligibility must be qualified together.
- **Assessment sources:** [source1](https://github.com/vllm-project/vllm/blob/a3c14efbc77c018e8bf579935095a87721349e05/rust/src/server/src/middleware/auth.rs#L16); [source2](https://github.com/vllm-project/vllm/blob/a3c14efbc77c018e8bf579935095a87721349e05/pyproject.toml#L1); [source3](https://github.com/vllm-project/vllm/blob/a3c14efbc77c018e8bf579935095a87721349e05/README.md#L1). Representative source screening; no execution or admission.

<a id="perplexityai-space"></a>
### SPACE

[perplexityai/SPACE](https://github.com/perplexityai/SPACE) · **Shortlisted / planned**

- **Purpose:** API-managed isolated code-execution environments using Firecracker microVMs, command streams and sandbox lifecycle controls.
- **Architecture fit:** C/I/J / Q-100: product-side execution backend and isolated bake-off workers versus existing AppContainer/Hyper-V/container controls; Core execution adapter and model/provider routing separate.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal; Linux/KVM/privileged local setup, host-side services, auth/egress, snapshot compatibility and exact Windows client/host feasibility remain gates.
- **Next gate:** Compare upstream/eligible components/thin Core adapter to qualified isolation/deferral; verify host and guest bounds, management versus attach tokens, network/secret policy, resource quotas, replay-safe lifecycle, kill/delete/Stop, snapshots, full cost and rollback.
- **Evidence:** Pinned README, Cargo/toolchain/Python metadata, SECURITY/dependency and architecture/install/egress/versioning docs reviewed; no installation, VM/container/cluster, credentials, code/model/API execution or full audit. Dates: 2026-10-18.
- **Registered records:** isolation.space
- **Recorded intake revision:** 57c7c0c47a73373a974c5b542d180599795465da

- **November 9 source assessment:** `reviewed` at `b120c4cf4298656a4a7bd97d98c95516d5935beb`.
  - Current local installation explicitly requires apt-based Linuxx86_64/KVM, tun/loop/btrfs, privileged Docker, KubernetesKind and30GiBfree in both relevant filesystems. Native Windows local host remains unqualified.
  - Representative host server authorization requires UDS peer credentials and authorizes uid/gid/pid, with bypass confined to test/test-support configuration. This is host-control layer, distinct from HTTP client management/attach tokens and guest isolation.
- **Assessment sources:** [source1](https://github.com/perplexityai/SPACE/blob/b120c4cf4298656a4a7bd97d98c95516d5935beb/docs/installation.md#L13); [source2](https://github.com/perplexityai/SPACE/blob/b120c4cf4298656a4a7bd97d98c95516d5935beb/crates/l40_api/spaced/host/server/src/authorization.rs#L41); [source3](https://github.com/perplexityai/SPACE/blob/b120c4cf4298656a4a7bd97d98c95516d5935beb/crates/l40_api/spaced/host/server/src/authorization.rs#L33). Representative source screening; no execution or admission.

<a id="resemble-ai-detect-skill"></a>
### Resemble Detect Skill

[resemble-ai/detect-skill](https://github.com/resemble-ai/detect-skill) · **Shortlisted / planned**

- **Purpose:** API-guided synthetic-media detection and follow-up media analysis.
- **Architecture fit:** F/I / Q-99: Provenance/source inspection and known-label synthetic test corpus.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal. Apache-2.0 wrapper uses hosted REST APIs. A completed score remains probabilistic evidence, not proof of authorship/authenticity or someone's intent.
- **Next gate:** Verify exact Detect model/API eligibility/cost, authorized uploads/retention, subgroup/base-rate calibration and false positives, incomplete/error results, privacy, bounded polling and deletion.
- **Evidence:** Pinned README reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** media.resemble-detect
- **Recorded intake revision:** 4d31eac1ff9aed33b9a0a192e64f7db57821dc9f
- **Currentness (November 9):** `unchanged`; observed HEAD `4d31eac1ff9aed33b9a0a192e64f7db57821dc9f`. Matches a recorded revision; no runtime qualification implied.

<a id="mukul975-anthropic-cybersecurity-skills"></a>
### Anthropic Cybersecurity Skills (community)

[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) · **Shortlisted / planned**

- **Purpose:** Selected security-analysis and reporting skill references for scoped defensive fixtures.
- **Architecture fit:** H/J / Q-92: Independent manual/static review, Q-44 and existing security methods.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal. Community-owned mukul975 repository; name is not Anthropic endorsement. No bulk installation, scanning or attack execution.
- **Next gate:** Select exact defensive skill and lawful synthetic target; verify tool effects, framework/version mapping accuracy, finding validation, dependency rights, false positives, egress/cost and Stop.
- **Evidence:** Pinned README reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** skills.cybersecurity.mukul975
- **Recorded intake revision:** 54a798831d2266a3ca61ce68a7acb80b81160d57
- **Currentness (November 9):** `unchanged`; observed HEAD `54a798831d2266a3ca61ce68a7acb80b81160d57`. Matches a recorded revision; no runtime qualification implied.


<a id="nvidia-skillspector"></a>
### SkillSpector

[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) · **Shortlisted / planned**

- **Purpose:** Static and optional model-assisted security screening of agent skill bundles before installation.
- **Architecture fit:** H/J / existing Q-44: Skill-intake and bake-off evidence versus independent manual/static checks, held-out malicious/benign skill fixtures and simpler controls; complements Q-29 SkillOpt and Q-33 audits. Compare exact upstream scanner, eligible licensed analyzers/report components, minimal original intake checks and defer; Core retains installation authority.
- **Current status:** Source researched; refreshed November12 at source package2.12.0, planned and untested. Scanner scores/signatures are advisory evidence, not antivirus containment, a safety guarantee or adoption. Static, semantic, remote-acquisition and dependency-worker modes require separate admission.
- **Next gate:** Compare upstream/components/independent checks/defer using held-out incidents, false positives, severity and incomplete-coverage handling. Pin scanner, rules, parser/dependency artifacts and actual provider/model/endpoint; qualify source disclosure, OSV/dependency acquisition, credential fallback and costs. Separate ordinary Windows static scans from Linux-only dependency-worker and unsupported file-output scopes. Review suppression provenance, adversarial scanner inputs, resource ceilings, output/log retention and all-worker/provider cancellation. Never auto-install from score/exit0; preserve Core grants and aggregate pre-reserved token/time/USD budget with USD25 monthly metered cap.
- **Evidence:** November12 bounded source refresh of README/package/provider selector, disabled Codex provider, dependency-worker isolation and acquisition documentation, resource bounds and representative MCP invocation. No install/import/scanner execution, package/model downloads, dependency sandbox, provider call, credentials, benchmark or adoption. Prior October15 and November9 evidence remains historical.
- **Record IDs:** `security.skillspector`.
- **Current reviewed revision:** `3c2c5d7a1ee148d228398070b91d3beaf0d73b11`.
- **Link/intake check:** 2026-11-12; source review dated 2026-11-12.

- Source package2.12.0 declares Apache-2.0, Alpha status and Python>=3.12,<3.16. Static/optional semantic scanning is pre-installation evidence, not antivirus containment, a guarantee, installation permission or a replacement for independent review.
- LLM analysis is enabled by default when available and sends analyzer-eligible file contents to the configured provider; DSSE/signing metadata may be included. --no-llm keeps ordinary content analysis static/local, but OSV still receives dependency names/versions and acquisition may fetch remote inputs, so it is not automatically an offline mode.
- Unset provider selection tries optional nv_inference then nv_build. In unbound API-key paths lacking active credentials, a configured standard OpenAI fallback can supply the chat route; explicit bindings and native/CLI providers have separate behavior. Pin actual recipient/model and credentials, not just a provider label. Paid inference/quota/retention remains separate from the free scanner license.
- Opt-in locked npm dependency inspection fetches exact public registry tarballs with SHA-512 integrity and runs static analysis in a disposable worker; it does not invoke npm, install packages or execute scanned package code. Linux x86_64/AArch64 seccomp isolation is limited to this worker, not the host scanner/network client. Unsupported platforms or isolation failures leave incomplete coverage rather than proving safety.
- Codex CLI provider remains registered but disabled for untrusted skill analysis because a read-only sandbox permits host-file reads; direct completion is rejected before spawning. Compatibility with scanning Codex skills does not mean the Codex-backed semantic provider is admitted.
- Default exit status collapses SAFE and CAUTION to0. Findings, suppressions/baselines, requested-versus-actual semantic execution and inspection completeness must be examined separately; use explicit findings/incomplete/coverage policies for a future gate. A risk score or catalog signature cannot authorize installing an untrusted skill.
- Resource documentation has shared artifact/byte/workflow ceilings and explicit incomplete states; these are not measured peak RAM or a shared dollar reservation. MCP uses graph invocation and temp tracking for failed/cancelled scans, but this bounded review did not establish all provider subprocess/download retirement, full Stop or host containment. Qualify each exact transport before automation.

Sources: [source 1](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/pyproject.toml#L5); [source 2](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/README.md#L1085); [source 3](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/README.md#L832); [source 4](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/src/skillspector/providers/__init__.py#L175); [source 5](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/src/skillspector/providers/__init__.py#L218); [source 6](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/src/skillspector/providers/codex_cli/provider.py#L16); [source 7](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/src/skillspector/dependency_sandbox.py#L4); [source 8](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/src/skillspector/dependency_sandbox.py#L88); [source 9](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/docs/DEPENDENCY_CONTENT_INSPECTION.md#L17); [source 10](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/docs/ANALYSIS_RESOURCE_BOUNDS.md#L3); [source 11](https://github.com/NVIDIA/SkillSpector/blob/3c2c5d7a1ee148d228398070b91d3beaf0d73b11/src/skillspector/mcp_server.py#L153).

#### Historical intake and November9 assessment

- **Purpose:** Static and optional model-assisted security screening of agent skill bundles before installation.
- **Architecture fit:** H/J / Q-44: bake-off skill-intake evidence versus independent manual/static checks; complements Q-29 SkillOpt and Q-33 audits.
- **Current status:** Source researched; skill-intake/regression comparison planned and untested. Scores and catalog signatures do not establish installation safety or adoption.
- **Next gate:** Compare static/semantic scanner signals with held-out skill incidents and false positives; qualify Linux worker path versus exactWindows scope, all fetch/dependency/provider recipients and secrets, adversarial inputs/resource limits and full scan cancellation before intake automation.
- **Evidence:** Pinned README, package metadata, resource-bounds and suppression documentation screened; no execution or full audit. Dates: 2026-10-15.
- **Record IDs:** `security.skillspector`.
- **Historical intake revision:** `4c52fbb83bbca0dd13f2685453c9b661d8c95bf8`.

- **November 9 source assessment:** `source-screened-not-tested` at `e48d771a26f7398b36256ceb8d8f94adce3d5c44`.
  - SkillSpector current scanner separates static and model-backed analysis; third-party downloads and provider keys remain explicit additional authority/rights.
  - Disposable dependency-worker sandbox is Linux-only x86_64/aarch64 seccomp; unsupportedOS/kernel/architecture failclosed. It does not sandbox host scanner/network client.
  - Model registry README disables codex_cli because read-only sandbox still allows host reads; scanner output is evidence to review, not automatic skill safety/admission.
- **Assessment sources:** [source1](https://github.com/NVIDIA/SkillSpector/blob/e48d771a26f7398b36256ceb8d8f94adce3d5c44/README.md#L3); [source2](https://github.com/NVIDIA/SkillSpector/blob/e48d771a26f7398b36256ceb8d8f94adce3d5c44/README.md#L39); [source3](https://github.com/NVIDIA/SkillSpector/blob/e48d771a26f7398b36256ceb8d8f94adce3d5c44/README.md#L322); [source4](https://github.com/NVIDIA/SkillSpector/blob/e48d771a26f7398b36256ceb8d8f94adce3d5c44/src/skillspector/dependency_sandbox.py#L4); [source5](https://github.com/NVIDIA/SkillSpector/blob/e48d771a26f7398b36256ceb8d8f94adce3d5c44/src/skillspector/dependency_sandbox.py#L88). Representative source screening; no execution or admission.

<a id="vxcontrol-pentagi"></a>
### PentAGI

[vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) · **Shortlisted / planned**

- **Purpose:** Autonomous/assistant-guided penetration-testing orchestration and evidence reporting.
- **Architecture fit:** J / Q-42: optional security-evaluation aid for isolated app fixtures versus direct scanners, static review and independent manual verification.
- **Current status:** Source researched; optional isolated-lab security study planned and untested. External containment and independent finding verification remain prerequisites.
- **Next gate:** Keep isolated-lab-only deferred boundary; explicitly control Dockerdaemon/root authority externally, synthetic targets/egress, exact tool/image/provider rights, all-child Stop and independent findings verification, persistent data and total costs.
- **Evidence:** Pinned README, license, EULA introduction and selected Compose fields screened; no execution or full audit. Dates: 2026-10-13.
- **Record IDs:** `security.pentagi`.
- **Historical intake revision:** `843dfeb4bfc809c09d1bc5022e567c602d8fc9dd`.

- **November 9 source assessment:** `reviewed` at `cffed9485aa1cca70762cd08a57ac62a80406258`.
  - Optional offensive-security lab scope remains. Current Compose mounts Docker socket and runs server as root while using it; a container boundary alone cannot provide external target/host containment.
  - Representative privileges middleware rejects missing privilege set or missing exact named permissions; this application API RBAC is distinct from model-selected command/target authority.
  - Provider/local engine, persistent Postgres/optional graph and telemetry services require component-specific data/cost/retention review; no lab ran.
- **Assessment sources:** [source1](https://github.com/vxcontrol/pentagi/blob/cffed9485aa1cca70762cd08a57ac62a80406258/docker-compose.yml#L230); [source2](https://github.com/vxcontrol/pentagi/blob/cffed9485aa1cca70762cd08a57ac62a80406258/docker-compose.yml#L235); [source3](https://github.com/vxcontrol/pentagi/blob/cffed9485aa1cca70762cd08a57ac62a80406258/backend/pkg/server/auth/permissions.go#L20). Representative source screening; no execution or admission.

<a id="ifixai-ai-ifixai"></a>
### iFixAi

[ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) · **Shortlisted / planned**

- **Purpose:** Adversarial agent auditing with configurable model judges and scorecards.
- **Architecture fit:** H/J / Q-33: supplementary audit evidence beside deterministic checks and independent human labels.
- **Current status:** README and repository metadata researched; planned and untested. Model judges remain advisory; audit scores cannot authorize effects, certify containment or replace required acceptance evidence.
- **Next gate:** Preregister fixtures with explicit role/tool/data source denials; remove/failclosed unauthorized fallback for Core tests, score independent ground truth versus judge, bound adapters/provider data/totalcalls/Stop; never count canned demo as validation.
- **Evidence:** Pinned README and public repository metadata screened; no execution, benchmark replication or full audit. Dates: 2026-10-09.
- **Record IDs:** `evaluation.ifixai`.
- **Historical intake revision:** `bef9c5eeb96fd255d83ee00a2930c4d19a329f6c`.

- **November 9 source assessment:** `source-screened-not-tested` at `be6b3ec4731f8ecf4a6d71286f1c7acf4561e406`.
  - iFixAi is independent auditing, with canned demo agent/grades explicitly distinct from real audits and separate-provider judge recommendation.
  - Authorized fixture helper treats absent role-permission entry as unrestricted tool choice; when no accessible data source exists it falls back to least sensitive source rather than no source. This changes benchmark premises and is not Core authorization.
  - Windows Python setup documented but not executed; Apache-2.0 source remains conditional evaluator/component research.
- **Assessment sources:** [source1](https://github.com/ifixai-ai/iFixAi/blob/be6b3ec4731f8ecf4a6d71286f1c7acf4561e406/README.md#L64); [source2](https://github.com/ifixai-ai/iFixAi/blob/be6b3ec4731f8ecf4a6d71286f1c7acf4561e406/ifixai/shared/authorized_scope.py#L43); [source3](https://github.com/ifixai-ai/iFixAi/blob/be6b3ec4731f8ecf4a6d71286f1c7acf4561e406/README.md#L133). Representative source screening; no execution or admission.

<a id="purpleailab-decepticon"></a>
### Decepticon

[BitterSecurity/Decepticon](https://github.com/BitterSecurity/Decepticon) · **Shortlisted / planned**

- **Purpose:** Autonomous red-team harness for a bounded security comparison.
- **Architecture fit:** H/J / BO-12: optional addition to mandatory conventional security checks.
- **Current status:** Planned and isolated-lab gated; upstream scores are not Abrams results. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain isolated authorized-lab gate; define target/effect scope, pin gateway/images and auth modes, prohibit credential volume reuse without explicit grant, qualify network/tool containment, spend limits, evidence export and all-engagement Stop.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `benchmark.xbow-validation`, `security.decepticon`.
- **Identity note:** recorded as `PurpleAILAB/Decepticon`; current destination verified October 7. The redirect does not transfer historical results to new code.

- **November 9 source assessment:** `source-reviewed-bounded` at `df879550544d36b6b1e69062f05adae28537adf2`.
  - Historical PurpleAILAB identity is now BitterSecurity Decepticon; root Apache2.0/Python>=3.13 workspace and package split must be treated as the current source rather than old scores.
  - Compose mounts an optional Codex auth file into a model-routing gateway; credential reuse and hosted route eligibility remain separately gated.
  - MCP auth implementation supports constant-time shared-secret and JWT/JWKS network modes and explicitly identifies non-loopback unauthenticated control as dangerous. No offensive engagement or target interaction was run.
- **Assessment sources:** [source1](https://github.com/BitterSecurity/Decepticon/blob/df879550544d36b6b1e69062f05adae28537adf2/LICENSE#L1); [source2](https://github.com/BitterSecurity/Decepticon/blob/df879550544d36b6b1e69062f05adae28537adf2/pyproject.toml#L1); [source3](https://github.com/BitterSecurity/Decepticon/blob/df879550544d36b6b1e69062f05adae28537adf2/docker-compose.yml#L14); [source4](https://github.com/BitterSecurity/Decepticon/blob/df879550544d36b6b1e69062f05adae28537adf2/packages/decepticon/decepticon/mcp_server/auth.py#L1); [source5](https://github.com/BitterSecurity/Decepticon/blob/df879550544d36b6b1e69062f05adae28537adf2/packages/decepticon/decepticon/mcp_server/auth.py#L39). Representative source screening; no execution or admission.

<a id="restic-restic"></a>
### restic

[restic/restic](https://github.com/restic/restic) · **Shortlisted / planned**

- **Purpose:** Backup, retention and restore tooling.
- **Architecture fit:** J / BO-13: compare with the Abrams encrypted-export control.
- **Current status:** Planned; no product backup-adapter qualification. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Qualify exact Windows paths/reparse points, encrypted repository/key recovery and authorized backend, consistent SQLite snapshots, retention/prune grants, synthetic restore verification, lock/retry/Stop behavior, costs and secure removal.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `backup.restic`.

- **November 9 source assessment:** `source-reviewed-bounded` at `c734245fd3ae9bcac8ab3aaafb4482d4b5d0ae92`.
  - Restic remains a BSD2-Clause backup CLI with cross-platform support documented upstream; current go.mod requires Go1.26.10 and explicitly preserves old Windows reparse-point behavior.
  - Repository configuration identifies version, repository ID and chunking polynomial; backup format and backend identity must be pinned together. CLI/release tooling is distinct from a qualified Abrams backup adapter.
  - No personal files, backup repository, cloud backend credentials, deletion/prune or restore operation were used; encryption and secure-backup claims were not tested by this screen.
- **Assessment sources:** [source1](https://github.com/restic/restic/blob/c734245fd3ae9bcac8ab3aaafb4482d4b5d0ae92/LICENSE#L1); [source2](https://github.com/restic/restic/blob/c734245fd3ae9bcac8ab3aaafb4482d4b5d0ae92/README.md#L1); [source3](https://github.com/restic/restic/blob/c734245fd3ae9bcac8ab3aaafb4482d4b5d0ae92/go.mod#L1); [source4](https://github.com/restic/restic/blob/c734245fd3ae9bcac8ab3aaafb4482d4b5d0ae92/internal/restic/config.go#L15); [source5](https://github.com/restic/restic/blob/c734245fd3ae9bcac8ab3aaafb4482d4b5d0ae92/cmd/restic/main.go#L38). Representative source screening; no execution or admission.

<a id="purpleailab-xbow-validation-benchmarks"></a>
### XBOW validation benchmarks

[BitterSecurity/xbow-validation-benchmarks](https://github.com/BitterSecurity/xbow-validation-benchmarks) · **Collected reference**

- **Purpose:** Security challenge corpus referenced in Decepticon's intake.
- **Architecture fit:** BO-12 benchmark reference; separate hinted and description-only profiles.
- **Current status:** Collected reference; no Abrams challenge run.
- **Next gate:** Preserve no-run status; pin fixtures/flags and contamination/fair-input policy, external lab-only network/resource containment, target rights, independently checked success and complete teardown before any benchmark execution.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-04.
- **Record IDs:** `benchmark.xbow-validation`.
- **Identity note:** recorded as `PurpleAILAB/xbow-validation-benchmarks`; current destination verified October 7. The redirect does not transfer historical results to new code.


## Skills and development

<a id="dietrichgebert-ponytail"></a>
### Ponytail

[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) · **Shortlisted / planned**

- **Purpose:** Reuse-first coding, review and audit instructions with host-specific skills, lifecycle hooks, optional codebase mapping and Claude session metrics.
- **Architecture fit:** H/J; separate Q-153 / dev.ponytail: evaluate development-process reuse and maintainability against existing Abrams build-versus-reuse, minimal-change and instruction controls, an original short prompt, selective MIT components and defer. No product model/API routing or runtime assistant adoption.
- **Current status:** Source researched; planned and untested. MIT root; executable Node lifecycle hooks and host configuration/state writes are distinct from portable prompt reuse. Upstream Claude-only benchmark savings are conditional and unreplicated; no Abrams savings or cross-provider parity established.
- **Next gate:** Compare unchanged upstream, selected licensed prompt/map components, a minimal original policy and defer against existing controls. Pin host/plugin/Node/model/effort/settings and preserve canonical AGENTS.md, user scope, accessibility/security/data-loss checks and project precedence. Before runtime admission, bound read paths and injected context recipients; inspect optional band/session import and retention/deletion separately; qualify Windows activation, compaction, same-repo concurrency, subagent scoping, off/uninstall and full descendant Stop. Require held-out implementation/review tasks with executed acceptance tests and equal scope/quality, full input/output/reasoning/cache tokens, latency, retries and total cost under the existing USD25 monthly metered cap. Do not reuse benchmark bypassPermissions or paid harness defaults. No installation, hook trust, global settings, imports, provider call or benchmark execution is authorized by intake.
- **Evidence:** Pinned README/LICENSE/package/plugin manifests, skill, representative activation/runtime/subagent/map hooks and benchmark methods/results source. Source-only; no candidate execution, import, installation, credentials or provider calls.
- **Record IDs:** `dev.ponytail`.
- **Current reviewed revision:** `96608e078b2d5ea607c5c3b8b5a54d1c1fba6846`.
- **Link/intake check:** 2026-11-12; source review dated 2026-11-12.

- Ponytail is a coding/review instruction and host-adapter package, not an inference engine, provider router or personal assistant runtime. Reuse-first/minimal-complete-change rules overlap existing Abrams build-versus-reuse and instruction controls; evaluate incremental value against those controls and a short original prompt, not only an empty baseline.
- The inspected v5 skill requires tracing affected callers/tests/config, preserving validation, security, data-loss protection and accessibility, and leaving a meaningful small check for nontrivial logic. It also prefers minimal scope and shortest complete diffs; these are recommendations, not enforced correctness or authority. Preserve project/user requirements and canonical instructions; do not replace Abrams AGENTS.md or let ultra-mode scope pushback omit authorized work.
- This is executable plugin infrastructure as well as prompt text: lifecycle hooks invoke Node, inject session/subagent context, spawn a bounded map subprocess and write mode/statusline files. Activation can copy statusline scripts into the host configuration directory and emit a setup nudge; intake authorizes none of those changes. Off mode skips activation, while subagent matcher failure or unknown input defaults to injection. Scope must be tested rather than assumed.
- Live mode is project-keyed when the host supplies CLAUDE_PROJECT_DIR, but same-repository sessions still share mode and hosts without it use shared state. Require independent session/child-agent activation, compaction, off and uninstall receipts; disabling future instruction injection does not undo prior edits or terminate independently running jobs.
- The automatic map reads source filenames and extracts symbols via regex (default2000-character budget,4000-file limit), then adds them to model context. Local map generation is not local-only model processing: the configured host may send that context to its provider. Bound workspace reads, recipients and retention. Optional Claude band/board imports historical sessions and stores local metrics; do not admit transcript import by default.
- The -53% code/-45% output-token/-26% cost/-41% time headline is an upstream Claude Code2.1.288/Opus5.5 study:39 tasks,5 runs,585 sessions, no Bash. Results are task-median geometric means, not observed Abrams savings. Only18 surgical tasks have hidden execution checks;21 remaining tasks measure delivery/compilation with an LLM completeness judge, not equivalent application quality. Privacy-recipient case passed2/5 runs in every arm; six security tasks passed all arms, so it establishes no security improvement.
- Tests-left-behind98% does not mean98% correctness: upstream mutation detection was66% overall and69% where a test exists versus77% for baseline tests. Reply preference versus no skill was not significant. Source LOC excludes tests, and output-token reductions omit instruction/input/cache/reasoning overhead. The harness records total_cost_usd plus input/output/cache tokens and warms cache before live cells, so matched cache state and full lifecycle accounting are essential.
- An older five-task API study in the repository reports greater cost for two OpenAI reasoning-model arms because input/reasoning overhead outweighed shorter code, with caching telemetry limitations. That historical different-version study is not a current route result, but directly defeats provider-independent savings claims. Current v5 results cannot be transferred to Codex/Gemini/local models without matched experiments.
- Adapters exist for Codex and multiple other hosts, but behavior is tier-specific: some only read always-on instructions, others persist levels or inject every turn. Claude-only band/UI and headless exclusions differ from skill compatibility. Native Windows-oriented hook paths exist, but this review did not execute or qualify the installed host/runtime pairing.
- MIT root permits reuse with copyright/license notices and warranty disclaimer; preserve those on substantial copied material. Node hooks consume startup/prompt/subagent time and extra context; optional board/history adds storage. Provider inference remains separately metered or allowance-bound; no installed plugin, benchmark, global configuration change or adoption is established.

Sources: [source 1](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/LICENSE#L5-L20); [source 2](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/package.json#L19-L38); [source 3](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/skills/ponytail/SKILL.md#L15-L52); [source 4](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/hooks/claude-codex-hooks.json#L1-L40); [source 5](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/hooks/ponytail-activate.js#L53-L71); [source 6](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/hooks/ponytail-activate.js#L118-L153); [source 7](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/hooks/ponytail-subagent.js#L8-L11); [source 8](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/hooks/ponytail-subagent.js#L32-L82); [source 9](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/hooks/ponytail-runtime.js#L46-L77); [source 10](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/hooks/ponytail-map.js#L4-L20); [source 11](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/README.md#L124-L130); [source 12](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/docs/agent-portability.md#L9-L18); [source 13](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/benchmarks/results/2026-10-07-agentic.md#L3-L34); [source 14](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/benchmarks/results/2026-10-07-agentic.md#L38-L88); [source 15](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/benchmarks/results/2026-10-07-agentic.md#L100-L125); [source 16](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/benchmarks/agentic/run.py#L289-L332); [source 17](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/benchmarks/results/2026-06-17-cost-verification.md#L24-L37); [source 18](https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/benchmarks/results/2026-06-17-cost-verification.md#L59-L70).


<a id="reacher-z-awesome-rea"></a>
### Awesome REA

[reacher-z/Awesome-REA](https://github.com/reacher-z/Awesome-REA) · **Collected reference**

- **Purpose:** Source-backed reverse-engineering discovery/reference catalog of tools, reconstruction cases, papers and a separate unreviewed repository index across web/app/binary/firmware/protocol domains.
- **Architecture fit:** H/J; relevant G/I / Q-148: Discover methods, primary sources and controlled cases for REA Q-38, authorized major-chatbot interface studies Q-118 and bake-off integration research. Compare official APIs/docs/source, existing REA references and a narrow original evidence index; not an assistant runtime or model.
- **Current status:** Collected reference; pinned catalog/schema and representative source researched. MIT original content/code; linked projects and target assets have separate rights. Curated source review and unreviewed automated discovery remain distinct; no bundled runtime, integration or safety qualification.
- **Next gate:** Use upstream read-only reference, eligible licensed metadata/evidence patterns, a minimal original task-specific index or defer. Select and duplicate-check each relevant source individually; pin current identity/artifact/rights and exact authorized target, preserve evidence dates and review levels, inspect untrusted data/scripts before use, qualify host/egress/credentials/Stop/resources and full provider/hosting/maintenance costs where applicable. Protect benchmark holdouts and retain Core authority; no bulk import, installation, account access or circumvention.
- **Evidence:** Pinned README/LICENSE/security/data-format/scan-method documentation and representative index, scope and immutable-source recheck code; no repository scripts or linked tools executed, no scanning/import/target capture or benchmark. Dates: 2026-11-10.
- **Registered records:** `reference.awesome-rea`.
- **Recorded revision:** `0e699079b73d4761b6d2a83770cb9e8a02d803e9`.

- A curated collection and generated static reference site, not the separate morluto/rea CLI/MCP implementation and not a qualified tool bundle. One collection entry is added; linked repositories are not bulk-registered or admitted.
- The catalog separates source-reviewed curated resources/cases/papers from automated unreviewed README discovery scans. Its security policy explicitly says source-reviewed does not mean installed, tested, security-reviewed or safe to run.
- Data schema retains source evidence, review dates, platform/input/license requirements and REA relationship labels. Source-scope code separates scope decisions from captured bytes; the review helper rechecks numeric repository identity and immutable blob byte/hash equality, failing on mismatch or unconfirmed public identity.
- Original descriptions/code have MIT rights; linked code, model assets, rebuilt interfaces, papers and original targets retain independent terms. A case study or decompilation does not establish clean-room rights or permission to bypass access controls.
- Useful as a discovery and evidence-method reference for authorized chatbot/interface studies and bake-off candidate integration. Prefer official APIs/source and bounded observation; primary-source review, protected test cases and target authorization remain separate. No scripts, crawlers, linked tools, downloads of executable artifacts, target sessions or benchmarks were run.

Sources: [source 1](https://github.com/reacher-z/Awesome-REA/blob/0e699079b73d4761b6d2a83770cb9e8a02d803e9/README.md); [source 2](https://github.com/reacher-z/Awesome-REA/blob/0e699079b73d4761b6d2a83770cb9e8a02d803e9/LICENSE); [source 3](https://github.com/reacher-z/Awesome-REA/blob/0e699079b73d4761b6d2a83770cb9e8a02d803e9/SECURITY.md); [source 4](https://github.com/reacher-z/Awesome-REA/blob/0e699079b73d4761b6d2a83770cb9e8a02d803e9/data/README.md); [source 5](https://github.com/reacher-z/Awesome-REA/blob/0e699079b73d4761b6d2a83770cb9e8a02d803e9/docs/source-scan.md); [source 6](https://github.com/reacher-z/Awesome-REA/blob/0e699079b73d4761b6d2a83770cb9e8a02d803e9/scripts/source_scope.py); [source 7](https://github.com/reacher-z/Awesome-REA/blob/0e699079b73d4761b6d2a83770cb9e8a02d803e9/scripts/source_scope_review.py); [source 8](https://github.com/reacher-z/Awesome-REA/blob/0e699079b73d4761b6d2a83770cb9e8a02d803e9/scripts/build_repository_index.py).


<a id="google-elephant-goldfish-model"></a>
### Elephant-Goldfish Model (EGM)

[google/elephant-goldfish-model](https://github.com/google/elephant-goldfish-model) · **Shortlisted / planned**

- **Purpose:** Context-preserving drafting and fresh-context reviewer workflow for design specifications and configurable document reviews; also codebase bootstrap and document/code drift reports.
- **Architecture fit:** H/J; applicable C-I / Q-147: Improve Abrams design, candidate integration specifications and bake-off methodology through explicit reviewer personas/standards/context and finding resolution. Compare current independent reviews, existing design/spec workflow and a fixed-budget no-review control; general document review remains a separate optional scope.
- **Current status:** Source researched; planned and untested. Apache-2.0 workflow/plugin, Codex manifest0.1.1; not another LLM or canonical-memory store. Freshness, tool restrictions and approval/turn-taking depend on exact host behavior. Convergence or stage advancement is not correctness, security approval or an Abrams gate pass.
- **Next gate:** Compare upstream plugin, eligible reviewer/rubric components, minimal original review protocol and defer. Pin complete bundle/personas/standards and exact harness; verify fresh parent-turn context versus host-instruction exclusion separately, read-only grants/tool enforcement, context/provider privacy, path/symlink writes and approval boundaries, failure/timeout/Stop/cleanup, aggregate model-call/token/time/USD budgets. Use protected planted defects/holdouts and blinded adjudication to measure true/false findings, fidelity, integration usefulness, user burden and total cost; no self-awarded pass or candidate influence over evaluator.
- **Evidence:** Pinned README/LICENSE/plugin manifest, review-loop/design-review skills, representative reviewer, harness/privacy/testing source and independent source review; no plugin installation, workflow invocation, account/provider calls or benchmark. Dates: 2026-11-09.
- **Registered records:** `workflow.elephant-goldfish`.
- **Recorded revision:** `bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31`.

- EGM is a drafting/design/document-review workflow plugin, not a pretrained language model, inference router or durable-memory engine. Apache-2.0 root; Codex manifest0.1.1 requires a local executor and isolated subagents.
- Goldfish source instructions require fresh subagents without earlier conversation and stop if unavailable. Host instruction files, memory/filesystem and model/provider remain separate exposure channels; parent-turn isolation does not establish instruction exclusion.
- Review loop retries a failed reviewer once, treats not-run as not clean, requires two consecutive clean rounds and caps at five. Settled contested/accepted risks can remain; a stage re-audit cap may advance with recorded trade-offs, which cannot pass an Abrams gate.
- Draft/bootstrap/resolve workflows write project documents and reports. URL context snapshots, repository reads, output paths and edits require exact data/file grants; no EGM-hosted inference service does not mean no host-provider retention or off-device processing.
- Upstream offline schema/link/fixture checks are not evidence of better decisions or this host support. Python3.10+, Node22 for advisory tests and POSIX shell assumptions are distinct from native plugin/harness qualification; no test suite or plugin was run.

Sources: [source 1](https://github.com/google/elephant-goldfish-model/blob/bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31/README.md); [source 2](https://github.com/google/elephant-goldfish-model/blob/bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31/LICENSE); [source 3](https://github.com/google/elephant-goldfish-model/blob/bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31/.codex-plugin/plugin.json); [source 4](https://github.com/google/elephant-goldfish-model/blob/bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31/skills/egm-review-loop/SKILL.md); [source 5](https://github.com/google/elephant-goldfish-model/blob/bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31/skills/egm-review/SKILL.md); [source 6](https://github.com/google/elephant-goldfish-model/blob/bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31/docs/harnesses.md); [source 7](https://github.com/google/elephant-goldfish-model/blob/bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31/docs/codex.md); [source 8](https://github.com/google/elephant-goldfish-model/blob/bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31/docs/privacy.md); [source 9](https://github.com/google/elephant-goldfish-model/blob/bdcfe8cdaee99699c4b2cb7ad4e3b2c1a6b56a31/TESTING.md).


- **November 9 source assessment:** `reviewed` at `d8e455185c4cd4760f44aeecd75e1860b9606abb`.
  - Current source remains104intentionally vulnerable Jeopardy-style CTFfixtures with injected build flags; novelty/no-training claims are historic upstream claims, not contamination evidence for current models.
  - Representative Compose uses build-timeFLAG, exposed target HTTP and database health dependencies; these are executable vulnerable lab services, not safe production apps. No challenge executed.
- **Assessment sources:** [source1](https://github.com/BitterSecurity/xbow-validation-benchmarks/blob/d8e455185c4cd4760f44aeecd75e1860b9606abb/README.md#L3); [source2](https://github.com/BitterSecurity/xbow-validation-benchmarks/blob/d8e455185c4cd4760f44aeecd75e1860b9606abb/README.md#L73); [source3](https://github.com/BitterSecurity/xbow-validation-benchmarks/blob/d8e455185c4cd4760f44aeecd75e1860b9606abb/benchmarks/XBEN-001-24/docker-compose.yml#L16). Representative source screening; no execution or admission.

<a id="nutlope-hallmark"></a>
### Hallmark

[Nutlope/hallmark](https://github.com/Nutlope/hallmark) · **Shortlisted / planned**

- **Purpose:** Design skill with theme/reference material, static/rendered lint and screenshot tooling for generated interfaces and explicit redesign/audit workflows.
- **Architecture fit:** H/I/J / Q-137: General-assistant UI concepts, artifacts and bake-off design-quality review versus Impeccable, existing design methods and minimal original checklist; preserve equal-fidelity Calm Canvas, Intelligence Desk and Living Library concepts.
- **Current status:** Source researched; planned and untested. MIT package2.0.0/Node18+; browser checks require Chrome/Puppeteer. Skill is not a UI runtime. Photo/model assets retain separate terms; optional Together image generation and repository-only evaluation cost extra. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Keep named advisory skill/content scope; pin browser/hooks and eligible assets, require authorized capture and image/model recipients, explicit paid generation/fallback budgets, accessibility/task-quality evidence, reversible edits and all-process cleanup.
- **Evidence:** Pinned README/license/package and representative source with independent read-only review; no installation, candidate execution, credentials/provider calls, benchmark, downloads of models/firmware or host changes. Dates: 2026-11-03.
- **Registered records:** `skill.hallmark`.
- **Recorded revision:** `52328cb3129135499e4e178d4864ee90029dea2b`.

- **November 9 source assessment:** `source-reviewed-bounded` at `407fa689f4a276f2fd389208d271d0fef08f5058`.
  - Hallmark remains MIT2.0.0 design skill content rather than a UI runtime; skill explicitly restricts use on existing designs to user-named Hallmark redesigns.
  - Image script sends opt-in requests to Together image generation with FLUX1.1-pro default and caches outputs. Without key it returns a labeled-placeholder/CSS fallback; no key or image generation was invoked.
  - Repository evaluation judge supports Anthropic with Together fallback and loopback eval server. Those are separately paid image/screenshot/data recipients, not free deterministic design checks. Non-text report artifact was not inspected.
- **Assessment sources:** [source1](https://github.com/Nutlope/hallmark/blob/407fa689f4a276f2fd389208d271d0fef08f5058/LICENSE#L1); [source2](https://github.com/Nutlope/hallmark/blob/407fa689f4a276f2fd389208d271d0fef08f5058/package.json#L1); [source3](https://github.com/Nutlope/hallmark/blob/407fa689f4a276f2fd389208d271d0fef08f5058/skills/hallmark/SKILL.md#L1); [source4](https://github.com/Nutlope/hallmark/blob/407fa689f4a276f2fd389208d271d0fef08f5058/skills/hallmark/SKILL.md#L54); [source5](https://github.com/Nutlope/hallmark/blob/407fa689f4a276f2fd389208d271d0fef08f5058/skills/hallmark/scripts/imagegen.mjs#L1); [source6](https://github.com/Nutlope/hallmark/blob/407fa689f4a276f2fd389208d271d0fef08f5058/skills/hallmark/scripts/imagegen.mjs#L56); [source7](https://github.com/Nutlope/hallmark/blob/407fa689f4a276f2fd389208d271d0fef08f5058/eval/judge.py#L38); [source8](https://github.com/Nutlope/hallmark/blob/407fa689f4a276f2fd389208d271d0fef08f5058/eval/serve.py#L15). Representative source screening; no execution or admission.

<a id="microsoft-agent-lightning"></a>
### Agent Lightning

[microsoft/agent-lightning](https://github.com/microsoft/agent-lightning) · **Shortlisted / planned**

- **Purpose:** Benchmark-guided editable-agent optimization skill plus v1 reinforcement-learning infrastructure using real agent harnesses, a model proxy and local/Kubernetes rollout controllers.
- **Architecture fit:** E/H/J / Q-134: General-assistant and bake-off improvement of prompts, tools, workflows and model routing versus SkillOpt, autoresearch and bounded manual optimization; GPU weight training is a separate deferred variant. Opik/Braintrust remain measurement controls.
- **Current status:** Source researched; planned and untested. MIT package1.0.3/Python>=3.12. Prioritize the GPU-independent skill study; v1 RL requires a qualified CUDA/verl/vLLM stack. Native Windows local runner unsupported; installation docs default W&B trajectory uploads; gateway defaults unauthenticated on all interfaces. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Prioritize isolated protected-evaluator skill study; require explicit authenticated private gateway, exact worker/model/GPU admission, trajectory/telemetry recipients and retention, total trial/spend bounds, no automatic promotion, all-worker Stop and cleanup.
- **Evidence:** Pinned README/license/package, installation/gateway/controller docs, optimization skill and representative local-controller source with independent review; no skill installation, workers, GPU/cloud setup, telemetry upload, model/API calls or benchmark. Dates: 2026-11-03.
- **Registered records:** `workflow.agent-lightning`.
- **Recorded revision:** `cbc56e41e0eab643aa71d195e92e5bba652fa683`.

- **November 9 source assessment:** `source-reviewed-bounded` at `bc3a9e80417d731744040df5d37117f9cc48005f`.
  - Agent Lightning remains MIT1.0.3 RL infrastructure, with separate GPU-independent skill optimization versus CUDA/verl/vLLM training costs and platform gates.
  - Server YAML defaults host0.0.0.0, while auth dependency returns immediately when configured key is empty. Key-present mode accepts Bearer or x-api-key; default exposure needs explicit hardening before use.
  - Kubernetes/benchmark announcements do not qualify a Windows runner or reproduce optimization gain. No training worker, trajectory upload, gateway, model or paid compute ran.
- **Assessment sources:** [source1](https://github.com/microsoft/agent-lightning/blob/bc3a9e80417d731744040df5d37117f9cc48005f/LICENSE#L1); [source2](https://github.com/microsoft/agent-lightning/blob/bc3a9e80417d731744040df5d37117f9cc48005f/pyproject.toml#L1); [source3](https://github.com/microsoft/agent-lightning/blob/bc3a9e80417d731744040df5d37117f9cc48005f/README.md#L22); [source4](https://github.com/microsoft/agent-lightning/blob/bc3a9e80417d731744040df5d37117f9cc48005f/agentlightning/config/server.yaml#L1); [source5](https://github.com/microsoft/agent-lightning/blob/bc3a9e80417d731744040df5d37117f9cc48005f/agentlightning/server/app.py#L34). Representative source screening; no execution or admission.

<a id="xorcise-ai-xorcise"></a>
### XORCISE

[xorcise-ai/xorcise](https://github.com/xorcise-ai/xorcise) · **Shortlisted / planned**

- **Purpose:** Cyber-agent evaluation engine with isolated missions, OpenTelemetry evidence, deterministic checks, model judging and exportable run reports.
- **Architecture fit:** H/I/J / Q-116: Bake-off evidence capture, grading and failure-analysis research versus Core fixtures/receipts, Opik, Braintrust and simpler trace/evaluator adapters; general-assistant task transfer must be proven.
- **Current status:** Source researched; planned and untested. Root Apache-2.0 text with NOTICE; managed commercial services separate. Ubuntu-tested cyber missions do not establish Windows support, universal isolation or general-assistant benchmark validity.
- **Next gate:** Qualify disposable cyber-target isolation and host first; inspect API auth, .env protection, telemetry recipients, deterministic/judge disagreement and all-run Stop/total cost before any mission or model call.
- **Evidence:** Pinned README, license/NOTICE, Python/deployment/use-policy metadata and independent representative source screening; no install, infrastructure, target/agent/judge execution, telemetry collection or benchmark. Dates: 2026-10-23.
- **Registered records:** `evaluation.xorcise`.
- **Recorded revision:** `dc8fafdc5dac1968008b210f40518945ca1d48db`.

- **November 9 source assessment:** `source-screened-not-tested` at `779ed9f55b9ce6619d112061d93d337b4c6ba8eb`.
  - Python 3.12+/Docker and Ubuntu-tested cyber evaluation remain a specialized comparator, not a Windows/general-assistant validation result.
  - Config setters write model/network fields to local .env; multiline rejection prevents file corruption, while masked GET is distinct from raw credential storage.
  - Explicit judge-test endpoint actually calls a model; configuration presence is not working-route evidence or permission to spend.
- **Assessment sources:** [source1](https://github.com/xorcise-ai/xorcise/blob/779ed9f55b9ce6619d112061d93d337b4c6ba8eb/README.md#L38); [source2](https://github.com/xorcise-ai/xorcise/blob/779ed9f55b9ce6619d112061d93d337b4c6ba8eb/src/xorcise/core/rest/routers/config.py#L1); [source3](https://github.com/xorcise-ai/xorcise/blob/779ed9f55b9ce6619d112061d93d337b4c6ba8eb/src/xorcise/core/rest/routers/config.py#L36); [source4](https://github.com/xorcise-ai/xorcise/blob/779ed9f55b9ce6619d112061d93d337b4c6ba8eb/NOTICE#L7). Representative source screening; no execution or admission.

<a id="e2b-dev-awesome-ai-sdks"></a>
### E2B Awesome AI SDKs

[e2b-dev/awesome-ai-sdks](https://github.com/e2b-dev/awesome-ai-sdks) · **Collected reference**

- **Purpose:** Discovery directory of agent SDKs, frameworks, monitoring and deployment tools.
- **Architecture fit:** E-J / Q-107: gap discovery for general-assistant capabilities and bake-off tooling; individual projects need separate direct-source intake.
- **Current status:** Collected discovery reference; source reviewed, no executable candidate admission. No root license file in reviewed tree. Descriptions may be stale; list membership is not qualification.
- **Next gate:** Resolve canonical identities and duplicates, verify selected projects directly, then assess rights, maintenance, cloud/local fit, data routes, costs and independent useful-task evidence. Do not bulk-install or inherit directory claims.
- **Evidence:** Pinned README and root-tree/license metadata reviewed; lexical link overlap only, no validation of every listed project or execution. Dates: 2026-10-20.
- **Registered records:** None; discovery reference only.
- **Recorded revision:** `7c55394afb3e27d755c89bb29f1c35a55888fcd4`
- **Currentness (November 9):** `unchanged`; observed HEAD `7c55394afb3e27d755c89bb29f1c35a55888fcd4`. Matches a recorded revision; no runtime qualification implied.

<a id="alvinunreal-lazyskills"></a>
### LazySkills

[alvinunreal/lazyskills](https://github.com/alvinunreal/lazyskills) · **Shortlisted / planned**

- **Purpose:** Terminal inventory, visibility checks and lock-based health/restore management for agent skills.
- **Architecture fit:** H/J / Q-101: Skill-management tooling for bake-off reproducibility and optional Core-controlled product inventory views.
- **Current status:** Source researched; planned and untested. MIT root signal. Inventory/doctor is distinct from mutating restore/update/remove and from skill security or admission.
- **Next gate:** Compare upstream, eligible inventory components, minimal original read-only inventory and deferral; qualify Windows paths/symlinks, scope isolation, command provenance, races/partial recovery, egress, Stop, costs and removal.
- **Evidence:** Pinned README, Go metadata and selected doctor/restore source reviewed; no install, activation, skill execution or full audit. Dates: 2026-10-18.
- **Registered records:** `skills.lazyskills`
- **Recorded intake revision:** `4ce98ca91650d3a0154cd93bbed50fd65771f7b4`
- **Currentness (November 9):** `unchanged`; observed HEAD `4ce98ca91650d3a0154cd93bbed50fd65771f7b4`. Matches a recorded revision; no runtime qualification implied.

<a id="composio-community-skills"></a>
### Composio Community Skills

[composio-community/skills](https://github.com/composio-community/skills) · **Shortlisted / planned**

- **Purpose:** Composio Tool Router/auth/trigger guidance and skill-creation references.
- **Architecture fit:** H/I/J / Q-98: Native/direct service adapters, existing skill creator and Q-27 Open Dot context.
- **Current status:** Source researched; planned and untested. MIT root signal. Community repository metadata still references composiohq/skills. Build scripts generate agent docs; collection is not every app integration admitted.
- **Next gate:** Pin selected guides/scripts and provenance, separate service terms/costs, OAuth scopes/secret custody, event replay/effect grants, portability, Stop and removal.
- **Evidence:** Pinned README and package.json reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** skills.composio-community
- **Recorded intake revision:** c4b270016aa8c832bb6d5824175da1bb94690b89
- **Currentness (November 9):** `unchanged`; observed HEAD `c4b270016aa8c832bb6d5824175da1bb94690b89`. Matches a recorded revision; no runtime qualification implied.

<a id="amap-ml-skillclaw"></a>
### SkillClaw

[AMAP-ML/SkillClaw](https://github.com/AMAP-ML/SkillClaw) · **Shortlisted / planned**

- **Purpose:** Session-capture proxy and optional skill evolution/shared-library service.
- **Architecture fit:** H/J / Q-97: Unchanged/manual skills, Q-29 and Q-82 with Core-governed promotion.
- **Current status:** Source researched; planned and untested. MIT root signal. Python>=3.10; Windows manual path documented. Background evolution is not permission to rewrite active Core policies/skills. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Use isolated candidate-skill workspace and protected evaluation corpus; pin providers/recipients, redact sessions, require human-reviewed promotion with rollback, bound background spend/scheduling and confirm all-worker Stop before testing.
- **Evidence:** Pinned README reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** optimization.skillclaw
- **Recorded intake revision:** 3938f7537645c961d94498a0a79fc0a977019595

- **November 9 source assessment:** `source-reviewed-bounded` at `334ddf82856826b7a259470c6670fb0ef5ce2dc4`.
  - SkillClaw0.4.0 remains MIT Python>=3.10 evolution infrastructure with provider APIs; manual Windows install is documented, not locally verified.
  - Evolution workspace prepares current skill bundles, snapshots them and collects modifications after agent execution. Seed instructions say existing identity files are not overwritten, but mutable skill output still needs promotion authority.
  - Engine/model clients default to Anthropic/OpenAI endpoints with environment/config key resolution; background skill evolution is external inference and cannot inherit permission to change active Core policies.
- **Assessment sources:** [source1](https://github.com/AMAP-ML/SkillClaw/blob/334ddf82856826b7a259470c6670fb0ef5ce2dc4/LICENSE#L1); [source2](https://github.com/AMAP-ML/SkillClaw/blob/334ddf82856826b7a259470c6670fb0ef5ce2dc4/pyproject.toml#L5); [source3](https://github.com/AMAP-ML/SkillClaw/blob/334ddf82856826b7a259470c6670fb0ef5ce2dc4/README.md#L173); [source4](https://github.com/AMAP-ML/SkillClaw/blob/334ddf82856826b7a259470c6670fb0ef5ce2dc4/evolve_server/engines/agent_workspace.py#L1); [source5](https://github.com/AMAP-ML/SkillClaw/blob/334ddf82856826b7a259470c6670fb0ef5ce2dc4/evolve_server/engines/agent_workspace.py#L41); [source6](https://github.com/AMAP-ML/SkillClaw/blob/334ddf82856826b7a259470c6670fb0ef5ce2dc4/evolve_server/engines/agent.py#L48); [source7](https://github.com/AMAP-ML/SkillClaw/blob/334ddf82856826b7a259470c6670fb0ef5ce2dc4/evolve_server/core/llm_client.py#L24). Representative source screening; no execution or admission.

<a id="jakubkrehel-make-interfaces-feel-better"></a>
### Make Interfaces Feel Better

[jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) · **Shortlisted / planned**

- **Purpose:** Selected UI-polish and interaction-review guidance.
- **Architecture fit:** H/J / Q-96: Impeccable and existing design/accessibility controls.
- **Current status:** Source researched; planned and untested. MIT root signal. Evaluate as advisory content; no UI changes or skill activation here.
- **Next gate:** Measure real usability/accessibility and reduced motion, preserve existing styling, avoid unrequested redesign, bound edits, verify references/rights and regressions.
- **Evidence:** Pinned README and selected SKILL.md reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** skills.interfaces-feel-better
- **Recorded intake revision:** 35545ea1512ad59fa463e6b1f95ca9c052981fe6
- **Currentness (November 9):** `unchanged`; observed HEAD `35545ea1512ad59fa463e6b1f95ca9c052981fe6`. Matches a recorded revision; no runtime qualification implied.

<a id="forward-future-loopy"></a>
### Loopy / Loop Library

[Forward-Future/loopy](https://github.com/Forward-Future/loopy) · **Shortlisted / planned**

- **Purpose:** Catalog and optional skill for bounded iterative agent workflows with checks and stop rules.
- **Architecture fit:** H/J / Q-95: Fixed-step/manual loops, Q-20 and Q-82 harness improvement.
- **Current status:** Source researched; planned and untested. MIT root signal. Website catalog and optional Loopy skill are separate; installation does not host website. Node/npx installation not executed.
- **Next gate:** Pin selected loop and live-catalog content, validate independent verifier/budget/Stop, privacy, approval-before-publication and no implicit schedules.
- **Evidence:** Pinned README reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** workflow.loopy
- **Recorded intake revision:** 75966cbd572a4185064971c9fe5e9c52e8f8456d
- **Currentness (November 9):** `unchanged`; observed HEAD `75966cbd572a4185064971c9fe5e9c52e8f8456d`. Matches a recorded revision; no runtime qualification implied.

<a id="witt3rd-oh-my-hermes"></a>
### Oh My Hermes

[witt3rd/oh-my-hermes](https://github.com/witt3rd/oh-my-hermes) · **Shortlisted / planned**

- **Purpose:** Hermes-native planning/research/verification orchestration skills and optional hooks/plugin.
- **Architecture fit:** H/J / Q-90: Hermes baseline, native methods, Q-84 and simple serial controls.
- **Current status:** Source researched; planned and untested. MIT root signal. witt3rd/master matches native-primitives description; other same-name projects are not silently admitted. Optional plugin Python3.10+/PyYAML.
- **Next gate:** Verify exact identity/client/plugin, bounded delegation, consensus versus truth, branch/stash/commit effects, evidence fidelity, costs, Stop and recovery.
- **Evidence:** Pinned README reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** skills.oh-my-hermes
- **Recorded intake revision:** 3b06e33ae67b202b342989b484f08143e65e250d
- **Currentness (November 9):** `unchanged`; observed HEAD `3b06e33ae67b202b342989b484f08143e65e250d`. Matches a recorded revision; no runtime qualification implied.

<a id="addyosmani-agent-skills"></a>
### Addy Osmani Agent Skills

[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) · **Shortlisted / planned**

- **Purpose:** Selected engineering methods from specification to verification and shipping.
- **Architecture fit:** H/J / Q-87: Existing native engineering, Q-73 and Q-84 skills; unchanged/manual controls.
- **Current status:** Source researched; planned and untested. MIT root signal. Selected install can omit repository-level references; global Git rewrite suggestions are not authorized configuration.
- **Next gate:** Select exact eligible skills/agent prompts only, preserve higher-priorityCore authority and userprefs; measure held-out defect detection/false findings/context cost against original checklist, inspect each packscript/hook and pin before any activation.
- **Evidence:** Pinned README including per-skill reference portability warning reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** skills.addyosmani
- **Recorded intake revision:** aeac41d4d005999432bb7312f7ff06383a91d59d

- **November 9 source assessment:** `source-screened-not-tested` at `301b02b12bff98e4688e6984af6556802322bbde`.
  - MIT engineering skill pack remains advisory instruction content, not security enforcement or automatically installed policy.
  - Reviewed code-reviewer agent defines correctness/readability/architecture/security/performance dimensions and demands categorized findings/verificationstory; presence of a prompt is not demonstrated review quality.
  - README install troubleshooting proposes globalGitSSH-to-HTTPS rewrite; do not apply such crossproject config changes implicitly during pack evaluation.
- **Assessment sources:** [source1](https://github.com/addyosmani/agent-skills/blob/301b02b12bff98e4688e6984af6556802322bbde/README.md#L1); [source2](https://github.com/addyosmani/agent-skills/blob/301b02b12bff98e4688e6984af6556802322bbde/README.md#L88); [source3](https://github.com/addyosmani/agent-skills/blob/301b02b12bff98e4688e6984af6556802322bbde/agents/code-reviewer.md#L10); [source4](https://github.com/addyosmani/agent-skills/blob/301b02b12bff98e4688e6984af6556802322bbde/agents/code-reviewer.md#L47); [source5](https://github.com/addyosmani/agent-skills/blob/301b02b12bff98e4688e6984af6556802322bbde/LICENSE#L1). Representative source screening; no execution or admission.

<a id="blader-humanizer"></a>
### Humanizer

[blader/humanizer](https://github.com/blader/humanizer) · **Shortlisted / planned**

- **Purpose:** Meaning-preserving prose editing for personal-assistant drafts.
- **Architecture fit:** H/J / Q-85: Existing stop-slop/voice editing and manual revision.
- **Current status:** Source researched; planned and untested. MIT root signal. Skill metadata 3.1.0; editing guidance, not authorship evidence or truth verification.
- **Next gate:** Verify factual/voice/citation preservation, no detector-evasion success claim, instruction precedence and editing effort.
- **Evidence:** Pinned README and selected SKILL.md reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** skills.humanizer
- **Recorded intake revision:** 8c307f367c91bd974002f10f2be2965d642c13df

- **November 9 source assessment:** `reviewed` at `0ef9fe5bc3572734fd3ae6c448fe00a30cd5dcf0`.
  - Skill metadata remains3.1.0/MIT; source explicitly preserves facts/names/numbers/quotes/citations and treats unsupported detail as error. Useful editorial reference, not authorship or truth detector.
  - README16/16blind preference claim is linked upstream evidence, not Abrams style or factual-preservation benchmark; no skill installed or activated.
- **Assessment sources:** [source1](https://github.com/blader/humanizer/blob/0ef9fe5bc3572734fd3ae6c448fe00a30cd5dcf0/SKILL.md#L10); [source2](https://github.com/blader/humanizer/blob/0ef9fe5bc3572734fd3ae6c448fe00a30cd5dcf0/SKILL.md#L38); [source3](https://github.com/blader/humanizer/blob/0ef9fe5bc3572734fd3ae6c448fe00a30cd5dcf0/README.md#L16). Representative source screening; no execution or admission.

<a id="mattpocock-skills"></a>
### Matt Pocock Skills

[mattpocock/skills](https://github.com/mattpocock/skills) · **Shortlisted / planned**

- **Purpose:** Composable engineering/productivity skills for planning, specs, debugging, review and source-linked handoffs.
- **Architecture fit:** H/J / Q-84: selected skills versus existing native methods, Q-73 Anthropic skills and unchanged/manual controls; product productivity and development/bake-off uses separate.
- **Current status:** Source researched; planned and untested. MIT root signal; package/plugin 1.3.2. Per-skill effects, delegation/tracker assumptions, question burden, auto-updates and frozen misc content remain gates. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Review and pin only named skills; adapt invocation/tracker/Git/delegation authority to Abrams rules, prevent automatic updates/effects, compare accepted-work quality and total cost against existing skills before any scoped selection.
- **Evidence:** Pinned README, LICENSE/package/plugin/SCOPE, file inventory and selected planning/handoff/review/setup skill text reviewed as data; no installation, activation, scripts, delegation, tracker/provider calls or full audit. Dates: 2026-10-18.
- **Registered records:** skills.mattpocock
- **Recorded intake revision:** 49dd158d1076134a641b33efb035946536778336

- **November 9 source assessment:** `source-reviewed-bounded` at `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d`.
  - Matt Pocock skills metadata advanced from prior1.3.1 to1.3.2; root MIT notice covers repository-authored content, not any linked tools/services.
  - Invocation contract distinguishes human-only skills from implicitly callable ones. Implement skill sets disable-model-invocation:true, fetches tracker tickets, calls TDD/review and explicitly instructs committing the branch.
  - These are operational instructions with tracker, delegation and Git effects, not inert prose. This read-only review treated them as data and did not invoke, import or install them.
- **Assessment sources:** [source1](https://github.com/mattpocock/skills/blob/4ae2317ddb22b046e26455e4f9c9b3aaaf62212d/LICENSE#L1); [source2](https://github.com/mattpocock/skills/blob/4ae2317ddb22b046e26455e4f9c9b3aaaf62212d/package.json#L1); [source3](https://github.com/mattpocock/skills/blob/4ae2317ddb22b046e26455e4f9c9b3aaaf62212d/.agents/invocation.md#L1); [source4](https://github.com/mattpocock/skills/blob/4ae2317ddb22b046e26455e4f9c9b3aaaf62212d/skills/engineering/implement/SKILL.md#L1). Representative source screening; no execution or admission.

<a id="google-research-harness2"></a>
### Harness2

[google-research/harness2](https://github.com/google-research/harness2) · **Shortlisted / planned**

- **Purpose:** Recursive propose/probe/compose framework for improving agent prompts, memory, skills, scripts and tool guidance with fixed model weights.
- **Architecture fit:** H/J / Q-82 alongside Q-20 autoresearch, Q-29 SkillOpt and unchanged/manual harness controls; product-side improvement and bake-off method separate from model quality/pairing.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal; Linux benchmark setup, unrestricted executor network and Codex sandbox/hook-trust bypass are execution-admission blockers.
- **Next gate:** Keep isolated research/deferredexecution lane; freeze immutable holdouts/scorer, restrict network independently, supply external processsandbox/credential grants, bound recursive probes/cloud spend and Stop, qualify transfer to personal assistant before adapter integration.
- **Evidence:** Pinned README, pyproject, setup/experiment/third-party docs and selected Codex/OpenCode substrate source reviewed; no installation, demo, benchmark, credentials or model/tool/cloud execution/full audit. Dates: 2026-10-18.
- **Registered records:** optimization.harness2
- **Recorded intake revision:** 1cfe254e8d25b15f37048c3730134686abe60335

- **November 9 source assessment:** `source-screened-not-tested` at `6868817518876de8fd170c6a8354daca273b6191`.
  - Harness2 is recursive harness research; default installation/benchmark uses LinuxPython 3.12/uv and model-backed route additionally requires Node 20/GoogleCloudCLI.
  - README explicitly says executor network unrestricted and Codexsandbox disabled; public benchmark answers/rubrics may be reachable and must be blocked for valid evaluation.
  - Config loads local.env and chooses project/region/runsdirectory; resuming samecommand is not proof reproducibility after changing model/task.
- **Assessment sources:** [source1](https://github.com/google-research/harness2/blob/6868817518876de8fd170c6a8354daca273b6191/README.md#L83); [source2](https://github.com/google-research/harness2/blob/6868817518876de8fd170c6a8354daca273b6191/README.md#L155); [source3](https://github.com/google-research/harness2/blob/6868817518876de8fd170c6a8354daca273b6191/harness2/config.py#L36); [source4](https://github.com/google-research/harness2/blob/6868817518876de8fd170c6a8354daca273b6191/harness2/config.py#L82). Representative source screening; no execution or admission.

<a id="reason-machines-reason-network"></a>
### Reason Network

[reason-machines/reason-network](https://github.com/reason-machines/reason-network) · **Shortlisted / planned**

- **Purpose:** Peer-to-peer agent directory/messaging for cloud/local worker handoffs and development/bake-off coordination.
- **Architecture fit:** E/H/J / Q-81: product-side cloud/local worker coordination alongside Core's provider-neutral router; compare direct adapters plus Q-59 AgentBridge/Q-16 Substrate. Session messaging is not model/API switching.
- **Current status:** Current source reviewed; planned and untested. Dual MIT/Apache2. Primarily peer-agent team messaging; default Accept/LAN/auto-update and metadata/client hooks require qualification.
- **Next gate:** Preserve model-route handoff comparison if concrete gap exists; explicitly bound peer/session authority, defaultAccept/LAN/update policy, advertised metadata, hostedMCP egress, invites/revocation/folder exclusions, replay/Stop and pinned rollback.
- **Evidence:** Pinned README, Cargo/license/NOTICE, SECURITY/DESIGN, selected MCP source and installer text reviewed; no installation, peers/accounts, messages, daemon/network or agent execution/full audit. Dates: 2026-10-18.
- **Registered records:** coordination.reason-network
- **Recorded intake revision:** 226eda792c16764d5afa485f593828f14283ccb2

- **November 9 source assessment:** `reviewed` at `5442c8b551a6897b596c7695e51b0329551aaa6c`.
  - Current project is peer-to-peer inter-agent team messaging with metadata discovery, not merely cloud/local model switching. Hosted assistant MCP path is distinct recipient/transport.
  - Config still defaults inboundAccept, LANdiscoverytrue and auto_updatetrue; paths/unmanaged-session sharing arefalse. E2Eencryption does not remove peer authority, metadata, hook/wake and update trust gates.
  - Folder opt-out/unreadable policy handling exists in config; effective per-session boundary must be verified across clients and reconnects.
- **Assessment sources:** [source1](https://github.com/reason-machines/reason-network/blob/5442c8b551a6897b596c7695e51b0329551aaa6c/README.md#L5); [source2](https://github.com/reason-machines/reason-network/blob/5442c8b551a6897b596c7695e51b0329551aaa6c/src/config.rs#L80); [source3](https://github.com/reason-machines/reason-network/blob/5442c8b551a6897b596c7695e51b0329551aaa6c/src/config.rs#L83); [source4](https://github.com/reason-machines/reason-network/blob/5442c8b551a6897b596c7695e51b0329551aaa6c/src/config.rs#L94). Representative source screening; no execution or admission.

<a id="anthropics-skills"></a>
### Anthropic Agent Skills

[anthropics/skills](https://github.com/anthropics/skills) · **Shortlisted / planned**

- **Purpose:** Selected instructions/scripts/resources for repeatable assistant tasks and development.
- **Architecture fit:** H/J / Q-73: Existing native skills, Impeccable and task-specific controls; evaluate selected skills independently, not the whole collection.
- **Current status:** Current pinned source reviewed; planned and untested. README and checked docx/pdf/pptx/xlsx folder notices now identify Apache-2.0, replacing the historical source-available characterization for these checked folders. Per-file dependencies, fonts/assets and service terms remain separate; no skill imported or executed.
- **Next gate:** Pin exact eligible skill/files and dependency/asset notices; adapt scripts and instructions to existing authority, document retention and provider budgets, require approval callbacks and constrained tools/network; test output quality and Stop before importing.
- **Evidence:** Pinned README and selected skill-creator/docx license files reviewed; no installation, accounts/credentials, runtime/provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** skills.anthropic
- **Recorded intake revision:** dbd4588f9e1033efb41dad4bef2f7947c8993d44

- **November 9 source assessment:** `source-reviewed-bounded` at `2c5958ecac7cee2b583967a2c4981d0f4a75c579`.
  - Material rights update: current README now identifies document creation/editing skills as Apache2.0. Checked docx,pdf,pptx,xlsx LICENSE.txt files all carry Apache2.0 notices; prior source-available characterization is historical.
  - Managed-agent memory guidance warns against storing credentials and distinguishes cloud mounts from synced self-hosted copies. Tool guidance enables broad prebuilt tools unless explicitly restricted.
  - Client examples require application approval handling for ask decisions. Per-skill scripts/assets/dependencies and paid Anthropic service routes remain separate from the checked content notices; no instructions executed.
- **Assessment sources:** [source1](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/README.md#L16); [source2](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/docx/LICENSE.txt#L1); [source3](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/pdf/LICENSE.txt#L1); [source4](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/pptx/LICENSE.txt#L1); [source5](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/xlsx/LICENSE.txt#L1); [source6](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/claude-api/shared/managed-agents-memory.md#L7); [source7](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/claude-api/shared/managed-agents-memory.md#L68); [source8](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/claude-api/shared/managed-agents-tools.md#L7); [source9](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/claude-api/shared/managed-agents-client-patterns.md#L82). Representative source screening; no execution or admission.

<a id="comet-ml-opik"></a>
### Opik

[comet-ml/opik](https://github.com/comet-ml/opik) · **Shortlisted / planned**

- **Purpose:** Tracing, evaluation datasets/experiments and prompt/agent optimization for the assistant bake-off.
- **Architecture fit:** H/J / Q-70 alongside BO-11 Promptfoo, the Abrams evaluation control and the Braintrust comparison; benchmark infrastructure separate from candidates under test.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal; cloud defaults, enabled SDK analytics, self-host infrastructure, judge bias/cost and export integrity remain gates.
- **Next gate:** Compare Opik/Braintrust/Core deterministicreceipts on matchedtrace/eval fixtures; qualify ingestion redaction and reader permissions/route coverage, retention/export/delete, exactcloud/local judge recipients, cancellation and totalplatform resources/cost before any personaltrace upload.
- **Evidence:** Pinned README, LICENSE, version, Compose docs/manifest and Python setup/config reviewed; no install, containers, accounts, telemetry, evaluation/provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** eval.opik
- **Recorded intake revision:** 535e6110129e81552677c41e93859e4d8a677e72

- **November 9 source assessment:** `source-screened-not-tested` at `d7b92d3941ccff77c988f411db043db27adeebd8`.
  - Opik Apache-2.0 full observability/evaluation platform remains a promising bakeoff evaluator, not independent proof of applicationcorrectness. Cloud and selfhosted trace recipients are distinct.
  - Representative response-redaction filter runs afterauthentication, only ifenabled, and covers privatepaths plus explicit analyticsqueries; newly authenticated contentpaths require correspondingcoverage.
  - Storedtrace redaction for readers is different from preventing secret/privatecontent ingestion or provider/judge egress; selfhosting alone cannot establish zerodata egress.
- **Assessment sources:** [source1](https://github.com/comet-ml/opik/blob/d7b92d3941ccff77c988f411db043db27adeebd8/README.md#L16); [source2](https://github.com/comet-ml/opik/blob/d7b92d3941ccff77c988f411db043db27adeebd8/README.md#L82); [source3](https://github.com/comet-ml/opik/blob/d7b92d3941ccff77c988f411db043db27adeebd8/apps/opik-backend/src/main/java/com/comet/opik/infrastructure/redaction/RedactionRequestFilter.java#L18); [source4](https://github.com/comet-ml/opik/blob/d7b92d3941ccff77c988f411db043db27adeebd8/apps/opik-backend/src/main/java/com/comet/opik/infrastructure/redaction/RedactionRequestFilter.java#L70). Representative source screening; no execution or admission.

<a id="honojs-hono"></a>
### Hono

[honojs/hono](https://github.com/honojs/hono) · **Shortlisted / planned**

- **Purpose:** Web-standards HTTP routing and middleware for scoped APIs, streaming and adapter prototypes.
- **Architecture fit:** D/H/I / Q-64: optional transport/component study versus current API controls; Q-62 PocketBase is a separate storage/backend comparison.
- **Current status:** Source researched; planned and untested. Exact framework/runtime/adapter pins, route contracts, middleware ordering and security boundaries remain gates.
- **Next gate:** Compare matched API contracts, authorization and malformed-request handling; test streaming abort/backpressure, idempotency, file boundaries, shutdown, Windows/runtime adapters and total implementation/resource cost.
- **Evidence:** Pinned README/package and selected CSRF source plus dated official Node/CSRF/body-limit docs reviewed; no install, server, cloud deployment or full audit. Dates: 2026-10-17.
- **Registered records:** transport.hono
- **Recorded intake revision:** 08807ce12aa3aa27c8c5adf63e677bbab6bceda9

- **November 9 source assessment:** `reviewed` at `61f7c59e50244ab4d2dd83c151928cf7ea448510`.
  - Current MIT framework targets multiple JSruntime adapters; platform speed/compatibility claims require same-contract comparison, not architecture adoption.
  - Compose implementation sequences middleware, rejects repeated next() and delegates error/notfound handling; authorization depends on actual route/middleware order. Included bearer/basic auth middleware is optional rather than automatic protection.
- **Assessment sources:** [source1](https://github.com/honojs/hono/blob/61f7c59e50244ab4d2dd83c151928cf7ea448510/README.md#L21); [source2](https://github.com/honojs/hono/blob/61f7c59e50244ab4d2dd83c151928cf7ea448510/src/compose.ts#L34); [source3](https://github.com/honojs/hono/blob/61f7c59e50244ab4d2dd83c151928cf7ea448510/src/middleware/bearer-auth/index.ts#L105). Representative source screening; no execution or admission.

<a id="trailhq-trail-code"></a>
### Trail-Code

[trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) · **Shortlisted / planned**

- **Purpose:** Local code graph and reviewed development learnings for code navigation, impact analysis and integration research.
- **Architecture fit:** H/J / Q-61 alongside Q-41 OpenGrok and Q-38 REA: compare source navigation and context reuse against ripgrep/Git/editor controls.
- **Current status:** Source researched; planned and untested. Graph completeness, learning provenance, package identity, setup mutations and telemetry/model egress remain gates. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Resolve Trail/Graft artifact identity and local graph ownership, pin parser/model/learning paths, disable or qualify telemetry and detached children, test deletion/staleness/rebuild, accepted-query gains, budgets and all-child Stop without adopting marketing percentages.
- **Evidence:** Pinned README, package/security/telemetry metadata and selected postinstall source reviewed; no install, hooks, transcript imports, model calls or full audit. Dates: 2026-10-17.
- **Registered records:** development.trail-code
- **Recorded intake revision:** ead585b2707055f47f1e97d9b0d4209af5285805

- **November 9 source assessment:** `source-reviewed-bounded` at `e02b754c1d4e1de82b841522e2d8cae811702870`.
  - Trail-Code current package identity is @nanonets/graft0.28.0 and root license credits Context Graph Engine contributors; reviewed alias/source identity is evolving and needs exact distribution pinning.
  - README describes local tree-sitter graph construction and separately markets learned routing/cost gains; source parsing is distinct from model-derived learning and those gains were not replicated.
  - MCP server imports telemetry tracking and flushes queues from a detached child at boot; a cancellation notification handler does not itself establish that every graph/query/telemetry child stops.
- **Assessment sources:** [source1](https://github.com/trailhq/Trail-Code/blob/e02b754c1d4e1de82b841522e2d8cae811702870/LICENSE#L1); [source2](https://github.com/trailhq/Trail-Code/blob/e02b754c1d4e1de82b841522e2d8cae811702870/package.json#L1); [source3](https://github.com/trailhq/Trail-Code/blob/e02b754c1d4e1de82b841522e2d8cae811702870/README.md#L69); [source4](https://github.com/trailhq/Trail-Code/blob/e02b754c1d4e1de82b841522e2d8cae811702870/README.md#L94); [source5](https://github.com/trailhq/Trail-Code/blob/e02b754c1d4e1de82b841522e2d8cae811702870/src/mcp/server.ts#L10); [source6](https://github.com/trailhq/Trail-Code/blob/e02b754c1d4e1de82b841522e2d8cae811702870/src/mcp/server.ts#L109); [source7](https://github.com/trailhq/Trail-Code/blob/e02b754c1d4e1de82b841522e2d8cae811702870/src/mcp/server.ts#L177). Representative source screening; no execution or admission.

<a id="raysonmeng-agent-bridge"></a>
### AgentBridge

[raysonmeng/agent-bridge](https://github.com/raysonmeng/agent-bridge) · **Shortlisted / planned**

- **Purpose:** Bidirectional Claude Code–Codex message relay for coding handoffs and cross-review.
- **Architecture fit:** H/J / Q-59 refresh: Development and bake-off cross-review/handoffs versus manual relay, simple Core review queue, Q-57 OpenRig and Q-81 Reason Network; messaging is separate from model/API routing.
- **Current status:** Source researched; planned and untested. Upstream pin unchanged from October 16. Permission-bypassing launch defaults, experimental channels, unsupported Windows and peer-message authority remain admission gates.
- **Next gate:** Compare pinned upstream safe-launch mode, eligible relay components, minimal original Core review queue and deferral; qualify install/config mutations, exact host/protocol, IPC/recipient authority, bounded context, replay/recovery, all-child Stop and aggregate cost; remote rooms and quota auto-resume separate.
- **Evidence:** Same pinned README/package/security/room documentation rechecked with independent representative source screening; no upstream revision change, installation, sessions, messaging, quota probes or runtime qualification. Dates: 2026-10-16, 2026-10-23.
- **Registered records:** `development.agent-bridge` (existing Q-59 refreshed; no count increase).
- **Recorded revision:** `0244dfa2d6dfd36a67531426b01714eda1b215eb` (unchanged).
- **Currentness (November 9):** `unchanged`; observed HEAD `0244dfa2d6dfd36a67531426b01714eda1b215eb`. Matches a recorded revision; no runtime qualification implied.

<a id="oracle-opengrok"></a>
### OpenGrok

[oracle/opengrok](https://github.com/oracle/opengrok) · **Shortlisted / planned**

- **Purpose:** Source-code search, cross-reference navigation and version-history browsing.
- **Architecture fit:** H/J / Q-41: optional source-investigation aid for bake-off integration maps versus ripgrep, Git and editor navigation; complements Q-38 REA.
- **Current status:** Source researched; optional source-navigation and integration-map study planned and untested. Setup/resources, access and license review remain open. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Review exact CDDL and bundled notices for component reuse; qualify Java/indexer/native tools, authorized source roots and service authentication, incremental/deleted-source correctness, resources/cost, export/rebuild and cancellation before source-navigation comparison.
- **Evidence:** Pinned README, license/notice header and Docker guide plus dated setup wiki screened; no execution or full audit. Dates: 2026-10-13.
- **Record IDs:** `search.opengrok`.
- **Historical intake revision:** `3ca9d73ebb0ddb5560fbc7631322d29d9fdc2ec3`.

- **November 9 source assessment:** `source-reviewed-bounded` at `5d55c5c8fdee11d0d6653649ada280da7736c2ed`.
  - OpenGrok current root is CDDL1.0, with other bundled-code notices; automatically selected Ada/Eclipse license files are third-party notices and must not be mistaken for the project root license.
  - Maven root identifies1.14.21; Docker installs additional source-control/indexing dependencies. This is a Java/source-index service with a distinct setup/resource footprint, not a drop-in local memory database.
  - Python sync tooling defaults to localhost:8080/source and coordinates configuration/index operations. No repository content was indexed, served or uploaded by this review.
- **Assessment sources:** [source1](https://github.com/oracle/opengrok/blob/5d55c5c8fdee11d0d6653649ada280da7736c2ed/LICENSE.txt#L1); [source2](https://github.com/oracle/opengrok/blob/5d55c5c8fdee11d0d6653649ada280da7736c2ed/pom.xml#L26); [source3](https://github.com/oracle/opengrok/blob/5d55c5c8fdee11d0d6653649ada280da7736c2ed/README.md#L50); [source4](https://github.com/oracle/opengrok/blob/5d55c5c8fdee11d0d6653649ada280da7736c2ed/Dockerfile#L45); [source5](https://github.com/oracle/opengrok/blob/5d55c5c8fdee11d0d6653649ada280da7736c2ed/tools/src/main/python/opengrok_tools/sync.py#L202); [source6](https://github.com/oracle/opengrok/blob/5d55c5c8fdee11d0d6653649ada280da7736c2ed/tools/src/main/python/opengrok_tools/config_merge.py#L1). Representative source screening; no execution or admission.

<a id="morluto-rea"></a>
### REA

[morluto/rea](https://github.com/morluto/rea) · **Shortlisted / planned**

- **Purpose:** CLI/MCP artifact analysis and bake-off integration aid; selective investigation tool for the major-chatbot interface/workflow contender study.
- **Architecture fit:** H/I/J / Q-38 plus Q-118: Named as-is ChatGPT, Codex, Claude, Gemini and Perplexity interface/workflow contenders, with further identified products and separately tested original Abrams variants; REA supports scoped artifact questions.
- **Current status:** Existing REA source screen retained. Q-118 is newly planned and untested: no chatbot UI/artifact/runtime inspected, app build pinned or reconstruction made. Frontend study cannot establish proprietary backend behavior or reuse rights. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Use source-first inspection only for an explicit authorized implementation question; pin target/build and host toolchain, scope origins/artifacts and sensitive capture, separate observation from mutation, qualify rights/resources/provider egress and cleanup/Stop before any reconstruction.
- **Evidence:** Pinned README, package metadata, security policy and Windows Ghidra P0 documentation screened; no execution or full audit. October 26 planning addition only: major chatbot UI/app/workflow contender study; no new REA or chatbot analysis. Dates: 2026-10-12, 2026-10-26.
- **Registered records:** `tool.rea`; `app.major-chatbot-interface-study` (Q-118 umbrella study adds one record, no repository).
- **Recorded REA revision:** `0043d9b134c0a353e8bf85c0bde4492275f1f720` (historical tool source screen; target-app identities pending).

- **November 9 source assessment:** `source-reviewed-bounded` at `f20f05536e3cebff3f31a67954664c40d8c4c3dd`.
  - REA6.8.0 remains MIT tooling running with the host process permissions; SECURITY explicitly says it is not a general sandbox or multi-tenant authorization service.
  - Browser target authorization binds an explicit target and allowed origins; secret-redaction implementation intentionally avoids very short page values to prevent corrupting IDs/hosts. Redaction is bounded, not a guarantee that a capture contains no sensitive data.
  - Current source capabilities do not demonstrate any Claude/Gemini/Codex UI study or proprietary backend reconstruction. Q-118 remains planned; target rights and capture grants must be task-specific.
- **Assessment sources:** [source1](https://github.com/morluto/rea/blob/f20f05536e3cebff3f31a67954664c40d8c4c3dd/LICENSE#L1); [source2](https://github.com/morluto/rea/blob/f20f05536e3cebff3f31a67954664c40d8c4c3dd/package.json#L1); [source3](https://github.com/morluto/rea/blob/f20f05536e3cebff3f31a67954664c40d8c4c3dd/SECURITY.md#L7); [source4](https://github.com/morluto/rea/blob/f20f05536e3cebff3f31a67954664c40d8c4c3dd/src/browser/CdpAuthorizedTarget.ts#L8); [source5](https://github.com/morluto/rea/blob/f20f05536e3cebff3f31a67954664c40d8c4c3dd/src/browser/BrowserScenarioSecrets.ts#L24); [source6](https://github.com/morluto/rea/blob/f20f05536e3cebff3f31a67954664c40d8c4c3dd/src/server/registerBrowserTools.ts#L1). Representative source screening; no execution or admission.

<a id="stablyai-orca"></a>
### Orca

[stablyai/orca](https://github.com/stablyai/orca) · **Shortlisted / planned**

- **Purpose:** Desktop coding-agent supervision with terminals, Git worktrees and a mobile companion.
- **Architecture fit:** H / Q-34: compare development supervision with a plain dashboard, terminals and Q-23 Agent Office.
- **Current status:** README and repository metadata researched; planned and untested. Worktrees separate files but do not enforce security isolation; Core retains execution grants, Stop and aggregate budgets.
- **Next gate:** Compare selected supervision/worktree/revocation components to Core queue and simple dashboard; qualify exact agent CLI/session identity, SSH/remote egress, terminal effects, actual descendant Stop, telemetry choice and Windows lifecycle/resource costs.
- **Evidence:** Pinned README and public repository metadata screened; no execution, benchmark replication or full audit. Dates: 2026-10-09.
- **Record IDs:** `workflow.orca`.
- **Historical intake revision:** `280ef3c6f3e100c3d54503832342c4d51fe84385`.

- **November 9 source assessment:** `source-screened-not-tested` at `f10be535ca2a0641afe05821356d01144308884f`.
  - Orca is now an MIT multi-agent worktree/chat/terminal workspace with desktop platforms and cloud/mobile surfaces, distinct from evaluator Orca or another model.
  - Representative hook authority retirement resolves aliases, records fences, revokes hydrated authority and clears transcript/status/cache state; this is relevant stale-session design material, not proof processes stopped.
  - README discloses anonymous telemetry and opt-out; signed Windows distribution claim remains separate from this source screen.
- **Assessment sources:** [source1](https://github.com/stablyai/orca/blob/f10be535ca2a0641afe05821356d01144308884f/README.md#L20); [source2](https://github.com/stablyai/orca/blob/f10be535ca2a0641afe05821356d01144308884f/README.md#L262); [source3](https://github.com/stablyai/orca/blob/f10be535ca2a0641afe05821356d01144308884f/README.md#L300); [source4](https://github.com/stablyai/orca/blob/f10be535ca2a0641afe05821356d01144308884f/src/main/agent-hooks/server/server-authority-fences.ts#L10). Representative source screening; no execution or admission.

<a id="markfulton-ai-employees"></a>
### AI Employees

[markfulton/ai-employees](https://github.com/markfulton/ai-employees) · **Shortlisted / planned**

- **Purpose:** Reusable role routines, morning briefs, blocker tracking and task handoffs.
- **Architecture fit:** E/H / Q-30: selected components versus checklist and single-worker controls.
- **Current status:** Source researched; planned and untested. Business roles are optional adaptations.
- **Next gate:** Retain optional role/content scope; review lease expiry/crash recovery and period/timezone/budget accounting, released-channel authorization, exact harness/tool grants, self-edit ownership, independent outputs and all-child Stop before activating schedules.
- **Evidence:** README and selected documentation screened; no installation, model calls or full audit. Dates: 2026-10-09.
- **Record IDs:** `workflow.ai-employees`.
- **Historical intake revision:** `37bfe17d9e0d06e0105eecabfac8335b1bbe07ac`.

- **November 9 source assessment:** `reviewed` at `2cdd34e1f0d7bfa5b9dfadecf3d72b525fbb1577`.
  - Current MIT kits advertise8roles/60routines; role content is optional general-assistant adaptation, not a job-search constraint. Instructions stage effects unless an explicit RELEASES channel authorizes them.
  - Representative Chief-of-Staff guard parses schedule/period/budget and atomically claims run leases before work; this is a concrete scheduling component to compare, not proof of crash recovery or verified task outcomes.
- **Assessment sources:** [source1](https://github.com/markfulton/ai-employees/blob/2cdd34e1f0d7bfa5b9dfadecf3d72b525fbb1577/README.md#L9); [source2](https://github.com/markfulton/ai-employees/blob/2cdd34e1f0d7bfa5b9dfadecf3d72b525fbb1577/employees/chief-of-staff/AGENTS.md#L40); [source3](https://github.com/markfulton/ai-employees/blob/2cdd34e1f0d7bfa5b9dfadecf3d72b525fbb1577/employees/chief-of-staff/scripts/guard.mjs#L40). Representative source screening; no execution or admission.

<a id="msitarzewski-agency-agents"></a>
### Agency Agents

[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) · **Shortlisted / planned**

- **Purpose:** Source collection of specialist, skill and workflow material.
- **Architecture fit:** H / Q-02, BO-09, BO-14, BO-15: normalize and evaluate selected content.
- **Current status:** Source inventory completed; content-value tests and activation remain separate.
- **Next gate:** Select task-relevant prompt excerpts against Abrams original roles; replace framework-specific commands and unsupported visual/performance thresholds, preserve scoped evidence distinctions, pin selected content and measure review quality/context cost before activation.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `catalog.agency-agents`.

- **November 9 source assessment:** `source-screened-not-tested` at `8ae6164602c95ca78828b148b9052460ee426885`.
  - Agency Agents remains an MIT prompt roster; newly advertised native roster installer is a separate repository/artifact and cannot inherit this source review.
  - Representative Reality Checker prompt demands screenshots/test-results.json but hard-codes Laravel/HTML and shell/Playwright commands plus automatic first-pass incompleteness. These assumptions need adaptation, not blanket policy installation.
  - Agent persona memory and proven deliverable marketing do not establish persisted memory or measured review quality.
- **Assessment sources:** [source1](https://github.com/msitarzewski/agency-agents/blob/8ae6164602c95ca78828b148b9052460ee426885/README.md#L1); [source2](https://github.com/msitarzewski/agency-agents/blob/8ae6164602c95ca78828b148b9052460ee426885/testing/testing-reality-checker.md#L13); [source3](https://github.com/msitarzewski/agency-agents/blob/8ae6164602c95ca78828b148b9052460ee426885/testing/testing-reality-checker.md#L54); [source4](https://github.com/msitarzewski/agency-agents/blob/8ae6164602c95ca78828b148b9052460ee426885/LICENSE#L1). Representative source screening; no execution or admission.

<a id="emilkowalski-skills"></a>
### Apple design skill source

[emilkowalski/skills](https://github.com/emilkowalski/skills) · **Selected advisory content**

- **Purpose:** Source of a selected advisory design skill.
- **Architecture fit:** H: bounded design guidance; no runtime or tool authority.
- **Current status:** One pinned advisory skill is selected; the whole repository is not adopted. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain only the previously approved pinned advisory content; compare named current skills separately for accessible original output, licensing/attribution and user-flow fit, without importing whole-repository or automatic implementation authority.
- **Evidence:** Frozen catalog records one pinned advisory skill as selected; no repository-wide integration. Dates: 2026-09-04.
- **Record IDs:** `skill.apple-design`.

- **November 9 source assessment:** `source-reviewed-bounded` at `5206a950b715e0cabe7043ea0b2304332b91494e`.
  - Emil Kowalski repository remains MIT advisory design content; selection of one historically pinned skill does not select the current complete collection.
  - Animate skill directly instructs implementation and orders motion decisions by frequency/purpose; it explicitly requires reduced-motion and hover gating and existing-token reuse.
  - These skill instructions are executable workflow guidance for an agent, not observed UI quality. Existing selected advisory scope and pin remain historical; no new design skill was activated.
- **Assessment sources:** [source1](https://github.com/emilkowalski/skills/blob/5206a950b715e0cabe7043ea0b2304332b91494e/LICENSE#L1); [source2](https://github.com/emilkowalski/skills/blob/5206a950b715e0cabe7043ea0b2304332b91494e/README.md#L1); [source3](https://github.com/emilkowalski/skills/blob/5206a950b715e0cabe7043ea0b2304332b91494e/skills/animate/SKILL.md#L20); [source4](https://github.com/emilkowalski/skills/blob/5206a950b715e0cabe7043ea0b2304332b91494e/skills/animate/SKILL.md#L80); [source5](https://github.com/emilkowalski/skills/blob/5206a950b715e0cabe7043ea0b2304332b91494e/ui-cheatsheet.md#L1). Representative source screening; no execution or admission.

<a id="karpathy-autoresearch"></a>
### autoresearch

[karpathy/autoresearch](https://github.com/karpathy/autoresearch) · **Shortlisted / planned**

- **Purpose:** Reference method for bounded, measured improvement loops.
- **Architecture fit:** H/J / Q-20: prompts, retrieval and skills compared under equal budgets.
- **Current status:** Planned adaptation; original GPU training execution deferred.
- **Next gate:** Protected evaluator/holdout, edit/resource limits and separate promotion review.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-29, 2026-10-20.
- **Record IDs:** `workflow.karpathy-autoresearch`.
- **Historical intake revision:** `228791fb499afffb54b46200aca536f79142f117`.

- **October 20 refresh:** Unchanged upstream pin. October 20 refresh: upstream pin unchanged; README/manifest rechecked alongside original Q-20 review. Build/reuse, license notice, protected evaluator and bounded-loop gates retained. No execution or full audit. Next gate: Resolve exact license notice before reuse; protected evaluator/holdout, enforced edit/resource/spend limits, all-attempt evidence and separate promotion review.
- **Currentness (November 9):** `unchanged`; observed HEAD `228791fb499afffb54b46200aca536f79142f117`. Matches a recorded revision; no runtime qualification implied.

<a id="ellipsis-dev-blink"></a>
### Blink

[ellipsis-dev/blink](https://github.com/ellipsis-dev/blink) · **Collected reference**

- **Purpose:** Coding-search reference that scores repository file and folder names.
- **Architecture fit:** Later H reference; compare with ordinary repository search if needed.
- **Current status:** Deferred reference; no registered new evaluation or benchmark.
- **Next gate:** Keep reference-only until code reuse permission and exact model route are established; compare deterministic filesystem/FTS search on held-out targets, bound walker fan-out and filename/query egress/logging, Windows Bun behavior, cancellation and total cost.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-20.

- **November 9 source assessment:** `source-screened-not-tested` at `a621ede75649303a933828c18c27ad800bb43ef0`.
  - Blink is Bun 1.3.14+ file-search demo using Jev walkers, not a complete index or general assistant.
  - Step sends query, relative directory and candidate file/directory names to TypeSafe and uses mutable jev-latest; verbose logging prints request/response. This leaks metadata even without reading file contents.
  - No root license file was present in collected tree and package has no license declaration; reuse rights unresolved.
- **Assessment sources:** [source1](https://github.com/ellipsis-dev/blink/blob/a621ede75649303a933828c18c27ad800bb43ef0/README.md#L1); [source2](https://github.com/ellipsis-dev/blink/blob/a621ede75649303a933828c18c27ad800bb43ef0/src/search.ts#L13); [source3](https://github.com/ellipsis-dev/blink/blob/a621ede75649303a933828c18c27ad800bb43ef0/package.json#L1). Representative source screening; no execution or admission.

<a id="affaan-m-ecc"></a>
### ECC

[affaan-m/ECC](https://github.com/affaan-m/ECC) · **Shortlisted / planned**

- **Purpose:** Development harness and reusable content catalog.
- **Architecture fit:** H / Q-02 and BO-09/14/15; executable lifecycle pieces stay BO-T04 trigger-gated.
- **Current status:** Catalog inventory exists; hooks and executable tooling are not activated.
- **Next gate:** Preserve content-only/noactivation boundary; select individual skills against named gaps, normalize precedence and remove unapproved MCP/hook/config side effects; separately pin executable dependencies/providers, evaluate rights, auth/egress, Stop and rollback.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `harness.ecc`.

- **November 9 source assessment:** `reviewed` at `d2ef2680594f9a17526a6e1a2e18b3d242c5d17b`.
  - Current ECC MIT inventory advertises71agents/314skills plus hooks/memory/AgentShield; hosted ECC Pro/GitHub app is distinct from repository content. Counts and capability claims are not installed features.
  - Sample MCP config includes executable npx/uvxservers, secret placeholders, mutable latest endpoints and create/write tools; copying config would activate new credentials/recipients/effects rather than merely normalize skill prose.
  - Representative agent-tool parser handles quoted/nested tool lists; syntactic parsing is not grant enforcement or host adapter parity.
- **Assessment sources:** [source1](https://github.com/affaan-m/ECC/blob/d2ef2680594f9a17526a6e1a2e18b3d242c5d17b/README.md#L144); [source2](https://github.com/affaan-m/ECC/blob/d2ef2680594f9a17526a6e1a2e18b3d242c5d17b/mcp-configs/mcp-servers.json#L41); [source3](https://github.com/affaan-m/ECC/blob/d2ef2680594f9a17526a6e1a2e18b3d242c5d17b/scripts/lib/agent-tools.js#L32). Representative source screening; no execution or admission.

<a id="pbakaus-impeccable"></a>
### Impeccable

[pbakaus/impeccable](https://github.com/pbakaus/impeccable) · **Shortlisted / planned**

- **Purpose:** Design guidance and tooling for interface work.
- **Architecture fit:** H / Q-15: compare with existing design guidance on matched briefs.
- **Current status:** Planned source/content evaluation; no activated tooling. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Separate advisory content, deterministic audit and active live editing; pin runtime/browser scripts and licenses, require explicit local project/process grants, constrain shell/CLI/provider recipients, rollback staged edits, budget and all-child Stop.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-23.
- **Record IDs:** `design.impeccable`.
- **Historical intake revision:** `e0881d2de397d5e9761d7b35ff5017d8f5ebf69b`.

- **November 9 source assessment:** `source-reviewed-bounded` at `613fbf88e0ef08709eaf238653285f430250c0ea`.
  - Impeccable now includes a Rust live-edit runtime0.1.20 beside package4.8.1 content; Apache2.0 and NOTICE third-party credits must accompany the selected reuse scope.
  - README states live mode edits a local checkout and may invoke Codex CLI if no chat agent polls. Handwritten server binds127.0.0.1 and creates a random session token; copy-edit code runs project scripts through a shell.
  - Generated live-browser bundles exceeded bounded reads, so review used handwritten Rust server/copy-edit implementation. Deterministic detector claims do not establish design quality or permission to start browser/edit/build processes.
- **Assessment sources:** [source1](https://github.com/pbakaus/impeccable/blob/613fbf88e0ef08709eaf238653285f430250c0ea/LICENSE#L1); [source2](https://github.com/pbakaus/impeccable/blob/613fbf88e0ef08709eaf238653285f430250c0ea/NOTICE.md#L1); [source3](https://github.com/pbakaus/impeccable/blob/613fbf88e0ef08709eaf238653285f430250c0ea/Cargo.toml#L1); [source4](https://github.com/pbakaus/impeccable/blob/613fbf88e0ef08709eaf238653285f430250c0ea/package.json#L1); [source5](https://github.com/pbakaus/impeccable/blob/613fbf88e0ef08709eaf238653285f430250c0ea/README.md#L65); [source6](https://github.com/pbakaus/impeccable/blob/613fbf88e0ef08709eaf238653285f430250c0ea/crates/live/src/live_server.rs#L150); [source7](https://github.com/pbakaus/impeccable/blob/613fbf88e0ef08709eaf238653285f430250c0ea/crates/live/src/live_server.rs#L280); [source8](https://github.com/pbakaus/impeccable/blob/613fbf88e0ef08709eaf238653285f430250c0ea/crates/live/src/copy_edit_agent.rs#L460). Representative source screening; no execution or admission.

<a id="shuhansun-jev-oas-sentinel"></a>
### Jev OAS Sentinel

[ShuhanSun/jev-oas-sentinel](https://github.com/ShuhanSun/jev-oas-sentinel) · **Collected reference**

- **Purpose:** Structural and semantic OpenAPI change review.
- **Architecture fit:** H/J integration maintenance reference; advisory until separately qualified.
- **Current status:** Collected research; no contract-change benchmark or update authority.
- **Next gate:** Compare against deterministic OpenAPI and manually labeled semantic change corpus; pin route and immutable rules, scope private-schema/examples egress and trace redaction, enforce call/retry/time budgets and human-reviewed suppressions before CI gating.
- **Evidence:** Dated research reference; no new registered evaluation or execution authority. Dates: 2026-09-22.

- **November 9 source assessment:** `source-screened-not-tested` at `fae78bcd9fa84e17d4c26b93809f7ce23056828a`.
  - OpenAPI Sentinel combines deterministic compatibility checks and optional semantic Jev probabilities; no-key preview is not a live semantic result.
  - Current semantic implementation pins default jev1.13.0 endpoint and distinguishes breaking/unclear/change dimensions; trace redaction uses selected credential-key names and cannot clear all contract-sensitive content.
  - Config validates known fields, advisory/enforce modes, probability thresholds and nonnegative call/retry limits; deployment policy and suppression governance still need review.
- **Assessment sources:** [source1](https://github.com/ShuhanSun/jev-oas-sentinel/blob/fae78bcd9fa84e17d4c26b93809f7ce23056828a/README.md#L25); [source2](https://github.com/ShuhanSun/jev-oas-sentinel/blob/fae78bcd9fa84e17d4c26b93809f7ce23056828a/src/jev_oas_sentinel/jev.py#L19); [source3](https://github.com/ShuhanSun/jev-oas-sentinel/blob/fae78bcd9fa84e17d4c26b93809f7ce23056828a/src/jev_oas_sentinel/jev.py#L65); [source4](https://github.com/ShuhanSun/jev-oas-sentinel/blob/fae78bcd9fa84e17d4c26b93809f7ce23056828a/src/jev_oas_sentinel/config.py#L64). Representative source screening; no execution or admission.

<a id="gszhangwei-open-spdd"></a>
### Open-SPDD

[gszhangwei/open-spdd](https://github.com/gszhangwei/open-spdd) · **Shortlisted / planned**

- **Purpose:** Specification-driven development templates and a distribution CLI.
- **Architecture fit:** H / BO-09/14/15 content studies; CLI stays a separate BO-T04 possibility.
- **Current status:** Researched; templates are not activated and CLI remains deferred.
- **Next gate:** Selected content normalization and value tests; named need before CLI execution.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-09.
- **Record IDs:** `content.open-spdd.workflows`, `tooling.open-spdd.cli`.
- **Historical intake revision:** `59669ac18c1c0bdee76b780771ac51567a73d52c`.

- **November 9 source assessment:** `reviewed` at `3991ffa2cd6670fdb6f329ca62799ccb96d0e7d9`.
  - Current MIT project remains structured-prompt methodology plus GoCLI; design-contract wording is a workflow claim, not executable correctness proof.
  - Init source detects or asks for a tool then creates config/template directories, confirming CLI changes agent workspace settings; existing directories trigger confirmation but no CLI should run from source intake.
- **Assessment sources:** [source1](https://github.com/gszhangwei/open-spdd/blob/3991ffa2cd6670fdb6f329ca62799ccb96d0e7d9/README.md#L17); [source2](https://github.com/gszhangwei/open-spdd/blob/3991ffa2cd6670fdb6f329ca62799ccb96d0e7d9/cmd/init.go#L49); [source3](https://github.com/gszhangwei/open-spdd/blob/3991ffa2cd6670fdb6f329ca62799ccb96d0e7d9/cmd/init.go#L44). Representative source screening; no execution or admission.

<a id="promptfoo-promptfoo"></a>
### Promptfoo

[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) · **Shortlisted / planned**

- **Purpose:** Evaluation tooling for reproducible prompt and output checks.
- **Architecture fit:** H / BO-11: compare offline metrics with the Abrams-owned control.
- **Current status:** Planned; not an adopted evaluation backend.
- **Next gate:** Keep planned backend comparison; pin evaluators/providers/config and frozen synthetic fixtures with independently matched calculations; verify offline mode, stored credential fallback, grader/redteam recipients, artifact sharing, cancellation, token/spend and removal.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `eval.promptfoo`.

- **November 9 source assessment:** `reviewed` at `a19bed05b037b9df183b4a45dc936dade0c19b3d`.
  - Current README says Promptfoo is part of OpenAI while remaining MIT; evaluation/red-team roles are still separately scoped and unadopted.
  - Representative agent-auth resolution falls through CLI key to environment to stored cloud config; local CLI does not guarantee no hosted credentials/egress.
  - Server loads cached UI provider YAML with fallback defaults; exact eval providers/grader prompts/artifact privacy and calculation agreement need frozen fixtures, not backend-name trust.
- **Assessment sources:** [source1](https://github.com/promptfoo/promptfoo/blob/a19bed05b037b9df183b4a45dc936dade0c19b3d/README.md#L23); [source2](https://github.com/promptfoo/promptfoo/blob/a19bed05b037b9df183b4a45dc936dade0c19b3d/src/util/agent/agentAuth.ts#L35); [source3](https://github.com/promptfoo/promptfoo/blob/a19bed05b037b9df183b4a45dc936dade0c19b3d/src/server/config/serverConfig.ts#L47). Representative source screening; no execution or admission.

<a id="agent-substrate-substrate"></a>
### Substrate

[agent-substrate/substrate](https://github.com/agent-substrate/substrate) · **Shortlisted / planned**

- **Purpose:** Kubernetes actor/worker infrastructure for gVisor or microVM sandboxes, suspend/resume snapshots, identity and mediated egress.
- **Architecture fit:** H/I/J / Q-16 refresh: Conditional isolated general-assistant workers and bake-off job lifecycle versus simple workers, SPACE Q-100, AX Q-55 and Xiryn Q-113; separate from model routing.
- **Current status:** Source researched; planned and untested; deployment remains deferred until a measured scale/resume requirement justifies infrastructure. Apache-2.0 root signal; pre-1.0 compatibility and documented security gaps remain qualification gates.
- **Next gate:** Preserve deferred scale gate; explicitly resolve pending inter-atespace network policies/quotas plus exact LinuxKubernetes/gVisor/microVM, JWTgateway/egress/secret scopes, snapshot replay/deletion, all-childStop/resources/rights/cost and exit.
- **Evidence:** Pinned README, dependency/install/architecture/security/auth/egress documentation and independent representative source screening; no cluster, infrastructure, sandbox, credential, provider or benchmark execution. Dates: 2026-09-23, 2026-10-22.
- **Registered records:** `infra.agent-substrate` (existing Q-16 refreshed; no count increase).
- **Recorded revisions:** `74bbfc529ca9b5554d20117c2c78a3aea48b5d55`, `ab4f3dbec79b77771a7cca820173a249b551c493`.

- **November 9 source assessment:** `reviewed` at `94e0a26ac90151886a76410568aaac2664a54d90`.
  - Current source retains Kubernetes-scale sandbox pool/snapshot focus; deployment deferred until measured scale/resume requirement justifies it. Plain Linux containers are not supported; gVisor/microVM and external egress controls are distinct host requirements.
  - Security guide explicitly marks inter-atespace network policies/resource quotas pending despite ReBAC integration; zero-trust headline is not complete tenant containment proof.
  - Authentication config strictly parses YAML/JSON and requires at least one JWTprovider; current source has concrete auth validation but full gateway/snapshot policy needs qualification.
- **Assessment sources:** [source1](https://github.com/agent-substrate/substrate/blob/94e0a26ac90151886a76410568aaac2664a54d90/README.md#L40); [source2](https://github.com/agent-substrate/substrate/blob/94e0a26ac90151886a76410568aaac2664a54d90/docs/security/security.md#L67); [source3](https://github.com/agent-substrate/substrate/blob/94e0a26ac90151886a76410568aaac2664a54d90/internal/apiconfig/authn.go#L66). Representative source screening; no execution or admission.

<a id="microsoft-skillopt"></a>
### SkillOpt

[microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) · **Shortlisted / planned**

- **Purpose:** Optimize reusable natural-language skills without changing model weights.
- **Architecture fit:** H/J / Q-29: compare unchanged skills, manual revisions and bounded search.
- **Current status:** Source researched; planned and untested. No skill adoption.
- **Next gate:** Keep within shared bake-off list; compare skill revisions against fixed controls/holdouts with no scorer mutation, external sandbox, bounded search/model cost, Windows execution and Stop evidence; no automatic nightly activation or promotion.
- **Evidence:** Documentation screening; no independent benchmark replication or execution. Dates: 2026-10-07.
- **Record IDs:** `tool.skillopt`.
- **Historical intake revision:** `343db229dbd5ddaf9df6b1d5540d8bcdb2604d5c`.

- **November 9 source assessment:** `source-screened-not-tested` at `ccfdcdf7ab50456e2556200499f2bccf1e1b43b2`.
  - SkillOpt still optimizes skill instructions rather than model weights; sleep/nightly workflows are separate scheduling authority and held-out gate claims need independent evidence.
  - Spreadsheet executor deliberately strips credential environment inheritance and sets private working/temp homes, but explicitly states this is not filesystem/process/network sandbox.
  - Generated code runs in a subprocess with timeout; environment minimization does not establish file/network isolation or descendant retirement.
- **Assessment sources:** [source1](https://github.com/microsoft/SkillOpt/blob/ccfdcdf7ab50456e2556200499f2bccf1e1b43b2/README.md#L1); [source2](https://github.com/microsoft/SkillOpt/blob/ccfdcdf7ab50456e2556200499f2bccf1e1b43b2/README.md#L24); [source3](https://github.com/microsoft/SkillOpt/blob/ccfdcdf7ab50456e2556200499f2bccf1e1b43b2/skillopt/envs/spreadsheetbench/executor.py#L31). Representative source screening; no execution or admission.

<a id="asgeirtj-system-prompts-leaks"></a>
### System Prompts Leaks

[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) · **Collected reference**

- **Purpose:** Prompt-design discovery reference for original, testable instruction variants.
- **Architecture fit:** Q-29 / Q-28 research support; no separate runtime or evaluation lane.
- **Current status:** Collected reference; prompt authenticity, completeness and per-item provenance unverified. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Keep reference-only status; prefer official public docs and independent interface observations, verify each selected item provenance/rights/date separately, avoid importing untrusted prompt instructions or treating copied prompts as authorized implementation specs.
- **Evidence:** README, repository listing and license-header screening; individual prompt bodies not evaluated. Dates: 2026-10-09.
- **Historical intake revision:** `2d9b8f26c8b711481c19b63f1f62779432ef3768`.

## Tools and browsing

- **November 9 source assessment:** `source-reviewed-bounded` at `48f734ade1dfdb0690c887883c3a7574625a6804`.
  - This remains a collected prompt directory, not an authenticated vendor prompt specification. Root CC0 waiver applies only to rights the affirmer can waive and does not establish ownership or authenticity of third-party material.
  - README indexes purported prompts from many products; copied skill/code fragments and filenames cannot prove deployed versions or proprietary backend behavior.
  - Individual prompt bodies were not evaluated or executed; the existing completeness/provenance uncertainty and no-adoption boundary remain.
- **Assessment sources:** [source1](https://github.com/asgeirtj/system_prompts_leaks/blob/48f734ade1dfdb0690c887883c3a7574625a6804/README.md#L1); [source2](https://github.com/asgeirtj/system_prompts_leaks/blob/48f734ade1dfdb0690c887883c3a7574625a6804/LICENSE#L15); [source3](https://github.com/asgeirtj/system_prompts_leaks/blob/48f734ade1dfdb0690c887883c3a7574625a6804/LICENSE#L68). Representative source screening; no execution or admission.

<a id="kalil0321-reverse-api-engineer"></a>
### Reverse API Engineer

[kalil0321/reverse-api-engineer](https://github.com/kalil0321/reverse-api-engineer) · **Collected reference**

- **Purpose:** Browser-traffic capture and model-assisted generation of typed API clients, with manual/agent capture, prior-HAR regeneration and a separate structured-data collector.
- **Architecture fit:** F/H/I/J / Q-140: Authorized API-adapter discovery and integration work for broad personal-assistant tasks and bake-off repositories, alongside REA Q-38 and CLI-Anything; compare official APIs/OpenAPI/SDKs, manual capture/minimal Core adapter and browser controls.
- **Current status:** Currentsource reviewed; collectedmethod/componentreference, directuse deferred/untested. MIT0.15.0/Python>=3.11. Hardcodedsecrets/automaticreauth prompt and broadbootstrap/agentpermission defaults require replacement.
- **Next gate:** Preserve officialAPIfirst and syntheticrightsboundary; replacesystempromptsecrets/automaticpermissions with scopedredactedreferences/failclosedgrants, pin/disablebootstrap/latestPATHfallbacks, then qualify exactcapture/model recipients/clientcorrectness/retries/idempotency/retention/all-childStop/fullcost.
- **Evidence:** Pinned README/license/package and representative capture/agent/config/runtime source with independent read-only review; no install, target browsing/capture, cookie access, generated-client execution, credentials/provider calls or benchmark. Dates: 2026-11-05.
- **Registered records:** `tool.reverse-api-engineer`.
- **Recorded revision:** `cd221e9ef5fe30d4fb66ad0d5198f179191aca57`.

- **November 9 source assessment:** `reviewed` at `276e37667de5e290487c97c351c09ea53b11b468`.
  - Currentpackage is0.15.0/Python>=3.11, replacing stale0.14.0. RealChrome/MCP, agent-browserCLI and manualcapture are distinct recipient/capturepaths.
  - Current autosystemprompt still orders hardcoding capturedcredentials/cookies/tokens plusautomaticreauthentication; directuse remainsdeferred until replaced with scopedsecret references/redaction/explicitpermissions.
  - Agent-browser bootstrapprefers existingPATHbinary and otherwise globally installs configuredpin then fallsbacknpx; auto prompt forbidsinteractiveconfirmflags. OpenCode defaultconfig stillautoloads opencode-ai@latest. Sourceintake doesnot authorize these mutations.
- **Assessment sources:** [source1](https://github.com/kalil0321/reverse-api-engineer/blob/276e37667de5e290487c97c351c09ea53b11b468/pyproject.toml#L3); [source2](https://github.com/kalil0321/reverse-api-engineer/blob/276e37667de5e290487c97c351c09ea53b11b468/src/reverse_api/prompts/auto/system.md#L8); [source3](https://github.com/kalil0321/reverse-api-engineer/blob/276e37667de5e290487c97c351c09ea53b11b468/src/reverse_api/agent_browser.py#L4); [source4](https://github.com/kalil0321/reverse-api-engineer/blob/276e37667de5e290487c97c351c09ea53b11b468/src/reverse_api/config.py#L37). Representative source screening; no execution or admission.

<a id="lightpanda-io-browser"></a>
### Lightpanda Browser

[lightpanda-io/browser](https://github.com/lightpanda-io/browser) · **Shortlisted / planned**

- **Purpose:** Zig headless browser engine for DOM/JavaScript automation and structured extraction with browser-control protocol integrations.
- **Architecture fit:** G/H/I/J / Q-130: General-assistant web research and controlled DOM tasks versus Chromium/Playwright, Camofox and Pinchtab; extraction, interactive effects and visual-browser fidelity compared separately.
- **Current status:** Source researched; planned and untested. AGPL-3.0-only signal; no native Windows binary, WSL2/Linux pairing separate. Upstream speed/memory figures and protocol compatibility are not local task results or complete browser equivalence. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain separate WSL/Linux host gate; resolve precise source/package notices, pin full Zig/native build and control endpoint, qualify browser/DOM/network fidelity on synthetic tasks, credentials/profile isolation, resource limits and confirmed shutdown.
- **Evidence:** Pinned README/license/build/security metadata and representative source screening with independent review; no install/build/WSL change, browser or CDP/MCP activation, website actions or benchmark. Dates: 2026-11-02.
- **Registered records:** `browser.lightpanda`.
- **Recorded revision:** `1e6fe6cbff8556d4d2afd366e5b4668bffef30dd`.

- **November 9 source assessment:** `source-reviewed-bounded` at `8d41fa9ada989f8189cc68395e2775d903be0096`.
  - Lightpanda remains a non-equivalent headless automation browser with Linux/macOS builds; native Windows is not documented by the inspected installation section. AGPL root and individual or-later file notices need exact reuse review.
  - Server implementation opens IP or Unix listeners, advertises WebSocket endpoints and tracks worker shutdown. This source path is browser control infrastructure, so CDP/WebDriver access must remain private and authorized.
  - Docker recipe clones browser source and external toolchain components; a pinned catalog tree does not pin that recipe resulting build. No browser task, speed/memory figure or protocol parity was tested.
- **Assessment sources:** [source1](https://github.com/lightpanda-io/browser/blob/8d41fa9ada989f8189cc68395e2775d903be0096/LICENSE#L1); [source2](https://github.com/lightpanda-io/browser/blob/8d41fa9ada989f8189cc68395e2775d903be0096/README.md#L50); [source3](https://github.com/lightpanda-io/browser/blob/8d41fa9ada989f8189cc68395e2775d903be0096/src/server/cdp/domains/security.zig#L1); [source4](https://github.com/lightpanda-io/browser/blob/8d41fa9ada989f8189cc68395e2775d903be0096/src/server/Server.zig#L105); [source5](https://github.com/lightpanda-io/browser/blob/8d41fa9ada989f8189cc68395e2775d903be0096/src/server/Server.zig#L140); [source6](https://github.com/lightpanda-io/browser/blob/8d41fa9ada989f8189cc68395e2775d903be0096/Dockerfile#L18). Representative source screening; no execution or admission.

<a id="pinchtab-pinchtab"></a>
### PinchTab

[pinchtab/pinchtab](https://github.com/pinchtab/pinchtab) · **Shortlisted / planned**

- **Purpose:** Chrome control-plane HTTP server with structured page access, browser actions, profiles and instance orchestration.
- **Architecture fit:** G/H/I/J / Q-109: General-assistant web research and bounded browser tasks; compare native Playwright/CDP and existing browser backends, plus bake-off fixture orchestration.
- **Current status:** Source researched; planned and untested. MIT root signal. Local privileged operator service; API/MCP/dashboard/profile capabilities and domain policy require exact qualification.
- **Next gate:** Compare pinned upstream, eligible bridge components, minimal original Core browser adapter and deferral; qualify profile/session isolation, exact auth/domain defaults, redirects/private hosts, effect grants, process containment, stale targets, Stop, privacy, resources and costs.
- **Evidence:** Pinned README, security guide/policy, Go/Docker metadata and selected auth/tab-policy source reviewed; no install/daemon/browser launch, profiles, credentials, navigation/actions, API/model execution or full audit. Dates: 2026-10-21.
- **Registered records:** `browser.pinchtab`
- **Recorded revision:** `a62662027f233444c579c29fbe42ad90df0d5bc7`
- **Currentness (November 9):** `unchanged`; observed HEAD `a62662027f233444c579c29fbe42ad90df0d5bc7`. Matches a recorded revision; no runtime qualification implied.

<a id="hkuds-cli-anything"></a>
### CLI-Anything

[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) · **Shortlisted / planned**

- **Purpose:** Application-specific CLI harnesses and a source-guided method for generating structured agent-accessible commands.
- **Architecture fit:** H/I/J / Q-108: General-assistant desktop/document/creative tools and bake-off adapter construction versus native APIs/CLIs and Core adapters; includes Q-106 ComfyUI comparison.
- **Current status:** Source researched; planned and untested. Apache-2.0 root signal; representative ComfyUI setup metadata says MIT, so component provenance needs reconciliation. Generated CLIs do not admit their apps or effects.
- **Next gate:** Compare pinned harness, eligible components, minimal original Core adapter and deferral; qualify exact target/version/rights, native effects and artifacts, paths/arguments/URLs, isolation, grants, retries/Stop, costs and removal.
- **Evidence:** Pinned README/security policy and representative ComfyUI setup, queue and HTTP-backend source reviewed; no plugin activation, generation, installation, target/CLI/model execution or full audit. Dates: 2026-10-21.
- **Registered records:** `tools.cli-anything`
- **Recorded revision:** `34f519533bc175d2fe287ab8316b0dd99bb9cc43`
- **Currentness (November 9):** `unchanged`; observed HEAD `34f519533bc175d2fe287ab8316b0dd99bb9cc43`. Matches a recorded revision; no runtime qualification implied.

<a id="monid-ai-monid"></a>
### Monid

[monid-ai/monid](https://github.com/monid-ai/monid) · **Shortlisted / planned**

- **Purpose:** Shared tool discovery/execution API and open connector engine for external service providers.
- **Architecture fit:** E/I/J / Q-102: Provider-neutral tool selection inside Abrams and matched external-tool bake-offs versus direct/native integrations.
- **Current status:** Source researched; planned and untested. MIT connector-layer source; hosted discovery, billing and service operations are separate. Tool routing does not qualify model routes or every catalog endpoint.
- **Next gate:** Compare direct adapters versus selected connector schema/engine; review each executable inject function and destination allowlist, hosted relay trust/terms, billing settlement and cancellation, credential isolation and Core grants before routing real data.
- **Evidence:** Pinned README, Deno/config metadata, selected auth/transport/link/run source and Exa definitions; dated hosted pricing/OAuth/run docs. No install, account, credentials, API/tool/model execution or full audit. Dates: 2026-10-18.
- **Registered records:** `tools.monid`
- **Recorded intake revision:** `96e1569dee3a0beee8a6aa8a70ec8c1773e32a21`

- **November 9 source assessment:** `source-screened-not-tested` at `09d54479142e36eff876383beacfbd37b33b5908`.
  - Current Monid repository is the connector layer behind hosted tool routing, not the complete hosted relay/account platform. Deno2.x and provider-specific billing/credentials remain separate.
  - Auth injection validates credential schema, resolves hash-verified function and contract-validates returned request; silent logger limits this particular logging path but cannot establish absence of credential egress in injected code.
  - Dynamic discovery across providers and per-call usage settlement are platform/source claims, not granted data recipients or verified budget caps.
- **Assessment sources:** [source1](https://github.com/monid-ai/monid/blob/09d54479142e36eff876383beacfbd37b33b5908/README.md#L18); [source2](https://github.com/monid-ai/monid/blob/09d54479142e36eff876383beacfbd37b33b5908/README.md#L127); [source3](https://github.com/monid-ai/monid/blob/09d54479142e36eff876383beacfbd37b33b5908/engine/auth.ts#L15); [source4](https://github.com/monid-ai/monid/blob/09d54479142e36eff876383beacfbd37b33b5908/engine/auth.ts#L71). Representative source screening; no execution or admission.

<a id="browser-use-browser-harness"></a>
### Browser Harness

[browser-use/browser-harness](https://github.com/browser-use/browser-harness) · **Shortlisted / planned**

- **Purpose:** Agent-driven browser control over CDP using existing or separately hosted browsers.
- **Architecture fit:** I / Q-93: Existing browser tools, Browser Use/Playwright and Cua controls.
- **Current status:** Source researched; planned and untested. MIT root signal. Python>=3.11 package0.1.13; vendor shared-cloud-browser benchmark does not qualify local authenticated Chrome.
- **Next gate:** Qualify isolated profile/CDP auth/ports, credential exposure, editable helpers/protected harness, prompt injection, navigation versus effects, recovery/replay, actual provider cost and Stop.
- **Evidence:** Pinned README and pyproject reviewed as source material; no installation, activation, credentials/accounts, target/media/agent/model/service execution or full audit. Dates: 2026-10-18.
- **Registered records:** browser.browser-harness
- **Recorded intake revision:** c6a941287424f32e2d20c7b7b892c8493f46808d

- **November 9 source assessment:** `reviewed` at `a7c4cb02a3f0cd83e09598d14a2ca65743791998`.
  - Current README uses real logged-in Chrome overCDP and agent-written missing helpers; benchmark still uses shared fresh cloud browser, not local authenticated defaults.
  - MCP wrapper exposes navigation, arbitraryjs/cdp, upload and recording helpers and ensures daemon start; not a read-only browser fetch layer.
  - Cloudauth uses api.browser-use.com with registeredbrowser-use-terminal OAuth client and600second callback timeout; cloud recipient and local-CDP authenticated session must be admitted separately.
- **Assessment sources:** [source1](https://github.com/browser-use/browser-harness/blob/a7c4cb02a3f0cd83e09598d14a2ca65743791998/README.md#L62); [source2](https://github.com/browser-use/browser-harness/blob/a7c4cb02a3f0cd83e09598d14a2ca65743791998/src/mcp_server.py#L45); [source3](https://github.com/browser-use/browser-harness/blob/a7c4cb02a3f0cd83e09598d14a2ca65743791998/src/mcp_server.py#L49); [source4](https://github.com/browser-use/browser-harness/blob/a7c4cb02a3f0cd83e09598d14a2ca65743791998/src/browser_harness/auth.py#L32). Representative source screening; no execution or admission.

<a id="langflow-ai-langflow"></a>
### Langflow

[langflow-ai/langflow](https://github.com/langflow-ai/langflow) · **Shortlisted / planned**

- **Purpose:** Visual Python component/agent workflow builder with API and JSON export.
- **Architecture fit:** H/I / Q-76: Core-owned fixed-step scripts, n8n and Dify on matched workflows; canvas convenience separate from execution authority.
- **Current status:** Source researched; planned and untested. MIT; components/dependencies/services separate. Root version 1.13.1; Python >=3.10,<3.15; Windows desktop documented, dependencies/backends still need exact qualification. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Qualify exact release/source auth defaults and Windows/container dependencies, user/path isolation and node execution grants, model/secret recipients, flow portability and durable effects, budgets, full cancellation and removal before comparison.
- **Evidence:** Pinned README and pyproject reviewed; no installation, accounts/credentials, runtime/provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** workflow.langflow
- **Recorded intake revision:** 972d56c47d3830d17060ee85cfaad152df823041

- **November 9 source assessment:** `source-reviewed-bounded` at `60999cc9a7350e44dde3ef641baae864e10861f0`.
  - Langflow current package advanced to1.13.1 with MIT root notice and Python>=3.10,<3.15. Official releases disable auto-login by default; source/archive startup configuration must still be checked.
  - Agentic file endpoint documents and uses authenticated user-bound filesystem sandboxes, separating ownership checks from path validation; sessions use the same identity dependency.
  - Provider API resolves configured secrets/model execution context; a visual flow or authenticated editor does not prove Core-owned effects, paid-recipient selection or all-workflow cancellation.
- **Assessment sources:** [source1](https://github.com/langflow-ai/langflow/blob/60999cc9a7350e44dde3ef641baae864e10861f0/LICENSE#L1); [source2](https://github.com/langflow-ai/langflow/blob/60999cc9a7350e44dde3ef641baae864e10861f0/pyproject.toml#L1); [source3](https://github.com/langflow-ai/langflow/blob/60999cc9a7350e44dde3ef641baae864e10861f0/README.md#L48); [source4](https://github.com/langflow-ai/langflow/blob/60999cc9a7350e44dde3ef641baae864e10861f0/src/backend/base/langflow/agentic/api/files_router.py#L1); [source5](https://github.com/langflow-ai/langflow/blob/60999cc9a7350e44dde3ef641baae864e10861f0/src/backend/base/langflow/agentic/api/files_router.py#L123); [source6](https://github.com/langflow-ai/langflow/blob/60999cc9a7350e44dde3ef641baae864e10861f0/src/backend/base/langflow/agentic/api/sessions_router.py#L12); [source7](https://github.com/langflow-ai/langflow/blob/60999cc9a7350e44dde3ef641baae864e10861f0/src/backend/base/langflow/agentic/api/router.py#L70). Representative source screening; no execution or admission.

<a id="firecrawl-firecrawl"></a>
### Firecrawl

[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · **Shortlisted / planned**

- **Purpose:** Website scraping/crawling into text and structured research inputs.
- **Architecture fit:** E/I / Q-72: Direct fetch, eligible browser/read adapters and source-preserving research controls; cloud and self-host feature sets separate.
- **Current status:** Source researched; planned and untested. Primarily AGPL-3.0; SDKs/some UI MIT; cloud scope separate. Self-host services include browser worker, Redis, RabbitMQ, PostgreSQL/queue and FoundationDB paths; exact selected topology required.
- **Next gate:** Compare authorized synthetic page extraction against browser/native controls; qualify full endpoint auth, current/previous key rotation, URL/redirect/DNS SSRF and browser/data isolation, AGPL reuse, crawl limits/robots/rights and all-job Stop/cost.
- **Evidence:** Pinned README and Compose manifest reviewed; no installation, accounts/credentials, runtime/provider calls or full audit. Dates: 2026-10-17.
- **Registered records:** research.firecrawl
- **Recorded intake revision:** acd9d4155c213e1239e3cc1d65aefd2286a55fda

- **November 9 source assessment:** `source-screened-not-tested` at `a0535ec3e53abd41b60e6a60aa57d3a3397fc792`.
  - Firecrawl remains AGPLv3 crawler/scraper stack plus separately billed hosted service; API key access and scraped-site rights remain independent.
  - Admin auth now requires configured current or previous admin key, compares constant-time and logs matched key class rather than value; rotation overlap still needs deliberate retirement.
  - Admin middleware does not prove public scrape endpoints, SSRF controls, browser isolation or per-job cancellation are correctly configured.
- **Assessment sources:** [source1](https://github.com/firecrawl/firecrawl/blob/a0535ec3e53abd41b60e6a60aa57d3a3397fc792/LICENSE#L1); [source2](https://github.com/firecrawl/firecrawl/blob/a0535ec3e53abd41b60e6a60aa57d3a3397fc792/README.md#L90); [source3](https://github.com/firecrawl/firecrawl/blob/a0535ec3e53abd41b60e6a60aa57d3a3397fc792/apps/api/src/lib/admin-auth.ts#L16). Representative source screening; no execution or admission.

<a id="activeing123-mcptoon"></a>
### MCPToon

[activeing123/mcptoon](https://github.com/activeing123/mcptoon) · **Shortlisted / planned**

- **Purpose:** MCP tool discovery, on-demand schemas, compact result delivery and scoped skill/config management.
- **Architecture fit:** E/H / Q-65 alongside Q-11A: compare native lazy discovery and context controls; Core retains exact tool grants and original evidence.
- **Current status:** Source researched; planned and untested. Discovery savings, omitted evidence, retrieval/cache isolation, config mutations and exact transport/host behavior remain gates.
- **Next gate:** Preserve native-vs-indexed/compression comparisons; explicitly bound discovered client/envcredentials, approve configtakeover/rollback separately, pin schemas/full-results and transport/auth recipients, OAuthrefresh/effectretries, Stop and total tokens/latency/cost.
- **Evidence:** Pinned README, package/security/NOTICE and selected compressor/client source reviewed; no install, agent config/skill sync, servers, tool calls or full audit. Dates: 2026-10-17.
- **Registered records:** tools.mcptoon
- **Recorded intake revision:** 14aa8bf274581cd4e35ed10afc352534719f5c26

- **November 9 source assessment:** `reviewed` at `7574a78924373de21ee7e516a40f8d9c59c6dbc4`.
  - Current source advertises indexed on-demand schemas and cross-client takeover;99%discovery-token claims do not measure whole-task quality, omitted evidence or full-result retrieval.
  - Discovery implementation scans client config/environment tokens/local tools/HTTPendpoints; init--auto writes config while dry/discoveronly shows findings. Cross-client credential/server scope must be explicit.
  - OAuth module stores owner-only token files and refresheson401once, with explicit raw-token command. Local/offline-first branding does not imply configured MCP/API recipients have no egress.
- **Assessment sources:** [source1](https://github.com/activeing123/mcptoon/blob/7574a78924373de21ee7e516a40f8d9c59c6dbc4/README.md#L14); [source2](https://github.com/activeing123/mcptoon/blob/7574a78924373de21ee7e516a40f8d9c59c6dbc4/src/mcptoon/discover.py#L20); [source3](https://github.com/activeing123/mcptoon/blob/7574a78924373de21ee7e516a40f8d9c59c6dbc4/src/mcptoon/oauth.py#L29). Representative source screening; no execution or admission.

<a id="browser-use-browser-use"></a>
### Browser Use

[browser-use/browser-use](https://github.com/browser-use/browser-use) · **Shortlisted / planned**

- **Purpose:** Model-driven browser agent with local and separately hosted paths.
- **Architecture fit:** G/H / Q-49: Stock Playwright plus Q-37/Q-40; hold transport/model fixed where feasible.
- **Current status:** README/metadata researched; planned and untested. This is distinct from Jev Ultrafast Q-10. Hosted CAPTCHA/proxy features are not admitted; match controlled permitted tasks and independently verify effects.
- **Next gate:** Qualify dedicated profile/browser binary/model route and all-origin permissions; keep arbitrary page content untrusted, prove independent outcomes and bounded retries, Windows/WSL tool isolation, private-page egress and immediate all-action Stop/cost.
- **Evidence:** Dated carousel identity review and pinned primary README/metadata; additional license/maintenance screening where recorded; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `browser.browser-use`.
- **Historical intake revision:** `e0a70fbe31c8e9cebcf42648f43e306a1c484421`.

- **November 9 source assessment:** `source-screened-not-tested` at `b49a68e4060acb226da8f784194fef301c53a6d7`.
  - Browser Use library MIT is distinct from paid hosted browser/inference service terms; local browser/model options require separate hardware and route qualification.
  - Permissions watchdog grants configured permissions with no origin restriction, thus all origins; failed grants log error and continue. These are browser capabilities, not Core tool grants.
  - Current Bash integration requires Linux/macOS or WSL on Windows; broad browser-library platform support cannot qualify that tool surface.
- **Assessment sources:** [source1](https://github.com/browser-use/browser-use/blob/b49a68e4060acb226da8f784194fef301c53a6d7/README.md#L194); [source2](https://github.com/browser-use/browser-use/blob/b49a68e4060acb226da8f784194fef301c53a6d7/README.md#L313); [source3](https://github.com/browser-use/browser-use/blob/b49a68e4060acb226da8f784194fef301c53a6d7/browser_use/browser/watchdogs/permissions_watchdog.py#L23). Representative source screening; no execution or admission.

<a id="n8n-io-n8n"></a>
### n8n

[n8n-io/n8n](https://github.com/n8n-io/n8n) · **Shortlisted / planned**

- **Purpose:** Visual event-driven workflow automation and connectors.
- **Architecture fit:** H/I / Q-48: Core-owned scheduler/direct adapters and fixed-step scripts.
- **Current status:** README/metadata researched; planned and untested. Source-available/fair-code and enterprise paths are distinct. Workflow templates and successful OAuth do not supply action grants or receipts. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Resolve sustainable-use/enterprise scope, freeze exact workflow/node/credential identities, use explicit effect grants rather than name heuristics, qualify webhook/OAuth/version binding, idempotency, aggregate cost, durable receipts and all-workflow cancellation.
- **Evidence:** Dated carousel identity review and pinned primary README/metadata; additional license/maintenance screening where recorded; no execution/full audit. Dates: 2026-10-16.
- **Record IDs:** `workflow.n8n`.
- **Historical intake revision:** `447fc866bb0a841decfa5e8a29fba06057bfc5bc`.

- **November 9 source assessment:** `source-reviewed-bounded` at `41fdb9c2360bad4644f412e56e6694c0e16af7fc`.
  - n8n2.47.0 requires Node>=24/pnpm12.4.2 and separates Sustainable Use/source-available from enterprise terms; model flexibility does not supply unrestricted redistribution or hosted-product rights.
  - MCP permission classifier uses annotations and name segments, treating unknown names as write. Classification supports policy decisions but cannot replace exact endpoint/effect grants.
  - Workflow MCP OAuth resource resolver checks the enabled trigger authentication type; identity and workflow version must stay bound through execution, credentials and retries. No workflow or provider ran.
- **Assessment sources:** [source1](https://github.com/n8n-io/n8n/blob/41fdb9c2360bad4644f412e56e6694c0e16af7fc/LICENSE.md#L1); [source2](https://github.com/n8n-io/n8n/blob/41fdb9c2360bad4644f412e56e6694c0e16af7fc/LICENSE_EE.md#L1); [source3](https://github.com/n8n-io/n8n/blob/41fdb9c2360bad4644f412e56e6694c0e16af7fc/package.json#L1); [source4](https://github.com/n8n-io/n8n/blob/41fdb9c2360bad4644f412e56e6694c0e16af7fc/packages/@n8n/ai-utilities/src/agent-config/mcp-tool-permissions.ts#L66); [source5](https://github.com/n8n-io/n8n/blob/41fdb9c2360bad4644f412e56e6694c0e16af7fc/packages/cli/src/modules/oauth-server/protected-resource-resolvers/workflow-mcp-trigger-resource.resolver.ts#L90). Representative source screening; no execution or admission.

<a id="jo-inc-camofox-browser"></a>
### Camofox Browser

[jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser) · **Shortlisted / planned**

- **Purpose:** Agent-facing REST/MCP browser server over Camoufox with snapshots, element references and session tools.
- **Architecture fit:** H / Q-40: browser-adapter comparison with stock Playwright, Q-37 Invisible Playwright and eligible existing browser tools.
- **Current status:** Source researched; browser-server/adapter comparison planned and untested. API grants, persistence, telemetry and engine qualification remain open.
- **Next gate:** Review exact server/engine/add-on identities, API authorization, session/trace retention, telemetry/egress, upload/download bounds and Windows resources.
- **Evidence:** Pinned README, package/plugin metadata and selected postinstall/config source screened; no execution or full audit. Dates: 2026-10-13.
- **Record IDs:** `browser.camofox`.
- **Historical intake revision:** `39c82094013480b373df6600d44c7f036f58356e`.
- **Currentness (November 9):** `unchanged`; observed HEAD `39c82094013480b373df6600d44c7f036f58356e`. Matches a recorded revision; no runtime qualification implied.

<a id="feder-cr-invisible-playwright"></a>
### Invisible Playwright

[feder-cr/invisible_playwright](https://github.com/feder-cr/invisible_playwright) · **Shortlisted / planned**

- **Purpose:** Playwright-style browser automation using a patched Firefox and reproducible fingerprints.
- **Architecture fit:** H / Q-37: optional browser-engine comparison with stock Playwright Firefox/Chromium and eligible browser adapters.
- **Current status:** Source researched; optional/conditional comparison, planned and untested. Tracing, HAR, CDP and API-request contexts are documented exclusions.
- **Next gate:** Qualify current wrapper/core/Firefox/patch artifact provenance and rights, supported automation API and rendering sites, profile/auth/proxy isolation, Windows process lifecycle and all-input Stop; do not use anti-detection claims as authorization or outcome proof.
- **Evidence:** Pinned README, package metadata, fork/security docs and selected engine-resolution source screened; no execution or full audit. Dates: 2026-10-10.
- **Record IDs:** `browser.invisible-playwright`.
- **Historical intake revision:** `0819cd4e235ea35fcc3920b62a54ed8e2147056a`.

- **November 9 source assessment:** `source-screened-not-tested` at `a42d863e48cf5c4c430c1ab24d915cefafb1d382`.
  - Invisible Playwright remains anti-detect Firefox automation, with Windows/Linux x86_64; Linux arm64 support stops after older engine55. Neither fingerprint claims nor Python drop-in syntax prove compatibility.
  - Rights differ: wrapper MIT, patched Firefox MPL2.0, inherited Playwright source Apache-2.0 and separate patch repository/build provenance.
  - Current Python Juggler implementation depends on invisible_core protocol/lifecycle/profile code; exact dependency/engine pairing must be pinned rather than assuming stock Playwright browser contract.
- **Assessment sources:** [source1](https://github.com/feder-cr/invisible_playwright/blob/a42d863e48cf5c4c430c1ab24d915cefafb1d382/README.md#L34); [source2](https://github.com/feder-cr/invisible_playwright/blob/a42d863e48cf5c4c430c1ab24d915cefafb1d382/README.md#L304); [source3](https://github.com/feder-cr/invisible_playwright/blob/a42d863e48cf5c4c430c1ab24d915cefafb1d382/src/invisible_playwright/_pw/_impl/_browser_type.py#L1); [source4](https://github.com/feder-cr/invisible_playwright/blob/a42d863e48cf5c4c430c1ab24d915cefafb1d382/src/invisible_playwright/_juggler/server.py#L39). Representative source screening; no execution or admission.


<a id="panniantong-agent-reach"></a>
### Agent-Reach

[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · **Shortlisted / planned**

- **Purpose:** Source-access adapters for a named research coverage gap.
- **Architecture fit:** E/H/I/J; optional F / existing BO-T03: General personal-assistant source access and research coverage beyond job search; trigger-only removable adapter versus direct/connected source tools. Keep canonical data, credentials, action grants and recipient/budget/Stop controls in Core.
- **Current status:** Deferred; comparison remains trigger-only. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain trigger-only defer until an unmet source need; pin each helper artifact, qualify platform/source terms, account/profile/cookie boundaries and CDP exposure, token redaction, network cost, watcher cleanup and all-process Stop.
- **Evidence:** November 9 pinned public tree, README, available license/manifest/deployment metadata and the specifically cited representative source inspected. Findings are bounded to cited surfaces; no candidate execution or benchmark. November12 duplicate check confirms unchanged reviewed HEAD; fit clarified for general-assistant research without job-search limitation. No additional source/runtime qualification.
- **Record IDs:** `capability.agent-reach`.
- **Current reviewed revision:** `c70ae6da5d39bc90e09ad2ae0575ccc89f31e284`.
- **Link/intake check:** 2026-11-12; source review dated 2026-11-09.

- Agent-Reach1.6.1 remains MIT Python>=3.10 source-access tooling, with browser/runtime helpers beyond simple text fetch.
- Browser runtime references latest OpenCLI releases and launches CDP browser/watch processes; watcher explicitly binds remote debugging to127.0.0.1. Tool installer contains separately pinned external CLI/archive references.
- These are setup, browser-profile and network effects. The trigger-only/deferred comparison remains appropriate until a concrete unmet source need exists; no social account, cookie or target access was used.

Sources: [source 1](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/LICENSE#L1); [source 2](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/pyproject.toml#L1); [source 3](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/agent_reach/runtime/browser.py#L55); [source 4](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/agent_reach/runtime/browser_watcher.py#L25); [source 5](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/agent_reach/runtime/browser_watcher.py#L80); [source 6](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/agent_reach/runtime/tools.py#L52).

#### Historical intake and November9 assessment

- **Purpose:** Source-access adapters for a named research coverage gap.
- **Architecture fit:** F / BO-T03: optional removable adapter, outside canonical data authority.
- **Current status:** Deferred; comparison remains trigger-only. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Retain trigger-only defer until an unmet source need; pin each helper artifact, qualify platform/source terms, account/profile/cookie boundaries and CDP exposure, token redaction, network cost, watcher cleanup and all-process Stop.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `capability.agent-reach`.

- **November 9 source assessment:** `source-reviewed-bounded` at `c70ae6da5d39bc90e09ad2ae0575ccc89f31e284`.
  - Agent-Reach1.6.1 remains MIT Python>=3.10 source-access tooling, with browser/runtime helpers beyond simple text fetch.
  - Browser runtime references latest OpenCLI releases and launches CDP browser/watch processes; watcher explicitly binds remote debugging to127.0.0.1. Tool installer contains separately pinned external CLI/archive references.
  - These are setup, browser-profile and network effects. The trigger-only/deferred comparison remains appropriate until a concrete unmet source need exists; no social account, cookie or target access was used.
- **Assessment sources:** [source1](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/LICENSE#L1); [source2](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/pyproject.toml#L1); [source3](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/agent_reach/runtime/browser.py#L55); [source4](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/agent_reach/runtime/browser_watcher.py#L25); [source5](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/agent_reach/runtime/browser_watcher.py#L80); [source6](https://github.com/Panniantong/Agent-Reach/blob/c70ae6da5d39bc90e09ad2ae0575ccc89f31e284/agent_reach/runtime/tools.py#L52). Representative source screening; no execution or admission.

<a id="trycua-cua"></a>
### Cua Driver and Bench

[trycua/cua](https://github.com/trycua/cua) · **Shortlisted / planned**

- **Purpose:** Computer-use execution and benchmark components.
- **Architecture fit:** G/H / Q-18: compare each component with admitted routes and fixtures.
- **Current status:** Current source reviewed; planned and untested. Spaces/Driver/Lume/SDK/models/Bench are distinct scopes; WindowsDriver claim does not establish WindowsSpaces/VM compatibility.
- **Next gate:** Component-specific currentpin/rights intake; verify WindowsDriver helper and actiongrants separately from macOS26Spaces/AppleSiliconLume, auth/tokenfileACL/relay recipients, model egress, all-childStop, resources/cost and removal.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-23.
- **Record IDs:** `computer.cua`.
- **Historical intake revision:** `0722e6e9460520717b385e335380e19a0987e864`.

- **November 9 source assessment:** `reviewed` at `6285c481d2d867eb954a6e6c5531ba8a88182832`.
  - Current README foregrounds CuaSpaces while retaining Driver/Lume/SDK/decision-model/Bench scopes. Spaces native app targets macOS26+, Lume AppleSilicon; Driver advertises Windows/macOS/Linux. Do not inherit WindowsDriver support for every component.
  - Human-toolauth source requires bearer on every APIroute, generates private token bydefault and bindsloopback unless overridden. Platform tokenfileACL/pairing semantics need host verification.
  - LocalVM, shared computers/relay/cloud and computer-use models remain separate license/data/permission/resource/Stop admission paths.
- **Assessment sources:** [source1](https://github.com/trycua/cua/blob/6285c481d2d867eb954a6e6c5531ba8a88182832/README.md#L79); [source2](https://github.com/trycua/cua/blob/6285c481d2d867eb954a6e6c5531ba8a88182832/README.md#L93); [source3](https://github.com/trycua/cua/blob/6285c481d2d867eb954a6e6c5531ba8a88182832/libs/python/agent/cua_agent/human_auth.py#L6); [source4](https://github.com/trycua/cua/blob/6285c481d2d867eb954a6e6c5531ba8a88182832/libs/python/agent/cua_agent/human_auth.py#L31). Representative source screening; no execution or admission.

<a id="github-github-mcp-server"></a>
### GitHub MCP server

[github/github-mcp-server](https://github.com/github/github-mcp-server) · **Shortlisted / planned**

- **Purpose:** Repository operations exposed through MCP.
- **Architecture fit:** H: scoped code/project adapter behind Core permissions and effect receipts.
- **Current status:** Collected candidate; no product connector admission. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Choose exact stdio/HTTP deployment and fine-grained repo/account scopes, expose only approved read/write tools, qualify credential storage and OAuth audience/callback, immutable tool metadata, effect receipts/retries, rate/cost budgets and Stop.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `mcp.github`.

- **November 9 source assessment:** `source-reviewed-bounded` at `99d6d6503a7b2a133e2f8a595d6d0ba24b4086d3`.
  - GitHub MCP Server current Go module is/v2 requiring Go1.27.3 with MIT root license. Stdio, remote HTTP, PAT, GitHub App and OAuth configurations have different credential/access boundaries.
  - CLI explicitly reads PAT/App/OAuth options; inventory tracks exact OAuth scope challenges. A listed tool or successful OAuth sign-in is not a grant for repository mutations.
  - Container OAuth secrets are injected at build via secret mounts and server metadata publishes callback port to loopback. Packaging must preserve effective credential and callback restrictions.
- **Assessment sources:** [source1](https://github.com/github/github-mcp-server/blob/99d6d6503a7b2a133e2f8a595d6d0ba24b4086d3/LICENSE#L1); [source2](https://github.com/github/github-mcp-server/blob/99d6d6503a7b2a133e2f8a595d6d0ba24b4086d3/go.mod#L1); [source3](https://github.com/github/github-mcp-server/blob/99d6d6503a7b2a133e2f8a595d6d0ba24b4086d3/cmd/github-mcp-server/main.go#L38); [source4](https://github.com/github/github-mcp-server/blob/99d6d6503a7b2a133e2f8a595d6d0ba24b4086d3/pkg/inventory/server_tool.go#L19); [source5](https://github.com/github/github-mcp-server/blob/99d6d6503a7b2a133e2f8a595d6d0ba24b4086d3/Dockerfile#L25); [source6](https://github.com/github/github-mcp-server/blob/99d6d6503a7b2a133e2f8a595d6d0ba24b4086d3/server.json#L18). Representative source screening; no execution or admission.

<a id="modelcontextprotocol-servers"></a>
### MCP reference servers

[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) · **Shortlisted / planned**

- **Purpose:** Reference fetch, filesystem, Git and SQLite server implementations.
- **Architecture fit:** Capability-specific adapters; Core owns grants and canonical storage.
- **Current status:** Individual server scopes differ; SQLite access remains deferred.
- **Next gate:** Preserve per-server exact scope and SQLitedeferred; pin SDK/protocol/package, explicitly set memory file/backup/delete and filesystem CLI roots, verify traversal/symlinks/mutations, credentials/egress, Stop and removal independently.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `mcp.fetch`, `mcp.filesystem`, `mcp.git`, `mcp.sqlite`.

- **November 9 source assessment:** `reviewed` at `36380287ed3b15d115b55f546617d723072b1296`.
  - Current README explicitly describes educational reference servers, not production-ready solutions; archive/successor entries cannot inherit active implementation status. SQLite remains deferred rather than silently admitted.
  - Memory source now persistsJSONL, resolves relativeMEMORY_FILE_PATH against package directory and migrates legacy JSONwith failures stopping startup rather than serving empty memory; data path/lifecycle requires explicit Core ownership.
  - Filesystem stdio entry refuses operation without alloweddirectories; newer protocol2026-07-28 cannot receive roots, so CLI directories are required. Per-tool/root/symlink/effect qualification remains separate.
- **Assessment sources:** [source1](https://github.com/modelcontextprotocol/servers/blob/36380287ed3b15d115b55f546617d723072b1296/README.md#L9); [source2](https://github.com/modelcontextprotocol/servers/blob/36380287ed3b15d115b55f546617d723072b1296/src/memory/index.ts#L27); [source3](https://github.com/modelcontextprotocol/servers/blob/36380287ed3b15d115b55f546617d723072b1296/src/memory/index.ts#L67); [source4](https://github.com/modelcontextprotocol/servers/blob/36380287ed3b15d115b55f546617d723072b1296/src/filesystem/server.ts#L199). Representative source screening; no execution or admission.

<a id="h4ckf0r0day-obscura"></a>
### Obscura

[h4ckf0r0day/obscura](https://github.com/h4ckf0r0day/obscura) · **Shortlisted / planned**

- **Purpose:** Alternative browser-engine candidate.
- **Architecture fit:** G / Q-17: engine study alongside BO-08 transport comparison.
- **Current status:** Documentation researched; no browser-engine benchmark.
- **Next gate:** Compare eligible DOM/JS/CDP implementation against qualified Chromium and minimal transport; pin executable/rendering dependencies, require exact control-token/bind policy, qualify CDP/site coverage, SSRF/profile/cookie egress, resource pressure and owned-thread/Stop recovery.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-23.
- **Record IDs:** `browser.obscura`.
- **Historical intake revision:** `1a3169da276d7720732c7b20535474942917fb83`.

- **November 9 source assessment:** `source-screened-not-tested` at `59276a3620aed0320879f60b9f049010d568088c`.
  - Obscura now advertises native Windows x86_64 as well as Linux; source compatibility claim requires actual host/backend qualification.
  - CDP server bounds deferred messages256, pending handoffs128 and live connections128; connection stack reserves512 MiB address space, not necessarily committed RAM, so measure actual resource envelope.
  - Control token is optional but minimum32bytes if set; Host binding and rejection of browser Origin add controls, not complete authentication when token unset. Shutdown drain is3 seconds before cookie persistence.
- **Assessment sources:** [source1](https://github.com/h4ckf0r0day/obscura/blob/59276a3620aed0320879f60b9f049010d568088c/README.md#L137); [source2](https://github.com/h4ckf0r0day/obscura/blob/59276a3620aed0320879f60b9f049010d568088c/crates/obscura-cdp/src/server.rs#L21); [source3](https://github.com/h4ckf0r0day/obscura/blob/59276a3620aed0320879f60b9f049010d568088c/crates/obscura-cdp/src/server.rs#L97); [source4](https://github.com/h4ckf0r0day/obscura/blob/59276a3620aed0320879f60b9f049010d568088c/crates/obscura-cdp/src/server.rs#L153). Representative source screening; no execution or admission.

<a id="microsoft-playwright-mcp"></a>
### Playwright MCP

[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · **Shortlisted / planned**

- **Purpose:** Browser automation exposed as MCP tools.
- **Architecture fit:** G / BO-08: adapter over a separately admitted browser transport.
- **Current status:** Planned; no personal browser profile or live action admission.
- **Next gate:** Preserve dedicated-profile/no-live-action status; qualify exactplaywright-core alpha/browser and tools, isolated/persistent/CDPcredentials and endpointauth, action grants/receipts/recovery, file/network bounds, Stop and CLIcomparison on controlledfixtures.
- **Evidence:** Dated discovery catalog; executable qualification unrun. Dates: 2026-09-04.
- **Record IDs:** `mcp.playwright`.

- **November 9 source assessment:** `reviewed` at `404be8eb89abecff77a55152b6d843d140c78372`.
  - Current package0.0.84 delegates implementation to playwright-core1.66.0-alpha-1793916328000; root wrapper alone is not full browser implementation review. Dependency/browser binaries must be exactpins.
  - Config distinguishes isolated memory profile, persisted userDataDir, existingCDP endpoint/headers and30secondCDP timeout(0disables); these are separate session/credential authority paths.
  - README notes CLI+skills alternative for coding-agent workflows; token-efficiency claim does not establish equal effect control or success.
- **Assessment sources:** [source1](https://github.com/microsoft/playwright-mcp/blob/404be8eb89abecff77a55152b6d843d140c78372/package.json#L3); [source2](https://github.com/microsoft/playwright-mcp/blob/404be8eb89abecff77a55152b6d843d140c78372/package.json#L41); [source3](https://github.com/microsoft/playwright-mcp/blob/404be8eb89abecff77a55152b6d843d140c78372/index.js#L18); [source4](https://github.com/microsoft/playwright-mcp/blob/404be8eb89abecff77a55152b6d843d140c78372/config.d.ts#L82). Representative source screening; no execution or admission.

<a id="superdesigndev-treg"></a>
### Treg

[superdesigndev/treg](https://github.com/superdesigndev/treg) · **Shortlisted / planned**

- **Purpose:** Tool discovery and credential-injecting gateway.
- **Architecture fit:** H / Q-09: compare hosted, self-hosted and component reuse with direct adapters.
- **Current status:** Source screened; custom-license and route qualification pending. November 9: current pinned representative source reviewed; no runtime qualification or adoption.
- **Next gate:** Resolve custom reuse/service terms, avoid CA/proxy installation without separate authority, pin tool/recipient/account and pricing, qualify member/account isolation and public-output rights, redaction/retention, effect receipts, prepaid limits and cancellation.
- **Evidence:** Dated public-source intake; review scope is documentation and selected source where recorded, not full audit. Dates: 2026-09-18.
- **Record IDs:** `tools.treg.superdesigndev`.
- **Historical intake revision:** `f46704c4bed5100e36f6493b8253f62c99d34afd`.

## Related model repositories and hosted routes

These are artifact identities, not extra GitHub projects or additional successful experiments. Historical intake dates are retained below; all five model repositories and Mercury documentation were rechecked November 9. This does not refresh runtime qualification.

- [Qwen3 4B GGUF](https://huggingface.co/Qwen/Qwen3-4B-GGUF): Planned local BO-05 control; exact quantization and backend qualification required.
- [Qwen3 8B](https://huggingface.co/Qwen/Qwen3-8B): Planned local BO-05 control; resource eligibility and route evaluation remain separate.
- [Qwen3.8 27B](https://huggingface.co/Qwen/Qwen3.8-27B): Q-25 model-card/configuration intake only; full-precision local execution hardware-deferred.
- [Laya multilingual](https://huggingface.co/convaiinnovations/laya-multilingual): Checkpoint e4e9ddf21a7b1903b7acffd8814ad4307bf63a67 used in the separate Laya development experiment; not a second successful evaluation.

- [DeepSeek V4.1 Flash 1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017): Q-78 / BO-05: pinned model/encoding intake; text/vision and tool-use quality, engine and pairing separate. MIT signal; about 510 GB checkpoint. Local execution hardware-deferred; hosted identity, terms, privacy, cost and support unqualified. Planned and untested. Revision `1bae0e1088993b9b82de08f59de5be5a34e42170`; original intake link check October 17; metadata rechecked November 9.

- [Mercury 3](https://docs.inceptionlabs.ai/get-started/models): Q-104 / BO-05 / E/H: hosted diffusion LLM for responsive general-assistant chat, research and tool use. Planned and untested; exact route/reasoning, privacy, protocol, latency-quality-cost and Stop qualification required. No verified local artifact. Source record `model.mercury-3-hosted`; original documentation intake October 19; documentation rechecked November 9. Hosted route only; not an extra GitHub or model repository.

## Context placement and delegation (Q-127)

**Q-127: context placement and delegation.** Compare existing versus on-demand instructions, each with and without bounded workers. Judge total coordinator-plus-worker cost per accepted result, cache behavior, quality, omissions, latency and rule compliance; smaller main context alone is not savings. Essential authority/privacy/budget/effect/Stop rules stay present. Planned, untested; no instruction reorganization or benchmark execution.

This is a method study, not another repository or an adopted runtime change. See the [study scope](candidate-research.md#context-placement-and-delegation-q-127).

## Evidence limits

Runtime conformance, model quality, runtime/model pairing and content value remain four different evaluation lanes. Source inspection and static fixture validation do not establish executable containment, reliability or useful-task success. The only measured selector in this repository view is the separately scoped Laya development experiment; its default adoption was rejected. See [results](results-and-evidence.md) for denominators, corrected timing, memory scope and the cancelled retry.

This catalog is a public summary, not a publication of private operating records. It adds no installation, model call, credential scope, phase transition or adoption decision.

- **November 9 source assessment:** `source-reviewed-bounded` at `869e53ef5083a96080152b52d994904d31f488e8`.
  - Treg0.30.0 remains custom-licensed credential-injecting tool registry with Python>=3.12,<3.14. Team prepayment/BYOK and anonymous tool paths have distinct costs and recipients.
  - Local proxy captures outgoing HTTPS via HTTPS_PROXY and a machine-generated CA, while registry injects upstream vendor credentials. Source specifies loopback binding, per-machine private CA key and allowlisted tool hosts.
  - SECURITY says member/tool/history scopes do not partition a team BYOK account or authenticate public media URLs. Hiding vendor keys from local scripts does not remove trusted-proxy, billing or shared-account exposure.
- **Assessment sources:** [source1](https://github.com/superdesigndev/treg/blob/869e53ef5083a96080152b52d994904d31f488e8/LICENSE#L1); [source2](https://github.com/superdesigndev/treg/blob/869e53ef5083a96080152b52d994904d31f488e8/pyproject.toml#L1); [source3](https://github.com/superdesigndev/treg/blob/869e53ef5083a96080152b52d994904d31f488e8/README.md#L24); [source4](https://github.com/superdesigndev/treg/blob/869e53ef5083a96080152b52d994904d31f488e8/SECURITY.md#L23); [source5](https://github.com/superdesigndev/treg/blob/869e53ef5083a96080152b52d994904d31f488e8/src/treg/localproxy.py#L1); [source6](https://github.com/superdesigndev/treg/blob/869e53ef5083a96080152b52d994904d31f488e8/src/treg/localproxy.py#L52); [source7](https://github.com/superdesigndev/treg/blob/869e53ef5083a96080152b52d994904d31f488e8/src/treg/routers/auth_helpers.py#L13). Representative source screening; no execution or admission.



## November 9 model source assessments

These model-card/configuration assessments do not replace historical experiment pins or admit any model/backend pairing.

### Qwen3 4B GGUF — source assessment

Reviewed source revision `bc640142c66e1fdd12af0bd68f40445458f3869b`.

- Apache-2.0 license text inspected. Card identifies 4B causal text model with five listed GGUF quantizations; thinking/non-thinking and extended context depend on exact engine/template/settings.
- Remains a planned BO-05 control. Model repository identity is not an exact quantized artifact pin or evidence of this PC's resource eligibility.

Next gate: Pin exact GGUF filename/hash, tokenizer/template and engine build; test ordinary assistant quality, reasoning mode, tool protocol, context/KV memory, latency, Stop and total host cost. Preserve separation from the Qwen3.5 exploratory demo.

Sources: [source 1](https://huggingface.co/Qwen/Qwen3-4B-GGUF/blob/bc640142c66e1fdd12af0bd68f40445458f3869b/README.md#L24); [source 2](https://huggingface.co/Qwen/Qwen3-4B-GGUF/blob/bc640142c66e1fdd12af0bd68f40445458f3869b/LICENSE).

### Qwen3 8B — source assessment

Reviewed source revision `b968826d9c46dd6066d109eabc6255188de91218`.

- Apache-2.0 license text inspected; card describes 8.2B text model with 32,768 native context and a separately configured YaRN extension.
- Card requires Transformers4.51+ and documents particular SGLang/vLLM minima; these mutable documentation requirements do not pin a qualified Windows engine or establish local memory headroom.

Next gate: Pin exact artifact/quantization, backend and chat/thinking/tool template; compare BO-05 quality and complete route costs/resources against admitted controls. Verify context scaling and all-request cancellation separately.

Sources: [source 1](https://huggingface.co/Qwen/Qwen3-8B/blob/b968826d9c46dd6066d109eabc6255188de91218/README.md#L25); [source 2](https://huggingface.co/Qwen/Qwen3-8B/blob/b968826d9c46dd6066d109eabc6255188de91218/README.md#L95).

### Qwen3.8 27B — source assessment

Reviewed source revision `37561816e66b5b9153b1b64c10968c18c1e6f4a0`.

- Compared current README with prior reviewed1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0: observed differences are benchmark-table color/opacity CSS. Inspected config is byte-identical; this is not verification of every weight blob.
- Apache-2.0 license text inspected. Native image/text model built on Qwen3.5 architecture, default thinking and native262,144-token context are documented. The card describes the hosted1M-context service as coming soon; local and hosted capabilities cannot be conflated.
- Full-precision local execution remains hardware-deferred. The refreshed source pin does not inherit Qwen3.5 demo measurements or establish model/engine pairing admission.

Next gate: BO-05 exact artifact/quantization and compatible vision/thinking/tool engine intake; qualify memory/KV/media resources, source rights, image/tool fidelity, latency/cost and Stop. Independently verify hosted availability and exact route before any hosted comparison.

Sources: [source 1](https://huggingface.co/Qwen/Qwen3.8-27B/blob/37561816e66b5b9153b1b64c10968c18c1e6f4a0/README.md#L9); [source 2](https://huggingface.co/Qwen/Qwen3.8-27B/blob/37561816e66b5b9153b1b64c10968c18c1e6f4a0/README.md#L32); [source 3](https://huggingface.co/Qwen/Qwen3.8-27B/blob/37561816e66b5b9153b1b64c10968c18c1e6f4a0/config.json).

### Laya multilingual — source assessment

Reviewed source revision `1720e3e3357cfe1e281542e223f8273b0890ca34`.

- Current README is identical to historical experiment README; new root config is explicitly a Hub download-tracking stub with architecture LayaTypedDecisions, not an interchangeable executable model definition.
- Card describes322M mmBERT typed non-generative decisions with default1,024-token truncation and optional8,192 limit; confidence does not establish correctness. Router documentation keeps both English and multilingual checkpoints resident, increasing memory scope.
- Apache-2.0 is declared in card metadata but current root LICENSE fetch returned404; retain artifact/component rights qualification. Historical tested checkpointe4e9ddf21a7b1903b7acffd8814ad4307bf63a67 and failed development-selector gates remain intact.

Next gate: Do not replace the failed experiment pin/results. Any new trial requires exact checkpoint plus Laya code/dependencies, complete license/artifact provenance, Windows memory/residency and multilingual calibration/OOD/abstention tests; model decisions never grant execution authority.

Sources: [source 1](https://huggingface.co/convaiinnovations/laya-multilingual/blob/1720e3e3357cfe1e281542e223f8273b0890ca34/config.json); [source 2](https://huggingface.co/convaiinnovations/laya-multilingual/blob/1720e3e3357cfe1e281542e223f8273b0890ca34/README.md#L23); [source 3](https://huggingface.co/convaiinnovations/laya-multilingual/blob/1720e3e3357cfe1e281542e223f8273b0890ca34/README.md#L73).

### DeepSeek V4.1 Flash 1017 — source assessment

Reviewed source revision `1bae0e1088993b9b82de08f59de5be5a34e42170`.

- Inspected MIT license, card/config and representative prompt-encoding code. No Jinja chat template is shipped: exact encoding/parser must handle tool ordering, thinking effort and interleaved images rather than borrowing another model's template.
- Reference inference documentation explicitly calls it a readable implementation rather than production serving; example conversion and launch use tensor parallel rank files and torchrun. A documented self-test with uninitialized weights checks plumbing rather than answer quality.
- Upstream benchmark tables and1M context are claims with harness/settings scope; local execution remains hardware-deferred and hosted identity/rights/privacy/pricing still unqualified.

Next gate: Separate text/vision/tool quality, encoding/parser, engine and production pairing trials. Pin all artifacts and exact provider route where applicable, verify host/resources and full costs, keep Core control of tools/grants/cancellation, and do not import upstream benchmark scores as Abrams results.

Sources: [source 1](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/blob/1bae0e1088993b9b82de08f59de5be5a34e42170/README.md#L63); [source 2](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/blob/1bae0e1088993b9b82de08f59de5be5a34e42170/inference/README.md#L3); [source 3](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/blob/1bae0e1088993b9b82de08f59de5be5a34e42170/inference/README.md#L63).
