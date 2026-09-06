import { Fragment } from "react";
import DocsLayout from "./DocsLayout";

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
  return (
    <DocsLayout title={title} description={description} tocItems={tocItems}>
      <div className="docs__breadcrumb">
        {rootLabel} &gt;{" "}
        {crumbs.map((crumb, index) => (
          <Fragment key={index}>
            {index === crumbs.length - 1 ? (
              <strong>{crumb}</strong>
            ) : (
              crumb
            )}
            {index < crumbs.length - 1 && <> &gt;{" "}</>}
          </Fragment>
        ))}
      </div>

      <h1 className="docs__title" id={pageId}>
        {pageTitle}
      </h1>

      {children}
    </DocsLayout>
  );
}
