import type { Metadata } from "next";
import NotificationsPage from "@/views/resources/workspace/communication/NotificationsPage";

export const metadata: Metadata = {
  title: "Notifications — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <NotificationsPage />;
}
