"""Offline catalog consistency and local Markdown file-target checks.

Run from the repository root with `python scripts/validate_catalog.py`. This checks
published root/docs/.github Markdown, not vendored tooling documentation,
remote availability, heading fragments, or the truth of research claims.
"""

import argparse
from collections import Counter
from datetime import date
import json
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit


def validate_catalog(data, markdown):
    errors = []
    if not isinstance(data, dict) or data.get("schema_version") != 1:
        return ["catalog must be an object with schema_version 1"]
    repositories = data.get("repositories")
    stages = data.get("stage_definitions")
    if not isinstance(repositories, list) or not isinstance(stages, dict):
        return ["repositories must be a list and stage_definitions an object"]
    if not stages or any(not isinstance(v, str) or not v.strip() for v in stages.values()):
        return ["stage_definitions must contain nonempty labels"]
    for field in ("github_repository_count", "registered_record_count", "production_integrations_adopted"):
        if type(data.get(field)) is not int or data[field] < 0:
            errors.append(f"{field} must be a nonnegative integer")
    if data.get("github_repository_count") != len(repositories):
        errors.append("github_repository_count does not match repositories")
    try:
        date.fromisoformat(data.get("updated", ""))
    except (ValueError, TypeError):
        errors.append("updated must be an ISO date")

    identities, ids = [], []
    adopted = 0
    anchors = list(re.finditer(r'<a\s+id="([^"]+)"\s*></a>', markdown))
    sections = {}
    for index, match in enumerate(anchors):
        end = anchors[index + 1].start() if index + 1 < len(anchors) else len(markdown)
        sections.setdefault(match[1], []).append(markdown[match.end():end])
    required = ("id", "repository", "canonical_repository", "url", "name", "layer", "stage", "purpose", "fit", "disposition", "next_gate", "evidence_basis")
    for index, record in enumerate(repositories):
        prefix = f"repositories[{index}]"
        if not isinstance(record, dict):
            errors.append(f"{prefix} must be an object")
            continue
        invalid = [key for key in required if not isinstance(record.get(key), str) or not record[key].strip()]
        if invalid:
            errors.append(f"{prefix}: missing or invalid fields: {', '.join(invalid)}")
            continue
        identities.append(record["canonical_repository"].casefold())
        ids.append(record["id"])
        if not re.fullmatch(r"[\w.-]+/[\w.-]+", record["canonical_repository"]):
            errors.append(f"{prefix}: invalid canonical repository identity")
        if record["url"].rstrip("/").casefold() != ("https://github.com/" + record["canonical_repository"]).casefold():
            errors.append(f"{prefix}: URL does not match canonical repository")
        if record["stage"] not in stages:
            errors.append(f"{prefix}: unknown stage {record['stage']!r}")
        flag = record.get("adopted_integration")
        if type(flag) is not bool or flag != (record["stage"] == "adopted"):
            errors.append(f"{prefix}: adopted_integration contradicts stage or is not boolean")
        adopted += flag is True
        for field in ("source_records", "evidence_dates", "recorded_revisions"):
            values = record.get(field)
            if not isinstance(values, list) or any(not isinstance(v, str) or not v.strip() for v in values):
                errors.append(f"{prefix}: {field} must be a list of nonempty strings")
        for value in record.get("evidence_dates", []) if isinstance(record.get("evidence_dates"), list) else []:
            try:
                date.fromisoformat(value)
            except (ValueError, TypeError):
                errors.append(f"{prefix}: invalid evidence date")
        matching = sections.get(record["id"], [])
        if len(matching) != 1:
            errors.append(f"{prefix}: expected exactly one Markdown anchor for {record['id']}")
        elif f"]({record['url']})" not in matching[0] or f"**{stages.get(record['stage'])}**" not in matching[0]:
            errors.append(f"{prefix}: Markdown URL or stage differs from JSON")
    for field, values in (("canonical repository", identities), ("id", ids)):
        for value, count in Counter(values).items():
            if count > 1:
                errors.append(f"duplicate {field}: {value}")
    if data.get("production_integrations_adopted") != adopted:
        errors.append("production_integrations_adopted does not match adopted records")
    count_match = re.search(r"\*\*(\d+) GitHub repositories\*\*", markdown)
    if not count_match or int(count_match[1]) != len(repositories):
        errors.append("Markdown GitHub repository count does not match JSON")
    register_match = re.search(r"\*\*(\d+) entries\*\*", markdown)
    if not register_match or int(register_match[1]) != data.get("registered_record_count"):
        errors.append("Markdown registered entry count does not match JSON")
    return errors


def validate_document_links(root):
    """Check inline and reference link file targets; skip fenced/inline code."""
    root = Path(root).resolve()
    documents = sorted(set(root.glob("*.md")) | set((root / "docs").rglob("*.md")) | set((root / ".github").rglob("*.md")))
    errors = []
    for document in documents:
        text = document.read_text(encoding="utf-8")
        text = re.sub(r"(?ms)^\s*(`{3,}|~{3,})[^\n]*\n.*?^\s*\1\s*$", "", text)
        text = re.sub(r"`[^`\n]*`", "", text)
        targets = re.findall(r"!?\[[^\]\n]*\]\(\s*(<[^>]+>|[^\s()]+(?:\([^()]*\)[^\s()]*)*)", text)
        targets += re.findall(r"(?m)^\s*\[[^\]\n]+\]:\s*(<[^>]+>|\S+)", text)
        for target in targets:
            target = target.strip("<>")
            parsed = urlsplit(target)
            if parsed.scheme or parsed.netloc or not parsed.path:
                continue
            path = unquote(parsed.path)
            destination = (root / path.lstrip("/") if path.startswith("/") else document.parent / path).resolve()
            if not destination.is_relative_to(root) or not destination.exists():
                errors.append(f"{document.relative_to(root)}: missing or outside-repository link target {target}")
    return errors, len(documents)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    try:
        data = json.loads((args.root / "docs/repository-catalog.json").read_text(encoding="utf-8"))
        markdown = (args.root / "docs/repository-catalog.md").read_text(encoding="utf-8")
        errors = validate_catalog(data, markdown)
        link_errors, count = validate_document_links(args.root)
        errors.extend(link_errors)
    except (OSError, ValueError) as error:
        print(f"Validation failed: {error}", file=sys.stderr)
        return 1
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print(f"Validated {len(data['repositories'])} repository records and local file links in {count} Markdown documents.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
