import type { Metadata } from "next";
import CloudHardwareRequirementsPage from "@/views/resources/cloud/CloudHardwareRequirementsPage";

export const metadata: Metadata = {
  title: "Hardware & Requirements — Craftly Cloud Documentation",
  description: "Hardware and operating system requirements for Craftly Cloud.",
};

export default function Page() {
  return <CloudHardwareRequirementsPage />;
}
