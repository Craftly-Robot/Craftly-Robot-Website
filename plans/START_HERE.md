# START HERE

> Read this first when picking up work on the Craftly website.
> Last updated: 2026-08-23

---

## Current state (quick summary)

- Branch `bun-setup` — merged to company main via PR #2. CI green.
- Branch `content-architecture` — Phase A + B1 complete, pushed, ready for PR into main.
- All perf/SEO work live: 268 KB main bundle, WebP assets, JSON-LD, full sitemap, Playwright smoke tests in CI.

## Where to start next (in order)

### 1. Open the PR for `content-architecture`
The branch is verified and ready. Open PR → merge into `main`.
Check if fahmidhasan's navbar PR (#3) merged first — rebase if needed.

---

## Phase B — exact remaining work

### B1. Blog/article system — ✅ DONE (63b6ff0)
Nothing left except the polish item below:
- [ ] Auto-generate sitemap blog entries from `src/data/blog/articles.tsx`
      instead of manual sitemap edits

### B2. Fill 6 placeholder docs pages — ⏳ BLOCKED ON CONTENT
These pages exist and render, but show "Content coming soon":
- [ ] `src/pages/resources/workspace/organization/OrgStructurePage.tsx`
- [ ] `src/pages/resources/workspace/overview/WorkspaceStructurePage.tsx`
- [ ] `src/pages/resources/workspace/people-roles/AccessControlPage.tsx`
- [ ] `src/pages/resources/workspace/tasks-operations/TaskAssignmentPage.tsx`
- [ ] `src/pages/resources/workspace/tasks-operations/TaskEvidencePage.tsx`
- [ ] `src/pages/resources/workspace/resources/OrgResourcesPage.tsx`

Action: request real content from COO/domain owners.
Once content arrives: write it into each page following the DocPage
pattern used by sibling pages (e.g. DepartmentsPage), update
`tocItems`, then add JSON-LD/sitemap only if needed.

### B3. Brand asset cleanup — ⏳ PARTIALLY DONE
Already done earlier:
- [x] WebP conversion of all raster assets
- [x] `aggrements/` dir renamed to `agreements/`
- [x] PNG favicon replacing raw JPEG
Still to do:
- [ ] Dedicated 1200×630 OG image (needs design asset; currently using 500×500 logo)
      → drop into `public/assets/brand/craftly-og.png`
      → update `og:image` in `index.html` + default image in `src/components/SEO.tsx`
- [ ] Full favicon set (16×16, 32×32, apple-touch-icon)
- [ ] Rename Telegram-style asset filenames (`photo_2026-08-12_19-27-43.jpg`)
      to semantic names + grep-update all references
- [ ] Audit scattered asset dirs (`Bangladesh_Flag`, `Members`,
      `training_participation`...) for naming consistency

---

---

## Phase C — strategic decisions (after B, needs owner input)

Detailed implementation plan: `plans/phase-c-strategic.md`

| Phase | What | Effort | Blocked on |
|---|---|---|---|
| C1 | SSR/SSG migration (Vike) | 1–2 weeks | Owner decision |
| C2 | i18n / Bengali support | Weeks (content) | Owner decision + translations |
| C3 | Analytics (Plausible) | 1 day | Owner decision: tool choice |

**Recommended order:** C3 (fastest) → C1 (most impactful) → C2 (content-heavy)

---

## Key files

| What | Where |
|---|---|
| Full roadmap (A/B/C phases) | `plans/content-architecture-roadmap.md` |
| Completed SEO/perf plan | `plans/seo-performance-optimization.md` |
| Blog data model | `src/data/blog/articles.tsx` |
| Shared docs page primitive | `src/pages/resources/DocPage.tsx` |
| Smoke tests | `tests/smoke.spec.ts` (`bun run test:e2e`) |
| CI workflow | `.github/workflows/ci.yml` |

## Commands

```
bun run dev        # local dev server
bun run build      # typecheck + production build
bun run lint       # oxlint
bun run test:e2e   # playwright smoke tests (11 routes)
```

---

## Astro Migration (planned)

A migration from React SPA to Astro is planned for better performance on this content-heavy site.

**Plan:** `plans/astro-migration.md`
**Branch:** `plan/astro-migration`
**Spike:** `spike/vike-ssr` (Vike SSR confirmed working, Astro chosen instead)

**Decision:** Astro over Vike/Next.js because:
- Content-heavy site (docs, blog, marketing) — Astro's sweet spot
- Ships 0KB JS by default for static pages
- Islands architecture for interactive components
- Lighthouse 95-100 typical

**Status:** Plan written, awaiting approval to begin implementation.
