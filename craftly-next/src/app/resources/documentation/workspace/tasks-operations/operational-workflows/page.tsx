import type { Metadata } from "next";
import OperationalWorkflowsPage from "@/views/resources/workspace/tasks-operations/OperationalWorkflowsPage";

export const metadata: Metadata = {
  title: "Projects — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <OperationalWorkflowsPage />;
}
