import DocsLayout from '../../DocsLayout';

export default function CreateAccountPage() {
  return (
    <DocsLayout 
      title="Create Your Account â€” Craftly Workspace"
      description="Create Your Account in Craftly Workspace"
      tocItems={[
        { id: 'create-your-account', label: 'Create Your Account' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Getting Started &gt; <strong>Create Your Account</strong>
      </div>

      <h1 className="docs__title" id="create-your-account">Create Your Account</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
