"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";

export default function FooterCTA() {
  return (
    <footer id="contacto" className="py-32 bg-background text-white relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-headline font-semibold tracking-tighter">
            Construyamos hoy la tecnología que tu empresa necesita mañana.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light">
            Conversemos sobre cómo la arquitectura correcta puede transformar tu negocio.
          </p>
        </div>

        <ContactModal>
          <Button size="lg" className="h-16 px-12 text-lg font-mono font-medium rounded-none bg-primary text-black hover:bg-white hover:text-primary transition-all shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.3)] tracking-widest uppercase">
            Agendar Auditoría Técnica
          </Button>
        </ContactModal>

        <div className="pt-24 grid md:grid-cols-4 gap-12 border-t border-slate-900 mt-24 text-left">
          {/* COLUMNA 1: BRAND LOGO & MISSION */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="Logic It Logo"
                width={80}
                height={80}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
              Arquitectura de software y sistemas de misión crítica diseñados para escalar operaciones globales sin deuda técnica.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-400">Sistemas Operativos / Disponibles para Proyectos</span>
            </div>
          </div>

          {/* COLUMNA 2: SOCIAL */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Social</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.instagram.com/logicit_" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">Instagram / Engineering</a>
              <a href="https://www.tiktok.com/@logic_it" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">TikTok / Insights</a>
              <a href="mailto:logicit2020@gmail.com" className="text-sm text-slate-500 hover:text-white transition-colors">Email / Inquiry</a>
            </div>
          </div>

          {/* COLUMNA 3: LEGAL */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Legal</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <Link href="/legal/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
              <Link href="/legal/terminos" className="hover:text-white transition-colors">Términos</Link>
              <Link href="/legal/sla" className="hover:text-white transition-colors">SLA & Garantías</Link>
              <div className="pt-4 font-mono text-[10px] opacity-40 uppercase tracking-tighter leading-tight">
                Logic It Systems C.A.<br />
                © 2026 / All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
