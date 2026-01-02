import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aplikasi Rancang Mantab",
  description: "Solusi Terintegrasi Biller Agregator PPOB untuk Bisnis Digital Anda",
  icons: {
    icon: "/assets/rename.png",
    shortcut: "/assets/rename.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <Navbar />

        {children}
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </body>
    </html>
  );
}
