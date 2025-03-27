import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P, Bebas_Neue, JetBrains_Mono } from "next/font/google";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

const americanaFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-americana",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A modern backend developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${pixelFont.variable} ${americanaFont.variable} ${monoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}