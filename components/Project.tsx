import React from 'react'

export default function Project({title, miniImages}: {title: string, miniImages: string[]}) {
  return (
    <div className='flex flex-row gap-3'>
      <div>
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
        <p className='w-1/2'>Evently is an events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register (among other things) for upcoming events. User roles are also established, giving admins additional control over other users (password resets, credential changes, etc).</p>
      </div>
    </div>
  );
}
