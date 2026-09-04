import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DropdownIcon from '../ui/DropdownIcon';

interface DocsSidebarProps {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
}

export default function DocsSidebar({ mobileSidebarOpen, setMobileSidebarOpen }: DocsSidebarProps) {
  const location = useLocation();
  const path = location.pathname;

  const [isRobotOpen, setIsRobotOpen] = useState<boolean>(path.includes('/robot'));
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState<boolean>(path.includes('/workspace'));

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

  let globalSidebarScroll = 0;
  const sidebarRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    sidebar.scrollTop = globalSidebarScroll;

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
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const timeoutId = setTimeout(() => {
      const activeLink = sidebar.querySelector('.docs__nav-link--active, .docs__nav-subitem--active') as HTMLElement;
      if (activeLink) {
        const sidebarRect = sidebar.getBoundingClientRect();
        const activeLinkRect = activeLink.getBoundingClientRect();

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
  }, [location.pathname, setMobileSidebarOpen]);

  return (
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
              <div className="docs__nav-subnav docs__nav-subnav--nested">
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
              <div className="docs__nav-subnav docs__nav-subnav--nested">
                <NavLink to="/resources/documentation/workspace/organization/departments" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Departments</NavLink>
                <NavLink to="/resources/documentation/workspace/organization/reporting-structure" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Reporting Structure</NavLink>
              </div>
            )}

            <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-people-roles')}>
              <span>People & Roles</span>
              <DropdownIcon isOpen={expandedSections.includes('ws-people-roles')} size={16} />
            </div>
            {expandedSections.includes('ws-people-roles') && (
              <div className="docs__nav-subnav docs__nav-subnav--nested">
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
              <div className="docs__nav-subnav docs__nav-subnav--nested">
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
              <div className="docs__nav-subnav docs__nav-subnav--nested">
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
              <div className="docs__nav-subnav docs__nav-subnav--nested">
                <NavLink to="/resources/documentation/workspace/resources/dept-resources" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Department Resources</NavLink>
                <NavLink to="/resources/documentation/workspace/resources/training" className={({isActive}) => `docs__nav-subitem ${isActive ? 'docs__nav-subitem--active' : ''}`}>Training</NavLink>
              </div>
            )}

            <div className="docs__nav-subitem docs__nav-subitem--toggle" onClick={() => toggleSection('ws-onboarding')}>
              <span>Onboarding</span>
              <DropdownIcon isOpen={expandedSections.includes('ws-onboarding')} size={16} />
            </div>
            {expandedSections.includes('ws-onboarding') && (
              <div className="docs__nav-subnav docs__nav-subnav--nested">
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
              <div className="docs__nav-subnav docs__nav-subnav--nested">
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
              <div className="docs__nav-subnav docs__nav-subnav--nested">
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
              <div className="docs__nav-subnav docs__nav-subnav--nested">
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
  );
}
