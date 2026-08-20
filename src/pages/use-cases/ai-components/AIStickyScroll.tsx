import { useEffect, useRef, useState } from 'react';
import { RobotConversation } from './RobotConversation';
import { ResearchWorkspace } from './ResearchWorkspace';
import { EngineeringWorkspace } from './EngineeringWorkspace';
import { WorkflowAutomation } from './WorkflowAutomation';
import { MultiAgentProblemSolving } from './MultiAgentProblemSolving';
import './AIVisualComponents.css';
import { StatusBadge } from '../components/StatusBadge';

export function AIStickyScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.findIndex((el) => el === (entry.target as unknown as HTMLDivElement));
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    });

    // Store the current refs to cleanup properly
    const currentRefs = itemRefs.current;
    currentRefs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  const sections = [
    {
      title: 'An AI that understands what you\'re trying to accomplish.',
      eyebrow: 'Personal AI Assistance',
      desc: 'Craftly Robot can help users research, organize information, compare options, plan tasks, and work through complex requests using natural language.',
      examples: [
        '"Summarize this research paper and explain the key ideas."',
        '"Compare these three laptops for programming and AI development."',
        '"Help me organize everything I need for my upcoming exam."'
      ],
      visual: <RobotConversation />
    },
    {
      title: 'Turn information into something useful.',
      eyebrow: 'Research & Information',
      desc: 'AI can reduce the manual work involved in collecting, organizing, comparing, and understanding information.',
      workflow: 'Question → Research → Collect → Organize → Compare → Insight',
      examples: [
        '"Research the best programming languages for AI development and compare their strengths, ecosystem, and learning curve."'
      ],
      visual: <ResearchWorkspace />
    },
    {
      title: 'From understanding code to building with it.',
      eyebrow: 'Software Engineering',
      badge: <StatusBadge status="research" />,
      desc: 'Craftly Robot is being developed toward deeper coding and software-engineering capabilities, including understanding codebases, reasoning about architecture, implementing changes, testing work, and verifying results.',
      workflow: 'Understand Codebase → Analyze Architecture → Plan → Implement → Test → Verify',
      visual: <EngineeringWorkspace />
    },
    {
      title: 'Let AI handle repetitive coordination.',
      eyebrow: 'Workflow Automation',
      desc: 'Many workflows are difficult because they require multiple small steps rather than complex reasoning. AI can help connect those steps into a single workflow.',
      workflow: 'Request → Information → Tool → Action → Result',
      examples: [
        '"Collect the latest project updates, organize them by team, identify blocked work, and prepare a summary."'
      ],
      visual: <WorkflowAutomation />
    },
    {
      title: 'Different agents. Different strengths.',
      eyebrow: 'Multi-agent Problem Solving',
      desc: 'Complex problems can be divided among specialized agents, allowing each agent to focus on a particular responsibility while a coordinating system keeps the overall objective together.',
      workflow: 'Research Agent ↓ Planning Agent ↓ Execution Agent ↓ Verification Agent',
      visual: <MultiAgentProblemSolving />
    }
  ];

  return (
    <div className="ai-sticky-container" ref={containerRef}>
      <div className="container ai-sticky-layout">
        
        {/* Left column: Scrolling Text */}
        <div className="ai-sticky-text-col">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`ai-sticky-section ${activeIndex === idx ? 'is-active' : ''}`}
              ref={(el) => { itemRefs.current[idx] = el; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                <span className="ucc-hero__eyebrow" style={{ margin: 0 }}>{section.eyebrow}</span>
                {section.badge}
              </div>
              <h3 className="ucc-feature__title" style={{ fontSize: '32px', marginBottom: 'var(--space-md)' }}>{section.title}</h3>
              <p className="ucc-feature__desc">{section.desc}</p>
              
              {section.workflow && (
                <div style={{ marginTop: 'var(--space-lg)', padding: 'var(--space-md)', borderLeft: '2px solid var(--color-border)', fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>
                  {section.workflow.split('→').map((s, i, arr) => (
                    <span key={i}>
                      {s.trim()}
                      {i < arr.length - 1 && <span style={{ margin: '0 8px' }}>→</span>}
                    </span>
                  ))}
                  {section.workflow.includes('↓') && section.workflow.split('↓').map((s, i, arr) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                      <span>{s.trim()}</span>
                      {i < arr.length - 1 && <span style={{ margin: '4px 0' }}>↓</span>}
                    </div>
                  ))}
                </div>
              )}

              {/* Mobile-only visual (hidden on desktop) */}
              <div className="ai-sticky-mobile-visual">
                {section.visual}
              </div>

              {section.examples && (
                <div style={{ marginTop: 'var(--space-xl)' }}>
                  {section.examples.map((ex, i) => (
                    <p key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: 'var(--space-sm)' }}>&gt; {ex}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right column: Sticky Visual */}
        <div className="ai-sticky-visual-col">
          <div className="ai-sticky-visual-wrapper">
            {sections.map((section, idx) => (
              <div 
                key={idx} 
                className={`ai-sticky-visual-item ${activeIndex === idx ? 'is-active' : ''}`}
              >
                {section.visual}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
