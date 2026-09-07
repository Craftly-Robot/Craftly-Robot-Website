"use client";

import { useState } from "react";
import DocsShell from "@/views/resources/DocsShell";
import { DocsPageProvider } from "@/contexts/DocsPageContext";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [tocItems, setTocItems] = useState<{ id: string; label: string }[]>([]);

  return (
    <DocsPageProvider value={{ tocItems, setTocItems }}>
      <DocsShell>{children}</DocsShell>
    </DocsPageProvider>
  );
}
