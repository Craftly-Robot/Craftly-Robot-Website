import type { Metadata } from "next";
import BlogPageView from "@/views/resources/BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, updates, and stories from the Craftly team.",
};

export default function Page() {
  return <BlogPageView />;
}
