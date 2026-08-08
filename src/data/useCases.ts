import type { UseCase } from '../types';

export const useCases: UseCase[] = [
  {
    id: 'operations',
    number: '01',
    title: 'Company Operations',
    concept:
      'Power the complete day-to-day operation of a modern company with intelligent systems.',
    description:
      'From task delegation to resource planning, Craftly transforms how organizations operate by replacing fragmented tooling with a unified intelligent layer that understands context, priorities, and people.',
    areas: [
      'Task Management',
      'Communication',
      'Operations',
      'Resources',
      'Workflows',
    ],
    route: '/use-cases/operations',
    icon: 'operations',
  },
  {
    id: 'agent-negotiation',
    number: '02',
    title: 'Agent-to-Agent Negotiation',
    concept:
      'Enable intelligent agents to communicate, coordinate, and negotiate.',
    description:
      'Craftly provides the infrastructure for autonomous agents to discover each other, establish communication channels, negotiate terms, delegate sub-tasks, and reach consensus — all without human intervention.',
    areas: [
      'Agent Communication',
      'Coordination',
      'Delegation',
      'Negotiation',
      'Decision Systems',
    ],
    route: '/use-cases/agent-negotiation',
    icon: 'agents',
  },
  {
    id: 'ai',
    number: '03',
    title: 'AI Use Cases',
    concept:
      'Apply intelligent systems across engineering, operations, research, security, and business workflows.',
    description:
      'Craftly\'s AI capabilities extend across the entire organizational stack — from automated code review and security auditing to research synthesis and business intelligence.',
    areas: [
      'Engineering',
      'Operations',
      'Research',
      'Security',
      'Business Intelligence',
    ],
    route: '/use-cases/ai',
    icon: 'ai',
  },
];
