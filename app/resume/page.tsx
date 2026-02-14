import {Tagline} from '@/components/common'
import Image from 'next/image'

export default function Resume() {
  return (
    <div className="flex lg:pr-30 lg:pl-30 md:pr-12 md:pl-12 pr-4 pl-4 justify-center font-body pt-6 md:pt-0 pb-12">
      <main className='flex-1'>
        <Tagline tagline="resume" />
        <h1 className='text-3xl text-foreground font-title font-semibold tracking-wide mb-4'>My Resume</h1>
      </main>
    </div>
  )
}
