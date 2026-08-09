import DocsLayout from '../DocsLayout';

export default function GettingStartedPage() {
  return (
    <DocsLayout 
      title="Getting Started â€” Craftly Workspace"
      description="Getting Started in Craftly Workspace"
      tocItems={[
        { id: 'getting-started', label: 'Getting Started' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Getting Started</strong>
      </div>

      <h1 className="docs__title" id="getting-started">Getting Started</h1>
      
      <p className="docs__text">Explore the various topics in this section from the sidebar to the left.</p>
    </DocsLayout>
  );
}
