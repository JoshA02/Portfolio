import NewTabLink from '@/components/NewTabLink';
import {Syne} from 'next/font/google';
import Image from 'next/image';
import Comment from '@/components/Comment';
import VariableText from '@/components/VariableText';
import Link from 'next/link';

const syne = Syne({subsets: ['latin']});

function SectionHeader({title, subtitle}: {title: string, subtitle: string}) {
  return (
    <h1 className='text-white font-black'>
      {title}<span className={'text-primary font-bolder ' + syne.className}>;</span>
      <Comment message={subtitle}/>
    </h1>
  );
}


function AboutMe() {
  return (
    <div className='flex flex-row mb-16 bg-container bg-opacity-20 pr-4 rounded-md'>
      <Image priority src="/profile.svg" alt="An avatar of me" width={0} height={0} className='w-max mr-4' />
      <div>
        <Image src="/logo.svg" className='h-8 w-auto mb-2 mt-2' width={0} height={0} alt='logo' />
        <VariableText name='intro' type='string' value={(<span>
          <span className='text-code-a'> “</span>Hey 👋, my name is <strong>Josh</strong>\n<br/>And I'm a junior full-stack developer studying Software Engineering at <strong>Nottingham Trent University</strong><span className='text-code-a'>”</span>
        </span>)}/>
        <div className='gap-3 flex mt-1'>
          <NewTabLink href='https://github.com/JoshA02' label='gitHub'/>
          <NewTabLink href='https://www.linkedin.com/in/josh-villyat' label='linkedIn'/>
        </div>
      </div>
    </div>
  );
}

function EducationItem({title, institution, startYear, endYear, imgSrc, uniHref, glow}: {title: string, institution: string, startYear: string, endYear: string, imgSrc: string, uniHref?: string, glow?: boolean}) {
  return (
    <div className='flex items-center'>
      <Link className={'w-32 flex items-center justify-center' + (uniHref ? ' hover:scale-110 transition-transform' : '')} href={uniHref || ''}><Image src={imgSrc} alt="Nottingham Trent University logo" width={0} height={0} className={'w-max' + (glow ? ' drop-shadow-lg-white' : '')}/></Link>
      <div className='pl-2'>
        <h3 className='text-white font-bolder mb-1'>{title}</h3>
        {/* <p className='text-xs'>{institution}</p>
        <p className='text-xs'>{startYear} - {endYear}</p> */}
        <VariableText fontSize='13px' name='institution' type='string' value={(<span>
          <span className='text-code-a'> “</span>{institution}<span className='text-code-a'>”</span>
        </span>)}/>
        <VariableText fontSize='13px' name='startEndYears' type='string' value={(<span>
          <span className='text-code-a'> “</span>{startYear} - {endYear}<span className='text-code-a'>“</span>
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
        <EducationItem uniHref='https://nau.edu' imgSrc='/nau_light.svg' title='Exchange Study - Computer Science' institution='Northern Arizona University - Flagstaff, AZ, USA' startYear='2024' endYear='2025'/>
        <EducationItem uniHref='https://ntu.ac.uk' imgSrc='/ntu.svg' title='BSc (Hons) Software Engineering' institution='Nottingham Trent University - Nottingham, UK' startYear='2022' endYear='2026'/>
      </div>
    </div>
  );
}

function FavouriteProjects() {
  return (
    <div>
      <SectionHeader title='favProjects' subtitle='made with care'/>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-bolder'>Personal Website</h3>
          <p className='text-xs'>A personal website built with Next.js, Tailwind CSS, and TypeScript</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-white font-bolder'>Project 2</h3>
          <p className='text-xs'>A project description</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Education />
      <FavouriteProjects />
    </div>
  );
}
