import DocsLayout from '../../DocsLayout';
import supportImage from '../../../../assets/Support Requests/1.png';

export default function SupportRequestsPage() {
  return (
    <DocsLayout 
      title="Support Requests â€” Craftly Workspace"
      description="Support Requests in Craftly Workspace"
      tocItems={[
        { id: 'support-requests', label: 'Support Requests' },
        { id: 'when-to-create', label: 'When Should You Create a Support Request?' },
        { id: 'how-support-requests-work', label: 'How Support Requests Work' },
        { id: 'write-clear-requests', label: 'Write Clear Requests' },
        { id: 'more-than-a-message', label: 'A Support Request Is More Than a Message' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Tasks & Operations &gt; <strong>Support Requests</strong>
      </div>

      <h1 className="docs__title" id="support-requests">Support Requests</h1>
      
      <p className="docs__text">
        Craftly Workspace provides a Support Request system for situations where a member needs help, needs to report an issue, or needs to bring something important to the organization's attention.
      </p>

      <p className="docs__text">
        Instead of relying on informal messages, members can submit a structured request through Workspace so that the right people can review and respond to it.
      </p>

      <div className="docs__image-wrapper" style={{ margin: '40px 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <img src={supportImage} alt="Support Requests Overview" style={{ width: '100%', display: 'block' }} />
      </div>

      <h2 className="docs__section-title" id="when-to-create">When Should You Create a Support Request?</h2>
      <p className="docs__text">
        You can create a Support Request when you need help with any of the following:
      </p>

      <h3 className="docs__subsection-title">Report Unit Commander</h3>
      <p className="docs__text">
        Use this category when your Unit Commander is not active, does not provide clear instructions, or is not properly guiding the unit's work.
      </p>
      <p className="docs__text">
        You can submit a report if you are not being given enough information about:
      </p>
      <ul className="docs__list">
        <li>What you are expected to do</li>
        <li>How the work should be done</li>
        <li>Why the task is required</li>
        <li>Where or through which system the work should be completed</li>
        <li>When it needs to be completed</li>
        <li>Or who you should contact when you need clarification</li>
      </ul>
      <p className="docs__text">
        You can also use this category when your Unit Commander is consistently unavailable or when a lack of proper guidance is preventing you or your unit from working effectively.
      </p>
      <p className="docs__text">
        The purpose is to make sure every member receives the clear direction, support, and leadership they need to perform their responsibilities properly.
      </p>

      <h3 className="docs__subsection-title">Technical Issue</h3>
      <p className="docs__text">
        Use this when you encounter a technical problem with Craftly Workspace, Craftly systems, or other technical resources required for your work.
      </p>
      <p className="docs__text">
        Include enough information for the technical team to understand and reproduce the problem.
      </p>

      <h3 className="docs__subsection-title">Legal or Safety</h3>
      <p className="docs__text">
        Use this category for concerns involving legal matters, safety, security, or situations that may require immediate organizational attention.
      </p>
      <p className="docs__text">
        Provide the relevant information clearly and factually.
      </p>

      <h3 className="docs__subsection-title">Attendance Correction</h3>
      <p className="docs__text">
        Use this when your attendance record is incorrect and needs to be reviewed or corrected.
      </p>
      <p className="docs__text">
        For example, if you attended a required activity but your attendance was recorded incorrectly, you can submit a request for correction.
      </p>

      <h3 className="docs__subsection-title">Ethics Report</h3>
      <p className="docs__text">
        Use an Ethics Report to raise concerns about behavior or situations that may violate Craftly's ethical standards or create an inappropriate organizational environment.
      </p>
      <p className="docs__text">
        Reports should be made honestly and in good faith.
      </p>

      <h3 className="docs__subsection-title">Suggestions</h3>
      <p className="docs__text">
        Have an idea for improving Craftly?
      </p>
      <p className="docs__text">
        Use Suggestions to share ideas, improvements, feedback, or new approaches that could make the organization, Workspace, or its processes better.
      </p>
      <p className="docs__text">
        Suggestions don't need to be problems they can also be ideas for making something work better.
      </p>

      <h3 className="docs__subsection-title">Private Key Recovery</h3>
      <p className="docs__text">
        If you lose access to or have a problem with your Craftly Private Key, use this category to request assistance with recovery.
      </p>
      <p className="docs__text">
        Because the private key is part of your organizational identity, recovery requests may require additional verification before support can be provided.
      </p>

      <h2 className="docs__section-title" id="how-support-requests-work">How Support Requests Work</h2>
      <p className="docs__text">
        Creating a support request is simple:
      </p>

      <div className="docs__code-block" style={{ padding: '24px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center', fontWeight: '500', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div>Choose a Category</div>
        <div>&darr;</div>
        <div>Describe the Issue</div>
        <div>&darr;</div>
        <div>Submit the Request</div>
        <div>&darr;</div>
        <div>Request Is Routed to the Appropriate Person/Team</div>
        <div>&darr;</div>
        <div>Review & Response</div>
        <div>&darr;</div>
        <div>Resolution</div>
      </div>

      <p className="docs__text">
        The exact response process depends on the type and urgency of the request.
      </p>

      <h2 className="docs__section-title" id="write-clear-requests">Write Clear Requests</h2>
      <p className="docs__text">
        When submitting a request, provide enough information for the person handling it to understand the situation.
      </p>
      <p className="docs__text">
        A good request should explain:
      </p>
      <ul className="docs__list">
        <li>What happened</li>
        <li>When it happened</li>
        <li>What you need help with</li>
        <li>Any relevant details or evidence</li>
      </ul>
      <p className="docs__text">
        For technical issues, screenshots, error messages, or other useful evidence can make troubleshooting much easier.
      </p>
      <p className="docs__text">
        For reports involving sensitive matters, provide only the information that is relevant to the issue.
      </p>

      <h2 className="docs__section-title" id="more-than-a-message">A Support Request Is More Than a Message</h2>
      <p className="docs__text">
        Support Requests are part of Craftly's operational system.
      </p>
      <p className="docs__text">
        They create a structured path between a member who needs help and the person responsible for resolving the issue.
      </p>
      <p className="docs__text">
        If something is wrong, unclear, blocked, or needs attention don't let it disappear. Create a Support Request and give the right person a chance to help.
      </p>

    </DocsLayout>
  );
}
