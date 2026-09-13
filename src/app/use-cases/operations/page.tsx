import type { Metadata } from "next";
import OperationsPageView from "@/views/use-cases/OperationsPage";

export const metadata: Metadata = {
  title: "Manage Business Operations",
  description:
    "Craftly helps manage complex business operations smoothly.",
};

export default function Page() {
  return <OperationsPageView />;
}
