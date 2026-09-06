import type { Metadata } from "next";
import ReleasesPageView from "@/views/resources/ReleasesPage";

export const metadata: Metadata = {
  title: "Craftly Releases",
  description:
    "Download previous Craftly and Craftly Workspace releases.",
};

export default function Page() {
  return <ReleasesPageView />;
}
