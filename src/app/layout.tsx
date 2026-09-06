"use client";

import { Inter, Outfit } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/";
  const isDocumentationPage = pathname.startsWith("/resources/documentation");

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <div className="layout">
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main className="layout__main" id="main-content">
            {children}
          </main>
          {!isDocumentationPage && <Footer />}
        </div>
      </body>
    </html>
  );
}
