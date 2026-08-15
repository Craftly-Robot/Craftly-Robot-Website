import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import CTASection from '../../components/sections/CTASection';
import './UseCaseContent.css';

export default function OperationsPage() {
  const revealRef = useScrollReveal();

  return (
    <div className="uc-content-page" ref={revealRef}>
      <Helmet>
        <title>Company Operations — Craftly</title>
        <meta name="description" content="Run your organization as one connected system." />
      </Helmet>

      <div className="container">
        <section className="uc-content-hero reveal">
          <h1 className="uc-content-hero__title">Run your organization as one connected system.</h1>
          <p className="uc-content-hero__desc">
            Craftly Workspace connects people, work, communication, resources, and operational processes in one structured environment.
          </p>
          <div className="uc-content-hero__actions">
            <Link to="/products/workspace" className="btn-primary">Explore Craftly Workspace</Link>
          </div>
        </section>
      </div>

      <div className="uc-content-content-wrapper">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', paddingBlock: 'var(--space-2xl)' }}>
          
          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 01 — One place for how work gets done</h2>
            <div className="uc-content-section__content">
              <p>Organizations often spread their work across chats, documents, spreadsheets, project tools, and informal communication.</p>
              <p>Craftly Workspace brings those operational pieces together so people can understand <strong>what needs to happen, who is responsible, how work moves, and where to go when something gets blocked.</strong></p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 02 — From command to execution</h2>
            <div className="uc-content-section__content">
              <p>Craftly Workspace turns organizational instructions into structured work.</p>
              
              <h3>Command Chain</h3>
              <p>Official instructions can move through the organization's reporting hierarchy:</p>
              <p><strong>Chairman → CEO → C-Suite → Senior → Junior → Executive</strong></p>
              <p>Every level has a clear responsibility for passing work forward, reviewing results, and escalating issues when necessary.</p>

              <h3>Notice Board</h3>
              <p>Official announcements, instructions, updates, and messages can be published through a centralized Notice Board.</p>
              <p>This gives the organization a clear place for information that needs to reach its members.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 03 — Work with accountability</h2>
            <div className="uc-content-section__content">
              <h3>Tasks</h3>
              <p>Official company tasks can be assigned through the Notice Board or Command Chain.</p>
              <p>Members execute the work and submit the result through the Task Submission system.</p>

              <h3>Evidence</h3>
              <p>Completed work can be submitted using:</p>
              <p><strong>Images · PDF · Text · JSON · CSV</strong></p>
              <p>Up to five files can be attached to a submission.</p>
              <p>This creates a simple operational loop:</p>
              <p><strong>Assigned → Execute → Submit → Review → Complete</strong></p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 04 — Projects that reveal capability</h2>
            <div className="uc-content-section__content">
              <p>Projects provide practical work environments, particularly within Operations.</p>
              <p>A project can include:</p>
              <ul>
                <li>Project requirements</li>
                <li><code>AGENT.md</code></li>
                <li>Technical instructions</li>
                <li>MCP resources</li>
                <li>Git workflow</li>
                <li>Supporting files</li>
                <li>Submission requirements</li>
              </ul>
              <p>Projects allow Craftly to understand not only what someone knows, but what they can actually build and deliver.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 05 — Communication follows responsibility</h2>
            <div className="uc-content-section__content">
              <p>Craftly uses structured communication based on reporting relationships.</p>
              <p>Members can communicate with the people responsible for guiding, reviewing, or supporting their work.</p>
              <p>The goal is not to restrict communication unnecessarily, but to make sure important communication reaches the right people without becoming fragmented.</p>
              <p><strong>Responsibility → Communication → Review → Escalation</strong></p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 06 — Resources where work happens</h2>
            <div className="uc-content-section__content">
              <p>Every department has its own working environment inside Workspace.</p>
              <p>Department Resources can include:</p>
              <ul>
                <li>Guidelines</li>
                <li>Documentation</li>
                <li>Tools</li>
                <li>Files</li>
                <li>Training</li>
                <li>Position-specific resources</li>
                <li>Projects</li>
                <li>Department controls</li>
              </ul>
              <p>What a member sees can depend on their department, role, position, and responsibilities.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 07 — People and roles</h2>
            <div className="uc-content-section__content">
              <p>Craftly's organizational structure is dynamic.</p>
              <p>Roles can evolve based on:</p>
              <ul>
                <li>Reliability</li>
                <li>Quality of work</li>
                <li>Technical ability</li>
                <li>Leadership</li>
                <li>Communication</li>
                <li>Organizational needs</li>
              </ul>
              <p>A member's position represents the level of responsibility they are currently trusted to handle.</p>
            </div>
          </section>

          <section className="uc-content-section reveal">
            <h2 className="uc-content-section__title">Section 08 — Support when work gets blocked</h2>
            <div className="uc-content-section__content">
              <p>Not every problem can be solved alone.</p>
              <p>Workspace provides structured Support Requests for:</p>
              <p><strong>Unit Commander · Technical Issue · Legal or Safety · Attendance Correction · Ethics Report · Suggestions · Private Key Recovery</strong></p>
              <p>Members can raise issues through the appropriate channel instead of allowing important problems to disappear into informal conversations.</p>
            </div>
          </section>

          <section className="uc-content-section reveal" style={{ borderBottom: 'none' }}>
            <h2 className="uc-content-section__title">Section 09 — Built for real organizations</h2>
            <div className="uc-content-section__content">
              <p>Craftly Workspace is designed around a simple principle:</p>
              <blockquote>
                Every responsibility should have an owner. Every task should have a path. Every important problem should have somewhere to go.
              </blockquote>
              
              <div className="uc-content-actions">
                <Link to="/products/workspace" className="btn-primary">Explore Workspace</Link>
                <Link to="/resources/docs" className="btn-secondary">Read Documentation</Link>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      <CTASection />
    </div>
  );
}
