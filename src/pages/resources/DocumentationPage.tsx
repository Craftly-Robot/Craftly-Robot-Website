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
        Craftly is an AI platform built to help people and organizations build, operate, and coordinate intelligent systems. From everyday operations to autonomous AI agents, Craftly brings the tools, workspace, and intelligence needed to turn complex workflows into connected systems.
      </p>

      <h2 className="docs__section-title" id="choose-surface">Choose Your Surface</h2>
      <p className="docs__text">
        Craftly offers multiple product surfaces designed for different parts of your AI workflow. Select the interface that best fits your needs:
      </p>

      <h3 className="docs__section-title" id="craftly-workspace" style={{ fontSize: '18px' }}>Craftly Workspace</h3>
      <p className="docs__text">
        Your central workspace for building and managing the day-to-day operations of our company.
      </p>
      <p className="docs__text">
        Craftly Workspace brings people, tasks, resources, communication, and organizational workflows into one connected environment giving teams a structured place to work, collaborate, and operate.
      </p>
      <ul className="docs__list">
        <li><strong>Key Features:</strong> company management, task and workflow coordination, team communication, resource management, onboarding, and operational visibility.</li>
        <li><strong>Get Started:</strong> Explore the Craftly Workspace documentation and learn how our organization can get started.</li>
      </ul>

      <h3 className="docs__section-title" id="craftly-robot" style={{ fontSize: '18px' }}>Craftly Robot</h3>
      <p className="docs__text">
        Your intelligent AI platform for building and operating autonomous AI systems.
      </p>
      <p className="docs__text">
        Craftly Robot is designed to work beyond simple conversations helping you build AI agents that can reason, use tools, interact with systems, execute tasks, and work together to solve complex problems.
      </p>
      <ul className="docs__list">
        <li><strong>Key Features:</strong> AI agents, agentic workflows, tool execution, multi-agent collaboration, intelligent automation, and autonomous task execution.</li>
        <li><strong>Get Started:</strong> Explore the Craftly Robot documentation and learn how to build your first intelligent system.</li>
      </ul>

      <h2 className="docs__section-title" id="core-capabilities">Core Craftly Capabilities</h2>
      <p className="docs__text">
        Both Craftly Workspace and Craftly Robot are built around a shared vision: connecting people, software, and intelligent agents into one continuously operating system.
      </p>
      <ul className="docs__list">
        <li><strong>Agentic AI:</strong> Build AI systems capable of reasoning, planning, using tools, and executing multi-step tasks.</li>
        <li><strong>Multi-Agent Collaboration:</strong> Allow multiple specialized agents to coordinate, communicate, and work together on complex objectives.</li>
        <li><strong>Intelligent Automation:</strong> Turn repetitive and complex workflows into systems that can operate with minimal manual intervention.</li>
        <li><strong>Connected Operations:</strong> Bring organizational workflows, people, resources, and AI systems into a unified environment.</li>
        <li><strong>Human + AI Collaboration:</strong> Give people the tools to work alongside intelligent systems rather than simply using AI as a chatbot.</li>
        <li><strong>Extensible Architecture:</strong> Build and connect new tools, workflows, agents, and capabilities as your requirements evolve.</li>
      </ul>

      <h2 className="docs__section-title" id="craftly-platform">The Craftly Platform</h2>
      <p className="docs__text">
        Craftly Workspace gives our organization the environment to operate.
      </p>
      <p className="docs__text">
        Craftly Robot gives our organization the intelligence to act.
      </p>
      <p className="docs__text">
        Together, they form the foundation of the Craftly platform connecting people, operations, software, and autonomous intelligence in one ecosystem.
      </p>
    </DocsLayout>
  );
}
