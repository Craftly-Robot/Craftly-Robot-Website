"use client";

import { Fragment } from "react";
import { DocsPageProvider } from "../../contexts/DocsPageContext";

interface DocPageProps {
  title: string;
  description: string;
  /** Breadcrumb segments after rootLabel, last one rendered bold. */
  crumbs: string[];
  pageId: string;
  pageTitle: string;
  /** First breadcrumb segment. Defaults to "Documentation". */
  rootLabel?: string;
  tocItems?: { id: string; label: string }[];
  children?: React.ReactNode;
}

export default function DocPage({
  title,
  description,
  crumbs,
  pageId,
  pageTitle,
  rootLabel = "Documentation",
  tocItems,
  children,
}: DocPageProps) {
  const displayCrumbs = crumbs[0] === rootLabel ? crumbs : [rootLabel, ...crumbs];

  return (
    <DocsPageProvider tocItems={tocItems}>
      <div className="docs__breadcrumb">
        {displayCrumbs.map((crumb, index) => (
          <Fragment key={index}>
            {index === displayCrumbs.length - 1 ? (
              <strong>{crumb}</strong>
            ) : (
              crumb
            )}
            {index < displayCrumbs.length - 1 && <> &gt;{" "}</>}
          </Fragment>
        ))}
      </div>

      <h1 className="docs__title" id={pageId}>
        {pageTitle}
      </h1>

      {children}
    </DocsPageProvider>
  );
}
