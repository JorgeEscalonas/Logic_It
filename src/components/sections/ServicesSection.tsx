"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    "Aplicaciones Web",
    "Aplicaciones Móviles",
    "Software Desktop",
    "Automatización de Procesos",
    "Integraciones & Sistemas Internos",
  ];

  return (
    <section id="services" className="relative grid md:grid-cols-2 min-h-screen border-t">
      {/* Left Column: Text Content */}
      <div className="p-8 md:p-24 flex flex-col justify-center space-y-12 bg-white">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-headline font-semibold tracking-tighter">
            No desarrollamos “apps”. <br />
            <span className="text-primary">Construimos sistemas.</span>
          </h2>
          <div className="max-w-lg space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desarrollamos aplicaciones web, móviles y de escritorio, automatizaciones y plataformas internas que resuelven procesos reales de negocio.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada línea de código responde a una arquitectura clara. Cada sistema está pensado para crecer.
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          {services.map((service, i) => (
            <div key={service} className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors cursor-default">
              <div className="flex items-center gap-6">
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                <span className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">{service}</span>
              </div>
              <div className="h-px w-0 group-hover:w-12 bg-primary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Visual Showcase */}
      <div className="relative h-[50vh] md:h-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="relative w-full h-full border border-primary/30 bg-primary/5 backdrop-blur-sm p-4">
             {/* Simulated system diagram animation container */}
             <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 p-8 gap-4 opacity-40">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="border border-primary/50 bg-primary/10 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
             </div>
             <Image 
                src="https://picsum.photos/seed/logic3/1200/800"
                alt="Architecture view"
                fill
                className="object-contain p-12 mix-blend-screen opacity-60"
                data-ai-hint="system diagram"
             />
          </div>
        </div>
        
        {/* Decorative architectural info overlay */}
        <div className="absolute bottom-8 right-8 text-right font-mono text-[10px] text-primary/60 uppercase leading-relaxed">
          System: Core.Logic.v4<br />
          Status: Operational<br />
          Scale: High_Throughput
        </div>
      </div>
    </section>
  );
}