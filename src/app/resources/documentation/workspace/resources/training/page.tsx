import type { Metadata } from "next";
import TrainingPage from "@/views/resources/workspace/resources/TrainingPage";

export const metadata: Metadata = {
  title: "Training — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <TrainingPage />;
}
