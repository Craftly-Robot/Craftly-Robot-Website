"use client";

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
}

export function SEO({ title }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Craftly`;
    }
  }, [title]);

  return null;
}

export default SEO;
