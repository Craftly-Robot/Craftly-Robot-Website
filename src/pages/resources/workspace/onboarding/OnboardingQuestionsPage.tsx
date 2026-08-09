import DocsLayout from '../../DocsLayout';

export default function OnboardingQuestionsPage() {
  const questions = Array.from({ length: 22 }, (_, i) => i + 2); // 2 to 23

  return (
    <DocsLayout 
      title="Onboarding Questions — Craftly Workspace"
      description="Onboarding Questions in Craftly Workspace"
      tocItems={[
        { id: 'onboarding-questions', label: 'Onboarding Questions' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt; <strong>Onboarding Questions</strong>
      </div>

      <h1 className="docs__title" id="onboarding-questions">Onboarding Questions</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', margin: '32px 0' }}>
        {questions.map((q) => (
          <div key={q} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Empty space for future text above the image */}
            <div className="docs__text-placeholder" style={{ minHeight: '24px' }}></div>
            
            <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={`/assets/onboarding_pic/${q}.png`} 
                alt={`Onboarding Question ${q}`} 
                style={{ width: '100%', display: 'block' }} 
                onError={(e) => { 
                  e.currentTarget.style.display = 'none'; 
                  e.currentTarget.parentElement!.innerHTML = `<p style="color:#5f6368;font-family:inherit;">Image placeholder: /assets/onboarding_pic/${q}.png</p>`; 
                }} 
              />
            </div>
            
            {/* Empty space for future text below the image */}
            <div className="docs__text-placeholder" style={{ minHeight: '24px' }}></div>
          </div>
        ))}
      </div>
    </DocsLayout>
  );
}
