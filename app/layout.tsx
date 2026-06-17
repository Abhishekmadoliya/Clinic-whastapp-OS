import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clinic OS — High-Density Practice Management for Indian Clinics",
  description: "A WhatsApp-native, AI-powered practice management platform for India's clinic doctors. Book appointments, transcribe consultations into prescriptions, and share ABDM-compliant health records.",
  keywords: "clinic os, practice management, doctor app, whatsapp booking, ai soap notes, abdm compliance, healthcare saas india",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
