import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import ProjectCard from '@/components/ProjectCard'
import {favProjects} from '@/constants/projects'

export default function Projects() {
  return (
    <div className="flex lg:pr-30 lg:pl-30 md:pr-12 md:pl-12 pr-4 pl-4 justify-center font-body pt-6 md:pt-0 pb-12">
      <main className='flex-1'>
        <Card id="projects" tagline="FEATURED">
          <Carousel className='mt-3 grid'>
            {favProjects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                technologies={[...project.technologies]}
              />
            ))}
          </Carousel>
        </Card>
      </main>
    </div>
  )
}
