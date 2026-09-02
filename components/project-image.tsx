"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  images?: string[];
}

export function ProjectImage({ src, alt, images }: ProjectImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = images && images.length > 0 ? images : [src];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const activeImage = slides[currentIndex] ?? slides[0];

  return (
    <div
      className={cn(
        "bg-background relative aspect-[4/3] overflow-hidden border-b border-border transition-opacity duration-500",
        loaded ? "opacity-100" : "opacity-0"
      )}
    >
      {slides.length > 1 ? (
        <div className="relative h-full w-full">
          <Image
            src={activeImage}
            alt={`${alt} ${currentIndex + 1}`}
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw, 33vw"
            onLoad={() => setLoaded(true)}
            className="h-full w-full object-contain p-2"
          />

          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-lg text-foreground shadow-sm backdrop-blur-sm transition hover:bg-background"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-lg text-foreground shadow-sm backdrop-blur-sm transition hover:bg-background"
          >
            ›
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-2">
            {slides.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                aria-label={`Selecionar imagem ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  currentIndex === index ? "w-8 bg-primary" : "w-2.5 bg-white/70 hover:bg-white"
                )}
              />
            ))}
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, 33vw"
          onLoad={() => setLoaded(true)}
          className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      )}

      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
