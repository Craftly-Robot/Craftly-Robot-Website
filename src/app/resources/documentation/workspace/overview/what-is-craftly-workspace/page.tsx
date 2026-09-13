import type { Metadata } from "next";
import WhatIsWorkspacePage from "@/views/resources/workspace/overview/WhatIsWorkspacePage";

export const metadata: Metadata = {
  title: "What is Craftly Workspace? — Craftly Workspace",
  description: "Craftly documentation.",
};

export default function Page() {
  return <WhatIsWorkspacePage />;
}
