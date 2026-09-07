"use client";

import { createContext, useContext, type ReactNode } from "react";

interface DocsPageData {
  tocItems: { id: string; label: string }[];
}

const DocsPageContext = createContext<DocsPageData>({ tocItems: [] });

export function useDocsPage() {
  return useContext(DocsPageContext);
}

export function DocsPageProvider({
  tocItems = [],
  children,
}: {
  tocItems?: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <DocsPageContext.Provider value={{ tocItems }}>
      {children}
    </DocsPageContext.Provider>
  );
}
