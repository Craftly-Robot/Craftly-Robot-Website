import DocsLayout from '../../DocsLayout';

export default function TeamsPage() {
  return (
    <DocsLayout 
      title="Teams â€” Craftly Workspace"
      description="Teams in Craftly Workspace"
      tocItems={[
        { id: 'teams', label: 'Teams' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Organization &gt; <strong>Teams</strong>
      </div>

      <h1 className="docs__title" id="teams">Teams</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
