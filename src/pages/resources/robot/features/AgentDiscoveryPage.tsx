import DocsLayout from '../../DocsLayout';

export default function AgentDiscoveryPage() {
  return (
    <DocsLayout 
      title="Agent Discovery — Craftly Robot"
      description="Agent Discovery feature in Craftly Robot"
      tocItems={[
        { id: 'agent-discovery', label: 'Agent Discovery' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Feature Overview &gt; <strong>Agent Discovery</strong>
      </div>

      <h1 className="docs__title" id="agent-discovery">Agent Discovery</h1>
      <p className="docs__text">Dynamically find and connect with other agents on the network.</p>
    </DocsLayout>
  );
}
