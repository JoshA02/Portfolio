import React from 'react'
import Image from 'next/image'
import resume from '../../public/resume.jpg';

export default function Resume() {
  return (
    <main className='flex justify-center mb-12'>
      <Image src={resume} alt='resume' className='w-screen max-w-3xl px-8' />
    </main>
  )
}
