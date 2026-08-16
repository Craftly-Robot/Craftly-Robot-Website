import { Link } from 'react-router-dom';
import { UseCaseHero } from './components/UseCaseHero';
import { FeatureSection } from './components/FeatureSection';
import { AgentNetwork } from './components/AgentNetwork';
import { ExampleScenario } from './components/ExampleScenario';
import { StatusBadge } from './components/StatusBadge';
import { UseCaseCTA } from './components/UseCaseCTA';
import './components/UseCaseComponents.css';

export default function AgentNegotiationPage() {
  const agentNetworkData = [
    { id: 'a1', label: 'Service Provider' },
    { id: 'a2', label: 'Organization' },
    { id: 'a3', label: 'Individual' },
    { id: 'a4', label: 'Capability' },
  ];

  const macbookScenario = [
    { label: 'User Request', content: 'My MacBook screen is broken, find someone to fix it today under $200.' },
    { label: 'Requirements', content: 'Screen repair, today, <$200, within 10 miles.' },
    { label: 'Discovery', content: 'Querying local repair shops and independent technicians.' },
    { label: 'Negotiation', content: 'Robot agent verifies pricing, part availability, and turnaround time.' },
    { label: 'Match', content: 'Found "TechFix Local" offering $180, 2-hour turnaround.' },
    { label: 'Approval', content: 'User reviews the match and clicks "Approve". Appointment booked.' }
  ];

  const tutorScenario = [
    { label: 'User Request', content: 'Find a high school calculus tutor for Tuesdays at 6 PM.' },
    { label: 'Requirements', content: 'Calculus, high school level, Tuesdays 6 PM availability, budget $40/hr.' },
    { label: 'Discovery', content: 'Contacting tutoring platforms and independent tutors.' },
    { label: 'Negotiation', content: 'Robot agent verifies schedule overlap and rate constraints.' },
    { label: 'Match', content: 'Found Sarah M., verified math tutor, available.' },
    { label: 'Approval', content: 'User confirms match. Introduction email sent.' }
  ];

  const photographerScenario = [
    { label: 'User Request', content: 'Need a corporate event photographer next Friday from 9 AM to 1 PM.' },
    { label: 'Requirements', content: 'Event photography, corporate portfolio, next Friday 9-1, available in downtown.' },
    { label: 'Discovery', content: 'Querying local creative directories and photographer agents.' },
    { label: 'Negotiation', content: 'Robot agent requests availability and quote for 4 hours.' },
    { label: 'Match', content: 'Found Alex Studios, quoted $600 for half-day rate.' },
    { label: 'Approval', content: 'User reviews portfolio and approves the booking.' }
  ];

  const gpuScenario = [
    { label: 'User Request', content: 'Looking for a used RTX 3080 under $400, no mining history.' },
    { label: 'Requirements', content: 'RTX 3080, <$400, strictly gaming usage, local pickup preferred.' },
    { label: 'Discovery', content: 'Monitoring local marketplaces and hardware enthusiast groups.' },
    { label: 'Negotiation', content: 'Robot agent asks sellers for benchmark proofs and usage history.' },
    { label: 'Match', content: 'Found a seller offering $380 with benchmark results.' },
    { label: 'Approval', content: 'User reviews data and confirms meetup location.' }
  ];

  const donorScenario = [
    { label: 'User Request', content: 'Urgent: O-Negative blood needed at City Hospital.' },
    { label: 'Requirements', content: 'O-Negative blood type, registered donors within 5 miles, urgent.' },
    { label: 'Discovery', content: 'Alerting registered local donor agents via humanitarian network.' },
    { label: 'Communication', content: 'Donor agents confirm proximity and availability with their humans.' },
    { label: 'Match', content: '3 donors confirmed available and in transit.' },
    { label: 'Action', content: 'Hospital notified of incoming confirmed donors.' }
  ];

  return (
    <div className="ucc-page-wrapper">
      <UseCaseHero 
        title="Let intelligent agents find, communicate, and coordinate."
        description={
          <>
            <StatusBadge status="research" />
            <br />
            Craftly Robot is being built toward a world where AI agents can discover relevant people and services, communicate across boundaries, and coordinate real-world tasks.
          </>
        }
        primaryCta={
          <Link to="/products/robot" className="ucc-btn-secondary">Explore product</Link>
        }
      />

      <FeatureSection 
        title="Beyond the chatbot"
        description={
          <>
            <p>Traditional conversational AI is often centered around: <strong>Ask → Answer</strong>.</p>
            <p>Craftly Robot is being developed toward:</p>
            <p><strong>Ask → Understand → Discover → Communicate → Negotiate → Coordinate → Act</strong></p>
            <p>The goal is not simply to generate a better response. The goal is to help move a user's request toward a real-world outcome.</p>
          </>
        }
        layout="full-width"
      />

      <FeatureSection 
        title="What agent-to-agent negotiation means"
        description={
          <>
            <p>Agent-to-agent negotiation allows one Robot agent to communicate with another agent that represents a person, service, organization, or capability.</p>
            <p>Instead of manually contacting every participant, agents can handle much of the discovery and coordination.</p>
          </>
        }
        visual={<AgentNetwork agents={agentNetworkData} />}
        layout="text-left"
      />

      <div className="container" style={{ paddingBlock: 'var(--space-4xl)' }}>
        <h2 className="ucc-feature__title" style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>Real-world Scenarios</h2>
        
        <ExampleScenario title="Example 1: MacBook repair service" steps={macbookScenario} />
        <ExampleScenario title="Example 2: Tutor discovery" steps={tutorScenario} />
        <ExampleScenario title="Example 3: Event photographer" steps={photographerScenario} />
        <ExampleScenario title="Example 4: Used GPU marketplace" steps={gpuScenario} />
        <ExampleScenario title="Example 5: Humanitarian coordination" steps={donorScenario} />
      </div>

      <FeatureSection 
        title="The Human Confirmation Principle"
        description={
          <>
            <StatusBadge status="long-term" />
            <p>We do not describe Robot as "fully autonomous."</p>
            <p>For consequential actions—like spending money, booking a binding appointment, or sending official communication—the agent prepares the arrangement and <strong>waits for human approval</strong> before executing the final step.</p>
          </>
        }
        layout="full-width"
      />

      <UseCaseCTA title="Download Craftly Robot" />
    </div>
  );
}
