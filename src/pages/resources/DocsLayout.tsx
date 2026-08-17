import React, { useState, useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DropdownIcon from '../../components/ui/DropdownIcon';
import './DocsLayout.css';

const DOCS_ROUTES = [
  { path: "/resources/documentation", label: "Home" },
  { path: "/resources/documentation/workspace/overview/what-is-craftly-workspace", label: "What is Craftly Workspace?" },
  { path: "/resources/documentation/workspace/overview/how-workspace-works", label: "How Workspace Works?" },

  { path: "/resources/documentation/workspace/overview/core-concepts", label: "Core Concepts" },

  { path: "/resources/documentation/workspace/organization/departments", label: "Departments" },
  { path: "/resources/documentation/workspace/organization/reporting-structure", label: "Reporting Structure" },
  { path: "/resources/documentation/workspace/people-roles/members", label: "Members" },
  { path: "/resources/documentation/workspace/people-roles/roles", label: "Roles" },
  { path: "/resources/documentation/workspace/people-roles/permissions", label: "Permissions" },
  { path: "/resources/documentation/workspace/people-roles/managers", label: "Managers" },

  { path: "/resources/documentation/workspace/tasks-operations/tasks", label: "Tasks" },


  { path: "/resources/documentation/workspace/tasks-operations/support-requests", label: "Support Requests" },
  { path: "/resources/documentation/workspace/tasks-operations/notices", label: "Notice Board" },
  { path: "/resources/documentation/workspace/tasks-operations/operational-workflows", label: "Projects" },
  { path: "/resources/documentation/workspace/communication/chain-of-command", label: "Chain of Command" },
  { path: "/resources/documentation/workspace/communication/reporting-communication", label: "Reporting-Based Communication" },
  { path: "/resources/documentation/workspace/communication/notifications", label: "Notifications" },

  { path: "/resources/documentation/workspace/resources/dept-resources", label: "Department Resources" },
  { path: "/resources/documentation/workspace/resources/training", label: "Training" },
  { path: "/resources/documentation/workspace/onboarding/welcome-setup", label: "Welcome & Setup" },
  { path: "/resources/documentation/workspace/onboarding/onboarding-questions", label: "Onboarding Questions" },
  { path: "/resources/documentation/workspace/onboarding/agreements", label: "Agreements" },
  { path: "/resources/documentation/workspace/onboarding/private-key", label: "Private Key" },
  { path: "/resources/documentation/workspace/onboarding/completing-onboarding", label: "Completing Onboarding" },
  { path: "/resources/documentation/robot/overview/what-is-craftly-robot", label: "What is Craftly Robot?" },
  { path: "/resources/documentation/robot/overview/architecture", label: "Architecture" },
  { path: "/resources/documentation/robot/overview/how-robot-works", label: "How Robot Works" },
  { path: "/resources/documentation/robot/overview/agent-model", label: "Agent Model" },
  { path: "/resources/documentation/robot/overview/current-status", label: "Current Status" },
  { path: "/resources/documentation/robot/overview/long-term-vision", label: "Long-Term Vision" },
  { path: "/resources/documentation/robot/getting-started/before-you-start", label: "Before You Start" },
  { path: "/resources/documentation/robot/getting-started/install-craftly-robot", label: "Install Craftly Robot" },
  { path: "/resources/documentation/robot/getting-started/sign-in-private-key", label: "Sign In with Your Private Key" },
  { path: "/resources/documentation/robot/getting-started/your-first-robot", label: "Your First Robot" },
  { path: "/resources/documentation/robot/getting-started/discover-and-connect", label: "Discover & Connect" },
  { path: "/resources/documentation/robot/getting-started/agent-to-agent-negotiation", label: "Agent-to-Agent Negotiation" },
  { path: "/resources/documentation/robot/getting-started/run-first-task", label: "Run Your First Real-World Task" },
  { path: "/resources/documentation/robot/getting-started/next-steps", label: "Next Steps" },

  { path: "/resources/documentation/robot/feature-overview/agentic-ai", label: "Agentic AI" },
  { path: "/resources/documentation/robot/feature-overview/agent-to-agent-negotiation", label: "Agent-to-Agent Negotiation" },
  { path: "/resources/documentation/robot/feature-overview/human-confirmation", label: "Human Confirmation" },
  { path: "/resources/documentation/robot/feature-overview/real-world-task-coordination", label: "Real-World Task Coordination" },
  { path: "/resources/documentation/plan", label: "Craftly Plan" },
  { path: "/resources/documentation/salary-compensation", label: "Salary & Compensation" },
  { path: "/resources/documentation/faq", label: "FAQ" }
];

let globalSidebarScroll = 0;

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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  
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

  // Handle bottom of page reached
  useEffect(() => {
    const handleScroll = () => {
      if (!tocItems || tocItems.length === 0) return;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveId(tocItems[tocItems.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

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

  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="docs__container">
      <Helmet>
        <title>{title} — Craftly Documentation</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="docs__mobile-header">
        <button 
          className={`docs__mobile-toggle ${mobileSidebarOpen ? 'docs__mobile-toggle--open' : ''}`} 
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        >
          <div className="docs__mobile-toggle-lines">
            <span className="docs__mobile-toggle-line" />
            <span className="docs__mobile-toggle-line" />
            <span className="docs__mobile-toggle-line" />
          </div>
          Documentation Menu
        </button>
      </div>

      {/* Left Sidebar */}
      <aside className={`docs__sidebar docs__sidebar--left ${mobileSidebarOpen ? 'docs__sidebar--mobile-open' : ''}`} ref={sidebarRef}>
        <nav className="docs__nav">
          <NavLink to="/resources/documentation" className={({isActive}) => `docs__nav-link ${isActive ? 'docs__nav-link--active' : ''}`} end>
            Home
          </NavLink>
          
          {/* Workspace */}
          <div className="docs__nav-item docs__nav-item--with-meta" onClick={toggleWorkspace}>
            <span className="docs__nav-text">Craftly Workspace</span>
            <div className="docs__nav-meta">
              <span className="docs__tag">v3.8.5</span>
              <DropdownIcon isOpen={isWorkspaceOpen} size={18} />
            </div>
          </div>
          
          {isWorkspaceOpen && (
            <div className="docs__nav-subnav">
              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-overview')}>
                <span>Overview</span>
                <DropdownIcon isOpen={expandedSections.includes('ws-overview')} size={16} />
              </div>
              {expandedSections.includes('ws-overview') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/overview/what-is-craftly-workspace" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>What is Craftly Workspace?</NavLink>
                  <NavLink to="/resources/documentation/workspace/overview/how-workspace-works" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>How Workspace Works?</NavLink>

                  <NavLink to="/resources/documentation/workspace/overview/core-concepts" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Core Concepts</NavLink>
                </div>
              )}



              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-organization')}>
                <span>Organization</span>
                <DropdownIcon isOpen={expandedSections.includes('ws-organization')} size={16} />
              </div>
              {expandedSections.includes('ws-organization') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>

                  <NavLink to="/resources/documentation/workspace/organization/departments" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Departments</NavLink>
                  <NavLink to="/resources/documentation/workspace/organization/reporting-structure" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Reporting Structure</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-people-roles')}>
                <span>People & Roles</span>
                <DropdownIcon isOpen={expandedSections.includes('ws-people-roles')} size={16} />
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
                <DropdownIcon isOpen={expandedSections.includes('ws-tasks-operations')} size={16} />
              </div>
              {expandedSections.includes('ws-tasks-operations') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/tasks-operations/tasks" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Tasks</NavLink>


                  <NavLink to="/resources/documentation/workspace/tasks-operations/support-requests" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Support Requests</NavLink>
                  <NavLink to="/resources/documentation/workspace/tasks-operations/notices" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Notice Board</NavLink>
                  <NavLink to="/resources/documentation/workspace/tasks-operations/operational-workflows" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Projects</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-communication')}>
                <span>Communication</span>
                <DropdownIcon isOpen={expandedSections.includes('ws-communication')} size={16} />
              </div>
              {expandedSections.includes('ws-communication') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/communication/chain-of-command" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Chain of Command</NavLink>
                  <NavLink to="/resources/documentation/workspace/communication/reporting-communication" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Reporting-Based Communication</NavLink>
                  <NavLink to="/resources/documentation/workspace/communication/notifications" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Notifications</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-resources')}>
                <span>Resources</span>
                <DropdownIcon isOpen={expandedSections.includes('ws-resources')} size={16} />
              </div>
              {expandedSections.includes('ws-resources') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>

                  <NavLink to="/resources/documentation/workspace/resources/dept-resources" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Department Resources</NavLink>
                  <NavLink to="/resources/documentation/workspace/resources/training" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Training</NavLink>
                </div>
              )}

              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-onboarding')}>
                <span>Onboarding</span>
                <DropdownIcon isOpen={expandedSections.includes('ws-onboarding')} size={16} />
              </div>
              {expandedSections.includes('ws-onboarding') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/workspace/onboarding/welcome-setup" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Welcome & Setup</NavLink>
                  <NavLink to="/resources/documentation/workspace/onboarding/onboarding-questions" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Onboarding Questions</NavLink>
                  <NavLink to="/resources/documentation/workspace/onboarding/agreements" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agreements</NavLink>
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
              <span className="docs__tag">v1.0.150</span>
              <DropdownIcon isOpen={isRobotOpen} size={18} />
            </div>
          </div>
          
          {isRobotOpen && (
            <div className="docs__nav-subnav">
              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('robot-overview')}>
                <span>Overview</span>
                <DropdownIcon isOpen={expandedSections.includes('robot-overview')} size={16} />
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
                <DropdownIcon isOpen={expandedSections.includes('robot-getting-started')} size={16} />
              </div>
              {expandedSections.includes('robot-getting-started') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/robot/getting-started/before-you-start" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Before You Start</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/install-craftly-robot" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Install Craftly Robot</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/sign-in-private-key" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Sign In with Your Private Key</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/your-first-robot" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Your First Robot</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/discover-and-connect" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Discover & Connect</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/agent-to-agent-negotiation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agent-to-Agent Negotiation</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/run-first-task" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Run Your First Real-World Task</NavLink>
                  <NavLink to="/resources/documentation/robot/getting-started/next-steps" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Next Steps</NavLink>
                </div>
              )}



              <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('robot-feature-overview')}>
                <span>Feature Overview</span>
                <DropdownIcon isOpen={expandedSections.includes('robot-feature-overview')} size={16} />
              </div>
              {expandedSections.includes('robot-feature-overview') && (
                <div className="docs__nav-subnav" style={{ marginLeft: '12px', marginTop: '0', marginBottom: '0', paddingLeft: '4px' }}>
                  <NavLink to="/resources/documentation/robot/feature-overview/agentic-ai" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agentic AI</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/agent-to-agent-negotiation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Agent-to-Agent Negotiation</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/human-confirmation" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Human Confirmation</NavLink>
                  <NavLink to="/resources/documentation/robot/feature-overview/real-world-task-coordination" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Real-World Task Coordination</NavLink>
                </div>
              )}
            </div>
          )}
          
          <NavLink to="/resources/documentation/plan" className={({isActive}) => `docs__nav-item ${isActive ? 'docs__nav-link--active' : ''}`}>
            <span className="docs__nav-text">Craftly Plan</span>
          </NavLink>

          <NavLink to="/resources/documentation/salary-compensation" className={({isActive}) => `docs__nav-item ${isActive ? 'docs__nav-link--active' : ''}`}>
            <span className="docs__nav-text">Salary & Compensation</span>
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
