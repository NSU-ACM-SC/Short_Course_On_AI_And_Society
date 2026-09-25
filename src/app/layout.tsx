import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
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
  title: "Cornell Tech AI & Society Masterclass | NSU ACM Student Chapter",
  description:
    "A 3-Day Short Course on AI & Society at North South University, led by Professor Mor Naaman of Cornell Tech. September 30 – October 2, 2026. Powered by Cognition.",
  keywords: [
    "AI and Society",
    "Cornell Tech",
    "NSU ACM",
    "North South University",
    "Mor Naaman",
    "Generative AI",
    "Masterclass",
    "Short Course",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="bg-offwhite text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
