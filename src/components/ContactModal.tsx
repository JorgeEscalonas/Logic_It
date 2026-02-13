"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2 } from "lucide-react";

interface ContactModalProps {
    children: React.ReactNode;
}

export default function ContactModal({ children }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // Personalizar el asunto para que llegue ordenado a tu correo
        const name = formData.get('name');
        const company = formData.get('company');
        const subject = company ? `Nuevo Proyecto: ${company}` : `Nuevo Contacto: ${name}`;
        formData.append("_subject", subject as string);

        try {
            const response = await fetch("https://formspree.io/f/xreaplng", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
            }
        } catch (error) {
            alert("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-[#050505] border border-white/10 text-white p-0 gap-0 rounded-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary z-10" />
                <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none" />

                <div className="p-8 md:p-10 relative z-10 space-y-6">
                    <DialogHeader className="space-y-4 text-left">
                        <DialogTitle className="text-3xl font-headline font-black uppercase tracking-tighter leading-none">
                            Iniciar <span className="text-primary">Proyecto</span>
                        </DialogTitle>
                        <DialogDescription className="text-slate-400 font-light text-base">
                            Completa tus datos. Te contactaremos en menos de 24 horas.
                        </DialogDescription>
                    </DialogHeader>

                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <Check className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold font-headline uppercase">¡Mensaje Recibido!</h3>
                            <p className="text-slate-400 max-w-xs">
                                Hemos recibido tus coordenadas. Un especialista de Logic_It te contactará en breve.
                            </p>
                            <Button
                                className="mt-6 rounded-none bg-white text-black hover:bg-slate-200"
                                onClick={() => setIsSuccess(false)}
                            >
                                Entendido
                            </Button>
                        </div>
                    ) : (
                        <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-mono text-primary/80">Nombre Completo</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Tu nombre"
                                        className="rounded-none bg-white/5 border-white/10 focus-visible:ring-0 focus-visible:border-primary text-white placeholder:text-white/20 h-11"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-mono text-primary/80">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="tu@email.com"
                                            className="rounded-none bg-white/5 border-white/10 focus-visible:ring-0 focus-visible:border-primary text-white placeholder:text-white/20 h-11"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-[10px] uppercase tracking-widest font-mono text-primary/80">Empresa</Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            placeholder="Nombre de tu empresa"
                                            className="rounded-none bg-white/5 border-white/10 focus-visible:ring-0 focus-visible:border-primary text-white placeholder:text-white/20 h-11"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-[10px] uppercase tracking-widest font-mono text-primary/80">Mensaje</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Cuéntanos brevemente qué necesitas..."
                                        className="rounded-none bg-white/5 border-white/10 focus-visible:ring-0 focus-visible:border-primary text-white placeholder:text-white/20 min-h-[100px] resize-none"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-14 rounded-none bg-primary text-slate-950 hover:bg-white font-mono uppercase tracking-widest text-xs font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Transmitiendo...
                                    </span>
                                ) : "Enviar Mensaje"}
                            </Button>
                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
