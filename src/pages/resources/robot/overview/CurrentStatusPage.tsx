import DocsLayout from "../../DocsLayout";

export default function CurrentStatusPage() {
  return (
    <DocsLayout
      title="Current Status — Craftly Robot"
      description="Current Status in Craftly Robot"
      tocItems={[{ id: "current-status", label: "Current Status" }]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Overview &gt;{" "}
        <strong>Current Status</strong>
      </div>

      <h1 className="docs__title" id="current-status">
        Current Status
      </h1>
      <p className="docs__text">
        Craftly Robot is currently an active research and development project.
      </p>
      <p className="docs__text">
        The system is being developed incrementally, with research focused on
        agentic AI, real world task execution, multi-agent coordination,
        identity, discovery, memory, and tool interaction.
      </p>
      <p className="docs__text">
        Not every planned capability is currently available in production. Some
        components are experimental and may change significantly as development
        progresses.
      </p>
    </DocsLayout>
  );
}
