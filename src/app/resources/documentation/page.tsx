import type { Metadata } from "next";
import DocumentationPageView from "@/views/resources/DocumentationPage";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Technical documentation, API references, and integration guides for Craftly products.",
};

export default function Page() {
  return <DocumentationPageView />;
}
