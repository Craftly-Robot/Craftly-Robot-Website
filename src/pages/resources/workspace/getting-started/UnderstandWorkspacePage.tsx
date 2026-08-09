import DocsLayout from '../../DocsLayout';

export default function UnderstandWorkspacePage() {
  return (
    <DocsLayout 
      title="Understanding Your Workspace â€” Craftly Workspace"
      description="Understanding Your Workspace in Craftly Workspace"
      tocItems={[
        { id: 'understanding-your-workspace', label: 'Understanding Your Workspace' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Getting Started &gt; <strong>Understanding Your Workspace</strong>
      </div>

      <h1 className="docs__title" id="understanding-your-workspace">Understanding Your Workspace</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
