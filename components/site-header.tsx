"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 40 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-md transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-border px-4 py-3 sm:px-6 lg:px-8">
        <div className="shrink-0 text-sm font-bold font-mono tracking-tighter sm:text-xl">
          LEONARDO<span className="text-primary">_</span>CASTRO
        </div>
        <nav className="order-3 flex w-full gap-5 overflow-x-auto pb-1 text-xs font-medium text-muted-foreground sm:gap-6 sm:text-sm lg:order-none lg:w-auto lg:overflow-visible lg:pb-0 xl:gap-8">
          <Link href="#projects" className="shrink-0 hover:text-primary transition-colors">
            Projetos
          </Link>
          <Link href="#skills" className="shrink-0 hover:text-primary transition-colors">
            Habilidades
          </Link>
          <Link href="#blog" className="shrink-0 hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="#contact" className="shrink-0 hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>
        <Link
          href="/Leonardo_Castro_Desenvolvedor_Full_Stack.pdf"
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "shrink-0 border-primary/50 px-3 font-mono text-[10px] hover:border-primary hover:bg-primary/10 hover:text-primary sm:px-4 sm:text-xs",
          )}
        >
          Dev em Formação
        </Link>
      </div>
    </header>
  );
}
