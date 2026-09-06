import type { Metadata } from "next";
import LongTermVisionPage from "@/views/resources/robot/overview/LongTermVisionPage";

export const metadata: Metadata = {
  title: "Long-Term Vision — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <LongTermVisionPage />;
}
