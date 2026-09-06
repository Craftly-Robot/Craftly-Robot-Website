import type { Metadata } from "next";
import { products } from "@/data/products";
import RobotPageView from "@/views/products/RobotPage";

const product = products.find((p) => p.id === "robot")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.tagline,
};

export default function Page() {
  return <RobotPageView />;
}
