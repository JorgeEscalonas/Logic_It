"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ResultsSection() {
  const results = [
    {
      title: "Core Banking Engine",
      tag: "FINTECH",
      img: "https://picsum.photos/seed/fintech1/1200/800",
      hint: "software dashboard"
    },
    {
      title: "Logistic Grid AI",
      tag: "SUPPLY CHAIN",
      img: "https://picsum.photos/seed/logis/1200/800",
      hint: "complex data"
    },
    {
      title: "Patient Care System",
      tag: "HEALTHCARE",
      img: "https://picsum.photos/seed/health1/1200/800",
      hint: "modern interface"
    }
  ];

  return (
    <section className="py-32 bg-slate-950 text-white border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-8xl font-headline font-black tracking-tighter leading-[0.9] uppercase">
              Impacto <br />
              <span className="text-primary italic">Tangible</span>
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-slate-500 uppercase tracking-[0.5em]">
            Case_Studies_v24
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {results.map((result, i) => (
            <div key={result.title} className="group relative bg-slate-950 overflow-hidden aspect-[4/5]">
              <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-100 group-hover:scale-110">
                <Image 
                  src={result.img}
                  alt={result.title}
                  fill
                  className="object-cover"
                  data-ai-hint={result.hint}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-[10px] font-mono text-primary font-bold tracking-[0.3em]">{result.tag}</span>
                </div>
                <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">{result.title}</h3>
                <button className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Explorar Arquitectura <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}