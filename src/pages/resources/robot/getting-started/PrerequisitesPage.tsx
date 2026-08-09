import DocsLayout from '../../DocsLayout';

export default function PrerequisitesPage() {
  return (
    <DocsLayout 
      title="Prerequisites â€” Craftly Robot"
      description="Prerequisites in Craftly Robot"
      tocItems={[
        { id: 'prerequisites', label: 'Prerequisites' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Prerequisites</strong>
      </div>

      <h1 className="docs__title" id="prerequisites">Prerequisites</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
