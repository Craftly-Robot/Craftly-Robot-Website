import type { NavConfig } from "../types";

export const navigation: NavConfig[] = [
  {
    label: "Products",
    dropdownType: "product",
    items: [
      {
        title: "Craftly Workspace",
        description: "Your intelligent workspace for operating modern organizations.",
        route: "/products/workspace",
        icon: "workspace",
      },
      {
        title: "Craftly Robot",
        description: "An agentic AI system for autonomous software engineering.",
        route: "/products/robot",
        icon: "robot",
      },
    ],
  },
  {
    label: "Vision",
    dropdownType: "vision",
    items: [
      {
        title: "The Craftly Plan",
        description: "Workspace → Robot → Glass",
        route: "/vision",
        icon: "plan",
      },
      {
        title: "Use Cases",
        description: "Who Craftly is for and how it's used.",
        route: "/use-cases",
        icon: "useCases",
      },
    ],
  },
  {
    label: "Docs",
    dropdownType: "docs",
    items: [
      {
        title: "Documentation",
        description: "Learn how to use Craftly products.",
        route: "/resources/documentation",
        icon: "docs",
      },
      {
        title: "Changelog",
        description: "Track the latest updates and improvements.",
        route: "/resources/changelog",
        icon: "changelog",
      },
      {
        title: "Releases",
        description: "Download versions and release notes.",
        route: "/resources/releases",
        icon: "releases",
      },
    ],
  },
];
