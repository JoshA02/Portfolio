import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import {Syne} from 'next/font/google';
import "./topbar.css";
import TopbarLink from './TopbarLink';

const syne = Syne({subsets: ['latin']});

export type NavigationItem = {
  href: string
  name: string
  icon: string
}
const navigation: NavigationItem[] = [
  { href: '/', name: 'Home', icon: 'home' },
  { href: '/projects', name: 'Projects', icon: 'code' },
  { href: '/contact', name: 'Contact', icon: 'email' },
]

export default function Topbar() { 
  return (
    <nav className={syne.className}>
      <Link href='/' style={{height: '100%'}}><Image src="/logo.svg" className='logo' width={0} height={0} alt='logo' /></Link>
      <div className='links'>
        {navigation.map((item) => (
          <TopbarLink key={item.href} item={item} />
        ))}
      </div>
      {/* <div className='personalise'>
        ...
      </div> */}
    </nav>
  )
};