import DocsLayout from '../../DocsLayout';

export default function AgenticAIPage() {
  return (
    <DocsLayout 
      title="Agentic AI — Craftly Robot"
      description="Agentic AI feature in Craftly Robot"
      tocItems={[
        { id: 'agentic-ai', label: 'Agentic AI' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Feature Overview &gt; <strong>Agentic AI</strong>
      </div>

      <h1 className="docs__title" id="agentic-ai">Agentic AI</h1>
      <p className="docs__text">Intelligent reasoning and autonomous planning capabilities.</p>
    </DocsLayout>
  );
}
