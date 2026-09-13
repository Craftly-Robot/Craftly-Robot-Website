import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import DocsLayout from "./DocsLayout";
import { faqEntries } from "../../data/docs/faq";
import "./FAQPage.css";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((entry) => ({
    "@type": "Question",
    name: entry.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: entry.answerText,
    },
  })),
};

export default function FAQPage() {
  const tocItems = [
    { id: "faq", label: "Frequently Asked Questions" },
    ...faqEntries.map((entry) => ({ id: entry.id, label: entry.question })),
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <DocsLayout
        title="FAQ"
        description="Frequently asked questions about Craftly Workspace and Robot."
        tocItems={tocItems}
      >
        <div className="docs__breadcrumb">
          Documentation &gt; <strong>FAQ</strong>
        </div>

        <h1 className="docs__title" id="faq">
          Frequently Asked Questions
        </h1>

        {faqEntries.map((entry) => (
          <Fragment key={entry.id}>
            <h3
              id={entry.id}
              className="docs__section-title faq-question-title"
            >
              {entry.question}
            </h3>
            {entry.answer}
          </Fragment>
        ))}

        <div className="docs__card faq-contact-card">
          <h3 className="docs__section-title">
            Can't find your answer?
          </h3>
          <p className="docs__text">
            If your question or problem isn't covered here, use the appropriate
            Support Request in Craftly Workspace and let the responsible team know
            how they can help.
          </p>
          <p className="docs__text">
            When in doubt: read the documentation first, check your project
            instructions, communicate with your Unit Leader, and use Support
            Requests when you need structured assistance.
          </p>
        </div>
      </DocsLayout>
    </>
  );
}
