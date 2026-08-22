import DocsLayout from "../../DocsLayout";

export default function HowWorkspaceWorksPage() {
  return (
    <DocsLayout
      title="How Workspace Works? — Craftly Workspace"
      description="How Workspace Works? in Craftly Workspace"
      tocItems={[
        { id: "how-workspace-works", label: "How Workspace Works?" },
        { id: "identity", label: "1. Identity & Onboarding" },
        { id: "organization", label: "2. Organization & Roles" },
        { id: "tasks", label: "3. Tasks & Operations" },
        { id: "communication", label: "4. Communication" },
        { id: "resources", label: "5. Resources & Training" },
        { id: "feedback", label: "6. Operational Feedback Loop" },
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Overview &gt;{" "}
        <strong>How Workspace Works?</strong>
      </div>

      <h1 className="docs__title" id="how-workspace-works">
        How Workspace Works?
      </h1>
      <p className="docs__text">
        Workspace works by connecting people, roles, work, communication, and
        resources into a single organizational system.
      </p>

      <p className="docs__text">
        A member typically enters Workspace through the onboarding process.
        During onboarding, the system collects the information required to
        establish the member's organizational profile and determine where they
        fit within Craftly.
      </p>

      <p className="docs__text">
        Once onboarding is completed, the member's Workspace experience is
        organized around their role, department, responsibilities, and reporting
        structure.
      </p>

      <h2 className="docs__subtitle" id="identity">
        1. Identity & Onboarding
      </h2>
      <p className="docs__text">New members begin by completing onboarding.</p>
      <p className="docs__text">
        The onboarding process establishes important information such as:
      </p>
      <ul className="docs__list">
        <li>Personal and contact information</li>
        <li>Institution and education level</li>
        <li>Social profile</li>
        <li>Department preference</li>
        <li>Availability</li>
        <li>Preferred working style</li>
        <li>Relevant experience and achievements</li>
        <li>Goals for joining Craftly</li>
      </ul>
      <p className="docs__text">
        Members also complete required agreements and digital signatures where
        applicable.
      </p>
      <p className="docs__text">
        A private organizational key is associated with the member as part of
        the identity system.
      </p>

      <h2 className="docs__subtitle" id="organization">
        2. Organization & Roles
      </h2>
      <p className="docs__text">
        Workspace organizes people according to the organization's structure.
      </p>
      <p className="docs__text">
        Members have an organizational position that determines:
      </p>
      <ul className="docs__list">
        <li>Their department</li>
        <li>Their responsibilities</li>
        <li>Who they report to</li>
        <li>Who can assign or review their work</li>
        <li>Which communication channels they can access</li>
        <li>Which resources are relevant to them</li>
      </ul>
      <p className="docs__text">
        This creates a reporting graph rather than treating every member as an
        isolated account.
      </p>

      <h2 className="docs__subtitle" id="tasks">
        3. Tasks & Operations
      </h2>
      <p className="docs__text">
        Work is represented through structured tasks and operational workflows.
      </p>
      <p className="docs__text">A task can move through a lifecycle such as:</p>
      <p className="docs__text">
        <strong>
          Assigned &rarr; In Progress &rarr; Evidence Submitted &rarr; Reviewed
          &rarr; Completed
        </strong>
      </p>
      <p className="docs__text">
        The system is designed around verifiable work, rather than simply
        marking something as "done."
      </p>
      <p className="docs__text">
        Members can provide evidence showing what they actually completed. This
        creates accountability while keeping the workflow measurable.
      </p>
      <p className="docs__text">
        Workspace also provides operational mechanisms such as:
      </p>
      <ul className="docs__list">
        <li>Task evidence</li>
        <li>Support requests</li>
        <li>Organizational notices</li>
        <li>Department project (not all department)</li>
      </ul>

      <h2 className="docs__subtitle" id="communication">
        4. Communication
      </h2>
      <p className="docs__text">
        Communication is organized around the organization's structure.
      </p>
      <p className="docs__text">
        Instead of creating unrestricted communication between everyone,
        Workspace can use the chain of command and reporting relationships to
        determine the appropriate communication path.
      </p>
      <p className="docs__text">
        This allows information to move through the organization while
        maintaining organizational boundaries.
      </p>
      <p className="docs__text">For example:</p>
      <p className="docs__text">
        <strong>
          Member &rarr; Team Lead &rarr; Department Leadership &rarr;
          Organization
        </strong>
      </p>
      <p className="docs__text">
        This makes communication more structured and reduces unnecessary noise.
      </p>

      <h2 className="docs__subtitle" id="resources">
        5. Resources & Training
      </h2>
      <p className="docs__text">
        Workspace provides access to resources based on organizational context.
      </p>
      <p className="docs__text">
        Departments can maintain their own resources, documentation, and
        learning materials.
      </p>
      <p className="docs__text">
        Training participation can also be tracked so that Craftly can
        understand:
      </p>
      <ul className="docs__list">
        <li>Who participated</li>
        <li>Which training they participated in</li>
        <li>Their progress</li>
        <li>Whether required training has been completed</li>
      </ul>

      <h2 className="docs__subtitle" id="feedback">
        6. Operational Feedback Loop
      </h2>
      <p className="docs__text">Workspace creates a continuous loop:</p>
      <p className="docs__text">
        <strong>
          People &rarr; Work &rarr; Evidence &rarr; Review &rarr; Communication
          &rarr; Resources &rarr; Better Work
        </strong>
      </p>
      <p className="docs__text">
        The purpose is not merely to store information, but to make the
        organization increasingly capable of executing work in a structured way.
      </p>
    </DocsLayout>
  );
}
