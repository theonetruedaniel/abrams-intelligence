# Contributing

Abrams Intelligence is an architecture and foundations project maintained by Daniel Abrams. This repository contains public architecture documentation and runnable experimental offline developer tooling. Useful contributions include documentation corrections, source-backed research, reproducible tooling bugs and narrowly scoped improvements to the published component. It does not contain an installable personal-assistant product.

## Propose a change

For suspected vulnerabilities, follow the [security policy](SECURITY.md) and use the private reporting route. Keep security-sensitive details out of public issues and pull requests.

Open an issue describing the problem, the relevant document and your supporting evidence. For a candidate suggestion, include the canonical repository URL, exact source revision, proposed role, useful behavior and a test that could disprove its fit. Separate observed source behavior from a proposed experiment.

For a documentation pull request, explain the change and check relative links and JSON syntax. For a tooling change, include a synthetic reproduction and relevant tests. Preserve the distinction between established design, simulation, proposed testing and implemented behavior. Discuss scope before contributing product code or adding dependencies: the published offline dispatcher uses Python's standard library; product application builds and integrations remain separately gated.

## Check the published offline demo

With Python 3.13 or later, from the repository root:

```powershell
cd tools/development-dispatcher
python -m scripts.dispatch.demo
python -m unittest discover -s tests/dispatch -p test_demo.py -v
```

These commands use synthetic data and do not launch model work or admit live dispatch. Record which checks you ran and which remain unrun. Broader workspace tests can require Git, and platform-specific or opt-in checks may skip; do not describe a skip as qualification.

Use synthetic examples. Omit credentials, personal records, private host details and third-party material you do not have permission to share. Keep feedback respectful and focused on the work.

## Attribution and licensing

Abrams-authored source and documentation use the [MIT License](LICENSE). Link upstream sources and retain their authorship and applicable notices; read [THIRD_PARTY.md](THIRD_PARTY.md) before proposing imported code or dependencies. A reference does not mean that a project has been adopted or that its license has been cleared for a proposed use.
