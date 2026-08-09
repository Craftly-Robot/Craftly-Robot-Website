import DocsLayout from '../DocsLayout';

export default function OverviewPage() {
  return (
    <DocsLayout 
      title="Overview â€” Craftly Workspace"
      description="Overview in Craftly Workspace"
      tocItems={[
        { id: 'overview', label: 'Overview' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Overview</strong>
      </div>

      <h1 className="docs__title" id="overview">Overview</h1>
      
      <p className="docs__text">Explore the various topics in this section from the sidebar to the left.</p>
    </DocsLayout>
  );
}
