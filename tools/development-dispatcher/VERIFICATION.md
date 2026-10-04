# Offline verification, October 4, 2026

Tested on Windows with Python 3.13.14, using the standard library and the
already-installed Git for synthetic workspace tests. No dependencies were
installed. No live qualification opt-in was enabled.

| Check | Result |
|---|---|
| `python -m scripts.dispatch.demo` | Five expected routing scenarios passed; every result reports no dispatch. |
| `python -m unittest discover -s tests/dispatch -p test_demo.py -v` | Three tests passed, including no-network/no-child-process guards and a wrong-result failure check. |
| `python -m unittest discover -s tests/dispatch -v` | 250 tests discovered: 227 passed, 23 skipped, zero failures/errors in the source checkout. |
| Standalone export smoke | The demo and its three focused tests also passed from the exported directory. |

The full dispatcher run took about 33 seconds on this host. Skips include
Linux-only and explicit Windows/WSL live qualification tests. They are not
passed tests or containment evidence. This is the full default dispatcher
suite, not full-platform coverage or a production/model evaluation.

The three demo tests were first run without the new module and failed on its
missing import, then passed after implementation. A deliberately incorrect
preview is independently verified to make the demo return failure.

The export manifest lists the exact included files and SHA-256 digests. It
excludes the parent project's Git history, account/configuration files, grants,
journals and admission pins. The exporter uses an explicit file selection and
a limited marker scan, not a complete secret detector or security audit.

Current-build live dispatch, complete tool mediation, Laya admission, measured
business outcomes and platform phase advancement remain unproven by these tests.
