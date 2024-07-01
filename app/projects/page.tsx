import FavouriteProjects from '@/components/FavouriteProjects';
import SectionHeader from '@/components/SectionHeader';

export default function Projects() {
  return (
    <div>
      <FavouriteProjects className='mb-16'/>

      <SectionHeader title='allProjects' subtitle='made with care'/>
    </div>
  );
}