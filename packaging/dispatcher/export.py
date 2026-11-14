"""Regenerate only the already-public dispatcher inventory; never publish.

This is the public-layout migration mode, not the development-source exporter.
It cannot add private or newly developed dispatcher files to the inventory.
"""
import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath

LEGACY_PIN = 'ec6d7ff58c29bc9fb9ed7d2f990640e93303290f9304535ae95a340d9acb695e'
OBSERVED_README = 'bb50a7f0e444fbcc4005b16410c7ad4aa04a6fb426ca701e72ba303a206d3f20'
OLD_PATH = b'cd tools/development-dispatcher'
NEW_PATH = b'cd tools/dispatcher'


def digest(raw):
    return hashlib.sha256(raw).hexdigest()


def export(destination, component=None):
    component = Path(component) if component else Path(__file__).resolve().parents[2] / 'tools/dispatcher'
    destination = Path(destination)
    if destination.exists():
        raise ValueError('Export destination must not exist')
    manifest = json.loads((component / 'export-manifest.json').read_text(encoding='utf-8'))
    payload = {}
    reconciled = False
    for name, expected in manifest['files'].items():
        relative = PurePosixPath(name)
        if relative.is_absolute() or '..' in relative.parts or '\\' in name:
            raise ValueError('Unsafe manifest path')
        path = component / name
        if path.is_symlink() or not path.is_file() or not path.resolve().is_relative_to(component.resolve()):
            raise ValueError('Nonregular or escaped source: ' + name)
        raw = path.read_bytes()
        actual = digest(raw)
        if actual != expected:
            if not (name == 'README.md' and expected == LEGACY_PIN and actual == OBSERVED_README and raw.count(OLD_PATH) == 1):
                raise ValueError('Hash mismatch: ' + name)
            reconciled = True
        if name == 'README.md':
            if raw.count(OLD_PATH) == 1:
                raw = raw.replace(OLD_PATH, NEW_PATH)
            elif raw.count(NEW_PATH) != 1:
                raise ValueError('Unexpected README command')
        payload[name] = raw
    # Validate the entire inventory before writing any output.
    destination.mkdir(parents=True)
    for name, raw in payload.items():
        path = destination / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(raw)
    manifest['files'] = {name: digest(raw) for name, raw in payload.items()}
    (destination / 'export-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
    return {'files': len(payload), 'preexisting_readme_pin_reconciled': reconciled}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('destination', type=Path)
    print(json.dumps(export(parser.parse_args().destination)))
