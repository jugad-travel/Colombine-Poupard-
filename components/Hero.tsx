"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { PRACTICE_INFO } from "@/lib/constants";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

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
    <section className="relative w-full h-[85vh] min-h-[500px] md:min-h-[700px] max-h-[1000px] overflow-hidden flex flex-col md:flex-row" style={{ margin: 0, padding: 0 }}>
      {/* Partie gauche - Fond avec couleur exacte */}
      <div className="absolute inset-0 w-full md:w-1/2 z-0" style={{ backgroundColor: '#a4897b' }}>
        {/* Overlay subtil pour plus de profondeur */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-transparent" />
      </div>

      {/* Partie droite - Vidéo avec fond au premier plan */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 overflow-hidden z-10" style={{ backgroundColor: '#a4897b' }}>
        {videoSrc ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              webkit-playsinline="true"
              x5-playsinline="true"
              poster="/images/hero/hero-image.webp"
              className="w-full h-full object-contain"
              style={{
                objectPosition: "center center",
                zIndex: 10,
              }}
              onLoadedData={(e) => {
                // Forcer la lecture sur mobile
                const video = e.target as HTMLVideoElement;
                video.play().catch(() => {
                  // Si autoplay échoue, on peut essayer de jouer après interaction
                });
              }}
              onPlay={() => {
                // Masquer le poster une fois que la vidéo démarre
                if (videoRef.current) {
                  videoRef.current.style.opacity = "1";
                }
              }}
            >
              <source src={videoSrc} type={`video/${videoSrc.split('.').pop()}`} />
            </video>
          </div>
        ) : (
          // Fallback si pas de vidéo
          <div className="w-full h-full bg-gradient-to-br from-brand-500 via-brand-300 to-brand-100" />
        )}
        {/* Overlay léger sur la vidéo */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent z-20 pointer-events-none" />
        {/* Masquer le logo Grok en bas - dégradé subtil */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#a4897b] via-[#a4897b]/95 to-transparent z-30 pointer-events-none" />
      </div>

      {/* Contenu avec animations - Positionné à gauche */}
      <div className="relative z-30 w-full flex items-center px-4 sm:px-6 lg:px-8 py-8 md:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 leading-relaxed drop-shadow-md"
              >
                {subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                {/* Masquer le bouton "Prendre RDV" sur mobile (CTASticky en bas) */}
                {cta.external ? (
                  <motion.a
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-8 py-4 rounded-3xl font-medium shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
                  >
                    <Calendar size={20} />
                    {cta.label}
                  </motion.a>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:block"
                  >
                    <Link
                      href={cta.href}
                      className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-900 text-white px-8 py-4 rounded-3xl font-medium shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
                    >
                      <Calendar size={20} />
                      {cta.label}
                    </Link>
                  </motion.div>
                )}
                {secondaryCTA && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={secondaryCTA.href}
                      className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-brand-700 border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-3xl font-medium transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 text-sm sm:text-base"
                    >
                      {secondaryCTA.label}
                      <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

