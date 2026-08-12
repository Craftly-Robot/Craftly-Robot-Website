import DocsLayout from '../../DocsLayout';

export default function NotificationsPage() {
  return (
    <DocsLayout 
      title="Notifications â€” Craftly Workspace"
      description="Notifications in Craftly Workspace"
      tocItems={[
        { id: 'notifications', label: 'Notifications' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Communication &gt; <strong>Notifications</strong>
      </div>

      <h1 className="docs__title" id="notifications">Notifications</h1>
      <p className="docs__text">The Notifications system keeps members informed about important activity inside Craftly Workspace.</p>

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

      <p className="docs__text">Members are expected to regularly check their notifications so that important instructions, deadlines, and organizational updates are not missed.</p>

      <p className="docs__text">Notifications are an important part of staying active, informed, and responsive within Craftly.</p>
    </DocsLayout>
  );
}
