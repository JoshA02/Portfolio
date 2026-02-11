'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useCallback } from 'react';

interface CardProps {
  id?: string;
  children: React.ReactNode;
  backgroundImage?: string;
  tagline?: string;
  className?: string;
}

// Normalize angle difference to prevent jumps across 180/-180 boundary
function normalizeAngle(currentAngle: number, previousAngle: number): number {
  let diff = currentAngle - previousAngle;
  
  // If the difference is greater than 180, adjust by 360
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;
  
  return previousAngle + diff;
}

export default function Card({ id, children, backgroundImage, tagline, className }: CardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const previousAngleRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    
    // Smooth transition while moving
    cardRef.current.style.transition = 'box-shadow 0.3s, scale 0.3s, --shineAngle 0.25s ease-out';
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate angle from center of card to mouse position
    const angleRad = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    let angleDeg = angleRad * (180 / Math.PI) + 90; // +90 to align with CSS gradient direction
    
    // Normalize to prevent sudden jumps
    angleDeg = normalizeAngle(angleDeg, previousAngleRef.current);
    previousAngleRef.current = angleDeg;
    
    cardRef.current.style.setProperty('--shineAngle', `${angleDeg}deg`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    // Re-enable transition for smooth return
    cardRef.current.style.transition = 'box-shadow 0.3s, scale 0.3s, --shineAngle 0.5s ease-out';
    
    // Normalize the return to 0deg to prevent sudden jumps
    const normalizedTarget = normalizeAngle(0, previousAngleRef.current);
    previousAngleRef.current = normalizedTarget;
    
    cardRef.current.style.setProperty('--shineAngle', `${normalizedTarget}deg`);
  }, []);

  return (
    <section 
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`gradient-card-border bg-card-bg rounded-xl p-4 h-min overflow-hidden relative z-10 
        transition-[box-shadow,scale] duration-300 
              shadow-[inset_-179px_0px_250px_-45px_rgba(24,55,89,0.1)] 
        active:shadow-[inset_-179px_0px_250px_-45px_rgba(24,55,89,0.1),0_0px_400px_10px_var(--color-glow)] 
        active:z-20 active:scale-[1.01] 
        ${className || ''}`}
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
