import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from '@/components/Topbar';
import Canvas from '@/components/Canvas';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josh Aaron",
  description: "My portfolio website",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Canvas/>
          <Topbar/>
          <main>{children}</main>
      </body>
    </html>
  );
}
