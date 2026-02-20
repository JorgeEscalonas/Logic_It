
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad | Logic It Systems',
};

export default function PrivacyPage() {
    return (
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:font-semibold prose-h1:text-5xl prose-h1:tracking-tight prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-white prose-a:text-primary hover:prose-a:text-white transition-colors">

            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider">
                    Vigente 2026
                </span>
                <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                    Ref: LOPD-VE-25
                </span>
            </div>

            <h1 className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                Política de Privacidad y Protección de Datos
            </h1>

            <div className="p-6 mb-12 bg-slate-900/40 backdrop-blur-md border-l-2 border-primary rounded-r-lg">
                <p className="m-0 text-sm italic text-slate-300">
                    <strong>Cumplimiento Normativo:</strong> Ley de Protección de Datos Personales (Venezuela 2025) & GDPR Compliance Standards.
                </p>
            </div>

            <p>
                En <strong>Logic It Systems C.A.</strong> (en adelante "Logic It"), valoramos la privacidad como un derecho fundamental. Esta política detalla cómo gestionamos, protegemos y utilizamos la información, garantizando cumplimiento tanto con la legislación venezolana vigente como con los estándares internacionales para nuestros clientes globales.
            </p>

            <h2>1. Marco Legal y Normativo</h2>
            <p>
                El tratamiento de datos personales en esta web y nuestros servicios se rige por:
            </p>
            <ul className="list-disc list-inside">
                <li><strong>Venezuela:</strong> Artículo 28 de la Constitución de la República Bolivariana de Venezuela (Habeas Data), la Ley Especial contra los Delitos Informáticos y la <strong>Ley de Protección de Datos Personales (2025)</strong>.</li>
                <li><strong>Internacional:</strong> Principios alineados con el RGPD (Reglamento General de Protección de Datos - UE 2016/679) para garantizar la confianza de nuestros socios en Europa y Norteamérica.</li>
            </ul>

            <h2>2. Recopilación de Información</h2>
            <p>
                Dada nuestra naturaleza B2B (Business-to-Business), recopilamos datos limitados y específicos:
            </p>
            <ul>
                <li><strong>Datos de Identificación:</strong> Nombres, cargos y correos corporativos facilitados en formularios de contacto o contratos.</li>
                <li><strong>Información Técnica:</strong> Logs de servidor, direcciones IP y analíticas anonimizadas de navegación para seguridad y optimización del sistema.</li>
                <li><strong>Credenciales de Proyecto:</strong> Accesos a repositorios, servidores o bases de datos compartidos bajo estrictos Acuerdos de Confidencialidad (NDA).</li>
            </ul>

            <h2>3. Uso y Tratamiento de Datos</h2>
            <p>
                La información se utiliza estrictamente para:
            </p>
            <ol>
                <li>La ejecución de los Servicios Profesionales contratados (Desarrollo, Consultoría, Auditoría).</li>
                <li>Facturación y cumplimiento de obligaciones fiscales (SENIAT).</li>
                <li>Comunicaciones críticas sobre seguridad, actualizaciones de SLA o mantenimiento.</li>
            </ol>
            <p>
                <strong>No comercializamos bases de datos.</strong> Compartimos información únicamente con proveedores de infraestructura crítica (ej. AWS, Vercel, Azure) necesarios para la operación, quienes actúan como encargados del tratamiento bajo contrato.
            </p>

            <h2>4. Seguridad y Confidencialidad (NDA)</h2>
            <p>
                Implementamos medidas de seguridad de nivel bancario. Toda información confidencial "Propiedad del Cliente" (Código fuente, diagramas, lógica de negocio) está protegida legalmente y técnicamente mediante encriptación en reposo y tránsito.
            </p>

            <h2>5. Derechos ARCO y Gestión de Datos</h2>
            <p>
                Conforme a la ley venezolana y buenas prácticas globales, usted tiene derecho a:
            </p>
            <ul>
                <li><strong>Acceso:</strong> Solicitar copia de sus datos almacenados.</li>
                <li><strong>Rectificación:</strong> Corregir información inexacta.</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios para la relación contractual.</li>
                <li><strong>Oposición:</strong> Negarse al uso de sus datos para fines específicos.</li>
            </ul>
            <p>
                Para ejercer estos derechos, el Representante Legal de su empresa debe enviar una solicitud formal a <a href="mailto:legal@logicit.com">legal@logicit.com</a>.
            </p>

            <h2>6. Transferencia Internacional de Datos</h2>
            <p>
                Para clientes fuera de Venezuela, garantizamos que cualquier transferencia de datos transfronteriza cumple con las cláusulas contractuales tipo para asegurar un nivel de protección adecuado, independientemente de la ubicación física de los servidores.
            </p>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg mt-8">
                <p className="text-sm text-slate-400 mb-0">
                    <strong>Nota sobre Cookies:</strong> Este sitio utiliza cookies técnicas esenciales para la navegación. No utilizamos cookies de rastreo publicitario invasivo.
                </p>
            </div>
        </article>
    );
}
