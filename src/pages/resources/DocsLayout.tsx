import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DocsSidebar from '../../components/docs/DocsSidebar';
import DocsToc from '../../components/docs/DocsToc';
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

interface DocsLayoutProps {
  title: string;
  description: string;
  tocItems?: { id: string; label: string }[];
  children: ReactNode;
}

export default function DocsLayout({ title, description, tocItems = [], children }: DocsLayoutProps) {
  const location = useLocation();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  const currentIndex = DOCS_ROUTES.findIndex(r => r.path === location.pathname);
  const prevRoute = currentIndex > 0 ? DOCS_ROUTES[currentIndex - 1] : null;
  const nextRoute = currentIndex !== -1 && currentIndex < DOCS_ROUTES.length - 1 ? DOCS_ROUTES[currentIndex + 1] : null;

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

      <DocsSidebar mobileSidebarOpen={mobileSidebarOpen} setMobileSidebarOpen={setMobileSidebarOpen} />

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

      <DocsToc tocItems={tocItems} />
    </div>
  );
}
