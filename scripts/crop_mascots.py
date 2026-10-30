from pathlib import Path

from PIL import Image

SRC = Path(
    r"C:\Users\sergi\.cursor\projects\c-Users-sergi-Projects-stoichiometry-study\assets"
    r"\c__Users_sergi_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"62df2de810a05a4b1e9644ea23c34396_images_image-58fb86a9-bf93-4ccb-b12d-6b0d03414ce0.png"
)
OUT = Path(__file__).resolve().parents[1] / "images" / "mascots"
OUT.mkdir(parents=True, exist_ok=True)

# Approximate boxes for the 2x3 character grid (include character, skip label buttons)
crops = {
    "sodium.png": (40, 10, 470, 230),
    "chlorine.png": (540, 10, 980, 230),
    "oxygen.png": (40, 250, 470, 470),
    "hydrogen.png": (540, 250, 980, 470),
    "carbon.png": (40, 490, 470, 710),
    "iron.png": (540, 490, 980, 710),
}

im = Image.open(SRC).convert("RGBA")
bg = (245, 239, 228)  # cream-ish page background


def knock_out_cream(img: Image.Image, threshold: int = 28) -> Image.Image:
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if (
                abs(r - bg[0]) < threshold
                and abs(g - bg[1]) < threshold
                and abs(b - bg[2]) < threshold
            ):
                pixels[x, y] = (r, g, b, 0)
    return img


for name, box in crops.items():
    piece = im.crop(box)
    piece = knock_out_cream(piece)
    # Trim transparent edges
    bbox = piece.getbbox()
    if bbox:
        piece = piece.crop(bbox)
    piece.save(OUT / name)
    print(name, piece.size)
