# Code Quality & Next.js Readiness — Implementation Plan

> Last updated: 2026-09-05  
> Branch: `main` (6c431e9)  
> Rule: One change per commit, push after each. Human reviewers must understand each commit.

---

## Codebase Snapshot

| Metric | Value |
|--------|-------|
| Total TS/TSX lines | 19,768 |
| Total CSS lines | 6,643 |
| Total routes | 62 |
| Total components | 32 files |
| Total pages | 55+ pages |
| React | 19.2.8 |
| Vite | 8.2.2 |
| TypeScript | 7.0.2 |

---

## Issues Found

| Issue | Files | Severity |
|-------|-------|----------|
| Inline OS detection (not using `useOS` hook) | 3 files | Medium |
| Inline `style={{` | 100+ across 30+ files | Medium |
| Unused CSS | 2 files | Low |
| Duplicate Title components (identical pattern) | 4 files | Medium |
| `<img>` without `onError` | 20 instances across 14 files | Medium |
| No ErrorBoundary | App-wide | Medium |
| Navbar not decomposed | 425 lines | Medium |
| No skip-nav link | Accessibility | Medium |
| Duplicate lock files possible | Config | Low |
| Redundant `_redirects` | Public | Low |

---

## Implementation Phases

### Phase 1: DRY — Remove Duplicated Logic

**1.1 Consolidate OS Detection into `useOS` hook**
- Files: `Hero.tsx:31-47`, `CTASection.tsx:14-24`, `UseCaseCTA.tsx:19-28`
- Replace inline `useState` + `useEffect` + `navigator.userAgent` with `useOS()`
- Keep company's quote style (double quotes)
- Update `"Unknown OS"` references to `"Unknown"` to match hook
- Commit: `refactor: consolidate OS detection into useOS hook`

**1.2 Extract shared `SectionTitle` component**
- Files: `DownloadPage.tsx:251-263`, `ReleasesPage.tsx:95-108`, `ChangelogPage.tsx:7-19`, `SupportPage.tsx:5-17`
- All 4 are identical: accept `text` prop, split by `"\n"`, render `<h1>` with `<br />` separators
- Create `src/components/ui/SectionTitle.tsx` — accepts `text`, `className`, `as` props
- Replace all 4 local implementations
- Commit: `refactor: extract shared SectionTitle component`

**1.3 Replace inline styles with CSS classes (targeted)**
- Target files (highest impact): `DocumentationPage.tsx` (19), `TasksPage.tsx` (13), `DocsLayout.tsx` (10)
- Extract repeated inline styles to named CSS classes
- Skip `onboarding-questions.tsx` (89 instances) — content data, keep as-is
- Skip AI components — complex dynamic styles, keep as-is
- Commit per file: `style: replace inline styles in <FileName>`

---

### Phase 2: Error Handling

**2.1 Create `ImageWithFallback` component**
- Reusable wrapper for `<img>` with `onError` → shows fallback UI
- Create `src/components/common/ImageWithFallback.tsx`
- Commit: `feat: add ImageWithFallback component`

**2.2 Create `ErrorBoundary` component**
- Class component wrapping route-level content
- Fallback UI with refresh button
- Create `src/components/common/ErrorBoundary.tsx`
- Wrap routes in `App.tsx`
- Commit: `feat: add ErrorBoundary for route-level error handling`

---

### Phase 3: Accessibility

**3.1 Add skip navigation link**
- Add `<a href="#main-content" className="skip-link">Skip to content</a>` in `Layout.tsx`
- Add `id="main-content"` to `<main>` or content area
- Add `.skip-link` CSS (visually hidden, visible on focus)
- Commit: `a11y: add skip navigation link`

---

### Phase 4: Cleanup

**4.1 Remove unused CSS files**
- Delete `src/pages/use-cases/components/DepartmentSelector.css`
- Delete `src/pages/use-cases/UseCaseLayout.css`
- Commit: `chore: remove unused CSS files`

**4.2 Remove redundant `_redirects` file**
- `public/_redirects` is Netlify-style; Vercel uses `vercel.json` rewrites
- Delete `public/_redirects`
- Commit: `chore: remove redundant _redirects (Vercel uses vercel.json)`

**4.3 Clean up lock files**
- Ensure only `bun.lock` exists (delete `package-lock.json` if present)
- Commit: `chore: keep only bun.lock`

---

### Phase 5: Performance

**5.1 Add `preload="metadata"` to video elements**
- `VideoShowcase.tsx` — add preload attribute
- Commit: `perf: add preload metadata to video`

**5.2 Convert images to WebP**
- Convert remaining PNG/JPG assets in `public/assets/` to WebP
- Update source references
- Commit: `perf: convert public assets to WebP`

---

## Commit Protocol

After EACH change:
1. Run `npx tsc --noEmit` — must be 0 errors
2. Run `npx vite build` — must pass
3. `git add -A && git commit -m "<type>: <description>"`
4. `git push origin main`
5. Report what changed

---

## What Must NOT Change

- Route structure
- Existing component behavior
- Design system tokens
- Brand assets
- Navbar dropdown behavior
- Footer content
- Mobile responsiveness
- SEO/meta tags
- Video placeholder architecture

---

## Blocked Items (awaiting external dependency)

| Item | Blocked On |
|------|-----------|
| OG image 1200x630 | Design assets |
| Bengali translations | Team content |
| Analytics integration | Tool choice decision |
| Blog articles content | Team content |
