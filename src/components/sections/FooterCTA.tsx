"use client";

import { Button } from "@/components/ui/button";

export default function FooterCTA() {
  return (
    <footer id="contacto" className="py-32 bg-background text-white relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-headline font-semibold tracking-tighter">
            Si tu sistema ya no escala, es momento de rediseñarlo.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light">
            Conversemos sobre cómo la arquitectura correcta puede transformar tu negocio.
          </p>
        </div>

        <Button size="lg" className="h-16 px-12 text-lg font-medium rounded-none bg-primary hover:bg-white hover:text-primary transition-all shadow-2xl">
          HABLAR SOBRE MI PROYECTO
        </Button>

        <div className="pt-24 grid md:grid-cols-3 gap-12 border-t border-slate-900 mt-24">
          <div className="text-left space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Sede Central</h4>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Logicit Systems S.A.<br />
              Tech District Center<br />
              Global Operations
            </p>
          </div>

          <div className="text-left md:text-center space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Conecta</h4>
            <div className="flex md:justify-center gap-6">
              <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Tiktok</a>
              <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Contacto</a>
            </div>
          </div>

          <div className="text-left md:text-right space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Legal</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              © 2024 Logicit. Todos los derechos reservados.<br />
              Sistemas Diseñados, No Decorados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
