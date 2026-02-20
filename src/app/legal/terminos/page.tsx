
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Términos de Servicio | Logic It Systems',
};

export default function TerminosPage() {
    return (
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-headline prose-headings:font-semibold prose-h1:text-5xl prose-h1:tracking-tight prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-white prose-a:text-primary hover:prose-a:text-white transition-colors">

            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider">
                    Master Agreement
                </span>
                <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                    Ref: TOS-B2B-global
                </span>
            </div>

            <h1 className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                Términos de Servicio (ToS)
            </h1>

            <div className="p-6 mb-12 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-lg font-mono text-sm text-slate-400">
                <p className="m-0">
                    <span className="text-primary mr-2">➜</span>
                    Este documento constituye un acuerdo legal vinculante entre <strong>Logic It Systems C.A.</strong> (RIF: J-504746671) y la entidad contratante.
                </p>
            </div>

            <h2>1. Aceptación y Validez Legal</h2>
            <p>
                Al contratar nuestros servicios o utilizar nuestra plataforma, usted acepta estos términos. De conformidad con el <strong>Decreto con Fuerza de Ley sobre Mensajes de Datos y Firmas Electrónicas (Venezuela)</strong>, la aceptación digital de estos términos posee plena validez jurídica y eficacia probatoria, equiparable a la firma manuscrita.
            </p>

            <h2>2. Alcance de Servicios y SOW</h2>
            <p>
                Los servicios específicos (Desarrollo, Consultoría, DevOps) se detallarán en una Propuesta Comercial o <em>Statement of Work</em> (SOW) individual. En caso de discrepancia entre estos Términos Generales y un SOW firmado, prevalecerá lo estipulado en el SOW específico.
            </p>

            <h2>3. Pagos y Facturación</h2>
            <ul className="list-disc list-inside">
                <li><strong>Clientes en Venezuela:</strong> Los pagos pueden realizarse en Bolívares a la tasa BCV vigente o en Divisas. Las transacciones en moneda extranjera dentro del territorio nacional pueden estar sujetas al Impuesto a las Grandes Transacciones Financieras (IGTF) según la normativa fiscal vigente.</li>
                <li><strong>Clientes Internacionales:</strong> La facturación se emitirá en USD o EUR. Los pagos se procesarán vía transferencia internacional (Wire Transfer) o pasarelas de pago corporativas. El Cliente es responsable de cualquier retención en la fuente (Withholding Tax) aplicable en su país de origen, debiendo "gross-up" el pago para que Logic It reciba el monto neto acordado.</li>
            </ul>

            <h2>4. Propiedad Intelectual (Derechos de Autor)</h2>
            <p>
                Diferenciamos claramente la titularidad del código:
            </p>
            <ul>
                <li><strong>Work for Hire:</strong> Todo código desarrollado específicamente para la lógica de negocio única del Cliente será propiedad exclusiva del Cliente tras el pago total del proyecto.</li>
                <li><strong>Background IP:</strong> Logic It retiene la propiedad de sus librerías base, frameworks internos y herramientas de "scaffolding" preexistentes. Se otorga al Cliente una licencia perpetua, irrevocable, mundial y libre de regalías para usar estos componentes como parte del software entregado.</li>
            </ul>

            <h2>5. Confidencialidad y No Competencia</h2>
            <p>
                Ambas partes acuerdan mantener estricta confidencialidad sobre los secretos comerciales e industriales intercambiados. Logic It se compromete a no utilizar el código propietario del Cliente para desarrollar productos competidores directos.
            </p>

            <h2>6. Limitación de Responsabilidad</h2>
            <p>
                En la máxima medida permitida por la ley, la responsabilidad total de Logic It por cualquier reclamo relacionado con los servicios no excederá el monto total de los honorarios pagados por el Cliente durante los tres (3) meses anteriores al evento. Se excluye expresamente la responsabilidad por lucro cesante o daños indirectos, salvo en casos de dolo o negligencia grave comprobada.
            </p>

            <h2>7. Ley Aplicable y Resolución de Disputas</h2>
            <p>
                Se buscará siempre una resolución amistosa. En caso de litigio:
            </p>
            <ul>
                <li><strong>Jurisdicción Primaria:</strong> Para disputas relacionadas con operaciones en Venezuela, las partes se someten a la jurisdicción de los tribunales de la ciudad de Caracas y a las leyes de la República Bolivariana de Venezuela.</li>
                <li><strong>Arbitraje Internacional:</strong> Para clientes internacionales, las partes pueden acordar en el SOW someterse a arbitraje bajo las reglas de la Cámara de Comercio Internacional (ICC) o seleccionar una jurisdicción neutral de mutuo acuerdo.</li>
            </ul>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg mt-8">
                <p className="text-sm text-slate-400 mb-0">
                    Última actualización: Febrero 2026. Logic It Systems se reserva el derecho de actualizar estos términos notificando a los clientes activos con 30 días de antelación.
                </p>
            </div>
        </article>
    );
}
