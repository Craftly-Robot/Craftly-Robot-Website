import { onboardingQuestions } from "../../../../data/docs/onboarding-questions";
import { onboardingScreenshots } from "../../../../data/docs/workspaceScreenshots";
import WorkspaceScreenshot from "../../../../components/docs/WorkspaceScreenshot";
import DocPage from "../../DocPage";

export default function OnboardingQuestionsPage() {
  return (
    <DocPage
      title="Onboarding Questions — Craftly Workspace"
      description="Onboarding Questions in Craftly Workspace"
      crumbs={["Documentation", "Craftly Workspace", "Onboarding", "Onboarding Questions"]}
      pageId="onboarding-questions"
      pageTitle="Onboarding Questions"
      tocItems={[
        { id: "onboarding-questions", label: "Onboarding Questions" },
        { id: "q-1", label: "1. Full Legal Name" },
        { id: "q-2", label: "2. Gender" },
        { id: "q-3", label: "3. Date of Birth" },
        { id: "q-4", label: "4. Institution Level" },
        { id: "q-5", label: "5. Institution Name" },
        { id: "q-6", label: "6. WhatsApp Number" },
        { id: "q-7", label: "7. Social Media Profile" },
        { id: "q-8", label: "8. Email Address" },
        { id: "q-9", label: "9. Department" },
        { id: "q-10", label: "10. Problem-Solving & Execution" },
        { id: "q-11", label: "9. Work Approach" },
        { id: "q-12", label: "10. AI Development Prompt" },
        { id: "q-13", label: "11. Daily Availability" },
        { id: "q-14", label: "12. Working Style" },
        { id: "q-15", label: "13. Department Choice" },
        { id: "q-16", label: "14. Hardest Achievement" },
        { id: "q-17", label: "15. Technical Achievement" },
        { id: "q-18", label: "16. Goals at Craftly" },
        { id: "q-19", label: "17. Harmful Social Media Content" },
        { id: "q-20", label: "18. Unfair Instructions" },
        { id: "q-21", label: "19. Confirmation of Information" },
        { id: "q-22", label: "20. Onboarding Questions Completed" },
      ]}
    >
      <h2
        className="docs__subtitle"
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginTop: "24px",
          marginBottom: "16px",
        }}
      >
        How the Onboarding Questions Work
      </h2>
      <p className="docs__text">
        Once you choose “I want to join”, the Craftly onboarding assistant will
        guide you through a series of questions one step at a time. Answer each
        question clearly and follow the format requested by the assistant. After
        some answers, the assistant may ask you to confirm the information
        before continuing.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          margin: "32px 0",
        }}
      >
        {onboardingQuestions.map((q) => {
          const screenshot = onboardingScreenshots[q.id];

          return (
            <div
              key={q.id}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Text above the image */}
              {q.textAbove ? (
                <div>{q.textAbove}</div>
              ) : (
                <div
                  className="docs__text-placeholder"
                  style={{ minHeight: "24px" }}
                ></div>
              )}

              {screenshot ? (
                <WorkspaceScreenshot screenshot={screenshot} />
              ) : (
                <p className="docs__text">
                  A screenshot for this step is not available yet. Follow the instructions above to continue.
                </p>
              )}

              {/* Text below the image */}
              {q.textBelow ? (
                <div>{q.textBelow}</div>
              ) : (
                <div
                  className="docs__text-placeholder"
                  style={{ minHeight: "24px" }}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </DocPage>
  );
}
