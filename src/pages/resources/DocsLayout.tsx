import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './DocsLayout.css';

function ChevronRight({ isOpen }: { isOpen?: boolean }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`docs__sidebar-chevron ${isOpen ? 'docs__sidebar-chevron--open' : ''}`}>
      <path d="M4.5 2.5L8.5 6L4.5 9.5" />
    </svg>
  );
}

interface DocsLayoutProps {
  title: string;
  description: string;
  tocItems?: { id: string; label: string }[];
  children: ReactNode;
}

export default function DocsLayout({ title, description, tocItems = [], children }: DocsLayoutProps) {
  const [activeId, setActiveId] = useState<string>('welcome');
  const [isRobotOpen, setIsRobotOpen] = useState<boolean>(true);
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState<boolean>(true);

  const toggleRobot = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRobotOpen(!isRobotOpen);
  };

  const toggleWorkspace = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWorkspaceOpen(!isWorkspaceOpen);
  };

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
          <NavLink to="/resources/documentation" className={({isActive}) => `docs__nav-link ${isActive ? 'docs__nav-link--active' : ''}`} end>
            Home
          </NavLink>
          
          <div className="docs__nav-item" onClick={toggleWorkspace}>
            <div className="docs__nav-meta">
              <span className="docs__nav-text">Craftly Workspace</span>
            </div>
            <svg 
              className={`docs__sidebar-chevron ${isWorkspaceOpen ? 'docs__sidebar-chevron--open' : ''}`} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          
          {isWorkspaceOpen && (
            <div className="docs__nav-subnav">
              <NavLink to="/resources/documentation/workspace/overview" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Overview</NavLink>
              <NavLink to="/resources/documentation/workspace/getting-started" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Getting Started</NavLink>
              <NavLink to="/resources/documentation/workspace/organization" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Organization</NavLink>
              <NavLink to="/resources/documentation/workspace/people-roles" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>People & Roles</NavLink>
              <NavLink to="/resources/documentation/workspace/tasks-operations" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Tasks & Operations</NavLink>
              <NavLink to="/resources/documentation/workspace/communication" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Communication</NavLink>
              <NavLink to="/resources/documentation/workspace/resources" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Resources</NavLink>
              <NavLink to="/resources/documentation/workspace/onboarding" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Onboarding</NavLink>
            </div>
          )}
          
          <div className="docs__nav-item docs__nav-item--with-meta" onClick={toggleRobot}>
            <span className="docs__nav-text">Craftly Robot</span>
            <div className="docs__nav-meta">
              <span className="docs__tag">v2.0.1</span>
              <ChevronRight isOpen={isRobotOpen} />
            </div>
          </div>
          
          {isRobotOpen && (
            <div className="docs__nav-subnav">
              <NavLink to="/resources/documentation/overview" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Overview</NavLink>
              <NavLink to="/resources/documentation/getting-started" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Getting Started</NavLink>
              <NavLink to="/resources/documentation/build-with-craftly" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Build with Craftly</NavLink>
              <NavLink to="/resources/documentation/feature-overview" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`} end>Feature Overview</NavLink>
              <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                <NavLink to="/resources/documentation/feature-overview/agentic-ai" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agentic AI</NavLink>
                <NavLink to="/resources/documentation/feature-overview/tool-use" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Tool Use</NavLink>
                <NavLink to="/resources/documentation/feature-overview/agent-discovery" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agent Discovery</NavLink>
                <NavLink to="/resources/documentation/feature-overview/agent-negotiation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agent-to-Agent Negotiation</NavLink>
                <NavLink to="/resources/documentation/feature-overview/multi-agent-coordination" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Multi-Agent Coordination</NavLink>
                <NavLink to="/resources/documentation/feature-overview/privacy-boundaries" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Privacy Boundaries</NavLink>
                <NavLink to="/resources/documentation/feature-overview/human-confirmation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Human Confirmation</NavLink>
              </div>
              <NavLink to="/resources/documentation/projects" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Projects</NavLink>
            </div>
          )}
          
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
        {tocItems.length > 0 && (
          <div className="docs__toc">
            <h4 className="docs__toc-title">On this Page</h4>
            <ul className="docs__toc-list">
              {tocItems.map((item) => (
                <li key={item.id} className={`docs__toc-item ${activeId === item.id ? 'docs__toc-item--active' : ''}`}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
}
