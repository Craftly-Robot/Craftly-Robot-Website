import type { Metadata } from "next";
import PermissionsPage from "@/views/resources/workspace/people-roles/PermissionsPage";

export const metadata: Metadata = {
  title: "Permissions — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <PermissionsPage />;
}
