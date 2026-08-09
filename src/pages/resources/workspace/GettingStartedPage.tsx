import DocsLayout from '../DocsLayout';

export default function GettingStartedPage() {
  return (
    <DocsLayout 
      title="Getting Started — Craftly Workspace"
      description="Getting Started with Craftly Workspace"
      tocItems={[
        { id: 'create-your-account', label: 'Create Your Account' },
        { id: 'join-an-organization', label: 'Join an Organization' },
        { id: 'complete-your-profile', label: 'Complete Your Profile' },
        { id: 'understanding-your-workspace', label: 'Understanding Your Workspace' },
        { id: 'your-first-task', label: 'Your First Task' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Getting Started</strong>
      </div>

      <h1 className="docs__title" id="getting-started">Getting Started</h1>
      
      <h2 id="create-your-account" className="docs__section-title">Create Your Account</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="join-an-organization" className="docs__section-title">Join an Organization</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="complete-your-profile" className="docs__section-title">Complete Your Profile</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="understanding-your-workspace" className="docs__section-title">Understanding Your Workspace</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="your-first-task" className="docs__section-title">Your First Task</h2>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
