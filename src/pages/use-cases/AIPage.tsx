import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { UseCaseHero } from './components/UseCaseHero';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { FeatureSection } from './components/FeatureSection';
import { StatusBadge } from './components/StatusBadge';
import './components/UseCaseComponents.css';

// We will build these custom components next
import { IntelligenceFlow } from './ai-components/IntelligenceFlow';
import { AIStickyScroll } from './ai-components/AIStickyScroll';
import { EducationVisual, LocalServicesVisual, CommerceVisual, HumanitarianVisual, BusinessOperationsVisual } from './ai-components/FeatureVisuals';
import { HumanControlledFlow } from './ai-components/HumanControlledFlow';
import { AITimeline } from './ai-components/AITimeline';

export default function AIPage() {
  const revealRef = useScrollReveal();

  return (
    <div className="ucc-page-wrapper" ref={revealRef}>
      <SEO 
        title="Put AI to work on real problems"
        description="Craftly builds intelligent systems that can understand complex requests, reason through problems, use available capabilities, and help people accomplish meaningful work."
      />

      {/* 2. PAGE HERO */}
      <UseCaseHero 
        title={
          <>
            USE CASES Put AI to <br />
            work on real problems.
          </>
        }
        description="Craftly builds intelligent systems that can understand complex requests, reason through problems, use available capabilities, and help people accomplish meaningful work."
        primaryCta={
          <Link to="/products/robot" className="ucc-btn-secondary">Explore Craftly Robot</Link>
        }
        secondaryCta={
          <Link to="/resources/documentation" className="ucc-btn-primary" style={{ background: 'transparent', color: 'var(--color-text)', border: 'none' }}>Read Documentation</Link>
        }
      />

      {/* 3. HERO VISUAL - INTELLIGENCE FLOW */}
      <div className="container" style={{ paddingBottom: 'var(--space-4xl)' }}>
        <IntelligenceFlow />
      </div>

      {/* STICKY SCROLL STORY (Sections 4-8) */}
      <AIStickyScroll />

      {/* 9. EDUCATION */}
      <FeatureSection 
        title="Connect learners with the right people and resources."
        description={
          <>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <StatusBadge status="research" />
            </div>
            <p>AI can support educational workflows such as tutoring discovery, study planning, learning-resource organization, mentorship, and educational coordination.</p>
            <div style={{ marginTop: 'var(--space-xl)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: 'var(--space-sm)' }}>&gt; "Find a reliable mathematics tutor for a Class 10 student."</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: 'var(--space-sm)' }}>&gt; "Build a two-week physics study plan around these topics."</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>&gt; "Find learning resources for calculus at beginner level."</p>
            </div>
          </>
        }
        visual={<EducationVisual />}
        layout="text-left"
      />

      {/* 10. LOCAL SERVICES */}
      <FeatureSection 
        title="From “I need help” to finding someone who can help."
        description={
          <>
            <p>Many everyday tasks require searching, comparing, contacting, and coordinating with service providers. AI can help reduce that manual effort.</p>
            <div style={{ marginTop: 'var(--space-xl)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: 'var(--space-sm)' }}>&gt; "Find a reliable electrician near me who is available today."</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: 'var(--space-sm)' }}>&gt; "Find a laptop repair service that can fix this issue within two days."</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>&gt; "Find a photographer available this Friday within my budget."</p>
            </div>
          </>
        }
        visual={<LocalServicesVisual />}
        layout="text-right"
      />

      {/* 11. COMMERCE */}
      <FeatureSection 
        title="Match requirements with the right products and sellers."
        description={
          <>
            <p>AI can understand detailed purchasing requirements and help users discover options that match price, specifications, condition, availability, and other constraints.</p>
            <div style={{ marginTop: 'var(--space-xl)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: 'var(--space-md)' }}>&gt; "Find a used RTX 4070 under ৳60,000 with the original box and purchase receipt."</p>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', fontSize: '12px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                <span>Requirements</span>
                <span>→</span>
                <span>Discovery</span>
                <span>→</span>
                <span>Compare</span>
                <span>→</span>
                <span>Matches</span>
              </div>
            </div>
          </>
        }
        visual={<CommerceVisual />}
        layout="text-left"
      />

      {/* 12. HUMANITARIAN COORDINATION */}
      <div className="container reveal" style={{ paddingBlock: 'var(--space-4xl)' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--space-2xl)' }}>
          <StatusBadge status="long-term" />
          <h2 className="ucc-feature__title" style={{ marginTop: 'var(--space-md)' }}>Help people coordinate when it matters most.</h2>
          <p className="ucc-feature__desc">Long-term agentic applications could include donor discovery, volunteer coordination, resource matching, community assistance, and emergency service discovery.</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginTop: 'var(--space-lg)' }}>&gt; "Find an available blood donor matching this request."</p>
        </div>
        
        <HumanitarianVisual />
        
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-xl)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            <strong>Important Note:</strong> These workflows involve sensitive information and potentially high-stakes decisions. They would require stronger identity verification, privacy protection, safety controls, authorization, and human oversight than ordinary AI tasks. We do not present these capabilities as fully available production features.
          </p>
        </div>
      </div>

      {/* 13. BUSINESS OPERATIONS */}
      <FeatureSection 
        title="AI that works alongside organizations."
        description={
          <>
            <p>Craftly's intelligence can support organizations with research, internal knowledge, workflow automation, project coordination, service discovery, decision support, and multi-agent operations.</p>
            <div style={{ marginTop: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', fontSize: '12px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                <span>Research</span><span>→</span><span>Analysis</span><span>→</span><span>Decision Support</span>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', fontSize: '12px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                <span>Task</span><span>→</span><span>Coordination</span><span>→</span><span>Execution</span>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', fontSize: '12px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                <span>Problem</span><span>→</span><span>Discovery</span><span>→</span><span>Resolution</span>
              </div>
            </div>
          </>
        }
        visual={<BusinessOperationsVisual />}
        layout="text-right"
      />

      {/* 14. HUMAN-CONTROLLED AI */}
      <div className="container reveal" style={{ paddingBlock: '160px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="ucc-feature__title" style={{ fontSize: '48px', lineHeight: 1.1, marginBottom: 'var(--space-xl)' }}>
            Automation without giving up control.
          </h2>
          <p className="ucc-feature__desc" style={{ fontSize: '24px', fontWeight: 500, color: 'var(--color-text)' }}>
            AI should handle more of the complexity. People should remain in control when the consequences matter.
          </p>
          <p className="ucc-feature__desc" style={{ marginTop: 'var(--space-lg)' }}>
            Craftly's approach is not unrestricted autonomy. Robot can help with reasoning, discovery, communication, comparison, and coordination, while consequential actions remain subject to appropriate human review and confirmation.
          </p>
          
          <div style={{ marginTop: 'var(--space-3xl)' }}>
            <HumanControlledFlow />
          </div>
        </div>
      </div>

      {/* 15. WHERE CRAFTLY ROBOT IS GOING */}
      <div className="container reveal" style={{ paddingBlock: 'var(--space-4xl)' }}>
        <h2 className="ucc-feature__title" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>From intelligence to action.</h2>
        <p className="ucc-feature__desc" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--space-3xl)' }}>
          Craftly Robot is currently under active research and development. The system is evolving progressively from a strong conversational foundation toward deeper agentic capabilities.
        </p>
        
        <AITimeline />
      </div>

      {/* 16. CURRENT STATUS */}
      <div className="container reveal" style={{ paddingBlock: 'var(--space-4xl)', paddingBottom: '120px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--space-2xl)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: 'var(--space-md)' }}>Built progressively. Not overclaimed.</h3>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
            Craftly Robot is actively evolving. Some capabilities are already being researched, tested, or prototyped, while other capabilities remain part of the longer-term roadmap.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            The goal is to strengthen each layer of the system before relying on it for increasingly complex real-world workflows.
          </p>
        </div>
      </div>


    </div>
  );
}
