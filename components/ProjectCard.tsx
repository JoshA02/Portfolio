'use client';

import Image from 'next/image';

export type Technology = 
  | 'react' 
  | 'ios' 
  | 'android' 
  | 'typescript' 
  | 'aspnet' 
  | 'expressjs' 
  | 'csharp' 
  | 'cshtml' 
  | 'unreal' 
  | 'next'  
  | 'bo3';

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: Technology[];
  backgroundImage?: string;
}

const technologyIcons: Record<Technology, string> = {
  react: '/icon/tech/react.png',
  ios: '/icon/tech/ios.png',
  android: '/icon/tech/android.png',
  typescript: '/icon/tech/typescript.png',
  aspnet: '/icon/tech/aspnet.png',
  expressjs: '/icon/tech/expressjs.png',
  csharp: '/icon/tech/csharp.png',
  cshtml: '/icon/tech/cshtml.png',
  unreal: '/icon/tech/unreal.png',
  next: '/icon/tech/next.png',
  bo3: '/icon/tech/bo3.png',
};

function TechIcons({ technologies }: { technologies: Technology[] }) {
  return (
    <div className="flex items-center h-4 gap-1">
      {technologies.map((tech, index) => (
        <div key={tech} className="flex items-center h-full">
          {index > 0 && <span className="text-foreground text-lg font-semibold mx-0.5">·</span>}
          <div className="h-full aspect-square relative">
            <Image 
              src={technologyIcons[tech]} 
              alt={tech} 
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectCard({ name, description, technologies, backgroundImage }: ProjectCardProps) {
  return (
    <div className="gradient-card-border bg-card-bg rounded-xl p-4 w-90 h-56 relative overflow-hidden flex flex-col gap-1">
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Image 
            src={backgroundImage} 
            alt="" 
            fill
            className="object-cover scale-150"
          />
        </div>
      )}
      
      {/* Header with name and tech icons */}
      <div className="flex items-center gap-2 relative z-10">
        <h3 className="text-lg text-foreground font-title font-medium tracking-wide">
          {name}
        </h3>
        <TechIcons technologies={technologies} />
      </div>
      
      {/* Description */}
      <p className="font-body text-card-fg text-sm relative z-10">
        {description}
      </p>
    </div>
  );
}
