import type { Metadata } from "next";
import AgentNegotiationGSPage from "@/views/resources/robot/getting-started/AgentNegotiationGSPage";

export const metadata: Metadata = {
  title: "Agent-to-Agent Negotiation — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <AgentNegotiationGSPage />;
}
