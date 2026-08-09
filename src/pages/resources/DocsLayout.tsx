import React, { useState, useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './DocsLayout.css';

let globalSidebarScroll = 0;

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
  const location = useLocation();
  const path = location.pathname;

  const [activeId, setActiveId] = useState<string>('welcome');
  
  // Top-level toggles
  const [isRobotOpen, setIsRobotOpen] = useState<boolean>(path.includes('/robot'));
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState<boolean>(path.includes('/workspace'));

  // Nested section toggles
  const [expandedSections, setExpandedSections] = useState<string[]>(() => {
    const sections: string[] = [];
    if (path.includes('/workspace/overview')) sections.push('ws-overview');
    if (path.includes('/workspace/getting-started')) sections.push('ws-getting-started');
    if (path.includes('/workspace/organization')) sections.push('ws-organization');
    if (path.includes('/workspace/people-roles')) sections.push('ws-people-roles');
    if (path.includes('/workspace/tasks-operations')) sections.push('ws-tasks-operations');
    if (path.includes('/workspace/communication')) sections.push('ws-communication');
    if (path.includes('/workspace/resources')) sections.push('ws-resources');
    if (path.includes('/workspace/onboarding')) sections.push('ws-onboarding');

    if (path.includes('/robot/overview')) sections.push('robot-overview');
    if (path.includes('/robot/getting-started')) sections.push('robot-getting-started');
    if (path.includes('/robot/build-with-craftly')) sections.push('robot-build-with-craftly');
    if (path.includes('/robot/feature-overview')) sections.push('robot-feature-overview');
    
    return sections;
  });

  const toggleRobot = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRobotOpen(!isRobotOpen);
  };

  const toggleWorkspace = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWorkspaceOpen(!isWorkspaceOpen);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
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

    const sections = document.querySelectorAll('h1[id], h2[id], h3[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sidebarRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    // Restore scroll position
    sidebar.scrollTop = globalSidebarScroll;

    // Save scroll position on scroll
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.scrollHeight > target.clientHeight) {
        globalSidebarScroll = target.scrollTop;
      }
    };

    sidebar.addEventListener('scroll', handleScroll, { passive: true });
    return () => sidebar.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="docs__container">
      <Helmet>
        <title>{title} — Craftly Documentation</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Left Sidebar */}
      <aside className="docs__sidebar docs__sidebar--left" ref={sidebarRef}>
        <nav className="docs__nav">
          <NavLink to="/resources/documentation" className={({isActive}) => `docs__nav-link ${isActive ? 'docs__nav-link--active' : ''}`} end>
            Home
          </NavLink>
          
          {/* Workspace */}
          <div className="docs__nav-item docs__nav-item--with-meta" onClick={toggleWorkspace}>
            <span className="docs__nav-text">Craftly Workspace</span>
            <div className="docs__nav-meta">
              <span className="docs__tag">v1.2.0</span>
              <ChevronRight isOpen={isWorkspaceOpen} />
            </div>
          </div>
          
          {isWorkspaceOpen && (
            <div className="docs__nav-subnav">
              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-overview')}>
                <span>Overview</span>
                <ChevronRight isOpen={expandedSections.includes('ws-overview')} />
              </div>
              {expandedSections.includes('ws-overview') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/overview/what-is-craftly-workspace" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>What is Craftly Workspace?</NavLink>
                  <NavLink to="/resources/documentation/workspace/overview/how-workspace-works" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>How Workspace Works</NavLink>
                  <NavLink to="/resources/documentation/workspace/overview/workspace-structure" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Workspace Structure</NavLink>
                  <NavLink to="/resources/documentation/workspace/overview/core-concepts" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Core Concepts</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-getting-started')}>
                <span>Getting Started</span>
                <ChevronRight isOpen={expandedSections.includes('ws-getting-started')} />
              </div>
              {expandedSections.includes('ws-getting-started') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/getting-started/create-account" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Create Your Account</NavLink>
                  <NavLink to="/resources/documentation/workspace/getting-started/join-organization" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Join an Organization</NavLink>
                  <NavLink to="/resources/documentation/workspace/getting-started/complete-profile" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Complete Your Profile</NavLink>
                  <NavLink to="/resources/documentation/workspace/getting-started/understand-workspace" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Understanding Your Workspace</NavLink>
                  <NavLink to="/resources/documentation/workspace/getting-started/first-task" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Your First Task</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-organization')}>
                <span>Organization</span>
                <ChevronRight isOpen={expandedSections.includes('ws-organization')} />
              </div>
              {expandedSections.includes('ws-organization') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/organization/org-structure" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Organization Structure</NavLink>
                  <NavLink to="/resources/documentation/workspace/organization/departments" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Departments</NavLink>
                  <NavLink to="/resources/documentation/workspace/organization/teams" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Teams</NavLink>
                  <NavLink to="/resources/documentation/workspace/organization/reporting-structure" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Reporting Structure</NavLink>
                  <NavLink to="/resources/documentation/workspace/organization/roles-permissions" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Roles & Permissions</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-people-roles')}>
                <span>People & Roles</span>
                <ChevronRight isOpen={expandedSections.includes('ws-people-roles')} />
              </div>
              {expandedSections.includes('ws-people-roles') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/people-roles/members" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Members</NavLink>
                  <NavLink to="/resources/documentation/workspace/people-roles/roles" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Roles</NavLink>
                  <NavLink to="/resources/documentation/workspace/people-roles/permissions" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Permissions</NavLink>
                  <NavLink to="/resources/documentation/workspace/people-roles/managers" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Managers</NavLink>
                  <NavLink to="/resources/documentation/workspace/people-roles/access-control" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Access Control</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-tasks-operations')}>
                <span>Tasks & Operations</span>
                <ChevronRight isOpen={expandedSections.includes('ws-tasks-operations')} />
              </div>
              {expandedSections.includes('ws-tasks-operations') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/tasks-operations/tasks" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Tasks</NavLink>
                  <NavLink to="/resources/documentation/workspace/tasks-operations/task-assignment" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Task Assignment</NavLink>
                  <NavLink to="/resources/documentation/workspace/tasks-operations/task-evidence" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Task Evidence</NavLink>
                  <NavLink to="/resources/documentation/workspace/tasks-operations/support-requests" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Support Requests</NavLink>
                  <NavLink to="/resources/documentation/workspace/tasks-operations/notices" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Notices</NavLink>
                  <NavLink to="/resources/documentation/workspace/tasks-operations/operational-workflows" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Operational Workflows</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-communication')}>
                <span>Communication</span>
                <ChevronRight isOpen={expandedSections.includes('ws-communication')} />
              </div>
              {expandedSections.includes('ws-communication') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/communication/direct-communication" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Direct Communication</NavLink>
                  <NavLink to="/resources/documentation/workspace/communication/team-communication" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Team Communication</NavLink>
                  <NavLink to="/resources/documentation/workspace/communication/chain-of-command" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Chain of Command</NavLink>
                  <NavLink to="/resources/documentation/workspace/communication/reporting-communication" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Reporting-Based Communication</NavLink>
                  <NavLink to="/resources/documentation/workspace/communication/notifications" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Notifications</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-resources')}>
                <span>Resources</span>
                <ChevronRight isOpen={expandedSections.includes('ws-resources')} />
              </div>
              {expandedSections.includes('ws-resources') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/resources/org-resources" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Organization Resources</NavLink>
                  <NavLink to="/resources/documentation/workspace/resources/dept-resources" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Department Resources</NavLink>
                  <NavLink to="/resources/documentation/workspace/resources/training" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Training</NavLink>
                  <NavLink to="/resources/documentation/workspace/resources/training-participation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Training Participation</NavLink>
                  <NavLink to="/resources/documentation/workspace/resources/resource-access" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Resource Access</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-onboarding')}>
                <span>Onboarding</span>
                <ChevronRight isOpen={expandedSections.includes('ws-onboarding')} />
              </div>
              {expandedSections.includes('ws-onboarding') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/onboarding/welcome-setup" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Welcome & Setup</NavLink>
                  <NavLink to="/resources/documentation/workspace/onboarding/onboarding-questions" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Onboarding Questions</NavLink>
                  <NavLink to="/resources/documentation/workspace/onboarding/agreements" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agreements</NavLink>
                  <NavLink to="/resources/documentation/workspace/onboarding/digital-signatures" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Digital Signatures</NavLink>
                  <NavLink to="/resources/documentation/workspace/onboarding/private-key" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Private Key</NavLink>
                  <NavLink to="/resources/documentation/workspace/onboarding/completing-onboarding" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Completing Onboarding</NavLink>
                </div>
              )}
            </div>
          )}
          
          {/* Robot */}
          <div className="docs__nav-item docs__nav-item--with-meta" onClick={toggleRobot}>
            <span className="docs__nav-text">Craftly Robot</span>
            <div className="docs__nav-meta">
              <span className="docs__tag">v2.0.1</span>
              <ChevronRight isOpen={isRobotOpen} />
            </div>
          </div>
          
          {isRobotOpen && (
            <div className="docs__nav-subnav">
              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('robot-overview')}>
                <span>Overview</span>
                <ChevronRight isOpen={expandedSections.includes('robot-overview')} />
              </div>
              {expandedSections.includes('robot-overview') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/robot/overview/what-is-craftly-robot" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>What is Craftly Robot?</NavLink>
                  <NavLink to="/resources/documentation/robot/overview/architecture" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Architecture</NavLink>
                  <NavLink to="/resources/documentation/robot/overview/how-robot-works" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>How Robot Works</NavLink>
                  <NavLink to="/resources/documentation/robot/overview/agent-model" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agent Model</NavLink>
                  <NavLink to="/resources/documentation/robot/overview/current-status" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Current Status</NavLink>
                  <NavLink to="/resources/documentation/robot/overview/long-term-vision" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Long-Term Vision</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('robot-getting-started')}>
                <span>Getting Started</span>
                <ChevronRight isOpen={expandedSections.includes('robot-getting-started')} />
              </div>
              {expandedSections.includes('robot-getting-started') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/robot/getting-started/prerequisites" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Prerequisites</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/installation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Installation</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/quickstart" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Quickstart</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/create-first-agent" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Create Your First Agent</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/run-first-task" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Run Your First Task</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/next-steps" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Next Steps</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('robot-build-with-craftly')}>
                <span>Build with Craftly</span>
                <ChevronRight isOpen={expandedSections.includes('robot-build-with-craftly')} />
              </div>
              {expandedSections.includes('robot-build-with-craftly') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/robot/build-with-craftly/agents" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agents</NavLink>
                  <NavLink to="/resources/documentation/robot/build-with-craftly/tasks" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Tasks</NavLink>
                  <NavLink to="/resources/documentation/robot/build-with-craftly/tools" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Tools</NavLink>
                  <NavLink to="/resources/documentation/robot/build-with-craftly/workflows" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Workflows</NavLink>
                  <NavLink to="/resources/documentation/robot/build-with-craftly/context-memory" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Context & Memory</NavLink>
                  <NavLink to="/resources/documentation/robot/build-with-craftly/agent-runtime" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agent Runtime</NavLink>
                  <NavLink to="/resources/documentation/robot/build-with-craftly/integrations" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Integrations</NavLink>
                  <NavLink to="/resources/documentation/robot/build-with-craftly/custom-agents" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Custom Agents</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('robot-feature-overview')}>
                <span>Feature Overview</span>
                <ChevronRight isOpen={expandedSections.includes('robot-feature-overview')} />
              </div>
              {expandedSections.includes('robot-feature-overview') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/robot/feature-overview/agentic-ai" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agentic AI</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/tool-use" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Tool Use</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/planning-reasoning" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Planning & Reasoning</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/agent-discovery" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agent Discovery</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/agent-to-agent-negotiation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agent-to-Agent Negotiation</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/multi-agent-coordination" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Multi-Agent Coordination</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/privacy-boundaries" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Privacy Boundaries</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/human-confirmation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Human Confirmation</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/real-world-task-coordination" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Real-World Task Coordination</NavLink>
                </div>
              )}
            </div>
          )}
          
          <NavLink to="/resources/documentation/plan" className={({isActive}) => `docs__nav-item ${isActive ? 'docs__nav-link--active' : ''}`}>
            <span className="docs__nav-text">Craftly Plan</span>
          </NavLink>
          
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
