import DocsLayout from "../../DocsLayout";

export default function HowRobotWorksPage() {
  return (
    <DocsLayout
      title="How Robot Works — Craftly Robot"
      description="How Robot Works in Craftly Robot"
      tocItems={[{ id: "how-robot-works", label: "How Robot Works" }]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Overview &gt;{" "}
        <strong>How Robot Works</strong>
      </div>

      <h1 className="docs__title" id="how-robot-works">
        How Robot Works
      </h1>
      <p className="docs__text">
        Robot is designed around a multi step agentic workflow.
      </p>

      <h2 className="docs__subtitle">1. Understand</h2>
      <p className="docs__text">
        The system first understands the user's objective, constraints, context,
        and desired outcome.
      </p>

      <h2 className="docs__subtitle">2. Plan</h2>
      <p className="docs__text">
        Robot determines what needs to be done and identifies the agents, tools,
        information, or services required.
      </p>

      <h2 className="docs__subtitle">3. Discover</h2>
      <p className="docs__text">
        When necessary, Robot can discover relevant people, agents, services, or
        resources that may help complete the task.
      </p>

      <h2 className="docs__subtitle">4. Coordinate</h2>
      <p className="docs__text">
        Specialized agents can communicate and coordinate with each other. Robot
        may also support agent-to-agent negotiation to determine how different
        agents or services can work together.
      </p>

      <h2 className="docs__subtitle">5. Verify</h2>
      <p className="docs__text">
        Before consequential actions are taken, the system checks permissions,
        requirements, and human consent.
      </p>

      <h2 className="docs__subtitle">6. Execute</h2>
      <p className="docs__text">
        Approved actions are then carried out through the appropriate tools,
        services, or agents.
      </p>

      <h2 className="docs__subtitle">7. Report</h2>
      <p className="docs__text">
        Robot provides the user with the result, relevant evidence, and the
        status of the completed action.
      </p>
    </DocsLayout>
  );
}
