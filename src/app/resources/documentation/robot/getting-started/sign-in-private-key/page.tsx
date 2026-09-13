import type { Metadata } from "next";
import SignInPrivateKeyPage from "@/views/resources/robot/getting-started/SignInPrivateKeyPage";

export const metadata: Metadata = {
  title: "Sign In with Your Private Key — Craftly Robot",
  description: "Craftly documentation.",
};

export default function Page() {
  return <SignInPrivateKeyPage />;
}
