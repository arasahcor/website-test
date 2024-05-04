import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/layout/footer/Footer";

//fonts to use on the website
const monument = localFont({
  src: "../../public/fonts/MonumentExtended-Regular.woff2",
  display: "swap",
  variable: "--font-monument",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "600",
      style: "medium",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-satoshi",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Creon - Test App",
  description: "Test for Niftables application",
};
//common layout for all routes
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`bg-black ${inter.variable} ${monument.variable} ${satoshi.variable}`}
      >
        {children}
        {/* footer is common to all pages*/}
        <Footer />
      </body>
    </html>
  );
}
