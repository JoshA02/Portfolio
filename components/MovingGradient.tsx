'use client';

import { useEffect, useRef } from 'react';

export default function MovingGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let time = 0;

    // Could use CSS animated custom properties but this has better compatibility with older browsers
    const animate = () => {
      time += 0.002;
      
      if (gradientRef.current) {
        const x = 50 + Math.sin(time) * 30;
        const y = 50 + Math.cos(time * 0.7) * 30;
        const x2 = 50 + Math.sin(time * 0.8 + 2) * 25;
        const y2 = 50 + Math.cos(time * 0.6 + 1) * 25;
        const x3 = 50 + Math.sin(time * 0.5 + 4) * 35;
        const y3 = 50 + Math.cos(time * 0.9 + 3) * 20;

        gradientRef.current.style.background = `
          radial-gradient(ellipse 80% 60% at ${x}% ${y}%, rgba(0, 115, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 60% 80% at ${x2}% ${y2}%, rgba(0, 115, 255, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse 70% 50% at ${x3}% ${y3}%, rgba(0, 115, 255, 0.08) 0%, transparent 60%)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={gradientRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
