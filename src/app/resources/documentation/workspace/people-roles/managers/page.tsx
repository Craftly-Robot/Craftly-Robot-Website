import type { Metadata } from "next";
import ManagersPage from "@/views/resources/workspace/people-roles/ManagersPage";

export const metadata: Metadata = {
  title: "Managers — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <ManagersPage />;
}
