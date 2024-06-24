'use client';

import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import {Syne} from 'next/font/google';
import "./topbar.css";
import useCurrentPath from '@/hooks/useCurrentPath';

const syne = Syne({subsets: ['latin']});

type NavigationItem = {
  href: string
  name: string
}
const navigation: NavigationItem[] = [
  { href: '/', name: 'Home' },
  { href: '/projects', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
]

function Topbar() { 
  return (
    <nav className={syne.className}>
        <Image src="/logo.svg" className='logo' width={0} height={0} alt='logo' />
        <div className='links'>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={'link ' + (useCurrentPath(item.href) ? 'active' : '')}>{item.name}</Link>
          ))}
        </div>
        <div className='personalise'>
          ...
      </div>
    </nav>
  )
}

export default Topbar;