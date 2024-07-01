import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';
import Comment from '@/components/Comment';

export default function Projects() {
  return (
    <div>
      <div className='mb-16'>
        <SectionHeader title='featuredProjects' subtitle='made with care'/>

        <div className='flex flex-wrap gap-6 max-w-screen-lg'>
          <Project title='Evently' link='https://github.com/JoshA02/Evently' coverImage='/project-images/evently-admin.png' miniImages={['/typescript.svg', '/aspnet.svg', '/cs.svg', '/cshtml.svg']} description='An events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
          <Project title='Portfolio' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='/project-images/portfolio-home.png' miniImages={['/nextjs.svg', '/react.svg', '/tailwind.svg', '/typescript.svg', '/expressjs.svg', '/docker.svg']} description="Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod."/>
          <Project title='Cinema Showtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='/project-images/cinema-schedule.jpg' miniImages={['/typescript.svg', '/expressjs.svg', '/react.svg', '/docker.svg']} description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."/>
        </div>
      </div>

      <SectionHeader title='allProjects' subtitle='made with care'/>
      
      <Comment message='web projects'/>
      <div className='flex flex-col gap-4 mb-4'>
        <Project fullWidth title='Evently' link='https://github.com/JoshA02/Evently' coverImage='/project-images/evently-admin.png' miniImages={['/typescript.svg', '/aspnet.svg', '/cs.svg', '/cshtml.svg']} description='An events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
        <Project fullWidth title='Portfolio' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='/project-images/portfolio-home.png' miniImages={['/nextjs.svg', '/react.svg', '/tailwind.svg', '/typescript.svg', '/expressjs.svg', '/docker.svg']} description="Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod."/>
        <Project fullWidth title='Cinema Showtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='/project-images/cinema-schedule.jpg' miniImages={['/typescript.svg', '/expressjs.svg', '/react.svg', '/docker.svg']} description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."/>
      </div>
      
      <Comment message='discord bots'/>
      <div className='flex flex-col gap-4'>
        <Project fullWidth title='SomeBot' coverImage='/project-images/evently-admin.png' miniImages={['/typescript.svg', '/aspnet.svg', '/cs.svg', '/cshtml.svg']} description='An events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
        <Project fullWidth title='SomeBot' coverImage='/project-images/evently-admin.png' miniImages={['/typescript.svg', '/aspnet.svg', '/cs.svg', '/cshtml.svg']} description='An events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
      </div>
    </div>
  );
}