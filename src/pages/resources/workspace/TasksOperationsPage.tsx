import DocsLayout from '../DocsLayout';

export default function TasksOperationsPage() {
  return (
    <DocsLayout 
      title="Tasks & Operations â€” Craftly Workspace"
      description="Tasks & Operations in Craftly Workspace"
      tocItems={[
        { id: 'tasks-and-operations', label: 'Tasks & Operations' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Tasks & Operations</strong>
      </div>

      <h1 className="docs__title" id="tasks-and-operations">Tasks & Operations</h1>
      
      <p className="docs__text">Explore the various topics in this section from the sidebar to the left.</p>
    </DocsLayout>
  );
}
