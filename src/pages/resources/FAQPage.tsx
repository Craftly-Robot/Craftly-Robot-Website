import DocsLayout from './DocsLayout';

export default function FAQPage() {
  return (
    <DocsLayout 
      title="FAQ" 
      description="Frequently asked questions about Craftly Workspace and Robot."
      tocItems={[
        { id: "general", label: "General" }
      ]}
    >
      <div className="docs__breadcrumb">
        Craftly Documentation &gt; <strong>FAQ</strong>
      </div>
      
      <h1 className="docs__title">Frequently Asked Questions</h1>
      
      <p className="docs__text">
        Find answers to common questions about Craftly's ecosystem.
      </p>

      <h2 id="general" className="docs__section-title">General</h2>
      
      <h3 className="docs__section-title" style={{ fontSize: '18px', marginTop: '24px' }}>What is Craftly?</h3>
      <p className="docs__text">
        Craftly is an ecosystem comprising Craftly Workspace and Craftly Robot, designed to streamline operations and agentic workflows.
      </p>

    </DocsLayout>
  );
}
