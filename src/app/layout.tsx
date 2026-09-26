import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono, Pacifico } from "next/font/google";
import Layout from "@/components/layout/Layout";
import ThemeScript from "@/components/common/ThemeScript";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://craftlyrobot.com"),
  title: {
    default: "Craftly — Technology, Intelligence & Organization.",
    template: "%s | Craftly",
  },
  description:
    "Craftly builds intelligent systems for the agentic era. Explore Craftly Workspace and Craftly Robot — tools for operating modern organizations and autonomous software engineering in Bangladesh and globally.",
  keywords: [
    "Craftly Robot",
    "Craftly Bangladesh",
    "First scratch trained AI in Bangladesh",
    "Decentralized AI Platform building in Bangladesh",
    "Craftly Workspace",
    "Agent to agent negotiation feature building in Bangladesh",
    "Craftly Plan",
  ],
  authors: [{ name: "Craftly", url: "https://craftlyrobot.com" }],
  creator: "Craftly",
  publisher: "Craftly",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://craftlyrobot.com",
    siteName: "Craftly",
    title: "Craftly — Technology, Intelligence & Organization.",
    description:
      "Craftly builds intelligent systems for the agentic era in Bangladesh and globally. Explore Craftly Workspace and Craftly Robot.",
    images: [
      {
        url: "/assets/craftly_logo/photo_2026-08-12_19-27-43.jpg",
        width: 500,
        height: 500,
        alt: "Craftly logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craftly — Technology, Intelligence & Organization.",
    description:
      "Craftly builds intelligent systems for the agentic era in Bangladesh and globally.",
    images: ["/assets/craftly_logo/photo_2026-08-12_19-27-43.jpg"],
  },
  icons: {
    icon: "/assets/craftly_logo/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://craftlyrobot.com/#organization",
      name: "Craftly",
      url: "https://craftlyrobot.com/",
      logo: "https://craftlyrobot.com/assets/craftly_logo/photo_2026-08-12_19-27-43.jpg",
      description:
        "Craftly builds intelligent systems for the agentic era — Craftly Workspace, Craftly Robot, and Craftly Cloud.",
      sameAs: ["https://github.com/Craftly-Robot"],
    },
    {
      "@type": "WebSite",
      "@id": "https://craftlyrobot.com/#website",
      url: "https://craftlyrobot.com/",
      name: "Craftly",
      publisher: {
        "@id": "https://craftlyrobot.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Craftly Robot",
      operatingSystem: "Android, Windows, macOS, Linux",
      applicationCategory: "DeveloperApplication",
      description:
        "An agentic AI system for autonomous software engineering and multi-agent coordination.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Craftly Workspace",
      operatingSystem: "Windows, macOS, Linux",
      applicationCategory: "BusinessApplication",
      description:
        "Your intelligent workspace for operating modern organizations, task management, and communication.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Craftly Cloud",
      applicationCategory: "CloudApplication",
      description:
        "High-performance edge infrastructure and runtime for intelligent agent clusters.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} ${pacifico.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          type="image/svg+xml"
          href="/assets/brand/craftly-wordmark-intro.svg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <ThemeScript />
      </head>
      <body>
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
