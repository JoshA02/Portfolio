import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';
import Comment from '@/components/Comment';

export default function Projects() {
  return (
    <main>
      <div className='mb-16'>
        <SectionHeader title='featuredProjects' subtitle='my favourites'/>

        <div className='w-full overflow-x-scroll pb-2'>
          <div className='flex w-max gap-6'>
            <Project title='Evently' link='https://github.com/JoshA02/Evently' coverImage='/project-images/evently-admin.png' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png']} description='An events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
            <Project title='Portfolio' link='https://github.com/JoshA02/Portfolio' coverImage='/project-images/portfolio-home.png' miniImages={['/project-tools/nextjs.png', '/project-tools/react.png', '/project-tools/tailwind.png', '/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/docker.png']} description="Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod."/>
            <Project title='CinemaShowtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='/project-images/cinema-schedule.jpg' miniImages={['/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/react.png', '/project-tools/docker.png']} description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."/>
          </div>
        </div>
      </div>

      <SectionHeader title='allProjects' subtitle='made with care'/>
      
      <Comment message='web projects'/>
      <div className='flex flex-col gap-4 mb-4'>
        <Project fullWidth title='Evently' link='https://github.com/JoshA02/Evently' coverImage='/project-images/evently-admin.png' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png']} description='An events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
        <Project fullWidth title='Portfolio' link='https://github.com/JoshA02/Portfolio' coverImage='/project-images/portfolio-home.png' miniImages={['/project-tools/nextjs.png', '/project-tools/react.png', '/project-tools/tailwind.png', '/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/docker.png']} description="Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod."/>
        <Project fullWidth title='CinemaShowtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='/project-images/cinema-schedule.jpg' miniImages={['/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/react.png', '/project-tools/docker.png']} description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."/>
      </div>
      
      <Comment message='minecraft server plugins'/>
      <div className='flex flex-col gap-4'>
        <Project fullWidth title='Manhunt Plus' linkType='other' link='https://www.spigotmc.org/resources/manhunt-plus-free-1-8-1-17-1.81888/' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png']} description='Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod.'/>
        <Project fullWidth title='MoneyDrops' linkType='other' link='https://www.spigotmc.org/resources/money-drops-1-8-1-18.78789/' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png']} description='Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod.'/>
      </div>
    </main>
  );
}