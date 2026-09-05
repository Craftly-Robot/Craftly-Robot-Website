import DocPage from "../../DocPage";
import WorkspaceScreenshot from "../../../../components/docs/WorkspaceScreenshot";
import { workspaceScreenshots } from "../../../../data/docs/workspaceScreenshots";

export default function CompletingOnboardingPage() {
  return (
    <DocPage
      title="Completing Onboarding — Craftly Workspace"
      description="Completing Onboarding in Craftly Workspace"
      crumbs={["Documentation", "Craftly Workspace", "Onboarding", "Completing Onboarding"]}
      pageId="completing-onboarding"
      pageTitle="Completing Onboarding"
      tocItems={[
        { id: "completing-onboarding", label: "Completing Onboarding" },
      ]}
    >
      <p className="docs__text">
        Congratulations your Craftly onboarding is now complete.
      </p>

      <p className="docs__text">
        From here, there is nothing else you need to rush. Wait for your
        organizational position to be assigned and stay ready to begin your
        responsibilities.
      </p>

      <p className="docs__text">Once you receive your position:</p>

      <ul className="docs__list">
        <li>Understand your role and responsibilities clearly.</li>
        <li>Stay active and involved in your unit.</li>
        <li>Complete your assigned work responsibly.</li>
        <li>Stay dedicated and sincere toward your responsibilities.</li>
        <li>Communicate clearly with your team and leadership.</li>
        <li>Ask for help when you are unsure or blocked.</li>
        <li>
          Keep improving your skills and understanding of the organization.
        </li>
        <li>
          Maintain better communication, consistency, and professionalism.
        </li>
      </ul>

      <p className="docs__text">
        Your position is not just a title it represents a responsibility within
        the organization.
      </p>

      <p className="docs__text" style={{ fontWeight: 600 }}>
        Stay active. Understand your work. Stay dedicated. Communicate well.
        Keep learning. Keep contributing.
      </p>

      <WorkspaceScreenshot screenshot={workspaceScreenshots.welcomeComplete} />
      <WorkspaceScreenshot screenshot={workspaceScreenshots.workspaceHome} />
    </DocPage>
  );
}
