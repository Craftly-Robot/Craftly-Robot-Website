import type { Metadata } from "next";
import WorkspaceStructurePage from "@/views/resources/workspace/overview/WorkspaceStructurePage";

export const metadata: Metadata = {
  title: "Workspace Structure — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <WorkspaceStructurePage />;
}
