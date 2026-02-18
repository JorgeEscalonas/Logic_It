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
          <Button size="lg" className="h-16 px-12 text-lg font-mono font-medium rounded-none bg-primary text-black hover:bg-white hover:text-primary transition-all shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.3)] tracking-widest uppercase">
            Agendar Auditoría Técnica
          </Button>
        </ContactModal>

        <div className="pt-24 grid md:grid-cols-4 gap-12 border-t border-slate-900 mt-24 text-left">
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Corporativo</h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              <strong className="text-white font-medium">Logic It Systems C.A.</strong><br />
              Tech District Center, Piso 4<br />
              Global Operations HQ<br />
              RIF: J-50493821-2
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="mailto:enterprise@logicit.com" className="hover:text-primary transition-colors">enterprise@logicit.com</a></li>
              <li><span className="opacity-50">+58 (212) 555-0199</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Social</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.instagram.com/logicit_" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">Instagram / Engineering</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors">LinkedIn / Corporate</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Legal</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-white transition-colors">SLA & Garantías</a>
              <p className="pt-4 text-xs opacity-40">
                © 2024 Logic It Systems.<br />Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
