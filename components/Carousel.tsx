'use client';

import { useState, useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  className?: string;
}

export default function Carousel({ children, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const child = containerRef.current.children[index] as HTMLElement;
      if (child) {
        containerRef.current.scrollTo({
          left: child.offsetLeft - containerRef.current.offsetLeft,
          behavior: 'smooth'
        });
        setCurrentIndex(index);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollTo(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < children.length - 1) {
      scrollTo(currentIndex + 1);
    }
  };

  return (
    <div className={`relative ${className || ''}`}>
      {/* Carousel container */}
      <div 
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children.map((child, index) => (
          <div key={index} className="snap-start shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {children.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/8 
                       bg-card-bg border border-border-light rounded-full p-2
                       disabled:opacity-30 disabled:cursor-not-allowed
                       hover:bg-accent-faded transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === children.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/8 
                       bg-card-bg border border-border-light rounded-full p-2
                       disabled:opacity-30 disabled:cursor-not-allowed
                       hover:bg-accent-faded transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {children.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-accent' 
                  : 'bg-border-light hover:bg-border-dark'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
