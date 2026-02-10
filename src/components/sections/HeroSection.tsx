"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 blueprint-grid opacity-20 mask-radial" />
        <div className="absolute top-0 left-0 w-full h-full scanline opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 via-transparent to-transparent animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl space-y-10">
          <div className="inline-flex items-center gap-4 px-4 py-1.5 border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary-foreground/80">
              Sistemas que escalan sin límites
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-headline font-black leading-[0.85] tracking-[-0.07em] uppercase">
            Ingeniería <br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Digital</span> <br />
            <span className="text-primary glow-text">Real.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
              No creamos software común. Construimos arquitecturas robustas que transforman la lógica de negocio en activos digitales de alto rendimiento.
            </p>
            
            <div className="flex flex-col justify-end gap-6">
              <div className="flex gap-4">
                <Button asChild size="lg" className="h-16 px-10 text-sm font-mono uppercase tracking-widest rounded-none bg-primary text-slate-950 hover:bg-white transition-all group cursor-pointer">
                  <Link href="#contacto">
                    Iniciar Proyecto 
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 text-sm font-mono uppercase tracking-widest rounded-none border-white/20 hover:bg-white/10 cursor-pointer">
                  <Link href="#sistemas">
                    Explorar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Footer */}
      <div className="absolute bottom-12 left-6 right-6 flex flex-col md:flex-row justify-between items-end gap-4 border-t border-white/10 pt-6">
        <div className="flex gap-12">
          {[
            { label: "LATENCY", value: "<12ms" },
            { label: "UPTIME", value: "99.99%" },
            { label: "ARCHITECTURE", value: "Modular" }
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-sm font-bold tracking-tighter">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-4">
          <span>Logicit Systems v24.5</span>
          <div className="w-20 h-px bg-white/20" />
          <span>Status: Stable</span>
        </div>
      </div>
    </section>
  );
}
