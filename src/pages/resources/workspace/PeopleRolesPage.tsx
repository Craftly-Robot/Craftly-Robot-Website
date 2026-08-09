import DocsLayout from '../DocsLayout';

export default function PeopleRolesPage() {
  return (
    <DocsLayout 
      title="People & Roles — Craftly Workspace"
      description="People and Roles in Craftly Workspace"
      tocItems={[
        { id: 'members', label: 'Members' },
        { id: 'roles', label: 'Roles' },
        { id: 'permissions', label: 'Permissions' },
        { id: 'managers', label: 'Managers' },
        { id: 'access-control', label: 'Access Control' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>People & Roles</strong>
      </div>

      <h1 className="docs__title" id="people-roles">People & Roles</h1>
      
      <h2 id="members" className="docs__section-title">Members</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="roles" className="docs__section-title">Roles</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="permissions" className="docs__section-title">Permissions</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="managers" className="docs__section-title">Managers</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="access-control" className="docs__section-title">Access Control</h2>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
