import { UseCaseHero } from './components/UseCaseHero';
import { FeatureSection } from './components/FeatureSection';
import CTASection from '../../components/sections/CTASection';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './components/UseCaseComponents.css';

export default function AIPage() {
  const revealRef = useScrollReveal();

  const useCases = [
    {
      title: 'Personal Assistance',
      desc: 'Act as an intelligent agent for everyday requests. Turn simple questions into actionable plans, from finding local services to organizing your daily schedule.',
      example: 'Find a gym -> Compare options -> Book trial'
    },
    {
      title: 'Research',
      desc: 'Synthesize complex information across multiple domains. Instead of providing search links, Robot reads, extracts, and summarizes the exact data you need.',
      example: 'Query topics -> Extract data -> Compile report'
    },
    {
      title: 'Coding',
      desc: 'Assist in software development by understanding existing codebases, writing boilerplate, and debugging complex architectural issues.',
      example: 'Analyze codebase -> Identify bug -> Propose fix'
    },
    {
      title: 'Workflow Automation',
      desc: 'Connect disparate systems and APIs. Robot can trigger actions across platforms without relying on rigid integration templates.',
      example: 'Receive invoice -> Extract data -> Update CRM'
    },
    {
      title: 'Multi-agent Problem Solving',
      desc: 'Deploy multiple specialized agents to tackle different facets of a single large problem concurrently, before synthesizing a unified solution.',
      example: 'Divide task -> Parallel processing -> Unified synthesis'
    },
    {
      title: 'Education',
      desc: 'Serve as an adaptive tutor that adjusts its explanations and pacing based on the student\'s real-time understanding and progress.',
      example: 'Assess skill -> Adapt curriculum -> Teach concept'
    },
    {
      title: 'Local Services',
      desc: 'Coordinate with local vendors and independent professionals to fulfill immediate, real-world requirements for home or business.',
      example: 'Identify need -> Contact local pros -> Schedule visit'
    },
    {
      title: 'Commerce',
      desc: 'Navigate marketplaces to find specific items matching rigid constraints, negotiate terms, and verify seller authenticity.',
      example: 'Set constraints -> Scan market -> Verify seller'
    },
    {
      title: 'Humanitarian Coordination',
      desc: 'Quickly mobilize resources, align volunteers, and broadcast urgent needs during crises across decentralized networks.',
      example: 'Broadcast need -> Match resources -> Dispatch'
    },
    {
      title: 'Business Operations',
      desc: 'Streamline internal processes by automatically handling data entry, scheduling, and standard reporting tasks.',
      example: 'Ingest data -> Format report -> Distribute'
    }
  ];

  return (
    <div className="ucc-page-wrapper">
      <UseCaseHero 
        title="Put AI to work on real problems."
        description="Craftly builds intelligent systems that can understand complex requests, reason through them, use available capabilities, and help people accomplish meaningful work."
        primaryCta={
          <a href="#explore" className="ucc-btn-primary">Explore Craftly Robot</a>
        }
      />

      <FeatureSection 
        title="AI that understands context"
        description={
          <>
            <p>Craftly Robot is designed to understand more than isolated prompts.</p>
            <p>It works with goals, constraints, environmental context, previous information, and task requirements. This makes it possible to work with AI on problems that require more than a single conversational turn.</p>
          </>
        }
        layout="full-width"
      />

      <div className="container" style={{ paddingBlock: 'var(--space-4xl)' }}>
        <h2 className="ucc-feature__title reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>Exploratory Capabilities</h2>
        
        <div className="ucc-grid-3 reveal" ref={revealRef}>
          {useCases.map((uc, idx) => (
            <div key={idx} className="ucc-grid-card">
              <h3 className="ucc-grid-card__title">{uc.title}</h3>
              <p className="ucc-grid-card__desc">{uc.desc}</p>
              <div style={{ marginTop: 'var(--space-md)', fontSize: '14px', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                {uc.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
