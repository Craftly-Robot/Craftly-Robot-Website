import DocPage from "../../DocPage";

export default function RealWorldTaskCoordinationPage() {
  return (
    <DocPage
      title="Real-World Task Coordination — Craftly Robot"
      description="Real-World Task Coordination in Craftly Robot"
      crumbs={[
        "Documentation",
        "Craftly Robot",
        "Feature Overview",
        "Real-World Task Coordination",
      ]}
      pageId="real-world-task-coordination"
      pageTitle="Real-World Task Coordination"
      tocItems={[
        {
          id: "real-world-task-coordination",
          label: "Real-World Task Coordination",
        },
        { id: "from-goal-to-outcome", label: "From Goal to Outcome" },
        { id: "task-state", label: "Task State" },
        { id: "beyond-one-domain", label: "Beyond One Domain" },
        { id: "current-status", label: "Current Status" },
        { id: "the-long-term-goal", label: "The Long Term Goal" },
      ]}
    >
      <p className="docs__text">
        The long term purpose of Craftly Robot is not simply to answer
        questions—it is to help people coordinate real work in the real world.
      </p>
      <p className="docs__text">
        A real world task may involve multiple people, services, schedules,
        constraints, and decisions. Today, humans often have to coordinate all
        of these pieces manually.
      </p>
      <p className="docs__text">
        A robot is being developed to reduce that coordination burden.
      </p>

      <h2 className="docs__subtitle" id="from-goal-to-outcome">
        From Goal to Outcome
      </h2>
      <p className="docs__text">A real world task can be represented as:</p>
      <div className="docs__code-block">
        <pre>
          Goal → Requirements → Discovery → Communication → Negotiation →
          Coordination → Human Approval → Outcome
        </pre>
      </div>
      <p className="docs__text">For example, a request such as:</p>
      <blockquote className="docs__quote">
        “Find a laptop repair service in Dhaka that can replace a damaged
        MacBook display within two days for under ৳15,000 and confirm whether it
        includes a warranty.”
      </blockquote>
      <p className="docs__text">contains several independent requirements.</p>
      <p className="docs__text">
        A robot can reason about those requirements and determine that the task
        may require:
      </p>
      <ul className="docs__list">
        <li>Finding suitable service providers</li>
        <li>Checking whether they support the required repair</li>
        <li>Checking availability</li>
        <li>Confirming expected completion time</li>
        <li>Checking the price</li>
        <li>Asking about warranty</li>
        <li>Comparing suitable results</li>
        <li>Presenting the result to the user</li>
        <li>Obtaining confirmation before a consequential commitment</li>
      </ul>
      <p className="docs__text">
        The individual steps can therefore become coordinated parts of a single
        task.
      </p>

      <h2 className="docs__subtitle" id="task-state">
        Task State
      </h2>
      <p className="docs__text">Complex agent workflows can also take time.</p>
      <p className="docs__text">A task may be:</p>
      <div className="docs__code-block">
        <pre>
          Pending → Discovering → Communicating → Negotiating → Waiting → Ready
          for Approval → Completed
        </pre>
      </div>
      <p className="docs__text">
        Modern agent-to-agent systems similarly model interactions around tasks,
        status updates, messages, and resulting artifacts rather than treating
        every interaction as a single chat response.
      </p>
      <p className="docs__text">
        This makes it possible for a user to understand not only the final
        result, but also where the task currently stands.
      </p>

      <h2 className="docs__subtitle" id="beyond-one-domain">
        Beyond One Domain
      </h2>
      <p className="docs__text">
        The long term vision is not limited to one type of service.
      </p>
      <p className="docs__text">
        The same underlying architecture could support tasks involving:
      </p>

      <h3
        className="text-h3"
        style={{
          marginTop: "var(--space-xl)",
          marginBottom: "var(--space-sm)",
        }}
      >
        Education
      </h3>
      <p className="docs__text">
        Finding tutors, teachers, mentors, or learning services based on
        specific requirements.
      </p>

      <h3
        className="text-h3"
        style={{
          marginTop: "var(--space-xl)",
          marginBottom: "var(--space-sm)",
        }}
      >
        Healthcare Coordination
      </h3>
      <p className="docs__text">
        Helping identify appropriate services or resources while maintaining
        strict privacy and human control.
      </p>

      <h3
        className="text-h3"
        style={{
          marginTop: "var(--space-xl)",
          marginBottom: "var(--space-sm)",
        }}
      >
        Local Services
      </h3>
      <p className="docs__text">
        Finding repair technicians, transportation, delivery, maintenance, or
        other service providers.
      </p>

      <h3
        className="text-h3"
        style={{
          marginTop: "var(--space-xl)",
          marginBottom: "var(--space-sm)",
        }}
      >
        Buying &amp; Selling
      </h3>
      <p className="docs__text">
        Helping users discover suitable buyers or sellers and coordinate
        communication around a transaction.
      </p>

      <h3
        className="text-h3"
        style={{
          marginTop: "var(--space-xl)",
          marginBottom: "var(--space-sm)",
        }}
      >
        Humanitarian Coordination
      </h3>
      <p className="docs__text">
        Tasks such as finding blood donors, locating relevant resources, or
        coordinating volunteers.
      </p>

      <h3
        className="text-h3"
        style={{
          marginTop: "var(--space-xl)",
          marginBottom: "var(--space-sm)",
        }}
      >
        Business Services
      </h3>
      <p className="docs__text">
        Connecting organizations with people or services that can satisfy a
        specific operational requirement.
      </p>

      <p className="docs__text" style={{ marginTop: "var(--space-xl)" }}>
        These are examples of the direction Craftly Robot is being built toward,
        not a claim that every category is already publicly available.
      </p>

      <h2 className="docs__subtitle" id="current-status">
        Current Status
      </h2>
      <p className="docs__text">
        Craftly Robot is currently under active research and development.
      </p>
      <p className="docs__text">
        The foundational systems for model development, agent identity,
        discovery, communication, and consent aware negotiation are being
        developed progressively.
      </p>
      <p className="docs__text">
        Some workflows are already being explored in research environments,
        while the complete public real world coordination experience is still
        under development.
      </p>
      <p className="docs__text">The product will evolve gradually:</p>
      <div className="docs__code-block">
        <pre>
          Conversational Intelligence ↓ Reliable Agentic Reasoning ↓ Agent
          Discovery ↓ Agent-to-Agent Coordination ↓ Real World Task Execution
        </pre>
      </div>
      <p className="docs__text">
        The objective is to build each layer reliably rather than presenting a
        partially developed system as if it were already a fully autonomous
        public assistant.
      </p>

      <h2 className="docs__subtitle" id="the-long-term-goal">
        The Long Term Goal
      </h2>
      <p className="docs__text">
        Craftly Robot is being built toward a world where a user can describe an
        objective naturally, and the system can help coordinate the work
        required to pursue it.
      </p>
      <p className="docs__text">
        The user should not necessarily need to know:
      </p>
      <ul className="docs__list">
        <li>Which person to contact</li>
        <li>Which service to search for</li>
        <li>Which agent is relevant</li>
        <li>How many participants are required</li>
        <li>How the communication should happen</li>
      </ul>
      <p className="docs__text">
        The robot should be able to determine much of that coordination itself
        while keeping the user informed and involved where it matters.
      </p>
      <p className="docs__text">
        The goal is not AI that simply knows the world. The goal is AI that can
        help coordinate with the world.
      </p>
    </DocPage>
  );
}
