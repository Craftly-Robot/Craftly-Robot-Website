"use client";

import Link from "next/link";
import DocPage from "./DocPage";
import "./DocumentationPage.css";

export default function DocumentationPage() {
  return (
    <DocPage
      title="Craftly Documentation"
      description="Learn how to use Craftly Workspace and Craftly Robot"
      crumbs={["Documentation", "Home"]}
      pageId="documentation"
      pageTitle="Craftly Documentation"
      tocItems={[
        { id: "whats-new", label: "What's New" },
        { id: "popular", label: "Popular" },
        { id: "get-started", label: "Get Started" },
        { id: "workspace", label: "Craftly Workspace" },
        { id: "robot", label: "Craftly Robot" },
        { id: "reference", label: "Reference" },
      ]}
    >
      {/* Search Prompt */}
      <div className="docs-search-prompt">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span>
          Press <kbd>⌘K</kbd> to search documentation
        </span>
      </div>

      {/* What's New */}
      <h2 className="docs__section-title" id="whats-new">
        What&apos;s New
      </h2>
      <div className="docs-announcement">
        <span className="docs-announcement__badge">New</span>
        <div className="docs-announcement__content">
          <h3>Craftly Workspace v3.8.5</h3>
          <p>
            Latest update includes performance improvements, bug fixes, and new task management
            features.
          </p>
        </div>
        <Link href="/resources/changelog" className="docs-announcement__link">
          View Changelog →
        </Link>
      </div>

      {/* Popular */}
      <h2 className="docs__section-title" id="popular">
        Popular
      </h2>
      <div className="docs-card-grid docs-card-grid--popular">
        <Link
          href="/resources/documentation/workspace/overview/what-is-craftly-workspace"
          className="docs-card docs-card--popular"
        >
          <span className="docs-card__popular-icon">📖</span>
          <h3 className="docs-card__title">What is Craftly?</h3>
          <p className="docs-card__desc">
            Understand what Craftly is and how it helps organizations work better.
          </p>
        </Link>
        <Link
          href="/resources/documentation/workspace/overview/getting-started"
          className="docs-card docs-card--popular"
        >
          <span className="docs-card__popular-icon">🚀</span>
          <h3 className="docs-card__title">Getting Started</h3>
          <p className="docs-card__desc">Download, install, and set up your first workspace.</p>
        </Link>
        <Link
          href="/resources/documentation/workspace/tasks-operations/tasks"
          className="docs-card docs-card--popular"
        >
          <span className="docs-card__popular-icon">✅</span>
          <h3 className="docs-card__title">Task Management</h3>
          <p className="docs-card__desc">Learn how to create, assign, and track tasks.</p>
        </Link>
        <Link href="/resources/documentation/faq" className="docs-card docs-card--popular">
          <span className="docs-card__popular-icon">❓</span>
          <h3 className="docs-card__title">FAQ</h3>
          <p className="docs-card__desc">Answers to common questions about Craftly.</p>
        </Link>
      </div>

      {/* Get Started */}
      <h2 className="docs__section-title" id="get-started">
        Get Started
      </h2>
      <p className="docs__text">
        New to Craftly? Start here to understand what it is, how to install it, and how to get up
        and running.
      </p>
      <div className="docs-card-grid">
        <Link
          href="/resources/documentation/workspace/overview/what-is-craftly-workspace"
          className="docs-card"
        >
          <h3 className="docs-card__title">What is Craftly?</h3>
          <p className="docs-card__desc">
            Understand what Craftly is and how it helps organizations work better.
          </p>
        </Link>
        <Link href="/download" className="docs-card">
          <h3 className="docs-card__title">Download & Install</h3>
          <p className="docs-card__desc">Download Craftly for your platform and install it.</p>
        </Link>
        <Link
          href="/resources/documentation/workspace/overview/how-workspace-works"
          className="docs-card"
        >
          <h3 className="docs-card__title">How Workspace Works</h3>
          <p className="docs-card__desc">Learn the core concepts behind Craftly Workspace.</p>
        </Link>
        <Link href="/resources/documentation/workspace/onboarding" className="docs-card">
          <h3 className="docs-card__title">First Time Setup</h3>
          <p className="docs-card__desc">Set up your organization and onboard your team.</p>
        </Link>
      </div>

      {/* Craftly Workspace */}
      <h2 className="docs__section-title" id="workspace">
        Craftly Workspace
      </h2>
      <p className="docs__text">
        Your intelligent workspace for operating modern organizations. Connects people, work,
        communication, and resources in one structured environment.
      </p>
      <div className="docs-card-grid">
        <Link
          href="/resources/documentation/workspace/overview/what-is-craftly-workspace"
          className="docs-card"
        >
          <h3 className="docs-card__title">Overview</h3>
          <p className="docs-card__desc">What Workspace is, how it works, and core concepts.</p>
        </Link>
        <Link href="/resources/documentation/workspace/onboarding" className="docs-card">
          <h3 className="docs-card__title">Onboarding</h3>
          <p className="docs-card__desc">Welcome packets, agreements, and getting started.</p>
        </Link>
        <Link href="/resources/documentation/workspace/organization" className="docs-card">
          <h3 className="docs-card__title">Organization</h3>
          <p className="docs-card__desc">Departments, roles, members, and reporting structure.</p>
        </Link>
        <Link href="/resources/documentation/workspace/tasks-operations" className="docs-card">
          <h3 className="docs-card__title">Tasks & Operations</h3>
          <p className="docs-card__desc">Task assignment, notices, workflows, and evidence.</p>
        </Link>
        <Link href="/resources/documentation/workspace/communication" className="docs-card">
          <h3 className="docs-card__title">Communication</h3>
          <p className="docs-card__desc">Chain of command, messaging, and announcements.</p>
        </Link>
        <Link href="/resources/documentation/workspace/resources" className="docs-card">
          <h3 className="docs-card__title">Resources</h3>
          <p className="docs-card__desc">Department and organization-level resources.</p>
        </Link>
      </div>

      {/* Craftly Robot */}
      <h2 className="docs__section-title" id="robot">
        Craftly Robot
      </h2>
      <p className="docs__text">
        An agentic AI system for autonomous software engineering. Currently in active development.
      </p>
      <div className="docs-card-grid">
        <Link
          href="/resources/documentation/robot/overview/what-is-craftly-robot"
          className="docs-card"
        >
          <h3 className="docs-card__title">What is Craftly Robot?</h3>
          <p className="docs-card__desc">Understand what Robot is and how it works.</p>
        </Link>
        <Link
          href="/resources/documentation/robot/getting-started/before-you-start"
          className="docs-card"
        >
          <h3 className="docs-card__title">Getting Started</h3>
          <p className="docs-card__desc">Install and set up Craftly Robot.</p>
        </Link>
        <Link href="/resources/documentation/robot/feature-overview" className="docs-card">
          <h3 className="docs-card__title">Features</h3>
          <p className="docs-card__desc">Explore Robot&apos;s capabilities and features.</p>
        </Link>
        <Link href="/products/robot" className="docs-card docs-card--coming-soon">
          <h3 className="docs-card__title">Coming Soon</h3>
          <p className="docs-card__desc">Robot is in development. Check back for updates.</p>
        </Link>
      </div>

      {/* Reference */}
      <h2 className="docs__section-title" id="reference">
        Reference
      </h2>
      <p className="docs__text">Quick links to frequently referenced resources.</p>
      <div className="docs-card-grid">
        <Link href="/resources/documentation/faq" className="docs-card">
          <h3 className="docs-card__title">FAQ</h3>
          <p className="docs-card__desc">Answers to common questions about Craftly.</p>
        </Link>
        <Link href="/resources/changelog" className="docs-card">
          <h3 className="docs-card__title">Changelog</h3>
          <p className="docs-card__desc">Track the latest updates and improvements.</p>
        </Link>
        <Link href="/resources/releases" className="docs-card">
          <h3 className="docs-card__title">Releases</h3>
          <p className="docs-card__desc">Download versions and release notes.</p>
        </Link>
        <Link href="/vision" className="docs-card">
          <h3 className="docs-card__title">The Craftly Plan</h3>
          <p className="docs-card__desc">Workspace → Robot → Glass. Our vision for the future.</p>
        </Link>
      </div>
    </DocPage>
  );
}
