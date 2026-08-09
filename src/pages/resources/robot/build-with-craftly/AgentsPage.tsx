import DocsLayout from '../../DocsLayout';

export default function AgentsPage() {
  return (
    <DocsLayout 
      title="Agents â€” Craftly Robot"
      description="Agents in Craftly Robot"
      tocItems={[
        { id: 'agents', label: 'Agents' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Build With Craftly &gt; <strong>Agents</strong>
      </div>

      <h1 className="docs__title" id="agents">Agents</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
