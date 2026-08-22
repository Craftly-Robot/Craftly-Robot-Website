import DocsLayout from '../../DocsLayout';

export default function TaskAssignmentPage() {
  return (
    <DocsLayout 
      title="Task Assignment — Craftly Workspace"
      description="Task Assignment in Craftly Workspace"
      tocItems={[
        { id: 'task-assignment', label: 'Task Assignment' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Tasks & Operations &gt; <strong>Task Assignment</strong>
      </div>

      <h1 className="docs__title" id="task-assignment">Task Assignment</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
