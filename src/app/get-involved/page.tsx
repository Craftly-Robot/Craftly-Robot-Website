import type { Metadata } from "next";
import GetInvolvedPageView from "@/views/GetInvolvedPage";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Whether you want to use Craftly, contribute to it, or partner with us.",
};

export default function Page() {
  return <GetInvolvedPageView />;
}
