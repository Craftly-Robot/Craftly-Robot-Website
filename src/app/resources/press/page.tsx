import type { Metadata } from "next";
import PressPageView from "@/views/resources/PressPage";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Craftly in the press — media coverage, announcements, and news.",
};

export default function Page() {
  return <PressPageView />;
}
