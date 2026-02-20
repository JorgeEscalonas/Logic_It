"use client";

import { Check, X } from "lucide-react";

export default function FilteringSection() {
  const target = [
    "Empresas en etapa de expansión y corporaciones",
    "Negocios con procesos operativos de alta complejidad",
    "Equipos que buscan escalabilidad y control técnico total"
  ];

  const skip = [
    "Proyectos de desarrollo rápido o prototipos temporales",
    "Soluciones genéricas sin una visión estratégica",
    "Mantenimiento de código heredado sin reestructuración"
  ];

  return (
    <section className="py-24 bg-white text-slate-950 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-headline font-semibold tracking-tighter uppercase tracking-[0.2em] text-slate-950 mb-4">
              Perfil Corporativo Objetivo
            </h2>
            <div className="h-px w-24 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="font-bold flex items-center gap-2 font-mono uppercase text-xs tracking-widest text-primary">
                Alineación Estratégica
              </h3>
              <ul className="space-y-6">
                {target.map(item => (
                  <li key={item} className="text-xl font-bold border-l-4 border-primary pl-6 py-2 text-slate-900 shadow-sm bg-slate-50 flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="font-bold flex items-center gap-2 font-mono uppercase text-xs tracking-widest text-slate-400">
                Fuera de Scope
              </h3>
              <ul className="space-y-6 opacity-60">
                {skip.map(item => (
                  <li key={item} className="text-lg font-medium border-l-2 border-slate-200 pl-6 py-1 italic text-slate-500 flex items-center gap-3">
                    <X className="w-4 h-4 text-slate-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 p-8 bg-slate-50 border border-slate-100 text-center">
            <p className="text-sm font-mono uppercase tracking-widest text-slate-500">
              Nuestro compromiso es con la excelencia técnica y el éxito del negocio a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}