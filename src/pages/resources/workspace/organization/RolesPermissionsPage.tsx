import DocsLayout from '../../DocsLayout';

export default function RolesPermissionsPage() {
  return (
    <DocsLayout 
      title="Roles & Permissions â€” Craftly Workspace"
      description="Roles & Permissions in Craftly Workspace"
      tocItems={[
        { id: 'roles-and-permissions', label: 'Roles & Permissions' },
        { id: 'how-roles-work', label: 'How Roles Work' },
        { id: 'permissions', label: 'Permissions' },
        { id: 'roles-not-permanent', label: 'Roles Are Not Permanent' },
        { id: 'accountability', label: 'Accountability' },
        { id: 'access-based-on-need', label: 'Access Is Based on Need' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Organization &gt; <strong>Roles &amp; Permissions</strong>
      </div>

      <h1 className="docs__title" id="roles-and-permissions">Roles &amp; Permissions</h1>
      <p className="docs__text">Craftly uses role based permissions to make sure members have the access and responsibilities appropriate to their position within the organization.</p>
      <p className="docs__text">A role is more than a title. It helps define what a member is responsible for, what they can access, what work they can perform, and which decisions or resources they can manage.</p>
      <p className="docs__text">Craftly Workspace manages these roles and permissions through the organization's reporting structure.</p>

      <h2 className="docs__subtitle" id="how-roles-work">How Roles Work</h2>
      <p className="docs__text">Every member has a role within the organization based on factors such as:</p>
      <ul className="docs__list">
        <li>Department</li>
        <li>Responsibilities</li>
        <li>Reporting relationship</li>
        <li>Demonstrated ability</li>
        <li>Reliability</li>
        <li>Organizational needs</li>
      </ul>
      <p className="docs__text">For example, a member working as an Executive may have access and responsibilities appropriate to their assigned work, while a Senior or C-Suite member may have additional responsibilities for assigning, reviewing, or managing work.</p>
      <p className="docs__text">Permissions therefore follow responsibility.</p>
      <p className="docs__text"><strong>Greater responsibility &rarr; Appropriate authority &rarr; Clear accountability</strong></p>

      <h2 className="docs__subtitle" id="permissions">Permissions</h2>
      <p className="docs__text">Permissions determine what a member can do within Craftly Workspace.</p>
      <p className="docs__text">Depending on their role, a member may have permission to:</p>
      <ul className="docs__list">
        <li>View specific organizational information</li>
        <li>Access department resources</li>
        <li>Receive or assign tasks</li>
        <li>Review submitted work</li>
        <li>Manage operational activities</li>
        <li>Communicate through appropriate reporting channels</li>
        <li>Handle support requests</li>
        <li>Access role specific tools or systems</li>
      </ul>
      <p className="docs__text">Not every member needs access to everything.</p>
      <p className="docs__text">Workspace uses role based access to help ensure that sensitive information and consequential actions remain limited to the people who are responsible for them.</p>

      <h2 className="docs__subtitle" id="roles-not-permanent">Roles Are Not Permanent</h2>
      <p className="docs__text">Craftly's roles are fluid.</p>
      <p className="docs__text">A member's responsibilities and permissions may change as they demonstrate greater reliability, technical ability, leadership, and understanding of their responsibilities.</p>
      <p className="docs__text">A member may therefore:</p>
      <p className="docs__text"><strong>Start with a specific role &rarr; Demonstrate capability &rarr; Take on greater responsibility &rarr; Receive appropriate permissions</strong></p>
      <p className="docs__text">Likewise, responsibilities may be adjusted when organizational needs change.</p>
      <p className="docs__text">This means that a role is not simply a permanent label it reflects the level of responsibility a member is currently trusted to handle.</p>

      <h2 className="docs__subtitle" id="accountability">Accountability</h2>
      <p className="docs__text">Permissions come with responsibility.</p>
      <p className="docs__text">A member who has access to a particular system, resource, or decision making capability is expected to use that access appropriately.</p>
      <p className="docs__text">Important actions and consequential decisions should remain traceable and reviewable through the organizational structure.</p>
      <p className="docs__text">This creates a clear relationship:</p>
      <p className="docs__text"><strong>Role &rarr; Permission &rarr; Action &rarr; Responsibility &rarr; Review</strong></p>

      <h2 className="docs__subtitle" id="access-based-on-need">Access Is Based on Need and Responsibility</h2>
      <p className="docs__text">Craftly does not aim to give every member unlimited access.</p>
      <p className="docs__text">Instead, access should generally be based on:</p>
      <p className="docs__text"><strong>What you need to do your work + What you are responsible for + What your role allows</strong></p>
      <p className="docs__text">This helps protect organizational information while ensuring members have the tools they need to perform effectively.</p>
      <p className="docs__text">Your role defines your responsibility. Your permissions provide the access needed to fulfill that responsibility. Both can evolve as you and the organization grow.</p>
    </DocsLayout>
  );
}
