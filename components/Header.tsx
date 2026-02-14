'use client'

import Link from 'next/link'
import Image from 'next/image'
import '@/components/header.css'
import {useState} from 'react'
import {usePathname} from 'next/navigation'
import { Home, FolderGit2, FileUser, Mail } from 'lucide-react'

type navLink = 'home' | 'projects' | 'resume' | 'contact' | undefined;

export default function Header() {

  const pathname = usePathname();

  const [activeLink, setActiveLink] = useState<navLink>(
    pathname === '/' ? 'home' : pathname.slice(1) as navLink
  );

  return (
    <header className='w-full md:pt-7 pb-7 md:pb-17 pt-17 flex fixed bottom-0 md:sticky md:top-0 gap-4 items-center justify-between px-4 z-50 font-heading'>
      <div className='flex-1 justify-start items-center flex'>
        <Link className='hidden md:block' href="/">
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
          <Link href="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>
            <span className='hidden md:inline'>Home</span>
            <Home className='inline md:hidden' size={24}/>
          </Link>
          <Link href="projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => setActiveLink('projects')}>
            <span className='hidden md:inline'>Projects</span>
            <FolderGit2 className='inline md:hidden' size={24}/>
          </Link>
          <Link href="resume" className={activeLink === 'resume' ? 'active' : ''} onClick={() => setActiveLink('resume')}>
            <span className='hidden md:inline'>Resume</span>
            <FileUser className='inline md:hidden' size={24}/>
          </Link>
          <Link href="contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => setActiveLink('contact')}>
            <span className='hidden md:inline'>Contact</span>
            <Mail className='inline md:hidden' size={24}/>
          </Link>
        </div>
      </div>

      <div className='flex-1 justify-start items-center flex'/>
    </header>
  )
}
