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
            <li className="docs__toc-item docs__toc-item--active">
              <a href="#welcome">Welcome to Craftly</a>
            </li>
            <li className="docs__toc-item">
              <a href="#choose-surface">Choose Your Surface</a>
            </li>
            <li className="docs__toc-item">
              <a href="#craftly-workspace">Craftly Workspace</a>
            </li>
            <li className="docs__toc-item">
              <a href="#craftly-robot">Craftly Robot</a>
            </li>
            <li className="docs__toc-item">
              <a href="#core-capabilities">Core Capabilities</a>
            </li>
            <li className="docs__toc-item">
              <a href="#craftly-platform">The Craftly Platform</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
