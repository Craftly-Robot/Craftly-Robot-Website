import type { Metadata } from "next";
import CloudOverviewPage from "@/views/resources/cloud/CloudOverviewPage";

export const metadata: Metadata = {
  title: "Craftly Cloud — Craftly Documentation",
  description: "Documentation for Craftly Cloud, Bangladesh's national AI compute network.",
};

export default function Page() {
  return <CloudOverviewPage />;
}
