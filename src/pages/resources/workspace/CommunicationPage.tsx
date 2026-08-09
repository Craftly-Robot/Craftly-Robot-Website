import DocsLayout from '../DocsLayout';

export default function CommunicationPage() {
  return (
    <DocsLayout 
      title="Communication — Craftly Workspace"
      description="Communication in Craftly Workspace"
      tocItems={[
        { id: 'direct-communication', label: 'Direct Communication' },
        { id: 'team-communication', label: 'Team Communication' },
        { id: 'chain-of-command', label: 'Chain of Command' },
        { id: 'reporting-based-communication', label: 'Reporting-Based Communication' },
        { id: 'notifications', label: 'Notifications' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Communication</strong>
      </div>

      <h1 className="docs__title" id="communication">Communication</h1>
      
      <h2 id="direct-communication" className="docs__section-title">Direct Communication</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="team-communication" className="docs__section-title">Team Communication</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="chain-of-command" className="docs__section-title">Chain of Command</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="reporting-based-communication" className="docs__section-title">Reporting-Based Communication</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="notifications" className="docs__section-title">Notifications</h2>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
