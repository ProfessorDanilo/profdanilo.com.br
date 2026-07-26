import { i as getLista, n as getDisciplina } from "./config-BgyrRcE9.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/d._slug._lista.index-CSyGvBn7.js
var $$splitComponentImporter = () => import("./d._slug._lista.index-C4c9RiQ2.mjs");
var Route = createFileRoute("/d/$slug/$lista/")({
	loader: ({ params }) => {
		const disciplina = getDisciplina(params.slug);
		const numero = Number(params.lista);
		const lista = getLista(params.slug, numero);
		if (!disciplina || !lista) throw notFound();
		return {
			disciplina,
			lista
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.disciplina.nome} — Lista ${loaderData.lista.numero}` : "Lista" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
