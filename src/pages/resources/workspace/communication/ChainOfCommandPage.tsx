import DocPage from "../../DocPage";

export default function ChainOfCommandPage() {
  return (
    <DocPage
      title="Chain of Command — Craftly Workspace"
      description="Chain of Command in Craftly Workspace"
      crumbs={[
        "Documentation",
        "Craftly Workspace",
        "Communication",
        "Chain of Command",
      ]}
      pageId="chain-of-command"
      pageTitle="Chain of Command"
      tocItems={[{ id: "chain-of-command", label: "Chain of Command" }]}
    >
      <p className="docs__text">
        The Chain of Command is Craftly's formal hierarchy for passing
        instructions, responsibilities, and decisions through the organization.
        It ensures that tasks move through clear levels of authority instead of
        being assigned randomly.
      </p>

      <p className="docs__text">The flow generally follows:</p>
      <p className="docs__text">
        <strong>
          Chairman → MD → CEO → C-Suite → Senior → Junior → Executive
        </strong>
      </p>

      <p className="docs__text">
        A manager or Unit Leader can pass responsibilities to the members under
        them, while members can report progress, blockers, and completed work
        back through the same structure.
      </p>

      <p className="docs__text">
        The Chain of Command is not about blind obedience. It exists to keep
        responsibilities clear, make decisions traceable, and ensure that every
        task has an accountable owner.
      </p>
    </DocPage>
  );
}
