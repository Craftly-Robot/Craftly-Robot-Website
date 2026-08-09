import DocsLayout from '../../DocsLayout';

export default function NextStepsPage() {
  return (
    <DocsLayout 
      title="Next Steps â€” Craftly Robot"
      description="Next Steps in Craftly Robot"
      tocItems={[
        { id: 'next-steps', label: 'Next Steps' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Next Steps</strong>
      </div>

      <h1 className="docs__title" id="next-steps">Next Steps</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
