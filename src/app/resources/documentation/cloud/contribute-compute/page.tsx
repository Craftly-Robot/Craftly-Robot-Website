import type { Metadata } from "next";
import CloudContributeComputePage from "@/views/resources/cloud/CloudContributeComputePage";

export const metadata: Metadata = {
  title: "Contribute Compute — Craftly Cloud Documentation",
  description: "Learn how to contribute your idle computer power to Craftly Cloud.",
};

export default function Page() {
  return <CloudContributeComputePage />;
}
