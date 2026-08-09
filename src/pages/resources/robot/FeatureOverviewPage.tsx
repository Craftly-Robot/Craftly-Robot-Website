import DocsLayout from '../DocsLayout';

export default function FeatureOverviewPage() {
  return (
    <DocsLayout 
      title="Feature Overview — Craftly Robot"
      description="Feature Overview of Craftly Robot"
      tocItems={[
        { id: 'feature-overview', label: 'Feature Overview' },
        { id: 'agentic-ai-feature', label: 'Agentic AI' },
        { id: 'tool-use-feature', label: 'Tool Use' },
        { id: 'agent-discovery-feature', label: 'Agent Discovery' },
        { id: 'agent-negotiation-feature', label: 'Agent-to-Agent Negotiation' },
        { id: 'multi-agent-coordination-feature', label: 'Multi-Agent Coordination' },
        { id: 'privacy-aware-communication-feature', label: 'Privacy Boundaries' },
        { id: 'human-confirmation-feature', label: 'Human Confirmation' },
        { id: 'real-world-task-coordination-feature', label: 'Real-World Task Coordination' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; <strong>Feature Overview</strong>
      </div>

      <h1 className="docs__title" id="feature-overview">Feature Overview</h1>
      
      <h2 id="agentic-ai-feature" className="docs__section-title">Agentic AI</h2>
      <p className="docs__text">Intelligent reasoning and autonomous planning capabilities.</p>
      
      <h2 id="tool-use-feature" className="docs__section-title">Tool Use</h2>
      <p className="docs__text">Secure and robust integration with external tools and APIs.</p>
      
      <h2 id="agent-discovery-feature" className="docs__section-title">Agent Discovery</h2>
      <p className="docs__text">Dynamically find and connect with other agents on the network.</p>
      
      <h2 id="agent-negotiation-feature" className="docs__section-title">Agent-to-Agent Negotiation</h2>
      <p className="docs__text">Enable agents to communicate, negotiate, and delegate tasks.</p>
      
      <h2 id="multi-agent-coordination-feature" className="docs__section-title">Multi-Agent Coordination</h2>
      <p className="docs__text">Orchestrate complex workflows involving multiple specialized agents.</p>
      
      <h2 id="privacy-aware-communication-feature" className="docs__section-title">Privacy-Aware Communication</h2>
      <p className="docs__text">Secure communication channels with strict data privacy boundaries.</p>
      
      <h2 id="human-confirmation-feature" className="docs__section-title">Human Confirmation</h2>
      <p className="docs__text">Require human approval for critical actions and decisions.</p>
      
      <h2 id="real-world-task-coordination-feature" className="docs__section-title">Real-World Task Coordination</h2>
      <p className="docs__text">Bridge the gap between digital workflows and physical operations.</p>
    </DocsLayout>
  );
}
