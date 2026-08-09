import DocsLayout from '../../DocsLayout';

export default function CurrentStatusPage() {
  return (
    <DocsLayout 
      title="Current Status â€” Craftly Robot"
      description="Current Status in Craftly Robot"
      tocItems={[
        { id: 'current-status', label: 'Current Status' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Overview &gt; <strong>Current Status</strong>
      </div>

      <h1 className="docs__title" id="current-status">Current Status</h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
