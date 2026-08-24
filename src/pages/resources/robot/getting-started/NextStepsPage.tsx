import DocPage from "../../DocPage";

export default function NextStepsPage() {
  return (
    <DocPage
      title="Next Steps — Craftly Robot"
      description="Next Steps in Craftly Robot"
      crumbs={["Documentation", "Craftly Robot", "Getting Started", "Next Steps"]}
      pageId="next-steps"
      pageTitle="Next Steps"
      tocItems={[
        { id: "next-steps", label: "Next Steps" },
        {
          id: "explore-robot-architecture",
          label: "Explore Robot Architecture",
        },
        { id: "explore-the-agent-model", label: "Explore the Agent Model" },
        { id: "explore-agent-discovery", label: "Explore Agent Discovery" },
        {
          id: "explore-agent-to-agent-negotiation",
          label: "Explore Agent-to-Agent Negotiation",
        },
        { id: "build-with-craftly", label: "Build with Craftly" },
        { id: "explore-the-robot-network", label: "Explore the Robot Network" },
        {
          id: "the-craftly-robot-experience",
          label: "The Craftly Robot Experience",
        },
      ]}
    >
      <p className="docs__text">
        Once you can sign in, give Robot a meaningful request, and understand
        the discovery and coordination flow, you can explore the deeper parts of
        Craftly Robot.
      </p>

      <h2 className="docs__subtitle" id="explore-robot-architecture">
        Explore Robot Architecture
      </h2>
      <p className="docs__text">
        Learn how Robot is structured internally, including its current Mixture
        of Experts (MoE) architecture with 62 specialized experts and the
        components responsible for context, memory, agents, tools, execution,
        and verification.
      </p>
      <p className="docs__text">
        The broader industry direction for agentic systems increasingly
        emphasizes explicit orchestration, tool execution, handoffs/delegation,
        guardrails, persistent context, and tracing rather than treating a model
        call as the entire application.
      </p>

      <h2 className="docs__subtitle" id="explore-the-agent-model">
        Explore the Agent Model
      </h2>
      <p className="docs__text">Learn:</p>
      <ul className="docs__list">
        <li>What an agent represents</li>
        <li>How an agent receives a goal</li>
        <li>How agents reason about tasks</li>
        <li>How agents use capabilities</li>
        <li>How agents coordinate with other agents</li>
        <li>How identity and permissions affect interaction</li>
      </ul>

      <h2 className="docs__subtitle" id="explore-agent-discovery">
        Explore Agent Discovery
      </h2>
      <p className="docs__text">
        Learn how Robot identifies potentially relevant people, services, and
        capabilities within the Craftly ecosystem.
      </p>
      <p className="docs__text">
        This section can also explain how agent capabilities are described,
        matched, and selected.
      </p>

      <h2 className="docs__subtitle" id="explore-agent-to-agent-negotiation">
        Explore Agent-to-Agent Negotiation
      </h2>
      <p className="docs__text">Go deeper into how agents:</p>
      <ul className="docs__list">
        <li>Discover one another</li>
        <li>Establish communication</li>
        <li>Exchange requirements</li>
        <li>Maintain task context</li>
        <li>Check alignment</li>
        <li>Negotiate conditions</li>
        <li>Return results</li>
      </ul>

      <h2 className="docs__subtitle" id="build-with-craftly">
        Build with Craftly
      </h2>
      <p className="docs__text">
        For developers and researchers, explore how to create agents and connect
        them to tools and external capabilities.
      </p>
      <p className="docs__text">
        Modern agent frameworks commonly expose tools, resources, prompts, and
        agent-to-agent delegation as separate building blocks; MCP, for example,
        standardizes server-side tools, resources, and prompts that AI
        applications can discover and invoke.
      </p>
      <p className="docs__text">
        Craftly's own development model can build on similar principles while
        maintaining its own architecture and ecosystem.
      </p>

      <h2 className="docs__subtitle" id="explore-the-robot-network">
        Explore the Robot Network
      </h2>
      <p className="docs__text">
        The usefulness of agent-to-agent coordination grows as more people,
        services, and capabilities become available.
      </p>
      <p className="docs__text">
        A larger network means a greater pool of potential participants for
        discovery and coordination.
      </p>
      <p className="docs__text">
        The long term direction is a system in which:
      </p>
      <div className="docs__code">
        People have agents &rarr; Agents have capabilities &rarr; Capabilities
        become discoverable &rarr; Agents coordinate &rarr; People remain in
        control
      </div>

      <h2 className="docs__subtitle" id="the-craftly-robot-experience">
        The Craftly Robot Experience
      </h2>
      <p className="docs__text">
        Craftly Robot can be summarized by one central idea:
      </p>
      <p className="docs__text">
        <strong>
          AI should not stop at generating an answer when the user's real need
          is to get something done.
        </strong>
      </p>
      <p className="docs__text">
        Traditional conversational AI can be represented as:
      </p>
      <div className="docs__code">Ask &rarr; Understand &rarr; Answer</div>
      <p className="docs__text">Craftly Robot is being built around:</p>
      <div className="docs__code">
        Ask &rarr; Understand &rarr; Discover &rarr; Communicate &rarr;
        Negotiate &rarr; Coordinate &rarr; Human Approval &rarr; Action
      </div>
      <p className="docs__text">
        That is the foundation of Robot's real world AI direction.
      </p>
      <p className="docs__text">
        The purpose is not to remove humans from important decisions.
      </p>
      <p className="docs__text">
        It is to remove unnecessary coordination work between humans, software,
        services, and intelligent systems so that people can describe what they
        need and let agents handle more of the work required to move that
        objective forward.
      </p>
      <ul className="docs__list">
        <li>You define the goal.</li>
        <li>Robot understands it.</li>
        <li>Agents discover and coordinate the right capabilities.</li>
        <li>You remain in control when the outcome matters.</li>
      </ul>
    </DocPage>
  );
}
