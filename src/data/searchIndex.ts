export interface SearchItem {
  title: string;
  description: string;
  route: string;
  category: "docs" | "pages" | "actions";
}

export const searchIndex: SearchItem[] = [
  // Marketing Pages
  {
    title: "Home",
    description: "Craftly — The operating system for intelligent organizations",
    route: "/",
    category: "pages",
  },
  {
    title: "Download",
    description: "Download Craftly Workspace for macOS, Windows, Linux, and Android",
    route: "/download",
    category: "pages",
  },
  {
    title: "Vision",
    description: "The Craftly plan: Workspace → Robot → Glass",
    route: "/vision",
    category: "pages",
  },
  {
    title: "Use Cases",
    description: "Who Craftly is for and how it's used",
    route: "/use-cases",
    category: "pages",
  },
  {
    title: "About",
    description: "About Craftly and our mission",
    route: "/about",
    category: "pages",
  },
  {
    title: "Get Involved",
    description: "Contribute to Craftly",
    route: "/get-involved",
    category: "pages",
  },
  {
    title: "Pricing",
    description: "Simple, transparent pricing",
    route: "/pricing",
    category: "pages",
  },
  {
    title: "Contact",
    description: "Get in touch with Craftly",
    route: "/contact",
    category: "pages",
  },
  {
    title: "Workspace",
    description:
      "Craftly Workspace — Your intelligent workspace for operating modern organizations",
    route: "/products/workspace",
    category: "pages",
  },
  {
    title: "Robot",
    description: "Craftly Robot — An agentic AI system for autonomous software engineering",
    route: "/products/robot",
    category: "pages",
  },

  // Resource Pages
  {
    title: "Documentation",
    description: "Learn how to use Craftly products",
    route: "/resources/documentation",
    category: "pages",
  },
  {
    title: "Changelog",
    description: "Track the latest updates and improvements",
    route: "/resources/changelog",
    category: "pages",
  },
  {
    title: "Releases",
    description: "Download versions and release notes",
    route: "/resources/releases",
    category: "pages",
  },
  {
    title: "Support",
    description: "Get help with Craftly",
    route: "/resources/support",
    category: "pages",
  },
  {
    title: "FAQ",
    description: "Frequently asked questions",
    route: "/resources/documentation/faq",
    category: "pages",
  },
  {
    title: "Blog",
    description: "Craftly blog — insights and updates",
    route: "/resources/blog",
    category: "pages",
  },

  // Documentation Pages
  {
    title: "What is Craftly Workspace?",
    description: "Overview of Craftly Workspace",
    route: "/resources/documentation/workspace/overview/what-is-craftly-workspace",
    category: "docs",
  },
  {
    title: "Roles",
    description: "Managing roles in Craftly",
    route: "/resources/documentation/workspace/people-roles/roles",
    category: "docs",
  },
  {
    title: "Members",
    description: "Adding and managing team members",
    route: "/resources/documentation/workspace/people-roles/members",
    category: "docs",
  },
  {
    title: "Permissions",
    description: "Access control and permissions",
    route: "/resources/documentation/workspace/people-roles/permissions",
    category: "docs",
  },
  {
    title: "Tasks",
    description: "Task management in Craftly",
    route: "/resources/documentation/workspace/tasks-operations/tasks",
    category: "docs",
  },
  {
    title: "Task Assignment",
    description: "How to assign tasks",
    route: "/resources/documentation/workspace/tasks-operations/task-assignment",
    category: "docs",
  },
  {
    title: "Notices",
    description: "Creating and managing notices",
    route: "/resources/documentation/workspace/tasks-operations/notices",
    category: "docs",
  },
  {
    title: "Support Requests",
    description: "Handling support requests",
    route: "/resources/documentation/workspace/tasks-operations/support-requests",
    category: "docs",
  },
  {
    title: "Operational Workflows",
    description: "Setting up workflows",
    route: "/resources/documentation/workspace/tasks-operations/operational-workflows",
    category: "docs",
  },
  {
    title: "Department Resources",
    description: "Managing department resources",
    route: "/resources/documentation/workspace/resources/dept-resources",
    category: "docs",
  },
  {
    title: "Organization Resources",
    description: "Managing organization-wide resources",
    route: "/resources/documentation/workspace/resources/org-resources",
    category: "docs",
  },
  {
    title: "Training",
    description: "Training resources and materials",
    route: "/resources/documentation/workspace/resources/training",
    category: "docs",
  },
  {
    title: "Agent Model",
    description: "Craftly Robot agent architecture",
    route: "/resources/documentation/robot/overview/agent-model",
    category: "docs",
  },
  {
    title: "Current Status",
    description: "Robot development status",
    route: "/resources/documentation/robot/overview/current-status",
    category: "docs",
  },
  {
    title: "Agentic AI",
    description: "Understanding agentic AI in Craftly",
    route: "/resources/documentation/robot/feature-overview/agentic-ai",
    category: "docs",
  },
  {
    title: "Agent-to-Agent Negotiation",
    description: "How AI agents collaborate",
    route: "/resources/documentation/robot/feature-overview/agent-to-agent-negotiation",
    category: "docs",
  },

  // Actions
  {
    title: "Join Us",
    description: "Join the Craftly workspace",
    route: "https://sandbox-workspace.craftlyrobot.com/",
    category: "actions",
  },
];
