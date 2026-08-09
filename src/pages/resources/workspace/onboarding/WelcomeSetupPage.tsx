import DocsLayout from '../../DocsLayout';

export default function WelcomeSetupPage() {
  return (
    <DocsLayout 
      title="Welcome & Setup — Craftly Workspace"
      description="Welcome & Setup in Craftly Workspace"
      tocItems={[
        { id: 'welcome-and-setup', label: 'Welcome & Setup' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt; <strong>Welcome & Setup</strong>
      </div>

      <h1 className="docs__title" id="welcome-and-setup">Welcome & Setup</h1>
      
      {/* Empty space for future text */}
      <div className="docs__text-placeholder" style={{ minHeight: '24px' }}></div>

      <div style={{ margin: '32px 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/assets/onboarding_pic/1.png" alt="Welcome and Setup" style={{ width: '100%', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<p style=\"color:#5f6368;font-family:inherit;\">Image placeholder: /assets/onboarding_pic/1.png</p>'; }} />
      </div>

      {/* Empty space for future text */}
      <div className="docs__text-placeholder" style={{ minHeight: '24px' }}></div>
      
    </DocsLayout>
  );
}
