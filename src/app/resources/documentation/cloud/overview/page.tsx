import type { Metadata } from "next";
import CloudOverviewPage from "@/views/resources/cloud/CloudOverviewPage";

export const metadata: Metadata = {
  title: "Overview — Craftly Cloud Documentation",
  description: "Overview of Craftly Cloud, Bangladesh's national AI compute network.",
};

export default function Page() {
  return <CloudOverviewPage />;
}
