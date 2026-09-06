import type { Metadata } from "next";
import TasksPage from "@/views/resources/workspace/tasks-operations/TasksPage";

export const metadata: Metadata = {
  title: "Tasks — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <TasksPage />;
}
