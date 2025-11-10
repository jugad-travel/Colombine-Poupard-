import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  kicker?: string;
  children: ReactNode;
  bg?: "white" | "brand-100" | "brand-300";
  className?: string;
}

export function Section({
  title,
  kicker,
  children,
  bg = "white",
  className = "",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    "brand-100": "bg-brand-100",
    "brand-300": "bg-brand-300",
  };

  return (
    <section className={`${bgClasses[bg]} py-12 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || kicker) && (
          <div className="mb-8 lg:mb-12">
            {kicker && (
              <p className="text-sm font-semibold text-brand-700 uppercase tracking-wide mb-2">
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-900">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

