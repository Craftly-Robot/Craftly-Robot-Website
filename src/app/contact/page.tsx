import type { Metadata } from "next";
import ContactPageView from "@/views/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Craftly. Questions, feedback, or partnership opportunities.",
};

export default function Page() {
  return <ContactPageView />;
}
