# Core variants

Both variants declare wire protocol version **1**. Their parser/source revisions differ; these directory names do not imply a new wire version.

- `protocol-v1-shell-r3/`: the accepted native shell-owned synthetic Node pipe uses the R3 parser (`4106a6af...`) and its reference-memory Core/LocalChannel closure.
- `protocol-v1-store-r39/`: the accepted SQLite Store source uses the availability-aware parser (`fb18a8e6...`). The PWA serving transport uses this parser revision and the availability-aware LocalChannel; its memory-fixture path is not the SQLite Store execution path.

The renderer-side reply contract (`b303bbc3...`) is a separate client contract, not a third Core wire-version upgrade. It remains with the corresponding source modules.

Imports began byte-identically. The path-only integration now restores the separate relative closures, without merging the protocol variants or changing their pinned source bytes. See [the integration record](../../docs/INTEGRATION.md) for checked scope, ordinary type failures and unrun tests. Original and modified-after-import hashes remain in [PROVENANCE.json](../../docs/PROVENANCE.json).
