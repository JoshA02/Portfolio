import React from 'react'
import Image from 'next/image'

export default function Resume() {
  return (
    <main className='flex justify-center mb-12'>
      <Image src='/resume.jpg' alt='resume' width={2480} height={3508} className='w-auto h-screen' />
    </main>
  )
}
