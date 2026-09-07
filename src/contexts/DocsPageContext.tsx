"use client";

import { createContext, useContext, type ReactNode } from "react";

interface DocsPageData {
  tocItems: { id: string; label: string }[];
  setTocItems: (items: { id: string; label: string }[]) => void;
}

const DocsPageContext = createContext<DocsPageData>({
  tocItems: [],
  setTocItems: () => {},
});

export function useDocsPage() {
  return useContext(DocsPageContext);
}

export function DocsPageProvider({
  value,
  children,
}: {
  value: DocsPageData;
  children: ReactNode;
}) {
  return (
    <DocsPageContext.Provider value={value}>
      {children}
    </DocsPageContext.Provider>
  );
}
