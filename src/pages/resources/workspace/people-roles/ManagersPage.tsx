import DocsLayout from '../../DocsLayout';

export default function ManagersPage() {
  return (
    <DocsLayout 
      title="Managers â€” Craftly Workspace"
      description="Managers in Craftly Workspace"
      tocItems={[
        { id: 'managers', label: 'Managers' },
        { id: 'management-structure', label: 'The Management Structure' },
        { id: 'what-does-manager-do', label: 'What Does a Manager Do?' },
        { id: 'following-instructions', label: 'Following Manager Instructions' },
        { id: 'communication-comes-first', label: 'Clear Communication Comes First' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; People &amp; Roles &gt; <strong>Managers</strong>
      </div>

      <h1 className="docs__title" id="managers">Managers</h1>
      <p className="docs__text">In Craftly, a Manager is the person responsible for leading, coordinating, guiding, and reviewing the members directly under them.</p>
      <p className="docs__text">In practice, the term Manager generally refers to a member's Team Leader or Unit Leader the person responsible for their day-to-day direction and work.</p>

      <h2 className="docs__subtitle" id="management-structure">The Management Structure</h2>
      <p className="docs__text">Craftly follows a hierarchical management structure where each level is responsible for the level directly below it.</p>
      <p className="docs__text"><strong>CEO &rarr; C-Suite &rarr; Senior &rarr; Junior &rarr; Executive</strong></p>
      <p className="docs__text">In this structure:</p>
      <ul className="docs__list">
        <li>CEO manages the C-Suite</li>
        <li>C-Suite members manage Senior members</li>
        <li>Senior members manage Junior members</li>
        <li>Junior members manage Executives</li>
      </ul>
      <p className="docs__text">The exact structure may vary depending on the department and organizational requirements, but the principle remains the same: every member should have a clear person responsible for guiding and coordinating their work.</p>

      <h2 className="docs__subtitle" id="what-does-manager-do">What Does a Manager Do?</h2>
      <p className="docs__text">A Manager or Unit Leader is responsible for helping their team understand and complete their responsibilities.</p>
      <p className="docs__text">Their responsibilities may include:</p>
      <ul className="docs__list">
        <li>Providing clear instructions</li>
        <li>Assigning appropriate tasks</li>
        <li>Explaining what needs to be done and why</li>
        <li>Helping members understand their responsibilities</li>
        <li>Reviewing work and progress</li>
        <li>Supporting members when they are blocked</li>
        <li>Communicating important information</li>
        <li>Escalating issues when necessary</li>
        <li>Maintaining coordination within the unit</li>
      </ul>
      <p className="docs__text">A Manager is not simply someone who gives orders. They are responsible for making sure the people under them have the direction, context, and support needed to perform their work properly.</p>

      <h2 className="docs__subtitle" id="following-instructions">Following Manager Instructions</h2>
      <p className="docs__text">When a Manager or Unit Leader gives a legitimate organizational instruction or assigns an official task within their responsibility, the assigned member is expected to take it seriously and make a genuine effort to complete it.</p>
      <p className="docs__text">Members should:</p>
      <ul className="docs__list">
        <li>Understand the instruction</li>
        <li>Ask for clarification if something is unclear</li>
        <li>Complete the assigned work responsibly</li>
        <li>Communicate if they encounter a blocker</li>
        <li>Inform their Manager when the work is completed</li>
      </ul>
      <p className="docs__text">If a member cannot complete a task, they should communicate the reason instead of silently ignoring it.</p>

      <h2 className="docs__subtitle" id="communication-comes-first">Clear Communication Comes First</h2>
      <p className="docs__text">Following the management structure does not mean that members should blindly follow unclear instructions.</p>
      <p className="docs__text">If you do not understand:</p>
      <p className="docs__text"><strong>What to do &rarr; How to do it &rarr; Where to do it &rarr; Why it is required</strong></p>
      <p className="docs__text">you should ask your Manager or Unit Leader for clarification.</p>
      <p className="docs__text">If there is a serious concern involving safety, ethics, legality, or inappropriate conduct, the appropriate Support Request or escalation process should be used.</p>
      <p className="docs__text">A Manager provides direction and accountability. A member is expected to listen, understand, communicate, and make a genuine effort to carry out legitimate responsibilities.</p>
    </DocsLayout>
  );
}
