import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPO Listing",
  description: "See a list of all the ongoing/upcoming IPOs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
