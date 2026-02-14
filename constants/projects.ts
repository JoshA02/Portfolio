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
  | 'tailwind'  
  | 'bo3'
  | 'xd'
  | 'figma'
  | 'blender'
  | 'ue4'
  | 'docker'
  | 'spigot'
  | 'java'
  | 'cpp'
  | 'boost'
  | 'python';

export type ProjectCategory = 'web' | 'mobile' | 'game dev' | 'spigot' | 'misc';

export const projectCategoryDescriptions: Record<ProjectCategory, string> = {
  web: "",
  mobile: "",
  'game dev': "",
  spigot: "Minecraft server plugins",
  misc: "Uni assignments & fun projects to learn new tech",
};

export type Project = {
  name: string;
  description: string;
  technologies: Technology[];
  href?: string;
  backgroundImage?: string;
  isFeatured?: boolean;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: "This portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects and skills.",
    technologies: ['react', 'next', 'typescript', 'tailwind', 'figma', 'docker'] as const,
    href: "https://www.github.com/JoshA02/portfolio",
    isFeatured: true,
    category: 'web',
  },
  {
    name: "Evently",
    description: "An events-browsing platform built using ASP.NET Core Razor Pages with EF Core for database interactions, allowing users to host, discover and register for upcoming events.",
    technologies: ['aspnet', 'cshtml', 'csharp', 'xd'] as const,
    href: "https://www.github.com/JoshA02/Evently",
    isFeatured: true,
    category: 'web',
  },
  {
    name: "Cinema Showtimes",
    description: "A web app developed with React and Express.js that provides real-time cinema showtimes, integrating third-party APIs for movie data and Express for backend services.",
    technologies: ['react', 'expressjs', 'typescript', 'figma', 'docker'] as const,
    href: "https://www.github.com/JoshA02/CinemaShowtimes",
    category: 'web',
    isFeatured: true,
  },
  {
    name: "RandFlix",
    description: "A Chrome extension that allows users to play a random episode from a chosen show within Netflix. Built in TypeScript, using Chrome manifest v3.",
    technologies: ['typescript'] as const,
    href: "https://www.github.com/JoshA02/ShuffleFlix",
    category: 'web'
  },
  {
    name: "Manhunt Plus",
    description: 'Adds the popular "Manhunt" gamemode to your server; written in Java. Highly configurable and includes a variety of features to enhance the gameplay experience, including timed air drops, compass tracking, and more.',
    technologies: ['spigot', 'java'] as const,
    href: "https://www.spigotmc.org/resources/manhunt-plus-free-1-8-1-17-1.81888/",
    category: 'spigot'
  },
  {
    name: "Money Drops",
    description: "Allows players to receive money drops from mobs they kill. Highly configurable and includes a variety of features to enhance the gameplay experience, including custom mob drops, drop rates, and more.",
    technologies: ['spigot', 'java'] as const,
    href: "https://www.spigotmc.org/resources/money-drops-1-8-1-18.78789/",
    category: 'spigot'
  },
  {
    name: "Puzzle MP",
    description: "A 3D, coop puzzle game made in Unreal Engine 4 for a college project. Implements the Steam online subsystem for multiplayer and developed almost entirely in C++, with a few elements expanded upon via Blueprints.",
    technologies: ['cpp', 'ue4', 'blender'] as const,
    href: "https://www.github.com/JoshA02/PuzzleMP",
    category: 'game dev'
  },
  {
    name: "Die Rise - BO3 Remake",
    description: 'A partial remake of the classic Black Ops 2 zombies map "Die Rise", built using the official Black Ops III Mod Tools.',
    technologies: ['blender', 'bo3'] as const,
    href: "https://steamcommunity.com/sharedfiles/filedetails/?id=1516544300",
    category: 'game dev'
  },
  {
    name: "Weather App",
    description: "Developed in C++ using object-oriented programming principles, using curl for web requests and the Boost testing library for unit testing. Fetches weather data from a public API and displays it to the user (historic, current, and forecasted data), allowing them to search for weather data by city name. Users can also save favourite cities for quick access and choose to display data in either metric or imperial units.",
    technologies: ['cpp', 'boost'] as const,
    href: "https://github.com/JoshA02/WeatherApp",
    category: 'misc'
  },
  {
    name: "Sueca Scorer",
    description: "Submitted for a first-year university assignment, SuecaScorer is a command-line application that scores and evaluates matches of the Portuguese card game 'Sueca'. Built using Python, with a focus on object-oriented programming and algorithmic design, implementing scoring algorithms based on traditional rules.",
    technologies: ['python'] as const,
    href: "https://github.com/JoshA02/SuecaScorer",
    category: 'misc'
  },
  {
    name: "Gym POS System",
    description: "A gym Point of Sale system developed for a first-year university assignment using C++ and WinForms. The system is designed to manage gym hours and handle transactions for gym services, implementing access-levels to restrict higher-level actions from regular staff members. Developed in C++ using object-oriented programming principles and file I/O for data storage.",
    technologies: ['cpp', 'xd'] as const,
    category: 'misc'
  }
];

export function getProjects(category?: ProjectCategory): Project[] {
  if(!category) return projects;
  return projects.filter(project => project.category === category);
}
export function getProjectCategories(): ProjectCategory[] {
  const categories = new Set<ProjectCategory>();
  projects.forEach(project => categories.add(project.category));
  return Array.from(categories);
}

export const favProjects = projects.filter(project => project.isFeatured);