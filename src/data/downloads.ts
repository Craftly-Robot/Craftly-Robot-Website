import type { Download } from '../types';

export const downloads: Download[] = [
  {
    id: 'workspace',
    product: 'Craftly Workspace',
    productId: 'workspace',
    description:
      'Your intelligent workspace for operating modern organizations. Manage tasks, communication, resources, and workflows in one unified platform.',
    version: '0.1.0-beta',
    releaseDate: '2026',
    docsUrl: '/resources/documentation',
    platforms: [
      {
        name: 'Windows',
        architecture: 'x64',
        downloadUrl: '#',
        size: '~120 MB',
      },
      {
        name: 'macOS',
        architecture: 'Apple Silicon',
        downloadUrl: '#',
        size: '~110 MB',
      },
      {
        name: 'macOS',
        architecture: 'Intel',
        downloadUrl: '#',
        size: '~115 MB',
      },
      {
        name: 'Linux',
        architecture: 'x64',
        downloadUrl: '#',
        size: '~105 MB',
      },
      {
        name: 'Web',
        architecture: 'Browser',
        downloadUrl: '#',
      },
    ],
  },
  {
    id: 'robot',
    product: 'Craftly Robot',
    productId: 'robot',
    description:
      'An agentic AI system for autonomous software engineering. Understands codebases, executes engineering tasks, and verifies its own work.',
    version: '0.1.0-alpha',
    releaseDate: '2026',
    docsUrl: '/resources/documentation',
    platforms: [
      {
        name: 'CLI',
        architecture: 'Cross-platform',
        downloadUrl: '#',
        size: '~45 MB',
      },
      {
        name: 'VS Code Extension',
        architecture: 'Extension',
        downloadUrl: '#',
      },
      {
        name: 'SDK',
        architecture: 'npm / pip',
        downloadUrl: '#',
      },
      {
        name: 'API',
        architecture: 'REST / WebSocket',
        downloadUrl: '#',
      },
    ],
  },
];
