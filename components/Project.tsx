import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Project({title, miniImages, description, coverImage, link}: {title: string, miniImages: string[], description: string, coverImage?: string, link?: string}) {
  return (
    <div className='bg-container max-w-80 aspect-video rounded-lg p-2 relative overflow-hidden animate-fade'>
      {coverImage && <Image src={coverImage} alt={coverImage} width={1000} height={1000} className='absolute w-full scale-150 opacity-20 hover:opacity-25 hover:rotate-1 transition-all'/>}
      <div className='flex gap-3 items-center'>
        <h3 className='text-white font-bold m-0'>{title}</h3>
        <div className='flex gap-1.5 items-center'>
          {miniImages.map((img, i) => (
            <div className='contents'>
              <img key={i} src={img} alt={img} className='w-auto'/>
              {i < miniImages.length - 1 && <span className='font-bold'>·</span>}
            </div>
          ))}
        </div>
      </div>
      <p className='mt-1 text-xs'>
        {description}
      </p>
      {link && <Link target='_blank' href={link} className='button absolute bottom-2 right-2 bg-container bg-opacity-0 text-white rounded-md p-1.5 hover:bg-opacity-50 transition-colors flex items-center justify-center'>
        <Image src='/github.svg' alt='github' width={0} height={0} className='w-4 h-4 mr-1'/>
        <span>Clone</span>
      </Link>}
    </div>
  );
}
