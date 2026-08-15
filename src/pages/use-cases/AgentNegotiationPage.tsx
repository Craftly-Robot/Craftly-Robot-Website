import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import CTASection from '../../components/sections/CTASection';
import './UseCaseContent.css';

export default function AgentNegotiationPage() {
  const revealRef = useScrollReveal();

  return (
    <div className="uc-content-page" ref={revealRef}>
      <Helmet>
        <title>Agent-to-Agent Negotiation — Craftly</title>
        <meta name="description" content="Let intelligent agents find, communicate, and coordinate." />
      </Helmet>

      <div className="container">
        <section className="uc-content-hero reveal">
          <h1 className="uc-content-hero__title">Let intelligent agents find, communicate, and coordinate.</h1>
          <p className="uc-content-hero__desc">
            Craftly Robot is being built toward a world where AI agents can discover relevant people and services, communicate across boundaries, and coordinate real-world tasks.
          </p>
          <div className="uc-content-hero__actions">
            <Link to="/products/robot" className="btn-primary">Explore Craftly Robot</Link>
          </div>
        </section>
      </div>

      <div className="uc-content-wrapper">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingBlock: 'var(--space-2xl)' }}>
          
          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 01 — Beyond the chatbot</h2>
            <div className="uc-content-section__content">
              <p>Traditional conversational AI is often centered around:</p>
              <p><strong>Ask → Answer</strong></p>
              <p>Craftly Robot is being developed toward:</p>
              <p><strong>Ask → Understand → Discover → Communicate → Negotiate → Coordinate → Act</strong></p>
              <p>The goal is not simply to generate a better response.</p>
              <p>The goal is to help move a user's request toward a real-world outcome.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 02 — What agent-to-agent negotiation means</h2>
            <div className="uc-content-section__content">
              <p>Agent-to-agent negotiation allows one Robot agent to communicate with another agent that represents a person, service, organization, or capability.</p>
              <p>Instead of manually contacting every participant, agents can handle much of the discovery and coordination.</p>
              <p><strong>Your Robot → Other Agent → Communication → Alignment → Coordination</strong></p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 03 — Discover the right capability</h2>
            <div className="uc-content-section__content">
              <p>A real-world request often requires finding someone who can actually fulfill it.</p>
              <p>The robot can analyze the user's requirements and identify potentially relevant agents within the Craftly ecosystem.</p>
              <p>For example:</p>
              <blockquote>
                Find a laptop repair service in Dhaka that can replace a damaged MacBook display within two days for under ৳15,000, and confirm whether they provide a warranty.
              </blockquote>
              <p>Robot can understand:</p>
              <p>
                <strong>Service:</strong> MacBook display replacement<br />
                <strong>Location:</strong> Dhaka<br />
                <strong>Deadline:</strong> 2 days<br />
                <strong>Budget:</strong> ৳15,000<br />
                <strong>Requirement:</strong> Warranty
              </p>
              <p>It can then use those requirements to identify suitable service agents.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 04 — Agents can communicate</h2>
            <div className="uc-content-section__content">
              <p>Once relevant agents are discovered, they can exchange information required to evaluate the request.</p>
              <p>Depending on the task, that can include:</p>
              <ul>
                <li>Availability</li>
                <li>Capabilities</li>
                <li>Requirements</li>
                <li>Schedule</li>
                <li>Pricing</li>
                <li>Service conditions</li>
                <li>Other task-specific constraints</li>
              </ul>
              <p>The objective is to turn discovery into meaningful coordination.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 05 — From discovery to negotiation</h2>
            <div className="uc-content-section__content">
              <p>A typical workflow can look like:</p>
              <p><strong>1. Understand</strong><br />Interpret the user's goal.</p>
              <p><strong>2. Discover</strong><br />Find potentially relevant agents.</p>
              <p><strong>3. Contact</strong><br />Send the request to suitable participants.</p>
              <p><strong>4. Exchange</strong><br />Share the information needed to evaluate the task.</p>
              <p><strong>5. Align</strong><br />Check whether the requirements can actually be satisfied.</p>
              <p><strong>6. Negotiate</strong><br />Coordinate conditions when agreement is required.</p>
              <p><strong>7. Return</strong><br />Present suitable outcomes to the user.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 06 — Humans stay in control</h2>
            <div className="uc-content-section__content">
              <p>Agent-to-agent negotiation does not mean unrestricted autonomous decision-making.</p>
              <p>Robot can help with:</p>
              <p><strong>Discovery → Communication → Comparison → Negotiation → Coordination</strong></p>
              <p>But consequential actions remain subject to appropriate human review and confirmation.</p>
              <p>Examples include:</p>
              <ul>
                <li>Spending money</li>
                <li>Hiring someone</li>
                <li>Accepting an agreement</li>
                <li>Sharing sensitive information</li>
                <li>Making a meaningful commitment</li>
              </ul>
              <h3>Our principle</h3>
              <blockquote>
                Agents coordinate. Humans remain in control of consequential decisions.
              </blockquote>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 07 — Identity and privacy</h2>
            <div className="uc-content-section__content">
              <p>A useful agent network needs more than communication.</p>
              <p>It needs:</p>
              <p><strong>Identity · Permissions · Discovery · Privacy · Accountability</strong></p>
              <p>Agents should not expose everything about the people they represent.</p>
              <p>Communication should operate within defined boundaries, using only the information necessary for the task where appropriate.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 08 — Where Robot is today</h2>
            <div className="uc-content-section__content">
              <p>Craftly Robot is currently under <strong>active research and development</strong>.</p>
              <p>The underlying work includes:</p>
              <ul>
                <li>Model development</li>
                <li>Agent identity</li>
                <li>Discovery</li>
                <li>Agent communication</li>
                <li>Negotiation</li>
                <li>Consent-aware coordination</li>
                <li>Tool and system interaction</li>
              </ul>
              <p>The complete public real-world coordination workflow is still evolving.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 09 — Where this can go</h2>
            <div className="uc-content-section__content">
              <p>The long-term direction is broad.</p>
              <p>Potential workflows include:</p>
              
              <h3>Education</h3>
              <p>Find tutors, mentors, and learning services.</p>
              
              <h3>Local Services</h3>
              <p>Find repair, maintenance, transportation, or other providers.</p>
              
              <h3>Commerce</h3>
              <p>Discover buyers, sellers, and compatible services.</p>
              
              <h3>Humanitarian Coordination</h3>
              <p>Help coordinate donors, volunteers, and resources.</p>
              
              <h3>Business Operations</h3>
              <p>Connect organizations with people, services, and specialized capabilities.</p>
              
              <p>These represent the direction of the platform, not a claim that every workflow is already publicly available.</p>
            </div>
          </section>

          <section className="uc-content-section reveal" style={{ borderBottom: 'none' }}>
            <h2 className="uc-content-section__title">Closing</h2>
            <div className="uc-content-section__content">
              <h3>A network of agents can coordinate more than a single assistant can.</h3>
              <p>Craftly Robot is being built toward an environment where <strong>people, agents, and services can discover one another and work together</strong>.</p>
              
              <div className="uc-content-actions">
                <Link to="/products/robot" className="btn-primary">Explore Robot</Link>
                <Link to="/resources/docs" className="btn-secondary">Read Robot Documentation</Link>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      <CTASection />
    </div>
  );
}
