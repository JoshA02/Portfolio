import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const randomRotations = ['-rotate-3', 'rotate-3', 'rotate-6', '-rotate-1', 'rotate-1'];

export default function Project({title, miniImages, description, coverImage, link, fullWidth}: {title: string, miniImages: string[], description: string, coverImage?: string, link?: string, fullWidth?: boolean}) {
  return (
    <div className={'bg-container rounded-lg p-2 relative overflow-hidden animate-fade ' + (fullWidth ? 'w-full h-52 bg-opacity-30' : 'max-w-80 aspect-video')}>
      
      {/* So many divs.......... */}
      <div className={'absolute w-full h-full opacity-20 transition-opacity ' + (fullWidth ? 'hover:opacity-40' : 'hover:opacity-25')}>
        <div className={'absolute h-full ' + (fullWidth ? 'animate-float right-80' : '')}>
          {coverImage && 
            <Image src={coverImage} alt={coverImage} width={1000} height={1000}
              className={'relative transition-transform '
              + (fullWidth ? (
                (randomRotations[Math.floor(Math.random() * randomRotations.length)])
                + ' h-52 w-auto scale-250 translate-y-32') : 'w-full scale-150 hover:rotate-1'
              )}
            />
          }
        </div>
      </div>
      
      <div className='flex gap-3 items-center'>
        <h3 className='text-white font-bold m-0'>{title}</h3>
        <div className='flex gap-1.5 items-center'>
          {miniImages.map((img, i) => (
            <div className='contents' key={title}>
              <img key={title} src={img} alt={img} className='w-auto'/>
              {i < miniImages.length - 1 && <span className='font-bold'>·</span>}
            </div>
          ))}
        </div>
      </div>

      <p className={'mt-1 text-xs ' + (fullWidth ? 'md:w-1/2' : '')}>
        {description}
      </p>
      {link && <Link target='_blank' href={link} className='button absolute bottom-2 right-2 bg-container bg-opacity-0 text-white rounded-md p-1.5 hover:bg-opacity-50 transition-colors flex items-center justify-center'>
        <Image src='/github.svg' alt='github' width={0} height={0} className='w-4 h-4 mr-1'/>
        <span>Clone</span>
      </Link>}
    </div>
  );
}
