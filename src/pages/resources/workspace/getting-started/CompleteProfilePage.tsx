import DocsLayout from '../../DocsLayout';

export default function CompleteProfilePage() {
  return (
    <DocsLayout 
      title="Complete Your Profile â€” Craftly Workspace"
      description="Complete Your Profile in Craftly Workspace"
      tocItems={[
        { id: 'complete-your-profile', label: 'Complete Your Profile' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Getting Started &gt; <strong>Complete Your Profile</strong>
      </div>

      <h1 className="docs__title" id="complete-your-profile">Complete Your Profile</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
