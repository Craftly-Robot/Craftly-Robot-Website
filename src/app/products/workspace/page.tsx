import type { Metadata } from "next";
import { products } from "@/data/products";
import WorkspacePageView from "@/views/products/WorkspacePage";

const product = products.find((p) => p.id === "workspace")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.tagline,
};

export default function Page() {
  return <WorkspacePageView />;
}
