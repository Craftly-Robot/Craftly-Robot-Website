# Astro Migration — Implementation Plan

**Created:** 2026-09-02
**Status:** Planning
**Branch:** `plan/astro-migration`

---

## Context

The Craftly website is a React SPA (Vite + React 19 + TypeScript) with 66 routes,
12 components, 7 data files, and ~89 page files. It uses react-router-dom for
routing, react-helmet-async for SEO, and lazy-loaded pages for code splitting.

Phase 3 SEO work (JSON-LD, sitemap, structured data) is complete and working.

**Why Astro:**
- Content-heavy site (docs, blog, marketing pages) — Astro's sweet spot
- Ships 0KB JS by default for static content pages
- Islands architecture for interactive components (navbar, video embeds)
- Lighthouse 95-100 typical for content sites
- Content collections replace manual blog/data pipeline

**What changes:**
- Pages become `.astro` files (not `.tsx`)
- React components become islands with `client:*` directives
- File-based routing replaces react-router-dom
- Content collections replace `src/data/blog/articles.tsx`
- Layout becomes Astro `+Layout.astro`

**What stays the same:**
- All existing React components (used as islands)
- All existing CSS (imported directly in `.astro` files)
- All existing assets (`public/assets/`)
- All existing data files (imported in `.astro` frontmatter)
- Design system, tokens, visual language

---

## ZERO-DOWNTIME DEPLOYMENT STRATEGY

> **CRITICAL: Production must stay live throughout the entire migration.**
> At no point should craftlyrobot.com go down or show errors.

### The Rule

The existing React SPA on `main` branch is **production**. It stays live and untouched
until the Astro version is fully built, tested, and verified. The switch is a single
moment — not a gradual process with broken states.

### How It Works

```
Timeline:
─────────────────────────────────────────────────────────────────────────

  React SPA (main)          Astro (astro-migration)
  ─────────────────         ──────────────────────
  LIVE on production        Being built in parallel
  ↓                         ↓
  Still live                Still being built
  ↓                         ↓
  Still live                Testing, fixing
  ↓                         ↓
  Still live                Final verification
  ↓                         ↓
  ════════════════════════════════════════
  SWITCH: Deploy Astro, archive React SPA
  ════════════════════════════════════════
  ↓
  React SPA code kept as `archive/react-spa` branch
  Astro is now production
```

### Branch Strategy

| Branch | Purpose | Deployed? |
|--------|---------|-----------|
| `main` | Current React SPA — **production** | YES — this IS production |
| `astro-migration` | Astro development branch | NO — not deployed |
| `archive/react-spa` | Frozen copy of React SPA (created at switch time) | NO — kept as rollback |

### Rules During Migration

1. **NEVER modify `main` for Astro work.** `main` = production. If a bug fix is needed
   on the React SPA, fix it on `main` as usual. Astro work stays on `astro-migration`.

2. **NEVER deploy `astro-migration` until full verification.** The Astro branch is
   development-only until the final switch.

3. **Build Astro in the `astro-migration` branch.** All Phase 0-9 work happens here.
   `npm run build` produces `dist/` locally, but it's never deployed until Phase 8.

4. **Test Astro locally and on preview URLs.** Use `npm run preview` locally. If
   needed, deploy `astro-migration` to a staging URL (e.g., `preview.craftlyrobot.com`)
   for team verification — but this is separate from production.

5. **Keep React SPA dependencies updated if needed.** If a security patch or critical
   fix is needed during migration, apply it to `main` as usual. The React SPA must
   stay healthy.

### The Switch (Phase 8)

When Astro is fully built and verified:

1. **Create `archive/react-spa` branch** from current `main`
   ```
   git checkout main
   git checkout -b archive/react-spa
   git push origin archive/react-spa
   ```
   This freezes the React SPA code for rollback.

2. **Merge `astro-migration` into `main`**
   ```
   git checkout main
   git merge astro-migration
   git push origin main
   ```

3. **Deploy** — CI/CD picks up the new `main` and deploys Astro.

4. **Verify production** — check all pages, all routes, all interactions.

5. **If anything is wrong → rollback**
   ```
   git checkout archive/react-spa
   git checkout -b main-rollback
   git push origin main-rollback
   # Then reset main to the archive branch
   ```
   Production reverts to the React SPA within minutes.

### URL Continuity

All existing URLs MUST continue to work. Before the switch:

1. **Map every existing URL** to its Astro equivalent
2. **Add redirects** in `public/_redirects` for any paths that change
3. **Test every URL** on the Astro build before switching
4. **Verify with `curl -I`** that each URL returns 200 (or 301 to new path)

```
# Example redirects if paths change
# public/_redirects
/old-path /new-path 301
```

### Rollback Plan

| Scenario | Action |
|----------|--------|
| Astro has a minor visual bug | Fix on `astro-migration`, re-deploy |
| Astro has a critical SEO issue | Fix on `astro-migration`, re-deploy |
| Astro breaks on specific route | Fix on `astro-migration`, re-deploy |
| Astro fundamentally broken | Rollback: reset `main` to `archive/react-spa` |
| React SPA needs urgent fix during migration | Fix on `main` as normal (Astro work pauses) |

### Staging Verification Checklist (Before Switch)

- [ ] All 66 routes render correctly on Astro
- [ ] All existing URLs return 200 (or correct redirects)
- [ ] SEO: title, meta, OG tags, JSON-LD all present
- [ ] Sitemap is complete and valid
- [ ] All interactive elements work (navbar, dropdowns, animations)
- [ ] All images and assets load correctly
- [ ] Mobile responsive on all pages
- [ ] Lighthouse > 90 on key pages (Home, a Doc, a Blog article)
- [ ] No console errors
- [ ] Playwright tests pass (adapted for Astro)
- [ ] Team has reviewed and approved staging deployment

---

## Implementation Phases

> **Rule: Each sub-phase = one commit. Never leave things broken.**
> If a sub-phase is too big, split it further. If unsure, commit more often.

---

### Phase 0: Scaffold Astro Project

**Goal:** Empty Astro project builds successfully.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 0.1 | Create Astro project in `astro-migration` branch, install deps | `chore(astro): initialize astro project with react + sitemap` |
| 0.2 | Configure `astro.config.mjs`, copy `public/assets/`, `public/_redirects`, `robots.txt` | `chore(astro): copy public assets and configure astro` |
| 0.3 | Create `src/layouts/BaseLayout.astro` with `<head>` from `index.html` | `feat(astro): create base layout with head meta tags` |
| 0.4 | Create minimal `src/pages/index.astro` (placeholder content, no React yet) | `feat(astro): create index page with placeholder` |
| 0.5 | `npm run build` passes, `dist/index.html` has content | `chore(astro): verify build produces content` |

**Checkpoint:** Build passes, placeholder HTML renders.

---

### Phase 1: Global Layout

**Goal:** Navbar + Footer render on all pages.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 1.1 | Copy `src/index.css` → `src/styles/global.css`, import in BaseLayout | `style(astro): move global css to astro styles` |
| 1.2 | Create `src/layouts/Layout.astro` (BaseLayout + Navbar slot + Footer slot + main slot) | `feat(astro): create page layout with navbar and footer slots` |
| 1.3 | Convert Footer to `src/components/layout/Footer.astro` (pure static, 0KB JS) | `feat(astro): convert footer to astro component` |
| 1.4 | Create Navbar shell as `src/components/layout/Navbar.astro` (logo + links, no dropdown JS yet) | `feat(astro): create static navbar component` |
| 1.5 | Test: build passes, navbar and footer visible on index page | `test(astro): verify navbar and footer render` |

**Checkpoint:** Static navbar and footer visible. No dropdowns yet.

---

### Phase 2: Navbar Interactivity

**Goal:** Dropdowns and mobile menu work.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 2.1 | Create `src/components/layout/NavDropdown.tsx` React island (hover logic, active menu state) | `feat(astro): add nav dropdown as react island` |
| 2.2 | Create `src/components/layout/MobileNav.tsx` React island (hamburger toggle, mobile menu) | `feat(astro): add mobile nav as react island` |
| 2.3 | Wire islands into Navbar.astro with `client:load` | `feat(astro): wire navbar islands with client load` |
| 2.4 | Test: desktop hover opens dropdown, mobile toggle works, links navigate | `test(astro): verify navbar interactivity` |

**Checkpoint:** Full navbar behavior works.

---

### Phase 3: Home Page

**Goal:** Home page renders with Hero, ProductShowcase, DownloadSection.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 3.1 | Create `src/pages/index.astro`, import `Layout.astro`, render `HomePage` as `client:load` island | `feat(astro): render home page as react island` |
| 3.2 | Test: build passes, home page content visible in page source | `test(astro): verify home page renders with content` |
| 3.3 | Test: Hero animations work, product sections load, download CTA visible | `test(astro): verify home page interactions` |

**Checkpoint:** Home page fully functional.

---

### Phase 4: Product & Use Case Pages

**Goal:** Download, Products, Use Cases pages work.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 4.1 | Create `src/pages/download.astro` with `DownloadPage` island | `feat(astro): add download page` |
| 4.2 | Create `src/pages/products/workspace.astro` with `WorkspacePage` island | `feat(astro): add workspace product page` |
| 4.3 | Create `src/pages/products/robot.astro` with `RobotPage` island | `feat(astro): add robot product page` |
| 4.4 | Create `src/pages/use-cases/operations.astro` with `OperationsPage` island | `feat(astro): add operations use case page` |
| 4.5 | Create `src/pages/use-cases/agent-negotiation.astro` | `feat(astro): add agent negotiation use case page` |
| 4.6 | Create `src/pages/use-cases/ai.astro` | `feat(astro): add ai use case page` |
| 4.7 | Create `src/pages/404.astro` (static, no React) | `feat(astro): add 404 page` |
| 4.8 | Test: all 7 pages render, navigation works between them | `test(astro): verify product and use case pages` |

**Checkpoint:** 8 pages total working (home + 7 new).

---

### Phase 5: Documentation Pages — Dynamic Route

**Goal:** All ~45 doc pages work via a single dynamic route.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 5.1 | Create `src/pages/resources/documentation/[...slug].astro` with `getStaticPaths()` from `docSections` data | `feat(astro): create dynamic doc route with getStaticPaths` |
| 5.2 | Render `DocPage` component as `client:idle` island in the dynamic route | `feat(astro): render doc pages as react island` |
| 5.3 | Test: build generates all ~45 doc HTML files | `test(astro): verify all doc pages generate` |
| 5.4 | Test: sidebar navigation, breadcrumbs, internal links work | `test(astro): verify doc page navigation` |
| 5.5 | Create `src/pages/resources/documentation.astro` (doc index page) | `feat(astro): add documentation index page` |
| 5.6 | Create `src/pages/resources/documentation/plan.astro` | `feat(astro): add plan page` |
| 5.7 | Create `src/pages/resources/documentation/salary-compensation.astro` | `feat(astro): add salary compensation page` |
| 5.8 | Create `src/pages/resources/documentation/faq.astro` | `feat(astro): add faq page` |
| 5.9 | Test: all doc routes return 200, no broken links | `test(astro): verify all documentation routes` |

**Checkpoint:** All ~48 doc-related pages working.

---

### Phase 6: Blog — Content Collections

**Goal:** Blog uses Astro content collections, markdown rendering.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 6.1 | Define `src/content.config.ts` with blog schema (title, description, date, image, tags) | `feat(astro): define blog content collection schema` |
| 6.2 | Create `src/content/blog/` directory, migrate first 2 articles as markdown test | `feat(astro): migrate first blog articles to markdown` |
| 6.3 | Create `src/pages/resources/blog/index.astro` listing page | `feat(astro): create blog listing page` |
| 6.4 | Create `src/pages/resources/blog/[...slug].astro` article page with `getStaticPaths()` | `feat(astro): create blog article page with dynamic route` |
| 6.5 | Add Article JSON-LD structured data to blog article page | `feat(astro): add article json-ld to blog pages` |
| 6.6 | Migrate all remaining articles to markdown | `feat(astro): migrate all blog articles to markdown` |
| 6.7 | Test: blog listing shows all articles, individual articles render correctly | `test(astro): verify blog content collection` |
| 6.8 | Remove old blog system (`src/data/blog/articles.tsx`, `manifest.json`, `scripts/generate-blog-sitemap.py`) | `chore(astro): remove old blog data pipeline` |

**Checkpoint:** Blog fully migrated to content collections.

---

### Phase 7: Resource Pages

**Goal:** Support, Releases, Changelog, Press pages work.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 7.1 | Create `src/pages/resources/support.astro` (static) | `feat(astro): add support page` |
| 7.2 | Create `src/pages/resources/releases.astro` (static) | `feat(astro): add releases page` |
| 7.3 | Create `src/pages/resources/changelog.astro` (static) | `feat(astro): add changelog page` |
| 7.4 | Create `src/pages/resources/press.astro` (static) | `feat(astro): add press page` |
| 7.5 | Test: all resource pages render, navbar links work | `test(astro): verify resource pages` |

**Checkpoint:** All resource pages working.

---

### Phase 8: SEO & Structured Data

**Goal:** All SEO features preserved and verified.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 8.1 | Add Organization JSON-LD to `BaseLayout.astro` | `feat(astro): add organization json-ld to base layout` |
| 8.2 | Add FAQPage JSON-LD to FAQ page | `feat(astro): add faq json-ld to faq page` |
| 8.3 | Add BreadcrumbList JSON-LD to doc pages | `feat(astro): add breadcrumb json-ld to doc pages` |
| 8.4 | Set canonical URLs in `BaseLayout.astro` using `Astro.url` | `feat(astro): add canonical urls to base layout` |
| 8.5 | Set default OG image in `BaseLayout.astro`, per-page overrides via props | `feat(astro): add og image support to base layout` |
| 8.6 | Test: validate JSON-LD on homepage, doc page, blog article (Google Rich Results Test) | `test(astro): verify structured data` |
| 8.7 | Verify sitemap includes all routes automatically | `test(astro): verify auto-generated sitemap` |

**Checkpoint:** SEO fully preserved.

---

### Phase 9: Interactions & Animations

**Goal:** All interactive behaviors work correctly.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 9.1 | Test Hero animations on home page, fix any hydration issues | `fix(astro): verify hero animations work` |
| 9.2 | Test scroll reveal (`useScrollReveal`) across all pages | `fix(astro): verify scroll reveal works` |
| 9.3 | Test video players / video showcase components | `fix(astro): verify video components work` |
| 9.4 | Test all hover effects (buttons, links, cards) | `fix(astro): verify hover effects` |
| 9.5 | Test mobile responsive on all page types | `test(astro): verify mobile responsiveness` |
| 9.6 | Fix any remaining hydration mismatches (check console) | `fix(astro): resolve hydration mismatches` |

**Checkpoint:** All interactions verified.

---

### Phase 10: Redirects & URL Continuity

**Goal:** Every existing URL returns 200 or correct redirect.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 10.1 | Map all 66 existing URLs to Astro equivalents, document any changes | `docs(astro): map existing urls to astro routes` |
| 10.2 | Add redirects in `public/_redirects` for any changed paths | `feat(astro): add url redirects for changed paths` |
| 10.3 | Test every URL with `curl -I` — verify 200 or 301 | `test(astro): verify all urls return correct status` |
| 10.4 | Verify no 404s on any internal link | `test(astro): verify no broken internal links` |

**Checkpoint:** URL continuity confirmed.

---

### Phase 11: CI/CD & Deployment

**Goal:** CI pipeline works, staging deployment ready.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 11.1 | Update `.github/workflows/ci.yml` — new build command (`npm run build` instead of `bun run build`) | `ci(astro): update ci build command for astro` |
| 11.2 | Adapt Playwright smoke tests for Astro output | `test(astro): adapt playwright tests for astro` |
| 11.3 | Run full CI locally — lint + build + tests pass | `ci(astro): verify full ci pipeline locally` |
| 11.4 | Create staging deployment (preview URL) for team review | `chore(astro): deploy staging for team review` |
| 11.5 | Team reviews staging, approves for production switch | `chore(astro): staging approved for production` |

**Checkpoint:** CI green, staging deployed, team approved.

---

### Phase 12: Production Switch

**Goal:** Astro goes live. React SPA archived for rollback.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 12.1 | Create `archive/react-spa` branch from current `main` | `chore: archive react spa before astro switch` |
| 12.2 | Merge `astro-migration` into `main` | `feat!: switch production to astro` |
| 12.3 | Deploy — CI picks up new `main` | — |
| 12.4 | Verify production: check 10 key pages, all interactions | `test: verify astro production deployment` |
| 12.5 | Monitor for 24h, fix any issues on `astro-migration` | — |

**Checkpoint:** Astro is live. Production verified.

---

### Phase 13: Cleanup

**Goal:** Remove old React SPA code, final polish.

| Sub-phase | What | Commit message |
|-----------|------|----------------|
| 13.1 | Delete old SPA files (`src/App.tsx`, `src/main.tsx`, old page files) | `chore(astro): remove old react spa files` |
| 13.2 | Remove unused dependencies (`react-router-dom`, `react-helmet-async`, old vite plugins) | `chore(astro): remove unused dependencies` |
| 13.3 | Update `package.json` scripts (dev, build, preview, lint, test) | `chore(astro): update package.json scripts` |
| 13.4 | Update `README.md` with new dev workflow | `docs(astro): update readme for astro workflow` |
| 13.5 | Final full site crawl — no broken links, no errors | `test(astro): final verification crawl` |

**Checkpoint:** Clean codebase, no dead code.

---

## Time Estimate

| Phase | Sub-phases | Days |
|-------|------------|------|
| 0: Scaffold | 5 | 1 |
| 1: Global Layout | 5 | 1 |
| 2: Navbar Interactivity | 4 | 1 |
| 3: Home Page | 3 | 0.5 |
| 4: Product & Use Cases | 8 | 1-2 |
| 5: Doc Pages | 9 | 2-3 |
| 6: Blog | 8 | 2-3 |
| 7: Resource Pages | 5 | 1 |
| 8: SEO | 7 | 1-2 |
| 9: Interactions | 6 | 1-2 |
| 10: Redirects | 4 | 1 |
| 11: CI/CD | 5 | 1-2 |
| 12: Production Switch | 5 | 1 |
| 13: Cleanup | 5 | 1 |
| **Total** | **79 sub-phases** | **~15-20 days** |

---

## Decision Points

Before starting implementation, confirm:

1. **Replace root or monorepo?**
   - Recommended: Replace root (cleaner)
   - Alternative: `craftly-website/` subdirectory

2. **Hosting provider?**
   - Cloudflare Pages (current) — works with Astro
   - Vercel — native Astro support, better DX
   - Netlify — good Astro support

3. **Blog content format?**
   - Markdown files (simple, Astro native)
   - MDX (if blog needs interactive components)

4. **Keep React or migrate to islands?**
   - Recommended: Keep React for interactive islands
   - Convert static components to `.astro` over time

---

*This plan is the source of truth for the Astro migration.*
*Update this file as implementation progresses.*
