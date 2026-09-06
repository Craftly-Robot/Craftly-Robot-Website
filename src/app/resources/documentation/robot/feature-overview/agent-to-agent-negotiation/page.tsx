import type { Metadata } from "next";
import AgentNegotiationPage from "@/views/resources/robot/feature-overview/AgentNegotiationPage";

export const metadata: Metadata = {
  title: "Agent-to-Agent Negotiation — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <AgentNegotiationPage />;
}
