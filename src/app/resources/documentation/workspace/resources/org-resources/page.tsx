import type { Metadata } from "next";
import OrgResourcesPage from "@/views/resources/workspace/resources/OrgResourcesPage";

export const metadata: Metadata = {
  title: "Organization Resources — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <OrgResourcesPage />;
}
