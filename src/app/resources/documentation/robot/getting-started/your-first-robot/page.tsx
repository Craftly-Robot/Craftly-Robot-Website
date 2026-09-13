import type { Metadata } from "next";
import YourFirstRobotPage from "@/views/resources/robot/getting-started/YourFirstRobotPage";

export const metadata: Metadata = {
  title: "Your First Robot — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <YourFirstRobotPage />;
}
