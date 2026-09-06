import type { Metadata } from "next";
import NotFoundPageView from "@/views/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return <NotFoundPageView />;
}
