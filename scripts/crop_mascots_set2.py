from pathlib import Path

from PIL import Image

SRC = Path(
    r"C:\Users\sergi\.cursor\projects\c-Users-sergi-Projects-stoichiometry-study\assets"
    r"\c__Users_sergi_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"62df2de810a05a4b1e9644ea23c34396_images_image-da8b51a6-0e6f-41e4-8704-f4613dbcbbcc.jpg"
)
OUT = Path(__file__).resolve().parents[1] / "images" / "mascots"
OUT.mkdir(parents=True, exist_ok=True)

im = Image.open(SRC).convert("RGBA")
# 3x3 grid on 1024x1024; crop character bodies, skip name buttons
cell_w, cell_h = 1024 / 3, 1024 / 3
crops = {
    "nitrogen.png": (0, 0),
    "potassium.png": (1, 0),
    "magnesium.png": (2, 0),
    "calcium.png": (0, 1),
    "sulfur.png": (1, 1),
    "fluorine.png": (2, 1),
    "aluminum.png": (0, 2),
    "copper.png": (1, 2),
    "lead.png": (2, 2),
}

bg = (245, 239, 228)


def knock_out_cream(img: Image.Image, threshold: int = 30) -> Image.Image:
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


for name, (col, row) in crops.items():
    x0 = int(col * cell_w) + 18
    y0 = int(row * cell_h) + 8
    x1 = int((col + 1) * cell_w) - 18
    y1 = int(row * cell_h + cell_h * 0.78)  # stop before label button
    piece = im.crop((x0, y0, x1, y1))
    piece = knock_out_cream(piece)
    bbox = piece.getbbox()
    if bbox:
        piece = piece.crop(bbox)
    piece.save(OUT / name)
    print(name, piece.size)
