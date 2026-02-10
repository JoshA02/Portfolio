import Card from '@/components/Card';

function TrafficLightButtons() {
  return (
    <div className="flex gap-1 px-2.5 h-full items-center">
      <span className="w-2.5 h-2.5 rounded-full bg-traffic-light-red" />
      <span className="w-2.5 h-2.5 rounded-full bg-traffic-light-yellow" />
      <span className="w-2.5 h-2.5 rounded-full bg-traffic-light-green" />
    </div>
  );
}

function TerminalPrompt({ command }: { command: string }) {
  return (
    <p className="font-mono text-xs">
      <span className="text-terminal-prompt-arrow font-bold">➜</span>
      <span>&nbsp;</span>
      <span className="text-terminal-prompt-path font-bold">~</span>
      <span className="text-terminal-prompt-path"> </span>
      <span className="text-foreground tracking-widest">{command}</span>
    </p>
  );
}

export default function TerminalCard() {
  return (
    <Card id="terminal" className="p-0! flex flex-col h-full! row-span-2!">
      {/* Top Bar */}
      <div className="bg-terminal-bar-bg h-8 flex items-center">
        <TrafficLightButtons />
      </div>
      
      {/* Content */}
      <div className="flex-1 px-3.5 py-2">
        <TerminalPrompt command="help" />
      </div>
    </Card>
  );
}
