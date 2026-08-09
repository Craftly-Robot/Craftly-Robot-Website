import DocsLayout from '../../DocsLayout';

export default function NoticesPage() {
  return (
    <DocsLayout 
      title="Notices â€” Craftly Workspace"
      description="Notices in Craftly Workspace"
      tocItems={[
        { id: 'notices', label: 'Notices' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Tasks & Operations &gt; <strong>Notices</strong>
      </div>

      <h1 className="docs__title" id="notices">Notices</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
