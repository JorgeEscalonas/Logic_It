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
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = Array.from({ length: 24 });

  return (
    <section ref={sectionRef} id="method" className="relative min-h-[250vh] bg-slate-950 text-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
        
        <div className="text-center mb-16 max-w-3xl z-20">
          <div className="inline-block px-4 py-1 border border-primary text-primary text-[10px] font-mono uppercase tracking-[0.3em] mb-8">
            Filosofía de Construcción
          </div>
          <h2 className="text-5xl md:text-8xl font-headline font-black tracking-tighter leading-none uppercase">
            Orden <br /> 
            <span className="text-primary italic">Desde el Caos</span>
          </h2>
        </div>

        <div className="relative w-full max-w-6xl aspect-[21/9] border border-white/5 bg-slate-900/50 backdrop-blur-sm p-8 overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-small opacity-10" />
          
          <div className="relative w-full h-full">
            {items.map((_, i) => {
              const rows = 3;
              const cols = 8;
              const row = Math.floor(i / cols);
              const col = i % cols;
              
              const chaosX = (Math.sin(i * 123) * 60) + 50;
              const chaosY = (Math.cos(i * 456) * 60) + 50; 
              const chaosRotate = Math.sin(i) * 180;

              const orderX = 10 + (col * (80 / (cols - 1)));
              const orderY = 15 + (row * (70 / (rows - 1)));
              const orderRotate = 0;

              // t control: start reorganization at 0.1, finish at 0.8
              const t = Math.max(0, Math.min(1, (scrollProgress - 0.1) * 1.5));
              
              const currentX = chaosX + (orderX - chaosX) * t;
              const currentY = chaosY + (orderY - chaosY) * t;
              const currentRotate = chaosRotate + (orderRotate - chaosRotate) * t;

              return (
                <div
                  key={i}
                  className="absolute w-8 h-8 md:w-16 md:h-16 border flex items-center justify-center transition-colors duration-500"
                  style={{
                    left: `${currentX}%`,
                    top: `${currentY}%`,
                    transform: `translate(-50%, -50%) rotate(${currentRotate}deg)`,
                    borderColor: t > 0.8 ? 'hsl(var(--primary))' : 'rgba(255,255,255,0.1)',
                    backgroundColor: t > 0.8 ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                  }}
                >
                  <div className="text-[8px] font-mono opacity-20">{i.toString(16).padStart(2, '0')}</div>
                  {t > 0.9 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-1 h-1 bg-primary rounded-full animate-ping" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Impact Text */}
          <div className={`absolute bottom-8 left-8 transition-all duration-700 ${scrollProgress > 0.6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-4xl font-black uppercase italic tracking-tighter">Modularidad Extrema.</p>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-2">Sistemas diseñados para la redundancia y el escalamiento horizontal.</p>
          </div>
        </div>

        <div className="mt-16 text-center opacity-30 font-mono text-[10px] uppercase tracking-[1em] animate-pulse">
          Desciende para alinear el sistema
        </div>
      </div>
    </section>
  );
}