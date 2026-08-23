import { useState } from "react";
import DocsLayout from "../../DocsLayout";
import { onboardingQuestions } from "../../../../data/docs/onboarding-questions";

export default function OnboardingQuestionsPage() {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const questionsData = onboardingQuestions;

  return (
    <DocsLayout
      title="Onboarding Questions — Craftly Workspace"
      description="Onboarding Questions in Craftly Workspace"
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
      <div className="docs__breadcrumb">
        Documentation &gt; Craftly Workspace &gt; Onboarding &gt;{" "}
        <strong>Onboarding Questions</strong>
      </div>

      <h1 className="docs__title" id="onboarding-questions">
        Onboarding Questions
      </h1>

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
        {questionsData.map((q) => (
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

            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid #eaeaeb",
                backgroundColor: "#f8f9fa",
                minHeight: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {imgErrors[q.id] ? (
                <p style={{ color: "#5f6368", fontFamily: "inherit" }}>
                  Image placeholder: /assets/onboarding_pic/{q.id}.png
                </p>
              ) : (
                <img
                  src={`/assets/onboarding_pic/${q.id}.webp`}
                  alt={`Onboarding Question ${q.id}`}
                  loading="lazy"
                  style={{ width: "100%", display: "block" }}
                  onError={() =>
                    setImgErrors((prev) => ({ ...prev, [q.id]: true }))
                  }
                />
              )}
            </div>

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
        ))}
      </div>
    </DocsLayout>
  );
}
