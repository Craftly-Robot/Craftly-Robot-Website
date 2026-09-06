import type { Metadata } from "next";
import CompletingOnboardingPage from "@/views/resources/workspace/onboarding/CompletingOnboardingPage";

export const metadata: Metadata = {
  title: "Completing Onboarding — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <CompletingOnboardingPage />;
}
