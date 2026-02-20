
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SLA y Garantías | Logic It Systems',
};

export default function SLAPage() {
    return (
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:font-semibold prose-h1:text-5xl prose-h1:tracking-tight prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-white prose-a:text-primary hover:prose-a:text-white transition-colors">

            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                    Service Level Agreement
                </span>
                <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                    Ref: SLA-2026-HQ
                </span>
            </div>

            <h1 className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                SLA y Garantías de Servicio
            </h1>

            <div className="p-6 mb-12 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-lg border-l-primary border-l-2">
                <p className="m-0 text-sm italic text-slate-300">
                    <strong>Compromiso de Disponibilidad:</strong> Logic It Systems garantiza la calidad técnica y la disponibilidad operativa de sus soluciones bajo los siguientes términos.
                </p>
            </div>

            <h2>1. Garantía de Estabilidad (Bug-Free Guarantee)</h2>
            <p>
                Ofrecemos un <strong>periodo de garantía de 90 días</strong> posteriores al despliegue en producción (Go-Live).
            </p>
            <ul>
                <li><strong>Cobertura:</strong> Cualquier falla técnica, error de lógica o discrepancia con el documento de Requerimientos Funcionales será corregida sin costo adicional.</li>
                <li><strong>Exclusiones:</strong> Cambios en APIs de terceros, actualizaciones de sistemas operativos fuera de nuestro control, o intervenciones de personal no autorizado.</li>
            </ul>

            <h2>2. Niveles de Servicio (Tiempos de Respuesta)</h2>
            <p>Para clientes con plan de Mantenimiento Activo, garantizamos los siguientes tiempos de respuesta (Ticket Acknowledge):</p>

            <div className="not-prose mt-8 mb-12">
                <div className="overflow-hidden border border-white/5 bg-slate-900/20 backdrop-blur-sm rounded-none">
                    <table className="w-full text-sm text-left text-slate-400">
                        <thead className="text-xs text-slate-200 uppercase tracking-widest font-mono bg-primary/5 border-b border-white/5">
                            <tr>
                                <th className="px-6 py-4 font-medium">Prioridad</th>
                                <th className="px-6 py-4 font-medium">Definición</th>
                                <th className="px-6 py-4 font-medium text-center">Respuesta</th>
                                <th className="px-6 py-4 font-medium text-center">Resolución</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4 font-mono font-bold text-red-500 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    P1 - Crítica
                                </td>
                                <td className="px-6 py-4 text-slate-300">Cese total de operaciones o riesgo masivo de datos.</td>
                                <td className="px-6 py-4 text-center font-mono">{'< 1 h'}</td>
                                <td className="px-6 py-4 text-center font-mono">4 h</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4 font-mono font-bold text-orange-400 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                                    P2 - Alta
                                </td>
                                <td className="px-6 py-4 text-slate-300">Degradación severa o pérdida de funciones críticas.</td>
                                <td className="px-6 py-4 text-center font-mono">{'< 4 h'}</td>
                                <td className="px-6 py-4 text-center font-mono">24 h</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4 font-mono font-bold text-blue-400 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    P3 - Media
                                </td>
                                <td className="px-6 py-4 text-slate-300">Incidentes menores o consultas técnicas generales.</td>
                                <td className="px-6 py-4 text-center font-mono">24 h</td>
                                <td className="px-6 py-4 text-center font-mono">Sprint cycle</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h2>3. Disponibilidad (Uptime) & Créditos</h2>
            <p>
                Para aplicaciones alojadas en nuestra infraestructura gestionada, garantizamos un <strong>Uptime Mensual del 99.9%</strong>.
            </p>
            <p>
                Si la disponibilidad cae por debajo de este umbral (excluyendo mantenimientos programados), el cliente recibirá un crédito de servicio del 5% de la tarifa mensual por cada hora de inactividad adicional, hasta un máximo del 50% de la factura mensual.
            </p>

            <h2>4. Fuerza Mayor e Infraestructura</h2>
            <p>
                Logic It Systems no será responsable por incumplimientos del SLA causados por eventos de fuerza mayor, incluyendo pero no limitado a: fallas generalizadas de proveedores de nube (AWS, Google Cloud) a nivel regional, desastres naturales, o interrupciones masivas de conectividad nacional que afecten la capacidad de respuesta remota, siempre que se demuestre la activación de planes de contingencia razonables.
            </p>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg mt-8">
                <p className="text-sm text-slate-400 mb-0">
                    <strong>Reporte de Incidentes:</strong> Todos los tickets P1 deben ser reportados telefónicamente además de vía email a <a href="mailto:soporte@logicit.com" className="text-primary hover:underline">soporte@logicit.com</a>
                </p>
            </div>
        </article>
    );
}
