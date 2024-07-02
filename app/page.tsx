import NewTabLink from '@/components/NewTabLink';
import Image from 'next/image';
import VariableText from '@/components/VariableText';
import Link from 'next/link';
import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';


function AboutMe() {
  return (
    // <div className='flex flex-row mb-16 bg-container bg-opacity-20 pr-4 rounded-md'>
    <div className='flex flex-row mb-16'>
      <Image priority src="/profile.png" width={1024} height={1024} alt="An avatar of me" className='h-32 lg:h-36 w-auto mr-4' />
      <div>
        <Image src="/logo.svg" className='h-8 w-auto mb-2 mt-2' width={0} height={0} alt='logo' />
        <VariableText name='intro' type='string' value={(<span>
          <span className='text-code-a'> “</span>Hey 👋, I'm <strong>Josh</strong>\n<br/>And I'm a junior full-stack developer studying Software Engineering at <strong>Nottingham Trent University</strong><span className='text-code-a'>”</span>
        </span>)}/>
        <div className='gap-3 flex mt-1'>
          <NewTabLink href='https://github.com/JoshA02' label='gitHub'/>
          <NewTabLink href='https://www.linkedin.com/in/josh-villyat' label='linkedIn'/>
        </div>
      </div>
    </div>
  );
}

function EducationItem({title, institution, startDate, endDate, imgSrc, uniHref, glow}: {title: string, institution: string, startDate: Date, endDate: Date, imgSrc: string, uniHref?: string, glow?: boolean}) {
  
  const complete = new Date() > new Date(endDate);

  return (
    <div className='flex items-center'>
      <Link target='_blank' className={'w-32 flex items-center justify-center' + (uniHref ? ' hover:scale-110 transition-transform' : '')} href={uniHref || ''}>
        <Image src={imgSrc} alt="Nottingham Trent University logo" width={1024} height={1024} className={'w-max' + (glow ? ' drop-shadow-lg-white' : '')}/>
      </Link>
      <div className='pl-2'>
        <div className='flex items-center gap-4 mb-1'>
          <h3 className='text-white font-bold m-0'>{title}</h3>
          <div className='flex items-center gap-1'>
            <div className={'rounded-full w-3 aspect-square animate-pulse' + (complete ? ' bg-green-600' : ' bg-primary')}/>
            <span className='text-xs text-gray-300'>{complete ? 'complete' : 'ongoing'}</span>
          </div>
        </div>
        <VariableText fontSize='0.8125em' name='institution' type='string' value={(<span>
          <span className='text-code-a'> “</span>{institution}<span className='text-code-a'>”</span>
        </span>)}/>
        <VariableText fontSize='0.8125em' name='startEndYears' type='string' value={(<span>
          <span className='text-code-a'> “</span>{startDate.getFullYear()} - {endDate.getFullYear()}<span className='text-code-a'>“</span>
        </span>)}/>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className='mb-16'>
      <SectionHeader title='education' subtitle='work-in-progress'/>
      <div className='gap-2 flex flex-col'>
        <EducationItem uniHref='https://nau.edu' imgSrc='/unis/nau.png' title='Study Exchange - Computer Science' institution='Northern Arizona University - Flagstaff, AZ, USA' startDate={new Date(2024, 8, 1)} endDate={new Date(2025, 5, 1)}/>
        <EducationItem uniHref='https://ntu.ac.uk' imgSrc='/unis/ntu.png' title='BSc (Hons) Software Engineering' institution='Nottingham Trent University - Nottingham, UK' startDate={new Date(2022, 9, 1)} endDate={new Date(2026, 6, 1)}/>
      </div>
    </div>
  );
}

function FavouriteProjects() {
  return (
    <div>
      <SectionHeader className='md:hidden' title='favProjects' subtitle='made with care'/>
      <SectionHeader className='hidden md:block' title='favProjects' subtitle='made with care ❤️. check out www.joshaaron.me/projects for a full list'/>
      <div className='w-full overflow-x-scroll pb-2'>
        <div className='flex flex-nowrap w-max lg:w-auto lg:flex-wrap gap-6 max-w-screen-lg'>
          <Project title='Evently' link='https://github.com/JoshA02/Evently' coverImage='/project-images/evently-admin.png' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png']} description='An events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
          <Project title='Portfolio' link='https://github.com/JoshA02/Portfolio' coverImage='/project-images/portfolio-home.png' miniImages={['/project-tools/nextjs.png', '/project-tools/react.png', '/project-tools/tailwind.png', '/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/docker.png']} description="Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod."/>
          <Project title='CinemaShowtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='/project-images/cinema-schedule.jpg' miniImages={['/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/react.png', '/project-tools/docker.png']} description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."/>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Education />
      <FavouriteProjects />
    </main>
  );
}
