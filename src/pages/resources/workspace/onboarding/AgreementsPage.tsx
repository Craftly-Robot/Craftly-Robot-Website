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
      
      <div id="agreements-text-above"></div>
      
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '32px 0' }}>
        <img 
          src="/assets/aggrements/1.png" 
          alt="Agreements" 
          style={{ width: '100%', display: 'block' }} 
        />
      </div>

      <div id="agreements-text-below"></div>
    </DocsLayout>
  );
}
