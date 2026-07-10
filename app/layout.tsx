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
  title: "XingTuiKeJi | Game Growth, Measured",
  description:
    "XingTuiKeJi helps game teams plan, test, and optimize performance marketing campaigns across global mobile channels.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "XingTuiKeJi | Game Growth, Measured",
    description:
      "Campaign planning, creative testing, and performance optimization for game growth.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 909,
        alt: "XingTuiKeJi - Game Growth, Measured",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XingTuiKeJi | Game Growth, Measured",
    description:
      "Campaign planning, creative testing, and performance optimization for game growth.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
