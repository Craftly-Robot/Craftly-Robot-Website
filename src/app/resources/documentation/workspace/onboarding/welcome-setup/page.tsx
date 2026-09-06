import type { Metadata } from "next";
import WelcomeSetupPage from "@/views/resources/workspace/onboarding/WelcomeSetupPage";

export const metadata: Metadata = {
  title: "Welcome & Setup — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <WelcomeSetupPage />;
}
