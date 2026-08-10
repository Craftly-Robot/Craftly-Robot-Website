import DocsLayout from '../../DocsLayout';

export default function OnboardingQuestionsPage() {
  const questionsData = [
    { 
      id: 2, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-1" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>1. Full Legal Name</h2>
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
          <h2 className="docs__subtitle" id="q-2" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>2. Gender</h2>
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
          <h2 className="docs__subtitle" id="q-3" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>3. Date of Birth</h2>
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
    { 
      id: 5, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-4" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>4. Institution Level</h2>
          <p className="docs__text">The onboarding assistant will ask about your current education level. Choose the option that best describes where you currently study.</p>
          <p className="docs__text">Available options: School, College, or University</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>University</p>
          </div>
          <p className="docs__text" style={{ marginBottom: '16px' }}>The assistant will then confirm your answer before continuing to the next question.</p>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 6, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-5" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>5. Institution Name</h2>
          <p className="docs__text">The onboarding assistant will ask for the name of your current school, college, or university. Enter the institution’s full name as you normally use it.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>Harvard University</p>
          </div>
          <p className="docs__text" style={{ marginBottom: '16px' }}>The assistant will then repeat the institution name and ask you to confirm that the information is correct before continuing.</p>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 7, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-6" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>6. WhatsApp Number</h2>
          <p className="docs__text">The onboarding assistant will ask for your WhatsApp number so Craftly can use it for relevant communication during and after onboarding. Enter a valid 11-digit Bangladeshi WhatsApp number.</p>
          <p className="docs__text">Format: 01XXXXXXXXX</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>01864215789</p>
          </div>
          <p className="docs__text" style={{ marginBottom: '16px' }}>The assistant will repeat the number and ask you to confirm that it is correct before continuing.</p>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 8, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-7" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>7. Social Media Profile</h2>
          <p className="docs__text"><strong>Question:</strong> Please provide one public social media profile link.</p>
          <p className="docs__text"><strong>Answer:</strong> You can provide a Facebook, Instagram, LinkedIn, or TikTok profile link. If you don't use social media, write: I do not have social media.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>https://www.facebook.com/yourprofile</p>
          </div>
          <p className="docs__text" style={{ marginBottom: '16px' }}>The assistant will repeat the Social Media Profile and ask you to confirm that it is correct before continuing.</p>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 9, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-8" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>8. Email Address</h2>
          <p className="docs__text">Provide the email address you currently use and can be reached at.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>allinsubscriptions@gmail.com</p>
          </div>
          <p className="docs__text" style={{ marginBottom: '16px' }}>The assistant will repeat email and ask you to confirm that it is correct before continuing.</p>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 10, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-9" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>9. Department</h2>
          <p className="docs__text" style={{ marginBottom: '16px' }}>Choose the department you want to work in Operations, Human Resources, Marketing, or Finance.</p>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 11, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-10" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>10. Problem-Solving & Execution</h2>
          <p className="docs__text" style={{ marginBottom: '16px' }}>Explain how you would accomplish 30 days’ worth of work in just 6 hours, focusing on your approach, priorities, automation, and use of available tools.</p>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 12, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-11" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>9. Work Approach</h2>
          <p className="docs__text"><strong>Question:</strong> How would you accomplish 30 days' worth of work in six hours?</p>
          <p className="docs__text"><strong>Answer:</strong> Explain how you would prioritize important work, use automation and AI, work on multiple tasks efficiently, and focus on high-value decisions.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>I would prioritize the most important work, automate repetitive tasks, use AI agents and parallel workflows, and focus my time on decisions and quality control.</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 13, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-12" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>10. AI Development Prompt</h2>
          <p className="docs__text"><strong>Question:</strong> Write the prompt you would give an AI system to deliver an exceptional outcome while developing a module.</p>
          <p className="docs__text"><strong>Answer:</strong> Provide a clear prompt that defines the AI's role, the project context, the exact task, requirements, constraints, and expected output.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>Act as a senior software engineer. Analyze the requirements first, then design and implement a production-ready module that is reliable, secure, tested, and maintainable.</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 14, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-13" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>11. Daily Availability</h2>
          <p className="docs__text"><strong>Question:</strong> How many hours can you give daily?</p>
          <p className="docs__text"><strong>Answer:</strong> Reply with one of the available options: 1 hour, 2 hours, 4 hours, or 8 hours.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>4 hours</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 15, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-14" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>12. Working Style</h2>
          <p className="docs__text"><strong>Question:</strong> How do you feel most comfortable working?</p>
          <p className="docs__text"><strong>Answer:</strong> Reply with one of the available options: With a mentor, or Independently.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>Independently</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 16, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-15" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>13. Department Choice</h2>
          <p className="docs__text"><strong>Question:</strong> Why did you choose this department? Write 2–3 lines.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example Answer:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>I chose Operations because I enjoy organizing tasks, improving workflows, and solving problems efficiently. I want to help the team execute work faster and more effectively.</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 17, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-16" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>14. Hardest Achievement</h2>
          <p className="docs__text"><strong>Question:</strong> What is the hardest thing you have completed so far?</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example Answer:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>Building and managing complex AI projects from scratch while solving technical problems independently and delivering working systems under tight deadlines.</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 18, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-17" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>15. Technical Achievement</h2>
          <p className="docs__text"><strong>Question:</strong> What is the hardest technical milestone you have achieved?</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example Answer:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>Mastering real-time context switching and multimodal AI integration while maintaining accurate reasoning, fast execution, and seamless conversations.</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 19, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-18" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>16. Goals at Craftly</h2>
          <p className="docs__text"><strong>Question:</strong> What do you want to learn or achieve by joining Craftly?</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example Answer:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>I want to gain real-world experience, improve my technical and problem-solving skills, and contribute to building impactful AI products with the team.</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 20, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-19" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>17. Harmful Social Media Content</h2>
          <p className="docs__text"><strong>Question:</strong> If you ever see someone writing harmful things about Craftly on social media, what will you do?</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example Answer:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>I will handle the situation strategically and professionally. I will avoid engaging in unnecessary arguments, verify the information, and report or escalate the issue to the appropriate team so that the correct response can be taken.</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 21, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-20" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>18. Unfair Instructions</h2>
          <p className="docs__text"><strong>Question:</strong> If a leader or someone above you instructs you to do something unfair according to Craftly’s Constitution, what will you do?</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example Answer:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>I would respectfully explain my concerns and follow Craftly’s Constitution and principles. I would not carry out an unfair instruction, and if necessary, I would raise the issue through the appropriate channel while remaining professional and objective.</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 22, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-21" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>19. Confirmation of Information</h2>
          <p className="docs__text"><strong>Question:</strong> Last step: do you confirm all information you gave is true and written by you? Reply yes to continue.</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #eaeaeb', margin: '16px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#5f6368', fontSize: '14px', marginBottom: '8px' }}>Example Answer:</p>
            <p style={{ margin: 0, fontSize: '15px' }}>Yes.</p>
          </div>
        </>
      ), 
      textBelow: "" 
    },
    { 
      id: 23, 
      textAbove: (
        <>
          <h2 className="docs__subtitle" id="q-22" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>20. Onboarding Questions Completed</h2>
          <p className="docs__text">Now complete your onboarding question. Then download our Key and Workspace, and use the Key to log in to the Workspace.</p>
        </>
      ), 
      textBelow: "" 
    }
  ];

  return (
    <DocsLayout 
      title="Onboarding Questions — Craftly Workspace"
      description="Onboarding Questions in Craftly Workspace"
      tocItems={[
        { id: 'onboarding-questions', label: 'Onboarding Questions' },
        { id: 'q-1', label: '1. Full Legal Name' },
        { id: 'q-2', label: '2. Gender' },
        { id: 'q-3', label: '3. Date of Birth' },
        { id: 'q-4', label: '4. Institution Level' },
        { id: 'q-5', label: '5. Institution Name' },
        { id: 'q-6', label: '6. WhatsApp Number' },
        { id: 'q-7', label: '7. Social Media Profile' },
        { id: 'q-8', label: '8. Email Address' },
        { id: 'q-9', label: '9. Department' },
        { id: 'q-10', label: '10. Problem-Solving & Execution' },
        { id: 'q-11', label: '9. Work Approach' },
        { id: 'q-12', label: '10. AI Development Prompt' },
        { id: 'q-13', label: '11. Daily Availability' },
        { id: 'q-14', label: '12. Working Style' },
        { id: 'q-15', label: '13. Department Choice' },
        { id: 'q-16', label: '14. Hardest Achievement' },
        { id: 'q-17', label: '15. Technical Achievement' },
        { id: 'q-18', label: '16. Goals at Craftly' },
        { id: 'q-19', label: '17. Harmful Social Media Content' },
        { id: 'q-20', label: '18. Unfair Instructions' },
        { id: 'q-21', label: '19. Confirmation of Information' },
        { id: 'q-22', label: '20. Onboarding Questions Completed' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt; <strong>Onboarding Questions</strong>
      </div>

      <h1 className="docs__title" id="onboarding-questions">Onboarding Questions</h1>
      
      <h2 className="docs__subtitle" style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '24px', marginBottom: '16px' }}>How the Onboarding Questions Work</h2>
      <p className="docs__text">Once you choose “I want to join”, the Craftly onboarding assistant will guide you through a series of questions one step at a time. Answer each question clearly and follow the format requested by the assistant. After some answers, the assistant may ask you to confirm the information before continuing.</p>
      
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
