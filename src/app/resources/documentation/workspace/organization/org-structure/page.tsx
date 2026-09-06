import type { Metadata } from "next";
import OrgStructurePage from "@/views/resources/workspace/organization/OrgStructurePage";

export const metadata: Metadata = {
  title: "Organization Structure — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <OrgStructurePage />;
}
