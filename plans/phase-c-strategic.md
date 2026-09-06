# Craftly Website — Phase C: Strategic Architecture Decisions

> **INTERNAL DOCUMENT — DO NOT COMMIT OR PUSH.**
> This file lives in `plans/` (git-ignored) and must never reach production or GitHub.
> Created: 2026-08-23

---

## Context

Phases A and B are complete. The site is a React SPA with:
- 66 routes, code-split, lazy-loaded
- JSON-LD structured data, full sitemap, WebP assets
- Blog system, smoke tests in CI
- Deployed on Vite + Vercel

Phase C addresses three strategic decisions that shape the long-term architecture.

---

## C1. SSR/SSG Migration

**Problem:** Current SPA ships an empty `<div>` to crawlers. Google handles JS fine, but for a company whose pitch is visibility, server-rendered content is more reliable for SEO and faster first paint.

### Options

| Option | Effort | SEO impact | Complexity |
|---|---|---|---|
| Stay SPA (Vite) | Low | Good (Google handles JS) | Low |
| Vike (vite-plugin-ssr) | Medium | Excellent | Medium |
| Astro islands | High | Excellent | High |

### Recommended: Vike (incremental migration)
- Keeps existing React code
- Route-level SSR without rewriting every page
- Can SSR docs pages (SEO-critical) first, keep SPA for interactive pages
- Lower risk than Astro (full rewrite)

### Sub-phases

#### C1a. Research spike (1–2 days)
- [ ] Create a throwaway branch (`spike/vike-ssr`)
- [ ] Install `vike` + `vike-react` in the existing project
- [ ] SSR-render ONE docs page (e.g. `/resources/documentation/workspace/overview/core-concepts`)
- [ ] Compare: curl the page source — does it contain the docs content or empty div?
- [ ] Document: build config changes needed, any incompatibilities (react-helmet-async, react-router)

#### C1b. SSR docs pages (if spike succeeds)
- [ ] Migrate all docs pages to SSR (they're static content — ideal candidates)
- [ ] Migrate blog listing + article pages
- [ ] Keep home/products/use-cases as SPA (heavy client-side animation)
- [ ] Update Vercel config if needed (serverless functions vs static)

#### C1c. Cleanup
- [ ] Remove SPA-only router fallback for SSR pages
- [ ] Verify all structured data (JSON-LD) renders server-side
- [ ] Update CI if build process changes

### Decision required from owner
- Is SEO improvement worth the migration effort?
- Budget for 1–2 weeks of focused work?

---

## C2. i18n / Bengali Support

**Problem:** Site targets Bangladesh strongly ("first scratch trained AI in Bangladesh") but is English-only.

### Options

| Option | Effort | Coverage |
|---|---|---|
| Route-based (`/bn/...`) | Medium | Full, SEO-friendly per locale |
| Client-side (`react-i18next`) | Low | Full, but no SEO per locale |
| Manual translation (separate pages) | High | Partial |

### Recommended: Route-based (`/bn/...`)
- Each language gets its own URL segment
- Google indexes both versions separately
- Can start with high-traffic pages only (home, products, docs)

### Sub-phases

#### C2a. Content architecture prep
- [ ] All content must live in data files (already done for FAQ, onboarding, blog)
- [ ] Remaining docs pages: extract text content into translatable strings
- [ ] Define translation key structure (e.g. `docs.workspace.overview.title`)

#### C2b. i18n framework setup
- [ ] Install `react-i18next` + `i18next`
- [ ] Create `src/locales/en/` and `src/locales/bn/` directories
- [ ] Extract English strings into `en/common.json`, `en/docs.json`, etc.
- [ ] Configure route-based language detection (`/bn/...` prefix)

#### C2c. Route-based locale routing
- [ ] Add `/bn/...` routes mirroring all existing routes
- [ ] Language switcher in navbar
- [ ] `hreflang` meta tags for SEO (`<link rel="alternate" hreflang="bn" href="...">`)

#### C2d. Bengali translations (content work)
- [ ] Translate core pages (home, products, use-cases)
- [ ] Translate docs pages (highest value — most content)
- [ ] Review by native Bengali speaker

### Decision required from owner
- Is Bengali translation a priority right now?
- Which pages to translate first?
- Who provides the translations?

---

## C3. Analytics

**Problem:** Zero visitor insight. Can't measure what's working.

### Recommended: Plausible (privacy-friendly, lightweight)
- No cookie consent needed (EU/GDPR compliant by default)
- ~1 KB script (vs Google Analytics ~45 KB)
- Self-hostable or cloud ($9/mo)
- Dashboard shows: visitors, page views, referrers, top pages, countries

### Sub-phases

#### C3a. Tool decision
- [ ] Plausible Cloud ($9/mo) — simplest, no infra
- [ ] Plausible Self-Hosted — free, needs a small server
- [ ] Umami (alternative) — free, self-hosted, more features
- [ ] Fathom — similar to Plausible, slightly more expensive

#### C3b. Integration
- [ ] Add Plausible script tag to `index.html` (or Vercel Analytics for zero-config)
- [ ] Verify page views track correctly across all routes
- [ ] Set up basic goals (blog read, download click, support request)

#### C3c. Dashboard access
- [ ] Share dashboard with team
- [ ] Document how to read key metrics

### Decision required from owner
- Budget for analytics tool?
- Self-hosted vs cloud preference?
- Who needs dashboard access?

---

## Execution order

| Priority | Phase | Blocked on |
|---|---|---|
| 1 | C1a (SSR spike) | Owner decision: is it worth it? |
| 2 | C3 (Analytics) | Owner decision: which tool? |
| 3 | C2 (i18n) | Owner decision: priority + translations |

C3 is fastest (1 day). C1 is most impactful (1–2 weeks). C2 is content-heavy (weeks of translation work).

---

## Status Legend
- [ ] Pending
- [~] In progress
- [x] Done (verified)
