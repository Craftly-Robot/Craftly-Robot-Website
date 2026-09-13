import { SEO } from "../../components/SEO";
import { Link } from "react-router-dom";
import { UseCaseHero } from "./components/UseCaseHero";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { FeatureSection } from "./components/FeatureSection";
import { StatusBadge } from "./components/StatusBadge";
import "./components/UseCaseComponents.css";
import "./AIPage.css";

// We will build these custom components next
import { IntelligenceFlow } from "./ai-components/IntelligenceFlow";
import { AIStickyScroll } from "./ai-components/AIStickyScroll";
import {
  EducationVisual,
  LocalServicesVisual,
  CommerceVisual,
  HumanitarianVisual,
  BusinessOperationsVisual,
} from "./ai-components/FeatureVisuals";
import { HumanControlledFlow } from "./ai-components/HumanControlledFlow";
import { AITimeline } from "./ai-components/AITimeline";

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
          <Link to="/products/robot" className="ucc-btn-secondary">
            Explore Craftly Robot
          </Link>
        }
        secondaryCta={
          <Link
            to="/resources/documentation"
            className="ucc-btn-primary ai-hero-link-transparent"
          >
            Read Documentation
          </Link>
        }
      />

      {/* 3. HERO VISUAL - INTELLIGENCE FLOW */}
      <div className="container ai-pb-4xl">
        <IntelligenceFlow />
      </div>

      {/* STICKY SCROLL STORY (Sections 4-8) */}
      <AIStickyScroll />

      {/* 9. EDUCATION */}
      <FeatureSection
        title="Connect learners with the right people and resources."
        description={
          <>
            <div className="ai-status-badge-mb">
              <StatusBadge status="research" />
            </div>
            <p>
              AI can support educational workflows such as tutoring discovery,
              study planning, learning-resource organization, mentorship, and
              educational coordination.
            </p>
            <div className="ai-example-group">
              <p className="ai-mono-text-mb-sm">
                &gt; "Find a reliable mathematics tutor for a Class 10 student."
              </p>
              <p className="ai-mono-text-mb-sm">
                &gt; "Build a two-week physics study plan around these topics."
              </p>
              <p className="ai-mono-text">
                &gt; "Find learning resources for calculus at beginner level."
              </p>
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
            <p>
              Many everyday tasks require searching, comparing, contacting, and
              coordinating with service providers. AI can help reduce that
              manual effort.
            </p>
            <div className="ai-example-group">
              <p className="ai-mono-text-mb-sm">
                &gt; "Find a reliable electrician near me who is available
                today."
              </p>
              <p className="ai-mono-text-mb-sm">
                &gt; "Find a laptop repair service that can fix this issue
                within two days."
              </p>
              <p className="ai-mono-text">
                &gt; "Find a photographer available this Friday within my
                budget."
              </p>
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
            <p>
              AI can understand detailed purchasing requirements and help users
              discover options that match price, specifications, condition,
              availability, and other constraints.
            </p>
            <div className="ai-example-group">
              <p className="ai-mono-text-mb-md">
                &gt; "Find a used RTX 4070 under ৳60,000 with the original box
                and purchase receipt."
              </p>
              <div className="ai-flow-row">
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
      <div
        className="container reveal ai-padding-block-4xl"
      >
        <div className="ai-text-center-800">
          <StatusBadge status="long-term" />
          <h2
            className="ucc-feature__title ai-title-mt-md"
          >
            Help people coordinate when it matters most.
          </h2>
          <p className="ucc-feature__desc">
            Long-term agentic applications could include donor discovery,
            volunteer coordination, resource matching, community assistance, and
            emergency service discovery.
          </p>
          <p className="ai-mono-lg-mt-lg">
            &gt; "Find an available blood donor matching this request."
          </p>
        </div>

        <HumanitarianVisual />

        <div className="ai-note-card">
          <p className="ai-note-text">
            <strong>Important Note:</strong> These workflows involve sensitive
            information and potentially high-stakes decisions. They would
            require stronger identity verification, privacy protection, safety
            controls, authorization, and human oversight than ordinary AI tasks.
            We do not present these capabilities as fully available production
            features.
          </p>
        </div>
      </div>

      {/* 13. BUSINESS OPERATIONS */}
      <FeatureSection
        title="AI that works alongside organizations."
        description={
          <>
            <p>
              Craftly's intelligence can support organizations with research,
              internal knowledge, workflow automation, project coordination,
              service discovery, decision support, and multi-agent operations.
            </p>
            <div className="ai-ops-group">
              <div className="ai-flow-row">
                <span>Research</span>
                <span>→</span>
                <span>Analysis</span>
                <span>→</span>
                <span>Decision Support</span>
              </div>
              <div className="ai-flow-row">
                <span>Task</span>
                <span>→</span>
                <span>Coordination</span>
                <span>→</span>
                <span>Execution</span>
              </div>
              <div className="ai-flow-row">
                <span>Problem</span>
                <span>→</span>
                <span>Discovery</span>
                <span>→</span>
                <span>Resolution</span>
              </div>
            </div>
          </>
        }
        visual={<BusinessOperationsVisual />}
        layout="text-right"
      />

      {/* 14. HUMAN-CONTROLLED AI */}
      <div className="container reveal ai-padding-block-160">
        <div className="ai-automation-center">
          <h2
            className="ucc-feature__title ai-automation-title"
          >
            Automation without giving up control.
          </h2>
          <p className="ucc-feature__desc ai-automation-subtitle">
            AI should handle more of the complexity. People should remain in
            control when the consequences matter.
          </p>
          <p className="ucc-feature__desc ai-mt-lg">
            Craftly's approach is not unrestricted autonomy. Robot can help with
            reasoning, discovery, communication, comparison, and coordination,
            while consequential actions remain subject to appropriate human
            review and confirmation.
          </p>

          <div className="ai-mt-3xl">
            <HumanControlledFlow />
          </div>
        </div>
      </div>

      {/* 15. WHERE CRAFTLY ROBOT IS GOING */}
      <div
        className="container reveal ai-padding-block-4xl"
      >
        <h2
          className="ucc-feature__title ai-title-center-mb"
        >
          From intelligence to action.
        </h2>
        <p className="ucc-feature__desc ai-desc-center-800">
          Craftly Robot is currently under active research and development. The
          system is evolving progressively from a strong conversational
          foundation toward deeper agentic capabilities.
        </p>

        <AITimeline />
      </div>

      {/* 16. CURRENT STATUS */}
      <div
        className="container reveal ai-padding-block-4xl-pb-120"
      >
        <div className="ai-status-card">
          <h3 className="ai-status-title">
            Built progressively. Not overclaimed.
          </h3>
          <p className="ai-status-desc">
            Craftly Robot is actively evolving. Some capabilities are already
            being researched, tested, or prototyped, while other capabilities
            remain part of the longer-term roadmap.
          </p>
          <p className="ai-status-desc-last">
            The goal is to strengthen each layer of the system before relying on
            it for increasingly complex real-world workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
