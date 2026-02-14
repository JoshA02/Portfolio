'use client'

import {Tagline} from '@/components/common'
import ProjectCard from '@/components/ProjectCard'
import ToggleButton from '@/components/ToggleButton'
import {getProjectCategories, getProjects, ProjectCategory, projectCategoryDescriptions} from '@/constants/projects'
import {useState} from 'react'


export default function Projects() {
  
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  
  return (
    <div className="flex lg:pr-30 lg:pl-30 md:pr-12 md:pl-12 pr-4 pl-4 justify-center font-body pt-6 md:pt-0 pb-36">
      <main className='flex-1'>
        <Tagline tagline="projects" />
        <div className='flex items-center justify-between mb-6'>
          <h1 className='text-3xl text-foreground font-title font-semibold tracking-wide mb-4'>My Projects</h1>

          {/* <p className='font-heading text-sm text-card-fg mb-6 max-w-2xl'>VIEW BY</p> */}
          {/* TODO: View by square card OR rectangular list items */}
        </div>

        <div className='flex gap-2 flex-wrap'>
          <ToggleButton active={filter === 'all'} onClick={() => setFilter('all')}>{`all (${getProjects().length})`}</ToggleButton>
          {getProjectCategories().map(category => (
            <ToggleButton key={category} active={filter === category} onClick={() => setFilter(category)}>{`${category} (${getProjects(category).length})`}</ToggleButton>
          ))}
        </div>

        
        <div className='mt-5 mb-4'>
          {filter !== 'all' ? (
            <p className='text-card-fg'>{projectCategoryDescriptions[filter]}</p>
          ) : (<p></p>)}
        </div>

        <div className='flex gap-6 flex-wrap'>
          {getProjects(filter === 'all' ? undefined : filter).map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              className='w-full md:w-[48%] [@media(min-width:1500px)]:w-[31%] [@media(min-width:2400px)]:w-[23%]'
            />
          ))}
        </div>
      </main>
    </div>
  )
}
