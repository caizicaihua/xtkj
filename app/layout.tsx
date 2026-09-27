import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HengQingKeJi | Good Games. Great Connections.",
  description:
    "HengQingKeJi helps game teams plan, test, and optimize performance marketing campaigns across global mobile channels.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "HengQingKeJi | Good Games. Great Connections.",
    description:
      "Discover our games and a thoughtful approach to connecting them with players around the world.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "HengQingKeJi - Good Games. Great Connections.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HengQingKeJi | Good Games. Great Connections.",
    description:
      "Discover our games and a thoughtful approach to connecting them with players around the world.",
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
      <body className={geistSans.variable}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
