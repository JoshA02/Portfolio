import type { Metadata } from "next";
import { Funnel_Sans, Vend_Sans } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"]
});

const vendSans = Vend_Sans({
  variable: "--font-vend-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Josh Aaron | Software Engineer",
  description: "A junior software engineer building web and mobile applications. Currently studying Software Engineering @ Nottingham Trent University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${vendSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
