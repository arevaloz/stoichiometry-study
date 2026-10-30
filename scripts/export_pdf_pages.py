import json
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]

jobs = [
    (
        Path(r"C:\Users\sergi\OneDrive\Documents\illustrated_ch6_compounds.pdf"),
        ROOT / "images" / "ch6",
        "ch6",
    ),
    (
        Path(r"C:\Users\sergi\OneDrive\Documents\illustrated_ch7_reactions.pdf"),
        ROOT / "images" / "ch7",
        "ch7",
    ),
    (
        Path(r"C:\Users\sergi\OneDrive\Documents\illustrated_stoichiometry.pdf"),
        ROOT / "images" / "stoich",
        "stoich",
    ),
]

titles = {
    "ch6": [
        "Ionic & covalent bonds; ball-and-stick",
        "Charges, criss-cross, lattice vs molecules",
        "Naming flowchart",
        "Polyatomic ions & practice",
        "Answer key",
    ],
    "ch7": [
        "Five reaction types (particle pictures)",
        "Precipitate forming",
        "Balancing charts & redox intro",
        "Redox & energy diagrams",
        "Practice problems",
        "Answer key",
    ],
    "stoich": [
        "Mole & mole map",
        "Recipe, ratios, ethanol example",
        "Limiting reactant, yield, enthalpy",
        "Enthalpy examples & practice",
        "Practice & answer key",
    ],
}

catalog = {}
for pdf_path, out_dir, key in jobs:
    out_dir.mkdir(parents=True, exist_ok=True)
    for old in out_dir.glob("*.png"):
        old.unlink()
    doc = fitz.open(pdf_path)
    items = []
    for i, page in enumerate(doc):
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        name = f"page-{i + 1:02d}.png"
        pix.save(out_dir / name)
        title = titles[key][i] if i < len(titles[key]) else f"Page {i + 1}"
        items.append({"src": f"images/{key}/{name}", "title": title})
        print(f"saved {key}/{name} {pix.width}x{pix.height}")
    catalog[key] = items
    doc.close()

print(json.dumps(catalog, indent=2))
