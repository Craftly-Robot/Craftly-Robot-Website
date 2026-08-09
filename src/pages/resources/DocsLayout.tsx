import React, { useState, useEffect, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './DocsLayout.css';

interface ChevronRightProps {
  isOpen?: boolean;
}

const ChevronRight = ({ isOpen }: ChevronRightProps) => (
  <svg 
    className={`docs__sidebar-chevron ${isOpen ? 'docs__sidebar-chevron--open' : ''}`}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

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
            <ChevronRight isOpen={isWorkspaceOpen} />
          </div>
          
          {isWorkspaceOpen && (
            <div className="docs__nav-subnav">
              <NavLink to="/resources/documentation/workspace/overview" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`} end>Overview</NavLink>
              <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                <NavLink to="/resources/documentation/workspace/overview/what-is-craftly-workspace" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>What is Craftly Workspace?</NavLink>
                <NavLink to="/resources/documentation/workspace/overview/how-workspace-works" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>How Workspace Works</NavLink>
                <NavLink to="/resources/documentation/workspace/overview/workspace-structure" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Workspace Structure</NavLink>
                <NavLink to="/resources/documentation/workspace/overview/core-concepts" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Core Concepts</NavLink>
              </div>

              <NavLink to="/resources/documentation/workspace/getting-started" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`} end>Getting Started</NavLink>
              <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                <NavLink to="/resources/documentation/workspace/getting-started/create-account" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Create Your Account</NavLink>
                <NavLink to="/resources/documentation/workspace/getting-started/join-organization" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Join an Organization</NavLink>
                <NavLink to="/resources/documentation/workspace/getting-started/complete-profile" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Complete Your Profile</NavLink>
                <NavLink to="/resources/documentation/workspace/getting-started/understand-workspace" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Understanding Your Workspace</NavLink>
                <NavLink to="/resources/documentation/workspace/getting-started/first-task" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Your First Task</NavLink>
              </div>

              <NavLink to="/resources/documentation/workspace/organization" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`} end>Organization</NavLink>
              <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                <NavLink to="/resources/documentation/workspace/organization/org-structure" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Organization Structure</NavLink>
                <NavLink to="/resources/documentation/workspace/organization/departments" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Departments</NavLink>
                <NavLink to="/resources/documentation/workspace/organization/teams" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Teams</NavLink>
                <NavLink to="/resources/documentation/workspace/organization/reporting-structure" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Reporting Structure</NavLink>
                <NavLink to="/resources/documentation/workspace/organization/roles-permissions" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Roles & Permissions</NavLink>
              </div>

              <NavLink to="/resources/documentation/workspace/people-roles" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`} end>People & Roles</NavLink>
              <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                <NavLink to="/resources/documentation/workspace/people-roles/members" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Members</NavLink>
                <NavLink to="/resources/documentation/workspace/people-roles/roles" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Roles</NavLink>
                <NavLink to="/resources/documentation/workspace/people-roles/permissions" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Permissions</NavLink>
                <NavLink to="/resources/documentation/workspace/people-roles/managers" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Managers</NavLink>
                <NavLink to="/resources/documentation/workspace/people-roles/access-control" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Access Control</NavLink>
              </div>

              <NavLink to="/resources/documentation/workspace/tasks-operations" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`} end>Tasks & Operations</NavLink>
              <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                <NavLink to="/resources/documentation/workspace/tasks-operations/tasks" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Tasks</NavLink>
                <NavLink to="/resources/documentation/workspace/tasks-operations/task-assignment" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Task Assignment</NavLink>
                <NavLink to="/resources/documentation/workspace/tasks-operations/task-evidence" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Task Evidence</NavLink>
                <NavLink to="/resources/documentation/workspace/tasks-operations/support-requests" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Support Requests</NavLink>
                <NavLink to="/resources/documentation/workspace/tasks-operations/notices" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Notices</NavLink>
                <NavLink to="/resources/documentation/workspace/tasks-operations/operational-workflows" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Operational Workflows</NavLink>
              </div>

              <NavLink to="/resources/documentation/workspace/communication" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`} end>Communication</NavLink>
              <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                <NavLink to="/resources/documentation/workspace/communication/direct-communication" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Direct Communication</NavLink>
                <NavLink to="/resources/documentation/workspace/communication/team-communication" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Team Communication</NavLink>
                <NavLink to="/resources/documentation/workspace/communication/chain-of-command" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Chain of Command</NavLink>
                <NavLink to="/resources/documentation/workspace/communication/reporting-communication" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Reporting-Based Communication</NavLink>
                <NavLink to="/resources/documentation/workspace/communication/notifications" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Notifications</NavLink>
              </div>

              <NavLink to="/resources/documentation/workspace/resources" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`} end>Resources</NavLink>
              <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                <NavLink to="/resources/documentation/workspace/resources/org-resources" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Organization Resources</NavLink>
                <NavLink to="/resources/documentation/workspace/resources/dept-resources" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Department Resources</NavLink>
                <NavLink to="/resources/documentation/workspace/resources/training" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Training</NavLink>
                <NavLink to="/resources/documentation/workspace/resources/training-participation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Training Participation</NavLink>
                <NavLink to="/resources/documentation/workspace/resources/resource-access" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Resource Access</NavLink>
              </div>

              <NavLink to="/resources/documentation/workspace/onboarding" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`} end>Onboarding</NavLink>
              <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                <NavLink to="/resources/documentation/workspace/onboarding/welcome-setup" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Welcome & Setup</NavLink>
                <NavLink to="/resources/documentation/workspace/onboarding/onboarding-questions" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Onboarding Questions</NavLink>
                <NavLink to="/resources/documentation/workspace/onboarding/agreements" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agreements</NavLink>
                <NavLink to="/resources/documentation/workspace/onboarding/digital-signatures" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Digital Signatures</NavLink>
                <NavLink to="/resources/documentation/workspace/onboarding/private-key" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Private Key</NavLink>
                <NavLink to="/resources/documentation/workspace/onboarding/completing-onboarding" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Completing Onboarding</NavLink>
              </div>
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
