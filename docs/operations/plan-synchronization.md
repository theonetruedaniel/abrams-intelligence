# Public publication synchronization

Keep public summaries aligned with verified development evidence. Publish no
credentials, private operational records, local filesystem paths or process IDs.
Do not describe planned, blocked or deferred work as implemented or passed.

## Destination paths

| Published material | Destination |
| --- | --- |
| Repository catalog | `research/repository-catalog.md` and `research/repository-catalog.json` |
| Candidate register and research | `research/candidate-research.md` |
| Phase 2 evidence summaries | `docs/evidence/phase-2/` |
| Exported development dispatcher | `tools/dispatcher/` |
| Current status and dated changes | README “Current progress” and `CHANGELOG.md` |

Do not recreate the retired catalog, candidate-register, evidence or dispatcher
paths. Historical changelog entries may name an old path to explain a move.

## Pending layout migration

PR #8 (`reorg/public-layout`) introduces this layout. Until Daniel merges it,
base related publication changes on that branch or wait. Do not merge it on his
behalf. If publishing to main first is necessary, tell Daniel before doing so
and refresh the pull request to prevent conflicting layouts.

Inventory portfolio and architecture-explorer links and fetches before editing
them. Prepare matching replacements, but coordinate their deployment with the
layout merge so neither side points at paths missing from main.

## Dispatcher export

Regenerate the dispatcher README and its pinned `export-manifest.json` through
the development tree's `tools/dispatcher/packaging/export.py` (relocated from
`packaging/dispatcher/export.py`), using the new published
component path. Do not hand-edit only the exported README or silently change its
hash. Review the export diff and verify every manifest hash before publishing;
publication of the development tree itself is not implied.

## Before reporting publication complete

- Reconcile claims against their receipts and reviews; preserve scope and limits.
- Review the exact public diff for privacy and licensing.
- Check local Markdown targets and catalog consistency in the public tree.
- Confirm the resulting remote branch files and applicable CI results.
- Keep the README introduction about the project and what runs. Place status
  updates under “Current progress” and dated history in `CHANGELOG.md`, not as
  audit paragraphs above the introduction.

A denied operation stops that operation. Do not retry it through another tool,
branch, agent or service. Record the denial and continue only unaffected work.

## Existing-public export migration

For an inventory-preserving public layout update, this repository's
`packaging/dispatcher/export.py` validates the existing public manifest and
regenerates its output into a new temporary directory. It imports no development
source and adds no entries. Copy back only the reviewed changed outputs.

The November 14 migration found a pre-existing README pin mismatch on both
main `86e1c7b` and layout commit `dfd8990`: recorded SHA-256
`ec6d7ff58c29bc9fb9ed7d2f990640e93303290f9304535ae95a340d9acb695e`,
actual `bb50a7f0e444fbcc4005b16410c7ad4aa04a6fb426ca701e72ba303a206d3f20`.
The other 76 pinned files matched. The public exporter admits only that exact
observed README for the migration, requires the exact old command once, changes
only `cd tools/development-dispatcher` to `cd tools/dispatcher`, and regenerates
the manifest. This explicitly reconciles the stale pin; it does not establish
that the original pin matched or rerun historical qualification.

Run `python -m unittest discover -s tests -p test_dispatcher_export.py` to check
inventory preservation, output hashes, mismatch rejection and path validation.
