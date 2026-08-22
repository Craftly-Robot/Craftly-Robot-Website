import DocsLayout from '../../DocsLayout';

export default function DiscoverConnectPage() {
  return (
    <DocsLayout 
      title="Discover & Connect — Craftly Robot"
      description="Discover & Connect in Craftly Robot"
      tocItems={[
        { id: 'discover-connect', label: 'Discover & Connect' },
        { id: 'from-a-request-to-a-searchable-requirement', label: 'From a Request to a Searchable Requirement' },
        { id: 'agent-discovery', label: 'Agent Discovery' },
        { id: 'connect', label: 'Connect' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Discover & Connect</strong>
      </div>

      <h1 className="docs__title" id="discover-connect">Discover & Connect</h1>
      <p className="docs__text">
        Once Robot understands a request, it can determine whether other people, services, capabilities, or agents may be needed.
      </p>
      <p className="docs__text">
        This is where discovery becomes important.
      </p>

      <h2 className="docs__subtitle" id="from-a-request-to-a-searchable-requirement">From a Request to a Searchable Requirement</h2>
      <p className="docs__text">
        Suppose the user asks:
      </p>
      <blockquote className="docs__quote">
        “Find a BUET teacher for a Class 9 student who can teach four days a week for ৳5,000 per month.”
      </blockquote>
      <p className="docs__text">
        Robot can turn that natural-language request into a set of requirements:
      </p>
      <ul className="docs__list">
        <li>Purpose: Teaching</li>
        <li>Student: Class 9</li>
        <li>Qualification: BUET</li>
        <li>Frequency: Four days per week</li>
        <li>Budget: ৳5,000 per month</li>
      </ul>
      <p className="docs__text">
        These requirements can then be used to identify potentially relevant participants.
      </p>

      <h2 className="docs__subtitle" id="agent-discovery">Agent Discovery</h2>
      <p className="docs__text">
        A participant in the Craftly ecosystem may have an associated agent that can represent their available capabilities or services.
      </p>
      <p className="docs__text">
        The discovery process can therefore look like:
      </p>
      <div className="docs__code">
        User Requirement<br/>
        &darr;<br/>
        Requirement Analysis<br/>
        &darr;<br/>
        Find Relevant Agents<br/>
        &darr;<br/>
        Check Capabilities<br/>
        &darr;<br/>
        Contact Suitable Agents
      </div>
      <p className="docs__text">
        The goal is not simply to produce a list of names.
      </p>
      <p className="docs__text">
        The goal is to find agents that are relevant to the actual objective.
      </p>
      <p className="docs__text">
        In broader agent interoperability work, capability discovery is a foundational concept: agents can publish metadata describing their identity, skills, endpoints, and interaction requirements so other agents can determine whether they are suitable for a task.
      </p>
      <p className="docs__text">
        Craftly Robot applies the same general idea to its own ecosystem and identity model.
      </p>

      <h2 className="docs__subtitle" id="connect">Connect</h2>
      <p className="docs__text">
        After identifying potentially relevant participants, Robot can initiate agent-to-agent communication.
      </p>
      <p className="docs__text">
        This can allow agents to exchange the information necessary to determine whether a potential match exists.
      </p>
      <p className="docs__text">
        Depending on the task, that information may involve:
      </p>
      <ul className="docs__list">
        <li>Availability</li>
        <li>Capabilities</li>
        <li>Requirements</li>
        <li>Scheduling</li>
        <li>Pricing</li>
        <li>Service conditions</li>
        <li>Other task-specific constraints</li>
      </ul>
      <p className="docs__text">
        Only information relevant to the task should be exposed, subject to the identity, privacy, and permission rules of the participating agents.
      </p>
    </DocsLayout>
  );
}
