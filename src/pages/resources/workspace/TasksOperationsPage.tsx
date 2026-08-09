import DocsLayout from '../DocsLayout';

export default function TasksOperationsPage() {
  return (
    <DocsLayout 
      title="Tasks & Operations — Craftly Workspace"
      description="Tasks and Operations in Craftly Workspace"
      tocItems={[
        { id: 'tasks', label: 'Tasks' },
        { id: 'task-assignment', label: 'Task Assignment' },
        { id: 'task-evidence', label: 'Task Evidence' },
        { id: 'support-requests', label: 'Support Requests' },
        { id: 'notices', label: 'Notices' },
        { id: 'operational-workflows', label: 'Operational Workflows' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Tasks & Operations</strong>
      </div>

      <h1 className="docs__title" id="tasks-operations">Tasks & Operations</h1>
      
      <h2 id="tasks" className="docs__section-title">Tasks</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="task-assignment" className="docs__section-title">Task Assignment</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="task-evidence" className="docs__section-title">Task Evidence</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="support-requests" className="docs__section-title">Support Requests</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="notices" className="docs__section-title">Notices</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="operational-workflows" className="docs__section-title">Operational Workflows</h2>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
