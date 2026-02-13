"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ContactModal from "@/components/ContactModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Sistemas", href: "#sistemas" },
    { label: "Método", href: "#metodo" },
    { label: "Proceso", href: "#proceso" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-6",
      isScrolled
        ? "py-3 bg-background/40 backdrop-blur-xl shadow-[0_8px_32px_0_{rgba(0,0,0,0.36)}]"
        : "py-6 bg-transparent"
    )}>
      <div className={cn(
        "absolute inset-x-0 bottom-0 h-[1px] bg-white/10 transition-opacity duration-700",
        isScrolled ? "opacity-100" : "opacity-0"
      )} />
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center relative z-10">
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="Logic It Logo"
            width={120}
            height={150}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-[10px] font-mono uppercase tracking-[0.3em] transition-colors hover:text-primary text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <ContactModal>
            <button
              className={cn(
                "px-6 py-2 text-[10px] font-mono uppercase tracking-[0.3em] transition-all bg-white text-black hover:bg-primary cursor-pointer"
              )}
            >
              Contacto
            </button>
          </ContactModal>
        </div>
      </div>
    </nav>
  );
}
