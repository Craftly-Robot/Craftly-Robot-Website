import type { Metadata } from "next";
import TaskEvidencePage from "@/views/resources/workspace/tasks-operations/TaskEvidencePage";

export const metadata: Metadata = {
  title: "Task Evidence — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <TaskEvidencePage />;
}
