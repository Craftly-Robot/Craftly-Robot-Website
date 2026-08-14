import DocsLayout from '../../DocsLayout';

export default function RunFirstTaskPage() {
  return (
    <DocsLayout 
      title="Run Your First Real-World Task â€” Craftly Robot"
      description="Run Your First Real-World Task in Craftly Robot"
      tocItems={[
        { id: 'run-first-task', label: 'Run Your First Real-World Task' },
        { id: 'structure-of-a-good-request', label: 'Structure of a Good Request' },
        { id: 'example', label: 'Example' },
        { id: 'what-happens-after-you-ask', label: 'What Happens After You Ask?' },
        { id: 'when-robot-needs-clarification', label: 'When Robot Needs Clarification' },
        { id: 'understanding-the-result', label: 'Understanding the Result' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Run Your First Real-World Task</strong>
      </div>

      <h1 className="docs__title" id="run-first-task">Run Your First Real-World Task</h1>
      <p className="docs__text">
        The best way to understand Craftly Robot is to give it a real objective.
      </p>
      <p className="docs__text">
        You do not need to tell Robot every internal step.
      </p>
      <p className="docs__text">
        Instead, describe:
      </p>
      <p className="docs__text">
        <strong>What you want + what matters + what constraints apply.</strong>
      </p>

      <h2 className="docs__subtitle" id="structure-of-a-good-request">Structure of a Good Request</h2>
      <p className="docs__text">
        A useful request usually contains:
      </p>
      <ul className="docs__list">
        <li><strong>Goal:</strong> What are you trying to accomplish?</li>
        <li><strong>Requirements:</strong> What must be true for the result to be useful?</li>
        <li><strong>Constraints:</strong> What should Robot respect or avoid?</li>
        <li><strong>Schedule:</strong> When does the work need to happen?</li>
        <li><strong>Budget:</strong> What financial limit or expectation applies?</li>
        <li><strong>Preferences:</strong> Are there additional conditions that matter to you?</li>
      </ul>

      <h2 className="docs__subtitle" id="example">Example</h2>
      <p className="docs__text">
        Less useful:
      </p>
      <blockquote className="docs__quote">
        “Find me a teacher.”
      </blockquote>
      <p className="docs__text">
        More useful:
      </p>
      <blockquote className="docs__quote">
        “Find a BUET teacher for a Class 9 student who can teach four days a week for a monthly salary of ৳5,000.”
      </blockquote>
      <p className="docs__text">
        The second request gives Robot enough context to determine what kind of discovery and coordination is required.
      </p>

      <h2 className="docs__subtitle" id="what-happens-after-you-ask">What Happens After You Ask?</h2>
      <p className="docs__text">
        A typical workflow can look like:
      </p>
      <div className="docs__code">
        Your Goal<br/>
        &darr;<br/>
        Understand Requirements<br/>
        &darr;<br/>
        Identify Missing Information<br/>
        &darr;<br/>
        Discover Relevant Agents<br/>
        &darr;<br/>
        Communicate<br/>
        &darr;<br/>
        Check Compatibility<br/>
        &darr;<br/>
        Negotiate / Coordinate<br/>
        &darr;<br/>
        Present the Result<br/>
        &darr;<br/>
        Human Review / Consent<br/>
        &darr;<br/>
        Approved Real World Action
      </div>
      <p className="docs__text">
        The exact workflow depends on the task.
      </p>
      <p className="docs__text">
        A simple request may only require information retrieval.
      </p>
      <p className="docs__text">
        A more complex request may require multiple agents, multiple rounds of communication, and a human decision before any consequential action can occur.
      </p>

      <h2 className="docs__subtitle" id="when-robot-needs-clarification">When Robot Needs Clarification</h2>
      <p className="docs__text">
        A good agent should not blindly act on an incomplete instruction.
      </p>
      <p className="docs__text">
        For example:
      </p>
      <blockquote className="docs__quote">
        “Find someone to help me with my studies.”
      </blockquote>
      <p className="docs__text">
        Robot may need to ask:
      </p>
      <ul className="docs__list">
        <li>What subject?</li>
        <li>What level?</li>
        <li>What schedule?</li>
        <li>Online or in person?</li>
        <li>What budget?</li>
        <li>What qualifications matter?</li>
      </ul>
      <p className="docs__text">
        This is part of the agentic workflow.
      </p>
      <p className="docs__text">
        Clarification is not failure. It is how the system avoids making unnecessary assumptions.
      </p>

      <h2 className="docs__subtitle" id="understanding-the-result">Understanding the Result</h2>
      <p className="docs__text">
        When Robot returns a result, you should be able to understand:
      </p>
      <ul className="docs__list">
        <li>What it found</li>
        <li>Why the result may be relevant</li>
        <li>Which requirements were satisfied</li>
        <li>Which requirements remain uncertain</li>
        <li>What action would happen next</li>
        <li>Whether your approval is required</li>
      </ul>
      <p className="docs__text">
        This makes the transition from AI output &rarr; real-world action understandable and reviewable.
      </p>
    </DocsLayout>
  );
}
