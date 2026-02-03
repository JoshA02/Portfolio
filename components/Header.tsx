import Link from 'next/link'
import '@/components/header.css'

export default function Header() {
  return (
    <header>
      <div className='flex-1 justify-start items-center flex'/>
      
      <div className='flex-1 justify-center items-center flex'>
        <div className='links'>
          <div className="switcher-hover"/>
          <Link href="#">Home</Link>
          <Link href="#projects" className='active'>Projects</Link>
          <Link href="#about">Resume</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>

      <div className='flex-1 justify-start items-center flex'/>
    </header>
  )
}
