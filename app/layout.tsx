import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kavinkumar A | Full Stack Developer",
  description:
    "Portfolio of Kavinkumar A, Full Stack Developer, BigCommerce Product Developer, and SaaS Builder specializing in scalable SaaS applications and high-performance eCommerce solutions.",
  keywords: [
    "Kavinkumar A",
    "Full Stack Developer",
    "BigCommerce Developer",
    "SaaS Builder",
    "React",
    "Next.js"
  ],
  authors: [{ name: "Kavinkumar A" }],
  openGraph: {
    title: "Kavinkumar A | Full Stack Developer",
    description:
      "Scalable SaaS applications and high-performance BigCommerce product solutions.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
