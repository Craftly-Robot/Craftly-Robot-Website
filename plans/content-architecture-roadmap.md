# Craftly Website — Content Architecture & Future Roadmap Plan

> **INTERNAL DOCUMENT — DO NOT COMMIT OR PUSH.**
> This file lives in `plans/` (git-ignored) and must never reach production or GitHub.
> Created: 2026-08-23

---

## Context

Technical foundation is healthy after the SEO/performance work (see
`seo-performance-optimization.md`): 268 KB main bundle, WebP assets, JSON-LD,
full sitemap, CI green.

The next leverage is **content architecture**, not more optimization.

---

## Phase A — Code hygiene (near term)

> **STATUS (2026-08-23): COMPLETE.**
> - A1: FAQ (88 Q&As → `src/data/docs/faq.tsx`) and OnboardingQuestions content extracted. DONE.
> - A2: Orphan CSS deleted, innerHTML hacks replaced with React state, stale image imports fixed. DONE.
> - A3: Playwright smoke tests (11 routes) wired into CI + `bun run test:e2e`. DONE.
> - A4: Shared `DocPage` primitive created; all ~45 docs pages migrated across 8 commits (overview, communication, onboarding, organization, people-roles, resources/tasks-operations, robot ×18, root pages). DONE.
> - A5/A6: Skipped as low-value after A4 removed the real duplication. Revisit only if needed.

### A1. Extract hardcoded content into `src/data/`
Per AGENTS.md §15, content must not live inside components.

| Source file | LOC | Target data file |
|---|---|---|
| `src/pages/resources/FAQPage.tsx` | 1558 | `src/data/docs/faq.ts` |
| `src/pages/resources/workspace/onboarding/OnboardingQuestionsPage.tsx` | 1178 | `src/data/docs/onboarding-questions.ts` |
| `src/pages/resources/DocsLayout.tsx` | 1108 | evaluate; extract shared doc-page primitives |
| workspace docs pages (`resources/workspace/**`) | ~20 pages | consider a shared doc-content schema |

Rules:
- Pure refactor — zero visual or route changes
- Define typed interfaces in `src/types/`
- Pages become thin renderers over structured content
- Verify each affected page visually after extraction

### A2. Remove dead code & hacks
- Delete orphan CSS: `ArchitectureVisualization.css`, `BlogRail.css`,
  `CapabilitiesSection.css`, `DevOrgSection.css` (no matching components)
- Replace `innerHTML` fallbacks with proper React conditional rendering:
  - `OnboardingQuestionsPage.tsx:1159`
  - `WelcomeSetupPage.tsx:120`

### A3. Smoke tests
- Add Playwright (or Vitest + Testing Library minimum)
- One test per key route: page renders, no console errors
- Wire into existing CI workflow

---

## Phase B — Content system (medium term)

### B1. Blog/article system
- Blog is currently a static stub via `ResourceLayout`
- Introduce markdown-based (or data-file) articles with listing + detail routes
- Per-article SEO (title/description/OG), sitemap auto-inclusion

> **STATUS (2026-08-23): DONE & PUSHED** (`63b6ff0` on `content-architecture`).
> Data model in `src/data/blog/articles.tsx` (typed `BlogArticle`), listing page,
> detail route `/resources/blog/:slug`, per-article SEO + Article JSON-LD,
> 404 fallback for unknown slugs, sitemap updated (65 URLs).
> Publishing a new article = add one entry to the data file.
> TODO later: auto-generate sitemap blog entries instead of manual edits.

### B2. Fill placeholder pages (6 remaining "coming soon")

Exact checklist with exact statuses lives in `plans/START_HERE.md` → "Phase B".
- OrgStructurePage, WorkspaceStructurePage, AccessControlPage,
  TaskAssignmentPage, TaskEvidencePage, OrgResourcesPage
- Requires input from COO/domain owners on actual content

### B3. Brand asset cleanup
- Rename Telegram-style filenames to semantic names
- Dedicated 1200×630 OG image (current fallback is the 500×500 logo)
- Full favicon set (16/32/apple-touch)

---

## Phase C — Strategic decisions (long term, need discussion/approval)

### C1. i18n / Bengali support?
Site targets Bangladesh strongly but is English-only. If yes:
- react-i18next or route-based locale segments
- Content architecture from Phase A must land FIRST (prerequisite)

### C2. SSR/SSG migration?
SPA ships an empty `<div>` to crawlers. Options:
- vite-plugin-ssr / Vike (incremental, keeps React code)
- Astro islands (bigger rewrite, best content-site fit)
- Prerequisite for serious SEO ambitions on docs/blog content

### C3. Analytics
Currently zero visitor insight. Privacy-friendly options:
Plausible / Umami / self-hosted. Not started without explicit request.

---

## Status Legend
- [ ] Pending
- [~] In progress
- [x] Done (verified)
