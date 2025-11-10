"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  altPrefix?: string;
  className?: string;
}

export function ImageGallery({ images, altPrefix = "Image", className = "" }: ImageGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-full h-[400px] bg-brand-100 rounded-2xl overflow-hidden group"
        >
          {loadedImages.has(index) ? (
            <Image
              src={src}
              alt={`${altPrefix} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index < 2}
            />
          ) : (
            <>
              <Image
                src={src}
                alt={`${altPrefix} ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
                onLoad={() => setLoadedImages((prev) => new Set(prev).add(index))}
                onError={() => {
                  // Image failed to load, keep placeholder
                }}
              />
              <div className="absolute inset-0 bg-brand-100 flex items-center justify-center">
                <p className="text-muted">Chargement...</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

