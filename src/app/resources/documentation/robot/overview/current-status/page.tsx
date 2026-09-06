import type { Metadata } from "next";
import CurrentStatusPage from "@/views/resources/robot/overview/CurrentStatusPage";

export const metadata: Metadata = {
  title: "Current Status — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <CurrentStatusPage />;
}
