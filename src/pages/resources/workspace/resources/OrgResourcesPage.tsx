import DocsLayout from "../../DocsLayout";

export default function OrgResourcesPage() {
  return (
    <DocsLayout
      title="Organization Resources — Craftly Workspace"
      description="Organization Resources in Craftly Workspace"
      tocItems={[
        { id: "organization-resources", label: "Organization Resources" },
      ]}
    >
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Resources &gt;{" "}
        <strong>Organization Resources</strong>
      </div>

      <h1 className="docs__title" id="organization-resources">
        Organization Resources
      </h1>
      <p className="docs__text">Content coming soon...</p>
    </DocsLayout>
  );
}
