import Project from '@/components/Project';
import SectionHeader from '@/components/SectionHeader';
import ProjectContainer from '@/components/ProjectContainer';

export default function Projects() {
  return (
    <main>
      <div className="mb-16">
        <SectionHeader title='featured' subtitle='my favourites'/>
        <ProjectContainer type='carrossel'>
          <Project
            title='Evently' link='https://github.com/JoshA02/Evently' coverImage='evently-admin' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png', '/project-tools/xd.png']}
            description='An events-browsing platform built using ASP.NET Core Razor Pages with EF Core for database interactions, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'
          />
          <Project
            title='Portfolio' link='https://github.com/JoshA02/Portfolio' coverImage='portfolio-home' miniImages={['/project-tools/nextjs.png', '/project-tools/react.png', '/project-tools/tailwind.png', '/project-tools/typescript.png', '/project-tools/docker.png', '/project-tools/figma.png']}
            description="Built using Next.js, React, Tailwind CSS, and TypeScript. The site is fully responsive and includes a 'contact me' form, protected by Google's reCAPTCHA v2, with messages forwarded to myself with Postmark. Hosted on my own server, running in a Docker container and reverse-proxied via Cloudflare Tunnels."
          />
          <Project
            title='CinemaShowtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='cinema-schedule' miniImages={['/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/react.png', '/project-tools/docker.png', '/project-tools/figma.png']}
            description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."
          />
        </ProjectContainer>
      </div>

      <div className="mb-16">
        <SectionHeader title='web' subtitle='full-stack'/>
        <ProjectContainer>
          <Project fullWidth title='Evently' link='https://github.com/JoshA02/Evently' coverImage='evently-admin' miniImages={['/project-tools/typescript.png', '/project-tools/aspnet.png', '/project-tools/cs.png', '/project-tools/cshtml.png', '/project-tools/xd.png']} description='An events-browsing platform built using ASP.NET Core Razor Pages with EF Core for database interactions, allowing users to host, discover and register for upcoming events. User roles are also implemented, giving admins additional control over other users (password resets, credential changes, etc).'/>
          <Project
            fullWidth title='Portfolio' link='https://github.com/JoshA02/Portfolio' coverImage='portfolio-home' miniImages={['/project-tools/nextjs.png', '/project-tools/react.png', '/project-tools/tailwind.png', '/project-tools/typescript.png', '/project-tools/docker.png', '/project-tools/figma.png']}
            description="Built using Next.js, React, Tailwind CSS, and TypeScript. The site is fully responsive and includes a 'contact me' form, protected by Google's reCAPTCHA v2, with messages forwarded to myself with Postmark. Hosted on my own server, running in a Docker container and reverse-proxied via Cloudflare Tunnels."
          />
          <Project fullWidth title='CinemaShowtimes' link='https://github.com/JoshA02/CinemaShowtimes' coverImage='cinema-schedule' miniImages={['/project-tools/typescript.png', '/project-tools/expressjs.png', '/project-tools/react.png', '/project-tools/docker.png', '/project-tools/figma.png']} description="Developed for educational purposes to demonstrate skills in React, Docker, ExpressJS, and API integration. It provides an example of how to access and display showtimes and movie titles from a cinema's API."/>
        </ProjectContainer>
      </div>

      <div className="mb-16">
        <SectionHeader title='spigot' subtitle='minecraft server plugins'/>
        <ProjectContainer>
          <Project
            fullWidth title='Manhunt Plus' linkType='other' link='https://www.spigotmc.org/resources/manhunt-plus-free-1-8-1-17-1.81888/' miniImages={['/project-tools/java.png', '/project-tools/spigot.png']}
            description='A Minecraft Server plugin that adds the popular "Manhunt" gamemode to your server; written in Java. The plugin is highly configurable and includes a variety of features to enhance the gameplay experience, including timed air drops, compass tracking, and more.'
          />
          <Project
            fullWidth title='MoneyDrops' linkType='other' link='https://www.spigotmc.org/resources/money-drops-1-8-1-18.78789/' miniImages={['/project-tools/java.png', '/project-tools/spigot.png']}
            description='A Minecraft Server plugin that allows players to receive money drops from mobs they kill. The plugin is highly configurable and includes a variety of features to enhance the gameplay experience, including custom mob drops, drop rates, and more.'
          />
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
            fullWidth title='Die Rise' linkType='other' coverImage='dierise-main' link='https://steamcommunity.com/sharedfiles/filedetails/?id=1516544300' miniImages={['/project-tools/bo3.png']}
            description='A partial remake of the classic Black Ops 2 zombies map "Die Rise", built using the official Black Ops III Mod Tools.'/>
        </ProjectContainer>
      </div>

      <div className="mb-16">
        <SectionHeader title='uniWork' subtitle='a variety of stuff done for uni'/>
        <ProjectContainer>
          <Project
            fullWidth title='Sueca Scorer' linkType='github' coverImage='sueca-code' link='https://github.com/JoshA02/SuecaScorer' miniImages={['/project-tools/python.png']}
            description='Submitted for a first-year university assignment, SuecaScorer is a command-line application that scores and evaluates matches of the Portuguese card game &apos;Sueca&apos;. Built using Python, with a focus on object-oriented programming and algorithmic design, implementing scoring algorithms based on traditional rules.'
          />
          <Project
            fullWidth title='Gym POS System' coverImage='gym' miniImages={['/project-tools/cpp.png', , '/project-tools/xd.png']}
            description='A gym Point of Sale system developed for a first-year university assignment using C++ and WinForms. The system is designed to manage gym hours and handle transactions for gym services, implementing access-levels to restrict higher-level actions from regular staff members. Developed in C++ using object-oriented programming principles and file I/O for data storage.'
          />
        </ProjectContainer>
      </div>

    </main>
  );
}