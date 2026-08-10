import DocsLayout from '../../DocsLayout';

export default function DigitalSignaturesPage() {
  return (
    <DocsLayout 
      title="Digital Signatures â€” Craftly Workspace"
      description="Digital Signatures in Craftly Workspace"
      tocItems={[
        { id: 'digital-signatures', label: 'Digital Signatures' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt; <strong>Digital Signatures</strong>
      </div>

      <h1 className="docs__title" id="digital-signatures">Digital Signatures</h1>
      
      <div id="digital-signatures-text-above"></div>
      
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '32px 0' }}>
        <img 
          src="/assets/aggrements/2.png" 
          alt="Digital Signatures" 
          style={{ width: '100%', display: 'block' }} 
        />
      </div>

      <div id="digital-signatures-text-below"></div>
    </DocsLayout>
  );
}
