"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    { title: "Apps Web de Alto Tráfico", desc: "Sistemas distribuidos que procesan millones de peticiones." },
    { title: "Ecosistemas Móviles", desc: "Experiencias nativas y fluidas centradas en el usuario." },
    { title: "Automatización Core", desc: "Reducción de fricción mediante lógica de procesos pura." },
    { title: "Arquitectura Cloud", desc: "Infraestructura que escala automáticamente con el negocio." },
  ];

  return (
    <section id="sistemas" className="py-32 bg-slate-950 text-white border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none">
              Nuestras <br />
              <span className="text-primary italic">Especialidades</span>
            </h2>
          </div>
          <div className="max-w-xs space-y-4">
            <div className="w-12 h-1 bg-primary" />
            <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">
              No somos una agencia creativa. Somos una consultora de ingeniería.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {services.map((service, i) => (
            <div 
              key={service.title} 
              className="group p-12 bg-slate-950 hover:bg-primary transition-all duration-700 cursor-crosshair relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 group-hover:text-black/10 transition-colors">
                0{i + 1}
              </div>
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-bold tracking-tighter group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 group-hover:text-black/80 transition-colors max-w-sm">
                  {service.desc}
                </p>
                <div className="pt-8 flex items-center gap-4 group-hover:text-black">
                   <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Especificaciones Técnicas</span>
                   <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12 opacity-40">
           {["Microservices", "Serverless", "Event-Driven"].map(tag => (
             <div key={tag} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="font-mono text-[10px] uppercase tracking-[0.5em]">{tag}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
