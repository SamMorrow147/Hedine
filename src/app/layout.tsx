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
  title: "Hedine Jewelry - Fine Jewelry & Custom Designs in Alexandria, MN",
  description: "Hedine Jewelry has served Alexandria, MN since 1914. Discover exquisite engagement rings, custom jewelry design, and expert jewelry & watch repair services. Over 100 years of trusted craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sqp7jie.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          '--font-beaufort': '"beaufort-pro", serif'
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
