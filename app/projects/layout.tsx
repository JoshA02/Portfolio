import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Josh Aaron's portfolio of software projects including web applications, mobile apps, games, and more. Built with React, Next.js, TypeScript, and other modern technologies.",
  keywords: ["Josh Aaron projects", "Josh Villyat portfolio", "software projects", "web applications", "mobile apps", "React projects", "Next.js projects", "TypeScript projects", "game development", "open source"],
  openGraph: {
    title: "Projects | Josh Aaron",
    description: "Explore Josh Aaron's portfolio of software projects.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
