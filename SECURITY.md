# Security policy

## Report a vulnerability privately

Use [GitHub private vulnerability reporting](https://github.com/theonetruedaniel/abrams-intelligence/security/advisories/new) for suspected security problems in this repository. Do not put exploit details, credentials, personal records or private host information in a public issue or pull request.

Include the affected commit and file, operating system and Python version, a minimal synthetic reproduction, and the expected and observed behavior. Explain the potential impact and whether you tested it or inferred it from source. Redact sensitive output. Do not test against other people's systems or data.

If the private report form is unavailable, open a public issue asking only for a private contact route, without vulnerability details. This project does not promise a response deadline, bounty or supported release schedule.

## Scope and current status

This repository contains architecture and research documents, illustrative examples, and experimental development tooling under `tools/development-dispatcher/`. It does not publish the complete personal-assistant platform. Include the exact revision in a report; there are currently no versioned supported release lines.

The documented demo uses synthetic inputs and does not dispatch model work. The published tooling is not admitted for live read-only or editing dispatch. Passing an offline test does not establish safe live use, containment or product acceptance. See the [component verification record](tools/development-dispatcher/VERIFICATION.md) and [current progress](docs/progress.md).

## Security boundaries to preserve

Worker output, candidate source material and task inputs must not become authority to change grants, access credentials, launch external effects or bypass controller verification. The controller's intended boundaries include authorization before mutation, scoped writes, cancellation checks and reconciliation of uncertain outcomes before retrying an effect.

Report suspected violations of those boundaries, credential or private-data exposure, unsafe path handling, unintended execution, or compromised repository automation. Describe the reachable input and impact. These are intended properties to examine, not claims that all controls have been qualified.

## Research and upstream components

Catalog membership is a research reference, not an installed dependency, security endorsement or adoption decision. For an issue confined to an upstream project, follow that project's security policy. Report any resulting exposure in Abrams' published code or automation here as well. Known limitations and experimental status do not make new vulnerabilities unreportable.
