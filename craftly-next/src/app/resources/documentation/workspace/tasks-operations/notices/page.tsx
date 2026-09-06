import type { Metadata } from "next";
import NoticesPage from "@/views/resources/workspace/tasks-operations/NoticesPage";

export const metadata: Metadata = {
  title: "Notice Board — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <NoticesPage />;
}
