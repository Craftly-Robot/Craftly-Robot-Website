import type { Metadata } from "next";
import AgentNegotiationPageView from "@/views/use-cases/AgentNegotiationPage";

export const metadata: Metadata = {
  title: "Agent Negotiation",
  description:
    "Complex tasks managed through intelligent agent negotiation.",
};

export default function Page() {
  return <AgentNegotiationPageView />;
}
