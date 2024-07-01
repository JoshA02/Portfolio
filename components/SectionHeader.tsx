import Comment from '@/components/Comment';
import {Syne} from 'next/font/google';

const syne = Syne({subsets: ['latin']});

export default function SectionHeader({title, subtitle, className}: {title: string, subtitle: string, className?: string}) {
  return (
    <h1 className={'text-white font-black ' + className}>
      {title}<span className={'text-primary font-bolder ' + syne.className}>;</span>
      <Comment message={subtitle}/>
    </h1>
  );
}