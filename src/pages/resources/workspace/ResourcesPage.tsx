import DocsLayout from '../DocsLayout';

export default function ResourcesPage() {
  return (
    <DocsLayout 
      title="Resources — Craftly Workspace"
      description="Resources in Craftly Workspace"
      tocItems={[
        { id: 'organization-resources', label: 'Organization Resources' },
        { id: 'department-resources', label: 'Department Resources' },
        { id: 'training', label: 'Training' },
        { id: 'training-participation', label: 'Training Participation' },
        { id: 'resource-access', label: 'Resource Access' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; <strong>Resources</strong>
      </div>

      <h1 className="docs__title" id="resources">Resources</h1>
      
      <h2 id="organization-resources" className="docs__section-title">Organization Resources</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="department-resources" className="docs__section-title">Department Resources</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="training" className="docs__section-title">Training</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="training-participation" className="docs__section-title">Training Participation</h2>
      <p className="docs__text">Content coming soon...</p>

      <h2 id="resource-access" className="docs__section-title">Resource Access</h2>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
