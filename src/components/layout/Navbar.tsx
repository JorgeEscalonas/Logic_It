"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6",
      isScrolled ? "py-3 bg-background/95 backdrop-blur-md border-b" : "py-6 bg-transparent"
    )}>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center font-bold text-black text-sm transition-transform group-hover:rotate-90">L</div>
          <span className="font-headline font-black text-2xl tracking-[ -0.05em] uppercase">
            Logicit<span className="text-primary">.</span>
          </span>
        </Link>
        
        <div className="hidden md:flex gap-10 items-center">
          {["Sistemas", "Método", "Proceso"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-mono uppercase tracking-[0.3em] hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="px-6 py-2 bg-foreground text-background text-[10px] font-mono uppercase tracking-[0.3em] hover:bg-primary hover:text-foreground transition-all"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}