import React, { useState, useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './DocsLayout.css';

const DOCS_ROUTES = [
  { path: "/resources/documentation", label: "Home" },
  { path: "/resources/documentation/workspace/overview/what-is-craftly-workspace", label: "What is Craftly Workspace?" },
  { path: "/resources/documentation/workspace/overview/how-workspace-works", label: "How Workspace Works?" },

  { path: "/resources/documentation/workspace/overview/core-concepts", label: "Core Concepts" },
  { path: "/resources/documentation/workspace/getting-started/create-account", label: "Create Your Account" },
  { path: "/resources/documentation/workspace/getting-started/join-organization", label: "Join an Organization" },
  { path: "/resources/documentation/workspace/getting-started/complete-profile", label: "Complete Your Profile" },
  { path: "/resources/documentation/workspace/getting-started/understand-workspace", label: "Understanding Your Workspace" },
  { path: "/resources/documentation/workspace/getting-started/first-task", label: "Your First Task" },

  { path: "/resources/documentation/workspace/organization/departments", label: "Departments" },
  { path: "/resources/documentation/workspace/organization/teams", label: "Teams" },
  { path: "/resources/documentation/workspace/organization/reporting-structure", label: "Reporting Structure" },
  { path: "/resources/documentation/workspace/organization/roles-permissions", label: "Roles & Permissions" },
  { path: "/resources/documentation/workspace/people-roles/members", label: "Members" },
  { path: "/resources/documentation/workspace/people-roles/roles", label: "Roles" },
  { path: "/resources/documentation/workspace/people-roles/permissions", label: "Permissions" },
  { path: "/resources/documentation/workspace/people-roles/managers", label: "Managers" },

  { path: "/resources/documentation/workspace/tasks-operations/tasks", label: "Tasks" },
  { path: "/resources/documentation/workspace/tasks-operations/task-assignment", label: "Task Assignment" },
  { path: "/resources/documentation/workspace/tasks-operations/task-evidence", label: "Task Evidence" },
  { path: "/resources/documentation/workspace/tasks-operations/support-requests", label: "Support Requests" },
  { path: "/resources/documentation/workspace/tasks-operations/notices", label: "Notices" },
  { path: "/resources/documentation/workspace/tasks-operations/operational-workflows", label: "Operational Workflows" },
  { path: "/resources/documentation/workspace/communication/direct-communication", label: "Direct Communication" },
  { path: "/resources/documentation/workspace/communication/team-communication", label: "Team Communication" },
  { path: "/resources/documentation/workspace/communication/chain-of-command", label: "Chain of Command" },
  { path: "/resources/documentation/workspace/communication/reporting-communication", label: "Reporting-Based Communication" },
  { path: "/resources/documentation/workspace/communication/notifications", label: "Notifications" },

  { path: "/resources/documentation/workspace/resources/dept-resources", label: "Department Resources" },
  { path: "/resources/documentation/workspace/resources/training", label: "Training" },
  { path: "/resources/documentation/workspace/resources/training-participation", label: "Training Participation" },
  { path: "/resources/documentation/workspace/resources/resource-access", label: "Resource Access" },
  { path: "/resources/documentation/workspace/onboarding/welcome-setup", label: "Welcome & Setup" },
  { path: "/resources/documentation/workspace/onboarding/onboarding-questions", label: "Onboarding Questions" },
  { path: "/resources/documentation/workspace/onboarding/agreements", label: "Agreements" },
  { path: "/resources/documentation/workspace/onboarding/digital-signatures", label: "Digital Signatures" },
  { path: "/resources/documentation/workspace/onboarding/private-key", label: "Private Key" },
  { path: "/resources/documentation/workspace/onboarding/completing-onboarding", label: "Completing Onboarding" },
  { path: "/resources/documentation/robot/overview/what-is-craftly-robot", label: "What is Craftly Robot?" },
  { path: "/resources/documentation/robot/overview/architecture", label: "Architecture" },
  { path: "/resources/documentation/robot/overview/how-robot-works", label: "How Robot Works" },
  { path: "/resources/documentation/robot/overview/agent-model", label: "Agent Model" },
  { path: "/resources/documentation/robot/overview/current-status", label: "Current Status" },
  { path: "/resources/documentation/robot/overview/long-term-vision", label: "Long-Term Vision" },
  { path: "/resources/documentation/robot/getting-started/prerequisites", label: "Prerequisites" },
  { path: "/resources/documentation/robot/getting-started/installation", label: "Installation" },
  { path: "/resources/documentation/robot/getting-started/quickstart", label: "Quickstart" },
  { path: "/resources/documentation/robot/getting-started/create-first-agent", label: "Create Your First Agent" },
  { path: "/resources/documentation/robot/getting-started/run-first-task", label: "Run Your First Task" },
  { path: "/resources/documentation/robot/getting-started/next-steps", label: "Next Steps" },
  { path: "/resources/documentation/robot/build-with-craftly/agents", label: "Agents" },
  { path: "/resources/documentation/robot/build-with-craftly/tasks", label: "Tasks" },
  { path: "/resources/documentation/robot/build-with-craftly/tools", label: "Tools" },
  { path: "/resources/documentation/robot/build-with-craftly/workflows", label: "Workflows" },
  { path: "/resources/documentation/robot/build-with-craftly/context-memory", label: "Context & Memory" },
  { path: "/resources/documentation/robot/build-with-craftly/agent-runtime", label: "Agent Runtime" },
  { path: "/resources/documentation/robot/build-with-craftly/integrations", label: "Integrations" },
  { path: "/resources/documentation/robot/build-with-craftly/custom-agents", label: "Custom Agents" },
  { path: "/resources/documentation/robot/feature-overview/agentic-ai", label: "Agentic AI" },
  { path: "/resources/documentation/robot/feature-overview/tool-use", label: "Tool Use" },
  { path: "/resources/documentation/robot/feature-overview/planning-reasoning", label: "Planning & Reasoning" },
  { path: "/resources/documentation/robot/feature-overview/agent-discovery", label: "Agent Discovery" },
  { path: "/resources/documentation/robot/feature-overview/agent-to-agent-negotiation", label: "Agent-to-Agent Negotiation" },
  { path: "/resources/documentation/robot/feature-overview/multi-agent-coordination", label: "Multi-Agent Coordination" },
  { path: "/resources/documentation/robot/feature-overview/privacy-boundaries", label: "Privacy Boundaries" },
  { path: "/resources/documentation/robot/feature-overview/human-confirmation", label: "Human Confirmation" },
  { path: "/resources/documentation/robot/feature-overview/real-world-task-coordination", label: "Real-World Task Coordination" },
  { path: "/resources/documentation/plan", label: "Craftly Plan" },
  { path: "/resources/documentation/faq", label: "FAQ" }
];

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

  const currentIndex = DOCS_ROUTES.findIndex(r => r.path === location.pathname);
  const prevRoute = currentIndex > 0 ? DOCS_ROUTES[currentIndex - 1] : null;
  const nextRoute = currentIndex !== -1 && currentIndex < DOCS_ROUTES.length - 1 ? DOCS_ROUTES[currentIndex + 1] : null;

  const [activeId, setActiveId] = useState<string>('welcome');
  
  // Top-level toggles
  const [isRobotOpen, setIsRobotOpen] = useState<boolean>(location.pathname.includes('/robot'));
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState<boolean>(location.pathname.includes('/workspace'));

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

  useEffect(() => {
    if (activeId) {
      const activeElement = document.getElementById(`toc-${activeId}`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'auto', block: 'nearest' });
      }
    }
  }, [activeId]);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const timeoutId = setTimeout(() => {
      const activeLink = sidebar.querySelector('.docs__nav-link--active, .docs__nav-subitem--active') as HTMLElement;
      if (activeLink) {
        const sidebarRect = sidebar.getBoundingClientRect();
        const activeLinkRect = activeLink.getBoundingClientRect();

        // Check if active link is out of bounds
        if (activeLinkRect.top < sidebarRect.top || activeLinkRect.bottom > sidebarRect.bottom) {
          const scrollTop = sidebar.scrollTop + (activeLinkRect.top - sidebarRect.top) - (sidebarRect.height / 2) + (activeLinkRect.height / 2);
          sidebar.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

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
                  <NavLink to="/resources/documentation/workspace/overview/how-workspace-works" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>How Workspace Works?</NavLink>

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
          
          <NavLink to="/resources/documentation/faq" className={({isActive}) => `docs__nav-item ${isActive ? 'docs__nav-link--active' : ''}`}>
            <span className="docs__nav-text">FAQ</span>
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="docs__main">
        {children}

        {(prevRoute || nextRoute) && (
          <div className="docs__page-nav">
            {prevRoute ? (
              <Link to={prevRoute.path} className="docs__page-nav-link docs__page-nav-link--prev">
                <span className="docs__page-nav-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </span>
                <span className="docs__page-nav-label">{prevRoute.label}</span>
              </Link>
            ) : <div />}
            {nextRoute ? (
              <Link to={nextRoute.path} className="docs__page-nav-link docs__page-nav-link--next">
                <span className="docs__page-nav-label">{nextRoute.label}</span>
                <span className="docs__page-nav-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
              </Link>
            ) : <div />}
          </div>
        )}
      </main>

      {/* Right Sidebar */}
      <aside className="docs__sidebar docs__sidebar--right">
        {tocItems.length > 0 && (
          <div className="docs__toc">
            <h4 className="docs__toc-title">On this Page</h4>
            <ul className="docs__toc-list">
              {tocItems.map((item) => (
                <li key={item.id} id={`toc-${item.id}`} className={`docs__toc-item ${activeId === item.id ? 'docs__toc-item--active' : ''}`}>
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
