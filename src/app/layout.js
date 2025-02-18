"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useRef } from "react";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "GYM-FLOW | Home",
  description:
    "Welcome to GYM-FLOW, your ultimate destination for fitness and health.",
};

export default function RootLayout({ children }) {
  const loadingRef = useRef(null);
  const pathname = usePathname(); 

  const isAuthPage = pathname === "/login" || pathname === "/register" || pathname === "/forgot-password" || pathname === "/otp-verification";
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home - Gym Management</title>
        <meta name="description" content="Welcome to Gym Management!" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {/* LOADING SCREEN */}
        <div
          ref={loadingRef}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 text-white z-50 animate-fadeOut"
        >
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-400 border-t-white rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-xl font-semibold">Loading...</p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="opacity-0 animate-fadeIn">
          {!isAuthPage && <Navbar />}
          <div className="min-h-[90vh]">{children}</div>
          {!isAuthPage && <Footer />}
        </div>
      </body>
    </html>
  );
}
