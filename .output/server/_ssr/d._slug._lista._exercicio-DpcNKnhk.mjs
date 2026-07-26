import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./d._slug._lista._exercicio-DVUYi8dO.mjs";
import { f as ArrowRight, l as FileExclamationPoint, p as ArrowLeft, s as Film } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./page-shell-BH7g2Eb6.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DBKNXSUT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/d._slug._lista._exercicio-DpcNKnhk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useFileExists(url) {
	const [status, setStatus] = (0, import_react.useState)("loading");
	(0, import_react.useEffect)(() => {
		if (!url) {
			setStatus("missing");
			return;
		}
		let cancel = false;
		fetch(url, { method: "HEAD" }).then((r) => {
			if (cancel) return;
			setStatus(r.ok ? "found" : "missing");
		}).catch(() => !cancel && setStatus("missing"));
		return () => {
			cancel = true;
		};
	}, [url]);
	return status;
}
function ExercicioPage() {
	const { disciplina, lista, exercicio } = Route.useLoaderData();
	const isRemoteVideo = !!exercicio.video && /^(https?:)?\/\//.test(exercicio.video) && !/\.mp4($|\?)/i.test(exercicio.video);
	const pdfStatus = useFileExists(exercicio.pdf);
	const videoStatus = useFileExists(isRemoteVideo ? null : exercicio.video ?? null);
	const prev = exercicio.numero > 1 ? exercicio.numero - 1 : null;
	const next = exercicio.numero < lista.exercicios.length ? exercicio.numero + 1 : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [
			{
				label: disciplina.nome,
				to: `/d/${disciplina.slug}`
			},
			{
				label: `Lista ${String(lista.numero).padStart(2, "0")}`,
				to: `/d/${disciplina.slug}/${lista.numero}`
			},
			{ label: `Página ${String(exercicio.numero).padStart(2, "0")}` }
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mt-6 mb-8 flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					disciplina.nome,
					" · Lista ",
					String(lista.numero).padStart(2, "0")
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 text-3xl font-semibold tracking-tight",
				children: "Resolução"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [prev && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/d/$slug/$lista/$exercicio",
					params: {
						slug: disciplina.slug,
						lista: String(lista.numero),
						exercicio: String(prev)
					},
					className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Anterior"]
				}), next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/d/$slug/$lista/$exercicio",
					params: {
						slug: disciplina.slug,
						lista: String(lista.numero),
						exercicio: String(next)
					},
					className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
					children: ["Próximo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "lg:col-span-2 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground",
						children: "Vídeo"
					}), isRemoteVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video overflow-hidden rounded-lg border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: exercicio.video,
							title: `Vídeo do exercício ${exercicio.numero}`,
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowFullScreen: true,
							className: "h-full w-full"
						})
					}) : videoStatus === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-video animate-pulse rounded-lg bg-muted" }) : videoStatus === "found" && exercicio.video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						controls: true,
						className: "w-full rounded-lg border border-border bg-black",
						src: exercicio.video
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-lg border border-dashed border-border bg-secondary/50 p-6 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { className: "h-5 w-5 text-primary" }), "Consulte a lista de exercício, pois este número de exercício pode não existir. Por padrão, o site possui 15 páginas disponíveis para resoluções em vídeo."]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground",
							children: "Arquivo com resolução"
						}),
						pdfStatus === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 animate-pulse rounded-lg bg-muted" }),
						pdfStatus === "found" && exercicio.pdf && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-lg border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("object", {
								data: exercicio.pdf,
								type: "application/pdf",
								className: "h-[70vh] w-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 text-sm",
									children: [
										"Não foi possível exibir o PDF.",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: exercicio.pdf,
											className: "text-primary underline",
											target: "_blank",
											rel: "noreferrer",
											children: "Abrir em nova aba"
										}),
										"."
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end border-t border-border bg-secondary/40 px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: exercicio.pdf,
									target: "_blank",
									rel: "noreferrer",
									className: "text-xs font-medium text-primary hover:underline",
									children: "Abrir PDF em nova aba"
								})
							})]
						}),
						pdfStatus === "missing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-lg border border-dashed border-border bg-secondary/50 p-6 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, { className: "h-5 w-5 text-primary" }), "Essa lista provavelmente não existe. Por padrão, o site considera 9 listas, mas nem todas as disciplinas possuem 9 listas."]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { ExercicioPage as component };
