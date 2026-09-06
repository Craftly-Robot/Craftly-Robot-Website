# Craftly Website — SEO / Performance / Optimization Implementation Plan

> **INTERNAL DOCUMENT — DO NOT COMMIT OR PUSH.**
> This file is git-ignored and must never reach production or GitHub.
> Work through items in order. Check off only after browser + build verification.

---

## Status Legend

- [ ] Pending
- [~] In progress
- [x] Done (verified: build passes + relevant routes tested in browser)

---

## Phase 1 — Bundle / Performance (quick code wins)
> **STATUS (2026-08-23): DONE & PUSHED.** Main bundle 540 KB → 268 KB. DropdownIcon replaced with pure CSS plus↔minus morph; terminal checkmark → SVG stroke-draw; NotFoundPage lazy-loads lottie into its own chunk.

### 1.1 Remove lottie-web (~260 KB) from the main bundle
Main chunk is ~540 KB largely because `lottie-react` is imported eagerly.

- `src/components/ui/DropdownIcon.tsx` — navbar dropdown icons (loaded on EVERY page)
  - Preferred: replace with a lightweight CSS/SVG chevron rotation animation (matches design tokens, no library)
  - Alternative: `React.lazy` the lottie component
- `src/pages/NotFoundPage.tsx` — lazy-load the lottie component via dynamic import
- `src/pages/use-cases/components/ProjectWorkflowTerminal.tsx` — lazy-load or replace

**Verify:** `bun run build` — main JS chunk should drop well below 300 KB; navbar dropdowns still animate correctly on all routes; reduced-motion behavior preserved.

### 1.2 Video preload hardening
> **STATUS: DONE.** `preload="metadata"` added to VideoShowcase.
- Add explicit `preload="none"` (or `"metadata"` if poster-only UX requires it) to `<video>` in `VideoShowcase.tsx` and `ProductShowcase.tsx`
- Keep existing IntersectionObserver play, poster, error fallback untouched

**Verify:** video sections on affected pages still behave identically when real videos are supplied.

### 1.3 Font strategy (optional, lower priority)
- Consider self-hosting Google Fonts (Inter, JetBrains Mono, Outfit, Grand Hotel) with `font-display: swap` to remove external requests
- Do NOT change font families or weights — visual regression risk

**Verify:** identical rendering across routes; no FOUT regressions.

---

## Phase 2 — Image Optimization (largest payload win)
> **STATUS (2026-08-23): DONE & PUSHED.** All referenced raster assets converted to WebP q80 via ffmpeg. public/assets 9.1 MB → 2.7 MB; dist/assets 11 MB → 4.4 MB. `aggrements/` renamed to `agreements/`, all refs updated, all references verified to resolve. Deleted unused onboarding_pic/23.png.

Current state: 9.1 MB assets, almost entirely unoptimized PNG/JPEG.

### 2.1 Convert raster images to WebP (and AVIF where beneficial)

Targets (by size):
| Directory | Size | Action |
|---|---|---|
| `public/assets/onboarding_pic/` | 4.8 MB | PNG → WebP, quality ~80 |
| `public/assets/Craftly_Workspace/` | 1.7 MB | JPEG → WebP |
| `public/assets/Craftly_Robot/` | 1.5 MB | JPEG → WebP |
| `public/assets/aggrements/` | 576 KB | WebP + fix directory name typo (`agreements/`) |

Rules:
- Use `cwebp` / `sharp` script; target ≥60% size reduction
- Keep originals out of the repo once converted (replace references, then delete old files)
- Update ALL references (grep old filenames before deleting anything)
- Preserve aspect ratios; never stretch/crop

### 2.2 Fix favicon

> **STATUS: DONE.** Converted logo JPEG → `favicon.png`, updated `<link rel="icon">`.
- Replace `photo_2026-08-12_19-27-43.jpg` favicon with proper multi-size `.ico`/PNG set or SVG from real brand assets
- Update `<link rel="icon">` type accordingly

### 2.3 Reference audit
After conversion, grep for every replaced filename across `src/` to ensure zero broken images.

**Verify:** run site locally, spot-check image-heavy pages (`/`, `/products/workspace`, `/products/robot`, use-case pages); confirm no broken images; compare dist size before/after.

---

## Phase 3 — SEO
> **STATUS (2026-08-23): DONE & PUSHED.** Organization JSON-LD in index.html; FAQPage JSON-LD (12 Q&As) via Helmet; broken OG image default fixed in index.html + SEO.tsx (now real logo asset with width/height/alt); sitemap expanded 6 → 63 URLs. Note: pages Blog/FAQ/Press/Plan/Salary were already covered by ResourceLayout/DocsLayout — no change needed.

### 3.1 JSON-LD structured data
Currently zero structured data exists.

- Add `Organization` schema (global — index.html or Layout-level)
- Add `SoftwareApplication`/`Product` schema on `/products/workspace` and `/products/robot`
- Add `FAQPage` schema on FAQ page (must mirror visible FAQ content exactly)
- Add `BreadcrumbList` on documentation sub-pages
- Validate with Google Rich Results Test / schema.org validator

### 3.2 Per-page SEO coverage
Pages currently missing their own `<SEO>`:
- BlogPage, FAQPage, PressPage, PlanPage, SalaryCompensationPage
(Workspace/Robot docs sub-pages are covered by `DocsLayout.tsx`.)

Use the existing `src/components/SEO.tsx` component — do not add another mechanism.

### 3.3 Fix broken default OG image
- `src/components/SEO.tsx` defaults to `/og-image.jpg` which does not exist
- Point it at a real asset (e.g. `craftly-og.png` used in index.html) and add `og:image:width`, `og:image:height`, `og:image:alt`

### 3.4 Sitemap completeness
- Audit `public/sitemap.xml` against all 66 routes in `src/App.tsx`
- Add missing URLs, refresh `<lastmod>`, confirm priorities are sane
- Confirm robots.txt sitemap URL matches final domain

### 3.5 Meta content quality
- Review titles/descriptions for uniqueness and length (<60 char titles, <160 char descriptions) per page

**Verify:** build passes; view page sources locally to confirm per-route title/meta/JSON-LD output; test one route's rendered head in the browser devtools.

---

## Phase 4 — Follow-ups (do NOT start without approval)

- React.memo / render profiling pass (only after measuring with React DevTools profiler)
- Lighthouse CI baseline tracking
- Accessibility audit pass beyond alt attributes (focus traps, keyboard nav on dropdowns/mobile menu)
- Self-hosted analytics decision (none requested — do not add unrequested features)
- Rename typo'd asset directories referenced anywhere else (search first)

---

## Verification checklist (applies to EVERY phase)

- [ ] `bun run lint` clean
- [ ] `bun run build` succeeds, no new warnings introduced
- [ ] Routes tested: `/`, `/download`, `/products/workspace`, `/products/robot`, `/use-cases/*`, `/resources/documentation`
- [ ] No visual regressions vs current production look
- [ ] Mobile layout unaffected
- [ ] Reduced-motion preferences still respected
