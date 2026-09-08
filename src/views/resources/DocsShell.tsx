"use client";

import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownIcon from "../../components/ui/DropdownIcon";
import { useDocsPage } from "../../contexts/DocsPageContext";
import "./DocsLayout.css";

interface DocsShellProps {
  children: ReactNode;
}

function DocsTOC() {
  const { tocItems } = useDocsPage();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  if (tocItems.length === 0) return null;

  return (
    <aside className="docs__sidebar docs__sidebar--right">
      <div className="docs__toc">
        <h4 className="docs__toc-title">On this Page</h4>
        <ul className="docs__toc-list">
          {tocItems.map((item) => (
            <li
              key={item.id}
              id={`toc-${item.id}`}
              className={`docs__toc-item ${activeId === item.id ? "docs__toc-item--active" : ""}`}
            >
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

let globalSidebarScroll = 0;

export default function DocsShell({ children }: DocsShellProps) {
  const pathname = usePathname() ?? "/";

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileSidebarOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isRobotOpen, setIsRobotOpen] = useState<boolean>(pathname.includes("/robot"));
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState<boolean>(pathname.includes("/workspace"));

  const [expandedSections, setExpandedSections] = useState<string[]>(() => {
    const sections: string[] = [];
    if (pathname.includes("/overview")) sections.push("ws-overview", "robot-overview");
    if (pathname.includes("/organization")) sections.push("ws-organization");
    if (pathname.includes("/people-roles")) sections.push("ws-people-roles");
    if (pathname.includes("/tasks-operations")) sections.push("ws-tasks-operations");
    if (pathname.includes("/communication")) sections.push("ws-communication");
    if (pathname.includes("/resources/")) sections.push("ws-resources");
    if (pathname.includes("/onboarding")) sections.push("ws-onboarding");
    if (pathname.includes("/robot/getting-started")) sections.push("robot-getting-started");
    if (pathname.includes("/robot/feature-overview")) sections.push("robot-feature-overview");
    return sections;
  });

  const toggleWorkspace = () => setIsWorkspaceOpen((o) => !o);
  const toggleRobot = () => setIsRobotOpen((o) => !o);
  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  useEffect(() => {
    if (pathname.includes("/workspace") && !isWorkspaceOpen) setIsWorkspaceOpen(true);
    if (pathname.includes("/robot") && !isRobotOpen) setIsRobotOpen(true);

    const sectionMap: Record<string, string> = {
      "/overview": "ws-overview",
      "/organization": "ws-organization",
      "/people-roles": "ws-people-roles",
      "/tasks-operations": "ws-tasks-operations",
      "/communication": "ws-communication",
      "/resources/": "ws-resources",
      "/onboarding": "ws-onboarding",
      "/robot/getting-started": "robot-getting-started",
      "/robot/feature-overview": "robot-feature-overview",
    };

    Object.entries(sectionMap).forEach(([pathFragment, sectionId]) => {
      if (pathname.includes(pathFragment) && !expandedSections.includes(sectionId)) {
        setExpandedSections((prev) => [...prev, sectionId]);
      }
    });
  }, [pathname]);

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
    sidebar.addEventListener("scroll", handleScroll, { passive: true });
    return () => sidebar.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;
    const timeoutId = setTimeout(() => {
      const activeLink = sidebar.querySelector(
        ".docs__nav-link--active, .docs__nav-subitem--active",
      ) as HTMLElement;
      if (activeLink) {
        const sidebarRect = sidebar.getBoundingClientRect();
        const activeLinkRect = activeLink.getBoundingClientRect();
        if (activeLinkRect.top < sidebarRect.top || activeLinkRect.bottom > sidebarRect.bottom) {
          const scrollTop =
            sidebar.scrollTop +
            (activeLinkRect.top - sidebarRect.top) -
            sidebarRect.height / 2 +
            activeLinkRect.height / 2;
          sidebar.scrollTo({ top: scrollTop, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="docs__container">
      <div className="docs__progress-bar" style={{ width: `${scrollProgress}%` }} />

      <div className="docs__mobile-header">
        <button
          className={`docs__mobile-toggle ${mobileSidebarOpen ? "docs__mobile-toggle--open" : ""}`}
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      {/* Mobile Backdrop */}
      {mobileSidebarOpen && (
        <div className="docs__mobile-backdrop" onClick={() => setMobileSidebarOpen(false)} />
      )}

      <aside
        className={`docs__sidebar docs__sidebar--left ${mobileSidebarOpen ? "docs__sidebar--mobile-open" : ""}`}
        ref={sidebarRef}
      >
        <button className="docs__mobile-back" onClick={() => setMobileSidebarOpen(false)} aria-label="Close menu">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <nav className="docs__nav">
          <Link
            href="/resources/documentation"
            className={`docs__nav-link ${isActive("/resources/documentation") ? "docs__nav-link--active" : ""}`}
          >
            Home
          </Link>

          <div className="docs__nav-item docs__nav-item--with-meta" onClick={toggleWorkspace}>
            <span className="docs__nav-text">Craftly Workspace</span>
            <div className="docs__nav-meta">
              <span className="docs__tag">v3.8.5</span>
              <DropdownIcon isOpen={isWorkspaceOpen} size={18} />
            </div>
          </div>

          {isWorkspaceOpen && (
            <div className="docs__nav-subnav">
              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("ws-overview")}
              >
                <span>Overview</span>
                <DropdownIcon isOpen={expandedSections.includes("ws-overview")} size={16} />
              </div>
              {expandedSections.includes("ws-overview") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/workspace/overview/what-is-craftly-workspace"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/overview/what-is-craftly-workspace") ? "docs__nav-subitem--active" : ""}`}
                  >
                    What is Craftly Workspace?
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/overview/how-workspace-works"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/overview/how-workspace-works") ? "docs__nav-subitem--active" : ""}`}
                  >
                    How Workspace Works?
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/overview/workspace-structure"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/overview/workspace-structure") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Workspace Structure
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/overview/core-concepts"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/overview/core-concepts") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Core Concepts
                  </Link>
                </div>
              )}

              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("ws-organization")}
              >
                <span>Organization</span>
                <DropdownIcon isOpen={expandedSections.includes("ws-organization")} size={16} />
              </div>
              {expandedSections.includes("ws-organization") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/workspace/organization/org-structure"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/organization/org-structure") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Organization Structure
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/organization/departments"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/organization/departments") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Departments
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/organization/reporting-structure"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/organization/reporting-structure") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Reporting Structure
                  </Link>
                </div>
              )}

              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("ws-people-roles")}
              >
                <span>People & Roles</span>
                <DropdownIcon isOpen={expandedSections.includes("ws-people-roles")} size={16} />
              </div>
              {expandedSections.includes("ws-people-roles") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/workspace/people-roles/members"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/people-roles/members") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Members
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/people-roles/roles"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/people-roles/roles") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Roles
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/people-roles/permissions"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/people-roles/permissions") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Permissions
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/people-roles/managers"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/people-roles/managers") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Managers
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/people-roles/access-control"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/people-roles/access-control") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Access Control
                  </Link>
                </div>
              )}

              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("ws-tasks-operations")}
              >
                <span>Tasks & Operations</span>
                <DropdownIcon isOpen={expandedSections.includes("ws-tasks-operations")} size={16} />
              </div>
              {expandedSections.includes("ws-tasks-operations") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/workspace/tasks-operations/tasks"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/tasks-operations/tasks") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Tasks
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/tasks-operations/task-assignment"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/tasks-operations/task-assignment") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Task Assignment
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/tasks-operations/task-evidence"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/tasks-operations/task-evidence") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Task Evidence
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/tasks-operations/support-requests"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/tasks-operations/support-requests") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Support Requests
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/tasks-operations/notices"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/tasks-operations/notices") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Notice Board
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/tasks-operations/operational-workflows"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/tasks-operations/operational-workflows") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Projects
                  </Link>
                </div>
              )}

              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("ws-communication")}
              >
                <span>Communication</span>
                <DropdownIcon isOpen={expandedSections.includes("ws-communication")} size={16} />
              </div>
              {expandedSections.includes("ws-communication") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/workspace/communication/chain-of-command"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/communication/chain-of-command") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Chain of Command
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/communication/reporting-communication"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/communication/reporting-communication") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Reporting-Based Communication
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/communication/notifications"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/communication/notifications") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Notifications
                  </Link>
                </div>
              )}

              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("ws-resources")}
              >
                <span>Resources</span>
                <DropdownIcon isOpen={expandedSections.includes("ws-resources")} size={16} />
              </div>
              {expandedSections.includes("ws-resources") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/workspace/resources/org-resources"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/resources/org-resources") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Organization Resources
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/resources/dept-resources"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/resources/dept-resources") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Department Resources
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/resources/training"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/resources/training") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Training
                  </Link>
                </div>
              )}

              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("ws-onboarding")}
              >
                <span>Onboarding</span>
                <DropdownIcon isOpen={expandedSections.includes("ws-onboarding")} size={16} />
              </div>
              {expandedSections.includes("ws-onboarding") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/workspace/onboarding/welcome-setup"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/onboarding/welcome-setup") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Welcome & Setup
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/onboarding/onboarding-questions"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/onboarding/onboarding-questions") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Onboarding Questions
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/onboarding/agreements"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/onboarding/agreements") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Agreements
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/onboarding/private-key"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/onboarding/private-key") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Private Key
                  </Link>
                  <Link
                    href="/resources/documentation/workspace/onboarding/completing-onboarding"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/workspace/onboarding/completing-onboarding") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Completing Onboarding
                  </Link>
                </div>
              )}
            </div>
          )}

          <div className="docs__nav-item docs__nav-item--with-meta" onClick={toggleRobot}>
            <span className="docs__nav-text">Craftly Robot</span>
            <div className="docs__nav-meta">
              <DropdownIcon isOpen={isRobotOpen} size={18} />
            </div>
          </div>

          {isRobotOpen && (
            <div className="docs__nav-subnav">
              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("robot-overview")}
              >
                <span>Overview</span>
                <DropdownIcon isOpen={expandedSections.includes("robot-overview")} size={16} />
              </div>
              {expandedSections.includes("robot-overview") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/robot/overview/what-is-craftly-robot"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/overview/what-is-craftly-robot") ? "docs__nav-subitem--active" : ""}`}
                  >
                    What is Craftly Robot?
                  </Link>
                  <Link
                    href="/resources/documentation/robot/overview/architecture"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/overview/architecture") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Architecture
                  </Link>
                  <Link
                    href="/resources/documentation/robot/overview/how-robot-works"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/overview/how-robot-works") ? "docs__nav-subitem--active" : ""}`}
                  >
                    How Robot Works
                  </Link>
                  <Link
                    href="/resources/documentation/robot/overview/agent-model"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/overview/agent-model") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Agent Model
                  </Link>
                  <Link
                    href="/resources/documentation/robot/overview/current-status"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/overview/current-status") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Current Status
                  </Link>
                  <Link
                    href="/resources/documentation/robot/overview/long-term-vision"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/overview/long-term-vision") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Long-Term Vision
                  </Link>
                </div>
              )}

              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("robot-getting-started")}
              >
                <span>Getting Started</span>
                <DropdownIcon
                  isOpen={expandedSections.includes("robot-getting-started")}
                  size={16}
                />
              </div>
              {expandedSections.includes("robot-getting-started") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/robot/getting-started/before-you-start"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/getting-started/before-you-start") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Before You Start
                  </Link>
                  <Link
                    href="/resources/documentation/robot/getting-started/install-craftly-robot"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/getting-started/install-craftly-robot") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Install Craftly Robot
                  </Link>
                  <Link
                    href="/resources/documentation/robot/getting-started/sign-in-private-key"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/getting-started/sign-in-private-key") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Sign In with Your Private Key
                  </Link>
                  <Link
                    href="/resources/documentation/robot/getting-started/your-first-robot"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/getting-started/your-first-robot") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Your First Robot
                  </Link>
                  <Link
                    href="/resources/documentation/robot/getting-started/discover-and-connect"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/getting-started/discover-and-connect") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Discover & Connect
                  </Link>
                  <Link
                    href="/resources/documentation/robot/getting-started/agent-to-agent-negotiation"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/getting-started/agent-to-agent-negotiation") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Agent-to-Agent Negotiation
                  </Link>
                  <Link
                    href="/resources/documentation/robot/getting-started/run-first-task"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/getting-started/run-first-task") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Run Your First Real-World Task
                  </Link>
                  <Link
                    href="/resources/documentation/robot/getting-started/next-steps"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/getting-started/next-steps") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Next Steps
                  </Link>
                </div>
              )}

              <div
                className="docs__nav-subitem docs__nav-subitem--toggle"
                onClick={() => toggleSection("robot-feature-overview")}
              >
                <span>Feature Overview</span>
                <DropdownIcon
                  isOpen={expandedSections.includes("robot-feature-overview")}
                  size={16}
                />
              </div>
              {expandedSections.includes("robot-feature-overview") && (
                <div
                  className="docs__nav-subnav"
                  style={{
                    marginLeft: "12px",
                    marginTop: "0",
                    marginBottom: "0",
                    paddingLeft: "4px",
                  }}
                >
                  <Link
                    href="/resources/documentation/robot/feature-overview/agentic-ai"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/feature-overview/agentic-ai") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Agentic AI
                  </Link>
                  <Link
                    href="/resources/documentation/robot/feature-overview/agent-to-agent-negotiation"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/feature-overview/agent-to-agent-negotiation") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Agent-to-Agent Negotiation
                  </Link>
                  <Link
                    href="/resources/documentation/robot/feature-overview/human-confirmation"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/feature-overview/human-confirmation") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Human Confirmation
                  </Link>
                  <Link
                    href="/resources/documentation/robot/feature-overview/real-world-task-coordination"
                    className={`docs__nav-subitem ${isActive("/resources/documentation/robot/feature-overview/real-world-task-coordination") ? "docs__nav-subitem--active" : ""}`}
                  >
                    Real-World Task Coordination
                  </Link>
                </div>
              )}
            </div>
          )}

          <Link
            href="/resources/documentation/plan"
            className={`docs__nav-link ${isActive("/resources/documentation/plan") ? "docs__nav-link--active" : ""}`}
          >
            <span className="docs__nav-text">Craftly Plan</span>
          </Link>

          <Link
            href="/resources/documentation/salary-compensation"
            className={`docs__nav-link ${isActive("/resources/documentation/salary-compensation") ? "docs__nav-link--active" : ""}`}
          >
            <span className="docs__nav-text">Salary & Compensation</span>
          </Link>

          <Link
            href="/resources/documentation/faq"
            className={`docs__nav-link ${isActive("/resources/documentation/faq") ? "docs__nav-link--active" : ""}`}
          >
            <span className="docs__nav-text">FAQ</span>
          </Link>
        </nav>
      </aside>

      <main className="docs__main">{children}</main>

      {/* Right Sidebar - Table of Contents */}
      <DocsTOC />

      {showBackToTop && (
        <button className="docs__back-to-top" onClick={scrollToTop} aria-label="Back to top">
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
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  );
}
