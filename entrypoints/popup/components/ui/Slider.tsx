import { useRef, useState, useEffect } from "react";
import { cn } from "../../utils/cn";

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  className?: string;
  label?: string;
  valueLabel?: string;
}

export function Slider({ value, min = 0, max = 100, step = 1, onChange, className, label, valueLabel }: SliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleInteraction = (clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const rawValue = (x / rect.width) * (max - min) + min;
    const steppedValue = Math.round(rawValue / step) * step;
    onChange(Math.max(min, Math.min(max, steppedValue)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleInteraction(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleInteraction(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className={cn("space-y-2 select-none", className)}>
      <div className="flex justify-between items-center text-xs">
         {label && <span className="text-[#A1A1A1] font-medium">{label}</span>}
         {valueLabel && <span className="text-[#EDEDED] font-bold">{valueLabel}</span>}
      </div>
      <div 
        ref={trackRef}
        className="relative h-6 flex items-center cursor-pointer group"
        onMouseDown={handleMouseDown}
      >
        {/* Track Background */}
        <div className="absolute w-full h-1.5 bg-[#333333] rounded-full overflow-hidden">
            {/* Fill */}
            <div 
                className="h-full bg-gradient-to-r from-[#5E81AC] to-[#88C0D0]"
                style={{ width: `${percentage}%` }}
            />
        </div>
        
        {/* Thumb */}
        <div 
            className={cn(
                "absolute h-3.5 w-3.5 bg-[#EDEDED] rounded-full shadow-md border border-[#333333] transform -translate-x-1/2 transition-transform hover:scale-110",
                isDragging && "scale-125 ring-2 ring-[#5E81AC]/50"
            )}
            style={{ left: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
