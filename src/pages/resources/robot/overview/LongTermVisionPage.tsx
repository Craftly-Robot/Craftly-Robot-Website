import DocsLayout from '../../DocsLayout';

export default function LongTermVisionPage() {
  return (
    <DocsLayout 
      title="Long-Term Vision — Craftly Robot"
      description="Long-Term Vision in Craftly Robot"
      tocItems={[
        { id: 'long-term-vision', label: 'Long-Term Vision' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Overview &gt; <strong>Long-Term Vision</strong>
      </div>

      <h1 className="docs__title" id="long-term-vision">Long-Term Vision</h1>
      <p className="docs__text">
        The long term vision for Craftly Robot is to build a general-purpose AI coordination layer for the real world.
      </p>
      <p className="docs__text">
        Robot should eventually be able to help a person or organization:
      </p>
      <p className="docs__text">
        Describe a goal &rarr; discover the right resources &rarr; coordinate agents and services &rarr; obtain human approval &rarr; execute the work &rarr; verify the result.
      </p>
      <p className="docs__text">
        Internet style identity, discovery, and agent negotiation are part of this long-term direction.
      </p>
      <p className="docs__text">
        The goal is not simply to build another chatbot, but to create infrastructure where people, AI agents, and services can safely discover, communicate, negotiate, and work together.
      </p>
    </DocsLayout>
  );
}
