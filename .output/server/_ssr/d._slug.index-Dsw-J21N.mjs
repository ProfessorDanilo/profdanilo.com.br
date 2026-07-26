import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowRight, r as ListChecks } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./page-shell-BH7g2Eb6.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DBKNXSUT.mjs";
import { t as Route } from "./d._slug.index-CRoHZOfK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/d._slug.index-Dsw-J21N.js
var import_jsx_runtime = require_jsx_runtime();
function DisciplinaPage() {
	const { disciplina } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: disciplina.nome }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mt-6 mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground",
					children: disciplina.semestre === 1 ? "1º semestre" : "2º semestre"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl font-semibold tracking-tight",
					children: disciplina.nome
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: disciplina.descricao
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: disciplina.listas.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/d/$slug/$lista",
				params: {
					slug: disciplina.slug,
					lista: String(l.numero)
				},
				className: "group flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-sm font-medium text-foreground",
							children: ["Lista ", String(l.numero).padStart(2, "0")]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" })]
			}, l.numero))
		})
	] });
}
//#endregion
export { DisciplinaPage as component };
