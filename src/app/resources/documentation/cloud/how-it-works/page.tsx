import type { Metadata } from "next";
import CloudHowItWorksPage from "@/views/resources/cloud/CloudHowItWorksPage";

export const metadata: Metadata = {
  title: "How It Works — Craftly Cloud Documentation",
  description: "Technical architecture and execution model of Craftly Cloud.",
};

export default function Page() {
  return <CloudHowItWorksPage />;
}
