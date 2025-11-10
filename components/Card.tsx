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
      className={`bg-white rounded-2xl p-6 lg:p-8 border border-brand-100 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] ${className}`}
    >
      {icon && <div className="mb-4 text-brand-700">{icon}</div>}
      {title && (
        <h3 className="text-xl lg:text-2xl font-serif font-semibold text-brand-900 mb-4">
          {title}
        </h3>
      )}
      <div className="text-muted leading-relaxed">{children}</div>
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

