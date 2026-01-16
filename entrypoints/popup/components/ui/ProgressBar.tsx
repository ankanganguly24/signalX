import { cn } from "../../utils/cn";

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  className?: string;
  colorClass?: string;
  showLabel?: boolean;
}

export function ProgressBar({ value, max = 100, className, colorClass = "bg-green-500", showLabel = false }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={cn("w-full flex items-center gap-2", className)}>
      <div className="flex-1 h-1.5 bg-[#333333] rounded-full overflow-hidden">
        <div 
            className={cn("h-full rounded-full transition-all duration-500", colorClass)} 
            style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && <span className="text-[10px] font-medium text-[#A1A1A1] w-8 text-right">{Math.round(percentage)}%</span>}
    </div>
  );
}
