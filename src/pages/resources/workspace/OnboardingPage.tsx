import DocsLayout from '../DocsLayout';

export default function OnboardingPage() {
  return (
    <DocsLayout 
      title="Onboarding — Craftly Workspace"
      description="Onboarding in Craftly Workspace"
      tocItems={[
        { id: 'welcome-setup', label: 'Welcome & Setup' },
        { id: 'onboarding-questions', label: 'Onboarding Questions' },
        { id: 'agreements', label: 'Agreements' },
        { id: 'digital-signatures', label: 'Digital Signatures' },
        { id: 'private-key', label: 'Private Key' },
        { id: 'completing-onboarding', label: 'Completing Onboarding' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Onboarding</strong>
      </div>

      <h1 className="docs__title" id="onboarding">Onboarding</h1>
      
      <h2 id="welcome-setup" className="docs__section-title">Welcome & Setup</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="onboarding-questions" className="docs__section-title">Onboarding Questions</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="agreements" className="docs__section-title">Agreements</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="digital-signatures" className="docs__section-title">Digital Signatures</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="private-key" className="docs__section-title">Private Key</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="completing-onboarding" className="docs__section-title">Completing Onboarding</h2>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
