import DocsLayout from '../DocsLayout';

export default function FeatureOverviewPage() {
  return (
    <DocsLayout 
      title="Feature Overview — Craftly Robot"
      description="Feature Overview of Craftly Robot"
      tocItems={[
        { id: 'feature-overview', label: 'Feature Overview' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; <strong>Feature Overview</strong>
      </div>

      <h1 className="docs__title" id="feature-overview">Feature Overview</h1>
      
      <p className="docs__text">Explore the various features of Craftly Robot from the sidebar to the left.</p>
    </DocsLayout>
  );
}
