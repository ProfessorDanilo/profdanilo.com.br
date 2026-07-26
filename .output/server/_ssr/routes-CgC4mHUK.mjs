import { n as __toESM } from "../_runtime.mjs";
import { t as disciplinas } from "./config-BgyrRcE9.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as BookOpen, f as ArrowRight, i as Info, n as Lock, t as Search } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./page-shell-BH7g2Eb6.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CgC4mHUK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function HomePage() {
	const [q, setQ] = (0, import_react.useState)("");
	const term = q.trim().toLowerCase();
	const resultados = (0, import_react.useMemo)(() => {
		if (!term) return [];
		const out = [];
		for (const d of disciplinas) {
			if (!d.disponivel) continue;
			for (const l of d.listas) {
				if (`lista ${l.numero}`.includes(term) || d.nome.toLowerCase().includes(term)) out.push({
					disciplina: d.nome,
					slug: d.slug,
					lista: l.numero
				});
				for (const e of l.exercicios) if (`exercicio ${e.numero} exercício ${e.numero}`.includes(term)) out.push({
					disciplina: d.nome,
					slug: d.slug,
					lista: l.numero,
					exercicio: e.numero
				});
			}
		}
		return out.slice(0, 20);
	}, [term]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-3xl border border-border/70 bg-gradient-to-br from-secondary via-background to-accent/40 p-8 sm:p-12 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3.5 w-3.5" }), " Comunicado aos estudantes"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground",
				children: [
					"Durante alguns anos ofereci o serviço de resolução de listas de exercícios. Após minha aprovação em concurso público, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: "encerrei essa atividade"
					}),
					" e",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: " não aceitarei novos pedidos"
					}),
					". Este site existe apenas para honrar os compromissos anteriormente assumidos: os estudantes que já possuíam direito ao material continuam podendo acessá-lo normalmente por aqui."
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Buscar por lista ou exercício (ex.: lista 3, exercício 7)",
					className: "pl-9 h-11 rounded-xl bg-card",
					"aria-label": "Buscar listas e exercícios"
				})]
			}), term && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-xl border border-border bg-card p-2",
				children: resultados.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "p-3 text-sm text-muted-foreground",
					children: [
						"Nenhum resultado para “",
						q,
						"”."
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: resultados.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r.exercicio !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/d/$slug/$lista/$exercicio",
						params: {
							slug: r.slug,
							lista: String(r.lista),
							exercicio: String(r.exercicio)
						},
						className: "flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm hover:bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate",
							children: [
								r.disciplina,
								" · Lista ",
								r.lista,
								" · Exercício ",
								r.exercicio
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/d/$slug/$lista",
						params: {
							slug: r.slug,
							lista: String(r.lista)
						},
						className: "flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm hover:bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate",
							children: [
								r.disciplina,
								" · Lista ",
								r.lista
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-muted-foreground" })]
					}) }, i))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex items-end justify-between gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold tracking-tight",
					children: "Disciplinas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Selecione uma disciplina para acessar as resoluções."
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: disciplinas.map((d) => {
					const disponivel = d.disponivel;
					const Card = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all ${disponivel ? "hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40" : "opacity-80"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary",
									children: disponivel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground",
									children: d.semestre === 1 ? "1º semestre" : "2º semestre"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold text-foreground",
								children: d.nome
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: d.descricao
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex items-center justify-between text-sm",
								children: disponivel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-primary font-medium inline-flex items-center gap-1.5",
									children: ["Acessar resoluções", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Esta disciplina será disponibilizada no semestre correspondente."
								})
							})
						]
					});
					return disponivel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/d/$slug",
						params: { slug: d.slug },
						children: Card
					}, d.slug) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: Card }, d.slug);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-3xl border border-border/70 bg-gradient-to-br from-secondary via-background to-accent/40 p-8 sm:p-12 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-3.5 w-3.5" }), " Informações Complementares"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground",
					children: "Obrigado por confiarem no meu trabalho."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground",
					children: "Nesta página você terá acesso às resoluções de forma organizada, embora os vídeos estejam disponíveis no YouTube em listas como conteúdo não listado. Junto das resoluções, você encontra as resoluções em pdf para baixar. Não haverá, porém, espaço para dúvidas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground",
					children: "Este site visa apenas organizar as resoluções dos exercícios solicitados e não haverá nenhuma cobrança."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground",
					children: "Quanto aos dados pessoais que estão no servidor onde foi hospedado o Moodle (plataforma foltado para o ensino no qual o interessado em ter acesso à resolução teria que se cadastrar), serão apagados o mais rápido possível, seguindo orientação da LGPD (os dados devem ser mantidos o tempo estritamente necessário para os fins a que se destinam). A data estimada para exclusão é até fim de agosto de 2026, variando conforme necessidade dos estudantes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground",
					children: [
						"Caso algum conteúdo não esteja disponível por razão técnica, mesmo não sendo um serviço oferecido, entre em contato para que problemas técnicos relacionados à disponibilidade seja resolvido: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:danilolimacomp@gmail.com",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("u", { children: "danilolimacomp@gmail.com" })
						}),
						"."
					]
				})
			]
		})
	] });
}
//#endregion
export { HomePage as component };
