import DocsLayout from '../../DocsLayout';

export default function RunFirstTaskPage() {
  return (
    <DocsLayout 
      title="Run Your First Task â€” Craftly Robot"
      description="Run Your First Task in Craftly Robot"
      tocItems={[
        { id: 'run-your-first-task', label: 'Run Your First Task' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Run Your First Task</strong>
      </div>

      <h1 className="docs__title" id="run-your-first-task">Run Your First Task</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
