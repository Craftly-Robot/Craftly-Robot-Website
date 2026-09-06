import type { Metadata } from "next";
import ReportingStructurePage from "@/views/resources/workspace/organization/ReportingStructurePage";

export const metadata: Metadata = {
  title: "Reporting Structure — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <ReportingStructurePage />;
}
