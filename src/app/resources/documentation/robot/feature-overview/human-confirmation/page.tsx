import type { Metadata } from "next";
import HumanConfirmationPage from "@/views/resources/robot/feature-overview/HumanConfirmationPage";

export const metadata: Metadata = {
  title: "Human Confirmation — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <HumanConfirmationPage />;
}
