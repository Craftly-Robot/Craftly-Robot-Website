import DocsLayout from '../../DocsLayout';

export default function DeptResourcesPage() {
  return (
    <DocsLayout 
      title="Department Resources — Craftly Workspace"
      description="Department Resources in Craftly Workspace"
      tocItems={[
        { id: 'department-resources', label: 'Department Resources' },
        { id: 'how-department-resources-work', label: 'How Department Resources Work' },
        { id: 'department-specific-work', label: 'Department-Specific Work' },
        { id: 'operations-department', label: 'Operations Department' },
        { id: 'project-package', label: 'Project Package' },
        { id: 'git-project-submission', label: 'Git & Project Submission' },
        { id: 'position-based-resources', label: 'Position-Based Resources' },
        { id: 'why-department-resources-matter', label: 'Why Department Resources Matter' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Resources &gt; <strong>Department Resources</strong>
      </div>

      <h1 className="docs__title" id="department-resources">Department Resources</h1>
      <p className="docs__text">
        The Department Resources section is the central resource area for each department inside Craftly Workspace. It contains the information, tools, documentation, instructions, files, and working materials that members need to perform their responsibilities.
      </p>
      <p className="docs__text">
        Department Resources are not identical for every member. What a member can see and use depends on their department, position, responsibilities, and level of access.
      </p>
      <p className="docs__text">
        The purpose is to give every department its own working environment inside Craftly Workspace rather than forcing every department to use the same structure.
      </p>

      <h2 className="docs__subtitle" id="how-department-resources-work">How Department Resources Work</h2>
      <p className="docs__text">
        Each department has its own resources based on the type of work it performs.
      </p>
      <p className="docs__text">
        For example:
      </p>
      <p className="docs__text">
        <strong>Operations</strong> → Projects, project instructions, technical resources, project files, tools, and related work materials
      </p>
      <p className="docs__text">
        While another department may have completely different resources based on its responsibilities.
      </p>
      <p className="docs__text">
        A member will therefore see resources that are relevant to their department and position.
      </p>

      <h2 className="docs__subtitle" id="department-specific-work">Department-Specific Work</h2>
      <p className="docs__text">
        Every department has different responsibilities, so its resources are organized differently.
      </p>
      <p className="docs__text">
        A department may have:
      </p>
      <ul className="docs__list">
        <li>Internal documentation</li>
        <li>Department guidelines</li>
        <li>Position-specific instructions</li>
        <li>Work procedures</li>
        <li>Reference materials</li>
        <li>Tools and systems</li>
        <li>Templates and files</li>
        <li>Training materials</li>
        <li>Assigned work</li>
        <li>Department-specific controls</li>
        <li>Project or operational resources</li>
      </ul>
      <p className="docs__text">
        The resources available to a Junior member may therefore be different from those available to a Senior, Unit Leader, or C-Suite member.
      </p>

      <h2 className="docs__subtitle" id="operations-department">Operations Department</h2>
      <p className="docs__text">
        For the Operations Department, Projects are one of the primary working resources.
      </p>
      <p className="docs__text">
        Projects are created to provide members with practical work and evaluate their ability to execute real technical or operational responsibilities.
      </p>
      <p className="docs__text">
        Each project can contain:
      </p>
      <ul className="docs__list">
        <li>Project name</li>
        <li>Short project description</li>
        <li>Detailed project requirements</li>
        <li>Project files</li>
        <li>Technical instructions</li>
        <li>AGENT.md instructions</li>
        <li>MCP configuration/resources</li>
        <li>Git repository information</li>
        <li>Required tools and dependencies</li>
        <li>Submission requirements</li>
      </ul>
      <p className="docs__text">
        Members can first read the short description available inside Workspace to understand what the project is about.
      </p>
      <p className="docs__text">
        For the complete requirements, they can download the provided project package and extract it locally.
      </p>

      <h2 className="docs__subtitle" id="project-package">Project Package</h2>
      <p className="docs__text">
        A project package may contain the complete environment required to work on the project.
      </p>
      <p className="docs__text">
        After extracting the package, members may find resources such as:
      </p>
      <p className="docs__text">
        <strong>Project Files</strong> → <strong>MCP</strong> → <strong>Git Configuration</strong> → <strong>AGENT.md</strong> → <strong>Supporting Resources</strong>
      </p>
      <p className="docs__text">
        The <code>AGENT.md</code> file contains important project specific instructions that the member should read before beginning the work.
      </p>
      <p className="docs__text">
        It can define things such as:
      </p>
      <ul className="docs__list">
        <li>What needs to be built</li>
        <li>Project rules</li>
        <li>Technical requirements</li>
        <li>Development instructions</li>
        <li>Expected behavior</li>
        <li>Testing requirements</li>
        <li>Repository instructions</li>
        <li>Restrictions or things that should not be changed</li>
      </ul>
      <p className="docs__text">
        Members should read these instructions carefully before starting.
      </p>

      <h2 className="docs__subtitle" id="git-project-submission">Git & Project Submission</h2>
      <p className="docs__text">
        Projects may include a Git-based workflow so that members can work on the project locally and push their completed work to the designated Craftly repository/server.
      </p>
      <p className="docs__text">
        The project documentation should specify the required repository and workflow.
      </p>
      <p className="docs__text">
        Members should:
      </p>
      <ul className="docs__list">
        <li>Read the project description.</li>
        <li>Download and extract the project package.</li>
        <li>Read <code>AGENT.md</code>.</li>
        <li>Set up the required environment.</li>
        <li>Complete the assigned work.</li>
        <li>Test and verify the implementation.</li>
        <li>Commit the completed work.</li>
        <li>Push the required changes through the provided Git workflow.</li>
        <li>Submit the required evidence through Workspace.</li>
      </ul>
      <p className="docs__text">
        This allows Craftly to evaluate not only whether a member completed a task, but also how effectively they can work with a real technical project.
      </p>

      <h2 className="docs__subtitle" id="position-based-resources">Position-Based Resources</h2>
      <p className="docs__text">
        Department Resources can also change according to a member's position.
      </p>
      <p className="docs__text">
        For example, a Junior member may primarily receive resources required to execute assigned work, while a Senior or Unit Leader may have additional resources related to:
      </p>
      <ul className="docs__list">
        <li>Team management</li>
        <li>Work assignment</li>
        <li>Review</li>
        <li>Monitoring</li>
        <li>Reporting</li>
        <li>Department operations</li>
        <li>Member coordination</li>
      </ul>
      <p className="docs__text">
        Higher-level positions may therefore have access to additional controls and resources that are necessary for their responsibilities.
      </p>

      <h2 className="docs__subtitle" id="why-department-resources-matter">Why Department Resources Matter</h2>
      <p className="docs__text">
        Department Resources provide a structured working environment where members can find the information they need without depending entirely on informal communication.
      </p>
      <p className="docs__text">
        Instead of asking repeatedly:
      </p>
      <p className="docs__text">
        <em>"What am I supposed to do?"</em>
      </p>
      <p className="docs__text">
        members should first check the resources available to their department, position, project, and assigned work.
      </p>
      <p className="docs__text">
        This makes the organization more self directed, organized, and scalable.
      </p>
      <p className="docs__text">
        Ultimately, Department Resources are designed to give each department the right tools, information, and working environment needed to perform its responsibilities effectively.
      </p>
    </DocsLayout>
  );
}
