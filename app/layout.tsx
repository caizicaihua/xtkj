import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { company, siteMetadata } from "./site-content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: company.name,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "HengQingKeJi game showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
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
