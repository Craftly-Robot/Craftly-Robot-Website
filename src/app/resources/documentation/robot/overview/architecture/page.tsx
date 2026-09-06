import type { Metadata } from "next";
import RobotArchitecturePage from "@/views/resources/robot/overview/RobotArchitecturePage";

export const metadata: Metadata = {
  title: "Architecture — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <RobotArchitecturePage />;
}
