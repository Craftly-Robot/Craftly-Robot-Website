import DocsLayout from '../../DocsLayout';

export default function QuickstartPage() {
  return (
    <DocsLayout 
      title="Quickstart â€” Craftly Robot"
      description="Quickstart in Craftly Robot"
      tocItems={[
        { id: 'quickstart', label: 'Quickstart' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Quickstart</strong>
      </div>

      <h1 className="docs__title" id="quickstart">Quickstart</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
