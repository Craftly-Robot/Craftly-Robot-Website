import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
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

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            url,
            author: { "@type": "Organization", name: "Craftly" },
            publisher: { "@type": "Organization", name: "Craftly" },
          })}
        </script>
      </Helmet>

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
          <Link to="/resources/blog">← Back to all articles</Link>
        </p>
      </DocPage>

      <CTASection />
    </>
  );
}
