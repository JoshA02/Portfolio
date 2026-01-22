'use client';

import Link from 'next/link';
import Image from 'next/image';
import VariableText from '@/components/VariableText';

export default function EducationItem({title, institution, location, startDate, endDate, imgSrc, uniHref, glow}: {title: string, institution: string, location: string, startDate: Date, endDate: Date, imgSrc: string, uniHref?: string, glow?: boolean}) {
  
  const complete = new Date() > new Date(endDate);

  return (
    <div className='flex items-center'>
      <Link target='_blank' className={'w-20 sm:w-32 flex items-center justify-center' + (uniHref ? ' hover:scale-110 transition-transform' : '')} href={uniHref || ''}>
        <Image src={imgSrc} alt="Nottingham Trent University logo" width={1024} height={1024} className={'w-full min-w-20' + (glow ? ' drop-shadow-lg-white' : '')}/>
      </Link>
      <div className='pl-2'>
        <div className='flex items-center gap-4 mb-1'>
          <h3 className='text-white font-bold m-0 text-sm sm:text-base'>{title}</h3>
          <div className='hidden sm:flex items-center gap-1'>
            <div className={'rounded-full w-3 aspect-square animate-pulse' + (complete ? ' bg-green-600' : ' bg-primary')}/>
            <span className='text-xs text-gray-300'>{complete ? 'complete' : 'ongoing'}</span>
          </div>
        </div>

        <div className='inline sm:hidden'>
          <p className='text-xs'>{institution}</p>
          <p className='text-xs'>{startDate.getFullYear()} - {endDate.getFullYear().toString()}</p>
        </div>

        <div className='hidden sm:inline'>
          <VariableText className='text-xs sm:text-sm' name='institution' type='string' value={(<span>
            <span className='text-code-a'> “</span>{institution}<span className='text-code-a'>”</span>
          </span>)}/>
          <VariableText className='text-xs sm:text-sm' name='location' type='string' value={(<span>
            <span className='text-code-a'> “</span>{location}<span className='text-code-a'>”</span>
          </span>)}/>
          <VariableText className='text-xs sm:text-sm' name='startEndYears' type='string' value={(<span>
            <span className='text-code-a'> “</span>{startDate.getFullYear()} - {endDate.getFullYear().toString().substring(2)}<span className='text-code-a'>“</span>
          </span>)}/>
        </div>
      </div>
    </div>
  );
}