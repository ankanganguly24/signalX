import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { LucideIcon } from "lucide-react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: Icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1A1]">
            <Icon className="h-4 w-4" />
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "flex h-10 w-full rounded-xl border border-[#333333] bg-[#1A1A1A] px-3 py-2 text-sm text-[#EDEDED] ring-offset-[#111111] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#666666] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E81AC] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            Icon ? "pl-9" : "",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
