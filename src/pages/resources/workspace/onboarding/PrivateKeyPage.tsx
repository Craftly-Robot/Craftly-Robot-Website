import DocsLayout from '../../DocsLayout';

export default function PrivateKeyPage() {
  return (
    <DocsLayout 
      title="Private Key â€” Craftly Workspace"
      description="Private Key in Craftly Workspace"
      tocItems={[
        { id: 'private-key', label: 'Private Key' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt; <strong>Private Key</strong>
      </div>

      <h1 className="docs__title" id="private-key">Private Key</h1>
      
      <div id="private-key-text-above"></div>
      
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '32px 0', padding: '16px' }}>
        <img 
          src="/assets/private_key/1.png" 
          alt="Private Key" 
          style={{ maxWidth: '200px', width: '100%', display: 'block' }} 
        />
      </div>

      <div id="private-key-text-below"></div>
    </DocsLayout>
  );
}
