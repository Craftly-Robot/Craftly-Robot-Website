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

  const tutorScenario = [
    { label: 'User Request', content: 'Find a good tutor for a Class 9 student who can teach Math and Physics.' },
    { label: 'Requirements', content: 'Class 9, Math + Physics, suitable teaching experience, available schedule, reasonable monthly budget.' },
    { label: 'Discovery', content: 'Discovering tutor agents matching the subject, student level, and availability.' },
    { label: 'Negotiation', content: 'Robot agents compare teaching experience, schedule, availability, and expected monthly fee.' },
    { label: 'Match', content: 'Found a tutor matching the required subjects, schedule, and budget.' },
    { label: 'Approval', content: 'User reviews the match and approves the tutor before any final arrangement is made.' }
  ];

  const donorScenario = [
    { label: 'User Request', content: 'Find a B+ blood donor near me who is available right now.' },
    { label: 'Requirements', content: 'B+ blood group, nearby location, currently available, suitable donation eligibility.' },
    { label: 'Discovery', content: 'Searching the available donor network for agents representing nearby matching donors.' },
    { label: 'Negotiation', content: 'Agents communicate to confirm current availability, location, and whether the donor can respond to the request.' },
    { label: 'Match', content: 'Found a nearby available donor matching the requested blood group.' },
    { label: 'Approval', content: 'User reviews the available donor information and confirms the next step through the appropriate channel.' }
  ];

  const flightScenario = [
    { label: 'User Request', content: 'Find the cheapest flight from Dhaka to London for next month and compare the best options.' },
    { label: 'Requirements', content: 'Dhaka → London, next month, lowest practical price, suitable dates, compare available options.' },
    { label: 'Discovery', content: 'Searching relevant flight and travel-service agents for available routes and fares.' },
    { label: 'Negotiation', content: 'Agents compare prices, schedules, baggage conditions, stopovers, and other relevant travel details.' },
    { label: 'Match', content: 'Found several suitable flight options ranked by price and overall fit.' },
    { label: 'Approval', content: 'User reviews the options and selects the preferred flight before any booking or payment is made.' }
  ];

  const laptopScenario = [
    { label: 'User Request', content: 'Find a laptop under ৳80,000 that is good for programming and AI development.' },
    { label: 'Requirements', content: 'Budget under ৳80,000, suitable CPU, sufficient RAM, capable GPU where possible, good for programming and AI workloads.' },
    { label: 'Discovery', content: 'Searching relevant product and seller agents for laptops that match the technical requirements.' },
    { label: 'Negotiation', content: 'Agents compare specifications, pricing, stock, warranty, and seller conditions.' },
    { label: 'Match', content: 'Found laptops that fit the budget and provide the strongest balance of programming and AI-development capability.' },
    { label: 'Approval', content: 'User compares the final options and chooses whether to proceed with a purchase.' }
  ];

  const hospitalScenario = [
    { label: 'User Request', content: 'Find a good hospital near me that has a specialist for this problem and tell me how I can book an appointment.' },
    { label: 'Requirements', content: 'Nearby hospital, relevant specialist, current availability, appointment process, suitable service.' },
    { label: 'Discovery', content: 'Searching hospital and healthcare-service agents for facilities and specialists that match the request.' },
    { label: 'Negotiation', content: 'Agents can communicate about specialist availability, appointment times, booking requirements, and relevant hospital information.' },
    { label: 'Match', content: 'Found suitable hospitals with relevant specialists and available appointment options.' },
    { label: 'Approval', content: 'User reviews the options and decides whether to contact the hospital or proceed with an appointment.' }
  ];

  return (
    <div className="ucc-page-wrapper">
      <UseCaseHero 
        title={
          <>
            Let intelligent agents <br />
            find, communicate, <br />
            and coordinate
          </>
        }
        description={
          <>
            Craftly Robot is being built toward a world where AI agents can <br />
            discover relevant people and services, communicate across <br />
            boundaries, and coordinate real world tasks.
          </>
        }
        primaryCta={
          <Link to="/products/robot" className="ucc-btn-secondary">Explore product</Link>
        }
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
        
        <ExampleScenario title="Example 1: Tutor Discovery" steps={tutorScenario} />
        <ExampleScenario title="Example 2: Blood Donor Discovery" steps={donorScenario} />
        <ExampleScenario title="Example 3: Flight Search" steps={flightScenario} />
        <ExampleScenario title="Example 4: Laptop Discovery" steps={laptopScenario} />
        <ExampleScenario title="Example 5: Hospital Discovery" steps={hospitalScenario} />

        <p style={{ marginTop: 'var(--space-2xl)', color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, textAlign: 'center', maxWidth: '800px', marginInline: 'auto' }}>
          These scenarios illustrate how agent-to-agent coordination can move a request from understanding and discovery toward a practical, reviewable outcome. Availability and actual execution depend on the agents, services, integrations, and permissions available at the time.
        </p>
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

      <UseCaseCTA title="Download Craftly Robot">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StatusBadge status="research" />
        </div>
      </UseCaseCTA>
    </div>
  );
}
