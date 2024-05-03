import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const porky = localFont({
  src: "./Porky.woff2",
});

export const metadata: Metadata = {
  title: "BLOWJAK - Blow it or Jak it, either way it'll go up.",
  description: "Blow it or Jak it, either way it'll go up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={porky.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
