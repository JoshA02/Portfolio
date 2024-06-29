import Link from 'next/link';
import Image from 'next/image';

export default function NewTabLink({label, href}: {label: string, href: string}) {
  return (
    <div className='flex'>
      <Link target='_blank' href={href} className='blueLink'>{label}</Link>
      <Image src="/openInNew.svg" className='ml-1 -translate-y-1' width={8} height={8} alt={''}/>
    </div>
  )
}