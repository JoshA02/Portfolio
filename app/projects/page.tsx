import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';
import ProjectContainer from '@/components/ProjectContainer';

export default function Projects() {
  return (
    <main>
      <div className="mb-16">
        <SectionHeader title='featured' subtitle='my favourites'/>
        <ProjectContainer type='carrossel'>
          <Project title='Evently' link='https://github.com/JoshA02/Evently' coverImage='evently-admin' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png']} description='An events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
          <Project title='Portfolio' link='https://github.com/JoshA02/Portfolio' coverImage='portfolio-home' miniImages={['/project-tools/nextjs.png', '/project-tools/react.png', '/project-tools/tailwind.png', '/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/docker.png']} description="Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod."/>
          <Project title='CinemaShowtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='cinema-schedule' miniImages={['/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/react.png', '/project-tools/docker.png']} description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."/>
        </ProjectContainer>
      </div>

      <div className="mb-16">
        <SectionHeader title='web' subtitle='full-stack'/>
        <ProjectContainer>
          <Project fullWidth title='Evently' link='https://github.com/JoshA02/Evently' coverImage='evently-admin' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png']} description='An events-browsing platform built using ASP.NET Core Razor Pages, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
          <Project fullWidth title='Portfolio' link='https://github.com/JoshA02/Portfolio' coverImage='portfolio-home' miniImages={['/project-tools/nextjs.png', '/project-tools/react.png', '/project-tools/tailwind.png', '/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/docker.png']} description="Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod."/>
          <Project fullWidth title='CinemaShowtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='cinema-schedule' miniImages={['/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/react.png', '/project-tools/docker.png']} description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."/>
        </ProjectContainer>
      </div>

      <div className="mb-16">
        <SectionHeader title='spigot' subtitle='minecraft server plugins'/>
        <ProjectContainer>
          <Project fullWidth title='Manhunt Plus' linkType='other' link='https://www.spigotmc.org/resources/manhunt-plus-free-1-8-1-17-1.81888/' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png']} description='Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod.'/>
          <Project fullWidth title='MoneyDrops' linkType='other' link='https://www.spigotmc.org/resources/money-drops-1-8-1-18.78789/' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png']} description='Quisque non semper sem, eget venenatis nunc. Pellentesque aliquet ligula id feugiat accumsan. Integer congue placerat dapibus. Duis sodales iaculis urna, a varius turpis fringilla vel. Nullam tincidunt magna ac interdum bibendum. Fusce viverra ligula nec diam luctus euismod.'/>
        </ProjectContainer>
      </div>

      <div className="mb-16">
        <SectionHeader title='gameDev' subtitle='games, modding, etc'/>
        <ProjectContainer>
          <Project
            fullWidth title='PuzzleMP' linkType='github' coverImage='puzzlemp-main' link='https://github.com/JoshA02/PuzzleMP' miniImages={['/project-tools/unreal.png', '/project-tools/cpp.png', '/project-tools/blender.png']} 
            description='A 3D, coop puzzle game made in Unreal Engine 4 for a college project. Implements the Steam online subsystem for multiplayer and developed almost entirely in C++, with a few elements expanded upon via Blueprints.'
          />
          <Project
            fullWidth title='Die Rise' linkType='other' coverImage='dierise-main' link='https://steamcommunity.com/sharedfiles/filedetails/?id=1516544300' miniImages={['/project-tools/typescript.png']}
            description='A partial remake of the classic Black Ops 2 zombies map "Die Rise", built using the official Black Ops III Mod Tools.'/>
        </ProjectContainer>
      </div>

    </main>
  );
}