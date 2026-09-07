export interface DocSearchItem {
  title: string;
  description: string;
  url: string;
  category: string;
}

export const docSearchIndex: DocSearchItem[] = [
  // Workspace - Overview
  {
    title: "What is Craftly Workspace?",
    description: "Understand what Craftly is and how it helps organizations work better.",
    url: "/resources/documentation/workspace/overview/what-is-craftly-workspace",
    category: "Workspace",
  },
  {
    title: "How Workspace Works",
    description: "Learn the core concepts behind Craftly Workspace.",
    url: "/resources/documentation/workspace/overview/how-workspace-works",
    category: "Workspace",
  },
  {
    title: "Workspace Structure",
    description: "Understand the structure and layout of the workspace.",
    url: "/resources/documentation/workspace/overview/workspace-structure",
    category: "Workspace",
  },
  {
    title: "Core Concepts",
    description: "Key concepts and terminology used in Craftly Workspace.",
    url: "/resources/documentation/workspace/overview/core-concepts",
    category: "Workspace",
  },

  // Workspace - Onboarding
  {
    title: "Welcome & Setup",
    description: "Welcome packet and initial setup process.",
    url: "/resources/documentation/workspace/onboarding/welcome-setup",
    category: "Workspace",
  },
  {
    title: "Agreements",
    description: "Digital agreements and authorization setup.",
    url: "/resources/documentation/workspace/onboarding/agreements",
    category: "Workspace",
  },
  {
    title: "Private Key",
    description: "Setting up your private key for secure access.",
    url: "/resources/documentation/workspace/onboarding/private-key",
    category: "Workspace",
  },
  {
    title: "Onboarding Questions",
    description: "Questions asked during the onboarding process.",
    url: "/resources/documentation/workspace/onboarding/onboarding-questions",
    category: "Workspace",
  },
  {
    title: "Completing Onboarding",
    description: "Final steps to complete your onboarding.",
    url: "/resources/documentation/workspace/onboarding/completing-onboarding",
    category: "Workspace",
  },

  // Workspace - Organization
  {
    title: "Org Structure",
    description: "How organizations are structured in Craftly.",
    url: "/resources/documentation/workspace/organization/org-structure",
    category: "Workspace",
  },
  {
    title: "Departments",
    description: "Creating and managing departments.",
    url: "/resources/documentation/workspace/organization/departments",
    category: "Workspace",
  },
  {
    title: "Reporting Structure",
    description: "Understanding reporting hierarchy.",
    url: "/resources/documentation/workspace/organization/reporting-structure",
    category: "Workspace",
  },

  // Workspace - People & Roles
  {
    title: "Members",
    description: "Managing team members and their profiles.",
    url: "/resources/documentation/workspace/people-roles/members",
    category: "Workspace",
  },
  {
    title: "Roles",
    description: "Role-based access and permissions.",
    url: "/resources/documentation/workspace/people-roles/roles",
    category: "Workspace",
  },
  {
    title: "Managers",
    description: "Manager roles and responsibilities.",
    url: "/resources/documentation/workspace/people-roles/managers",
    category: "Workspace",
  },
  {
    title: "Permissions",
    description: "Understanding permission levels.",
    url: "/resources/documentation/workspace/people-roles/permissions",
    category: "Workspace",
  },
  {
    title: "Access Control",
    description: "Controlling who can access what.",
    url: "/resources/documentation/workspace/people-roles/access-control",
    category: "Workspace",
  },

  // Workspace - Tasks & Operations
  {
    title: "Tasks",
    description: "Creating, assigning, and managing tasks.",
    url: "/resources/documentation/workspace/tasks-operations/tasks",
    category: "Workspace",
  },
  {
    title: "Task Assignment",
    description: "How to assign tasks to team members.",
    url: "/resources/documentation/workspace/tasks-operations/task-assignment",
    category: "Workspace",
  },
  {
    title: "Task Evidence",
    description: "Evidence and verification for completed tasks.",
    url: "/resources/documentation/workspace/tasks-operations/task-evidence",
    category: "Workspace",
  },
  {
    title: "Notices",
    description: "Creating and managing notices and announcements.",
    url: "/resources/documentation/workspace/tasks-operations/notices",
    category: "Workspace",
  },
  {
    title: "Operational Workflows",
    description: "Setting up and managing workflows.",
    url: "/resources/documentation/workspace/tasks-operations/operational-workflows",
    category: "Workspace",
  },
  {
    title: "Support Requests",
    description: "Handling support requests and tickets.",
    url: "/resources/documentation/workspace/tasks-operations/support-requests",
    category: "Workspace",
  },

  // Workspace - Communication
  {
    title: "Chain of Command",
    description: "Communication hierarchy and protocols.",
    url: "/resources/documentation/workspace/communication/chain-of-command",
    category: "Workspace",
  },
  {
    title: "Notifications",
    description: "Notification settings and management.",
    url: "/resources/documentation/workspace/communication/notifications",
    category: "Workspace",
  },
  {
    title: "Reporting Communication",
    description: "Communication through reporting channels.",
    url: "/resources/documentation/workspace/communication/reporting-communication",
    category: "Workspace",
  },

  // Workspace - Resources
  {
    title: "Dept Resources",
    description: "Managing department-level resources.",
    url: "/resources/documentation/workspace/resources/dept-resources",
    category: "Workspace",
  },
  {
    title: "Org Resources",
    description: "Organization-wide resource management.",
    url: "/resources/documentation/workspace/resources/org-resources",
    category: "Workspace",
  },
  {
    title: "Training",
    description: "Training materials and resources.",
    url: "/resources/documentation/workspace/resources/training",
    category: "Workspace",
  },

  // Robot - Overview
  {
    title: "What is Craftly Robot?",
    description: "Understand what Robot is and how it works.",
    url: "/resources/documentation/robot/overview/what-is-craftly-robot",
    category: "Robot",
  },
  {
    title: "How Robot Works",
    description: "The technology and architecture behind Robot.",
    url: "/resources/documentation/robot/overview/how-robot-works",
    category: "Robot",
  },
  {
    title: "Architecture",
    description: "Technical architecture of Craftly Robot.",
    url: "/resources/documentation/robot/overview/architecture",
    category: "Robot",
  },
  {
    title: "Agent Model",
    description: "How agents are modeled and structured.",
    url: "/resources/documentation/robot/overview/agent-model",
    category: "Robot",
  },
  {
    title: "Current Status",
    description: "Current development status of Robot.",
    url: "/resources/documentation/robot/overview/current-status",
    category: "Robot",
  },
  {
    title: "Long-term Vision",
    description: "The future vision for Craftly Robot.",
    url: "/resources/documentation/robot/overview/long-term-vision",
    category: "Robot",
  },

  // Robot - Getting Started
  {
    title: "Before You Start",
    description: "Prerequisites and preparation before using Robot.",
    url: "/resources/documentation/robot/getting-started/before-you-start",
    category: "Robot",
  },
  {
    title: "Install Craftly Robot",
    description: "Installation guide for Craftly Robot.",
    url: "/resources/documentation/robot/getting-started/install-craftly-robot",
    category: "Robot",
  },
  {
    title: "Sign In with Private Key",
    description: "Authentication using your private key.",
    url: "/resources/documentation/robot/getting-started/sign-in-private-key",
    category: "Robot",
  },
  {
    title: "Discover and Connect",
    description: "Discovering and connecting to services.",
    url: "/resources/documentation/robot/getting-started/discover-and-connect",
    category: "Robot",
  },
  {
    title: "Your First Robot",
    description: "Creating your first autonomous agent.",
    url: "/resources/documentation/robot/getting-started/your-first-robot",
    category: "Robot",
  },
  {
    title: "Run First Task",
    description: "Running your first task with Robot.",
    url: "/resources/documentation/robot/getting-started/run-first-task",
    category: "Robot",
  },
  {
    title: "Next Steps",
    description: "What to do after getting started.",
    url: "/resources/documentation/robot/getting-started/next-steps",
    category: "Robot",
  },

  // Robot - Features
  {
    title: "Agentic AI",
    description: "Understanding Robot's agentic AI capabilities.",
    url: "/resources/documentation/robot/feature-overview/agentic-ai",
    category: "Robot",
  },
  {
    title: "Agent-to-Agent Negotiation",
    description: "How agents negotiate and coordinate with each other.",
    url: "/resources/documentation/robot/feature-overview/agent-to-agent-negotiation",
    category: "Robot",
  },
  {
    title: "Human Confirmation",
    description: "How humans approve sensitive actions.",
    url: "/resources/documentation/robot/feature-overview/human-confirmation",
    category: "Robot",
  },
  {
    title: "Real-World Task Coordination",
    description: "Coordinating tasks in real-world environments.",
    url: "/resources/documentation/robot/feature-overview/real-world-task-coordination",
    category: "Robot",
  },

  // Reference
  {
    title: "FAQ",
    description: "Frequently asked questions about Craftly.",
    url: "/resources/documentation/faq",
    category: "Reference",
  },
  {
    title: "Changelog",
    description: "Track the latest updates and improvements.",
    url: "/resources/changelog",
    category: "Reference",
  },
  {
    title: "Releases",
    description: "Download versions and release notes.",
    url: "/resources/releases",
    category: "Reference",
  },
  {
    title: "The Craftly Plan",
    description: "Workspace → Robot → Glass. Our vision for the future.",
    url: "/vision",
    category: "Reference",
  },
];
