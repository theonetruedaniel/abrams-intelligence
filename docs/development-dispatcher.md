# A working slice of Abrams Intelligence

This is an offline demonstration of the existing developer dispatcher. It
answers a practical operations question: what level of review should a task
receive, and when should automation stop?

The controller makes five decisions using its real preview code:

| Situation | What you see | Why it matters |
|---|---|---|
| A routine task | Luna with low reasoning | A modest default for bounded work. |
| A consequential review | Astra with high reasoning | The policy preserves a stronger review floor. |
| Another routine task | Luna with low reasoning again | A difficult task does not permanently raise every later task's route. |
| An explicit Manual choice | Sol with high reasoning | The operator's selection wins. |
| That chosen route is unavailable | Blocked | It does not silently substitute another model. |

The output ends with **5/5 checks passed**. These are tested routing decisions,
not completed AI tasks. The tasks and available-model list are synthetic. No
model is called, no account is accessed, and no money is spent by the demo.

## Run it locally

Use Python 3.13 or later. After the reviewed component is added to this
repository, run from the repository root:

```powershell
cd tools/development-dispatcher
python -m scripts.dispatch.demo
python -m unittest discover -s tests/dispatch -p test_demo.py -v
```

The walkthrough takes about two minutes to explain; the command itself takes
less time. No package installation or API key is needed. A recorded plain-text
transcript is included in the component as `demo-transcript.txt`.

For the current unpublished local candidate, open a terminal in its exported
root and run the same two Python commands directly. The `tools/` destination
above is proposed packaging, not a claim that source is already on GitHub.

## What was checked

The October 4 source and standalone-export runs each discovered 250 dispatcher
tests: 227 passed, 23 skipped, with zero failures/errors. The three new demo
tests check expected routes, deliberately incorrect results, and rejection of
network/socket or child-process creation during the demo test.

The skips remain explicit: nine Linux-only transport tests, twelve opt-in
containment tests, and two tests needing unavailable symlink privileges. This
does not prove live containment or full-platform behavior.

## How it fits the project

This is the approved development-tooling dry-run and verification slice. It
does not replace the product Core, select the desktop shell, adopt a candidate
runtime, reorder the roadmap or advance a phase. The broader product remains
provider-neutral; this developer dispatcher has Codex-specific presets.

The useful story is about explicit choices, exceptions and testable operating
rules. Model quality, cost savings, business outcomes and production readiness
remain separate things to measure. Live dispatch and Laya remain unadmitted on
the current build.
