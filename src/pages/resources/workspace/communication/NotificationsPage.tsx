import DocPage from "../../DocPage";

export default function NotificationsPage() {
  return (
    <DocPage
      title="Notifications — Craftly Workspace"
      description="Notifications in Craftly Workspace"
      crumbs={["Documentation", "Craftly Workspace", "Communication", "Notifications"]}
      pageId="notifications"
      pageTitle="Notifications"
      tocItems={[{ id: "notifications", label: "Notifications" }]}
    >
      <p className="docs__text">
        The Notifications system keeps members informed about important activity
        inside Craftly Workspace.
      </p>

      <p className="docs__text">Notifications may include:</p>
      <ul className="docs__list">
        <li>New task assignments</li>
        <li>Task updates or changes</li>
        <li>Important official notices</li>
        <li>Communication or reporting updates</li>
        <li>Support request updates</li>
        <li>Project related updates</li>
        <li>Other important Workspace activity</li>
      </ul>

      <p className="docs__text">
        Members are expected to regularly check their notifications so that
        important instructions, deadlines, and organizational updates are not
        missed.
      </p>

      <p className="docs__text">
        Notifications are an important part of staying active, informed, and
        responsive within Craftly.
      </p>
    </DocPage>
  );
}
