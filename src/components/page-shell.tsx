import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
