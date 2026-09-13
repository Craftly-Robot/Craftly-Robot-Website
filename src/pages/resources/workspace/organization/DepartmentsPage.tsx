import DocPage from "../../DocPage";

export default function DepartmentsPage() {
  return (
    <DocPage
      title="Departments — Craftly Workspace"
      description="Departments in Craftly Workspace"
      crumbs={["Documentation", "Craftly Workspace", "Organization", "Departments"]}
      pageId="departments"
      pageTitle="Departments"
      tocItems={[
        { id: "departments", label: "Departments" },
        { id: "current-departments", label: "Current Functional Departments" },
        { id: "functional-not-fixed", label: "Functional, Not Fixed" },
        { id: "placement", label: "How Department Placement Works" },
      ]}
    >
      <p className="docs__text">
        Craftly organizes its work through functional departments and areas of
        responsibility rather than a rigid, traditional corporate structure.
      </p>
      <p className="docs__text">
        Different departments exist to handle different parts of the
        organization, while members contribute based on their skills,
        experience, responsibilities, and the current needs of Craftly.
      </p>
      <p className="docs__text">
        As Craftly grows, departments and responsibilities may evolve. A
        member's role is not necessarily permanent greater responsibility can be
        earned through consistent performance, reliability, technical ability,
        leadership, and contribution to the organization.
      </p>

      <h2 className="docs__subtitle" id="current-departments">
        Current Functional Departments
      </h2>

      <h3
        className="docs__subtitle"
        id="operations"
        style={{ fontSize: "1.25rem", marginTop: "1.5rem" }}
      >
        Operations
      </h3>
      <p className="docs__text">
        The Operations Department is responsible for turning organizational
        plans into actual execution.
      </p>
      <p className="docs__text">
        It coordinates day-to-day work, task distribution, project execution,
        operational processes, and performance tracking through Craftly
        Workspace.
      </p>
      <p className="docs__text">
        Operations is also where members can demonstrate their ability to handle
        real-world work through practical projects and assigned tasks.
      </p>

      <h3
        className="docs__subtitle"
        id="human-resources"
        style={{ fontSize: "1.25rem", marginTop: "1.5rem" }}
      >
        Human Resources
      </h3>
      <p className="docs__text">
        The Human Resources function focuses on the people side of Craftly.
      </p>
      <p className="docs__text">
        This includes onboarding, member coordination, organizational
        development, people-related processes, and maintaining a healthy working
        environment.
      </p>

      <h3
        className="docs__subtitle"
        id="marketing"
        style={{ fontSize: "1.25rem", marginTop: "1.5rem" }}
      >
        Marketing
      </h3>
      <p className="docs__text">
        The Marketing function focuses on communicating Craftly's work,
        products, ideas, and vision to the outside world.
      </p>
      <p className="docs__text">
        It may include content, social media, campaigns, branding,
        communications, and other activities that help Craftly reach the right
        audience.
      </p>

      <h3
        className="docs__subtitle"
        id="finance"
        style={{ fontSize: "1.25rem", marginTop: "1.5rem" }}
      >
        Finance
      </h3>
      <p className="docs__text">
        The Finance function is responsible for financial and resource-related
        operations within the organization.
      </p>
      <p className="docs__text">
        This includes financial coordination, budgeting, records, and other
        activities required to maintain responsible management of organizational
        resources.
      </p>

      <h2 className="docs__subtitle" id="functional-not-fixed">
        Functional, Not Fixed
      </h2>
      <p className="docs__text">
        Craftly's departments should not be understood as completely isolated
        teams.
      </p>
      <p className="docs__text">
        People may collaborate across departments when a project or
        organizational requirement demands it. Responsibilities can also evolve
        as the organization grows and as members demonstrate new capabilities.
      </p>
      <p className="docs__text">
        For example, someone who initially contributes in one area may later
        take on greater technical, operational, or leadership responsibility
        based on their demonstrated ability and the needs of the organization.
      </p>

      <h2 className="docs__subtitle" id="placement">
        How Department Placement Works
      </h2>
      <p className="docs__text">
        Members are initially placed according to factors such as:
      </p>
      <ul className="docs__list">
        <li>Skills and technical knowledge</li>
        <li>Previous experience</li>
        <li>Interests and strengths</li>
        <li>Onboarding information</li>
        <li>Practical performance</li>
        <li>Organizational requirements</li>
      </ul>
      <p className="docs__text">Over time, actual work matters.</p>
      <p className="docs__text">
        Projects, tasks, reliability, communication, problem-solving, and the
        ability to take responsibility can all help Craftly understand where a
        member can contribute most effectively.
      </p>
      <p className="docs__text">
        Your department is where you contribute today not necessarily where you
        will remain forever.
      </p>
      <p className="docs__text">
        As Craftly evolves, its departments, roles, and responsibilities may
        also evolve with it.
      </p>
    </DocPage>
  );
}
