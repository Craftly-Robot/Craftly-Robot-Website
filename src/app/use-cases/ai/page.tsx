import type { Metadata } from "next";
import AIPageView from "@/views/use-cases/AIPage";

export const metadata: Metadata = {
  title: "Put AI to work on real problems",
  description:
    "Craftly builds intelligent systems that can understand complex requests, reason through problems, use available capabilities, and help people accomplish meaningful work.",
};

export default function Page() {
  return <AIPageView />;
}
