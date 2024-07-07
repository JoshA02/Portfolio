import React from 'react'

export default function Footer() {
  
  const year = new Date().getFullYear();
  
  return (
    <footer className="absolute bottom-0 w-full text-center pt-3 pb-3 bg-container text-white p-2">
      <p>&copy; {year} Josh Aaron</p>
      <p className='opacity-70'>reach out at <a className='font-bold' target='_blank' href='mailto:hello@joshaaron.me'>hello@joshaaron.me</a></p>
    </footer>
  )
}
