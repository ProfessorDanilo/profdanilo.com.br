import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Info, Lock, Search } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Input } from "@/components/ui/input";
import { disciplinas } from "@/content/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Resoluções — Professor Danilo" },
      {
        name: "description",
        content:
          "Comunicado sobre o encerramento das atividades e acesso resoluções já disponibilizados aos estudantes.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();

  const resultados = useMemo(() => {
    if (!term) return [];
    const out: {
      disciplina: string;
      slug: string;
      lista: number;
      exercicio?: number;
    }[] = [];
    for (const d of disciplinas) {
      if (!d.disponivel) continue;
      for (const l of d.listas) {
        const listaLabel = `lista ${l.numero}`;
        if (listaLabel.includes(term) || d.nome.toLowerCase().includes(term)) {
          out.push({ disciplina: d.nome, slug: d.slug, lista: l.numero });
        }
        for (const e of l.exercicios) {
          const exLabel = `exercicio ${e.numero} exercício ${e.numero}`;
          if (exLabel.includes(term)) {
            out.push({
              disciplina: d.nome,
              slug: d.slug,
              lista: l.numero,
              exercicio: e.numero,
            });
          }
        }
      }
    }
    return out.slice(0, 20);
  }, [term]);

  return (
    <PageShell>
      {/* Hero / Comunicado */}
      <section className="rounded-3xl border border-border/70 bg-gradient-to-br from-secondary via-background to-accent/40 p-8 sm:p-12 shadow-sm">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Info className="h-3.5 w-3.5" /> Comunicado aos estudantes
        </span>
        <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          Durante alguns anos ofereci o serviço de resolução de listas de exercícios.
          Após minha aprovação em concurso público, <strong className="text-foreground">encerrei essa atividade</strong> e
          <strong className="text-foreground"> não aceitarei novos pedidos</strong>. Este site existe apenas para
          honrar os compromissos anteriormente assumidos: os estudantes que já
          possuíam direito ao material continuam podendo acessá-lo normalmente
          por aqui.
        </p>
      </section>

      {/* Busca */}
      <section className="mt-10">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por lista ou exercício (ex.: lista 3, exercício 7)"
            className="pl-9 h-11 rounded-xl bg-card"
            aria-label="Buscar listas e exercícios"
          />
        </div>
        {term && (
          <div className="mt-4 rounded-xl border border-border bg-card p-2">
            {resultados.length === 0 ? (
              <p className="p-3 text-sm text-muted-foreground">
                Nenhum resultado para “{q}”.
              </p>
            ) : (
              <ul className="divide-y divide-border">
                {resultados.map((r, i) => (
                  <li key={i}>
                    {r.exercicio !== undefined ? (
                      <Link
                        to="/d/$slug/$lista/$exercicio"
                        params={{
                          slug: r.slug,
                          lista: String(r.lista),
                          exercicio: String(r.exercicio),
                        }}
                        className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                      >
                        <span className="truncate">
                          {r.disciplina} · Lista {r.lista} · Exercício {r.exercicio}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                      </Link>
                    ) : (
                      <Link
                        to="/d/$slug/$lista"
                        params={{ slug: r.slug, lista: String(r.lista) }}
                        className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                      >
                        <span className="truncate">
                          {r.disciplina} · Lista {r.lista}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </section>

      {/* Disciplinas */}
      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Disciplinas</h2>
            <p className="text-sm text-muted-foreground">
              Selecione uma disciplina para acessar as resoluções.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {disciplinas.map((d) => {
            const disponivel = d.disponivel;
            const Card = (
              <article
                className={`group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all ${
                  disponivel
                    ? "hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40"
                    : "opacity-80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    {disponivel ? (
                      <BookOpen className="h-5 w-5" />
                    ) : (
                      <Lock className="h-5 w-5" />
                    )}
                  </span>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground">
                    {d.semestre === 1 ? "1º semestre" : "2º semestre"}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {d.nome}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.descricao}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  {disponivel ? (
                    <span className="text-primary font-medium inline-flex items-center gap-1.5">
                      Acessar resoluções
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  ) : (
                    <span className="text-muted-foreground">
                      Esta disciplina será disponibilizada no semestre correspondente.
                    </span>
                  )}
                </div>
              </article>
            );

            return disponivel ? (
              <Link key={d.slug} to="/d/$slug" params={{ slug: d.slug }}>
                {Card}
              </Link>
            ) : (
              <div key={d.slug}>{Card}</div>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-border/70 bg-gradient-to-br from-secondary via-background to-accent/40 p-8 sm:p-12 shadow-sm">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Info className="h-3.5 w-3.5" /> Informações Complementares
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Obrigado por confiarem no meu trabalho.
        </h1>
        
        <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          Nesta página você terá acesso às resoluções de forma organizada, embora os vídeos estejam disponíveis no YouTube em listas como conteúdo não listado. Junto das resoluções, você encontra as resoluções em pdf para baixar. Não haverá, porém, espaço para dúvidas.
        </p>
        <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          Este site visa apenas organizar as resoluções dos exercícios solicitados e não haverá nenhuma cobrança. 
        </p>
        <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          Quanto aos dados pessoais que estão no servidor onde foi hospedado o Moodle (plataforma foltado para o ensino no qual o interessado em ter acesso à resolução teria que se cadastrar), serão apagados o mais rápido possível, seguindo orientação da LGPD (os dados devem ser mantidos o tempo estritamente necessário para os fins a que se destinam). A data estimada para exclusão é até fim de agosto de 2026, variando conforme necessidade dos estudantes. 
        </p>
        <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
          Caso algum conteúdo não esteja disponível por razão técnica, mesmo não sendo um serviço oferecido, entre em contato para que problemas técnicos relacionados à disponibilidade seja resolvido: <a href="mailto:danilolimacomp@gmail.com"><u>danilolimacomp@gmail.com</u></a>.
        </p>
      </section>
    </PageShell>
  );
}
