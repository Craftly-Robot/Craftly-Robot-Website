import DocPage from "../../DocPage";

export default function CurrentStatusPage() {
  return (
    <DocPage
      title="Current Status — Craftly Robot"
      description="Current Status in Craftly Robot"
      crumbs={["Documentation", "Craftly Robot", "Overview", "Current Status"]}
      pageId="current-status"
      pageTitle="Current Status"
      tocItems={[{ id: "current-status", label: "Current Status" }]}
    >
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
    </DocPage>
  );
}
