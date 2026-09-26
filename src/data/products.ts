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
    posterSrc: "/assets/Craftly_Workspace/craftly-workspace-dashboard.svg",
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
    posterSrc: "/assets/Craftly_Robot/new.webp",
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
  {
    id: "cloud",
    name: "Craftly Cloud",
    tagline: "High-performance edge infrastructure & runtime for intelligent agent clusters.",
    description:
      "Craftly Cloud powers global agent orchestration, distributed compute,\nand real-time state synchronization with sub-10ms edge latency.",
    icon: "cloud",
    route: "/products/cloud",
    videoSrc: "",
    posterSrc: "/assets/Craftly_Cloud/craftly-cloud-overview.svg",
    capabilities: [
      "Global Edge Mesh",
      "Agent Clusters",
      "Sub-10ms Latency",
      "Zero-Trust Enclaves",
      "Distributed State Store",
      "Auto-Scaling Sandboxes",
      "Real-time Telemetry",
      "Enterprise Compliance",
    ],
  },
];
