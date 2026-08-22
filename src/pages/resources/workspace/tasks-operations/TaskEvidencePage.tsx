import DocsLayout from '../../DocsLayout';

export default function TaskEvidencePage() {
  return (
    <DocsLayout 
      title="Task Evidence — Craftly Workspace"
      description="Task Evidence in Craftly Workspace"
      tocItems={[
        { id: 'task-evidence', label: 'Task Evidence' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Tasks & Operations &gt; <strong>Task Evidence</strong>
      </div>

      <h1 className="docs__title" id="task-evidence">Task Evidence</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
