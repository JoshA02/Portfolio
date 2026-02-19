import Card from './Card';
import { skillCategories, type SkillCategory as SkillCategoryType } from '@/constants/skills';

interface SkillTagProps {
  name: string;
}

function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="bg-accent-faded border border-accent/40 rounded-full px-3 py-1.5 
                     text-xs text-accent font-body tracking-wide text-center">
      {name}
    </span>
  );
}

function SkillCategory({ title, skills }: SkillCategoryType) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h3 className="text-lg text-foreground font-title font-medium tracking-wide">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsCard() {
  return (
    <Card tagline="SKILLS" className='min-h-full'>
      <div className="flex flex-col gap-3">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} title={category.title} skills={category.skills} />
        ))}
      </div>
    </Card>
  );
}
