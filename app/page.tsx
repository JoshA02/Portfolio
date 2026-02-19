import Card, { CardButton } from '@/components/Card';
import EducationCard from '@/components/EducationCard';
import TerminalCard from '@/components/TerminalCard';
import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/components/Carousel';
import SkillsCard from '@/components/SkillsCard';
import {favProjects} from '@/constants/projects';

export default function Home() {
  return (
    <div className="flex lg:pr-30 lg:pl-30 md:pr-12 md:pl-12 pr-4 pl-4 justify-center font-body pt-6 md:pt-0 pb-36">
      <main>
        <div className='grid gap-6 grid-cols-1 xl:gap-4 xl:grid-cols-2'>

          <Card id="home" backgroundImage="/icon/uk.png" tagline="WELCOME 👋">
            <h3 className='text-lg text-foreground font-title font-semibold'>Josh Aaron Villyat</h3>
            <p className='font-body text-card-fg'>A junior full-stack dev from the UK studying Software Engineering @ NTU</p>
            <div className='flex gap-4 mt-4'>
              <CardButton href="http://github.com/JoshA02" icon="github.svg" alt="github">GITHUB</CardButton>
              <CardButton href="mailto:hello@joshaaron.me" icon="email.svg" alt="email">EMAIL</CardButton>
              <CardButton href="http://linkedin.com/in/josh-villyat" icon="linkedin.svg" alt="linkedin">LINKEDIN</CardButton>
            </div>
          </Card>
          
          <TerminalCard className='hidden row-span-2 min-h-full max-h-full xl:flex'/>

          <EducationCard />

          <Card id="projects" tagline="FEATURED PROJECTS">
            <p className='font-body text-card-fg mb-2'>{"Some of my favourite projects that I've worked on recently."}</p>
            {/* <p className='font-mono text-xs text-card-fg mb-2 mt-1'>{"// made with care ❤️. check out www.joshaaron.me/projects for a full list"}</p> */}
            <Carousel>
              {favProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
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
