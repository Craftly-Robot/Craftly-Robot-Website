import type { Metadata } from "next";
import TaskAssignmentPage from "@/views/resources/workspace/tasks-operations/TaskAssignmentPage";

export const metadata: Metadata = {
  title: "Task Assignment — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <TaskAssignmentPage />;
}
