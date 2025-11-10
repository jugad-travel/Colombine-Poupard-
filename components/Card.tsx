import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  title?: string;
  children: ReactNode;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

export function Card({ title, children, href, className = "", icon }: CardProps) {
  const cardContent = (
    <div
      className={`bg-gradient-to-br from-white to-brand-50 rounded-3xl p-6 lg:p-8 border border-brand-200/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col min-h-[280px] sm:min-h-[300px] ${className}`}
    >
      {icon && <div className="mb-4 text-brand-700 transform transition-transform duration-300 group-hover:scale-110 flex-shrink-0">{icon}</div>}
      {title && (
        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-brand-900 mb-4 bg-gradient-to-r from-brand-900 to-brand-700 bg-clip-text text-transparent flex-shrink-0">
          {title}
        </h3>
      )}
      <div className="text-muted leading-relaxed text-sm sm:text-base flex-grow flex items-start">{children}</div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

