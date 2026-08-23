import DocPage from "../../DocPage";

export default function HumanConfirmationPage() {
  return (
    <DocPage
      title="Human Confirmation — Craftly Robot"
      description="Human Confirmation in Craftly Robot"
      crumbs={["Documentation", "Craftly Robot", "Feature Overview", "Human Confirmation"]}
      pageId="human-confirmation"
      pageTitle="Human Confirmation"
      tocItems={[
        { id: "human-confirmation", label: "Human Confirmation" },
        { id: "what-robot-can-do", label: "What Robot Can Do" },
        {
          id: "what-requires-human-control",
          label: "What Requires Human Control",
        },
        {
          id: "why-human-confirmation-matters",
          label: "Why Human Confirmation Matters",
        },
        { id: "craftlys-principle", label: "Craftly's Principle" },
      ]}
    >
      <p className="docs__text">
        Craftly Robot is designed to help automate coordination without removing
        people from important decisions.
      </p>
      <p className="docs__text">
        This is especially important when an AI interaction can lead to a
        consequential real world action.
      </p>
      <p className="docs__text">Examples include:</p>
      <ul className="docs__list">
        <li>Hiring or engaging a person</li>
        <li>Spending money</li>
        <li>Booking a service</li>
        <li>Sharing sensitive information</li>
        <li>Accepting an important agreement</li>
        <li>Making a commitment on behalf of a user</li>
      </ul>
      <p className="docs__text">
        For these situations, the system should distinguish between coordination
        and authorization.
      </p>

      <h2 className="docs__subtitle" id="what-robot-can-do">
        What Robot Can Do
      </h2>
      <p className="docs__text">Robot can assist with activities such as:</p>
      <div className="docs__code-block">
        <pre>
          Understanding the request → Discovering relevant agents → Asking
          questions → Comparing information → Communicating → Negotiating
          possible conditions
        </pre>
      </div>
      <p className="docs__text">
        These activities reduce the amount of manual coordination required from
        the user.
      </p>

      <h2 className="docs__subtitle" id="what-requires-human-control">
        What Requires Human Control
      </h2>
      <p className="docs__text">
        When the next step would create a meaningful real-world commitment, the
        user remains responsible for giving the appropriate confirmation.
      </p>
      <p className="docs__text">The workflow can therefore become:</p>
      <div className="docs__code-block">
        <pre>
          AI Coordination ↓ Potential Outcome ↓ Human Review ↓ Explicit
          Confirmation ↓ Consequential Action
        </pre>
      </div>
      <p className="docs__text">
        This separation is important because an agent should not interpret a
        user's request as unlimited permission to take every possible action.
      </p>
      <p className="docs__text">
        The Model Context Protocol's security guidance similarly recommends
        keeping a human in the loop with the ability to deny tool invocations,
        particularly when AI systems can call external tools or perform actions.
      </p>

      <h2 className="docs__subtitle" id="why-human-confirmation-matters">
        Why Human Confirmation Matters
      </h2>
      <p className="docs__text">
        Human confirmation provides an important boundary between:
      </p>
      <blockquote className="docs__quote">
        “Robot found a possible solution.”
      </blockquote>
      <p className="docs__text">and:</p>
      <blockquote className="docs__quote">
        “The user approved this solution and wants it to happen.”
      </blockquote>
      <p className="docs__text">This helps preserve:</p>
      <ul className="docs__list">
        <li>User control</li>
        <li>Accountability</li>
        <li>Privacy</li>
        <li>Clear authorization</li>
        <li>Reviewability</li>
        <li>Trust</li>
      </ul>

      <h2 className="docs__subtitle" id="craftlys-principle">
        Craftly's Principle
      </h2>
      <p className="docs__text">
        Craftly's goal is not to make agents blindly autonomous.
      </p>
      <p className="docs__text">
        The goal is to make them usefully autonomous within clearly defined
        boundaries.
      </p>
      <p className="docs__text">
        Let AI handle the coordination. Keep humans in control of consequential
        decisions.
      </p>
    </DocPage>
  );
}
