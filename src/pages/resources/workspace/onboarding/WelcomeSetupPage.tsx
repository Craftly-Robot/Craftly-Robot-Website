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
      <h2 className="docs__subtitle" style={{ marginTop: '24px', marginBottom: '16px', fontSize: '1.5rem', fontWeight: 600 }}>Start Your Craftly Journey</h2>
      
      <p className="docs__text">Joining Craftly starts with a short conversation.</p>
      <p className="docs__text">Our onboarding assistant will guide you through a few questions to understand who you are, what you’re interested in, and how you’d like to contribute to Craftly.</p>
      <p className="docs__text">You don't need to know everything before you start. Just answer honestly, and we'll guide you through the rest.</p>
      <p className="docs__text" style={{ fontWeight: 600, marginTop: '24px' }}>Ready to begin?</p>
      <p className="docs__text">Go to <a href="https://join.craftlyrobot.com" target="_blank" rel="noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>join.craftlyrobot.com</a> and write :</p>
      
      <div style={{ padding: '16px 24px', backgroundColor: '#f8f9fa', border: '1px solid #eaeaeb', borderRadius: '8px', margin: '16px 0', display: 'inline-block', fontWeight: 500 }}>
        I want to join
      </div>
      
      <p className="docs__text">From there, the Craftly Onboarding Assistant will guide you through the process step by step.</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', margin: '24px 0', fontSize: '14px', color: '#5f6368', fontWeight: 500 }}>
        <span>Questions</span>
        <span>&rarr;</span>
        <span>Agreements</span>
        <span>&rarr;</span>
        <span>Digital Signature</span>
        <span>&rarr;</span>
        <span>Private Key</span>
        <span>&rarr;</span>
        <span>Workspace Access</span>
      </div>

      <div style={{ margin: '32px 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/assets/onboarding_pic/1.png" alt="Welcome and Setup" style={{ width: '100%', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<p style=\"color:#5f6368;font-family:inherit;\">Image placeholder: /assets/onboarding_pic/1.png</p>'; }} />
      </div>

      {/* Empty space for future text */}
      <div className="docs__text-placeholder" style={{ minHeight: '24px' }}></div>
      
    </DocsLayout>
  );
}
