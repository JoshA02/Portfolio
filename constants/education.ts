export type EducationStatus = 'in-progress' | 'completed' | 'upcoming';

export type Institution = {
  name: string;
  url: string;
};

export interface EducationEntry {
  title: string;
  institution: Institution;
  startDate: Date;
  endDate: Date;
}

export const educationData: EducationEntry[] = [
  {
    title: "BSc (Hons) Software Engineering",
    institution: { name: "Nottingham Trent University, U.K.", url: "https://www.ntu.ac.uk/" },
    startDate: new Date(2022, 8), // September 2022
    endDate: new Date(2026, 4) // May 2026
  },
  {
    title: "International Study Diploma in Professional Studies",
    institution: { name: "Northern Arizona University, U.S.A.", url: "https://nau.edu/" },
    startDate: new Date(2024, 7), // August 2024
    endDate: new Date(2025, 4) // May 2025
  },
  {
    title: "UAL Level 3 Ext. Diploma - Games Development",
    institution: { name: "Nottingham College, U.K.", url: "https://www.nottinghamcollege.ac.uk/" },
    startDate: new Date(2020, 7), // August 2020
    endDate: new Date(2022, 4) // May 2022
  }
];

export function getEducationStatus(entry: EducationEntry): EducationStatus {
  const now = new Date();
  if (entry.startDate <= now && entry.endDate >= now) {
    return 'in-progress';
  } else if (entry.endDate < now) {
    return 'completed';
  }
  return 'upcoming';
}

export function formatEducationDates(entry: EducationEntry): string {
  return `${entry.startDate.toLocaleString('default', { month: 'short', year: 'numeric' })} - ${entry.endDate.toLocaleString('default', { month: 'short', year: 'numeric' })}`;
}
