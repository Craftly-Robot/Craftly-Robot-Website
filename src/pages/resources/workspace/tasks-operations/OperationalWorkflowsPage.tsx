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
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
