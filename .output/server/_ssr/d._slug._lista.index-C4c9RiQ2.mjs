import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as FileText, f as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./page-shell-BH7g2Eb6.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DBKNXSUT.mjs";
import { t as Route } from "./d._slug._lista.index-CSyGvBn7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/d._slug._lista.index-C4c9RiQ2.js
var import_jsx_runtime = require_jsx_runtime();
function ListaPage() {
	const { disciplina, lista } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{
			label: disciplina.nome,
			to: `/d/${disciplina.slug}`
		}, { label: `Lista ${String(lista.numero).padStart(2, "0")}` }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mt-6 mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-3xl font-semibold tracking-tight",
				children: ["Lista ", String(lista.numero).padStart(2, "0")]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Selecione um exercício para visualizar a resolução."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: lista.exercicios.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/d/$slug/$lista/$exercicio",
				params: {
					slug: disciplina.slug,
					lista: String(lista.numero),
					exercicio: String(e.numero)
				},
				className: "group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-medium truncate",
						children: ["Exercício ", String(e.numero).padStart(2, "0")]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" })]
			}, e.numero))
		})
	] });
}
//#endregion
export { ListaPage as component };
