import DocPage from "../../DocPage";

export default function AgentModelPage() {
  return (
    <DocPage
      title="Agent Model — Craftly Robot"
      description="Agent Model in Craftly Robot"
      crumbs={["Documentation", "Craftly Robot", "Overview", "Agent Model"]}
      pageId="agent-model"
      pageTitle="Agent Model"
      tocItems={[{ id: "agent-model", label: "Agent Model" }]}
    >
      <p className="docs__text">
        Craftly Robot uses an agent based architecture where different agents
        can specialize in different tasks.
      </p>
      <p className="docs__text">
        Instead of requiring one AI model to perform everything, agents can be
        assigned specific responsibilities such as:
      </p>
      <ul className="docs__list">
        <li>Research</li>
        <li>Planning</li>
        <li>Coding</li>
        <li>Data processing</li>
        <li>Verification</li>
        <li>Service discovery</li>
        <li>Communication</li>
        <li>Coordination</li>
        <li>Task execution</li>
      </ul>
      <p className="docs__text">
        Agents can operate independently when appropriate and coordinate with
        other agents when a task requires multiple capabilities.
      </p>
      <p className="docs__text">
        The long term goal is to create an ecosystem where humans, AI agents,
        and external services can discover each other and coordinate work
        through trusted identity and explicit permissions.
      </p>
    </DocPage>
  );
}
