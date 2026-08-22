import type { Resource } from '../types';

export const resources: Resource[] = [
  {
    id: 'documentation',
    title: 'Documentation',
    description: 'Technical documentation, API references, and integration guides.',
    route: '/resources/documentation',
    icon: 'docs',
  },
  {
    id: 'changelog',
    title: 'Changelog',
    description: 'Track the latest updates and improvements.',
    route: '/resources/changelog',
    icon: 'changelog',
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Get help with Craftly products — troubleshooting, FAQs, and contact.',
    route: '/resources/support',
    icon: 'support',
  },
  {
    id: 'releases',
    title: 'Releases',
    description: 'Changelogs, version history, and release notes for all Craftly products.',
    route: '/resources/releases',
    icon: 'releases',
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Insights, updates, and stories from the Craftly team.',
    route: '/resources/blog',
    icon: 'docs',
  },
  {
    id: 'press',
    title: 'Press',
    description: 'Press releases, media coverage, and brand resources.',
    route: '/resources/press',
    icon: 'docs',
  },
];
