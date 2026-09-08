import type { Metadata } from "next";
import ChangelogPageView from "@/views/resources/ChangelogPage";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Latest updates and improvements to Craftly Workspace and Craftly Robot.",
};

export default function Page() {
  return <ChangelogPageView />;
}
