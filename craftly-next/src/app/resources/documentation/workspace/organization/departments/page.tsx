import type { Metadata } from "next";
import DepartmentsPage from "@/views/resources/workspace/organization/DepartmentsPage";

export const metadata: Metadata = {
  title: "Departments — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <DepartmentsPage />;
}
