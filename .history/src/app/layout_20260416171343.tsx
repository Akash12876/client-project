import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";


import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paras-pearl.vercel.app"),
  title: {
    default: "IPARX MEDIA | Performance Marketing & Creative Growth",
    template: "%s | IPARX MEDIA",
  },
  description:
    "IPARX MEDIA helps brands scale with performance marketing, social media growth, high-converting content, and creative strategy.",
  keywords: [
    "IPARX MEDIA",
    "performance marketing",
    "social media marketing",
    "creative strategy",
    "content production",
    "digital marketing agency",
  ],
  openGraph: {
    title: "IPARX MEDIA | Performance Marketing & Creative Growth",
    description:
      "Scale faster with data-driven campaigns, creator strategy, and premium content systems by IPARX MEDIA.",
    url: "https://paras-pearl.vercel.app",
    siteName: "IPARX MEDIA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/iparx.png",
        width: 1200,
        height: 630,
        alt: "IPARX MEDIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPARX MEDIA | Performance Marketing & Creative Growth",
    description:
      "Scale faster with data-driven campaigns, creator strategy, and premium content systems by IPARX MEDIA.",
    images: ["/iparx.png"],
  },
  icons: {
    icon: "/iparx.png",
    apple: "/iparx.png",
    shortcut: "/iparx.png",
  },
  alternates: {
    canonical: "/",
  },
};

import Loader from "../components/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <Loader />
        </Suspense>
        <Navbar />
        <main className="pt-20 flex-1">{children}</main>
        <footer className="border-t border-white/10 bg-black px-5 py-6 text-center text-sm text-zinc-400 md:px-16">
          Copyright {year} IPARX MEDIA. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
