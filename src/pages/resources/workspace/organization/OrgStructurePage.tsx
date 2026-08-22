import DocsLayout from '../../DocsLayout';

export default function OrgStructurePage() {
  return (
    <DocsLayout 
      title="Organization Structure — Craftly Workspace"
      description="Organization Structure in Craftly Workspace"
      tocItems={[
        { id: 'organization-structure', label: 'Organization Structure' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Organization &gt; <strong>Organization Structure</strong>
      </div>

      <h1 className="docs__title" id="organization-structure">Organization Structure</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
