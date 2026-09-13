import DocPage from "../../DocPage";

export default function WhatIsWorkspacePage() {
  return (
    <DocPage
      title="What is Craftly Workspace? — Craftly Workspace"
      description="What is Craftly Workspace? in Craftly Workspace"
      crumbs={["Documentation", "Craftly Workspace", "Overview", "What is Craftly Workspace?"]}
      pageId="what-is-craftly-workspace"
      pageTitle="What is Craftly Workspace?"
      tocItems={[
        {
          id: "what-is-craftly-workspace",
          label: "What is Craftly Workspace?",
        },
      ]}
    >
      <p className="docs__text">
        Craftly Workspace is the operational system that powers how Craftly
        organizes its people, work, communication, resources, and internal
        processes.
      </p>

      <p className="docs__text">
        Craftly is not only building software products; it is building a
        technology organization and the systems required to make that
        organization operate effectively. Workspace is the current working
        product responsible for that operational layer.
      </p>

      <p className="docs__text">
        Workspace provides a structured environment where members can:
      </p>
      <ul className="docs__list">
        <li>Complete onboarding and establish their organizational identity</li>
        <li>Understand their roles and responsibilities</li>
        <li>Receive, manage, and complete tasks</li>
        <li>Submit evidence of completed work</li>
        <li>Request support when they are blocked</li>
        <li>Communicate through an organizational chain of command</li>
        <li>Access department-specific resources</li>
        <li>Participate in training and track participation</li>
        <li>Review agreements and complete digital signatures</li>
        <li>Manage their private organizational identity/key</li>
        <li>Receive important organizational notices</li>
      </ul>

      <p className="docs__text">
        The goal is to replace scattered communication and disconnected
        workflows with one structured system for getting work done.
      </p>

      <p className="docs__text">
        Workspace is therefore not simply a dashboard or project-management
        application. It acts as the operational foundation of the Craftly
        organization.
      </p>
    </DocPage>
  );
}
