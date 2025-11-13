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
    <section className={`${bgClasses[bg]} py-8 sm:py-12 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || kicker) && (
          <div className="mb-8 sm:mb-12 lg:mb-16">
            {kicker && (
              <p className="text-xs sm:text-sm font-semibold text-brand-700 uppercase tracking-wide mb-2 sm:mb-3">
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brand-900 sm:bg-gradient-to-r sm:from-brand-900 sm:via-brand-700 sm:to-brand-900 sm:bg-clip-text sm:text-transparent">
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

