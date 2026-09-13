import type { Metadata } from "next";
import ChainOfCommandPage from "@/views/resources/workspace/communication/ChainOfCommandPage";

export const metadata: Metadata = {
  title: "Chain of Command — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <ChainOfCommandPage />;
}
