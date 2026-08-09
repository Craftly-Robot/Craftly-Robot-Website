import DocsLayout from '../../DocsLayout';

export default function TrainingPage() {
  return (
    <DocsLayout 
      title="Training â€” Craftly Workspace"
      description="Training in Craftly Workspace"
      tocItems={[
        { id: 'training', label: 'Training' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Resources &gt; <strong>Training</strong>
      </div>

      <h1 className="docs__title" id="training">Training</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
