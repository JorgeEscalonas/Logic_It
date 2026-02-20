import Link from 'next/link';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="mb-16 pb-8 border-b border-white/5 flex items-center justify-between">
                        <Link href="/#contacto" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors font-mono uppercase tracking-widest">
                            <span className="text-primary group-hover:-translate-x-1 transition-transform">←</span>
                            Volver al inicio
                        </Link>
                        <div className="hidden md:block text-xs font-mono text-slate-600 uppercase tracking-widest">
                            Centro Legal / Logic It
                        </div>
                    </div>

                    <div className="animate-fade-in">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
