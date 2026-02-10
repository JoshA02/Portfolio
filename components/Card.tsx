import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id?: string;
  children: React.ReactNode;
  backgroundImage?: string;
  tagline?: string;
  className?: string;
}

export default function Card({ id, children, backgroundImage, tagline, className }: CardProps) {
  return (
    <section 
      id={id}
      className={`gradient-card-border bg-card-bg rounded-xl p-4 h-min relative overflow-hidden z-10 ${className || ''}`}
      style={{
        boxShadow: "inset -179px 0px 250px -45px rgba(24, 55, 89, 10%)"
      }}
    >
      {backgroundImage && (
        <Image 
          src={backgroundImage} 
          alt='' 
          width={0} 
          height={0} 
          sizes='100vw' 
          className='w-full h-auto absolute top-0 -right-40 -z-10 -translate-y-1/4 scale-50'
        />
      )}
      {tagline && (
        <h2 className='text-sm font-heading text-accent tracking-widest font-medium'>{"// " + tagline}</h2>
      )}
      {children}
    </section>
  );
}

interface CardButtonProps {
  href: string;
  icon: string;
  alt: string;
  children: React.ReactNode;
}

export function CardButton({ href, icon, alt, children }: CardButtonProps) {  
  return (
    <Link href={href} target="_blank"
      className='text-sm text-accent border border-transparent rounded-xl
                px-4 py-2 font-bold active:scale-95 font-body
                flex items-center transition-transform duration-100'
      style={{
        background: "linear-gradient(to bottom, var(--accent-faded), var(--accent-faded)) padding-box, linear-gradient(to bottom, hsl(from var(--accent) h s calc(l + 10)), hsl(from var(--accent) h s calc(l - 10))) border-box"
      }}
    >
      <Image src={"icon/" + icon} alt={alt} width={16} height={16} className='inline-block mr-2'/>
      {children}
    </Link>
  );
}
