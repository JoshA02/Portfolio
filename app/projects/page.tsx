import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import ProjectCard from '@/components/ProjectCard'
import {favProjects} from '@/constants/projects'

export default function Projects() {
  return (
    <div className="flex pr-30 pl-30 justify-center font-body">
      <main className='flex-1'>
        <Card id="projects" tagline="FEATURED">
          <Carousel className='mt-3'>
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
