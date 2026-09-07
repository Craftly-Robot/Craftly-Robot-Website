import type { Metadata } from "next";
import UseCasesPageView from "@/views/UseCasesPage";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Who Craftly is for and how it's used. From organizations running operations to developers building with AI.",
};

export default function Page() {
  return <UseCasesPageView />;
}
