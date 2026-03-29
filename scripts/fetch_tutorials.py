import json
import os
import urllib.parse
import urllib.request

API_BASE = "https://api.github.com/repos/SoniaPujolLab/SlicerTutorialMakerCollection/contents/Tutorials"
RAW_BASE = "https://raw.githubusercontent.com/SoniaPujolLab/SlicerTutorialMakerCollection/main/Tutorials"

LANG_NAMES = {
    "en-US": "English",       "en_US": "English",
    "pt-BR": "Portuguese (BR)", "pt_BR": "Portuguese (BR)",
    "pt-PT": "Portuguese (PT)", "pt_PT": "Portuguese (PT)",
    "es":    "Spanish",
    "es-419": "Spanish (Latin America)", "es_419": "Spanish (Latin America)",
    "fr":    "French",  "fr-FR": "French",  "fr_FR": "French",
    "de":    "German",  "de-DE": "German",  "de_DE": "German",
    "it":    "Italian", "it-IT": "Italian",
    "zh-CN": "Chinese (Simplified)", "zh_CN": "Chinese (Simplified)",
    "ja-JP": "Japanese",
    "ko-KR": "Korean",
    "ar-SA": "Arabic",  "ar_SA": "Arabic",
}

def get_lang_label(code: str) -> str:
    return LANG_NAMES.get(code) or LANG_NAMES.get(code.replace("-", "_")) or code

def fetch_json(url: str, token: str | None = None) -> list | dict:
    req = urllib.request.Request(url)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("User-Agent", "SlicerLatinAmerica-fetch-tutorials")
    if token:
        req.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read())

def main() -> None:
    token = os.environ.get("GITHUB_TOKEN")

    print("Fetching top-level tutorial folders…")
    top = fetch_json(API_BASE, token)
    folders = [f["name"] for f in top if f["type"] == "dir" and f["name"].startswith("STC-")]
    print(f"Found {len(folders)} tutorial folder(s): {folders}")

    result: dict[str, list[dict]] = {}

    for folder in folders:
        print(f"  Processing {folder}…")
        try:
            lang_dirs = fetch_json(f"{API_BASE}/{folder}/Files", token)
            dirs = [f for f in lang_dirs if f["type"] == "dir"]
        except Exception as exc:
            print(f"    Warning: could not list Files/ for {folder}: {exc}")
            continue

        languages = []
        for d in dirs:
            try:
                files = fetch_json(f"{API_BASE}/{folder}/Files/{d['name']}", token)
                md_file = next(
                    (f for f in files if f["type"] == "file" and f["name"].endswith(".md")),
                    None,
                )
                if md_file:
                    raw_url = f"{RAW_BASE}/{folder}/Files/{d['name']}/{md_file['name']}"
                    viewer_url = "md-viewer.html?file=" + urllib.parse.quote(raw_url, safe="")
                    languages.append({"label": get_lang_label(d["name"]), "url": viewer_url})
            except Exception as exc:
                print(f"    Warning: could not process lang {d['name']}: {exc}")

        if languages:
            result[folder] = languages
            print(f"    {len(languages)} language(s): {[l['label'] for l in languages]}")

    out_path = os.path.join(
        os.path.dirname(__file__), "..", "public", "assets", "data", "tutorials.json"
    )
    out_path = os.path.normpath(out_path)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)

    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)

    print(f"Written {out_path} ({len(result)} tutorials)")

if __name__ == "__main__":
    main()
