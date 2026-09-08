"use client";

import { Fragment } from "react";
import { faqEntries } from "../../data/docs/faq";
import DocPage from "./DocPage";
import "./FAQPage.css";

export default function FAQPage() {
  const tocItems = [
    { id: "faq", label: "Frequently Asked Questions" },
    ...faqEntries.map((entry) => ({ id: entry.id, label: entry.question })),
  ];

  return (
    <DocPage
      title="FAQ"
      description="Frequently asked questions about Craftly Workspace and Robot."
      crumbs={["Documentation", "FAQ"]}
      pageId="faq"
      pageTitle="Frequently Asked Questions"
      tocItems={tocItems}
    >
      {faqEntries.map((entry) => (
        <Fragment key={entry.id}>
          <h2 className="docs__heading" id={entry.id}>
            {entry.question}
          </h2>
          <div className="docs__text">
            <p>{entry.answerText}</p>
          </div>
        </Fragment>
      ))}
    </DocPage>
  );
}
