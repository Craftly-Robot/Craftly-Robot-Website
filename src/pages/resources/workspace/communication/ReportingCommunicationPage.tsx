import DocsLayout from "../../DocsLayout";

export default function ReportingCommunicationPage() {
  return (
    <DocsLayout
      title="Reporting-Based Communication — Craftly Workspace"
      description="Reporting-Based Communication in Craftly Workspace"
      tocItems={[
        {
          id: "reporting-based-communication",
          label: "Reporting-Based Communication",
        },
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Communication &gt;{" "}
        <strong>Reporting-Based Communication</strong>
      </div>

      <h1 className="docs__title" id="reporting-based-communication">
        Reporting-Based Communication
      </h1>
      <p className="docs__text">
        Craftly uses reporting-based communication so members primarily
        communicate with the people connected to their assigned reporting
        structure.
      </p>

      <p className="docs__text">
        This means your communication is organized around who you report to and
        who reports to you. You can discuss tasks, ask for guidance, report
        problems, submit updates, and escalate important matters through your
        reporting line.
      </p>

      <p className="docs__text">
        If an issue cannot be resolved at your level, it should be moved upward
        through the appropriate manager or Unit Leader rather than bypassing the
        structure.
      </p>

      <p className="docs__text">
        This keeps communication organized, reduces unnecessary interruptions,
        and ensures that important issues reach the people responsible for
        resolving them.
      </p>
    </DocsLayout>
  );
}
