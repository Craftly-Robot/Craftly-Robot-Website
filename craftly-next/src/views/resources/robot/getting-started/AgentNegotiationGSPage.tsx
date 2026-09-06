import DocPage from "../../DocPage";

export default function AgentNegotiationGSPage() {
  return (
    <DocPage
      title="Agent-to-Agent Negotiation — Craftly Robot"
      description="Agent-to-Agent Negotiation in Craftly Robot"
      crumbs={["Documentation", "Craftly Robot", "Getting Started", "Agent-to-Agent Negotiation"]}
      pageId="agent-negotiation"
      pageTitle="Agent-to-Agent Negotiation"
      tocItems={[
        { id: "agent-negotiation", label: "Agent-to-Agent Negotiation" },
        { id: "the-basic-model", label: "The Basic Model" },
        { id: "real-world-example", label: "Real World Example" },
        { id: "human-control", label: "Human Control" },
      ]}
    >
      <p className="docs__text">
        Agent-to-agent negotiation is one of the defining capabilities of
        Craftly Robot.
      </p>
      <p className="docs__text">
        The goal is to allow AI agents to communicate directly with one another
        so that users do not have to manually coordinate every participant
        involved in a real-world task.
      </p>

      <h2 className="docs__subtitle" id="the-basic-model">
        The Basic Model
      </h2>
      <p className="docs__text">Instead of:</p>
      <div className="docs__code">
        You &rarr; Person A &rarr; Person B &rarr; Person C
      </div>
      <p className="docs__text">the system can support:</p>
      <div className="docs__code">
        Your Robot &rarr; Agent A &rarr; Agent B &rarr; Agent C
      </div>
      <p className="docs__text">
        The agents can communicate about the task and determine whether their
        capabilities and requirements align.
      </p>
      <p className="docs__text">
        This is closely related to the direction of current
        agent-interoperability systems, where agents can discover capabilities,
        exchange messages, maintain task state, and collaborate toward
        completing a user-requested task.
      </p>

      <h2 className="docs__subtitle" id="real-world-example">
        Real World Example
      </h2>
      <p className="docs__text">Consider the teacher request again:</p>
      <blockquote className="docs__quote">
        “Find a laptop repair service in Dhaka that can replace a damaged
        MacBook display within two days for under ৳15,000, and confirm whether
        they provide a warranty.”
      </blockquote>
      <p className="docs__text">Robot can:</p>
      <ul className="docs__list">
        <li>
          <strong>1. Understand the request</strong>
          <br />
          Identify the required repair, location, deadline, maximum budget, and
          warranty requirement.
        </li>
        <li>
          <strong>2. Discover relevant agents</strong>
          <br />
          Find agents representing laptop repair services in Dhaka that may be
          able to handle a MacBook display replacement.
        </li>
        <li>
          <strong>3. Initiate communication</strong>
          <br />
          Send the repair request and relevant requirements to suitable service
          agents.
        </li>
        <li>
          <strong>4. Exchange information</strong>
          <br />
          Agents can communicate about display availability, repair time,
          pricing, warranty, and other relevant service details.
        </li>
        <li>
          <strong>5. Check alignment</strong>
          <br />
          Determine whether each service can meet the required deadline, budget,
          repair requirements, and warranty expectations.
        </li>
        <li>
          <strong>6. Negotiate where necessary</strong>
          <br />
          If needed, agents can coordinate details such as final pricing, repair
          schedule, warranty terms, or other conditions.
        </li>
        <li>
          <strong>7. Return the result</strong>
          <br />
          Your Robot presents the relevant options, including the services that
          best match your requirements.
        </li>
        <li>
          <strong>8. Ask for human confirmation</strong>
          <br />
          Before making a consequential decision, Robot brings the options back
          to you for review and confirmation.
        </li>
      </ul>
      <p className="docs__text">
        If the next step would create a consequential real world commitment, the
        user remains involved.
      </p>

      <h2 className="docs__subtitle" id="human-control">
        Human Control
      </h2>
      <p className="docs__text">
        Agentic negotiation does not mean giving an agent unlimited authority.
      </p>
      <p className="docs__text">
        The goal is to automate the difficult coordination layer while keeping
        meaningful real world decisions under appropriate human control.
      </p>
      <p className="docs__text">
        That boundary is important because modern agent systems increasingly
        separate agent execution from guardrails, authorization, and human in
        the loop controls.
      </p>
      <p className="docs__text">Craftly's principle is:</p>
      <p className="docs__text">
        <strong>
          Let agents coordinate. Keep humans responsible for consequential
          decisions.
        </strong>
      </p>
    </DocPage>
  );
}
