'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useCallback, useState } from 'react';

interface CardProps {
  id?: string;
  children: React.ReactNode;
  backgroundImage?: string;
  tagline?: string;
  className?: string;
  maxDragDistance?: number;
}

// Normalize angle difference to prevent jumps across 180/-180 boundary
function normalizeAngle(currentAngle: number, previousAngle: number): number {
  let diff = currentAngle - previousAngle;
  
  // If the difference is greater than 180, adjust by 360
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;
  
  return previousAngle + diff;
}

// Easing function for elastic resistance - gets stiffer as it approaches max
function applyResistance(value: number, maxValue: number): number {
  const ratio = Math.abs(value) / maxValue;

  // Use a curve that provides more resistance as we approach the limit
  const resistance = 1 - Math.pow(ratio, 0.5);
  return value * Math.max(0.1, resistance);
}

export default function Card({ id, children, backgroundImage, tagline, className, maxDragDistance = 30 }: CardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const previousAngleRef = useRef<number>(0);
  
  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragStartRef = useRef({ mouseX: 0, mouseY: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    // Only start drag on primary mouse button
    if (e.button !== 0) return;
    
    // Don't start drag if mouse is within a Carousel component
    const target = e.target as HTMLElement;
    if (target.closest('[data-carousel]')) return;
    
    setIsDragging(true);
    dragStartRef.current = { mouseX: e.clientX, mouseY: e.clientY };
    
    // Prevent text selection while dragging
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    
    // Handle dragging
    if (isDragging) {
      const rawDeltaX = e.clientX - dragStartRef.current.mouseX;
      const rawDeltaY = e.clientY - dragStartRef.current.mouseY;
      
      // Apply resistance based on distance from center
      const distance = Math.sqrt(rawDeltaX * rawDeltaX + rawDeltaY * rawDeltaY);
      // console.log(`Raw distance: ${distance}, Raw delta: (${rawDeltaX}, ${rawDeltaY})`);
      
      let newX, newY;
      if (distance > 0) {
        // Normalize direction and apply resistance to magnitude
        const resistedDistance = applyResistance(distance, maxDragDistance);
        const scale = resistedDistance / distance;
        newX = rawDeltaX * scale;
        newY = rawDeltaY * scale;
      } else {
        newX = 0;
        newY = 0;
      }
      
      setOffset({ x: newX, y: newY });
    }
    
    // Disable transition on shineAngle during movement for instant response
    cardRef.current.style.transition = 'box-shadow 0.3s, scale 0.3s';
    
    // Calculate center of card for shine angle calculation
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
  }, [isDragging, maxDragDistance]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Release drag if mouse leaves
    if (isDragging) {
      setIsDragging(false);
      setOffset({ x: 0, y: 0 });
    }
    
    if (!cardRef.current) return;
    
    // Re-enable transition for smooth return
    cardRef.current.style.transition = 'box-shadow 0.3s, scale 0.3s, --shineAngle 0.5s ease-out';
    
    // Normalize the return to 0deg to prevent sudden jumps
    const normalizedTarget = normalizeAngle(0, previousAngleRef.current);
    previousAngleRef.current = normalizedTarget;
    
    cardRef.current.style.setProperty('--shineAngle', `${normalizedTarget}deg`);
  }, [isDragging]);

  return (
    <section 
      ref={cardRef}
      id={id}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: isDragging 
          ? 'box-shadow 0.3s, scale 0.3s' 
          // Thanks to https://easingwizard.com \/
          : 'box-shadow 0.3s, scale 0.3s, transform 0.5s linear(0, 0.002 0.3%, 0.01 0.7%, 0.024 1.1%, 0.044 1.5%, 0.069 1.9%, 0.098 2.3%, 0.169 3.1%, 0.243 3.8%, 0.336 4.6%, 0.705 7.5%, 0.85 8.7%, 0.981 9.9%, 1.038 10.5%, 1.091 11.1%, 1.138 11.7%, 1.172 12.2%, 1.202 12.7%, 1.233 13.3%, 1.254 13.8%, 1.274 14.4%, 1.288 15%, 1.297 15.6%, 1.301 16.3%, 1.298 17.1%, 1.287 17.9%, 1.271 18.7%, 1.249 19.5%, 1.22 20.4%, 1.184 21.4%, 1.055 24.8%, 1.018 25.9%, 0.985 27%, 0.956 28.2%, 0.934 29.4%, 0.919 30.6%, 0.911 31.9%, 0.91 32.6%, 0.91 33.4%, 0.918 35%, 0.934 36.8%, 0.983 41.1%, 1.004 43.3%, 1.013 44.5%, 1.019 45.7%, 1.024 46.9%, 1.027 48.1%, 1.027 49.7%, 1.025 51.4%, 0.999 59.5%, 0.995 61.8%, 0.992 64.1%, 0.993 67.7%, 1 75.8%, 1.002 80.2%, 1)',
        cursor: isDragging ? 'grabbing' : 'default', // using default for UX clarity; some cards will have interactive elements (carousel)
      }}
      className={`gradient-card-border bg-card-bg rounded-xl p-4 h-min overflow-hidden relative z-10 
              shadow-[inset_-179px_0px_250px_-45px_var(--color-card-inset-shadow)] 
        active:shadow-[inset_-179px_0px_250px_-45px_var(--color-card-inset-shadow),0_0px_400px_10px_var(--color-glow)] 
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
