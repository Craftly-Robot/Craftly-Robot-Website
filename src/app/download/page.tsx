import type { Metadata } from "next";
import DownloadPageView from "@/views/DownloadPage";

export const metadata: Metadata = {
  title: "Download Craftly — Intelligent Systems",
  description: "Download Craftly Workspace and Craftly Robot for Windows, macOS, and Linux.",
};

export default function Page() {
  return <DownloadPageView />;
}
