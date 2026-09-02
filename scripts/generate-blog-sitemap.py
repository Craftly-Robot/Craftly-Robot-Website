#!/usr/bin/env python3
"""
Regenerate blog entries in public/sitemap.xml from src/data/blog/manifest.json.

Usage:
    python scripts/generate-blog-sitemap.py

Reads the manifest, strips any existing /resources/blog/* article entries from
the sitemap, and writes fresh entries sorted newest-first.
The /resources/blog listing entry is preserved.
"""

import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "src/data/blog/manifest.json"
SITEMAP = ROOT / "public/sitemap.xml"

if not MANIFEST.exists():
    sys.exit(f"manifest not found: {MANIFEST}")
if not SITEMAP.exists():
    sys.exit(f"sitemap not found: {SITEMAP}")

articles = json.loads(MANIFEST.read_text())

entries = []
for article in sorted(articles, key=lambda a: a["date"], reverse=True):
    entries.append(f"""  <url>
    <loc>https://craftlyrobot.com/resources/blog/{article['slug']}</loc>
    <lastmod>{article['date']}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>""")

new_block = "\n".join(entries)
sitemap = SITEMAP.read_text()

# Strip existing blog article entries (NOT the /resources/blog listing page)
# Blog article locs: /resources/blog/<slug>  (slug has word chars/hyphens, no trailing slash)
cleaned = re.sub(
    r"  <url>\n\s*<loc>https://craftlyrobot\.com/resources/blog/[\w-]+</loc>\n.*?</url>\n?",
    "",
    sitemap,
    flags=re.DOTALL,
)
cleaned = cleaned.strip() + "\n"

# Insert before closing </urlset>
cleaned = cleaned.replace("</urlset>", new_block + "\n</urlset>")

SITEMAP.write_text(cleaned)
print(f"sitemap updated: {len(articles)} blog entries")
