import DocsLayout from '../../DocsLayout';

export default function PermissionsPage() {
  return (
    <DocsLayout 
      title="Permissions â€” Craftly Workspace"
      description="Permissions in Craftly Workspace"
      tocItems={[
        { id: 'permissions', label: 'Permissions' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; People & Roles &gt; <strong>Permissions</strong>
      </div>

      <h1 className="docs__title" id="permissions">Permissions</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
