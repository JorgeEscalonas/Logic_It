"use client";

export default function ProcessSection() {
  const steps = [
    {
      title: "Diagnóstico",
      desc: "Entendemos procesos, reglas de negocio y fricciones reales.",
      technical: "Business Process Mapping / Logic Flow Analysis"
    },
    {
      title: "Arquitectura",
      desc: "Diseñamos sistemas modulares, escalables y mantenibles.",
      technical: "Microservices / Layered Architecture / DB Schema"
    },
    {
      title: "Desarrollo",
      desc: "Implementamos con estándares altos, no parches.",
      technical: "CI/CD Pipelines / Type-Safe Code / Version Control"
    },
    {
      title: "Automatización & Escala",
      desc: "Reducimos fricción operativa y preparamos crecimiento.",
      technical: "Cloud Native / Auto-scaling / API Integration"
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <div className="inline-block px-3 py-1 border border-primary text-primary text-[10px] font-mono uppercase tracking-[0.2em] mb-6">
            Protocolo de Ingeniería
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-semibold tracking-tighter">
            Cómo desarrollamos software.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={step.title} className="relative group">
              <div className="absolute -top-6 -left-6 text-6xl font-bold text-slate-100 group-hover:text-primary/5 transition-colors z-0">
                0{i + 1}
              </div>
              <div className="relative z-10 space-y-4">
                <div className="h-1 w-12 bg-primary mb-6" />
                <h3 className="text-xl font-headline font-bold tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
                <div className="pt-4 border-t border-dotted border-border mt-4">
                  <span className="text-[10px] font-mono uppercase text-primary font-bold block mb-1">Stack/Method:</span>
                  <span className="text-xs font-mono text-muted-foreground">{step.technical}</span>
                </div>
              </div>
              
              {/* Connector lines for visual flow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[1px] bg-border border-t border-dotted z-0" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 border border-slate-900/5 bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center border border-primary text-primary font-bold">
              !
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">Rigor técnico garantizado.</p>
              <p className="text-xs text-muted-foreground">Todos nuestros sistemas incluyen documentación técnica completa y test coverage.</p>
            </div>
          </div>
          <div className="font-mono text-[10px] uppercase text-muted-foreground">
            Logicit_Standard_Operating_Procedure.pdf
          </div>
        </div>
      </div>
    </section>
  );
}