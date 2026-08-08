import type { SiteContent, ArchitectureLayer } from '../types';

export const siteContent: SiteContent = {
  hero: {
    badge: 'Intelligent Systems',
    headline: 'Building the Intelligent\nSystems of Tomorrow.',
    description:
      'Craftly is building the foundational infrastructure for the agentic era — intelligent workspace systems and autonomous engineering agents that transform how organizations operate and build software.',
    ctaPrimary: 'Explore Craftly',
    ctaSecondary: 'Download',
  },
  intro: {
    label: 'What is Craftly',
    headline: 'Intelligence at every layer.',
    description:
      'Craftly is an ecosystem of intelligent products designed for the agentic era. From organizational operations to autonomous software engineering, Craftly brings AI-native thinking to the systems that power modern work.',
  },
  architecture: {
    label: 'Architecture',
    headline: 'Built for depth.',
    description:
      'Every layer of Craftly is designed with intelligence at its core — from user interaction through execution and verification.',
    layers: [
      { label: 'User', description: 'Human interaction layer' },
      { label: 'Gateway', description: 'Request routing and authentication' },
      { label: 'Context', description: 'Semantic understanding and memory' },
      { label: 'Agents', description: 'Autonomous reasoning and planning' },
      { label: 'Tools', description: 'Capability execution interface' },
      { label: 'Execution', description: 'Sandboxed task runtime' },
      { label: 'Verification', description: 'Output validation and safety' },
      { label: 'Memory', description: 'Persistent knowledge and learning' },
    ] as ArchitectureLayer[],
  },
  cta: {
    headline: 'Start building with Craftly.',
    description:
      'Join the next generation of intelligent systems. Download Craftly Workspace or Craftly Robot and experience the agentic era.',
    buttonText: 'Download Craftly',
  },
  footer: {
    tagline: 'Building intelligent systems for the agentic era.',
    copyright: `© ${new Date().getFullYear()} Craftly. All rights reserved.`,
  },
};
