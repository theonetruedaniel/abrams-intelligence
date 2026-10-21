"""Regression checks use synthetic records and temporary documents only."""

import copy
import importlib.util
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

SCRIPT = Path(__file__).resolve().parents[1] / "scripts/validate_catalog.py"
SPEC = importlib.util.spec_from_file_location("validate_catalog", SCRIPT)
validator = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(validator)


class CatalogTests(unittest.TestCase):
    def setUp(self):
        self.data = {
            "schema_version": 1,
            "updated": "2026-10-21",
            "github_repository_count": 1,
            "registered_record_count": 2,
            "production_integrations_adopted": 0,
            "stage_definitions": {"collected": "Collected reference", "adopted": "Adopted integration"},
            "repositories": [{
                "id": "example-tool", "repository": "example/tool",
                "canonical_repository": "example/tool", "url": "https://github.com/example/tool",
                "name": "Example", "layer": "Tools", "stage": "collected",
                "purpose": "Fixture", "fit": "Fixture", "disposition": "Unverified",
                "next_gate": "Evaluate", "evidence_basis": "Synthetic fixture",
                "source_records": [], "evidence_dates": ["2026-10-21"],
                "recorded_revisions": [], "adopted_integration": False,
            }],
        }
        self.markdown = ('**1 GitHub repositories**, **2 entries**\n'
                         '<a id="example-tool"></a>\n'
                         '[example/tool](https://github.com/example/tool) · **Collected reference**\n')

    def test_valid_catalog(self):
        self.assertEqual(validator.validate_catalog(self.data, self.markdown), [])

    def test_bad_shapes_and_missing_fields(self):
        for malformed in ([], {}, {"schema_version": 1, "repositories": "wrong"}):
            with self.subTest(malformed=malformed):
                self.assertTrue(validator.validate_catalog(malformed, self.markdown))
        del self.data["repositories"][0]["purpose"]
        self.assertTrue(validator.validate_catalog(self.data, self.markdown))

    def test_stale_counts(self):
        self.data["github_repository_count"] = 99
        errors = validator.validate_catalog(self.data, self.markdown.replace("2 entries", "3 entries"))
        self.assertTrue(any("github_repository_count" in error for error in errors))
        self.assertTrue(any("registered entry count" in error for error in errors))

    def test_duplicate_identity_even_with_different_case(self):
        duplicate = copy.deepcopy(self.data["repositories"][0])
        duplicate["canonical_repository"] = "Example/Tool"
        self.data["repositories"].append(duplicate)
        errors = validator.validate_catalog(self.data, self.markdown)
        self.assertTrue(any("duplicate canonical repository" in error for error in errors))
        self.assertTrue(any("duplicate id" in error for error in errors))

    def test_false_adoption_and_unknown_stage(self):
        self.data["repositories"][0]["adopted_integration"] = True
        self.data["repositories"][0]["stage"] = "production-ready"
        errors = validator.validate_catalog(self.data, self.markdown)
        self.assertTrue(any("unknown stage" in error for error in errors))
        self.assertTrue(any("contradicts stage" in error for error in errors))
        self.assertTrue(any("production_integrations_adopted" in error for error in errors))

    def test_url_identity_and_markdown_drift(self):
        self.data["repositories"][0]["url"] = "https://github.com/example/other"
        errors = validator.validate_catalog(self.data, self.markdown)
        self.assertTrue(any("canonical repository" in error for error in errors))
        self.assertTrue(any("Markdown URL or stage" in error for error in errors))

    def test_missing_or_duplicate_anchor(self):
        for markdown in (self.markdown.replace('id="example-tool"', 'id="other"'), self.markdown * 2):
            with self.subTest(markdown=markdown):
                self.assertTrue(any("exactly one Markdown anchor" in error for error in validator.validate_catalog(self.data, markdown)))

    def test_invalid_evidence_date(self):
        self.data["repositories"][0]["evidence_dates"] = ["2026-02-30"]
        self.assertTrue(any("invalid evidence date" in error for error in validator.validate_catalog(self.data, self.markdown)))


class DocumentTests(unittest.TestCase):
    def test_local_links_with_fragments_and_reference_links(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "docs").mkdir()
            (root / "docs/a file.md").write_text("# Target", encoding="utf-8")
            (root / "README.md").write_text(
                '[Target](docs/a%20file.md#target)\n[reference]: <docs/a file.md>\n'
                '[Remote](https://example.invalid/missing)\n[Anchor](#local)\n'
                '```markdown\n[Example](missing.md)\n```\n`[Inline](missing.md)`\n', encoding="utf-8")
            errors, count = validator.validate_document_links(root)
            self.assertEqual(errors, [])
            self.assertEqual(count, 2)

    def test_missing_link_and_escape_rejected(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "README.md").write_text('[Missing](docs/missing.md)\n[Escape](../outside.md)\n', encoding="utf-8")
            errors, _ = validator.validate_document_links(root)
            self.assertEqual(len(errors), 2)

    def test_cli_rejects_malformed_json(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "docs").mkdir()
            (root / "docs/repository-catalog.json").write_text("{broken", encoding="utf-8")
            result = subprocess.run([sys.executable, str(SCRIPT), "--root", str(root)], capture_output=True, text=True)
            self.assertEqual(result.returncode, 1)
            self.assertIn("Validation failed", result.stderr)


if __name__ == "__main__":
    unittest.main()
