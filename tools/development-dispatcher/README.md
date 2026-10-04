# Abrams Intelligence: development dispatcher

An experimental Python controller for bounded Codex work packages with explicit
model and reasoning choices, manual overrides, usage-aware routing, verification,
cancellation and auditable recovery.

Abrams Intelligence is a general-purpose, local-first personal intelligence
project. This repository presents one implemented development-tooling slice:
making task routing explicit and checking its behavior before live use. The
broader platform and its employment mission remain separately gated work.

The operational question is simple: which work can use a routine route, which
needs a stronger review, and when should automation stop? This controller makes
those decisions inspectable. It does not yet demonstrate better task quality,
lower costs or time saved in a production workflow.

**Current status: the installed build is not admitted for live read-only or
editing dispatch. Laya routing is not admitted.** Offline preview and the synthetic
test suite work without model calls. This project does not intercept ordinary
Codex or ChatGPT chats or change their model picker.

## Run the two-minute demo

Use Python 3.13 or later and run from the repository root:

```powershell
python -m scripts.dispatch.demo
python -m unittest discover -s tests/dispatch -p test_demo.py -v
```

The demo runs five real CLI previews: routine, consequential, routine again,
Manual selection, and a blocked unavailable Manual route. Expected result:
`5/5 checks passed`, with no model calls. Python uses only its standard library;
no installation, account, API key, WSL session or network connection is needed
for this demo. See [the walkthrough](DEMO.md) and [evaluation matrix](EVALUATION.md).
The [verification record](VERIFICATION.md) states the tested scope; a
[recorded transcript](demo-transcript.txt) is available for offline review.

For an individual raw JSON preview and the broader dispatcher suite:

```powershell
python -m scripts.dispatch preview --manifest tests/dispatch/fixtures/routine.json --catalog tests/dispatch/fixtures/catalog.json
python -m unittest discover -s tests/dispatch -q
```

The preview uses a synthetic catalog and reports `dispatched: false`. Tests use
temporary workspaces and fake model transports. Git must be installed for the
workspace/integration tests. Platform-specific and opt-in live tests can be
skipped; skipped tests are not qualification evidence.

## Design

```text
Bounded task manifest -> validation -> routing policy -> offline preview
                                            |
                               separately admitted live adapter
                                            |
                         serial runner -> verification -> journal/recovery
```

The demo stops at offline preview. Synthetic lifecycle tests exercise the later
stages with fake transports; they do not establish current live containment.

- A deterministic policy selects supported model/effort pairs for an authorized
  package. Later explicit manual selections take precedence.
- The Windows controller owns grants, account checks, journals, verification and
  integration. Workers cannot supply their own authority.
- Editing uses a separate copy and a broker for bounded file operations. Linux
  commands use an inventoried WSL2/Bubblewrap runtime. Windows-only commands are
  not treated as equivalent Linux capabilities.
- Changes reach the primary workspace only after exact changeset verification
  and conflict checks. Stop is checked before each integration mutation. An
  interruption after a file attempt preserves uncertainty; integration is not
  an all-files atomic transaction and uncertain writes are never replayed.
- Laya proposals are advisory and require separate controller admission. The
  evaluated checkpoint failed classification and memory thresholds; rules remain
  the fallback. Model weights and dependencies are not bundled.

The GPT-6 presets apply to this Codex development controller. They do not impose
an OpenAI-only requirement on a product built with it. Requested and accepted
routes are separate from backend execution metadata, which is not assumed.

## Trusted verification

Editing manifests name controller-registered check IDs. Check entry points must
use isolated Python (`/usr/bin/python3 -I`) with controller-owned inline code or
a bundled harness under `/work/.dispatch-verifier/`. Worker files cannot supply
the trusted entry point. Bundles are checked for collision and mutation on a
fresh copy of the proposed changes.

Controller authors must provide independent assertions. Calling worker-edited
tests from an otherwise trusted harness does not make those assertions trusted.
Other command runtimes still require inventory and qualification.

## Live execution limitations

An already inventoried local classifier can be evaluated separately:

```powershell
python -m scripts.dispatch qualify-selector --runtime candidate-runtime.json --corpus tests/dispatch/fixtures/laya-routing-corpus.json --output new-qualification.json
```

This runs the pinned local classifier, requires a new output file, and records
measured cold/warm timings, quality and policy outcomes. Exit zero means the
evaluation completed, not that its thresholds passed or adoption was enabled.
It does not download a model, install dependencies or create an admission pin.
An uncertain classifier launch blocks further evaluation and production
classifier launches until its termination is reconciled.

Production activation needs a qualified exact Codex executable/schema, Code Mode
host, effective configuration, complete model-tool dispatch boundary and command
runtime. The current interface evidence covers nested Code Mode registration but
does not establish exclusion of every direct native-tool path. Permission checks
and declined approvals alone are insufficient proof of protected-read denial.

No deployment pins, accounts, credentials, grants, journals or private project
history are included. The candidate Linux runtime registry is a historical
machine-specific inventory used by synthetic tests, not a portable installation
recipe or admission record. A fresh host needs its own inventory and qualification.
Do not manufacture approval flags or copy a pin to bypass these requirements.

`execute`, `status` and `reconcile` are available in the CLI, but the exported
project has no qualified live environment. Reconciliation inspects evidence;
it does not replay uncertain effects. No paid API fallback, account rotation,
global configuration editing, or capacity purchase is implemented.

## Publication status

This is a locally prepared publication candidate. It is not a completed or
activated release. The verifier and Stop fixes passed independent review, and
the implementation is integrated into its parent project locally. Complete
release qualification and GitHub publication remain pending. The export manifest records exact source-file hashes so the
publication candidate can be compared with the reviewed implementation.
