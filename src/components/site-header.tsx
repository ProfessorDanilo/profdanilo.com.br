import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Acervo de Resoluções
            </span>
            <span className="text-[11px] text-muted-foreground">
              Material educacional dos estudantes
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 text-center text-xs text-muted-foreground">
        <p>
          Site sem fins comerciais — destinado exclusivamente a cumprir compromissos
          assumidos anteriormente com estudantes.
        </p>
        <p className="mt-1">© {new Date().getFullYear()} — Acervo de Resoluções.</p>
      </div>
    </footer>
  );
}
