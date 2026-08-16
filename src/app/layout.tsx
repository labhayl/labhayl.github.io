import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhay Pratap Singh | Software Engineer — Backend, Platform & AI Infrastructure",
  description:
    "Software Engineer building production backend systems, data pipelines, and AI platforms. Go microservices, document ingestion, vector search, and multi-tenant RAG at Cisco and Mahindra.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Platform Engineer",
    "AI Infrastructure",
    "Distributed Systems",
    "Go",
    "gRPC",
    "Python",
    "RAG",
    "LangChain",
    "Kubernetes",
    "FastAPI",
  ],
  authors: [{ name: "Abhay Pratap Singh" }],
  creator: "Abhay Pratap Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://labhayl.github.io",
    title: "Abhay Pratap Singh | Software Engineer — Backend, Platform & AI Infrastructure",
    description:
      "Software Engineer building production backend systems, data pipelines, and AI platforms for enterprise-scale retrieval and ingestion.",
    siteName: "Abhay Pratap Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Pratap Singh | Software Engineer — Backend, Platform & AI Infrastructure",
    description:
      "Software Engineer building production backend systems, data pipelines, and AI platforms for enterprise-scale retrieval and ingestion.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}