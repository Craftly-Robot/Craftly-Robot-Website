import type { Metadata } from "next";
import DiscoverConnectPage from "@/views/resources/robot/getting-started/DiscoverConnectPage";

export const metadata: Metadata = {
  title: "Discover & Connect — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <DiscoverConnectPage />;
}
