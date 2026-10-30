"""Crop each mascot sticker with a clean transparent background + padding."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "images" / "mascots"
OUT.mkdir(parents=True, exist_ok=True)

SET1 = Path(
    r"C:\Users\sergi\.cursor\projects\c-Users-sergi-Projects-stoichiometry-study\assets"
    r"\c__Users_sergi_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"62df2de810a05a4b1e9644ea23c34396_images_image-58fb86a9-bf93-4ccb-b12d-6b0d03414ce0.png"
)
SET2 = Path(
    r"C:\Users\sergi\.cursor\projects\c-Users-sergi-Projects-stoichiometry-study\assets"
    r"\c__Users_sergi_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"62df2de810a05a4b1e9644ea23c34396_images_image-da8b51a6-0e6f-41e4-8704-f4613dbcbbcc.jpg"
)


def sample_paper(img: Image.Image) -> tuple[int, int, int]:
    """Median of bright, low-sat edge pixels so character corners can't bias the sample."""
    w, h = img.size
    rgb = img.convert("RGB")
    pts: list[tuple[int, int]] = []
    for x in range(0, w, max(1, w // 24)):
        pts.append((x, 2))
        pts.append((x, h - 3))
    for y in range(0, h, max(1, h // 24)):
        pts.append((2, y))
        pts.append((w - 3, y))
    creamish: list[tuple[int, int, int]] = []
    for p in pts:
        r, g, b = rgb.getpixel(p)
        sat = max(r, g, b) - min(r, g, b)
        if min(r, g, b) >= 200 and sat < 48:
            creamish.append((r, g, b))
    if not creamish:
        creamish = [rgb.getpixel((2, 2))]
    creamish.sort()
    return creamish[len(creamish) // 2]


def is_paper_pixel(r: int, g: int, b: int, paper: tuple[int, int, int]) -> bool:
    sat = max(r, g, b) - min(r, g, b)
    mn = min(r, g, b)
    # Warm cream page (matched to sampled paper)
    if (
        abs(r - paper[0]) <= 42
        and abs(g - paper[1]) <= 42
        and abs(b - paper[2]) <= 42
        and sat < 50
        and mn >= 185
    ):
        return True
    # Any bright desaturated page tone / watermark (orbits are darker/metallic)
    if mn >= 215 and sat < 40:
        return True
    if mn >= 200 and sat < 18:
        return True
    return False


def knock_out_paper(img: Image.Image) -> Image.Image:
    """Transparentize paper without eating saturated character / orbit colors."""
    img = img.convert("RGBA")
    paper = sample_paper(img)
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a and is_paper_pixel(r, g, b, paper):
                px[x, y] = (0, 0, 0, 0)
    return img


def finalize(piece: Image.Image, name: str) -> None:
    bbox = piece.getbbox()
    if not bbox:
        print(f"{name}: EMPTY")
        return
    piece = ImageOps.expand(piece.crop(bbox), border=56, fill=(0, 0, 0, 0))
    piece.save(OUT / name, optimize=True)
    print(f"{name}: {piece.size}")


def wipe_edge_crumbs(img: Image.Image, band: int = 4) -> Image.Image:
    """Remove thin neighbor scraps stuck to the crop border."""
    w, h = img.size
    px = img.load()
    for y in range(h):
        for x in range(w):
            if min(x, y, w - 1 - x, h - 1 - y) < band and px[x, y][3]:
                # Only wipe if this looks like a scrap (not the main body near center)
                # Keep anything that's part of a thick run toward the center — handled by
                # only wiping isolated-ish edge pixels: low alpha or small local mass.
                r, g, b, a = px[x, y]
                if a < 180:
                    px[x, y] = (0, 0, 0, 0)
                    continue
                # Count opaque neighbors in a 5x5 — scraps are sparse
                n = 0
                for dy in range(-2, 3):
                    for dx in range(-2, 3):
                        nx, ny = x + dx, y + dy
                        if 0 <= nx < w and 0 <= ny < h and px[nx, ny][3] > 40:
                            n += 1
                if n < 10:
                    px[x, y] = (0, 0, 0, 0)
    return img


def export_grid(src: Path, names: list[str], cols: int, rows: int) -> None:
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    cw, ch = w / cols, h / rows
    # Minimal inset — source cells already clip orbits; don't trim further
    x_inset, y_inset = 0.006, 0.01
    i = 0
    for row in range(rows):
        for col in range(cols):
            x0 = int(col * cw + cw * x_inset)
            y0 = int(row * ch + ch * y_inset)
            x1 = int((col + 1) * cw - cw * x_inset)
            y1 = int((row + 1) * ch - ch * y_inset)
            cell = im.crop((x0, y0, x1, y1))
            cell = knock_out_paper(cell)
            cell = wipe_edge_crumbs(cell, band=3)
            finalize(cell, names[i])
            i += 1


def main() -> None:
    export_grid(
        SET1,
        ["sodium.png", "chlorine.png", "oxygen.png", "hydrogen.png", "carbon.png", "iron.png"],
        cols=2,
        rows=3,
    )
    export_grid(
        SET2,
        [
            "nitrogen.png",
            "potassium.png",
            "magnesium.png",
            "calcium.png",
            "sulfur.png",
            "fluorine.png",
            "aluminum.png",
            "copper.png",
            "lead.png",
        ],
        cols=3,
        rows=3,
    )


if __name__ == "__main__":
    main()
