import type { Metadata } from "next";
import SupportPageView from "@/views/resources/SupportPage";

export const metadata: Metadata = {
  title: "Support",
  description: "Find answers in our docs or go to our community.",
};

export default function Page() {
  return <SupportPageView />;
}
