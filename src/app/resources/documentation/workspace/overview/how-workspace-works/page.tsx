import type { Metadata } from "next";
import HowWorkspaceWorksPage from "@/views/resources/workspace/overview/HowWorkspaceWorksPage";

export const metadata: Metadata = {
  title: "How Workspace Works? — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <HowWorkspaceWorksPage />;
}
