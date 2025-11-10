import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block bg-brand-100 text-brand-900 px-4 py-2 rounded-full text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
}

