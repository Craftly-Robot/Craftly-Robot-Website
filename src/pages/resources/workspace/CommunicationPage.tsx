import DocsLayout from '../DocsLayout';

export default function CommunicationPage() {
  return (
    <DocsLayout 
      title="Communication â€” Craftly Workspace"
      description="Communication in Craftly Workspace"
      tocItems={[
        { id: 'communication', label: 'Communication' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Communication</strong>
      </div>

      <h1 className="docs__title" id="communication">Communication</h1>
      
      <p className="docs__text">Explore the various topics in this section from the sidebar to the left.</p>
    </DocsLayout>
  );
}
