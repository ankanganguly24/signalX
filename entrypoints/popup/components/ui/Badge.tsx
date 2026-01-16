import { cn } from "../../utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset transition-colors",
        {
          "bg-[#333333] text-[#EDEDED] ring-[#444444]": variant === "default",
          "bg-green-500/10 text-green-400 ring-green-500/20": variant === "success",
          "bg-yellow-500/10 text-yellow-400 ring-yellow-500/20": variant === "warning",
          "bg-red-500/10 text-red-400 ring-red-500/20": variant === "error",
          "text-[#A1A1A1] ring-[#333333]": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
