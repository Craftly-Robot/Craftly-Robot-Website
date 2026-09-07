"use client";

import Link from "next/link";
import "./Breadcrumbs.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="breadcrumbs__inner">
        <Link href="/" className="breadcrumbs__item">
          Home
        </Link>
        {items.map((item, idx) => (
          <span key={idx} className="breadcrumbs__separator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            {item.href ? (
              <Link href={item.href} className="breadcrumbs__item">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumbs__item breadcrumbs__item--current">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
