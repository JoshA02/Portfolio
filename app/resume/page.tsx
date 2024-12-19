import React from 'react'
import Image from 'next/image'

export default function Resume() {
  return (
    <main className='flex justify-center mb-12'>
      <Image src='/resume.jpg' alt='resume' width={800} height={1131} />
    </main>
  )
}
