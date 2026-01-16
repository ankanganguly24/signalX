import { cn } from "../../utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}

export function Card({ className, children, noPadding = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-[#1A1A1A] border border-[#333333] rounded-xl shadow-lg transition-all duration-200 hover:border-[#444444]",
        noPadding ? "p-0" : "p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
