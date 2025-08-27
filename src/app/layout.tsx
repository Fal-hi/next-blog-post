import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog Post",
  description: "Blog Post with Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <NuqsAdapter>
          <Header />
          <main className="relative container mx-auto my-10 px-4 md:max-w-10/12 xl:max-w-2/4">
            {children}
          </main>
        </NuqsAdapter>
      </body>
    </html>
  );
}
