"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b bg-background/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-headline font-semibold text-xl tracking-tighter">
          LOGICIT<span className="text-primary">.</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium tracking-tight">
          <Link href="#services" className="hover:text-primary transition-colors">SISTEMAS</Link>
          <Link href="#method" className="hover:text-primary transition-colors">MÉTODO</Link>
          <Link href="#process" className="hover:text-primary transition-colors">PROCESO</Link>
          <Link href="#contact" className="hover:text-primary transition-colors text-primary font-bold">CONTACTO</Link>
        </div>
      </div>
    </nav>
  );
}