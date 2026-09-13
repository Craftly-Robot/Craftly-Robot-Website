"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { SEO } from "../../components/SEO";
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

export default function BlogArticlePage({ slug: propSlug }: { slug?: string } = {}) {
  const params = useParams();
  const slug = propSlug || (typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "");
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFoundPage />;
  }

  const url = `https://craftlyrobot.com/resources/blog/${article.slug}`;

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        type="article"
        url={url}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            url,
            author: { "@type": "Organization", name: "Craftly" },
            publisher: { "@type": "Organization", name: "Craftly" },
          }),
        }}
      />

      <DocPage
        title={`${article.title} — Craftly Blog`}
        description={article.description}
        rootLabel="Resources"
        crumbs={["Blog", article.title]}
        pageId={article.slug}
        pageTitle={article.title}
      >
        <div className="blog-article__meta">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          {article.tags.length > 0 && (
            <span>· {article.tags.join(" · ")}</span>
          )}
        </div>

        {article.content}

        <p className="docs__text" style={{ marginTop: "48px" }}>
          <Link href="/resources/blog">← Back to all articles</Link>
        </p>
      </DocPage>

      <CTASection />
    </>
  );
}
