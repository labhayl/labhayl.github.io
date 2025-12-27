import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhay Pratap Singh | Full-Stack AI Developer & ML Engineer",
  description:
    "AI/ML Engineer and Full-Stack Developer specializing in LLM systems, ML pipelines, RAG platforms, and production-grade applications. Building scalable AI solutions at Mahindra.",
  keywords: [
    "AI Developer",
    "ML Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "LLM",
    "RAG",
    "LangChain",
    "Python",
    "React",
    "FastAPI",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Abhay Pratap Singh" }],
  creator: "Abhay Pratap Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://labhayl.github.io",
    title: "Abhay Pratap Singh | Full-Stack AI Developer & ML Engineer",
    description:
      "AI/ML Engineer and Full-Stack Developer specializing in LLM systems, ML pipelines, and production-grade applications.",
    siteName: "Abhay Pratap Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Pratap Singh | Full-Stack AI Developer & ML Engineer",
    description:
      "AI/ML Engineer and Full-Stack Developer specializing in LLM systems, ML pipelines, and production-grade applications.",
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