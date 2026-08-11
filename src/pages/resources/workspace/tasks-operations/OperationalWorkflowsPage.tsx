import DocsLayout from '../../DocsLayout';

export default function OperationalWorkflowsPage() {
  return (
    <DocsLayout 
      title="Projects â€” Craftly Workspace"
      description="Projects in Craftly Workspace"
      tocItems={[
        { id: 'projects', label: 'Projects' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Tasks & Operations &gt; <strong>Projects</strong>
      </div>

      <h1 className="docs__title" id="projects">Projects</h1>
      
      <div className="docs__content-placeholder" style={{ marginBottom: '32px' }}>
        {/* Placeholder for top content */}
        <p className="docs__text">Content describing projects will go here...</p>
      </div>

      <div className="docs__image-wrapper" style={{ margin: '40px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <img src="/assets/projects/1.png" alt="Projects Overview" style={{ width: '100%', display: 'block' }} />
      </div>

      <div className="docs__content-placeholder" style={{ marginTop: '32px' }}>
        {/* Placeholder for bottom content */}
        <p className="docs__text">More detailed content about projects will go here...</p>
      </div>
    </DocsLayout>
  );
}
