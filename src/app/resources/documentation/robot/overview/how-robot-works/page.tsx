import type { Metadata } from "next";
import HowRobotWorksPage from "@/views/resources/robot/overview/HowRobotWorksPage";

export const metadata: Metadata = {
  title: "How Robot Works — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <HowRobotWorksPage />;
}
