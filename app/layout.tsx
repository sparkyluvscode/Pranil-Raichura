import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseSpotlight from "@/components/MouseSpotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranil Raichura - RSI Recommendation",
  description: "Interactive portfolio showcasing academic achievements, research projects, and extracurriculars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}

