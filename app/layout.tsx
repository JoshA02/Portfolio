import type { Metadata } from "next";
import { Funnel_Display, Funnel_Sans, Vend_Sans } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MovingGradient from '@/components/MovingGradient';

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"]
});

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
        className={`bg-background ${funnelDisplay.variable} ${funnelSans.variable} ${vendSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <MovingGradient />
        <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
