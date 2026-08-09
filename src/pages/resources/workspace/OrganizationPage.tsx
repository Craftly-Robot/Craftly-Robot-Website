import DocsLayout from '../DocsLayout';

export default function OrganizationPage() {
  return (
    <DocsLayout 
      title="Organization — Craftly Workspace"
      description="Organization structure in Craftly Workspace"
      tocItems={[
        { id: 'organization-structure', label: 'Organization Structure' },
        { id: 'departments', label: 'Departments' },
        { id: 'teams', label: 'Teams' },
        { id: 'reporting-structure', label: 'Reporting Structure' },
        { id: 'roles-permissions', label: 'Roles & Permissions' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Organization</strong>
      </div>

      <h1 className="docs__title" id="organization">Organization</h1>
      
      <h2 id="organization-structure" className="docs__section-title">Organization Structure</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="departments" className="docs__section-title">Departments</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="teams" className="docs__section-title">Teams</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="reporting-structure" className="docs__section-title">Reporting Structure</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="roles-permissions" className="docs__section-title">Roles & Permissions</h2>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
