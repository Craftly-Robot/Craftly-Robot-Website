import DocsLayout from '../../DocsLayout';

export default function AgreementsPage() {
  return (
    <DocsLayout 
      title="Agreements â€” Craftly Workspace"
      description="Agreements in Craftly Workspace"
      tocItems={[
        { id: 'agreements', label: 'Agreements' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt; <strong>Agreements</strong>
      </div>

      <h1 className="docs__title" id="agreements">Agreements</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
