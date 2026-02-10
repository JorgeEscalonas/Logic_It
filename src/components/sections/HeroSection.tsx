"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 overflow-hidden grayscale opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <div className="flex w-[200%] h-full animate-slow-pan">
          <Image
            src="https://picsum.photos/seed/logic1/1920/1080"
            alt="System visual loop"
            fill
            className="object-cover"
            priority
            data-ai-hint="software dashboard"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.3em]">Arquitectura Digital v2.5</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline font-semibold leading-[1.1] tracking-tighter">
            Diseñamos y desarrollamos <br />
            <span className="text-foreground/80">sistemas digitales que funcionan.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
            Aplicaciones web, móviles, desktop y automatizaciones construidas con arquitectura, lógica y visión de largo plazo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="h-14 px-10 text-base font-medium rounded-none bg-primary hover:bg-accent text-white transition-all">
              DISEÑAR MI SISTEMA
            </Button>
            <div className="flex items-center gap-3 px-6 py-3 border border-border bg-white/50 backdrop-blur text-sm font-medium">
              Sistemas reales. Software que escala.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 right-6 flex justify-between items-end border-t border-border/50 pt-4 z-20">
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          Logicit © 2024 / Digital Architecture
        </div>
        <div className="hidden md:flex gap-12">
          {["Vision", "Logic", "Scale"].map((word) => (
            <div key={word} className="flex items-center gap-2">
              <span className="text-[10px] text-primary font-bold">0{word.length}</span>
              <span className="text-xs font-medium uppercase tracking-tighter">{word}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}