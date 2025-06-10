import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ObligateSolution - 1-on-1 Coding Mentorship",
  description:
    "Transform your coding journey with personalized mentorship from industry experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-gray-950 text-gray-100 antialiased min-h-screen`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
