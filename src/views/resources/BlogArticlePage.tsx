"use client";

import Link from "next/link";
import CTASection from "../../components/sections/CTASection";
import DocPage from "./DocPage";
import NotFoundPage from "../NotFoundPage";
import { getArticleBySlug } from "../../data/blog/articles";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface BlogArticlePageProps {
  slug: string;
}

export default function BlogArticlePage({ slug }: BlogArticlePageProps) {
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <DocPage
        title={`${article.title} — Craftly Documentation`}
        description={article.description}
        crumbs={["Blog", article.title]}
        pageId={article.slug}
        pageTitle={article.title}
      >
        <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-2xl)" }}>
          {formatDate(article.date)}
        </p>
        <div>{article.content}</div>
      </DocPage>
      <CTASection />
    </>
  );
}
