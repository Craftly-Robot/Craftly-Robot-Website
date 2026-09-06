import type { Metadata } from "next";
import WhatIsRobotPage from "@/views/resources/robot/overview/WhatIsRobotPage";

export const metadata: Metadata = {
  title: "What is Craftly Robot? — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <WhatIsRobotPage />;
}
