'use client';

import Card from '@/components/Card';
import { ExternalLink } from 'lucide-react';

type EducationStatus = 'in-progress' | 'completed' | 'upcoming';
type Institution = {
  name: string;
  url: string;
}

interface EducationEntry {
  title: string;
  institution: Institution;
  startDate: Date;
  endDate: Date;
}

const educationData: EducationEntry[] = [
  {
    title: "BSc (Hons) Software Engineering",
    institution: {name: "Nottingham Trent University, U.K.", url: "https://www.ntu.ac.uk/"},
    startDate: new Date(2022, 8), // September 2022
    endDate: new Date(2026, 4) // May 2026
  },
  {
    title: "International Study Diploma in Professional Studies",
    institution: {name: "Northern Arizona University, U.S.A.", url: "https://nau.edu/"},
    startDate: new Date(2024, 7), // August 2024
    endDate: new Date(2025, 4) // May 2025
  },
  {
    title: "UAL Level 3 Ext. Diploma - Games Development",
    institution: {name: "Nottingham College, U.K.", url: "https://www.nottinghamcollege.ac.uk/"},
    startDate: new Date(2020, 7), // August 2020
    endDate: new Date(2022, 4) // May 2022
  }
];

function StatusIndicator({ status }: { status: EducationStatus }) {
  const isInProgress = status === 'in-progress';
  return (
    <span 
      className={`hidden sm:inline-block w-2.75 h-2.75 rounded-full ml-2 ${
        isInProgress 
          ? 'bg-linear-to-b from-status-progress-from to-status-progress-to border border-status-progress-border shadow-[0px_0px_4px_0px_var(--status-progress-shadow)]' 
          : 'bg-linear-to-b from-status-complete-from to-status-complete-to border border-status-complete-border shadow-[0px_0px_4px_0px_var(--status-complete-shadow)]'
      }`}
    />
  );
}

function CodeLine({ varName, value }: { varName: string; value: string }) {
  return (
    <div>
    <p className="font-body text-sm hidden md:block">
      <span className="text-syntax-keyword">const</span>
      {" "}
      <span className="text-syntax-variable">{varName}</span>
      <span className="text-syntax-punctuation">:</span>
      {" "}
      <span className="text-syntax-type">string</span>
      {" "}
      <span className="text-syntax-punctuation">=</span>
      {" "}
      <span className="text-syntax-string-quote">&quot;</span>
      <span className="text-syntax-string-value">{value}</span>
      <span className="text-syntax-string-quote">&quot;</span>
      <span className="text-syntax-punctuation">;</span>
    </p>
    <p className="font-body text-sm block md:hidden">
      <span className="text-syntax-string-value">{value}</span>
    </p>
    </div>
  );
}

function EducationItem({ entry }: { entry: EducationEntry }) {
  return (
    <div className="mb-2">
      <h3 className="text-md md:text-lg text-foreground font-title font-medium tracking-wide flex items-center">
        {entry.title}
        <StatusIndicator status={
          (entry.startDate <= new Date() && entry.endDate >= new Date()) ? 'in-progress' : (entry.endDate < new Date() ? 'completed' : 'upcoming')
        } />
      </h3>
      <div className="mt-1">
        <div className='flex'>
          <CodeLine varName="uni" value={entry.institution.name} />
          <ExternalLink onClick={() => window.open(entry.institution.url, '_blank')} className='ml-1 cursor-pointer' size={12} color="var(--accent)"/>
        </div>
        <CodeLine varName="dates" value={
          `${entry.startDate.toLocaleString('default', { month: 'short', year: 'numeric' })}
          - 
          ${entry.endDate.toLocaleString('default', { month: 'short', year: 'numeric' })}`
        } />
      </div>
    </div>
  );
}

export default function EducationCard() {
  return (
    <Card id="education" tagline="EDUCATION">
      {educationData.map((entry, index) => (
        <EducationItem key={index} entry={entry} />
      ))}
    </Card>
  );
}
