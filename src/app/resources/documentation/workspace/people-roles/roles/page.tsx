import type { Metadata } from "next";
import RolesPage from "@/views/resources/workspace/people-roles/RolesPage";

export const metadata: Metadata = {
  title: "Roles — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <RolesPage />;
}
