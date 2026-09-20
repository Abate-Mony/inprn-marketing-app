import type { Metadata } from "next";
import { ApiDocs } from "@/components/marketing/ApiDocs";

export const metadata: Metadata = {
  title: "External API",
  description:
    "Connect your own systems to your INPRN schedule with an API key — authentication, endpoints, error reference and a Node.js/axios example.",
};

export default function DocsPage() {
  return <ApiDocs />;
}
