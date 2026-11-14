-- Owner: principal implementation agent. 2026-10-01. DRAFT, UNEXECUTED.
-- Exact schema is reviewed input, not implementation or migration authority.
PRAGMA user_version=1;
CREATE TABLE session (
 session_id TEXT NOT NULL PRIMARY KEY CHECK(length(session_id) BETWEEN 1 AND 64 AND session_id NOT GLOB '*[^A-Za-z0-9_-]*'),
 epoch INTEGER NOT NULL CHECK(epoch BETWEEN 1 AND 9007199254740991),
 commit_seq INTEGER NOT NULL CHECK(commit_seq BETWEEN 0 AND 9007199254740991),
 grants_json TEXT NOT NULL CHECK(json_valid(grants_json) AND json_type(grants_json)='array')
) STRICT;
CREATE TABLE commit_record (
 session_id TEXT NOT NULL REFERENCES session(session_id),
 commit_seq INTEGER NOT NULL CHECK(commit_seq BETWEEN 1 AND 9007199254740991),
 source TEXT NOT NULL CHECK(source IN ('accepted-request','tick','approve','invalidate','revoke')),
 control_json TEXT NOT NULL CHECK(json_valid(control_json) AND json_type(control_json)='object'),
 epoch INTEGER NOT NULL CHECK(epoch BETWEEN 1 AND 9007199254740991),
 first_event_seq INTEGER NOT NULL CHECK(first_event_seq BETWEEN 0 AND 128),
 last_event_seq INTEGER NOT NULL CHECK(last_event_seq BETWEEN 0 AND 128),
 CHECK((first_event_seq=0 AND last_event_seq=0) OR (first_event_seq>=1 AND last_event_seq>=first_event_seq)),
 PRIMARY KEY(session_id,commit_seq)
) STRICT;
CREATE TABLE approval (
 session_id TEXT NOT NULL REFERENCES session(session_id),
 approval_id TEXT NOT NULL CHECK(length(approval_id) BETWEEN 1 AND 64 AND approval_id NOT GLOB '*[^A-Za-z0-9_-]*'),
 revision INTEGER NOT NULL CHECK(revision BETWEEN 1 AND 9007199254740991),
 run_id TEXT NOT NULL CHECK(length(run_id) BETWEEN 1 AND 64 AND run_id NOT GLOB '*[^A-Za-z0-9_-]*'),
 fixture_id TEXT NOT NULL CHECK(length(fixture_id) BETWEEN 1 AND 64 AND fixture_id NOT GLOB '*[^A-Za-z0-9_-]*'),
 epoch INTEGER NOT NULL CHECK(epoch BETWEEN 1 AND 9007199254740991),
 valid INTEGER NOT NULL CHECK(valid IN (0,1)),
 consumed INTEGER NOT NULL CHECK(consumed IN (0,1)),
 last_commit_seq INTEGER NOT NULL,
 PRIMARY KEY(session_id,approval_id,revision),
 FOREIGN KEY(session_id,last_commit_seq) REFERENCES commit_record(session_id,commit_seq)
) STRICT;
CREATE TABLE run (
 session_id TEXT NOT NULL REFERENCES session(session_id),
 run_id TEXT NOT NULL CHECK(length(run_id) BETWEEN 1 AND 64 AND run_id NOT GLOB '*[^A-Za-z0-9_-]*'),
 fixture_id TEXT NOT NULL CHECK(length(fixture_id) BETWEEN 1 AND 64 AND fixture_id NOT GLOB '*[^A-Za-z0-9_-]*'),
 epoch INTEGER NOT NULL CHECK(epoch BETWEEN 1 AND 9007199254740991),
 state TEXT NOT NULL CHECK(state IN ('running','succeeded','failed','cancelled','stopped')),
 fixture_position INTEGER NOT NULL CHECK(fixture_position BETWEEN 0 AND 128),
 terminal_reserved INTEGER NOT NULL CHECK(terminal_reserved IN (0,1)),
 last_commit_seq INTEGER NOT NULL,
 PRIMARY KEY(session_id,run_id),
 FOREIGN KEY(session_id,last_commit_seq) REFERENCES commit_record(session_id,commit_seq),
 CHECK((state='running' AND terminal_reserved=1) OR (state<>'running' AND terminal_reserved=0))
) STRICT;
CREATE TABLE journal (
 session_id TEXT NOT NULL,
 global_seq INTEGER NOT NULL CHECK(global_seq BETWEEN 1 AND 128),
 run_id TEXT NOT NULL,
 run_seq INTEGER NOT NULL CHECK(run_seq BETWEEN 1 AND 128),
 epoch INTEGER NOT NULL CHECK(epoch BETWEEN 1 AND 9007199254740991),
 kind TEXT NOT NULL CHECK(kind IN ('started','output','succeeded','failed','cancelled','stopped')),
 event_json TEXT NOT NULL CHECK(json_valid(event_json) AND json_type(event_json)='object' AND length(CAST(event_json AS BLOB))<=65536),
 commit_seq INTEGER NOT NULL,
 PRIMARY KEY(session_id,global_seq),
 UNIQUE(session_id,run_id,run_seq),
 FOREIGN KEY(session_id,run_id) REFERENCES run(session_id,run_id),
 FOREIGN KEY(session_id,commit_seq) REFERENCES commit_record(session_id,commit_seq)
) STRICT;
CREATE TABLE accepted_request (
 session_id TEXT NOT NULL REFERENCES session(session_id),
 request_id TEXT NOT NULL CHECK(length(request_id) BETWEEN 1 AND 64 AND request_id NOT GLOB '*[^A-Za-z0-9_-]*'),
 request_json TEXT NOT NULL CHECK(json_valid(request_json) AND json_type(request_json)='object' AND length(CAST(request_json AS BLOB))<=65536),
 reply_kind TEXT NOT NULL CHECK(reply_kind IN ('ordinary','reconnect')),
 reply_json TEXT NOT NULL CHECK(json_valid(reply_json) AND json_type(reply_json)='object' AND length(CAST(reply_json AS BLOB))<=1048576),
 snapshot_start_seq INTEGER NOT NULL CHECK(snapshot_start_seq BETWEEN 0 AND 128),
 snapshot_through_seq INTEGER NOT NULL CHECK(snapshot_through_seq BETWEEN 0 AND 128),
 reply_epoch INTEGER NOT NULL CHECK(reply_epoch BETWEEN 1 AND 9007199254740991),
 original_reply_digest TEXT NOT NULL CHECK(length(original_reply_digest)=64 AND original_reply_digest NOT GLOB '*[^0-9a-f]*'),
 commit_seq INTEGER NOT NULL,
 PRIMARY KEY(session_id,request_id),
 UNIQUE(session_id,commit_seq),
 FOREIGN KEY(session_id,commit_seq) REFERENCES commit_record(session_id,commit_seq),
 CHECK((reply_kind='ordinary' AND snapshot_start_seq=0 AND snapshot_through_seq=0) OR
       (reply_kind='reconnect' AND ((snapshot_start_seq=0) OR (snapshot_start_seq>=1 AND snapshot_through_seq>=snapshot_start_seq))))
) STRICT;
CREATE TRIGGER journal_no_update BEFORE UPDATE ON journal BEGIN SELECT RAISE(ABORT,'immutable journal'); END;
CREATE TRIGGER journal_no_delete BEFORE DELETE ON journal BEGIN SELECT RAISE(ABORT,'immutable journal'); END;
CREATE TRIGGER accepted_no_update BEFORE UPDATE ON accepted_request BEGIN SELECT RAISE(ABORT,'immutable accepted result'); END;
CREATE TRIGGER accepted_no_delete BEFORE DELETE ON accepted_request BEGIN SELECT RAISE(ABORT,'immutable accepted result'); END;
CREATE TRIGGER commit_no_update BEFORE UPDATE ON commit_record BEGIN SELECT RAISE(ABORT,'immutable commit record'); END;
CREATE TRIGGER commit_no_delete BEFORE DELETE ON commit_record BEGIN SELECT RAISE(ABORT,'immutable commit record'); END;
CREATE TRIGGER run_capacity BEFORE INSERT ON run WHEN (SELECT count(*) FROM run WHERE session_id=NEW.session_id)>=32 BEGIN SELECT RAISE(ABORT,'run capacity'); END;
CREATE TRIGGER accepted_capacity BEFORE INSERT ON accepted_request WHEN (SELECT count(*) FROM accepted_request WHERE session_id=NEW.session_id)>=4096 BEGIN SELECT RAISE(ABORT,'accepted capacity'); END;
