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
}
const navigation: NavigationItem[] = [
  { href: '/', name: 'Home' },
  { href: '/projects', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
]

export default function Topbar() { 
  return (
    <nav className={syne.className}>
        <Image src="/logo.svg" className='logo' width={0} height={0} alt='logo' />
        <div className='links'>
          {navigation.map((item) => (
            <TopbarLink key={item.href} item={item} />
          ))}
        </div>
        <div className='personalise'>
          ...
      </div>
    </nav>
  )
};