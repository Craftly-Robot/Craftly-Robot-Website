import { Link } from 'react-router-dom';
import { UseCaseHero } from './components/UseCaseHero';
import { FeatureSection } from './components/FeatureSection';
import { UseCaseCTA } from './components/UseCaseCTA';
import { CommandChain } from './components/CommandChain';
import { TaskLifecycle } from './components/TaskLifecycle';
import { ProjectWorkflowTerminal } from './components/ProjectWorkflowTerminal';
import { ReportingGraphVisual } from './components/ReportingGraphVisual';

import { SupportCategoryMenu } from './components/SupportCategoryMenu';
import './components/UseCaseComponents.css';

export default function OperationsPage() {

  return (
    <div className="ucc-page-wrapper">
      <UseCaseHero 
        title={
          <>
            Run our organization <br />
            as one connected system
          </>
        }
        description={
          <>
            Craftly Workspace connects people, work, <br />
            communication, resources, and operational <br />
            processes in one structured environment.
          </>
        }
        primaryCta={
          <Link to="/products/workspace" className="ucc-btn-secondary">Explore product</Link>
        }
      />


      <FeatureSection 
        title="From command to execution"
        description={
          <>
            <p>Craftly Workspace turns organizational instructions into structured work.</p>
            <p>Official instructions can move through the organization's reporting hierarchy. Every level has a clear responsibility for passing work forward, reviewing results, and escalating issues when necessary.</p>
          </>
        }
        visual={<CommandChain />}
        layout="text-left"
      />

      <FeatureSection 
        title="Task Lifecycle"
        description={
          <>
            <p>Tasks are tracked from inception to completion with clear status boundaries.</p>
            <p>This strict lifecycle prevents work from being silently dropped and ensures accountability at every handoff.</p>
          </>
        }
        visual={<TaskLifecycle />}
        layout="text-right"
      />

      <FeatureSection 
        title="Communication Hierarchy"
        description={
          <p style={{ margin: 0 }}>
            Rather than sending unstructured messages, Workspace allows <br />
            status updates and reports to follow the organizational graph up <br />
            to the appropriate level of leadership.
          </p>
        }
        visual={<ReportingGraphVisual />}
        layout="full-width"
      />

      <FeatureSection 
        title="Project Workflow"
        description={
          <>
            <p>Projects combine people, agents, codebase context, and requirements.</p>
            <p>From reading the initial <code>AGENT.md</code> specification to testing and submission, project workflows become highly transparent processes rather than black boxes.</p>
          </>
        }
        visual={<div style={{ marginTop: '60px', width: '100%', maxWidth: '1000px', margin: '60px auto 0' }}><ProjectWorkflowTerminal /></div>}
        layout="full-width"
      />

      <FeatureSection 
        title="Support & Escalation"
        description={
          <>
            <p><strong>Structured Escalation:</strong> Operational blocking issues are handled cleanly through defined channels.</p>
            <p>Rather than sending an open-ended message, team members select the specific category of support they need, ensuring the request reaches the person actually equipped to solve it.</p>
          </>
        }
        visual={<SupportCategoryMenu />}
        layout="text-right"
      />

      <UseCaseCTA title="Download Craftly Workspace" />
    </div>
  );
}
