interface SkillTagProps {
  children: React.ReactNode;
  active?: boolean;
}

export default function ToggleButton({ children, active=false, onClick }: SkillTagProps & { onClick?: () => void }) {
  return (
    <a onClick={onClick} className={`select-none border border-accent/40 rounded-full px-3 py-1.5 
                          text-xs font-body tracking-wide text-center text-accent transition-colors duration-200 cursor-pointer 
                          ${active ? 'bg-accent-faded font-bold shadow-lg shadow-glow' : 'bg-transparent'}`}
    >
      {children}
    </a>
  );
}