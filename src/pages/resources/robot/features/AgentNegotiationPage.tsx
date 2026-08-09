import DocsLayout from '../../DocsLayout';

export default function AgentNegotiationPage() {
  return (
    <DocsLayout 
      title="Agent-to-Agent Negotiation — Craftly Robot"
      description="Agent-to-Agent Negotiation feature in Craftly Robot"
      tocItems={[
        { id: 'agent-negotiation', label: 'Agent-to-Agent Negotiation' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Feature Overview &gt; <strong>Agent-to-Agent Negotiation</strong>
      </div>

      <h1 className="docs__title" id="agent-negotiation">Agent-to-Agent Negotiation</h1>
      <p className="docs__text">Enable agents to communicate, negotiate, and delegate tasks.</p>
    </DocsLayout>
  );
}
