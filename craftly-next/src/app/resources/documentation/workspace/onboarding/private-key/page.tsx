import type { Metadata } from "next";
import PrivateKeyPage from "@/views/resources/workspace/onboarding/PrivateKeyPage";

export const metadata: Metadata = {
  title: "Private Key — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <PrivateKeyPage />;
}
