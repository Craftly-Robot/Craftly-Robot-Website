import DocsLayout from "../../DocsLayout";

export default function ReportingStructurePage() {
  return (
    <DocsLayout
      title="Reporting Structure — Craftly Workspace"
      description="Reporting Structure in Craftly Workspace"
      tocItems={[
        { id: "reporting-structure", label: "Reporting Structure" },
        { id: "how-structure-works", label: "How the Structure Works" },
        { id: "reporting-branches", label: "Reporting Branches" },
        { id: "roles-can-change", label: "Roles Can Change" },
        { id: "hierarchy-not-blind-obedience", label: "Hierarchy" },
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Organization &gt;{" "}
        <strong>Reporting Structure</strong>
      </div>

      <h1 className="docs__title" id="reporting-structure">
        Reporting Structure
      </h1>
      <p className="docs__text">
        Craftly uses a manager-based reporting structure to keep responsibility,
        communication, task assignment, review, and escalation clear.
      </p>
      <p className="docs__text">
        Every member has a defined reporting relationship so they know whom to
        report to, who is responsible for reviewing their work, and where to go
        for support or escalation.
      </p>

      <h2 className="docs__subtitle" id="how-structure-works">
        How the Structure Works
      </h2>
      <p className="docs__text">
        The organization follows a hierarchical reporting model:
      </p>
      <p className="docs__text">
        <strong>
          Chairman &rarr; CEO &rarr; C-Suite &rarr; Senior &rarr; Junior &rarr;
          Executive
        </strong>
      </p>
      <p className="docs__text">
        The exact structure may vary depending on the department and the
        responsibilities of a particular unit.
      </p>
      <p className="docs__text">
        Managers and leaders are responsible for coordinating the people under
        them, assigning appropriate work, reviewing results, providing guidance,
        and escalating important matters when necessary.
      </p>
      <p className="docs__text">This creates a clear path for:</p>
      <ul className="docs__list">
        <li>Task assignment</li>
        <li>Work review</li>
        <li>Feedback</li>
        <li>Support</li>
        <li>Escalation</li>
        <li>Decision-making</li>
        <li>Accountability</li>
        <li>Clear Ownership</li>
      </ul>

      <p className="docs__text">
        A key purpose of the reporting structure is to ensure that important
        work and decisions always have a clear owner.
      </p>
      <p className="docs__text">
        When something needs to be done, members should know who is responsible
        for assigning it.
      </p>
      <p className="docs__text">
        When work needs to be reviewed, there should be a clear person
        responsible for reviewing it.
      </p>
      <p className="docs__text">
        When a problem cannot be resolved at one level, it can move through the
        appropriate reporting path.
      </p>
      <p className="docs__text">This creates a simple principle:</p>
      <p className="docs__text">
        <strong>
          Responsibility &rarr; Review &rarr; Escalation &rarr; Resolution
        </strong>
      </p>

      <h2 className="docs__subtitle" id="reporting-branches">
        Reporting Branches
      </h2>
      <p className="docs__text">
        Craftly's organizational structure can include separate reporting
        branches where appropriate, while remaining connected to the same
        overall organizational leadership and standards.
      </p>
      <p className="docs__text">
        These structures are designed to provide members with a comfortable,
        respectful, and privacy conscious working environment while maintaining
        clear organizational accountability.
      </p>
      <p className="docs__text">
        The purpose of having defined reporting branches is not to isolate
        people but to ensure members have an appropriate and understandable path
        for communication, support, and leadership.
      </p>

      <h2 className="docs__subtitle" id="roles-can-change">
        Roles Can Change
      </h2>
      <p className="docs__text">
        A member's position is not necessarily permanent.
      </p>
      <p className="docs__text">
        As Craftly grows, responsibilities may change according to:
      </p>
      <ul className="docs__list">
        <li>Demonstrated performance</li>
        <li>Reliability</li>
        <li>Technical ability</li>
        <li>Leadership ability</li>
        <li>Communication</li>
        <li>Organizational needs</li>
        <li>Ability to handle greater responsibility</li>
      </ul>
      <p className="docs__text">
        Someone who consistently demonstrates strong performance may be trusted
        with greater responsibility, while responsibilities may also be adjusted
        when the organization's needs change.
      </p>

      <h2 className="docs__subtitle" id="hierarchy-not-blind-obedience">
        Hierarchy Does Not Mean Blind Obedience
      </h2>
      <p className="docs__text">
        Craftly's reporting structure exists to create clarity and
        accountability, not blind obedience.
      </p>
      <p className="docs__text">
        Members are expected to follow legitimate organizational instructions
        and responsibilities, while also being able to ask questions, request
        clarification, raise concerns, and report problems through the
        appropriate channels.
      </p>
      <p className="docs__text">
        If an instruction is unclear, a member should seek clarification rather
        than simply guessing.
      </p>
      <p className="docs__text">
        If a member believes something is unsafe, unethical, inappropriate, or
        inconsistent with organizational standards, they should use the
        appropriate reporting or Support Request process.
      </p>
      <p className="docs__text">
        The hierarchy therefore provides a clear structure for responsibility
        without removing individual judgment.
      </p>
      <p className="docs__text">
        A reporting structure tells you who is responsible for what, who can
        help you, and where a decision can be reviewed it is not a requirement
        to follow instructions without understanding or accountability.
      </p>
    </DocsLayout>
  );
}
