"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

/**
 * Conditionally renders the global Footer on all routes
 * except documentation sub-routes, preserving the design system.
 */
export default function ConditionalFooter() {
  const pathname = usePathname() ?? "/";
  const isDocumentationPage = pathname.startsWith("/resources/documentation");

  if (isDocumentationPage) {
    return null;
  }

  return <Footer />;
}
