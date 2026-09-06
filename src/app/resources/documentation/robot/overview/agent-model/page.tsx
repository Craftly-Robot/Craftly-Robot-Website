import type { Metadata } from "next";
import AgentModelPage from "@/views/resources/robot/overview/AgentModelPage";

export const metadata: Metadata = {
  title: "Agent Model — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <AgentModelPage />;
}
