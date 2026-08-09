import DocsLayout from '../../DocsLayout';

export default function AgenticAIPage() {
  return (
    <DocsLayout 
      title="Agentic AI â€” Craftly Robot"
      description="Agentic AI in Craftly Robot"
      tocItems={[
        { id: 'agentic-ai', label: 'Agentic AI' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Feature Overview &gt; <strong>Agentic AI</strong>
      </div>

      <h1 className="docs__title" id="agentic-ai">Agentic AI</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
