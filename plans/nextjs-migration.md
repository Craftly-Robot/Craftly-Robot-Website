# Next.js Migration Plan — Craftly Website

## Current State
- Vite 8.2 + React 19 + React Router DOM 7 + TypeScript 7
- 56 routes (1 dynamic, 55 static)
- No API calls — fully static site
- No custom React contexts
- 171 files in src/
- Deployed on Vercel (SPA rewrite)

## Target State
- Next.js 15+ (App Router)
- File-based routing
- Static generation (SSG) for all pages
- SEO via Next.js metadata API
- Image optimization via next/image
- Deployed on Vercel

---

## Phase 1: Scaffold Next.js Project

### 1.1 Initialize Next.js
```bash
npx create-next-app@latest craftly-next --typescript --tailwind --app --src-dir --import-alias "@/*"
```

### 1.2 Configure TypeScript
- Copy `tsconfig.app.json` compiler options
- Add path aliases: `@/components`, `@/data`, `@/hooks`, etc.

### 1.3 Configure for Tailwind (optional)
- Can keep CSS modules or adopt Tailwind
- Decision: Keep CSS modules for now (less migration effort)

### 1.4 Move to separate directory
- Work in `craftly-next/` alongside current project
- Or replace current project after migration

---

## Phase 2: Migrate Global Layout

### 2.1 Create `app/layout.tsx`
```
app/
  layout.tsx          ← Root layout (html, body, providers)
  globals.css         ← Global styles (index.css)
```

### 2.2 Move global styles
- `src/index.css` → `app/globals.css`
- Keep CSS custom properties and tokens

### 2.3 Move components to `src/components/`
```
src/components/
  layout/
    Layout.tsx        ← Remove (use app/layout.tsx)
    Navbar.tsx        ← Keep (client component)
    Footer.tsx        ← Keep (server component)
  common/
    ErrorBoundary.tsx ← Keep
    ImageWithFallback.tsx ← Keep (use next/image)
  ui/
    SectionTitle.tsx  ← Keep
    VideoShowcase.tsx ← Keep (client component)
    DropdownIcon.tsx  ← Keep
```

### 2.4 Mark client components
Components using `useState`, `useEffect`, `window`, etc. need `"use client"`:
- Navbar.tsx
- IntroOverlay.tsx
- VideoShowcase.tsx
- HeroParticles.tsx
- TechSnake.tsx
- DocsLayout.tsx
- All use-case components with interactivity

---

## Phase 3: Migrate Routing

### 3.1 File-based route structure
```
app/
  layout.tsx
  page.tsx                          ← /
  download/page.tsx                 ← /download
  products/
    workspace/page.tsx              ← /products/workspace
    robot/page.tsx                  ← /products/robot
  use-cases/
    operations/page.tsx             ← /use-cases/operations
    agent-negotiation/page.tsx      ← /use-cases/agent-negotiation
    ai/page.tsx                     ← /use-cases/ai
  resources/
    documentation/
      page.tsx                      ← /resources/documentation
      plan/page.tsx                 ← /resources/documentation/plan
      salary-compensation/page.tsx  ← /resources/documentation/salary-compensation
      faq/page.tsx                  ← /resources/documentation/faq
      workspace/
        overview/
          what-is-craftly-workspace/page.tsx
          how-workspace-works/page.tsx
          workspace-structure/page.tsx
          core-concepts/page.tsx
        organization/
          org-structure/page.tsx
          departments/page.tsx
          reporting-structure/page.tsx
        people-roles/
          members/page.tsx
          roles/page.tsx
          permissions/page.tsx
          managers/page.tsx
          access-control/page.tsx
        tasks-operations/
          tasks/page.tsx
          task-assignment/page.tsx
          task-evidence/page.tsx
          support-requests/page.tsx
          notices/page.tsx
          operational-workflows/page.tsx
        communication/
          chain-of-command/page.tsx
          reporting-communication/page.tsx
          notifications/page.tsx
        resources/
          org-resources/page.tsx
          dept-resources/page.tsx
          training/page.tsx
        onboarding/
          welcome-setup/page.tsx
          onboarding-questions/page.tsx
          agreements/page.tsx
          private-key/page.tsx
          completing-onboarding/page.tsx
      robot/
        overview/
          what-is-craftly-robot/page.tsx
          architecture/page.tsx
          how-robot-works/page.tsx
          agent-model/page.tsx
          current-status/page.tsx
          long-term-vision/page.tsx
        getting-started/
          before-you-start/page.tsx
          install-craftly-robot/page.tsx
          sign-in-private-key/page.tsx
          your-first-robot/page.tsx
          discover-and-connect/page.tsx
          agent-to-agent-negotiation/page.tsx
          run-first-task/page.tsx
          next-steps/page.tsx
        feature-overview/
          agentic-ai/page.tsx
          agent-to-agent-negotiation/page.tsx
          human-confirmation/page.tsx
          real-world-task-coordination/page.tsx
    blog/
      page.tsx                      ← /resources/blog
      [slug]/page.tsx               ← /resources/blog/:slug (dynamic)
    support/page.tsx                ← /resources/support
    releases/page.tsx               ← /resources/releases
    changelog/page.tsx              ← /resources/changelog
    press/page.tsx                  ← /resources/press
  not-found.tsx                     ← 404 page
```

### 3.2 Dynamic route
- `app/resources/blog/[slug]/page.tsx`
- Use `generateStaticParams()` for static generation
- 2 articles: `craftly-plan-workspace-robot-glass`, `why-agent-to-agent-negotiation-matters`

---

## Phase 4: Migrate Data Layer

### 4.1 Move data files
```
src/data/
  navigation.ts     ← Keep
  products.ts       ← Keep
  productVisuals.ts ← Keep
  resources.ts      ← Keep
  robotDemo.ts      ← Keep
  useCases.ts       ← Keep
  blog/
    articles.tsx    ← Keep (convert JSX to React components)
  docs/
    faq.tsx         ← Keep
    onboarding-questions.tsx ← Keep
```

### 4.2 Convert JSX data to components
- `faq.tsx` and `onboarding-questions.tsx` contain JSX
- Move JSX content to actual page components or shared components
- Keep data arrays pure (no JSX)

---

## Phase 5: Migrate SEO

### 5.1 Replace react-helmet-async with Next.js metadata
```tsx
// app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Craftly',
  description: '...',
  openGraph: { ... },
  twitter: { ... },
};
```

### 5.2 Create `src/lib/seo.ts`
- Helper function to generate metadata for each page
- Centralize default OG image, site name, etc.

### 5.3 Remove SEO.tsx component
- No longer needed with Next.js metadata API

---

## Phase 6: Migrate Assets

### 6.1 Move public assets
- `public/` → `public/` (keep as-is)
- Already in correct location

### 6.2 Replace `<img>` with `next/image`
- Use `ImageWithFallback` or create Next.js version
- Automatic WebP conversion
- Lazy loading by default

### 6.3 Replace `<video>` with Next.js video
- Keep custom VideoShowcase component
- Ensure SSR-safe (check for window)

---

## Phase 7: Handle Client-Side Code

### 7.1 Components needing `"use client"`
- Navbar.tsx (scroll detection, hover state)
- IntroOverlay.tsx (sessionStorage, DOM manipulation)
- HeroParticles.tsx (canvas, mouse events)
- TechSnake.tsx (animation)
- DocsLayout.tsx (TOC scroll, DOM queries)
- VideoShowcase.tsx (IntersectionObserver)
- All use-case interactive components

### 7.2 Hooks needing `"use client"` or SSR guards
- useOS.ts (already has SSR guard)
- useReducedMotion.ts (already has SSR guard)
- useScrollReveal.ts (needs SSR guard)
- useDesktopNav.ts (needs SSR guard)
- useMobileNav.ts (needs SSR guard)

### 7.3 Scroll restoration
- Next.js doesn't have built-in scroll restoration like react-router
- Use `next/navigation` `usePathname()` + custom logic
- Or use `scroll-restoration` package

---

## Phase 8: Remove Old Dependencies

### 8.1 Remove from package.json
- `react-router-dom` → Next.js routing
- `react-helmet-async` → Next.js metadata
- `@vitejs/plugin-react` → Not needed
- `vite` → Not needed

### 8.2 Keep
- `react`, `react-dom` (Next.js uses these)
- `three`, `@types/three` (3D visuals)
- `lottie-react` (animations)
- `@tabler/icons-react` (icons)

---

## Phase 9: Deployment

### 9.1 Vercel configuration
- Remove `vercel.json` rewrites (Next.js handles routing)
- Update `next.config.ts` if needed
- Set up environment variables

### 9.2 Update CI/CD
- Update build command: `next build`
- Update test command: `next test` or keep Playwright

---

## Migration Order (Recommended)

1. **Phase 1** — Scaffold (30 min)
2. **Phase 2** — Global layout (1 hr)
3. **Phase 4** — Data layer (1 hr)
4. **Phase 3** — Routing (3-4 hrs) — biggest effort
5. **Phase 5** — SEO (1 hr)
6. **Phase 6** — Assets (1 hr)
7. **Phase 7** — Client code (2 hrs)
8. **Phase 8** — Cleanup (30 min)
9. **Phase 9** — Deploy (1 hr)

**Total estimated time: 10-12 hours**

---

## Risk Areas

| Risk | Mitigation |
|------|------------|
| Client-side animations break | Test each component individually |
| SSR hydration mismatches | Add `"use client"` where needed |
| Dynamic routes fail | Use `generateStaticParams()` |
| SEO metadata missing | Centralize in `lib/seo.ts` |
| Build size increases | Use dynamic imports for heavy components |

---

## Success Criteria

- [ ] All 56 routes work
- [ ] Dynamic blog route works
- [ ] SEO metadata present on all pages
- [ ] Animations work (HeroParticles, IntroOverlay)
- [ ] Mobile navigation works
- [ ] Docs sidebar/TOC works
- [ ] No hydration errors
- [ ] Build passes
- [ ] Deployed to Vercel
