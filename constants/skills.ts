export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C/C++', 'C#', 'Java', 'Swift', 'Kotlin', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    skills: ['ASP.NET', 'React', 'Next.js', 'React Native', 'Express.js', 'Tailwind CSS'],
  },
  {
    title: 'Tools',
    skills: ['Figma', 'VS Code', 'Visual Studio', 'Android Studio', 'Docker', 'Git', 'Jenkins', 'Cloudflare', 'Google Cloud Platform'],
  },
];

export function getSkillsByCategory(categoryTitle: string): string[] {
  const category = skillCategories.find(
    (cat) => cat.title.toLowerCase() === categoryTitle.toLowerCase()
  );
  return category?.skills ?? [];
}

export function getAllSkills(): string[] {
  return skillCategories.flatMap((cat) => cat.skills);
}
