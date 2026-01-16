import { cn } from "../../utils/cn";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export function Toggle({ checked, onChange, className, size = 'md' }: ToggleProps) {
  return (
    <button 
        onClick={() => onChange(!checked)}
        className={cn(
            "rounded-full relative transition-all duration-200 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E81AC] focus-visible:ring-offset-1 ring-offset-[#111111]",
            checked ? "bg-[#5E81AC] shadow-inner" : "bg-[#444444]",
            size === 'sm' ? "w-7 h-4" : "w-10 h-5",
            className
        )}
     >
        <div className={cn(
            "absolute top-0.5 left-0.5 rounded-full bg-white transition-transform shadow-sm",
            size === 'sm' ? "w-3 h-3" : "w-4 h-4",
            checked 
                ? (size === 'sm' ? "translate-x-3" : "translate-x-5") 
                : "translate-x-0"
        )} />
     </button>
  );
}
