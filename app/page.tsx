import Card, { CardButton } from '@/components/Card';
import EducationCard from '@/components/EducationCard';

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-body">
      <main>
        <div className='gap-4 grid grid-cols-2 grid-rows-2'>
          {/* <div style={{gridRowEnd: 'span 2'}} className='flex flex-1 border border-red-400'>test</div> */}
          <EducationCard />

          {/* <TerminalCard/> */}

          <Card id="home" backgroundImage="/icon/uk.png" tagline="WELCOME">
            <h3 className='text-lg text-foreground font-title font-semibold'>Josh Aaron Villyat</h3>
            <p className='font-body text-card-fg'>A junior full-stack dev from the UK studying Software Engineering @ NTU</p>
            <div className='flex gap-4 mt-4'>
              <CardButton href="http://github.com/JoshA02" icon="github.svg" alt="github">GITHUB</CardButton>
              <CardButton href="mailto:hello@joshaaron.me" icon="email.svg" alt="email">EMAIL</CardButton>
              <CardButton href="http://linkedin.com/in/josh-villyat" icon="linkedin.svg" alt="linkedin">LINKEDIN</CardButton>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
