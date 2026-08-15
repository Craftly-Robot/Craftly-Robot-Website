import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import CTASection from '../../components/sections/CTASection';
import './UseCaseContent.css';

export default function AIPage() {
  const revealRef = useScrollReveal();

  return (
    <div className="uc-content-page" ref={revealRef}>
      <Helmet>
        <title>AI Use Cases — Craftly</title>
        <meta name="description" content="Put AI to work on real problems." />
      </Helmet>

      <div className="container">
        <section className="uc-content-hero reveal">
          <h1 className="uc-content-hero__title">Put AI to work on real problems.</h1>
          <p className="uc-content-hero__desc">
            Craftly builds intelligent systems that can understand complex requests, reason through them, use available capabilities, and help people accomplish meaningful work.
          </p>
          <div className="uc-content-hero__actions">
            <Link to="/products/robot" className="btn-primary">Explore Craftly Robot</Link>
          </div>
        </section>
      </div>

      <div className="uc-content-wrapper">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 'var(--space-2xl) 0' }}>
          
          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 01 — AI that understands context</h2>
            <div className="uc-content-section__content">
              <p>Craftly Robot is designed to understand more than isolated prompts.</p>
              <p>It can work with:</p>
              <ul>
                <li>Goals</li>
                <li>Constraints</li>
                <li>Context</li>
                <li>Previous information</li>
                <li>Task requirements</li>
                <li>User preferences</li>
              </ul>
              <p>This makes it possible to work with AI on problems that require more than a single answer.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 02 — Personal AI assistance</h2>
            <div className="uc-content-section__content">
              <p>Robot can act as an intelligent assistant for everyday requests.</p>
              <p>Examples include:</p>
              <ul>
                <li>Finding relevant services</li>
                <li>Organizing information</li>
                <li>Researching a topic</li>
                <li>Comparing options</li>
                <li>Planning a task</li>
                <li>Coordinating with other people or agents</li>
              </ul>
              <p>The focus is on turning a request into something useful and actionable.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 03 — Research and information work</h2>
            <div className="uc-content-section__content">
              <p>AI can reduce the manual effort required to gather and organize information.</p>
              <p>Robot can help:</p>
              <p><strong>Understand a question → Gather relevant information → Organize findings → Compare options → Present a useful result</strong></p>
              <p>This can be applied to research, internal knowledge, planning, and decision support.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 04 — Software engineering</h2>
            <div className="uc-content-section__content">
              <p>Craftly Robot is also being developed toward deeper technical and agentic coding capabilities.</p>
              <p>The long-term direction includes agents that can:</p>
              <ul>
                <li>Understand codebases</li>
                <li>Reason about architecture</li>
                <li>Work through engineering tasks</li>
                <li>Use development tools</li>
                <li>Modify software</li>
                <li>Test changes</li>
                <li>Verify results</li>
              </ul>
              <p>This capability is being developed progressively as Robot moves from strong conversational intelligence toward more capable agentic systems.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 05 — Workflow automation</h2>
            <div className="uc-content-section__content">
              <p>Many workflows involve repetitive coordination rather than difficult reasoning.</p>
              <p>AI can help connect the steps:</p>
              <p><strong>Request → Information → Decision → Tool → Result</strong></p>
              <p>This can reduce repetitive work while keeping people involved where judgment or approval is required.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 06 — Multi-agent problem solving</h2>
            <div className="uc-content-section__content">
              <p>Some problems are too broad for a single general-purpose agent.</p>
              <p>Different agents can specialize in different responsibilities.</p>
              <p>For example:</p>
              <p><strong>Research Agent</strong><br />↓<br /><strong>Planning Agent</strong><br />↓<br /><strong>Verification Agent</strong><br />↓<br /><strong>Execution Agent</strong></p>
              <p>The agents can work together while a coordinating system manages the overall objective.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 07 — Real-world coordination</h2>
            <div className="uc-content-section__content">
              <p>The strongest long-term use case is connecting AI to real-world people and services.</p>
              <p>Instead of:</p>
              <blockquote>
                “Here is how you can solve this.”
              </blockquote>
              <p>the goal is:</p>
              <blockquote>
                “Here is what you need. Let me help coordinate how it gets done.”
              </blockquote>
              <p>This is where Robot's discovery and agent-to-agent negotiation capabilities become important.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 08 — AI with human judgment</h2>
            <div className="uc-content-section__content">
              <p>Craftly is not building AI around unrestricted autonomy.</p>
              <p>AI should be able to handle as much coordination and reasoning as safely possible, while people remain responsible for consequential decisions.</p>
              <p><strong>AI handles complexity.<br />Humans retain control.</strong></p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 09 — Built for an evolving AI ecosystem</h2>
            <div className="uc-content-section__content">
              <p>Craftly Robot is currently under active research and development.</p>
              <p>The system is being developed progressively:</p>
              <p>
                <strong>Conversational Intelligence</strong><br />↓<br />
                <strong>Reliable Reasoning</strong><br />↓<br />
                <strong>Tools & Context</strong><br />↓<br />
                <strong>Agentic Workflows</strong><br />↓<br />
                <strong>Multi-Agent Coordination</strong><br />↓<br />
                <strong>Real-World Task Execution</strong>
              </p>
              <p>This staged approach allows Craftly to strengthen each layer before depending on it for more consequential workflows.</p>
            </div>
          </section>

          <section className="uc-content-section reveal" style={{ borderBottom: 'none' }}>
            <h2 className="uc-content-section__title">Closing</h2>
            <div className="uc-content-section__content">
              <h3>AI should help you accomplish more, not simply answer more.</h3>
              <p>Craftly is building toward intelligent systems that can understand what people need, use the right capabilities, coordinate with other agents, and help turn goals into outcomes.</p>
              
              <div className="uc-content-actions">
                <Link to="/products/robot" className="btn-primary">Explore Craftly Robot</Link>
                <Link to="/resources/docs" className="btn-secondary">View Documentation</Link>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      <CTASection />
    </div>
  );
}
