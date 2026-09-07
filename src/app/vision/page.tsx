import type { Metadata } from "next";
import VisionPageView from "@/views/VisionPage";

export const metadata: Metadata = {
  title: "The Craftly Plan",
  description:
    "Workspace → Robot → Glass. Building the operating system for intelligent organizations.",
};

export default function Page() {
  return <VisionPageView />;
}
