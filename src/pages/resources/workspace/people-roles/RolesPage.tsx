import DocsLayout from '../../DocsLayout';

export default function RolesPage() {
  return (
    <DocsLayout 
      title="Roles â€” Craftly Workspace"
      description="Roles in Craftly Workspace"
      tocItems={[
        { id: 'roles', label: 'Roles' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; People & Roles &gt; <strong>Roles</strong>
      </div>

      <h1 className="docs__title" id="roles">Roles</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
