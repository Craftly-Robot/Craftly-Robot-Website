import DocPage from "../../DocPage";

export default function AgentNegotiationPage() {
  return (
    <DocPage
      title="Agent-to-Agent Negotiation — Craftly Robot"
      description="Agent-to-Agent Negotiation in Craftly Robot"
      crumbs={["Documentation", "Craftly Robot", "Feature Overview", "Agent-to-Agent Negotiation"]}
      pageId="agent-to-agent-negotiation"
      pageTitle="Agent-to-Agent Negotiation"
      tocItems={[
        {
          id: "agent-to-agent-negotiation",
          label: "Agent-to-Agent Negotiation",
        },
        { id: "how-it-works", label: "How It Works" },
        { id: "real-world-example", label: "Real World Example" },
        { id: "current-status", label: "Current Status" },
        { id: "why-it-matters", label: "Why It Matters" },
      ]}
    >
      <p className="docs__text">
        Agent-to-agent negotiation is a core research capability within Craftly
        Robot.
      </p>
      <p className="docs__text">
        The idea is simple : instead of requiring a person to manually
        communicate with every person or service involved in a task, one Robot
        agent can communicate with another agent to discover capabilities,
        exchange relevant requirements, determine alignment, and coordinate a
        possible solution.
      </p>
      <p className="docs__text">
        This is an important part of moving Robot from conversational AI toward
        real world task coordination.
      </p>
      <p className="docs__text">
        Modern agent interoperability research follows a similar pattern.
        Google's A2A protocol, for example, defines mechanisms for agent
        capability discovery, task-oriented communication, collaboration, and
        exchanging information between independent agents without requiring one
        agent to access another agent's internal state.
      </p>
      <p className="docs__text">
        Craftly Robot is developing its own identity, discovery, and agent
        communication model around this broader idea.
      </p>

      <h2 className="docs__subtitle" id="how-it-works">
        How It Works
      </h2>
      <p className="docs__text">A simplified Craftly workflow can look like:</p>
      <div className="docs__code-block">
        <pre>
          User Request ↓ Requirement Understanding ↓ Agent Discovery ↓ Agent
          Request ↓ Agent-to-Agent Communication ↓ Alignment / Negotiation ↓
          Potential Solution ↓ Human Confirmation ↓ Real World Action
        </pre>
      </div>
      <p className="docs__text">The exact workflow depends on the task.</p>

      <h2 className="docs__subtitle" id="real-world-example">
        Real World Example
      </h2>
      <p className="docs__text">Suppose a user asks:</p>
      <blockquote className="docs__quote">
        “Find a laptop repair service in Dhaka that can replace a damaged
        MacBook display within two days for under ৳15,000, and confirm whether
        they provide a warranty.”
      </blockquote>
      <p className="docs__text">
        Robot can interpret the request into requirements:
      </p>
      <ul className="docs__list">
        <li>MacBook display replacement</li>
        <li>Dhaka</li>
        <li>Completion within two days</li>
        <li>Maximum budget of ৳15,000</li>
        <li>Warranty confirmation</li>
      </ul>
      <p className="docs__text">
        It can then discover potentially relevant service agents.
      </p>
      <p className="docs__text">Those agents can communicate about:</p>
      <ul className="docs__list">
        <li>Whether the service is available</li>
        <li>Whether the required display is available</li>
        <li>Expected repair time</li>
        <li>Price</li>
        <li>Warranty</li>
        <li>Other relevant conditions</li>
      </ul>
      <p className="docs__text">
        Robot can then compare the resulting information and present suitable
        options to the user.
      </p>
      <p className="docs__text">
        The goal is not for agents to make uncontrolled commitments. The goal is
        to let agents handle the communication and coordination work that would
        otherwise require significant human effort.
      </p>

      <h2 className="docs__subtitle" id="current-status">
        Current Status
      </h2>
      <p className="docs__text">
        Craftly Robot's agent-to-agent negotiation capability is currently part
        of active research and development.
      </p>
      <p className="docs__text">
        The foundational infrastructure for identity, discovery, agent
        communication, and consent-aware coordination is being developed, and
        early real-world workflows are being explored.
      </p>
      <p className="docs__text">
        The broader public workflow is still evolving.
      </p>
      <p className="docs__text">
        As the system matures, Craftly intends to make increasingly complex
        agent-to-agent interactions possible while keeping identity, privacy,
        permissions, and human control central to the design.
      </p>

      <h2 className="docs__subtitle" id="why-it-matters">
        Why It Matters
      </h2>
      <p className="docs__text">A single agent can assist one person.</p>
      <p className="docs__text">
        A network of agents can coordinate across many people, services, and
        capabilities.
      </p>
      <p className="docs__text">That changes the role of AI from:</p>
      <blockquote className="docs__quote">“Tell us the answer.”</blockquote>
      <p className="docs__text">to:</p>
      <blockquote className="docs__quote">“Help us get this done.”</blockquote>
    </DocPage>
  );
}
