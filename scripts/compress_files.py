import argparse
import glob
import io
import os
import shutil
import subprocess
import sys
import tempfile
import zipfile

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required: pip install Pillow")

def find_ghostscript() -> str | None:
    # Prefer explicit PATH entries
    for name in ("gswin64c", "gswin32c", "gs"):
        found = shutil.which(name)
        if found:
            return found
    # Common Windows install locations
    for pattern in (
        r"C:\Program Files\gs\gs*\bin\gswin64c.exe",
        r"C:\Program Files (x86)\gs\gs*\bin\gswin32c.exe",
    ):
        matches = sorted(glob.glob(pattern), reverse=True)
        if matches:
            return matches[0]
    return None

def compress_pptx(path: str, quality: int, max_w: int, max_h: int) -> tuple[int, int]:
    original_size = os.path.getsize(path)

    with open(path, "rb") as f:
        original_data = f.read()

    try:
        buf = io.BytesIO()
        with zipfile.ZipFile(io.BytesIO(original_data), "r") as zin, \
             zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                data = zin.read(item.filename)
                if item.filename.startswith("ppt/media/"):
                    ext = os.path.splitext(item.filename)[1].lower()
                    if ext in (".png", ".jpg", ".jpeg", ".bmp", ".tiff", ".gif"):
                        try:
                            img = Image.open(io.BytesIO(data))
                            w, h = img.size
                            if w > max_w or h > max_h:
                                img.thumbnail((max_w, max_h), Image.LANCZOS)
                            out = io.BytesIO()
                            if ext in (".jpg", ".jpeg"):
                                img.convert("RGB").save(out, format="JPEG", quality=quality, optimize=True)
                            elif img.mode == "RGBA":
                                img.save(out, format="PNG", optimize=True)
                            else:
                                img.convert("RGB").save(out, format="JPEG", quality=quality, optimize=True)
                            data = out.getvalue()
                        except Exception as e:
                            print(f"    [warn] could not compress {item.filename}: {e}")
                zout.writestr(item, data)

        compressed = buf.getvalue()
        if len(compressed) < original_size:
            with open(path, "wb") as f:
                f.write(compressed)
            return original_size, len(compressed)
        return original_size, original_size

    except zipfile.BadZipFile:
        print(f"    [warn] not a valid zip/pptx, skipping: {path}")
        return original_size, original_size

def compress_pdf(path: str, gs_exe: str, preset: str) -> tuple[int, int]:
    original_size = os.path.getsize(path)

    with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tmp:
        tmp_path = tmp.name

    try:
        result = subprocess.run(
            [
                gs_exe,
                "-sDEVICE=pdfwrite",
                "-dCompatibilityLevel=1.5",
                f"-dPDFSETTINGS=/{preset}",
                "-dNOPAUSE", "-dQUIET", "-dBATCH",
                f"-sOutputFile={tmp_path}",
                path,
            ],
            capture_output=True,
            text=True,
        )
        if result.returncode != 0:
            print(f"    [warn] Ghostscript error for {os.path.basename(path)}: {result.stderr.strip()}")
            return original_size, original_size

        compressed_size = os.path.getsize(tmp_path)
        if compressed_size < original_size:
            shutil.move(tmp_path, path)
            return original_size, compressed_size
        return original_size, original_size

    finally:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)

def main():
    parser = argparse.ArgumentParser(description="Compress PPTX and PDF files in-place.")
    parser.add_argument("--root",       default=None,    help="Repo root (default: parent of scripts/)")
    parser.add_argument("--quality",    type=int, default=75,   help="JPEG quality for PPTX (default: 75)")
    parser.add_argument("--max-width",  type=int, default=1920, help="Max image width in PPTX (default: 1920)")
    parser.add_argument("--max-height", type=int, default=1080, help="Max image height in PPTX (default: 1080)")
    parser.add_argument("--gs",         default=None,    help="Path to Ghostscript executable")
    parser.add_argument("--pdf-preset", default="ebook",
                        choices=["screen", "ebook", "printer", "prepress"],
                        help="Ghostscript PDF quality preset (default: ebook)")
    parser.add_argument("--no-pptx",    action="store_true", help="Skip PPTX/PPT files")
    parser.add_argument("--no-pdf",     action="store_true", help="Skip PDF files")
    args = parser.parse_args()

    root = os.path.abspath(args.root) if args.root else \
           os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

    gs_exe = args.gs or find_ghostscript()
    if not args.no_pdf and not gs_exe:
        print("[warn] Ghostscript not found — PDF compression will be skipped.")
        print("       Install Ghostscript or pass --gs <path>.")
        args.no_pdf = True

    print(f"Root        : {root}")
    if not args.no_pptx:
        print(f"PPTX        : JPEG quality={args.quality}  max={args.max_width}x{args.max_height}")
    if not args.no_pdf:
        print(f"PDF         : Ghostscript preset=/{args.pdf_preset}  ({gs_exe})")
    print()

    total_before = total_after = pptx_count = pdf_count = 0

    for dirpath, subdirs, filenames in os.walk(root):
        subdirs[:] = [d for d in subdirs if d != ".git"]
        for fname in sorted(filenames):
            fpath = os.path.join(dirpath, fname)
            rel   = os.path.relpath(fpath, root)
            ext   = fname.lower().rsplit(".", 1)[-1]

            if not args.no_pptx and ext in ("pptx", "ppt"):
                before, after = compress_pptx(fpath, args.quality, args.max_width, args.max_height)
                pptx_count += 1
            elif not args.no_pdf and ext == "pdf":
                before, after = compress_pdf(fpath, gs_exe, args.pdf_preset)
                pdf_count += 1
            else:
                continue

            total_before += before
            total_after  += after
            saved = before - after
            pct   = (saved / before * 100) if before else 0
            tag   = f"(-{pct:.1f}%)" if saved > 0 else "(no change)"
            print(f"  {before/1048576:7.2f} MB -> {after/1048576:7.2f} MB  {tag:>12}   {rel}")

    print()
    print(f"PPTX/PPT processed : {pptx_count}")
    print(f"PDF processed      : {pdf_count}")
    print(f"Total before       : {total_before/1048576:.2f} MB")
    print(f"Total after        : {total_after/1048576:.2f} MB")
    if total_before:
        saved = total_before - total_after
        print(f"Total saved        : {saved/1048576:.2f} MB  ({saved/total_before*100:.1f}%)")

if __name__ == "__main__":
    main()
