import DocsLayout from '../../DocsLayout';

export default function CompletingOnboardingPage() {
  return (
    <DocsLayout 
      title="Completing Onboarding â€” Craftly Workspace"
      description="Completing Onboarding in Craftly Workspace"
      tocItems={[
        { id: 'completing-onboarding', label: 'Completing Onboarding' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt; <strong>Completing Onboarding</strong>
      </div>

      <h1 className="docs__title" id="completing-onboarding">Completing Onboarding</h1>
      
      <div id="completing-onboarding-text-1"></div>
      
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '32px 0' }}>
        <img 
          src="/assets/aggrements/3.png" 
          alt="Completing Onboarding 1" 
          style={{ width: '100%', display: 'block' }} 
        />
      </div>

      <div id="completing-onboarding-text-2"></div>
      
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '32px 0' }}>
        <img 
          src="/assets/aggrements/4.png" 
          alt="Completing Onboarding 2" 
          style={{ width: '100%', display: 'block' }} 
        />
      </div>

      <div id="completing-onboarding-text-3"></div>
    </DocsLayout>
  );
}
