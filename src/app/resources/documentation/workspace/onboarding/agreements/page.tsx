import type { Metadata } from "next";
import AgreementsPage from "@/views/resources/workspace/onboarding/AgreementsPage";

export const metadata: Metadata = {
  title: "Agreements — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <AgreementsPage />;
}
