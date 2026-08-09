import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './DocsLayout.css';

function ChevronRight() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="docs__sidebar-chevron">
      <path d="M4.5 2.5L8.5 6L4.5 9.5" />
    </svg>
  );
}

interface DocsLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function DocsLayout({ title, description, children }: DocsLayoutProps) {
  const [activeId, setActiveId] = useState<string>('welcome');

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-10% 0px -70% 0px',
    });

    // Observe all headings that have an ID
    const sections = document.querySelectorAll('h1[id], h2[id], h3[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="docs__container">
      <Helmet>
        <title>{title} — Craftly Documentation</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Left Sidebar */}
      <aside className="docs__sidebar docs__sidebar--left">
        <nav className="docs__nav">
          <NavLink to="/resources/documentation" end className={({isActive}) => `docs__nav-link ${isActive ? 'docs__nav-link--active' : ''}`}>
            Home
          </NavLink>
          
          <div className="docs__nav-item docs__nav-item--with-meta">
            <span className="docs__nav-text">Craftly Workspace</span>
            <div className="docs__nav-meta">
              <span className="docs__tag">v1.2.0</span>
              <ChevronRight />
            </div>
          </div>
          
          <div className="docs__nav-item docs__nav-item--with-meta">
            <span className="docs__nav-text">Craftly Robot</span>
            <div className="docs__nav-meta">
              <span className="docs__tag">v2.0.1</span>
              <ChevronRight />
            </div>
          </div>
          
          <div className="docs__nav-subnav">
            <a href="#overview" className="docs__nav-subitem">Overview</a>
            <a href="#getting-started" className="docs__nav-subitem">Getting Started</a>
            <a href="#build-with-craftly" className="docs__nav-subitem">Build with Craftly</a>
            <a href="#feature-overview" className="docs__nav-subitem">Feature Overview</a>
            <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '16px' }}>
              <a href="#agentic-ai-feature" className="docs__nav-subitem">Agentic AI</a>
              <a href="#tool-use-feature" className="docs__nav-subitem">Tool Use</a>
              <a href="#agent-discovery-feature" className="docs__nav-subitem">Agent Discovery</a>
              <a href="#agent-negotiation-feature" className="docs__nav-subitem">Agent-to-Agent Negotiation</a>
              <a href="#multi-agent-coordination-feature" className="docs__nav-subitem">Multi-Agent Coordination</a>
              <a href="#privacy-aware-communication-feature" className="docs__nav-subitem">Privacy Boundaries</a>
              <a href="#human-confirmation-feature" className="docs__nav-subitem">Human Confirmation</a>
            </div>
            <a href="#projects" className="docs__nav-subitem">Projects</a>
            <a href="#agentic-ai-feature" className="docs__nav-subitem">Agentic AI</a>
            <a href="#agent-discovery-feature" className="docs__nav-subitem">Agent Discovery</a>
            <a href="#agent-negotiation-feature" className="docs__nav-subitem">Agent-to-Agent Negotiation</a>
            <a href="#human-confirmation-feature" className="docs__nav-subitem">Human Control & Safety</a>
          </div>
          
          <div className="docs__nav-item docs__nav-item--with-meta">
            <span className="docs__nav-text">Migration</span>
            <div className="docs__nav-meta">
              <ChevronRight />
            </div>
          </div>
          
          <div className="docs__nav-item">
            <span className="docs__nav-text">Enterprise</span>
          </div>
          
          <div className="docs__nav-item">
            <span className="docs__nav-text">Plans</span>
          </div>
          
          <div className="docs__nav-item">
            <span className="docs__nav-text">FAQ</span>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="docs__main">
        {children}
      </main>

      {/* Right Sidebar */}
      <aside className="docs__sidebar docs__sidebar--right">
        <div className="docs__toc">
          <h4 className="docs__toc-title">On this Page</h4>
          <ul className="docs__toc-list">
            <li className={`docs__toc-item ${activeId === 'welcome' ? 'docs__toc-item--active' : ''}`}>
              <a href="#welcome">Welcome to Craftly</a>
            </li>
            <li className={`docs__toc-item ${activeId === 'choose-surface' ? 'docs__toc-item--active' : ''}`}>
              <a href="#choose-surface">Choose Your Surface</a>
            </li>
            <li className={`docs__toc-item ${activeId === 'craftly-workspace' ? 'docs__toc-item--active' : ''}`}>
              <a href="#craftly-workspace">Craftly Workspace</a>
            </li>
            <li className={`docs__toc-item ${activeId === 'craftly-robot' ? 'docs__toc-item--active' : ''}`}>
              <a href="#craftly-robot">Craftly Robot</a>
            </li>
            <li className={`docs__toc-item ${activeId === 'overview' ? 'docs__toc-item--active' : ''}`}>
              <a href="#overview">Overview</a>
            </li>
            <li className={`docs__toc-item ${activeId === 'getting-started' ? 'docs__toc-item--active' : ''}`}>
              <a href="#getting-started">Getting Started</a>
            </li>
            <li className={`docs__toc-item ${activeId === 'build-with-craftly' ? 'docs__toc-item--active' : ''}`}>
              <a href="#build-with-craftly">Build with Craftly</a>
            </li>
            <li className={`docs__toc-item ${activeId === 'feature-overview' ? 'docs__toc-item--active' : ''}`}>
              <a href="#feature-overview">Feature Overview</a>
            </li>
            <li className={`docs__toc-item ${activeId === 'projects' ? 'docs__toc-item--active' : ''}`}>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
