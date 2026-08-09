import DocsLayout from '../DocsLayout';

export default function OverviewPage() {
  return (
    <DocsLayout 
      title="Overview — Craftly Robot"
      description="Overview of Craftly Robot"
      tocItems={[
        { id: 'overview', label: 'Overview' },
        { id: 'what-is-robot', label: 'What is Craftly Robot?' },
        { id: 'how-robot-works', label: 'How Robot Works' },
        { id: 'current-status', label: 'Current Status' },
        { id: 'research-direction', label: 'Research Direction' },
        { id: 'long-term-vision', label: 'Long-Term Vision' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; <strong>Overview</strong>
      </div>

      <h1 className="docs__title" id="overview">Overview</h1>
      <p className="docs__text" style={{ color: '#5f6368', fontStyle: 'italic' }}>Craftly Robot is currently under active research and development.</p>
      
      <h2 id="what-is-robot" className="docs__section-title">What is Craftly Robot?</h2>
      <p className="docs__text">Craftly Robot is an advanced platform designed to create and manage intelligent AI agents capable of reasoning, planning, and executing real-world tasks.</p>

      <h2 id="how-robot-works" className="docs__section-title">How Robot Works</h2>
      <p className="docs__text">It utilizes a combination of large language models, tool integration, and multi-agent coordination to break down complex objectives into actionable steps.</p>

      <h2 id="current-status" className="docs__section-title">Current Status</h2>
      <p className="docs__text">Currently, the platform is in active development with core agent capabilities being tested internally.</p>

      <h2 id="research-direction" className="docs__section-title">Research Direction</h2>
      <p className="docs__text">Our focus is on enhancing agent discovery, secure tool execution, and seamless human-AI collaboration.</p>

      <h2 id="long-term-vision" className="docs__section-title">Long-Term Vision</h2>
      <p className="docs__text">We aim to build a fully connected ecosystem where autonomous agents handle complex workflows reliably and securely.</p>
    </DocsLayout>
  );
}
