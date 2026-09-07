import type { Metadata } from "next";
import PricingPageView from "@/views/PricingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Craftly is free. No hidden fees. No credit card required. Download now.",
};

export default function Page() {
  return <PricingPageView />;
}
