import type { Metadata } from "next";
import MembersPage from "@/views/resources/workspace/people-roles/MembersPage";

export const metadata: Metadata = {
  title: "Members — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <MembersPage />;
}
