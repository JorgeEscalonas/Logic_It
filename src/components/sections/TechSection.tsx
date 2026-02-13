"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TechSection() {
  const codeSnippets = {
    frontend: `export const SystemModule = ({ config }) => {
  const [status, setStatus] = useState('stable');
  
  return (
    <div className="logic-node">
      <ArchitectureView 
        layer={config.layer}
        scaling={config.autoScale}
      />
    </div>
  );
};`,
    backend: `class SystemArchitecture:
    def __init__(self, capacity: int):
        self.nodes = []
        self.capacity = capacity

    async def deploy_module(self, module):
        if len(self.nodes) < self.capacity:
            await self.connect(module)
            return Status.SUCCESS`,
    api: `POST /api/v1/deploy
Content-Type: application/json
{
  "project": "Logicit-Enterprise",
  "modules": ["web", "mobile", "auth"],
  "infrastructure": "modular-scaling"
}`
  };

  return (
    <section className="py-24 bg-background text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold tracking-tighter">
              La tecnología es una herramienta. <br />
              <span className="text-primary italic">La arquitectura es la decisión.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              No listamos logotipos de tecnologías. Demostramos dominio técnico mediante la implementación de soluciones robustas, seguras y mantenibles.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
              <div>
                <p className="text-3xl font-headline font-bold text-primary mb-2">99.9%</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Uptime Architecture</p>
              </div>
              <div>
                <p className="text-3xl font-headline font-bold text-primary mb-2">10ms</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Core Response Time</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-1 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-800 bg-slate-900/50">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-700" />
                <div className="w-2 h-2 rounded-full bg-slate-700" />
                <div className="w-2 h-2 rounded-full bg-slate-700" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">system_terminal.exe</span>
              </div>
            </div>

            <Tabs defaultValue="frontend" className="w-full">
              <div className="px-4 pt-2">
                <TabsList className="bg-transparent border-none gap-4">
                  <TabsTrigger value="frontend" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-none border border-slate-800 px-4 text-[10px] font-mono uppercase tracking-widest">Frontend</TabsTrigger>
                  <TabsTrigger value="backend" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-none border border-slate-800 px-4 text-[10px] font-mono uppercase tracking-widest">Backend</TabsTrigger>
                  <TabsTrigger value="api" className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-none border border-slate-800 px-4 text-[10px] font-mono uppercase tracking-widest">REST API</TabsTrigger>
                </TabsList>
              </div>

              <div className="p-6">
                <TabsContent value="frontend" className="m-0">
                  <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
                    <code>{codeSnippets.frontend}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="backend" className="m-0">
                  <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
                    <code>{codeSnippets.backend}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="api" className="m-0">
                  <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
                    <code>{codeSnippets.api}</code>
                  </pre>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}