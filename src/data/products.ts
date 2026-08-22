import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "workspace",
    name: "Craftly Workspace",
    tagline: "Your intelligent workspace for operating modern organizations.",
    description:
      "Craftly Workspace brings people, work, and operations together in one connected system.\nIt helps teams coordinate tasks, communicate clearly,\nand keep work moving.",
    icon: "workspace",
    route: "/products/workspace",
    videoSrc: "",
    posterSrc: "/assets/Craftly_Workspace/1.png",
    capabilities: [
      "Organizational Structure",
      "Task Management",
      "Communication",
      "Resource Management",
      "Operations",
      "Workflow Orchestration",
    ],
  },
  {
    id: "robot",
    name: "Craftly Robot",
    tagline: "An agentic AI system for autonomous software engineering.",
    description:
      "Craftly Robot understands your goals, discovers relevant agents, and helps coordinate\nreal world tasks through agent-to-agent communication\nand human controlled action.",
    icon: "robot",
    route: "/products/robot",
    videoSrc: "",
    posterSrc: "/assets/Craftly_Robot/new.jpg",
    capabilities: [
      "Agentic Coding",
      "Multi-Agent Systems",
      "Repository Intelligence",
      "Context Understanding",
      "Task Graphs",
      "Tool Execution",
      "Verification",
      "Memory",
      "Cybersecurity",
    ],
  },
];
