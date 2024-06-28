import Link from 'next/link';
import Image from 'next/image';

export default function BlueLink({label, href}: {label: string, href: string}) {
  return (
    <div className='flex'>
      <Link href={href} className='blueLink'>{label}</Link>
      <Image src="/openInNew.svg" className='ml-1 -translate-y-1' width={8} height={8} alt={''}/>
    </div>
  )
}