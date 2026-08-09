import DocsLayout from '../../DocsLayout';

export default function HowRobotWorksPage() {
  return (
    <DocsLayout 
      title="How Robot Works â€” Craftly Robot"
      description="How Robot Works in Craftly Robot"
      tocItems={[
        { id: 'how-robot-works', label: 'How Robot Works' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Overview &gt; <strong>How Robot Works</strong>
      </div>

      <h1 className="docs__title" id="how-robot-works">How Robot Works</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
