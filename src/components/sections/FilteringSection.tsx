"use client";

import { Check, X } from "lucide-react";

export default function FilteringSection() {
  const target = [
    "Empresas en crecimiento",
    "Negocios con procesos complejos",
    "Equipos que necesitan control y escalabilidad"
  ];

  const skip = [
    "Proyectos improvisados",
    "Soluciones rápidas sin visión",
    "Software sin arquitectura"
  ];

  return (
    <section className="py-24 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-headline font-semibold tracking-tighter uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Para quién es Logicit
            </h2>
            <div className="h-px w-24 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                Trabajamos con:
              </h3>
              <ul className="space-y-6">
                {target.map(item => (
                  <li key={item} className="text-lg font-medium border-l-2 border-primary pl-4 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                  <X className="w-4 h-4" />
                </span>
                No trabajamos con:
              </h3>
              <ul className="space-y-6 opacity-60">
                {skip.map(item => (
                  <li key={item} className="text-lg font-medium border-l-2 border-slate-200 pl-4 py-1 italic">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-20 p-8 bg-slate-900 text-white text-center">
            <p className="text-sm font-mono uppercase tracking-widest text-slate-400">
              Nuestro compromiso es con la excelencia técnica y el éxito del negocio a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}