import DocsLayout from '../DocsLayout';

export default function OnboardingPage() {
  return (
    <DocsLayout 
      title="Onboarding â€” Craftly Workspace"
      description="Onboarding in Craftly Workspace"
      tocItems={[
        { id: 'onboarding', label: 'Onboarding' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Onboarding</strong>
      </div>

      <h1 className="docs__title" id="onboarding">Onboarding</h1>
      
      <p className="docs__text">Explore the various topics in this section from the sidebar to the left.</p>
    </DocsLayout>
  );
}
