import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, FileWarning, Film } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getDisciplina, getExercicio, getLista } from "@/content/config";

export const Route = createFileRoute("/d/$slug/$lista/$exercicio")({
  loader: ({ params }) => {
    const disciplina = getDisciplina(params.slug);
    const lista = getLista(params.slug, Number(params.lista));
    const exercicio = getExercicio(
      params.slug,
      Number(params.lista),
      Number(params.exercicio),
    );
    if (!disciplina || !lista || !exercicio) throw notFound();
    return { disciplina, lista, exercicio };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.disciplina.nome} · Lista ${loaderData.lista.numero} · Exercício ${loaderData.exercicio.numero}`
          : "Exercício",
      },
    ],
  }),
  component: ExercicioPage,
});

// Verifica se um arquivo estático existe (HEAD). Útil para permitir que o
// professor apenas "solte" um PDF/vídeo na pasta correta sem editar o código.
function useFileExists(url: string | null | undefined) {
  const [status, setStatus] = useState<"loading" | "found" | "missing">(
    "loading",
  );
  useEffect(() => {
    if (!url) {
      setStatus("missing");
      return;
    }
    let cancel = false;
    fetch(url, { method: "HEAD" })
      .then((r) => {
        if (cancel) return;
        setStatus(r.ok ? "found" : "missing");
      })
      .catch(() => !cancel && setStatus("missing"));
    return () => {
      cancel = true;
    };
  }, [url]);
  return status;
}

function ExercicioPage() {
  const { disciplina, lista, exercicio } = Route.useLoaderData();

  const isRemoteVideo =
    !!exercicio.video &&
    /^(https?:)?\/\//.test(exercicio.video) &&
    !/\.mp4($|\?)/i.test(exercicio.video);

  const pdfStatus = useFileExists(exercicio.pdf);
  const videoStatus = useFileExists(
    isRemoteVideo ? null : exercicio.video ?? null,
  );

  const prev = exercicio.numero > 1 ? exercicio.numero - 1 : null;
  const next =
    exercicio.numero < lista.exercicios.length ? exercicio.numero + 1 : null;

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: disciplina.nome, to: `/d/${disciplina.slug}` },
          {
            label: `Lista ${String(lista.numero).padStart(2, "0")}`,
            to: `/d/${disciplina.slug}/${lista.numero}`,
          },
          { label: `Página ${String(exercicio.numero).padStart(2, "0")}` },
        ]}
      />

      <header className="mt-6 mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            {disciplina.nome} · Lista {String(lista.numero).padStart(2, "0")}
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">
            Resolução
          </h1>
        </div>
        <div className="flex gap-2">
          {prev && (
            <Link
              to="/d/$slug/$lista/$exercicio"
              params={{
                slug: disciplina.slug,
                lista: String(lista.numero),
                exercicio: String(prev),
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4" /> Anterior
            </Link>
          )}
          {next && (
            <Link
              to="/d/$slug/$lista/$exercicio"
              params={{
                slug: disciplina.slug,
                lista: String(lista.numero),
                exercicio: String(next),
              }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Próximo <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
       

        {/* Resolução (PDF) + Vídeo */}
        <section className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Vídeo
            </h2>
            {isRemoteVideo ? (
              <div className="aspect-video overflow-hidden rounded-lg border border-border">
                <iframe
                  src={exercicio.video!}
                  title={`Vídeo do exercício ${exercicio.numero}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ) : videoStatus === "loading" ? (
              <div className="aspect-video animate-pulse rounded-lg bg-muted" />
            ) : videoStatus === "found" && exercicio.video ? (
              <video
                controls
                className="w-full rounded-lg border border-border bg-black"
                src={exercicio.video}
              />
            ) : (
              <div className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-secondary/50 p-6 text-sm text-muted-foreground">
                <Film className="h-5 w-5 text-primary" />
                Consulte a lista de exercício, pois este número de exercício pode não existir. Por padrão, o site possui 15 páginas disponíveis para resoluções em vídeo.
              </div>
            )}
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Arquivo com resolução
            </h2>
            {pdfStatus === "loading" && (
              <div className="h-96 animate-pulse rounded-lg bg-muted" />
            )}
            {pdfStatus === "found" && exercicio.pdf && (
              <div className="overflow-hidden rounded-lg border border-border">
                <object
                  data={exercicio.pdf}
                  type="application/pdf"
                  className="h-[70vh] w-full bg-muted"
                >
                  <div className="p-6 text-sm">
                    Não foi possível exibir o PDF.{" "}
                    <a
                      href={exercicio.pdf}
                      className="text-primary underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Abrir em nova aba
                    </a>
                    .
                  </div>
                </object>
                <div className="flex justify-end border-t border-border bg-secondary/40 px-3 py-2">
                  <a
                    href={exercicio.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Abrir PDF em nova aba
                  </a>
                </div>
              </div>
            )}
            {pdfStatus === "missing" && (
              <div className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-secondary/50 p-6 text-sm text-muted-foreground">
                <FileWarning className="h-5 w-5 text-primary" />
                Essa lista provavelmente não existe. Por padrão, o site considera 9 listas, mas nem todas as disciplinas possuem 9 listas.
              </div>
            )}
          </div>

          
        </section>
      </div>
    </PageShell>
  );
}
