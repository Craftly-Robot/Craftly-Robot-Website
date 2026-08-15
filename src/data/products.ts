import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'workspace',
    name: 'Craftly Workspace',
    tagline: 'Your intelligent workspace for operating modern organizations.',
    description:
      'Craftly Workspace brings people, work, and operations together in one connected system. It helps teams coordinate tasks, communicate clearly, manage resources, and keep work moving.',
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
