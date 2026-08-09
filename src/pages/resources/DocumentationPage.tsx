import DocsLayout from './DocsLayout';

export default function DocumentationPage() {
  return (
    <DocsLayout 
      title="Welcome to Craftly"
      description="Documentation home for Craftly Workspace and Craftly Robot"
      tocItems={[
        { id: 'welcome', label: 'Welcome to Craftly' },
        { id: 'choose-surface', label: 'Choose Your Surface' },
        { id: 'craftly-workspace', label: 'Craftly Workspace' },
        { id: 'craftly-robot', label: 'Craftly Robot' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; <strong>Home</strong>
      </div>
      
      <h1 className="docs__title" id="welcome">Welcome to Craftly</h1>
      
      <p className="docs__text">
        Craftly is building the systems that connect people, work, and intelligent agents. Craftly Workspace powers how we work today, while Craftly Robot explores the future of real-world AI assistance and agent coordination.
      </p>

      <h2 className="docs__section-title" id="choose-surface">Choose Your Surface</h2>
      <p className="docs__text">
        Craftly brings together two connected surfaces: Workspace for coordinating people and work, and Robot for building and operating intelligent agents.
      </p>

      <h3 className="docs__section-title" id="craftly-workspace" style={{ fontSize: '18px' }}>Craftly Workspace</h3>
      <p className="docs__text">
        Craftly Workspace is the central system for coordinating people, work, and the day-to-day operations of Craftly. It connects teams, tasks, resources, communication, and organizational workflows in one structured workspace.
      </p>
      <ul className="docs__list">
        <li><strong>Key Features:</strong> Organization management, task coordination, communication, onboarding, resources, and operational workflows.</li>
        <li><strong>Learn more:</strong> <a href="#craftly-workspace" className="docs__link">Explore Craftly Workspace</a></li>
      </ul>

      <h3 className="docs__section-title" id="craftly-robot" style={{ fontSize: '18px' }}>Craftly Robot</h3>
      <p className="docs__text">
        Craftly Robot is Craftly's active agentic AI research and development platform, built to create intelligent systems that can reason, use tools, discover relevant agents or services, and coordinate real-world tasks.
      </p>
      <ul className="docs__list">
        <li><strong>Key Features:</strong> Agentic AI, tool use, agent discovery, agent-to-agent negotiation, multi-agent coordination, and human-controlled execution.</li>
        <li><strong>Learn more:</strong> <a href="/resources/documentation/overview" className="docs__link">Explore Craftly Robot</a></li>
      </ul>

    </DocsLayout>
  );
}
