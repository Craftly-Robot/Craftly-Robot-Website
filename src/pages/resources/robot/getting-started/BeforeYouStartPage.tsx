import DocsLayout from '../../DocsLayout';

export default function BeforeYouStartPage() {
  return (
    <DocsLayout 
      title="Before You Start â€” Craftly Robot"
      description="Before You Start in Craftly Robot"
      tocItems={[
        { id: 'before-you-start', label: 'Before You Start' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Before You Start</strong>
      </div>

      <h1 className="docs__title" id="before-you-start">Before You Start</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
