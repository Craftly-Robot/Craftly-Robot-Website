import { UseCaseHero } from './components/UseCaseHero';
import { FeatureSection } from './components/FeatureSection';
import { Workflow } from './components/Workflow';
import CTASection from '../../components/sections/CTASection';
import './components/UseCaseComponents.css';

export default function OperationsPage() {
  const commandChainNodes = [
    { id: 'c1', label: 'Chairman' },
    { id: 'c2', label: 'CEO' },
    { id: 'c3', label: 'C-Suite' },
    { id: 'c4', label: 'Senior' },
    { id: 'c5', label: 'Junior' },
    { id: 'c6', label: 'Executive' }
  ];

  const taskLifecycleNodes = [
    { id: 't1', label: 'Assigned' },
    { id: 't2', label: 'Execute' },
    { id: 't3', label: 'Submit' },
    { id: 't4', label: 'Review' },
    { id: 't5', label: 'Complete' }
  ];

  const projectWorkflowNodes = [
    { id: 'p1', label: 'Project' },
    { id: 'p2', label: 'AGENT.md' },
    { id: 'p3', label: 'Work' },
    { id: 'p4', label: 'Git' },
    { id: 'p5', label: 'Submission' }
  ];

  return (
    <div className="ucc-page-wrapper">
      <UseCaseHero 
        title="Run your organization as one connected system."
        description="Craftly Workspace connects people, work, communication, resources, and operational processes in one structured environment."
        primaryCta={
          <a href="#explore" className="ucc-btn-primary">Explore Craftly Workspace</a>
        }
      />

      <FeatureSection 
        title="One place for how work gets done"
        description={
          <>
            <p>Organizations often spread their work across chats, documents, spreadsheets, project tools, and informal communication.</p>
            <p>Craftly Workspace brings those operational pieces together so people can understand <strong>what needs to happen, who is responsible, how work moves, and where to go when something gets blocked.</strong></p>
          </>
        }
        layout="full-width"
      />

      <FeatureSection 
        title="From command to execution"
        description={
          <>
            <p>Craftly Workspace turns organizational instructions into structured work.</p>
            <p>Official instructions can move through the organization's reporting hierarchy. Every level has a clear responsibility for passing work forward, reviewing results, and escalating issues when necessary.</p>
          </>
        }
        visual={<Workflow nodes={commandChainNodes} />}
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
        visual={<Workflow nodes={taskLifecycleNodes} />}
        layout="text-right"
      />

      <FeatureSection 
        title="Project Workflow"
        description={
          <>
            <p>Define standard workflows to ensure all projects meet the required quality baseline.</p>
          </>
        }
        visual={<Workflow nodes={projectWorkflowNodes} />}
        layout="text-left"
      />

      <FeatureSection 
        title="Notice Board & Support"
        description={
          <>
            <p><strong>Notice Board:</strong> Important announcements are broadcast clearly, replacing fragmented chat updates.</p>
            <p><strong>Support Requests:</strong> Operational blocking issues are handled cleanly through structured categories:</p>
            <ul>
              <li>General inquiry</li>
              <li>Technical support</li>
              <li>HR inquiry</li>
              <li>Operational block</li>
            </ul>
          </>
        }
        layout="text-right"
      />

      <CTASection />
    </div>
  );
}
