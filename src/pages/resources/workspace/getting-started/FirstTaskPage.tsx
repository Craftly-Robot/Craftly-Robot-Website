import DocsLayout from '../../DocsLayout';

export default function FirstTaskPage() {
  return (
    <DocsLayout 
      title="Your First Task â€” Craftly Workspace"
      description="Your First Task in Craftly Workspace"
      tocItems={[
        { id: 'your-first-task', label: 'Your First Task' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Getting Started &gt; <strong>Your First Task</strong>
      </div>

      <h1 className="docs__title" id="your-first-task">Your First Task</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
