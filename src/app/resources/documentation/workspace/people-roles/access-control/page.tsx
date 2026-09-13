import type { Metadata } from "next";
import AccessControlPage from "@/views/resources/workspace/people-roles/AccessControlPage";

export const metadata: Metadata = {
  title: "Access Control — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <AccessControlPage />;
}
