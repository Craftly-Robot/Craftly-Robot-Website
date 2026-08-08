import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'workspace',
    name: 'Craftly Workspace',
    tagline: 'Your intelligent workspace for operating modern organizations.',
    description:
      'Craftly Workspace unifies organizational operations into a single intelligent platform — from task management and communication to resource allocation and workflow orchestration.',
    icon: 'workspace',
    route: '/products/workspace',
    videoSrc: '/assets/videos/workspace.mp4',
    posterSrc: '/assets/posters/workspace.webp',
    capabilities: [
      'Organizational Structure',
      'Task Management',
      'Communication',
      'Resource Management',
      'Operations',
      'Workflow Orchestration',
    ],
  },
  {
    id: 'robot',
    name: 'Craftly Robot',
    tagline: 'An agentic AI system for autonomous software engineering.',
    description:
      'Craftly Robot is an advanced agentic system that understands codebases, reasons about architecture, executes complex engineering tasks, and verifies its own work — autonomously.',
    icon: 'robot',
    route: '/products/robot',
    videoSrc: '/assets/videos/robot.mp4',
    posterSrc: '/assets/posters/robot.webp',
    capabilities: [
      'Agentic Coding',
      'Multi-Agent Systems',
      'Repository Intelligence',
      'Context Understanding',
      'Task Graphs',
      'Tool Execution',
      'Verification',
      'Memory',
      'Cybersecurity',
    ],
  },
];
