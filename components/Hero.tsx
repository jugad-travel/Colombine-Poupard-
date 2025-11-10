import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { PRACTICE_INFO } from "@/lib/constants";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  const defaultPrimaryCTA = {
    label: "Prendre RDV",
    href: PRACTICE_INFO.doctolibUrl,
    external: true,
  };

  const cta = primaryCTA || defaultPrimaryCTA;

  return (
    <section className="relative bg-gradient-to-b from-brand-100 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brand-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-muted mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {cta.external ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-6 py-3 rounded-2xl font-medium shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
              >
                <Calendar size={20} />
                {cta.label}
              </a>
            ) : (
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-6 py-3 rounded-2xl font-medium shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
              >
                <Calendar size={20} />
                {cta.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-100 text-brand-700 border-2 border-brand-300 px-6 py-3 rounded-2xl font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
              >
                {secondaryCTA.label}
                <ArrowRight size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

