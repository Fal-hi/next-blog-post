import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="grid min-h-screen items-center text-center">
          <section>
            <h2 className="text-9xl">404</h2>
            <h3 className="text-xl">NOT FOUND</h3>
            <p className="my-2">The page you are looking for does not exist.</p>
            <Link href="/" className="underline">
              Back to post
            </Link>
          </section>
        </div>
      </body>
    </html>
  );
}
