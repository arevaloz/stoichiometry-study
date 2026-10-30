"""Extract individual figures from illustrated PDFs (not full pages)."""
from __future__ import annotations

import json
import re
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]

JOBS = [
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

# Prefer these titles when first seen near an image (order matters).
FALLBACK_TITLES = {
    "ch6": [
        "Ionic Bonds: an Electron Moves",
        "Covalent Bonds: Electrons Are Shared",
        "Ball-and-Stick Models",
        "The Periodic Table Tells You the Charge",
        "The Criss-Cross Method",
        "Crystal Lattice vs. Separate Molecules",
        "Naming Flowchart",
        "Polyatomic Ions as Pictures",
    ],
    "ch7": [
        "Combination (Synthesis)",
        "Decomposition",
        "Single Replacement",
        "Double Replacement",
        "Combustion",
        "A Precipitate Forming",
        "Balancing, Drawn Out",
        "Oxidation and Reduction (Redox)",
        "Energy in Reactions: Exothermic vs. Endothermic",
    ],
    "stoich": [
        "A Mole Is a Counting Word",
        "The Mole Map",
        "The Recipe Analogy",
        "Mole Ratios as Particle Pictures",
        "Burning Ethanol Worked Example",
        "Limiting Reactant: Hot Dogs and Buns",
        "Percent Yield",
        "Enthalpy Stoichiometry: kJ per Mole",
    ],
}


def clean_title(text: str) -> str | None:
    text = " ".join(text.split())
    if not text:
        return None
    match = re.search(
        r"(\d+\.\s+[A-Z][^.]{3,80})",
        text,
    )
    if match:
        return match.group(1).strip(" .")
    # Short heading-like lines
    if 8 <= len(text) <= 70 and text[0].isupper():
        return text.rstrip(" .")
    return None


def extract_pixmap(doc: fitz.Document, xref: int) -> fitz.Pixmap:
    pix = fitz.Pixmap(doc, xref)
    if pix.n - pix.alpha > 3:  # CMYK etc.
        pix = fitz.Pixmap(fitz.csRGB, pix)
    if pix.alpha:
        pix = fitz.Pixmap(pix, 0)  # drop alpha
    return pix


def extract_album(pdf_path: Path, out_dir: Path, key: str) -> list[dict]:
    out_dir.mkdir(parents=True, exist_ok=True)
    for old in out_dir.glob("*"):
        if old.is_file():
            old.unlink()

    doc = fitz.open(pdf_path)
    seen: set[int] = set()
    items: list[dict] = []
    fallback = list(FALLBACK_TITLES[key])
    fallback_i = 0

    for page in doc:
        infos = sorted(
            page.get_image_info(xrefs=True),
            key=lambda info: (info["bbox"][1], info["bbox"][0]),
        )
        for info in infos:
            xref = info["xref"]
            w, h = info["width"], info["height"]
            if xref in seen:
                continue
            # Skip tiny icons / practice chips
            if w < 450 or h < 180:
                continue
            if w * h < 120_000:
                continue

            seen.add(xref)
            bbox = fitz.Rect(info["bbox"])
            above = page.get_textbox(
                fitz.Rect(bbox.x0, max(0, bbox.y0 - 48), bbox.x1, bbox.y0)
            )
            title = clean_title(above)
            if not title:
                if fallback_i < len(fallback):
                    title = fallback[fallback_i]
                    fallback_i += 1
                else:
                    title = f"Figure {len(items) + 1}"
            else:
                # Consume matching fallback if possible
                for i, candidate in enumerate(fallback):
                    if candidate.lower() in title.lower() or title.lower() in candidate.lower():
                        fallback.pop(i)
                        break
                else:
                    if fallback_i < len(fallback):
                        fallback_i += 1

            pix = extract_pixmap(doc, xref)
            name = f"fig-{len(items) + 1:02d}.png"
            pix.save(out_dir / name)
            items.append(
                {
                    "src": f"images/{key}/{name}",
                    "title": title,
                }
            )
            print(f"{key}: {name} {w}x{h} -> {title}")

    doc.close()
    return items


def main() -> None:
    catalog = {}
    for pdf_path, out_dir, key in JOBS:
        catalog[key] = extract_album(pdf_path, out_dir, key)
    print(json.dumps(catalog, indent=2))


if __name__ == "__main__":
    main()
