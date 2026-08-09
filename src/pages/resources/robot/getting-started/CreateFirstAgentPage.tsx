import DocsLayout from '../../DocsLayout';

export default function CreateFirstAgentPage() {
  return (
    <DocsLayout 
      title="Create Your First Agent â€” Craftly Robot"
      description="Create Your First Agent in Craftly Robot"
      tocItems={[
        { id: 'create-your-first-agent', label: 'Create Your First Agent' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Create Your First Agent</strong>
      </div>

      <h1 className="docs__title" id="create-your-first-agent">Create Your First Agent</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
