"use client";

import { useEffect, useRef, useState } from "react";

export default function MethodSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 to 1) based on section position
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chaotic items initially spread, then move to a grid
  const items = Array.from({ length: 16 });

  return (
    <section ref={sectionRef} id="method" className="relative min-h-[200vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="text-center mb-16 max-w-2xl z-20">
          <h2 className="text-4xl md:text-5xl font-headline font-semibold tracking-tighter mb-6">
            El problema no es la tecnología. <br />
            <span className="text-primary italic">Es la falta de arquitectura.</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl aspect-video border border-border bg-white p-8 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-small opacity-10" />
          
          <div className="relative w-full h-full">
            {items.map((_, i) => {
              const row = Math.floor(i / 4);
              const col = i % 4;
              
              // Chaos state (random-ish)
              const chaosX = (Math.sin(i * 123) * 40) + 50; // 10% to 90%
              const chaosY = (Math.cos(i * 456) * 40) + 50; 
              const chaosRotate = Math.sin(i) * 45;

              // Order state (grid)
              const orderX = 12.5 + (col * 25);
              const orderY = 12.5 + (row * 25);
              const orderRotate = 0;

              // Linear interpolation based on scrollProgress
              // We accelerate the transition in the middle of the scroll (0.3 to 0.7)
              const t = Math.max(0, Math.min(1, (scrollProgress - 0.2) * 2));
              
              const currentX = chaosX + (orderX - chaosX) * t;
              const currentY = chaosY + (orderY - chaosY) * t;
              const currentRotate = chaosRotate + (orderRotate - chaosRotate) * t;

              return (
                <div
                  key={i}
                  className="absolute w-12 h-12 md:w-20 md:h-20 border border-border bg-background flex items-center justify-center shadow-sm"
                  style={{
                    left: `${currentX}%`,
                    top: `${currentY}%`,
                    transform: `translate(-50%, -50%) rotate(${currentRotate}deg)`,
                    borderColor: t > 0.8 ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  <div className={`w-1/2 h-1/2 border border-dotted ${t > 0.8 ? 'border-primary/50' : 'border-muted-foreground/30'}`} />
                </div>
              );
            })}
          </div>

          {/* Introduce the "Modular Bit" in the middle of transition */}
          {scrollProgress > 0.4 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none animate-fade-in">
              <div className="px-6 py-2 bg-primary text-white font-mono text-xs uppercase tracking-[0.2em] shadow-xl">
                Bit Modular Iniciado
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center opacity-50 font-mono text-[10px] uppercase tracking-widest">
          Scroll para reorganizar sistema
        </div>
      </div>
    </section>
  );
}