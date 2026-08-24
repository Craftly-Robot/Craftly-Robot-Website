import projectImage from "../../../../assets/projects/1.webp";
import DocPage from "../../DocPage";

export default function OperationalWorkflowsPage() {
  return (
    <DocPage
      title="Projects — Craftly Workspace"
      description="Projects in Craftly Workspace"
      crumbs={["Documentation", "Craftly Workspace", "Tasks & Operations", "Projects"]}
      pageId="projects"
      pageTitle="Projects"
      tocItems={[
        { id: "projects", label: "Projects" },
        { id: "why-projects-matter", label: "Why Projects Matter" },
        { id: "project-overview", label: "Project Overview" },
        { id: "project-package", label: "Project Package" },
        { id: "completing-a-project", label: "Completing a Project" },
        {
          id: "practical-evaluation",
          label: "Projects as Practical Evaluation",
        },
      ]}
    >
      <p className="docs__text">
        Craftly Workspace's Projects section provides practical, real world
        projects primarily designed for the Operations Department.
      </p>
      <p className="docs__text">
        These projects give members an opportunity to demonstrate how well they
        can understand requirements, solve problems, use technical tools, and
        deliver working results.
      </p>
      <p className="docs__text">
        Projects are designed to provide a practical view of a member's
        capabilities beyond what can be understood from an application or
        onboarding answers.
      </p>

      <div
        className="docs__image-wrapper"
        style={{
          margin: "40px 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={projectImage}
          alt="Projects Overview"
          style={{ width: "100%", display: "block" }}
        />
      </div>

      <h2 className="docs__section-title" id="why-projects-matter">
        Why Projects Matter
      </h2>
      <p className="docs__text">
        A member's ability to complete real work helps Craftly understand:
      </p>
      <ul className="docs__list">
        <li>How well they understand technical requirements</li>
        <li>How effectively they solve problems</li>
        <li>How independently they can work</li>
        <li>How they use development and AI tools</li>
        <li>How well they follow instructions</li>
        <li>How reliably they deliver a working result</li>
        <li>How much technical responsibility they can handle</li>
      </ul>
      <p className="docs__text">
        Project performance can therefore help inform future responsibilities,
        role progression, and leadership opportunities within the Operations
        Department.
      </p>
      <p className="docs__text">
        Members who consistently demonstrate strong technical ability, reliable
        execution, and the ability to handle increasingly complex work may be
        considered for greater responsibility.
      </p>

      <h2 className="docs__section-title" id="project-overview">
        Project Overview
      </h2>
      <p className="docs__text">Projects are available from:</p>
      <div
        className="docs__code-block"
        style={{
          padding: "16px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          textAlign: "center",
          fontWeight: "500",
          marginBottom: "16px",
          color: "#202124",
        }}
      >
        Work &rarr; Department &rarr; Projects
      </div>
      <p className="docs__text">
        Each project is presented with a project name and a short description.
      </p>
      <p className="docs__text">
        The short description gives you a quick understanding of:
      </p>
      <ul className="docs__list">
        <li>What the project is about</li>
        <li>What needs to be built or completed</li>
        <li>The general objective of the project</li>
      </ul>
      <p className="docs__text">
        For the complete requirements and technical instructions, members can
        download the project's ZIP package.
      </p>

      <h2 className="docs__section-title" id="project-package">
        Project Package
      </h2>
      <p className="docs__text">
        Each project comes with a structured project package containing the
        resources required to complete the work.
      </p>
      <p className="docs__text">
        After downloading and extracting the ZIP file, you will find the
        project's working environment and instructions.
      </p>
      <p className="docs__text">A typical project package may include:</p>

      <h3 className="docs__subsection-title">Project Files</h3>
      <p className="docs__text">
        The actual files and codebase required to work on the project.
      </p>

      <h3 className="docs__subsection-title">AGENT.md</h3>
      <p className="docs__text">
        The AGENT.md file contains the project-specific instructions and rules
        that should be followed while working on the project.
      </p>
      <p className="docs__text">
        Before starting development, members should read this file carefully.
      </p>
      <p className="docs__text">It may contain information such as:</p>
      <ul className="docs__list">
        <li>Project objectives</li>
        <li>Technical requirements</li>
        <li>Development rules</li>
        <li>Expected behavior</li>
        <li>Constraints</li>
        <li>Testing requirements</li>
        <li>Submission requirements</li>
      </ul>

      <h3 className="docs__subsection-title">MCP Configuration</h3>
      <p className="docs__text">
        Projects may include the required MCP configuration/tools needed to
        interact with the project's development environment or services.
      </p>
      <p className="docs__text">
        Members should use the provided configuration rather than modifying the
        project environment unnecessarily.
      </p>

      <h3 className="docs__subsection-title">Git Repository</h3>
      <p className="docs__text">
        The project environment includes a Git setup that allows members to
        manage their work and push their completed code to the designated
        Craftly server/repository.
      </p>
      <p className="docs__text">The expected workflow is generally:</p>
      <div
        className="docs__code-block"
        style={{
          padding: "24px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
          textAlign: "center",
          fontWeight: "500",
          marginBottom: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div>Download Project</div>
        <div>&darr;</div>
        <div>Read AGENT.md</div>
        <div>&darr;</div>
        <div>Set Up Environment</div>
        <div>&darr;</div>
        <div>Develop</div>
        <div>&darr;</div>
        <div>Test</div>
        <div>&darr;</div>
        <div>Commit</div>
        <div>&darr;</div>
        <div>Push</div>
      </div>

      <h2 className="docs__section-title" id="completing-a-project">
        Completing a Project
      </h2>
      <p className="docs__text">
        Before considering a project complete, members should make sure that:
      </p>
      <ul className="docs__list">
        <li>The requirements in AGENT.md have been followed</li>
        <li>The requested functionality has been implemented</li>
        <li>The project works as expected</li>
        <li>The work has been properly tested</li>
        <li>No unnecessary files or changes have been introduced</li>
        <li>The final code has been committed</li>
        <li>
          The completed work has been pushed through the provided Git workflow
        </li>
      </ul>
      <p className="docs__text">
        The project should then be submitted through the appropriate Task
        Submission process when required.
      </p>

      <h2 className="docs__section-title" id="practical-evaluation">
        Projects as Practical Evaluation
      </h2>
      <p className="docs__text">Projects are intentionally practical.</p>
      <p className="docs__text">
        They help Craftly evaluate not only what someone knows, but also what
        they can actually build and deliver.
      </p>
      <p className="docs__text">
        A member may have strong theoretical knowledge but struggle with
        execution. Another member may have less formal experience but
        demonstrate excellent problem-solving, learning ability, and practical
        execution.
      </p>
      <p className="docs__text">
        Projects help reveal that difference through actual work.
      </p>
      <p className="docs__text">
        Over time, project performance can help Craftly determine who is ready
        to take on greater technical responsibility and leadership within
        Operations, while members who need more experience can receive
        appropriate guidance and opportunities to improve.
      </p>
      <p className="docs__text" style={{ fontWeight: 600 }}>
        Don't focus only on finishing the project. Focus on understanding the
        problem, following the requirements, building a reliable solution, and
        delivering work you can stand behind.
      </p>
    </DocPage>
  );
}
