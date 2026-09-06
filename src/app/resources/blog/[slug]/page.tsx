import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/blog/articles";
import BlogArticlePageView from "@/views/resources/BlogArticlePage";

export async function generateStaticParams() {
  return [
    { slug: "craftly-plan-workspace-robot-glass" },
    { slug: "why-agent-to-agent-negotiation-matters" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogArticlePageView slug={slug} />;
}
