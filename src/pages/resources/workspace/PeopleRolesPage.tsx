import DocsLayout from '../DocsLayout';

export default function PeopleRolesPage() {
  return (
    <DocsLayout 
      title="People & Roles â€” Craftly Workspace"
      description="People & Roles in Craftly Workspace"
      tocItems={[
        { id: 'people-and-roles', label: 'People & Roles' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>People & Roles</strong>
      </div>

      <h1 className="docs__title" id="people-and-roles">People & Roles</h1>
      
      <p className="docs__text">Explore the various topics in this section from the sidebar to the left.</p>
    </DocsLayout>
  );
}
