import type { Metadata } from "next";
import BeforeYouStartPage from "@/views/resources/robot/getting-started/BeforeYouStartPage";

export const metadata: Metadata = {
  title: "Before You Start — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <BeforeYouStartPage />;
}
