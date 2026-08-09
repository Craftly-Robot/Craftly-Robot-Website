import DocsLayout from '../DocsLayout';

export default function GettingStartedPage() {
  return (
    <DocsLayout 
      title="Getting Started — Craftly Robot"
      description="Get started with Craftly Robot"
      tocItems={[
        { id: 'getting-started', label: 'Getting Started' },
        { id: 'prerequisites', label: 'Prerequisites' },
        { id: 'set-up', label: 'Set Up Craftly Robot' },
        { id: 'create-agent', label: 'Create Your First Agent' },
        { id: 'configure-tools', label: 'Configure Tools' },
        { id: 'run-task', label: 'Run Your First Task' },
        { id: 'understand-output', label: 'Understand Agent Output' },
        { id: 'next-steps', label: 'Next Steps' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; <strong>Getting Started</strong>
      </div>

      <h1 className="docs__title" id="getting-started">Getting Started</h1>
      
      <h2 id="prerequisites" className="docs__section-title">Prerequisites</h2>
      <p className="docs__text">Ensure you have a Craftly account and access to the Robot platform.</p>
      
      <h2 id="set-up" className="docs__section-title">Set Up Craftly Robot</h2>
      <p className="docs__text">Follow the installation guide to configure your local environment and connect to the Craftly network.</p>
      
      <h2 id="create-agent" className="docs__section-title">Create Your First Agent</h2>
      <p className="docs__text">Use the agent builder interface or CLI to define your agent's persona and objectives.</p>
      
      <h2 id="configure-tools" className="docs__section-title">Configure Tools</h2>
      <p className="docs__text">Grant your agent access to specific tools, APIs, and data sources it needs to function.</p>
      
      <h2 id="run-task" className="docs__section-title">Run Your First Task</h2>
      <p className="docs__text">Assign a goal to your agent and monitor its execution step-by-step.</p>
      
      <h2 id="understand-output" className="docs__section-title">Understand Agent Output</h2>
      <p className="docs__text">Learn how to read agent logs, reasoning paths, and final outputs.</p>
      
      <h2 id="next-steps" className="docs__section-title">Next Steps</h2>
      <p className="docs__text">Explore advanced features like multi-agent systems and custom tool creation.</p>
    </DocsLayout>
  );
}
