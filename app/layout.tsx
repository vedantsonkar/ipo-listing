import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BASE_FE_URL } from "@/constants";

const inter = Sora({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "IPO Listing",
  description: "See a list of all the ongoing/upcoming IPOs",
  keywords: "",
  metadataBase: new URL(BASE_FE_URL),
  openGraph: {
    images: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Breadcrumbs />
        {children}
      </body>
    </html>
  );
}
