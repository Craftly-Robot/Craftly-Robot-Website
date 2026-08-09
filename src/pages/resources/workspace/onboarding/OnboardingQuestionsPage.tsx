import DocsLayout from '../../DocsLayout';

export default function OnboardingQuestionsPage() {
  const questionsData = [
    { 
      id: 2, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>1. Full Legal Name</h2>
          <p className="docs__text">The onboarding assistant will first ask for your full legal name.</p>
          <p className="docs__text">Enter your complete name exactly as it appears on your official documents. Reply with your name only no introduction or additional information is needed.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>Mahmud Hasan</p>
          </div>
          <p className="docs__text" style={{ marginBottom: '16px' }}><strong>Expected answer:</strong> Full legal name only.</p>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 3, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>2. Gender</h2>
          <p className="docs__text">The onboarding assistant will ask you to select your gender.</p>
          <p className="docs__text">Choose the option that best describes you from the available choices, then confirm your selection when the assistant asks you to verify it.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>Male</p>
          </div>
          <p className="docs__text" style={{ marginBottom: '16px' }}><strong>Expected answer:</strong> Select one of the available gender options, then confirm when prompted.</p>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 4, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>3. Date of Birth</h2>
          <p className="docs__text">You will then be asked to provide your date of birth. Enter it using the required YYYY-MM-DD format.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>2004-10-14</p>
          </div>
          <p className="docs__text" style={{ marginBottom: '16px' }}>The assistant will ask you to confirm the date before moving to the next onboarding question.</p>
        </>
      ), 
      textBelow: "" 
    },
    { id: 5, textAbove: "", textBelow: "" },
    { id: 6, textAbove: "", textBelow: "" },
    { id: 7, textAbove: "", textBelow: "" },
    { id: 8, textAbove: "", textBelow: "" },
    { id: 9, textAbove: "", textBelow: "" },
    { id: 10, textAbove: "", textBelow: "" },
    { id: 11, textAbove: "", textBelow: "" },
    { id: 12, textAbove: "", textBelow: "" },
    { id: 13, textAbove: "", textBelow: "" },
    { id: 14, textAbove: "", textBelow: "" },
    { id: 15, textAbove: "", textBelow: "" },
    { id: 16, textAbove: "", textBelow: "" },
    { id: 17, textAbove: "", textBelow: "" },
    { id: 18, textAbove: "", textBelow: "" },
    { id: 19, textAbove: "", textBelow: "" },
    { id: 20, textAbove: "", textBelow: "" },
    { id: 21, textAbove: "", textBelow: "" },
    { id: 22, textAbove: "", textBelow: "" },
    { id: 23, textAbove: "", textBelow: "" }
  ];

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
        {questionsData.map((q) => (
          <div key={q.id} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Text above the image */}
            {q.textAbove ? (
              <div>{q.textAbove}</div>
            ) : (
              <div className="docs__text-placeholder" style={{ minHeight: '24px' }}></div>
            )}
            
            <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #eaeaeb', backgroundColor: '#f8f9fa', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={`/assets/onboarding_pic/${q.id}.png`} 
                alt={`Onboarding Question ${q.id}`} 
                style={{ width: '100%', display: 'block' }} 
                onError={(e) => { 
                  e.currentTarget.style.display = 'none'; 
                  e.currentTarget.parentElement!.innerHTML = `<p style="color:#5f6368;font-family:inherit;">Image placeholder: /assets/onboarding_pic/${q.id}.png</p>`; 
                }} 
              />
            </div>
            
            {/* Text below the image */}
            {q.textBelow ? (
              <div>{q.textBelow}</div>
            ) : (
              <div className="docs__text-placeholder" style={{ minHeight: '24px' }}></div>
            )}
          </div>
        ))}
      </div>
    </DocsLayout>
  );
}
