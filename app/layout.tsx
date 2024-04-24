import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// My Components
import Navbar from "./components/navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sail Utah",
  description: "Private sailboat charters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
