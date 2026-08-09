import DocsLayout from '../DocsLayout';

export default function OrganizationPage() {
  return (
    <DocsLayout 
      title="Organization â€” Craftly Workspace"
      description="Organization in Craftly Workspace"
      tocItems={[
        { id: 'organization', label: 'Organization' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Organization</strong>
      </div>

      <h1 className="docs__title" id="organization">Organization</h1>
      
      <p className="docs__text">Explore the various topics in this section from the sidebar to the left.</p>
    </DocsLayout>
  );
}
