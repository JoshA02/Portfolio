import Card from './Card';

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

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
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

const languages = ['JavaScript', 'TypeScript', 'Python', 'C/C++', 'C#', 'Java', 'Swift'];
const frameworks = ['ASP.NET', 'React', 'Next', 'React Native', 'Express'];
const tools = ['Figma', 'VS Code', 'Visual Studio', 'Android Studio', 'Docker', 'Git', 'Jenkins', 'Cloudflare', 'Google Cloud Platform'];

export default function SkillsCard() {
  return (
    <Card tagline="SKILLS" className='min-h-full'>
      <div className="flex flex-col gap-3">
        <SkillCategory title="Languages" skills={languages} />
        <SkillCategory title="Frameworks" skills={frameworks} />
        <SkillCategory title="Tools" skills={tools} />
      </div>
    </Card>
  );
}
