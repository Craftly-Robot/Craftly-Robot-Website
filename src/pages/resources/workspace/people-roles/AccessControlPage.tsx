import DocsLayout from '../../DocsLayout';

export default function AccessControlPage() {
  return (
    <DocsLayout 
      title="Access Control â€” Craftly Workspace"
      description="Access Control in Craftly Workspace"
      tocItems={[
        { id: 'access-control', label: 'Access Control' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; People & Roles &gt; <strong>Access Control</strong>
      </div>

      <h1 className="docs__title" id="access-control">Access Control</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
