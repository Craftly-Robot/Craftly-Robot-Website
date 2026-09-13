import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import CTASection from "../../components/sections/CTASection";
import { blogArticles } from "../../data/blog/articles";
import "./BlogPage.css";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog"
        description="Insights, updates, and stories from the Craftly team."
      />

      <div className="container">
        <section
          className="section section--lg"
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <span
            className="text-label"
            style={{
              opacity: 0,
              animation: "heroFadeUp 0.8s var(--ease-out) forwards",
            }}
          >
            Resource
          </span>
          <h1
            className="text-display"
            style={{
              marginTop: "var(--space-md)",
              opacity: 0,
              animation: "heroFadeUp 0.8s var(--ease-out) 0.1s forwards",
            }}
          >
            Blog
          </h1>
          <p
            className="text-body-lg"
            style={{
              marginTop: "var(--space-lg)",
              color: "var(--color-text-secondary)",
              opacity: 0,
              animation: "heroFadeUp 0.8s var(--ease-out) 0.2s forwards",
            }}
          >
            Insights, updates, and stories from the Craftly team.
          </p>
        </section>

        <section className="section">
          <div className="blog-list">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/resources/blog/${article.slug}`}
                className="blog-card"
              >
                <div className="blog-card__meta">
                  <time dateTime={article.date}>
                    {formatDate(article.date)}
                  </time>
                  {article.tags.length > 0 && (
                    <span className="blog-card__tags">
                      {article.tags.join(" · ")}
                    </span>
                  )}
                </div>
                <h2 className="blog-card__title">{article.title}</h2>
                <p className="blog-card__excerpt">{article.description}</p>
                <span className="blog-card__read">Read article →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
    </>
  );
}
