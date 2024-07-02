import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface ProjectProps {
  title: string;
  miniImages: string[];
  description: string;
  coverImage?: string;
  link?: string;
  linkType?: 'github' | 'other';
  fullWidth?: boolean;
}

export default function Project({title, miniImages, description, coverImage, link, linkType='github', fullWidth}: ProjectProps) {
  return (
    <div className={'bg-container rounded-lg p-2 relative overflow-hidden animate-fade group ' + (fullWidth ? 'w-full h-52 bg-opacity-30' : 'max-w-80 aspect-video')}>
      
      {/* Project Cover Image */}
      {coverImage && 
      <div className={'absolute w-full h-full left-0 top-0 transition-opacity -z-10'}>
        <div className={'absolute opacity-20 transition-all ' + (fullWidth ? 'animate-float hidden md:inline right-20 group-hover:opacity-80' : 'group-hover:opacity-35 group-hover:rotate-1 scale-150')}>
          <Image src={coverImage} alt={coverImage} width={1000} height={1000} className={'relative transition-transform ' + (fullWidth ? 'scale-250 h-52 w-auto rotate-6 group-hover:-translate-x-3' : 'w-full')}/>
        </div>
      </div>}

      {/* Project Title w/ Frameworks & Languages */}
      <div className='flex gap-3 items-center'>
        <h3 className='text-white font-bold m-0'>{title}</h3>
        <div className='flex gap-2.5 items-center'>
          {miniImages.map((img, i) => (
            <div className='contents' key={title}>
              <Image width={512} height={512} key={title} src={img} alt={img} className='w-auto h-4'/>
              {/* {i < miniImages.length - 1 && <span className='font-bold'>·</span>} */}
            </div>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <p className={'mt-1 text-xs ' + (fullWidth ? 'md:w-1/2' : '')}>
        {description}
      </p>

      {/* Project Link */}
      {link && <Link target='_blank' href={link} className='button absolute bottom-2 right-2 bg-container bg-opacity-0 text-white rounded-md p-1.5 group-hover:bg-opacity-50 hover:bg-black transition-colors flex items-center justify-center min-w-24'>
        {linkType == 'github' && <Image src='/github.png' alt={linkType} width={512} height={512} className='w-4 h-4 mr-1'/>}
        <span>{linkType == 'github' ? 'Clone' : 'Visit'}</span>
      </Link>}
    </div>
  );
}
