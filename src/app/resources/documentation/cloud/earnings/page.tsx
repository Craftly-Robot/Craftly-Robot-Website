import type { Metadata } from "next";
import CloudEarningsPage from "@/views/resources/cloud/CloudEarningsPage";

export const metadata: Metadata = {
  title: "Earnings & Rewards — Craftly Cloud Documentation",
  description: "Understand how earnings, compensation, and rewards work on Craftly Cloud.",
};

export default function Page() {
  return <CloudEarningsPage />;
}
