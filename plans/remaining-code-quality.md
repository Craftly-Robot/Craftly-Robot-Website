# Remaining Code Quality Work

> Branch: `refactor/code-quality-v2`  
> Rule: One change per commit, push after each.

---

## Remaining Items

### 1. Apply ImageWithFallback to images without error handling
- 20 `<img>` elements across 14 files have no `onError`
- Replace `<img>` with `<ImageWithFallback>` in each
- Files: Hero.tsx, Navbar.tsx, Footer.tsx, DownloadPage.tsx, ReleasesPage.tsx, ProductVisual.tsx, 8 doc pages
- Commit per file: `fix: add image fallback to <FileName>`

### 2. Decompose Navbar (425 lines)
- Extract `useDesktopNav.ts` — hover/focus logic, activeMenu state
- Extract `useMobileNav.ts` — mobile toggle, open/close logic
- Navbar.tsx becomes ~200 lines (render only)
- Commit: `refactor: extract Navbar hooks`

### 3. Replace inline styles (remaining high-impact files)
- FAQPage.tsx — 48 inline styles
- RobotPage.tsx — 20 inline styles
- AIPage.tsx — 38 inline styles
- Create CSS files, extract to named classes
- Commit per file: `style: replace inline styles in <FileName>`

---

## What NOT to change

- DocsLayout (1,108 lines) — complex, company recently rewrote it, risky to touch
- AI components — dynamic styles, better left as-is
- Onboarding data (89 inline styles) — content data, keep as-is

---

## Commit Protocol

After EACH change:
1. `npx tsc --noEmit` — 0 errors
2. `npx vite build` — passes
3. `git add -A && git commit -m "<type>: <description>"`
4. `git push origin refactor/code-quality-v2 && git push company refactor/code-quality-v2`
