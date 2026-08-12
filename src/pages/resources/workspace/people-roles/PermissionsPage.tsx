import DocsLayout from '../../DocsLayout';

export default function PermissionsPage() {
  return (
    <DocsLayout 
      title="Permissions â€” Craftly Workspace"
      description="Permissions in Craftly Workspace"
      tocItems={[
        { id: 'permissions', label: 'Permissions' },
        { id: 'accountability', label: 'Accountability' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; People &amp; Roles &gt; <strong>Permissions</strong>
      </div>

      <h1 className="docs__title" id="permissions">Permissions</h1>
      <p className="docs__text">Permissions define what a member is allowed to access or do within Craftly Workspace.</p>
      <p className="docs__text">Permissions are connected to a member's role and responsibilities. The goal is to ensure that members have the access they need to perform their work without unnecessarily exposing information or controls that are outside their responsibilities.</p>
      <p className="docs__text">Depending on a member's role, permissions may determine whether they can:</p>
      <ul className="docs__list">
        <li>View specific organizational information</li>
        <li>Access department resources</li>
        <li>Receive or assign tasks</li>
        <li>Review task submissions</li>
        <li>Manage operational activities</li>
        <li>Access specific Workspace features</li>
        <li>Handle certain Support Requests</li>
        <li>Manage role-specific resources or information</li>
      </ul>
      <p className="docs__text">Not every member should have access to every part of the organization.</p>
      <p className="docs__text">Permissions therefore follow the principle:</p>
      <p className="docs__text"><strong>Responsibility &rarr; Required Access &rarr; Appropriate Permission</strong></p>
      <p className="docs__text">As a member's role or responsibilities change, their permissions may also be updated accordingly.</p>

      <h2 className="docs__subtitle" id="accountability">Accountability</h2>
      <p className="docs__text">Permissions come with responsibility.</p>
      <p className="docs__text">Access to an organizational system, resource, or action should be used only for legitimate work within the member's responsibilities. Important or consequential actions should remain reviewable and accountable through the organization's reporting structure.</p>
      <p className="docs__text">This creates a clear relationship:</p>
      <p className="docs__text"><strong>Role &rarr; Permission &rarr; Action &rarr; Responsibility &rarr; Review</strong></p>
      <p className="docs__text">Roles define what you are responsible for. Permissions define what you are allowed to access or do.</p>
    </DocsLayout>
  );
}
