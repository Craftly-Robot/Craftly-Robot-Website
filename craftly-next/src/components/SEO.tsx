"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
}

export function SEO({
  title,
  description,
  name = "Craftly",
  type = "website",
  url,
  image = "https://craftlyrobot.com/assets/craftly_logo/photo_2026-08-12_19-27-43.jpg",
}: SEOProps) {
  const pathname = usePathname();
  const canonicalUrl =
    url ||
    (pathname === "/"
      ? "https://craftlyrobot.com/"
      : `https://craftlyrobot.com${pathname}`);
  const fullTitle = `${title} | Craftly`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
