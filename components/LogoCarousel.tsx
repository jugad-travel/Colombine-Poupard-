"use client";

import { ENTERPRISE_CLIENTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function LogoCarousel() {
  // Dupliquer les logos pour un défilement infini fluide
  const duplicatedClients = [...ENTERPRISE_CLIENTS, ...ENTERPRISE_CLIENTS];
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-brand-100 rounded-2xl p-6 lg:p-8">
      {/* Masque de gradient sur les bords pour un effet élégant */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-100 via-brand-100 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-100 via-brand-100 to-transparent z-10 pointer-events-none" />
      
      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-4 sm:gap-6"
          style={{ willChange: "transform" }}
          animate={{
            x: containerWidth > 0 ? [0, -containerWidth] : 0,
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client}-${index}`}
              className="flex-shrink-0 bg-white px-5 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium text-brand-900 border border-brand-300 shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

