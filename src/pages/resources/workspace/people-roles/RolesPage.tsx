import DocsLayout from '../../DocsLayout';

export default function RolesPage() {
  return (
    <DocsLayout 
      title="Roles — Craftly Workspace"
      description="Roles in Craftly Workspace"
      tocItems={[
        { id: 'roles', label: 'Roles' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; People &amp; Roles &gt; <strong>Roles</strong>
      </div>

      <h1 className="docs__title" id="roles">Roles</h1>
      <p className="docs__text">A role defines a member's position, responsibilities, and place within Craftly's organizational structure.</p>
      <p className="docs__text">Roles help determine what a member is expected to do, who they report to, what responsibilities they can take on, and who may be responsible for reviewing their work.</p>
      <p className="docs__text">Craftly's roles are not necessarily permanent. They can change as the organization grows and as members demonstrate their ability to take on greater responsibility.</p>
      <p className="docs__text">Role changes may be based on:</p>
      <ul className="docs__list">
        <li>Demonstrated reliability</li>
        <li>Quality of work</li>
        <li>Technical ability</li>
        <li>Leadership ability</li>
        <li>Communication</li>
        <li>Consistency</li>
        <li>Organizational needs</li>
      </ul>
      <p className="docs__text">For example, a member may begin in an entry-level position and, through consistent and reliable work, eventually take on senior or leadership responsibilities.</p>
      <p className="docs__text">The important principle is that a role should reflect the level of responsibility a member is currently trusted to handle.</p>
      <p className="docs__text">Roles therefore connect the individual to the wider reporting structure:</p>
      <p className="docs__text"><strong>Member &rarr; Role &rarr; Department &rarr; Manager &rarr; Organization</strong></p>
      <p className="docs__text">A role is not simply a title. It represents a member's current responsibility and contribution within Craftly.</p>
    </DocsLayout>
  );
}
