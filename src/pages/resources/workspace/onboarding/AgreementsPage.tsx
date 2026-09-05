import DocPage from "../../DocPage";
import WorkspaceScreenshot from "../../../../components/docs/WorkspaceScreenshot";
import { workspaceScreenshots } from "../../../../data/docs/workspaceScreenshots";

export default function AgreementsPage() {
  return (
    <DocPage
      title="Agreements — Craftly Workspace"
      description="Agreements in Craftly Workspace"
      crumbs={["Documentation", "Craftly Workspace", "Onboarding", "Agreements"]}
      pageId="agreements"
      pageTitle="Agreements"
      tocItems={[
        { id: "agreements", label: "Agreements" },
        { id: "read-before-joining", label: "Read Before Joining" },
      ]}
    >
      <p className="docs__text">
        After completing the onboarding process, you will receive your Private
        Key and access to Craftly Workspace.
      </p>

      <p className="docs__text">
        Use your Private Key to log in to Workspace. After logging in, you will
        be presented with the Craftly Membership Agreement.
      </p>

      <h2 className="docs__section-title" id="read-before-joining">
        Read Before Joining
      </h2>

      <p className="docs__text">
        The agreement contains the terms, responsibilities, expectations, and
        conditions of joining Craftly.
      </p>

      <p className="docs__text">
        Please read the entire agreement carefully before proceeding.
      </p>

      <p className="docs__text">
        If you understand and agree to the terms and genuinely want to join
        Craftly, you can complete the agreement by providing your Digital
        Signature.
      </p>

      <p className="docs__text">
        Once the agreement has been signed successfully, you can continue using
        your Craftly Workspace account as a member.
      </p>

      <div
        className="docs__code-block"
        style={{
          padding: "24px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
          textAlign: "center",
          fontWeight: "500",
          marginBottom: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div>Onboarding Complete</div>
        <div>&darr;</div>
        <div>Private Key</div>
        <div>&darr;</div>
        <div>Workspace Login</div>
        <div>&darr;</div>
        <div>Read Agreement</div>
        <div>&darr;</div>
        <div>Digital Signature</div>
        <div>&darr;</div>
        <div>Craftly Membership</div>
      </div>

      <WorkspaceScreenshot screenshot={workspaceScreenshots.agreement} />
      <WorkspaceScreenshot screenshot={workspaceScreenshots.signature} />
    </DocPage>
  );
}
