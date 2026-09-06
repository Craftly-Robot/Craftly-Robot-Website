import type { Metadata } from "next";
import CoreConceptsPage from "@/views/resources/workspace/overview/CoreConceptsPage";

export const metadata: Metadata = {
  title: "Core Concepts — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <CoreConceptsPage />;
}
