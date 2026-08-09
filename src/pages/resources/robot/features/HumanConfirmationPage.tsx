import DocsLayout from '../../DocsLayout';

export default function HumanConfirmationPage() {
  return (
    <DocsLayout 
      title="Human Confirmation — Craftly Robot"
      description="Human Confirmation feature in Craftly Robot"
      tocItems={[
        { id: 'human-confirmation', label: 'Human Confirmation' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Feature Overview &gt; <strong>Human Confirmation</strong>
      </div>

      <h1 className="docs__title" id="human-confirmation">Human Confirmation</h1>
      <p className="docs__text">Require human approval for critical actions and decisions.</p>
    </DocsLayout>
  );
}
