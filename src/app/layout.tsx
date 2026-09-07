import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import SearchProvider from "@/components/layout/SearchProvider";
import BackToTop from "@/components/ui/BackToTop";
import Providers from "@/components/layout/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://craftlyrobot.com"),
  title: {
    default: "Craftly — The Operating System for Intelligent Organizations",
    template: "%s — Craftly",
  },
  description:
    "Craftly builds intelligent systems for the agentic era. Craftly Workspace connects people, work, and AI agents in one system. Built in Bangladesh, available globally.",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://craftlyrobot.com",
    siteName: "Craftly",
    title: "Craftly — The Operating System for Intelligent Organizations",
    description:
      "Craftly builds intelligent systems for the agentic era. Craftly Workspace connects people, work, and AI agents in one system. Built in Bangladesh, available globally.",
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
    title: "Craftly — The Operating System for Intelligent Organizations",
    description:
      "Craftly builds intelligent systems for the agentic era. Craftly Workspace connects people, work, and AI agents in one system.",
    images: ["/assets/craftly_logo/photo_2026-08-12_19-27-43.jpg"],
    creator: "@Craftly",
  },
  icons: {
    icon: [
      { url: "/assets/craftly_logo/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/assets/craftly_logo/photo_2026-08-12_19-27-43.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Craftly",
  url: "https://craftlyrobot.com/",
  logo: "https://craftlyrobot.com/assets/craftly_logo/photo_2026-08-12_19-27-43.jpg",
  description:
    "Craftly builds intelligent systems for the agentic era — Craftly Workspace and Craftly Robot.",
  sameAs: ["https://github.com/Craftly-Robot"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          type="image/svg+xml"
          href="/assets/brand/craftly-wordmark-intro.svg"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('craftly-theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <div className="layout">
            <Navbar />
            <main className="layout__main" id="main-content">
              {children}
            </main>
            <ConditionalFooter />
          </div>
          <SearchProvider />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
