import type { Metadata } from "next";
import { products } from "@/data/products";
import CloudPageView from "@/views/products/CloudPage";

const product = products.find((p) => p.id === "cloud")!;

export const metadata: Metadata = {
  title: product ? product.name : "Craftly Cloud",
  description: product ? product.tagline : "High-performance edge infrastructure & runtime for intelligent agent clusters.",
};

export default function Page() {
  return <CloudPageView />;
}
