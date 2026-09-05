<p align="center">
  <a href="https://craftlyrobot.com">
    <img src="public/assets/brand/craftly-wordmark-intro.svg" alt="Craftly" width="240" />
  </a>
</p>

<p align="center">
  <strong>Intelligent Systems & Decentralized Human-AI Coordination</strong>
</p>

<p align="center">
  <a href="https://craftlyrobot.com"><img src="https://img.shields.io/badge/Website-craftlyrobot.com-000000?style=for-the-badge" alt="Website" /></a>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-7.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <a href="#about-craftly">About</a> •
  <a href="#products--vision">Products & Vision</a> •
  <a href="#technology-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#testing--quality">Testing & QA</a> •
  <a href="#deployment">Deployment</a>
</p>

---

## 🌟 About Craftly

**Craftly** is an advanced platform engineering intelligent systems that enable seamless, verifiable collaboration between people and autonomous AI agents. 

Rather than treating AI as isolated chatbots or rigid single-task tools, Craftly provides an end-to-end organizational operating system where autonomous agents coordinate, negotiate, and execute complex real-world workflows with cryptographic verification and human oversight.

---

## 🚀 Products & Vision

Craftly is being constructed section by section under a structured, long-term roadmap:

### 1. 🏢 Craftly Workspace
*The operational foundation of modern organizations.*
- **Organizational Architecture:** Structured hierarchy across departments, roles, managers, and members.
- **Task Evidence & Verification:** Verifiable proof of execution for every operational task.
- **Agreements & Governance:** Digital keypair-based authorization and cryptographic onboarding.
- **Decentralized AI Training:** Members contribute computing resources (consumer GPUs or cloud clusters) to train shared AI models.

### 2. 🤖 Craftly Robot
*Active R&D in real-world AI assistants.*
- **Agent-to-Agent Negotiation:** Autonomous agents discover capabilities, negotiate terms, and coordinate actions across service boundaries.
- **Human Confirmation:** Sensitive and irreversible actions require cryptographic human approval.
- **Multi-Agent Coordination:** Orchestrates parallel tasks with safety and real-world reliability.

### 3. 👓 Craftly Glass (Long-term Vision)
*The future of ambient computing.*
- A forward-looking wearable direction designed to bridge intelligent digital systems with physical environments through contextual awareness.

---

## 🛠 Technology Stack

Craftly's web experience is engineered for performance, aesthetic excellence, and zero unnecessary runtime bloat:

- **Core Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build System:** [Vite 8](https://vitejs.dev/) with high-speed compilation
- **Design System:** Pure **Vanilla CSS** tokens (`index.css`), eliminating heavy CSS-in-JS runtimes while delivering ultra-smooth 60fps animations.
- **3D Graphics & Visuals:** [Three.js](https://threejs.org/) + custom WebGL fragment shaders for interactive GPU-driven particle simulations (`HeroParticles`).
- **Routing & SEO:** [React Router 7](https://reactrouter.com/) + [React Helmet Async](https://github.com/staylor/react-helmet-async) for dynamic page-level OpenGraph and Canonical metadata.
- **Linter & Code Quality:** [Oxlint](https://oxc.rs/) (0 warnings, 0 errors across 130 files).
- **End-to-End Testing:** [Playwright](https://playwright.dev/) with automated cross-viewport testing across Mobile (390px), Tablet (818px), and Desktop (1440px).

---

## 📂 Project Structure

```bash
Craftly-Robot-Website/
├── public/                     # Static assets, vector brand logos, sitemap & robots.txt
│   ├── assets/
│   │   ├── brand/              # Official Craftly vector wordmarks & brand assets
│   │   ├── animations/         # Lottie animation vectors
│   │   └── product-visuals/    # High-resolution UI visuals & diagrams
│   ├── sitemap.xml             # Search engine sitemap
│   └── robots.txt              # Crawler instructions
├── src/
│   ├── components/
│   │   ├── common/             # Reusable UI primitives (ErrorBoundary, ImageWithFallback)
│   │   ├── hero/               # 3D GPU Particle Canvas (Three.js WebGL)
│   │   ├── layout/             # Global Navbar, Mobile Navigation & Footer
│   │   ├── product/            # Interactive product visual showcases
│   │   └── sections/           # High-conversion marketing feature sections
│   ├── data/                   # Centralized marketing, navigation, & product content
│   ├── hooks/                  # Custom React hooks (useDesktopNav, useMobileNav, useOS)
│   ├── pages/                  # Route-based page views
│   │   ├── products/           # Product pages (Workspace, Robot)
│   │   ├── use-cases/          # Deep-dive use cases (Operations, AI, Negotiation)
│   │   └── resources/          # Technical documentation tree, Releases, Support, Changelog
│   ├── types/                  # Global TypeScript interfaces & data contracts
│   ├── App.tsx                 # Centralized routing table & lazy loading boundaries
│   ├── index.css               # Global CSS design tokens & typography
│   └── main.tsx                # React DOM root entry
├── tests/                      # Playwright E2E suites (Smoke tests, responsive viewports)
├── AGENTS.md                   # Permanent engineering constitution & architectural rules
└── package.json
```

---

## 💻 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) (or yarn / bun)

### 1. Clone the Repository
```bash
git clone https://github.com/Craftly-Robot/Craftly-Robot-Website.git
cd Craftly-Robot-Website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
The site will immediately be live at `http://localhost:5173/` with lightning-fast Hot Module Replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
Type checks the codebase with `tsc -b` and outputs optimized, minified static bundles to `dist/`.

### 5. Run Linting
```bash
npm run lint
```
Runs high-speed Oxlint checks across all files.

### 6. Run End-to-End Tests
```bash
npm run test:e2e
```
Runs Playwright automated tests on system Chrome verifying responsive layouts, lack of horizontal overflow, and image rendering on Mobile, Tablet, and Desktop.

---

## ☁️ Deployment

The project is configured for **zero-config, high-performance edge deployment** on [Vercel](https://vercel.com/):

- Every commit pushed to the `main` branch automatically triggers a fresh production build and instant global deployment.
- Static assets are cached globally across Vercel's Edge Network for sub-50ms latency worldwide.

---

## 📜 Engineering Constitution

All contributors and coding agents must strictly read and adhere to [AGENTS.md](./AGENTS.md) before making architectural or UI changes:
- Never break mobile or tablet layouts while adjusting desktop views.
- Reuse existing design tokens in `src/index.css`.
- Maintain centralized content architecture in `src/data/`.
- Always verify changes in production builds and browser testing.

---

<p align="center">
  Crafted with precision by the <strong>Craftly</strong> team.
</p>
