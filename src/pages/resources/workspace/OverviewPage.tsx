import DocsLayout from '../DocsLayout';

export default function OverviewPage() {
  return (
    <DocsLayout 
      title="Overview — Craftly Workspace"
      description="Overview of Craftly Workspace"
      tocItems={[
        { id: 'what-is-craftly-workspace', label: 'What is Craftly Workspace?' },
        { id: 'how-workspace-works', label: 'How Workspace Works' },
        { id: 'workspace-structure', label: 'Workspace Structure' },
        { id: 'core-concepts', label: 'Core Concepts' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Overview</strong>
      </div>

      <h1 className="docs__title" id="overview">Overview</h1>
      
      <h2 id="what-is-craftly-workspace" className="docs__section-title">What is Craftly Workspace?</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="how-workspace-works" className="docs__section-title">How Workspace Works</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="workspace-structure" className="docs__section-title">Workspace Structure</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="core-concepts" className="docs__section-title">Core Concepts</h2>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
