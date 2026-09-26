import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { eventMetadata } from "@/data/event";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: eventMetadata.title,
  description: eventMetadata.description,
  keywords: eventMetadata.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="bg-offwhite text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
