import {Tagline} from '@/components/common'
import Image from 'next/image'
import { Download } from 'lucide-react'
import {CardButton} from '@/components/Card'

export default function Resume() {
  return (
    <div className="flex lg:pr-30 lg:pl-30 md:pr-12 md:pl-12 pr-4 pl-4 justify-center font-body pt-6 md:pt-0 pb-12">
      <main className='flex-1 max-w-4xl'>
        <Tagline tagline="resume" />
        <div className='flex items-center justify-between mb-6 flex-wrap gap-4'>
          <h1 className='text-3xl text-foreground font-title font-semibold tracking-wide'>My Resume</h1>
          
          
          <a 
            href="/Josh-Aaron-Resume.pdf"
            download
            className='flex items-center gap-2 bg-accent-faded border border-accent/40 
                       text-accent font-body font-bold text-sm px-5 py-2.5 rounded-xl
                       hover:bg-accent/10 transition-colors active:scale-95'
          >
            <Download className="w-4 h-4" />
            DOWNLOAD PDF
          </a>

        </div>
        
        {/* Resume display */}
        <div className='animate-fade-in-up gradient-card-border bg-card-bg rounded-xl p-4 md:p-6 shadow-lg'>
          <div className='relative w-full'>
            <Image 
              src="/resume.jpg" 
              alt="Josh Aaron Villyat's Resume"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}
