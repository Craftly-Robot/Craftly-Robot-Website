import DocsLayout from '../DocsLayout';

export default function ResourcesPage() {
  return (
    <DocsLayout 
      title="Resources â€” Craftly Workspace"
      description="Resources in Craftly Workspace"
      tocItems={[
        { id: 'resources', label: 'Resources' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Resources</strong>
      </div>

      <h1 className="docs__title" id="resources">Resources</h1>
      
      <p className="docs__text">Explore the various topics in this section from the sidebar to the left.</p>
    </DocsLayout>
  );
}
