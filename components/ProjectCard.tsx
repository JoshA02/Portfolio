'use client';

import {Project, Technology} from '@/constants/projects';
import Image from 'next/image';
import {CardButton} from './Card';

interface ProjectCardProps {
  project: Project;
  className?: string;
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
  tailwind: '/icon/tech/tailwind.png',
  bo3: '/icon/tech/bo3.png',
  xd: '/icon/tech/xd.png',
  figma: '/icon/tech/figma.png',
  blender: '/icon/tech/blender.png',
  ue4: '/icon/tech/ue4.png',
  docker: '/icon/tech/docker.png',
  spigot: '/icon/tech/spigot.png',
  java: '/icon/tech/java.png',
  cpp: '/icon/tech/cpp.png',
  boost: '/icon/tech/boost.png',
  python: '/icon/tech/python.png',
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

export default function ProjectCard({ project, className }: ProjectCardProps) {

  const isRepoLink = project.href?.includes("github.com") || false;
  const isSpigotLink = project.href?.includes("spigotmc.org") || false;

  return (
    <div className={`gradient-card-border bg-card-bg rounded-xl p-4 w-90 h-56 relative overflow-hidden flex flex-col gap-1 ${className}`}>
      {/* Background image */}
      {project.backgroundImage && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Image 
            src={project.backgroundImage} 
            alt="" 
            fill
            className="object-cover scale-150"
          />
        </div>
      )}
      
      {/* Header with name and tech icons */}
      <div className="flex items-center gap-2 relative z-10">
        <h3 className="text-lg text-foreground font-title font-medium tracking-wide">
          {project.name}
        </h3>
        <TechIcons technologies={project.technologies} />
      </div>
      
      {/* Description */}
      <p className="font-body text-card-fg text-sm relative z-10">
        {project.description}
      </p>
      
      {
        project.href && (
          <CardButton
          href={project.href}
          icon={isRepoLink ? "github.svg" : (isSpigotLink ? "spigot.svg" : "")}
          alt={isRepoLink ? "link to project repository" : "link to project"}
          className="absolute bottom-4 right-4 z-10"
        >
          {isRepoLink ? "REPO" : "VISIT"}
        </CardButton>
        ) 
      }
    </div>
  );
}
