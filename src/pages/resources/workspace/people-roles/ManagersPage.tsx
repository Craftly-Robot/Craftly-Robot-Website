import DocsLayout from '../../DocsLayout';

export default function ManagersPage() {
  return (
    <DocsLayout 
      title="Managers â€” Craftly Workspace"
      description="Managers in Craftly Workspace"
      tocItems={[
        { id: 'managers', label: 'Managers' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; People & Roles &gt; <strong>Managers</strong>
      </div>

      <h1 className="docs__title" id="managers">Managers</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
