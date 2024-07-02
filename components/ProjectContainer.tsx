import React from 'react'
import SectionHeader from './SectionHeader';

export default function ProjectContainer({children, type='normal'}: {children: React.ReactNode, type?: 'carrossel' | 'normal' | 'auto'}) {
  return (
    <div className='w-full overflow-x-scroll pb-2'>
      { (type === 'carrossel' || type === 'normal') && <div className={type === 'carrossel' ? 'flex w-max gap-6' : ''}>{children}</div>}
      { type === 'auto' && <div className='flex flex-nowrap w-max lg:w-auto lg:flex-wrap gap-6 max-w-screen-lg'>{children}</div>}
    </div>
  );
}
