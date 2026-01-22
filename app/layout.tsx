import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from '@/components/Topbar';
import Canvas from '@/components/Canvas';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josh Aaron | Portfolio",
  description: "Hey 👋, I'm Josh and I'm a junior full-stack developer studying Software Engineering at Nottingham Trent University",
  keywords: ['Josh Aaron', 'Josh Villyat', 'Josh', 'Villyat', 'Portfolio', 'Developer', 'Software Engineer', 'Full-Stack Developer', 'Nottingham Trent University', 'NTU', 'Web Developer', 'Programmer', 'Northern Arizona University', 'NAU'],
  authors: [{ name: 'Josh Aaron', url: 'https://www.joshaaron.me' }],
  openGraph: {
    title: "Josh Aaron | Portfolio",
    description: "Hey 👋, I'm Josh and I'm a junior full-stack developer studying Software Engineering at Nottingham Trent University",
    url: 'https://www.joshaaron.me',
    siteName: 'Josh Aaron Portfolio',
    images: [
      {
        url: 'https://www.joshaaron.me/profile.png',
        width: 800,
        height: 800,
        alt: 'Josh Aaron Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen flex flex-col relative'}> {/* Force height to be at least the height of the viewport */}
        <Canvas/>
        <Topbar/>
        <>{children}</>
        <Footer/>
      </body>
    </html>
  );
}
