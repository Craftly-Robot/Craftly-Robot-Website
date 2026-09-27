import type { Metadata } from "next";
import CloudGettingStartedPage from "@/views/resources/cloud/CloudGettingStartedPage";

export const metadata: Metadata = {
  title: "Getting Started — Craftly Cloud Documentation",
  description: "Quick start guide to connect your computer to Craftly Cloud.",
};

export default function Page() {
  return <CloudGettingStartedPage />;
}
