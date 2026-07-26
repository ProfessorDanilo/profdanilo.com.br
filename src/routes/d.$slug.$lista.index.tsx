import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDisciplina, getLista } from "@/content/config";

export const Route = createFileRoute("/d/$slug/$lista/")({
  loader: ({ params }) => {
    const disciplina = getDisciplina(params.slug);
    const numero = Number(params.lista);
    const lista = getLista(params.slug, numero);
    if (!disciplina || !lista) throw notFound();
    return { disciplina, lista };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.disciplina.nome} — Lista ${loaderData.lista.numero}`
          : "Lista",
      },
    ],
  }),
  component: ListaPage,
});

function ListaPage() {
  const { disciplina, lista } = Route.useLoaderData();

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: disciplina.nome, to: `/d/${disciplina.slug}` },
          { label: `Lista ${String(lista.numero).padStart(2, "0")}` },
        ]}
      />
      <header className="mt-6 mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Lista {String(lista.numero).padStart(2, "0")}
        </h1>
        <p className="mt-2 text-muted-foreground">
          Selecione um exercício para visualizar a resolução.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {lista.exercicios.map((e: (typeof lista.exercicios)[number]) => (
          <Link
            key={e.numero}
            to="/d/$slug/$lista/$exercicio"
            params={{
              slug: disciplina.slug,
              lista: String(lista.numero),
              exercicio: String(e.numero),
            }}
            className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium truncate">
                Exercício {String(e.numero).padStart(2, "0")}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
