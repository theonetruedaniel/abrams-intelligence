import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('public_export', ROOT / 'packaging/dispatcher/export.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class ExportTests(unittest.TestCase):
    def test_published_inventory_and_only_readme_change(self):
        source = ROOT / 'tools/dispatcher'
        with tempfile.TemporaryDirectory() as directory:
            out = Path(directory) / 'export'
            result = module.export(out, source)
            manifest = json.loads((out / 'export-manifest.json').read_text())
            original = json.loads((source / 'export-manifest.json').read_text())
            self.assertEqual(set(manifest['files']), set(original['files']))
            self.assertEqual(result['files'], len(original['files']))
            for name, sha in manifest['files'].items():
                raw = (out / name).read_bytes()
                self.assertEqual(module.digest(raw), sha)
                expected = (source / name).read_bytes()
                if name == 'README.md':
                    expected = expected.replace(module.OLD_PATH, module.NEW_PATH)
                self.assertEqual(raw, expected)

    def test_mismatch_writes_nothing(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / 'file.txt').write_text('changed')
            (root / 'export-manifest.json').write_text(json.dumps({'files': {'file.txt': 'bad'}}))
            with self.assertRaisesRegex(ValueError, 'Hash mismatch'):
                module.export(root / 'out', root)
            self.assertFalse((root / 'out').exists())

    def test_path_escape_rejected(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / 'export-manifest.json').write_text(json.dumps({'files': {'../outside': 'bad'}}))
            with self.assertRaisesRegex(ValueError, 'Unsafe manifest path'):
                module.export(root / 'out', root)

    def test_existing_destination_rejected(self):
        with tempfile.TemporaryDirectory() as directory:
            with self.assertRaisesRegex(ValueError, 'must not exist'):
                module.export(Path(directory))
