import type { Metadata } from "next";
import CloudSecurityPrivacyPage from "@/views/resources/cloud/CloudSecurityPrivacyPage";

export const metadata: Metadata = {
  title: "Security & Privacy — Craftly Cloud Documentation",
  description: "Security, isolation, and privacy principles of Craftly Cloud.",
};

export default function Page() {
  return <CloudSecurityPrivacyPage />;
}
