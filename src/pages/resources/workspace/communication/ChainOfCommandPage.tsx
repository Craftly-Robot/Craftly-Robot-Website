import DocsLayout from "../../DocsLayout";

export default function ChainOfCommandPage() {
  return (
    <DocsLayout
      title="Chain of Command — Craftly Workspace"
      description="Chain of Command in Craftly Workspace"
      tocItems={[{ id: "chain-of-command", label: "Chain of Command" }]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Communication &gt;{" "}
        <strong>Chain of Command</strong>
      </div>

      <h1 className="docs__title" id="chain-of-command">
        Chain of Command
      </h1>
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
    </DocsLayout>
  );
}
