import type { Metadata } from "next";
import DeptResourcesPage from "@/views/resources/workspace/resources/DeptResourcesPage";

export const metadata: Metadata = {
  title: "Department Resources — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <DeptResourcesPage />;
}
