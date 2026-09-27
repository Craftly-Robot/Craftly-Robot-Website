import type { Metadata } from "next";
import CloudUseComputePage from "@/views/resources/cloud/CloudUseComputePage";

export const metadata: Metadata = {
  title: "Use Compute — Craftly Cloud Documentation",
  description: "Deploy and run AI workloads, scientific models, and simulations on Craftly Cloud.",
};

export default function Page() {
  return <CloudUseComputePage />;
}
