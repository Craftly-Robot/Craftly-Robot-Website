import DocPage from "../../DocPage";

export default function AgenticAIPage() {
  return (
    <DocPage
      title="Agentic AI — Craftly Robot"
      description="Agentic AI in Craftly Robot"
      crumbs={["Documentation", "Craftly Robot", "Feature Overview", "Agentic AI"]}
      pageId="agentic-ai"
      pageTitle="Agentic AI"
      tocItems={[
        { id: "agentic-ai", label: "Agentic AI" },
        {
          id: "from-conversation-to-action",
          label: "From Conversation to Action",
        },
        { id: "where-robot-is-today", label: "Where Robot Is Today" },
        {
          id: "what-we-are-building-toward",
          label: "What We Are Building Toward",
        },
      ]}
    >
      <p className="docs__text">
        Craftly Robot is being developed toward an agentic AI system—an AI that
        can do more than understand and respond to a user.
      </p>
      <p className="docs__text">
        Today, Robot's primary development focus is on building a strong
        conversational AI foundation: understanding language, maintaining
        context, reasoning over requests, and producing reliable responses.
      </p>
      <p className="docs__text">
        From that foundation, Craftly is progressively moving Robot toward
        agentic behavior: systems that can understand a goal, determine what
        needs to happen next, use available capabilities, coordinate with other
        agents, and help move a task toward a real world outcome.
      </p>
      <p className="docs__text">This transition is intentional.</p>
      <p className="docs__text">
        We are not treating agentic behavior as simply "adding tools to a
        chatbot." The long term objective is to build an AI system with the
        reasoning, context, identity, discovery, coordination, and safety
        infrastructure required to operate in a real-world environment.
      </p>

      <h2 className="docs__subtitle" id="from-conversation-to-action">
        From Conversation to Action
      </h2>
      <p className="docs__text">
        A conventional conversational AI workflow can be represented as:
      </p>
      <div className="docs__code-block">
        <pre>User → Model → Response</pre>
      </div>
      <p className="docs__text">Craftly Robot is being developed toward:</p>
      <div className="docs__code-block">
        <pre>
          User → Understanding → Reasoning → Planning → Discovery → Coordination
          → Human Approval → Action
        </pre>
      </div>
      <p className="docs__text">The distinction is important.</p>
      <p className="docs__text">
        An answer can be useful, but an agentic system should also be able to
        determine what must happen next to help accomplish the user's actual
        objective.
      </p>

      <h2 className="docs__subtitle" id="where-robot-is-today">
        Where Robot Is Today
      </h2>
      <p className="docs__text">
        Craftly Robot is currently under active research and development.
      </p>
      <p className="docs__text">
        The present work focuses on strengthening the underlying AI and
        gradually introducing the systems required for more capable agentic
        behavior.
      </p>
      <p className="docs__text">The current development direction is:</p>
      <div className="docs__code-block">
        <pre>
          Strong Conversational Model → Reliable Reasoning → Tool &amp; Context
          Integration → Agentic Workflows → Multi-Agent Coordination
        </pre>
      </div>
      <p className="docs__text">
        The exact capabilities available to users can therefore change as
        research progresses.
      </p>

      <h2 className="docs__subtitle" id="what-we-are-building-toward">
        What We Are Building Toward
      </h2>
      <p className="docs__text">
        The long term goal is a broad real-world assistant that can:
      </p>
      <ul className="docs__list">
        <li>Understand complex user goals</li>
        <li>Break goals into actionable requirements</li>
        <li>Discover relevant people, services, and agents</li>
        <li>Use appropriate tools and systems</li>
        <li>Coordinate multiple specialized agents</li>
        <li>Maintain task context over time</li>
        <li>Communicate across agent boundaries</li>
        <li>Request human approval when necessary</li>
        <li>Help turn an intention into a real-world outcome</li>
      </ul>
      <p className="docs__text">
        This direction reflects a broader shift in AI engineering from systems
        that primarily generate content toward systems that can reason over
        goals and coordinate actions. Modern agent architectures commonly
        combine models with tools, state, orchestration, and safety mechanisms
        to support this kind of behavior.
      </p>
    </DocPage>
  );
}
