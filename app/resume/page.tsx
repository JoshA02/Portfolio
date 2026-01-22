import Image from 'next/image'
import Link from 'next/link'
import resume from '../../public/resume.jpg'
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: "Josh Aaron | Resume",
  description: "View the resume of Josh Aaron, a junior full-stack developer studying Software Engineering at Nottingham Trent University.",
};

export default function Resume() {
  return (
    <main className="flex flex-col items-center mb-12 relative">
      <Link
        href="/Josh-Villyat-Resume.pdf"
        download
        className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
      >
        Download PDF
      </Link>

      <Image
        src={resume}
        alt="Resume preview"
        className="w-screen max-w-3xl px-8"
        priority
      />
    </main>
  )
}
