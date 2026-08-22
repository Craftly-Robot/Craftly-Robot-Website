import DocsLayout from "../../DocsLayout";

export default function RobotArchitecturePage() {
  return (
    <DocsLayout
      title="Architecture — Craftly Robot"
      description="Architecture in Craftly Robot"
      tocItems={[{ id: "architecture", label: "Architecture" }]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Overview &gt;{" "}
        <strong>Architecture</strong>
      </div>

      <h1 className="docs__title" id="architecture">
        Architecture
      </h1>
      <p className="docs__text">
        Craftly Robot currently uses a Mixture-of-Experts (MoE) architecture
        designed to allow the system to dynamically route different tasks to
        specialized experts.
      </p>
      <p className="docs__text">
        At the current stage, Robot has 62 specialized experts. Instead of
        sending every task through all experts, the MoE system can identify
        which experts are most relevant to the current input and route the task
        accordingly.
      </p>
      <p className="docs__text">
        This allows different experts to specialize in different types of
        reasoning and workloads while keeping the overall system efficient.
      </p>

      <h2 className="docs__subtitle">Current Architecture</h2>
      <ul className="docs__list">
        <li>Mixture-of-Experts (MoE)</li>
        <li>&rarr; 62 Specialized Experts</li>
        <li>&rarr; Dynamic Expert Routing</li>
        <li>&rarr; Agent Runtime</li>
        <li>&rarr; Tools &amp; Services</li>
        <li>&rarr; Verification &amp; Human Consent</li>
        <li>&rarr; Action</li>
      </ul>

      <p className="docs__text">
        The 62 experts are part of the current implementation and may evolve as
        Craftly Robot's research and training progress.
      </p>
      <p className="docs__text">
        The long-term goal is to expand this architecture with increasingly
        specialized experts and stronger routing, coordination, and agentic
        capabilities.
      </p>
    </DocsLayout>
  );
}
