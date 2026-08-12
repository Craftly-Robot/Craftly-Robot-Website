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
      
      <div className="docs__image-container" style={{ marginTop: '32px' }}>
        <img src="/assets/Members/1.png" alt="Members" className="docs__image" />
      </div>
    </DocsLayout>
  );
}
