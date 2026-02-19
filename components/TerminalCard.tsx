'use client';

import Card from '@/components/Card';
import { useState, useRef, useEffect, useCallback } from 'react';
import { getProjects, getProjectCategories, ProjectCategory } from '@/constants/projects';
import { educationData, getEducationStatus, formatEducationDates } from '@/constants/education';
import { skillCategories } from '@/constants/skills';

type HistoryEntry = {
  command: string;
  output: React.ReactNode;
};

function TrafficLightButtons() {
  return (
    <div className="flex gap-1 px-2.5 h-full items-center">
      <span className="w-2.5 h-2.5 rounded-full bg-traffic-light-red" />
      <span className="w-2.5 h-2.5 rounded-full bg-traffic-light-yellow" />
      <span className="w-2.5 h-2.5 rounded-full bg-traffic-light-green" />
    </div>
  );
}

function TerminalPrompt({ command, isInput, value, onChange, onKeyDown }: { 
  command?: string;
  isInput?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInput]);

  return (
    <p className="font-mono text-xs flex items-center">
      <span className="text-terminal-prompt-arrow font-bold">➜</span>
      <span>&nbsp;</span>
      <span className="text-terminal-prompt-path font-bold">~</span>
      <span className="text-terminal-prompt-path">&nbsp;</span>
      {isInput ? (
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent text-foreground tracking-widest outline-none font-mono text-xs"
          spellCheck={false}
          autoComplete="off"
        />
      ) : (
        <span className="text-foreground tracking-widest">{command}</span>
      )}
    </p>
  );
}

function TerminalOutput({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs text-card-fg pl-4 py-1 whitespace-pre-wrap">
      {children}
    </div>
  );
}

// Command handlers
const commands: Record<string, (args: string[]) => React.ReactNode> = {
  help: () => (
    <div>
      <p className="text-accent mb-1">Available commands:</p>
      <p><span className="text-syntax-keyword">projects</span> <span className="text-card-fg/60">[category]</span> - List my projects (categories: {getProjectCategories().join(', ')})</p>
      <p><span className="text-syntax-keyword">socials</span> - Get links to my social profiles</p>
      <p><span className="text-syntax-keyword">education</span> - View my education info</p>
      <p><span className="text-syntax-keyword">skills</span> - List my technical skills</p>
      <p><span className="text-syntax-keyword">email</span> - Get my email address</p>
      <p><span className="text-syntax-keyword">clear</span> - Clear the terminal</p>
    </div>
  ),

  projects: (args) => {
    const category = args[0]?.toLowerCase() as ProjectCategory | undefined;
    const validCategories = getProjectCategories();
    
    if (category && !validCategories.includes(category)) {
      return <p className="text-traffic-light-red">Invalid category. Valid options: {validCategories.join(', ')}</p>;
    }

    const projects = getProjects(category);
    
    if (projects.length === 0) {
      return <p>No projects found{category ? ` in category "${category}"` : ''}.</p>;
    }

    return (
      <div>
        <p className="text-accent mb-1">{category ? `Projects in "${category}"` : 'All projects'} ({projects.length}):</p>
        {projects.map((project, i) => (
          <p key={i}>
            <span className="text-syntax-keyword">•</span>{' '}
            <span className="text-foreground">{project.name}</span>
            <span className="text-card-fg/60"> - {project.category}</span>
            {project.href && (
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-2">
                [link]
              </a>
            )}
          </p>
        ))}
      </div>
    );
  },

  socials: () => (
    <div>
      <p className="text-accent mb-1">My socials:</p>
      <p><span className="text-syntax-keyword">GitHub:</span> <a href="https://github.com/JoshA02" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">github.com/JoshA02</a></p>
      <p><span className="text-syntax-keyword">LinkedIn:</span> <a href="https://linkedin.com/in/joshvillyat" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin.com/in/joshvillyat</a></p>
    </div>
  ),

  education: () => {
    const statusColors: Record<string, string> = {
      'in-progress': 'text-status-progress-from',
      'completed': 'text-status-complete-from',
      'upcoming': 'text-card-fg/60'
    };
    const statusLabels: Record<string, string> = {
      'in-progress': 'In Progress',
      'completed': 'Completed',
      'upcoming': 'Upcoming'
    };

    return (
      <div>
        <p className="text-accent mb-1">Education ({educationData.length} entries):</p>
        {educationData.map((entry, i) => {
          const status = getEducationStatus(entry);
          return (
            <div key={i} className={i < educationData.length - 1 ? 'mb-2' : ''}>
              <p><span className="text-syntax-keyword">•</span> <span className="text-foreground">{entry.title}</span></p>
              <p className="pl-3"><span className="text-syntax-keyword">Institution:</span> {entry.institution.name}</p>
              <p className="pl-3"><span className="text-syntax-keyword">Dates:</span> {formatEducationDates(entry)}</p>
              <p className="pl-3"><span className="text-syntax-keyword">Status:</span> <span className={statusColors[status]}>{statusLabels[status]}</span></p>
            </div>
          );
        })}
      </div>
    );
  },

  skills: () => (
    <div>
      <p className="text-accent mb-1">Technical Skills:</p>
      {skillCategories.map((category) => (
        <p key={category.title}>
          <span className="text-syntax-keyword">{category.title}:</span> {category.skills.join(', ')}
        </p>
      ))}
    </div>
  ),

  email: () => (
    <div>
      <p>
        <span className="text-syntax-keyword">Email:</span>{' '}
        <a href="mailto:hello@joshaaron.me" className="text-accent hover:underline">hello@joshaaron.me</a>
      </p>
    </div>
  ),

  clear: () => 'CLEAR',
};

export default function TerminalCard({ className }: { className?: string }) {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: 'help', output: commands.help([]) }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = useCallback(() => {
    const trimmedInput = currentInput.trim();
    if (!trimmedInput) return;

    const [cmd, ...args] = trimmedInput.toLowerCase().split(/\s+/);
    const handler = commands[cmd];

    if (cmd === 'clear') {
      setHistory([]);
      setCurrentInput('');
      setHistoryIndex(-1);
      return;
    }

    const output = handler 
      ? handler(args)
      : <p className="text-traffic-light-red">Command not found: {cmd}. Type &quot;help&quot; for available commands.</p>;

    setHistory(prev => [...prev, { command: trimmedInput, output }]);
    setCurrentInput('');
    setHistoryIndex(-1);
  }, [currentInput]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const input = currentInput.trim().toLowerCase();
      if (!input) return;
      
      const commandNames = Object.keys(commands);
      const matches = commandNames.filter(cmd => cmd.startsWith(input));
      
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      } else if (matches.length > 1) {

        // Find common prefix among matches
        let commonPrefix = matches[0];
        for (const match of matches) {
          while (!match.startsWith(commonPrefix)) {
            commonPrefix = commonPrefix.slice(0, -1);
          }
        }
        if (commonPrefix.length > input.length) {
          setCurrentInput(commonPrefix);
        }
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setCurrentInput(history[newIndex].command);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setCurrentInput('');
      } else {
        setHistoryIndex(newIndex);
        setCurrentInput(history[newIndex].command);
      }
    }
  }, [handleSubmit, history, historyIndex, currentInput]);

  const handleContentClick = () => {
    // Focus the input when clicking anywhere in the terminal content
    const input = contentRef.current?.querySelector('input');
    input?.focus();
  };

  return (
    <Card id="terminal" draggable={false} className={`p-0! flex flex-col overflow-hidden ${className}`}>
      {/* Top Bar */}
      <div className="bg-terminal-bar-bg h-8 flex items-center shrink-0">
        <TrafficLightButtons />
      </div>
      
      {/* Content */}
      <div className='flex flex-1 relative'>
        <div 
          ref={contentRef}
          onClick={handleContentClick}
          className="absolute inset-0 min-h-full px-3.5 py-2 overflow-y-scroll cursor-text [&::-webkit-scrollbar]:w-3.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-terminal-scrollbar-thumb [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-4 [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding"
        >
          {history.map((entry, i) => (
            <div key={i}>
              <TerminalPrompt command={entry.command} />
              <TerminalOutput>{entry.output}</TerminalOutput>
            </div>
          ))}
          <TerminalPrompt 
            isInput 
            value={currentInput}
            onChange={setCurrentInput}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </Card>
  );
}
