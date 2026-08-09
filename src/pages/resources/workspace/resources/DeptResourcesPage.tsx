import DocsLayout from '../../DocsLayout';

export default function DeptResourcesPage() {
  return (
    <DocsLayout 
      title="Department Resources â€” Craftly Workspace"
      description="Department Resources in Craftly Workspace"
      tocItems={[
        { id: 'department-resources', label: 'Department Resources' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Resources &gt; <strong>Department Resources</strong>
      </div>

      <h1 className="docs__title" id="department-resources">Department Resources</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
