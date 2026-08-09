import DocsLayout from '../../DocsLayout';

export default function PrivacyBoundariesPage() {
  return (
    <DocsLayout 
      title="Privacy Boundaries — Craftly Robot"
      description="Privacy Boundaries feature in Craftly Robot"
      tocItems={[
        { id: 'privacy-boundaries', label: 'Privacy Boundaries' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Feature Overview &gt; <strong>Privacy Boundaries</strong>
      </div>

      <h1 className="docs__title" id="privacy-boundaries">Privacy Boundaries</h1>
      <p className="docs__text">Secure communication channels with strict data privacy boundaries.</p>
    </DocsLayout>
  );
}
