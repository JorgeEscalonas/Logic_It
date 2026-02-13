"use client";

import { Button } from "@/components/ui/button";
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
          <Button size="lg" className="h-16 px-12 text-lg font-medium rounded-none bg-primary hover:bg-white hover:text-primary transition-all shadow-2xl">
            CONTACTANOS
          </Button>
        </ContactModal>

        <div className="pt-24 grid md:grid-cols-3 gap-12 border-t border-slate-900 mt-24">
          <div className="text-left space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Sede Central</h4>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Logic It Systems C.A.<br />
              Tech District Center<br />
              Global Operations
            </p>
          </div>

          <div className="text-left md:text-center space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Conecta</h4>
            <div className="flex md:justify-center gap-6">
              <a href="https://www.instagram.com/logicit_" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">Tiktok</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">Contacto</a>
            </div>
          </div>

          <div className="text-left md:text-right space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Legal</h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              © 2024 Logic It. Todos los derechos reservados.<br />
              Sistemas Diseñados, No Decorados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
