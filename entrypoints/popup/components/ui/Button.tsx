import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5E81AC] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-[#111111]",
          {
            "bg-gradient-to-r from-[#5E81AC] to-[#81A1C1] text-white hover:to-[#5E81AC] hover:shadow-lg shadow-blue-900/40 border border-blue-400/20": variant === "primary",
            "bg-[#333333] text-[#EDEDED] hover:bg-[#444444] hover:text-white border border-[#444444]": variant === "secondary",
            "border border-[#333333] bg-transparent hover:bg-[#1A1A1A] text-[#EDEDED]": variant === "outline",
            "hover:bg-[#1A1A1A] text-[#EDEDED] hover:text-white": variant === "ghost",
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-4 py-2 text-sm": size === "md",
            "h-12 px-6 text-base": size === "lg",
            "h-9 w-9 p-0": size === "icon",
          },
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
