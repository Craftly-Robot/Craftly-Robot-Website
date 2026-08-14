import DocsLayout from '../../DocsLayout';

export default function YourFirstRobotPage() {
  return (
    <DocsLayout 
      title="Your First Robot â€” Craftly Robot"
      description="Your First Robot in Craftly Robot"
      tocItems={[
        { id: 'your-first-robot', label: 'Your First Robot' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Your First Robot</strong>
      </div>

      <h1 className="docs__title" id="your-first-robot">Your First Robot</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
