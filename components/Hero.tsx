"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { PRACTICE_INFO } from "@/lib/constants";
import { useRef, useState } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Vidéo hero - priorité à hero-video.mp4
  const [videoSrc] = useState<string | null>("/images/hero/hero-video.mp4");

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden flex items-center justify-center">
      {/* Vidéo en arrière-plan */}
      {videoSrc ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "center top",
            clipPath: "inset(0 0 15% 0)",
          }}
        >
          <source src={videoSrc} type={`video/${videoSrc.split('.').pop()}`} />
        </video>
      ) : (
        // Fallback si pas de vidéo
        <div className="absolute inset-0 bg-gradient-to-b from-brand-100 to-white" />
      )}

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {cta.external ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-6 py-3 rounded-2xl font-medium shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2 backdrop-blur-sm"
              >
                <Calendar size={20} />
                {cta.label}
              </a>
            ) : (
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-6 py-3 rounded-2xl font-medium shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2 backdrop-blur-sm"
              >
                <Calendar size={20} />
                {cta.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-brand-700 border-2 border-white/50 px-6 py-3 rounded-2xl font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 backdrop-blur-sm"
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

