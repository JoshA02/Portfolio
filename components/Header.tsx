'use client'

import Link from 'next/link'
import Image from 'next/image'
import '@/components/header.css'
import {useState} from 'react'

export default function Header() {

  const [activeLink, setActiveLink] = useState('home');

  return (
    <header className='w-full pt-7 pb-17 flex sticky top-0 items-center justify-between px-4 z-50 font-heading'>
      <div className='flex-1 justify-start items-center flex'>
        <Link href="/">
          <Image
            src='/logo.svg'
            alt='Logo'
            width={200}
            height={0}
            priority={true}
          />
        </Link>
      </div>
      
      <div className='flex-1 justify-center items-center flex'>
        <div className='links'>
          <div className="switcher-active"/>
          <div className="switcher-hover"/>
          <Link href="#" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</Link>
          <Link href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => setActiveLink('projects')}>Projects</Link>
          <Link href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => setActiveLink('about')}>Resume</Link>
          <Link href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => setActiveLink('contact')}>Contact</Link>
        </div>
      </div>

      <div className='flex-1 justify-start items-center flex'/>
    </header>
  )
}
