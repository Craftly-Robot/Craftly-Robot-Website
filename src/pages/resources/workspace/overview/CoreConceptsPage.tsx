import DocsLayout from '../../DocsLayout';

export default function CoreConceptsPage() {
  return (
    <DocsLayout 
      title="Core Concepts â€” Craftly Workspace"
      description="Core Concepts in Craftly Workspace"
      tocItems={[
        { id: 'core-concepts', label: 'Core Concepts' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Overview &gt; <strong>Core Concepts</strong>
      </div>

      <h1 className="docs__title" id="core-concepts">Core Concepts</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
