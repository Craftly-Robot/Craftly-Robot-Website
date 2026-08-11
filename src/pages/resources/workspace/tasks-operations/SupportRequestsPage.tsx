import DocsLayout from '../../DocsLayout';
import supportImage from '../../../../assets/Support Requests/1.png';

export default function SupportRequestsPage() {
  return (
    <DocsLayout 
      title="Support Requests â€” Craftly Workspace"
      description="Support Requests in Craftly Workspace"
      tocItems={[
        { id: 'support-requests', label: 'Support Requests' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Tasks & Operations &gt; <strong>Support Requests</strong>
      </div>

      <h1 className="docs__title" id="support-requests">Support Requests</h1>
      
      <div className="docs__content-placeholder" style={{ marginBottom: '32px' }}>
        {/* Placeholder for top content */}
        <p className="docs__text">Content describing support requests will go here...</p>
      </div>

      <div className="docs__image-wrapper" style={{ margin: '40px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <img src={supportImage} alt="Support Requests Overview" style={{ width: '100%', display: 'block' }} />
      </div>

      <div className="docs__content-placeholder" style={{ marginTop: '32px' }}>
        {/* Placeholder for bottom content */}
        <p className="docs__text">More detailed content about support requests will go here...</p>
      </div>
    </DocsLayout>
  );
}
