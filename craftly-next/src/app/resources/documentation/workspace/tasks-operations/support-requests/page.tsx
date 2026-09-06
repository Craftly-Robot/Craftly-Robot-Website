import type { Metadata } from "next";
import SupportRequestsPage from "@/views/resources/workspace/tasks-operations/SupportRequestsPage";

export const metadata: Metadata = {
  title: "Support Requests — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <SupportRequestsPage />;
}
