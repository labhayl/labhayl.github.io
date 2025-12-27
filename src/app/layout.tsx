import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhay Pratap Singh | Full-Stack AI Developer",
  description:
    "AI Developer specializing in LLM systems, RAG platforms, and production ML. Building scalable enterprise solutions at Mahindra AI.",
  keywords: [
    "AI Developer",
    "Full Stack Developer",
    "LLM",
    "Machine Learning",
    "RAG",
    "LangChain",
    "Python",
    "React",
    "FastAPI",
  ],
  authors: [{ name: "Abhay Pratap Singh" }],
  creator: "Abhay Pratap Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://labhayl.github.io",
    title: "Abhay Pratap Singh | Full-Stack AI Developer",
    description:
      "AI Developer specializing in LLM systems, RAG platforms, and production ML.",
    siteName: "Abhay Pratap Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Pratap Singh | Full-Stack AI Developer",
    description:
      "AI Developer specializing in LLM systems, RAG platforms, and production ML.",
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