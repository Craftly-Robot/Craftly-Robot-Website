import DocsLayout from '../../DocsLayout';

export default function ToolsPage() {
  return (
    <DocsLayout 
      title="Tools â€” Craftly Robot"
      description="Tools in Craftly Robot"
      tocItems={[
        { id: 'tools', label: 'Tools' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Build With Craftly &gt; <strong>Tools</strong>
      </div>

      <h1 className="docs__title" id="tools">Tools</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
