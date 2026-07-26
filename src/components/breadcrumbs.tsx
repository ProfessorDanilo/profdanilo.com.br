import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Trilha de navegação"
      className="flex items-center gap-1.5 text-sm text-muted-foreground"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
        <span>Início</span>
      </Link>
      {items.map((c, i) => (
        <Fragment key={i}>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
          {c.to ? (
            <Link to={c.to} className="hover:text-foreground transition-colors truncate">
              {c.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium truncate">{c.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
