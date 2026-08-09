import { Link } from 'react-router-dom';
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
        { id: 'craftly-robot', label: 'Craftly Robot' },
        { id: 'core-capabilities', label: 'Core Craftly Capabilities' },
        { id: 'craftly-platform', label: 'The Craftly Platform' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; <strong>Home</strong>
      </div>
      
      <h1 className="docs__title" id="welcome">Welcome to Craftly</h1>
      <p className="docs__text">
        Craftly is building the systems that connect people, work, and intelligent agents.
      </p>
      <p className="docs__text">
        We’re starting by building the organization and the tools that help people work together. Craftly Workspace powers how we organize and operate today, while Craftly Robot is our active research and development effort toward a new kind of AI one that can understand goals, use tools, discover useful capabilities, and coordinate with people and other agents to get real work done.
      </p>

      <h2 className="docs__section-title" id="choose-surface">Choose Your Surface</h2>
      <p className="docs__text">
        Craftly brings together two connected surfaces, each designed for a different part of the journey.
      </p>
      <p className="docs__text">
        <strong>Workspace helps people work together. Robot helps intelligent systems work alongside them.</strong>
      </p>

      <div style={{ marginTop: '40px' }}>
        <h3 className="docs__section-title" id="craftly-workspace" style={{ fontSize: '24px' }}>Craftly Workspace</h3>
        <p className="docs__text" style={{ fontStyle: 'italic', color: '#5f6368', marginBottom: '24px' }}>
          The place where Craftly works.
        </p>
        <p className="docs__text">
          Craftly Workspace brings the people, teams, and everyday operations of the organization into one connected environment. It gives everyone a structured way to communicate, manage work, access resources, and stay aligned with the people they work with.
        </p>
        <p className="docs__text">
          Whether someone is joining Craftly for the first time, taking on a task, working with their team, or accessing shared resources, Workspace provides the foundation for getting work done together.
        </p>
        <ul className="docs__list">
          <li><strong>Key Features:</strong> Organization management, onboarding, agreements, task coordination, task evidence, communication, resources, training, and operational workflows.</li>
          <li><strong>Get Started:</strong> Learn how Craftly Workspace works and how people and teams use it to coordinate their work.</li>
        </ul>
        <div style={{ marginTop: '24px', marginBottom: '40px' }}>
          <Link to="/resources/documentation/workspace/overview/what-is-craftly-workspace" className="docs__link">Explore Workspace &rarr;</Link>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3 className="docs__section-title" id="craftly-robot" style={{ fontSize: '24px' }}>Craftly Robot</h3>
        <p className="docs__text" style={{ fontStyle: 'italic', color: '#5f6368', marginBottom: '24px' }}>
          The intelligence Craftly is building for the real world.
        </p>
        <p className="docs__text">
          Craftly Robot is our active agentic AI research and development platform. We’re building Robot around a simple idea: AI should be able to do more than answer questions—it should be able to understand what someone is trying to accomplish, reason about the task, use the right tools, and coordinate with the systems and people that can help.
        </p>
        <p className="docs__text">
          One of Robot’s longer-term capabilities is agent-to-agent discovery and negotiation. Agents should be able to find relevant agents or services, communicate within defined privacy boundaries, understand whether they can work together, and coordinate a possible solution—with a human remaining in control of consequential actions.
        </p>
        <p className="docs__text">
          Robot is currently under active research and development. The foundational infrastructure for these capabilities exists within our research environment, while the broader public experience is still being built.
        </p>
        <ul className="docs__list">
          <li><strong>Key Features:</strong> Agentic AI, reasoning and planning, tool use, agent discovery, agent-to-agent coordination, privacy-aware communication, multi-agent systems, and human-controlled execution.</li>
          <li><strong>Get Started:</strong> Explore Craftly Robot and learn how we’re building intelligent systems that can work alongside people.</li>
        </ul>
        <div style={{ marginTop: '24px', marginBottom: '40px' }}>
          <Link to="/resources/documentation/robot/overview/what-is-craftly-robot" className="docs__link">Explore Robot &rarr;</Link>
        </div>
      </div>

      <h2 className="docs__section-title" id="core-capabilities">Core Craftly Capabilities</h2>
      <p className="docs__text">
        While Workspace and Robot serve different purposes, they are being built around the same idea: people and intelligent systems should be able to work together naturally.
      </p>

      <ul className="docs__list">
        <li><strong>People & Organizations:</strong> Give people the structure they need to communicate, collaborate, and coordinate meaningful work across an organization.</li>
        <li><strong>Agentic Intelligence:</strong> Build intelligent systems that can understand goals, reason about problems, use tools, and carry out multi-step tasks.</li>
        <li><strong>Connected Workflows:</strong> Connect people, software, services, and agents so that work can move between them without unnecessary friction.</li>
        <li><strong>Agent Discovery:</strong> Enable agents to discover relevant people, agents, or services that may be able to help with a particular request.</li>
        <li><strong>Agent-to-Agent Coordination:</strong> Allow intelligent agents to communicate, check alignment, and coordinate possible solutions within defined boundaries.</li>
        <li><strong>Human Control:</strong> Keep people involved when it matters. Consequential actions should require explicit human confirmation rather than giving agents unrestricted authority.</li>
      </ul>

      <h2 className="docs__section-title" id="craftly-platform">The Craftly Platform</h2>
      <p className="docs__text">
        Craftly is not just building an AI product or a workspace in isolation.
      </p>
      <p className="docs__text">
        We’re building the systems around how people and intelligent technology work together.
      </p>
      <ul className="docs__list" style={{ listStyleType: 'none', borderLeft: '3px solid #111', paddingLeft: '16px' }}>
        <li style={{ marginBottom: '8px' }}><strong>Workspace</strong> is where people organize and operate.</li>
        <li><strong>Robot</strong> is where intelligent agents learn to reason, act, and coordinate.</li>
      </ul>
      <p className="docs__text">
        Together, they form the foundation of the Craftly platform—and the first steps toward our longer-term vision of technology that can help useful work reach more people, while keeping the people behind that work at the center.
      </p>
      <p className="docs__text" style={{ fontSize: '18px', fontWeight: '500', color: '#111', marginTop: '32px' }}>
        Build the organization. Build the intelligence. Connect them to the world.
      </p>

    </DocsLayout>
  );
}
