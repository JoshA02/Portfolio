import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Josh Aaron. Send a message for collaboration/employment opportunities, project inquiries, or just to say hello.",
  keywords: ["contact Josh Aaron", "hire software engineer", "Josh Villyat contact", "freelance developer UK", "collaboration", "project inquiry", "contact software developer", "email Josh Aaron", "LinkedIn Josh Aaron"],
  openGraph: {
    title: "Contact | Josh Aaron",
    description: "Get in touch with Josh Aaron for collaboration/employment opportunities or project inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
