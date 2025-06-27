import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhymy – Social Media for Writers",
  description:
    "Post your blogs, poems, stories, and prose on Rhymy. Join a growing community of readers and writers. Discover. Write. Get rewarded.",
  keywords: [
    "Rhymy",
    "writers platform",
    "poetry sharing",
    "blog community",
    "stories",
    "text-based social media",
  ],
  metadataBase: new URL("https://rhymy.tech"),
  openGraph: {
    title: "Rhymy – Social Media for Writers",
    description:
      "Create, share, and get discovered through your words. Rhymy is a social media platform for writing.",
    url: "https://rhymy.tech",
    siteName: "Rhymy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rhymy Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhymy – Social Media for Writers",
    description: "Turn your words into impact. Post and share on Rhymy.",
    creator: "@rhymy",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
