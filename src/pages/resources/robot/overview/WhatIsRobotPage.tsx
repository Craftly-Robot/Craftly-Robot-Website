import DocsLayout from '../../DocsLayout';

export default function WhatIsRobotPage() {
  return (
    <DocsLayout 
      title="What is Craftly Robot? â€” Craftly Robot"
      description="What is Craftly Robot? in Craftly Robot"
      tocItems={[
        { id: 'what-is-craftly-robot', label: 'What is Craftly Robot?' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Overview &gt; <strong>What is Craftly Robot?</strong>
      </div>

      <h1 className="docs__title" id="what-is-craftly-robot">What is Craftly Robot?</h1>
      <p className="docs__text">
        Craftly Robot is an AI system being developed to act as a real-world assistant rather than only a conversational model.
      </p>
      <p className="docs__text">
        Its goal is to help users move from understanding a problem &rarr; finding the right resources &rarr; coordinating actions &rarr; completing the task.
      </p>
      <p className="docs__text">
        Robot is designed around capabilities such as:
      </p>
      <ul className="docs__list">
        <li>Intelligent task understanding</li>
        <li>Agent based problem solving</li>
        <li>Real world people and service discovery</li>
        <li>Agent-to-agent negotiation</li>
        <li>Internet style identity and discovery</li>
        <li>Context and memory</li>
        <li>Tool and service interaction</li>
        <li>Human approval and consent before consequential actions</li>
      </ul>
      <p className="docs__text">
        Robot is currently under active research and development, so its capabilities and architecture will continue to evolve.
      </p>
    </DocsLayout>
  );
}
