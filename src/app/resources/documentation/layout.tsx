"use client";

import { useState } from "react";
import { DocsPageProvider } from "@/contexts/DocsPageContext";
import DocsShell from "@/views/resources/DocsShell";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [tocItems, setTocItems] = useState<{ id: string; label: string }[]>([]);

  return (
    <DocsPageProvider value={{ tocItems, setTocItems }}>
      <DocsShell>{children}</DocsShell>
    </DocsPageProvider>
  );
}
