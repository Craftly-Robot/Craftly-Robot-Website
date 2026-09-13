"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import IntroOverlay from "../intro/IntroOverlay";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isDocumentationPage = pathname?.startsWith("/resources/documentation");

  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <IntroOverlay />
      <Navbar />
      <main className="layout__main" id="main-content">
        {children}
      </main>
      {!isDocumentationPage && <Footer />}
    </div>
  );
}
