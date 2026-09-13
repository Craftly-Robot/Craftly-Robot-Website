import type { Metadata } from "next";
import NextStepsPage from "@/views/resources/robot/getting-started/NextStepsPage";

export const metadata: Metadata = {
  title: "Next Steps — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <NextStepsPage />;
}
