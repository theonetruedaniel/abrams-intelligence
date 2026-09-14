# External projects: research and possible reuse

Public summary prepared September 14, 2026 from source assessments dated September 9, 2026. The revisions below identify the reviewed snapshots, not the latest releases. These are research judgments and proposed experiments. No candidate benchmark results or adoption decisions are reported here.

## Compare projects by the job they would do

A runtime, a memory library and a development template solve different problems. Abrams separates three questions: which components to reuse, which workflow ideas to adapt, and whether an existing product could reduce the amount of custom development.

| Project | Possible contribution | Proposed comparison | Current disposition |
|---|---|---|---|
| [LangGraph](https://github.com/langchain-ai/langgraph/tree/e539ac122f4126f6dd850581c1494948cf620e31) | Stateful task graphs, checkpoints and interruption | Runtime contract and recovery cases | Existing runtime candidate; untested here |
| [LangChain](https://github.com/langchain-ai/langchain/tree/1611938f49dda48aa069d1fdce429430257488b7) | Higher-level model/tool interfaces and middleware | Minimal configuration versus direct LangGraph under equal constraints | Proposed runtime configuration |
| [Mem0](https://github.com/mem0ai/mem0/tree/02f7a9b2c4fe38dedb96631e48c85c74ad58b605) | Memory extraction and retrieval | Simple retrieval baseline versus a derived memory index; extraction scored separately | Conditional memory experiment |
| [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT/tree/98381ab27f733468bfe1f9c4f4942b4b416d9a8b) | Workflow blocks, run inspection and benchmark ideas | Workflow-design study; Classic runtime considered separately | Platform integration deferred; selected ideas worth studying |
| [OpenClaw](https://github.com/openclaw/openclaw/tree/78bfb8ad4674183268efdb954c6675b069c0cea4) | Assistant gateway, scheduling, memory interaction and channels | Bounded runtime evaluation plus a separate build-versus-adapt study | High research priority; proposed admission |
| [Open-SPDD](https://github.com/gszhangwei/open-spdd/tree/59669ac18c1c0bdee76b780771ac51567a73d52c) | Structured specifications and spec-to-code review | Existing development workflow with and without selected templates | Proposed workflow study; separate from runtime selection |

This is a selected research summary, not the full candidate catalog. Priority describes where research may be useful; it does not establish performance or compatibility.

## Findings that changed the evaluation questions

### Recovery must account for repeated work

LangGraph's interruption documentation explains that resumed execution can rerun code before an interrupt. Abrams therefore needs to test action journaling and receipt reconciliation alongside checkpoint recovery. An agent reaching the end of a graph is insufficient evidence that it performed each external action once. [Official interruption documentation](https://docs.langchain.com/oss/python/langgraph/interrupts).

### Memory needs source support and user correction

The reviewed Mem0 implementation supports inference during memory addition. Abrams would evaluate inferred facts as proposals with source references, while keeping original records authoritative. Proposed cases cover negation, conflicting preferences, duplicates and source deletion. [Reviewed implementation](https://github.com/mem0ai/mem0/blob/02f7a9b2c4fe38dedb96631e48c85c74ad58b605/mem0/memory/main.py).

### A larger product deserves its own comparison

OpenClaw's assistant scope makes it relevant to a build-versus-adapt decision. That study would measure setup effort, missing requirements, customization and update burden, alongside user task success. It is a different question from whether one runtime adapter passes a contract. Scheduling and security documentation provide concrete starting points for restart, delivery and isolation cases. [Reviewed scheduling documentation](https://github.com/openclaw/openclaw/blob/78bfb8ad4674183268efdb954c6675b069c0cea4/docs/automation/cron-jobs.md), [reviewed security policy](https://github.com/openclaw/openclaw/blob/78bfb8ad4674183268efdb954c6675b069c0cea4/SECURITY.md).

### Templates can improve review, but their value needs measurement

Open-SPDD connects requirements, design and safeguards to implementation and review. The useful question is whether selected templates catch omissions and scope changes with acceptable review effort. Planned cases include a flawed specification, so agreement with the specification alone cannot count as correctness. [Reviewed review template](https://github.com/gszhangwei/open-spdd/blob/59669ac18c1c0bdee76b780771ac51567a73d52c/internal/templates/data/optional/spdd-code-review.md).

## Attribution and reuse

The linked repositories belong to their respective maintainers. This showcase contains original summaries, not imported upstream implementations. Research does not establish partnership, contribution to those projects, or an installed dependency.

Before any reuse, review the exact files, license notices and dependency tree. The September 9 assessment distinguished AutoGPT Platform's licensing from Classic; a repository-wide label is insufficient for choosing reusable components. Recheck applicable terms at the selected revision before copying or distributing anything.

Next: [how the bake-off would work](evaluation-method.md).
