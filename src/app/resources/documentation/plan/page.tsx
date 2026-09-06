import type { Metadata } from "next";
import PlanPageView from "@/views/resources/PlanPage";

export const metadata: Metadata = {
  title: "Craftly Plan",
  description: "Craftly Plan - Workspace, Robot, and Glass.",
};

export default function Page() {
  return <PlanPageView />;
}
