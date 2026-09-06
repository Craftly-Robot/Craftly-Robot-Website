import type { Metadata } from "next";
import HomePageView from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Technology, Intelligence & Organization",
  description:
    "Craftly builds intelligent systems for the agentic era. Explore Craftly Workspace and Craftly Robot — tools for operating modern organizations and autonomous software engineering in Bangladesh.",
};

export default function Page() {
  return <HomePageView />;
}
