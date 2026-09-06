import type { Metadata } from "next";
import AgenticAIPage from "@/views/resources/robot/feature-overview/AgenticAIPage";

export const metadata: Metadata = {
  title: "Agentic AI — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <AgenticAIPage />;
}
