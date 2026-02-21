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
  title: {
    default: "Josh Aaron | Software Engineer",
    template: "%s | Josh Aaron"
  },
  description: "A junior software engineer building web and mobile applications. Currently studying Software Engineering @ Nottingham Trent University.",
  keywords: ["Josh Aaron", "Josh Villyat", "Josh Aaron Villyat", "Villyat", "software engineer", "swe", "software developer", "web developer", "full-stack developer", "frontend developer", "backend developer", "React", "Next.js", "TypeScript", "JavaScript", "portfolio", "Nottingham Trent University", "NTU", "UK developer", "junior developer", "mobile developer"],
  authors: [{ name: "Josh Aaron Villyat" }],
  creator: "Josh Aaron Villyat",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://joshaaron.me",
    siteName: "Josh Aaron | Software Engineer",
    title: "Josh Aaron | Software Engineer",
    description: "A junior software engineer building web and mobile applications. Currently studying Software Engineering @ Nottingham Trent University.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Aaron | Software Engineer",
    description: "A junior software engineer building web and mobile applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
