import DocsLayout from '../../DocsLayout';

export default function DepartmentsPage() {
  return (
    <DocsLayout 
      title="Departments â€” Craftly Workspace"
      description="Departments in Craftly Workspace"
      tocItems={[
        { id: 'departments', label: 'Departments' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Organization &gt; <strong>Departments</strong>
      </div>

      <h1 className="docs__title" id="departments">Departments</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
