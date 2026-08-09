import DocsLayout from '../DocsLayout';

export default function BuildWithCraftlyPage() {
  return (
    <DocsLayout 
      title="Build with Craftly — Craftly Robot"
      description="Build with Craftly Robot"
      tocItems={[
        { id: 'build-with-craftly', label: 'Build with Craftly' },
        { id: 'agent-architecture', label: 'Agent Architecture' },
        { id: 'tools', label: 'Tools' },
        { id: 'tasks', label: 'Tasks' },
        { id: 'workflows', label: 'Workflows' },
        { id: 'multi-agent-systems', label: 'Multi-Agent Systems' },
        { id: 'integrations', label: 'Integrations' },
        { id: 'custom-capabilities', label: 'Custom Capabilities' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; <strong>Build with Craftly</strong>
      </div>

      <h1 className="docs__title" id="build-with-craftly">Build with Craftly</h1>
      
      <h2 id="agent-architecture" className="docs__section-title">Agent Architecture</h2>
      <p className="docs__text">Understand the core components that make up a Craftly agent.</p>
      
      <h2 id="tools" className="docs__section-title">Tools</h2>
      <p className="docs__text">Learn how to build and integrate custom tools using our SDK.</p>
      
      <h2 id="tasks" className="docs__section-title">Tasks</h2>
      <p className="docs__text">Define complex objectives and break them down into subtasks.</p>
      
      <h2 id="workflows" className="docs__section-title">Workflows</h2>
      <p className="docs__text">Chain multiple tasks together to create automated workflows.</p>
      
      <h2 id="multi-agent-systems" className="docs__section-title">Multi-Agent Systems</h2>
      <p className="docs__text">Coordinate multiple specialized agents to achieve a common goal.</p>
      
      <h2 id="integrations" className="docs__section-title">Integrations</h2>
      <p className="docs__text">Connect your agents with external services and platforms.</p>
      
      <h2 id="custom-capabilities" className="docs__section-title">Custom Capabilities</h2>
      <p className="docs__text">Extend the core platform with your own custom logic and models.</p>
    </DocsLayout>
  );
}
