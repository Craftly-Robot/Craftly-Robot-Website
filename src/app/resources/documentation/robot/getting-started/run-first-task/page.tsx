import type { Metadata } from "next";
import RunFirstTaskPage from "@/views/resources/robot/getting-started/RunFirstTaskPage";

export const metadata: Metadata = {
  title: "Run Your First Real-World Task — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <RunFirstTaskPage />;
}
