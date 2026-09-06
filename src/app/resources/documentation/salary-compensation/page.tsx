import type { Metadata } from "next";
import SalaryCompensationPageView from "@/views/resources/SalaryCompensationPage";

export const metadata: Metadata = {
  title: "Salary & Compensation",
  description: "Information regarding salary and compensation at Craftly.",
};

export default function Page() {
  return <SalaryCompensationPageView />;
}
