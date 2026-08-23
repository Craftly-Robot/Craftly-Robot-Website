import DocPage from "../../DocPage";

export default function ReportingCommunicationPage() {
  return (
    <DocPage
      title="Reporting-Based Communication — Craftly Workspace"
      description="Reporting-Based Communication in Craftly Workspace"
      crumbs={["Documentation", "Craftly Workspace", "Communication", "Reporting-Based Communication"]}
      pageId="reporting-based-communication"
      pageTitle="Reporting-Based Communication"
      tocItems={[
        {
          id: "reporting-based-communication",
          label: "Reporting-Based Communication",
        },
      ]}
    >
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
    </DocPage>
  );
}
