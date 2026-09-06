import type { Metadata } from "next";
import OnboardingQuestionsPage from "@/views/resources/workspace/onboarding/OnboardingQuestionsPage";

export const metadata: Metadata = {
  title: "Onboarding Questions — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <OnboardingQuestionsPage />;
}
