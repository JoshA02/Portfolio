import NewTabLink from '@/components/NewTabLink';
import Image from 'next/image';
import VariableText from '@/components/VariableText';
import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';
import ProjectContainer from '@/components/ProjectContainer';
import EducationItem from '@/components/EducationItem';


function AboutMe() {
  return (
    <div className='flex flex-row mb-16'>
      <Image priority src="/profile.png" width={1024} height={1024} alt="An avatar of me" className='hidden sm:inline h-32 lg:h-36 w-auto mr-4' />
      <div>
        <Image src="/logo.svg" className='h-8 w-auto mb-2 mt-2' width={0} height={0} alt='logo' />
        <VariableText name='intro' className='hidden lg:inline' type='string' value={(<span>
          <span className='text-code-a'>“</span>Hey 👋, I'm <strong>Josh</strong>\n<br/>And I'm a junior full-stack developer studying Software Engineering at <strong>Nottingham Trent University</strong><span className='text-code-a'>”</span>
        </span>)}/>
        <VariableText name='intro' className='inline lg:hidden' type='string' value={(<span>
          <span className='text-code-a'>“</span>Hey 👋, I'm <strong>Josh</strong> and I'm a junior full-stack developer studying Software Engineering at <strong>Nottingham Trent University</strong><span className='text-code-a'>”</span>
        </span>)}/>
        <div className='gap-3 flex mt-1'>
          <NewTabLink href='https://github.com/JoshA02' label='gitHub'/>
          <NewTabLink href='https://www.linkedin.com/in/josh-villyat' label='linkedIn'/>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className='mb-16'>
      <SectionHeader title='education' subtitle='work-in-progress'/>
      <div className='gap-2 flex flex-col'>
        <EducationItem uniHref='https://ntu.ac.uk' imgSrc='/unis/ntu.png' title='BSc (Hons) Software Engineering' institution='Nottingham Trent University' location='Nottingham - UK' startDate={new Date(2022, 9, 1)} endDate={new Date(2026, 6, 1)}/>
        <EducationItem uniHref='https://nau.edu' imgSrc='/unis/nau.png' title='International Study Diploma in Professional Studies' institution='Northern Arizona University' location='Flagstaff, AZ - US' startDate={new Date(2024, 8, 1)} endDate={new Date(2025, 5, 1)}/>
        <EducationItem uniHref='https://www.nottinghamcollege.ac.uk' imgSrc='/unis/nc.png' title='UAL Level 3 Ext. Diploma - Games Development' institution='Nottingham College' location='Nottingham - UK' startDate={new Date(2020, 9, 1)} endDate={new Date(2022, 6, 1)}/>
      </div>
    </div>
  );
}

function FavouriteProjects() {
  return (
    <div>
      <SectionHeader className='md:hidden' title='favProjects' subtitle='made with care'/>
      <SectionHeader className='hidden md:block' title='favProjects' subtitle='made with care ❤️. check out www.joshaaron.me/projects for a full list'/>
      <ProjectContainer type='auto'>
        <Project title='Evently' link='https://github.com/JoshA02/Evently' coverImage='evently-admin' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png', '/project-tools/xd.png']} description='An events-browsing platform built using ASP.NET Core Razor Pages with EF Core for database interactions, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
        <Project
          title='Portfolio' link='https://github.com/JoshA02/Portfolio' coverImage='portfolio-home' miniImages={['/project-tools/nextjs.png', '/project-tools/react.png', '/project-tools/tailwind.png', '/project-tools/typescript.png', '/project-tools/docker.png', '/project-tools/figma.png']}
          description="Built using Next.js, React, Tailwind CSS, and TypeScript. The site is fully responsive and includes a 'contact me' form, protected by Google's reCAPTCHA v2, with messages forwarded to myself with Postmark. Hosted on my own server, running in a Docker container and reverse-proxied via Cloudflare Tunnels."
        />
        <Project title='CinemaShowtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='cinema-schedule' miniImages={['/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/react.png', '/project-tools/docker.png', '/project-tools/figma.png']} description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."/>
      </ProjectContainer>
    </div>
  );
}

export default function Home() {
  return (
    <main className='mb-16'>
      <AboutMe />
      <Education />
      <FavouriteProjects />
    </main>
  );
}
