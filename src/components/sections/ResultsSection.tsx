"use client";

import Image from "next/image";

export default function ResultsSection() {
  const results = [
    {
      title: "App Web Empresarial",
      tag: "Enterprise System",
      img: "https://picsum.photos/seed/logic1/800/600",
      hint: "software dashboard"
    },
    {
      title: "App Móvil Profesional",
      tag: "Mobile Logic",
      img: "https://picsum.photos/seed/logic2/800/600",
      hint: "mobile app"
    },
    {
      title: "Dashboard de Control",
      tag: "Operational Visibility",
      img: "https://picsum.photos/seed/logic4/800/600",
      hint: "control dashboard"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold tracking-tighter">
              El resultado no es solo software. <br />
              <span className="text-primary italic">Es claridad operativa.</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Portfolio_v24.0</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, i) => (
            <div key={result.title} className="group relative border border-border bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={result.img}
                  alt={result.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  data-ai-hint={result.hint}
                />
              </div>
              <div className="p-6 space-y-2 border-t border-border">
                <span className="text-[10px] font-mono uppercase text-primary font-bold tracking-[0.2em]">{result.tag}</span>
                <h3 className="text-xl font-bold tracking-tight">{result.title}</h3>
                <div className="pt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="h-px flex-1 bg-border" />
                   <span className="px-4 text-[10px] font-mono text-muted-foreground uppercase">Ver Arquitectura</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}