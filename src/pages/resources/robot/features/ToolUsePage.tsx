import DocsLayout from '../../DocsLayout';

export default function ToolUsePage() {
  return (
    <DocsLayout 
      title="Tool Use — Craftly Robot"
      description="Tool Use feature in Craftly Robot"
      tocItems={[
        { id: 'tool-use', label: 'Tool Use' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Feature Overview &gt; <strong>Tool Use</strong>
      </div>

      <h1 className="docs__title" id="tool-use">Tool Use</h1>
      <p className="docs__text">Secure and robust integration with external tools and APIs.</p>
    </DocsLayout>
  );
}
