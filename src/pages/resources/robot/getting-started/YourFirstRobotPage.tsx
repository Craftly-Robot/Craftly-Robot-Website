import DocsLayout from '../../DocsLayout';

export default function YourFirstRobotPage() {
  return (
    <DocsLayout 
      title="Your First Robot â€” Craftly Robot"
      description="Your First Robot in Craftly Robot"
      tocItems={[
        { id: 'your-first-robot', label: 'Your First Robot' }
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Robot &gt; Getting Started &gt; <strong>Your First Robot</strong>
      </div>

      <h1 className="docs__title" id="your-first-robot">Your First Robot</h1>
      <p className="docs__text">
        After signing in, you can start interacting with your Robot.
      </p>
      <p className="docs__text">
        Craftly Robot is a real AI system, not a simple chatbot.
      </p>
      <p className="docs__text">
        Like ChatGPT and other modern AI assistants, Robot can understand natural language, reason about requests, maintain conversational context, and respond naturally.
      </p>
      <p className="docs__text">
        The important difference is what happens after the response.
      </p>
      <p className="docs__text">
        A conventional conversational interaction often looks like:
      </p>
      <div className="docs__code">
        User &rarr; AI &rarr; Answer
      </div>
      <p className="docs__text">
        Craftly Robot is designed around a broader agentic loop:
      </p>
      <div className="docs__code">
        User &rarr; Understand &rarr; Reason &rarr; Discover &rarr; Communicate &rarr; Coordinate &rarr; Result
      </div>
      <p className="docs__text">
        The purpose is to allow the conversation to become the beginning of an actual workflow.
      </p>

      <h2 className="docs__subtitle">Robot as an Agent</h2>
      <p className="docs__text">
        An AI agent is generally more than a model generating text. Modern agent architectures combine a model with instructions, tools, execution loops, state, and safety controls so the system can perform work rather than only generate responses.
      </p>
      <p className="docs__text">
        Craftly Robot follows this broader direction.
      </p>
      <p className="docs__text">
        Your Robot can use your request as a goal, determine what information is required, identify relevant participants, communicate with other agents, and coordinate the next steps.
      </p>

      <h2 className="docs__subtitle">A Simple Example</h2>
      <p className="docs__text">
        Imagine you say:
      </p>
      <blockquote className="docs__quote">
        “I need a BUET teacher for a Class 9 student who can teach four days a week for a monthly salary of ৳5,000.”
      </blockquote>
      <p className="docs__text">
        Robot can understand that this is not simply a question.
      </p>
      <p className="docs__text">
        It is a real world request with constraints.
      </p>
      <p className="docs__text">
        The system can identify:
      </p>
      <ul className="docs__list">
        <li>The service required</li>
        <li>The student's level</li>
        <li>The qualification requirement</li>
        <li>The schedule</li>
        <li>The budget</li>
        <li>Other relevant conditions</li>
      </ul>
      <p className="docs__text">
        From there, Robot can move into discovery and coordination.
      </p>
      <p className="docs__text">
        That is the core idea behind Craftly Robot:
      </p>
      <p className="docs__text">
        <strong>The user provides the goal; the agent works through the coordination required to pursue it.</strong>
      </p>
    </DocsLayout>
  );
}
