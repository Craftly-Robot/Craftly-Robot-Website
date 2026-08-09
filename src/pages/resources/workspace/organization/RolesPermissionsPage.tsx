import DocsLayout from '../../DocsLayout';

export default function RolesPermissionsPage() {
  return (
    <DocsLayout 
      title="Roles & Permissions â€” Craftly Workspace"
      description="Roles & Permissions in Craftly Workspace"
      tocItems={[
        { id: 'roles-and-permissions', label: 'Roles & Permissions' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Organization &gt; <strong>Roles & Permissions</strong>
      </div>

      <h1 className="docs__title" id="roles-and-permissions">Roles & Permissions</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
