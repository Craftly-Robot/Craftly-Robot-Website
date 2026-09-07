<p align="center">
  <a href="https://craftlyrobot.com">
    <img src="public/assets/brand/craftly-wordmark-intro.svg" alt="Craftly" width="260" />
  </a>
</p>

<p align="center">
  <strong>Intelligent Systems & Decentralized Human-AI Coordination</strong>
</p>

<p align="center">
  <a href="https://craftlyrobot.com"><img src="https://img.shields.io/badge/Website-craftlyrobot.com-000000?style=for-the-badge" alt="Website" /></a>
  <img src="https://img.shields.io/badge/Next.js-16_App_Router-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Bun-Runtime-fbf0df?style=for-the-badge&logo=bun&logoColor=black" alt="Bun" />
  <img src="https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <a href="#-about-craftly">About</a> •
  <a href="#-products--roadmap">Products & Roadmap</a> •
  <a href="#-technology-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-deployment--ci">Deployment & CI</a> •
  <a href="#-engineering-constitution">Constitution</a>
</p>

---

## 🌟 About Craftly

**Craftly** is an advanced platform engineering intelligent systems that enable seamless, verifiable collaboration between people and autonomous AI agents.

Rather than treating AI as isolated chatbots or rigid single-task tools, Craftly provides an end-to-end organizational operating system where autonomous agents coordinate, negotiate, and execute complex real-world workflows with cryptographic verification and human oversight.

---

## 🚀 Products & Roadmap

Craftly is being constructed section by section under a structured, long-term roadmap:

### 1. 🏢 Craftly Workspace

_The operational foundation of modern organizations._

- **Organizational Architecture:** Structured hierarchy across departments, roles, managers, and members.
- **Task Evidence & Verification:** Cryptographically verifiable proof of execution for every operational task.
- **Agreements & Governance:** Digital keypair-based authorization and cryptographic onboarding.
- **Decentralized AI Training:** Members contribute computing resources (consumer GPUs or cloud clusters) to train shared AI models.

### 2. 🤖 Craftly Robot

_Active R&D in real-world AI assistants._

- **Agent-to-Agent Negotiation:** Autonomous agents discover capabilities, negotiate terms, and coordinate actions across service boundaries.
- **Human Confirmation:** Sensitive and irreversible actions require cryptographic human approval.
- **Multi-Agent Coordination:** Orchestrates parallel tasks with safety and real-world reliability.

### 3. 👓 Craftly Glass (Long-term Vision)

_The future of ambient computing._

- A forward-looking wearable direction designed to bridge intelligent digital systems with physical environments through contextual awareness.

---

## 🛠 Technology Stack

Craftly's web experience is engineered for maximum performance, aesthetic elegance, and zero unnecessary runtime bloat:

- **Core Framework:** [Next.js 16](https://nextjs.org/) (App Router + Turbopack) with full **Static Site Generation (SSG)** across all 68 routes.
- **UI Library:** [React 19](https://react.dev/) (`19.2.8`) + [TypeScript](https://www.typescriptlang.org/) (`5.9.3`) for complete type safety.
- **Runtime & Package Manager:** [Bun](https://bun.sh/) for ultra-fast dependency resolution and script execution.
- **Design System:** Pure **Vanilla CSS** tokens (`app/globals.css`), eliminating CSS-in-JS runtime overhead while delivering smooth 60fps animations.
- **3D Graphics & Visuals:** [Three.js](https://threejs.org/) (`0.185.1`) with custom WebGL fragment shaders for interactive GPU-driven particle simulations (`HeroParticles`).
- **Vector Animations & Icons:** [Lottie React](https://github.com/Gamote/lottie-react) and [Tabler Icons](https://tabler.io/icons) (`@tabler/icons-react`).
- **Typography:** Tailored Google Fonts ([Inter](https://fonts.google.com/specimen/Inter), [Outfit](https://fonts.google.com/specimen/Outfit), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), [Pacifico](https://fonts.google.com/specimen/Pacifico)).
- **Code Quality & CI:** [Oxlint](https://oxc.rs/) for high-speed linting + GitHub Actions CI with automated CodeQL security analysis.
- **Cloud Infrastructure:** [Vercel](https://vercel.com/) Global Edge Network.

---

## 📂 Project Structure

```bash
Craftly-Robot-Website/
├── public/                     # Static assets, vector brand logos, sitemap & robots.txt
│   ├── assets/
│   │   ├── brand/              # Official Craftly vector wordmarks & brand assets
│   │   ├── craftly_logo/       # High-res logos & favicons
│   │   └── product-visuals/    # High-resolution UI visuals & diagrams
│   ├── sitemap.xml             # Search engine sitemap
│   └── robots.txt              # Crawler instructions
├── src/
│   ├── app/                    # Next.js App Router (File-based routes)
│   │   ├── layout.tsx          # Root HTML layout with metadata & fonts
│   │   ├── page.tsx            # Home page route
│   │   ├── globals.css         # Global design tokens & CSS custom properties
│   │   ├── download/           # Download portal
│   │   ├── products/           # Product pages (Workspace, Robot)
│   │   ├── resources/          # Documentation, Blog, Changelog, Releases, Support
│   │   └── use-cases/          # Deep-dive use cases (Operations, AI, Negotiation)
│   ├── components/             # Reusable UI components
│   │   ├── common/             # ImageWithFallback, ErrorBoundary
│   │   ├── hero/               # 3D GPU Particle Canvas (Three.js WebGL)
│   │   ├── layout/             # Global Navbar, Mobile Navigation & Footer
│   │   ├── product/            # Interactive product visual showcases
│   │   └── sections/           # Feature sections, RobotDemo, CTA
│   ├── views/                  # Route view implementations
│   ├── data/                   # Centralized marketing, navigation & product content
│   ├── hooks/                  # Custom React hooks (useDesktopNav, useMobileNav, useOS)
│   └── types/                  # Global TypeScript interfaces & data contracts
├── next.config.ts              # Next.js configuration (Turbopack, image domains)
├── tsconfig.json               # TypeScript compiler configuration with path aliases
├── AGENTS.md                   # Permanent engineering constitution & architectural rules
└── package.json
```

---

## 💻 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (version 1.0 or higher) or [Node.js](https://nodejs.org/) (v18+)

### 1. Clone the Repository

```bash
git clone https://github.com/Craftly-Robot/Craftly-Robot-Website.git
cd Craftly-Robot-Website
```

### 2. Install Dependencies

```bash
bun install
# or
npm install
```

### 3. Start Local Development Server

```bash
bun run dev
# or
npm run dev
```

The site will immediately be live at `http://localhost:3000/` with Turbopack Hot Module Replacement (HMR).

### 4. Build for Production

```bash
bun run build
# or
npm run build
```

Generates an optimized, statically pre-rendered production build (`SSG`) for all 68 routes.

### 5. Start Production Server Locally

```bash
bun run start
# or
npm run start
```

---

## ☁️ Deployment & CI

The project is continuously deployed to **[Vercel](https://vercel.com/)**:

- **Automated Deployments:** Every push to the `main` branch automatically triggers an optimized Next.js build.
- **Global Edge Network:** Static pages and assets are distributed to edge locations worldwide for sub-50ms latency.
- **CI / CD Pipeline:** GitHub Actions automatically tests every commit with:
  - Dependency installation verification with Bun
  - Production build validation (`next build`)
  - CodeQL security analysis and vulnerability scanning

---

## 📜 Engineering Constitution

All contributors and coding agents must strictly read and adhere to [AGENTS.md](./AGENTS.md) before making architectural or UI changes:

- Never break mobile or tablet layouts while adjusting desktop views.
- Reuse existing design tokens in `app/globals.css`.
- Maintain centralized marketing content in `src/data/`.
- Always verify builds and visual rendering before submitting changes.

---

<p align="center">
  Crafted with precision by the <strong>Craftly</strong> team.
</p>
