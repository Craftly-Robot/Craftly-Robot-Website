import DocsLayout from '../../DocsLayout';

export default function WelcomeSetupPage() {
  return (
    <DocsLayout 
      title="Welcome & Setup â€” Craftly Workspace"
      description="Welcome & Setup in Craftly Workspace"
      tocItems={[
        { id: 'welcome-and-setup', label: 'Welcome & Setup' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt; <strong>Welcome & Setup</strong>
      </div>

      <h1 className="docs__title" id="welcome-and-setup">Welcome & Setup</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
