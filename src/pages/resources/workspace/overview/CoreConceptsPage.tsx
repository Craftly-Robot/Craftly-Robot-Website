import DocsLayout from '../../DocsLayout';

export default function CoreConceptsPage() {
  return (
    <DocsLayout 
      title="Core Concepts — Craftly Workspace"
      description="Core Concepts in Craftly Workspace"
      tocItems={[
        { id: 'core-concepts', label: 'Core Concepts' },
        { id: 'organization', label: '1. Organization' },
        { id: 'identity', label: '2. Identity' },
        { id: 'role', label: '3. Role' },
        { id: 'department', label: '4. Department' },
        { id: 'reporting-graph', label: '5. Reporting Graph' },
        { id: 'task', label: '6. Task' },
        { id: 'evidence', label: '7. Evidence' },
        { id: 'support-request', label: '8. Support Request' },
        { id: 'notice', label: '9. Notice' },
        { id: 'resources', label: '10. Resources' },
        { id: 'training-participation', label: '11. Training Participation' },
        { id: 'human-controlled-operations', label: '12. Human Controlled Operations' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Overview &gt; <strong>Core Concepts</strong>
      </div>

      <h1 className="docs__title" id="core-concepts">Core Concepts</h1>

      <h2 className="docs__subtitle" id="organization">1. Organization</h2>
      <p className="docs__text">Craftly Workspace treats Craftly as an organization rather than simply a collection of users.</p>
      <p className="docs__text">Every member exists within an organizational structure.</p>

      <h2 className="docs__subtitle" id="identity">2. Identity</h2>
      <p className="docs__text">A member's Workspace identity connects their onboarding information, role, department, permissions, work, and organizational relationships.</p>
      <p className="docs__text">The private key component provides an additional layer to this organizational identity model.</p>

      <h2 className="docs__subtitle" id="role">3. Role</h2>
      <p className="docs__text">A role defines what a person is responsible for and how they participate in the organization.</p>
      <p className="docs__text">Roles are connected to the organizational hierarchy and operational workflows.</p>

      <h2 className="docs__subtitle" id="department">4. Department</h2>
      <p className="docs__text">Departments divide the organization into functional areas.</p>
      <p className="docs__text">A member's department helps determine their responsibilities, resources, communication paths, and operational context.</p>

      <h2 className="docs__subtitle" id="reporting-graph">5. Reporting Graph</h2>
      <p className="docs__text">Workspace represents organizational relationships as a structured reporting graph.</p>
      <p className="docs__text">Instead of simply storing:</p>
      <p className="docs__text">"User A belongs to Craftly."</p>
      <p className="docs__text">the system can represent:</p>
      <p className="docs__text"><strong>User A &rarr; reports to &rarr; Team Lead &rarr; reports to &rarr; Department Leadership</strong></p>
      <p className="docs__text">This graph becomes important for communication, task assignment, and organizational control.</p>

      <h2 className="docs__subtitle" id="task">6. Task</h2>
      <p className="docs__text">A task represents a unit of work that needs to be executed.</p>
      <p className="docs__text">Tasks provide a structured way to assign responsibility, track progress, and verify completion.</p>

      <h2 className="docs__subtitle" id="evidence">7. Evidence</h2>
      <p className="docs__text">Evidence connects a completed task to something verifiable.</p>
      <p className="docs__text">This makes Workspace more accountability oriented than a system where members simply click Complete.</p>

      <h2 className="docs__subtitle" id="support-request">8. Support Request</h2>
      <p className="docs__text">A support request represents a blocker or problem that requires assistance.</p>
      <p className="docs__text">Instead of allowing problems to disappear into informal conversations, Workspace gives them an operational path.</p>

      <h2 className="docs__subtitle" id="notice">9. Notice</h2>
      <p className="docs__text">A notice is a structured mechanism for communicating important information to the relevant members of the organization.</p>

      <h2 className="docs__subtitle" id="resources">10. Resources</h2>
      <p className="docs__text">A resource is information, Position Playbook, Live Department Ranking based on thier performance signal, or training content that helps members perform their responsibilities.</p>

      <h2 className="docs__subtitle" id="training-participation">11. Training Participation</h2>
      <p className="docs__text">Training participation records a member's involvement in organizational learning and development.</p>
      <p className="docs__text">This allows training to become part of the operational system rather than existing separately from the organization.</p>

      <h2 className="docs__subtitle" id="human-controlled-operations">12. Human Controlled Operations</h2>
      <p className="docs__text">Workspace is fundamentally designed around human organizational control.</p>
      <p className="docs__text">It provides the infrastructure for people to coordinate and execute work. Craftly Robot is a separate, active AI R&D direction focused on broader agentic capabilities such as discovering relevant people or services, checking alignment, and coordinating actions with explicit human consent.</p>
      <p className="docs__text">Workspace is the organization's operating system today.</p>
      <p className="docs__text">Robot is the AI research direction that may extend what that organization can accomplish.</p>
      <p className="docs__text">Glass remains a long term direction.</p>
    </DocsLayout>
  );
}
