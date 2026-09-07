import type { Metadata } from "next";
import AboutPageView from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bangladesh's first AI company. Building the operating system for intelligent organizations.",
};

export default function Page() {
  return <AboutPageView />;
}
