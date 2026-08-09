import DocsLayout from '../../DocsLayout';

export default function MembersPage() {
  return (
    <DocsLayout 
      title="Members â€” Craftly Workspace"
      description="Members in Craftly Workspace"
      tocItems={[
        { id: 'members', label: 'Members' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; People & Roles &gt; <strong>Members</strong>
      </div>

      <h1 className="docs__title" id="members">Members</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
