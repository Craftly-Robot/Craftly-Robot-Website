import type { Metadata } from "next";
import RealWorldTaskCoordinationPage from "@/views/resources/robot/feature-overview/RealWorldTaskCoordinationPage";

export const metadata: Metadata = {
  title: "Real-World Task Coordination — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <RealWorldTaskCoordinationPage />;
}
