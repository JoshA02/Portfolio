import Card, { CardButton } from '@/components/Card';
import EducationCard from '@/components/EducationCard';
import TerminalCard from '@/components/TerminalCard';
import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/components/Carousel';
import SkillsCard from '@/components/SkillsCard';

const projects = [
  {
    name: "Evently",
    description: "An events-browsing platform built using ASP.NET Core Razor Pages with EF Core for database interactions, allowing users to host, discover and register for upcoming events.",
    technologies: ['aspnet', 'cshtml'] as const,
  },
  {
    name: "Portfolio",
    description: "This portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects and skills.",
    technologies: ['react', 'typescript'] as const,
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen pr-30 pl-30 justify-center font-body">
      <main>
        <div className='gap-4 grid grid-cols-2'
          style={{
            gridTemplateRows: "repeat(2, minmax(0, max-content))"
          }}
        >
          
          <Card id="home" backgroundImage="/icon/uk.png" tagline="WELCOME">
            <h3 className='text-lg text-foreground font-title font-semibold'>Josh Aaron Villyat</h3>
            <p className='font-body text-card-fg'>A junior full-stack dev from the UK studying Software Engineering @ NTU</p>
            <div className='flex gap-4 mt-4'>
              <CardButton href="http://github.com/JoshA02" icon="github.svg" alt="github">GITHUB</CardButton>
              <CardButton href="mailto:hello@joshaaron.me" icon="email.svg" alt="email">EMAIL</CardButton>
              <CardButton href="http://linkedin.com/in/josh-villyat" icon="linkedin.svg" alt="linkedin">LINKEDIN</CardButton>
            </div>
          </Card>
          
          <TerminalCard/>

          <EducationCard />

          <Card id="projects" tagline="FEATURED PROJECTS">
            <p className='font-body text-card-fg mb-2'>{"Some of my favourite projects I've worked on recently."}</p>
            <Carousel>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  description={project.description}
                  technologies={[...project.technologies]}
                />
              ))}
            </Carousel>
          </Card>

          <SkillsCard />

        </div>
      </main>
    </div>
  );
}
