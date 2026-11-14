"""Preview or execute serial, scoped Codex work with adaptive routing."""
from dataclasses import asdict
from pathlib import Path
import argparse
import json
import re
import sys
import signal
import threading
import subprocess
import time
from contextlib import contextmanager
from .contracts import validate_manifest, manifest_digest
from .journal import Journal, JournalError
from .policy import select_route
from .runner import validate_authorization, run_package, reconcile
from .live import qualified_client
from .protocol import ProtocolError
from .write_contracts import validate_write_manifest, validate_write_grant
from .write_runner import run_write_package
from .write_services import build_write_services
from .write_recovery import reconcile_write
from .qualification import qualify_selector


@contextmanager
def stop_signals():
    stop = threading.Event()
    signals = [signal.SIGINT]
    if hasattr(signal, 'SIGBREAK'):
        signals.append(signal.SIGBREAK)
    old = {sig: signal.getsignal(sig) for sig in signals}
    try:
        for sig in signals:
            signal.signal(sig, lambda *_: stop.set())
        yield stop
    finally:
        for sig, handler in old.items():
            signal.signal(sig, handler)


def load_json(path: str):
    file = Path(path)
    if file.stat().st_size > 4*1024*1024:
        raise ValueError("Input exceeds size limit")
    return json.loads(file.read_text(encoding="utf-8-sig"),
                      parse_constant=lambda value: (_ for _ in ()).throw(ValueError("Nonfinite JSON")))


def run_journal(workspace: Path, run_id: str):
    if not re.fullmatch(r"[A-Za-z0-9_-]{1,80}", run_id):
        raise ValueError("Invalid run ID")
    root = workspace.resolve(strict=True)
    path = root / ".dispatch-runs" / run_id / "journal.jsonl"
    if not path.resolve().is_relative_to(root):
        raise ValueError("Run path escapes workspace")
    return Journal(path)


def main(argv: list[str] | None = None) -> int:
    argv = list(sys.argv[1:] if argv is None else argv)
    if argv and argv[0].startswith("--") and argv[0] not in ("--help",):
        argv.insert(0, "preview")
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    preview = commands.add_parser("preview")
    preview.add_argument("--manifest", required=True)
    preview.add_argument("--catalog", required=True)
    preview.add_argument("--usage")
    execute = commands.add_parser("execute")
    execute.add_argument("--manifest", required=True)
    execute.add_argument("--authorization", required=True)
    qualify=commands.add_parser('qualify-selector')
    qualify.add_argument('--runtime',required=True)
    qualify.add_argument('--corpus',required=True)
    qualify.add_argument('--output',required=True)
    for name in ("status", "reconcile"):
        sub = commands.add_parser(name)
        sub.add_argument("--run", required=True)
        sub.add_argument("--workspace", default=".")
        if name == "reconcile":
            sub.add_argument("--authorization", required=True)
    if not argv:
        parser.print_help()
        return 0
    args = parser.parse_args(argv)
    try:
        if args.command == 'qualify-selector':
            with stop_signals() as stop:
                output=qualify_selector(load_json(args.runtime),load_json(args.corpus),args.output,stop)
            code=0 if output.get('state')=='evaluated' else 2
        elif args.command == "preview":
            raw = load_json(args.manifest)
            if not isinstance(raw, dict):
                raise ValueError('Manifest must be an object')
            validator = validate_write_manifest if raw.get('schema_version') == 2 else validate_manifest
            work = validator(raw, Path(raw["workspace"]))
            catalog = load_json(args.catalog)
            if not isinstance(catalog, dict) or not all(
                isinstance(k, str) and isinstance(v, list) and v
                and all(isinstance(e, str) for e in v) for k, v in catalog.items()
            ):
                raise ValueError("Invalid supplied model catalog")
            decision = select_route(work, catalog, load_json(args.usage) if args.usage else None, [])
            output = {"decision": asdict(decision), "manifest_digest": manifest_digest(work),
                      "evidence": "offline preview; supplied catalog not live verified", "dispatched": False}
            code = 0 if decision.action == "dispatch" else 2
        elif args.command == "execute":
            raw = load_json(args.manifest)
            if not isinstance(raw, dict):
                raise ValueError('Manifest must be an object')
            grant = load_json(args.authorization)
            editing = raw.get('schema_version') == 2
            if editing:
                work = validate_write_manifest(raw, Path(grant['workspace']))
                validate_write_grant(grant, work, grant['account_fingerprint'], time.time())
            else:
                work = validate_manifest(raw, Path(grant["workspace"]))
                validate_authorization(grant, manifest_digest(work), work["workspace"], work["max_attempts"])
                if work["allowed_actions"] != ["read"]:
                    raise ValueError("Writing requires schema 2")
            run_id = work['package_id'][:60] + '-' + manifest_digest(work)[:12]
            journal = run_journal(Path(work['workspace']), run_id)
            with stop_signals() as stop:
                if editing:
                    services = build_write_services(Path(work['workspace']), journal)
                    output = run_write_package(work, grant, services, stop)
                else:
                    client = qualified_client(work['workspace'])
                    try:
                        output = run_package(work, client, journal, grant, stop)
                    finally:
                        client.close()
            output = output | {'run_id': run_id}
            code = 0 if output.get('state') == 'completed' else 2
        else:
            journal = run_journal(Path(args.workspace), args.run)
            rows = journal.records()
            if not rows:
                raise ValueError("Run not found")
            if args.command == "reconcile":
                grant = load_json(args.authorization)
                if grant.get('schema_version') == 2:
                    output = reconcile_write(journal, grant)
                else:
                    row = rows[-1]
                    validate_authorization(grant, row["manifest_digest"], row["workspace"], 1)
                    if row.get("account_fingerprint") != grant["account_fingerprint"]:
                        raise ValueError("Account ownership mismatch")
                    client = qualified_client(row['workspace'])
                    try:
                        output = reconcile(journal, client, grant)
                    finally:
                        client.close()
                code = 0 if output.get('state') in ('reconciled', 'completed') else 2
            else:
                output, code = {"record_count": len(rows), "last": rows[-1], "dispatched": False}, 0
    except (KeyError, TypeError, ValueError, OSError, JournalError, ProtocolError, TimeoutError, subprocess.SubprocessError) as exc:
        output, code = {"state": "blocked", "reason": str(exc), "dispatched": False}, 2
    print(json.dumps(output, indent=2, ensure_ascii=False, allow_nan=False))
    return code


if __name__ == "__main__":
    raise SystemExit(main())
