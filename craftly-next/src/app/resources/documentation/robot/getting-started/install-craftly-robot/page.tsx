import type { Metadata } from "next";
import InstallCraftlyRobotPage from "@/views/resources/robot/getting-started/InstallCraftlyRobotPage";

export const metadata: Metadata = {
  title: "Install Craftly Robot — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <InstallCraftlyRobotPage />;
}
