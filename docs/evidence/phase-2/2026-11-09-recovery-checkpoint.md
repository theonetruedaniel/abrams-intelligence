# Replay and WAL recovery: November 9, 2026

Three further scoped runtime cases passed with the actual SQLite Store, process interruption, reopening the same preserved database/WAL, complete owned death/EOF observations and checked retirement. Two independent reviews reconciled each result against raw receipts, physical accepted-ledger inspection, pinned source and cached native evidence.

| Case | Actual result | Narrow finding | Result SHA256 |
| --- | --- | --- | --- |
| RC04 | RC04-EVIDENCE-RETIRED, 1549 ms | A pre-crash health reply replays exactly after later start/Stop/current-health work without changing state. | d3aa5b8d891e71b4b94b8461019281fcd2510f934d6c408bace7e59ea82bf8bb |
| RC05 | RC05-EVIDENCE-RETIRED, 1690 ms | An accepted reconnect snapshot replays without later events; revocation is checked before returning cached content. | 99c7c4881a34d4353ebc91ffc877d5e1e4d9de492effc1ee1c5213010a88cbb5 |
| O32 | O32-EVIDENCE-RETIRED, 1698 ms | Eight actual valid noncommitting WAL frames follow the committed prefix; reopening restores that prefix without inventing cancel success. | b404f54bde93099ed0baba7ab437130ab56380a4c5edf581184a3458b41a21d6 |

All three preserve one started event and one consumed approval. Physical accepted-ledger witnesses have zero uncommitted reservations and checked autocommit. RC04 ledger counts are 1 then 4; RC05 counts are 2/3/3; O32 restores only the original accepted start. The O32 raw baseline has 34 valid frames and the interrupted observation has 42; the added eight frames all have zero commit-size fields. The original physical WAL was independently checked after proved writer death and before recovery creation.

The new successful hosts were normally exited only after archival, exact owner-identity checks and cached checked-release/no-handle checks. Earlier uncertain owners and consumed attempts were not touched. RC05 had an earlier resource-only block before reservation or workers; its later first workload followed recorded RAM improvement, not a retry of a consumed workload.

These are controlled worker-process-crash results under a continuous trusted owner and OS. They do not establish power-loss or owner-restart durability, hostile-writer exclusion, partial/torn-write or uncertain-flush handling, end-to-end delivery revocation, browser correctness or Phase 2 completion. RC05's stdout is a diagnostic copy of a successful reply captured while granted; the denial itself returns no cached content.

Six previously open rows now have separate scoped runtime results: O31, O39, RC06, RC04, RC05 and O32. Eight remain open: O19/O20/O34/O35/O38/O40 and the two RC07 partial-write/uncertain-flush cases. These results span separately pinned candidates; historical 51/65 is not replaced with a new whole-candidate aggregate. Non-oracle shell, packaging, accessibility, capability-denial, topology/runtime-placement and deferred performance exits remain separately accountable.