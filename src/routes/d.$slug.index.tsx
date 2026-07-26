import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ListChecks } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDisciplina } from "@/content/config";

export const Route = createFileRoute("/d/$slug/")({
  loader: ({ params }) => {
    const d = getDisciplina(params.slug);
    if (!d) throw notFound();
    return { disciplina: d };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.disciplina.nome} — Listas`
          : "Disciplina",
      },
      {
        name: "description",
        content: loaderData?.disciplina.descricao ?? "Listas de exercícios.",
      },
    ],
  }),
  component: DisciplinaPage,
});

function DisciplinaPage() {
  const { disciplina } = Route.useLoaderData();

  if (false) {
    return (
      <PageShell>
        <Breadcrumbs items={[{ label: disciplina.nome }]} />
        <div className="mt-8 rounded-2xl border border-border bg-card p-10 text-center">
          <h1 className="text-2xl font-semibold">{disciplina.nome}</h1>
          <p className="mt-3 text-muted-foreground">
            Esta disciplina será disponibilizada no semestre correspondente.
          </p>
          <span className="mt-4 inline-block rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
            {disciplina.semestre === 1 ? "1º semestre" : "2º semestre"}
          </span>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: disciplina.nome }]} />
      <header className="mt-6 mb-8">
        <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground">
          {disciplina.semestre === 1 ? "1º semestre" : "2º semestre"}
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          {disciplina.nome}
        </h1>
        <p className="mt-2 text-muted-foreground">{disciplina.descricao}</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2">
        {disciplina.listas.map((l: (typeof disciplina.listas)[number]) => (
          <Link
            key={l.numero}
            to="/d/$slug/$lista"
            params={{ slug: disciplina.slug, lista: String(l.numero) }}
            className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <ListChecks className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  Lista {String(l.numero).padStart(2, "0")}
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
