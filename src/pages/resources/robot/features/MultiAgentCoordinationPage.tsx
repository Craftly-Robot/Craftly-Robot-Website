import DocsLayout from '../../DocsLayout';

export default function MultiAgentCoordinationPage() {
  return (
    <DocsLayout 
      title="Multi-Agent Coordination — Craftly Robot"
      description="Multi-Agent Coordination feature in Craftly Robot"
      tocItems={[
        { id: 'multi-agent-coordination', label: 'Multi-Agent Coordination' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Feature Overview &gt; <strong>Multi-Agent Coordination</strong>
      </div>

      <h1 className="docs__title" id="multi-agent-coordination">Multi-Agent Coordination</h1>
      <p className="docs__text">Orchestrate complex workflows involving multiple specialized agents.</p>
    </DocsLayout>
  );
}
