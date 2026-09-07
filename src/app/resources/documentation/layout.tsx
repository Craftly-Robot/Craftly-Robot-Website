"use client";

import DocsShell from "@/views/resources/DocsShell";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsShell>{children}</DocsShell>;
}
