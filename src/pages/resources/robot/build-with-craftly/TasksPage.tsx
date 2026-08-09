import DocsLayout from '../../DocsLayout';

export default function TasksPage() {
  return (
    <DocsLayout 
      title="Tasks â€” Craftly Robot"
      description="Tasks in Craftly Robot"
      tocItems={[
        { id: 'tasks', label: 'Tasks' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Build With Craftly &gt; <strong>Tasks</strong>
      </div>

      <h1 className="docs__title" id="tasks">Tasks</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
