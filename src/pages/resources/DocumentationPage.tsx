import DocsLayout from './DocsLayout';

export default function DocumentationPage() {
  return (
    <DocsLayout 
      title="Welcome to Craftly"
      description="Documentation home for Craftly Workspace and Craftly Robot"
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
        <li><strong>Learn more:</strong> <a href="#overview" className="docs__link">Explore Craftly Robot</a></li>
      </ul>

      <h2 className="docs__section-title" id="overview">Overview</h2>
      <p className="docs__text" style={{ color: '#5f6368', fontStyle: 'italic' }}>Craftly Robot is currently under active research and development.</p>
      
      <h3 id="what-is-robot" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>What is Craftly Robot?</h3>
      <p className="docs__text">Craftly Robot is an advanced platform designed to create and manage intelligent AI agents capable of reasoning, planning, and executing real-world tasks.</p>

      <h3 id="how-robot-works" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>How Robot Works</h3>
      <p className="docs__text">It utilizes a combination of large language models, tool integration, and multi-agent coordination to break down complex objectives into actionable steps.</p>

      <h3 id="current-status" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Current Status</h3>
      <p className="docs__text">Currently, the platform is in active development with core agent capabilities being tested internally.</p>

      <h3 id="research-direction" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Research Direction</h3>
      <p className="docs__text">Our focus is on enhancing agent discovery, secure tool execution, and seamless human-AI collaboration.</p>

      <h3 id="long-term-vision" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Long-Term Vision</h3>
      <p className="docs__text">We aim to build a fully connected ecosystem where autonomous agents handle complex workflows reliably and securely.</p>


      <h2 className="docs__section-title" id="getting-started">Getting Started</h2>
      
      <h3 id="prerequisites" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Prerequisites</h3>
      <p className="docs__text">Ensure you have a Craftly account and access to the Robot platform.</p>
      
      <h3 id="set-up" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Set Up Craftly Robot</h3>
      <p className="docs__text">Follow the installation guide to configure your local environment and connect to the Craftly network.</p>
      
      <h3 id="create-agent" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Create Your First Agent</h3>
      <p className="docs__text">Use the agent builder interface or CLI to define your agent's persona and objectives.</p>
      
      <h3 id="configure-tools" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Configure Tools</h3>
      <p className="docs__text">Grant your agent access to specific tools, APIs, and data sources it needs to function.</p>
      
      <h3 id="run-task" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Run Your First Task</h3>
      <p className="docs__text">Assign a goal to your agent and monitor its execution step-by-step.</p>
      
      <h3 id="understand-output" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Understand Agent Output</h3>
      <p className="docs__text">Learn how to read agent logs, reasoning paths, and final outputs.</p>
      
      <h3 id="next-steps" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Next Steps</h3>
      <p className="docs__text">Explore advanced features like multi-agent systems and custom tool creation.</p>


      <h2 className="docs__section-title" id="build-with-craftly">Build with Craftly</h2>
      
      <h3 id="agent-architecture" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Agent Architecture</h3>
      <p className="docs__text">Understand the core components that make up a Craftly agent.</p>
      
      <h3 id="tools" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Tools</h3>
      <p className="docs__text">Learn how to build and integrate custom tools using our SDK.</p>
      
      <h3 id="tasks" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Tasks</h3>
      <p className="docs__text">Define complex objectives and break them down into subtasks.</p>
      
      <h3 id="workflows" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Workflows</h3>
      <p className="docs__text">Chain multiple tasks together to create automated workflows.</p>
      
      <h3 id="multi-agent-systems" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Multi-Agent Systems</h3>
      <p className="docs__text">Coordinate multiple specialized agents to achieve a common goal.</p>
      
      <h3 id="integrations" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Integrations</h3>
      <p className="docs__text">Connect your agents with external services and platforms.</p>
      
      <h3 id="custom-capabilities" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Custom Capabilities</h3>
      <p className="docs__text">Extend the core platform with your own custom logic and models.</p>


      <h2 className="docs__section-title" id="feature-overview">Feature Overview</h2>
      
      <h3 id="agentic-ai-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Agentic AI</h3>
      <p className="docs__text">Intelligent reasoning and autonomous planning capabilities.</p>
      
      <h3 id="tool-use-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Tool Use</h3>
      <p className="docs__text">Secure and robust integration with external tools and APIs.</p>
      
      <h3 id="agent-discovery-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Agent Discovery</h3>
      <p className="docs__text">Dynamically find and connect with other agents on the network.</p>
      
      <h3 id="agent-negotiation-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Agent-to-Agent Negotiation</h3>
      <p className="docs__text">Enable agents to communicate, negotiate, and delegate tasks.</p>
      
      <h3 id="multi-agent-coordination-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Multi-Agent Coordination</h3>
      <p className="docs__text">Orchestrate complex workflows involving multiple specialized agents.</p>
      
      <h3 id="privacy-aware-communication-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Privacy-Aware Communication</h3>
      <p className="docs__text">Secure communication channels with strict data privacy boundaries.</p>
      
      <h3 id="human-confirmation-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Human Confirmation</h3>
      <p className="docs__text">Require human approval for critical actions and decisions.</p>
      
      <h3 id="real-world-task-coordination-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Real-World Task Coordination</h3>
      <p className="docs__text">Bridge the gap between digital workflows and physical operations.</p>


      <h2 className="docs__section-title" id="projects">Projects</h2>
      
      <h3 id="project-structure-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Project Structure</h3>
      <p className="docs__text">Organize your agents, tools, and workflows into distinct projects.</p>
      
      <h3 id="create-project-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Create a Project</h3>
      <p className="docs__text">Learn how to initialize a new project workspace.</p>
      
      <h3 id="manage-agents-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Manage Agents</h3>
      <p className="docs__text">Add, configure, and monitor agents within your project.</p>
      
      <h3 id="configure-tasks-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Configure Tasks</h3>
      <p className="docs__text">Define project-specific tasks and objectives.</p>
      
      <h3 id="monitor-execution-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Monitor Execution</h3>
      <p className="docs__text">Track progress and review logs for all agent activity in your project.</p>
      
      <h3 id="project-workflows-feature" style={{ marginTop: '24px', fontSize: '18px', fontWeight: 600 }}>Project Workflows</h3>
      <p className="docs__text">Build comprehensive workflows that span multiple agents and tasks.</p>

    </DocsLayout>
  );
}
