import type { Metadata } from "next";
import ReportingCommunicationPage from "@/views/resources/workspace/communication/ReportingCommunicationPage";

export const metadata: Metadata = {
  title: "Reporting-Based Communication — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <ReportingCommunicationPage />;
}
