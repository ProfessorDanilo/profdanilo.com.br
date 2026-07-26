import { i as getLista, n as getDisciplina, r as getExercicio } from "./config-BgyrRcE9.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/d._slug._lista._exercicio-DVUYi8dO.js
var $$splitComponentImporter = () => import("./d._slug._lista._exercicio-DpcNKnhk.mjs");
var Route = createFileRoute("/d/$slug/$lista/$exercicio")({
	loader: ({ params }) => {
		const disciplina = getDisciplina(params.slug);
		const lista = getLista(params.slug, Number(params.lista));
		const exercicio = getExercicio(params.slug, Number(params.lista), Number(params.exercicio));
		if (!disciplina || !lista || !exercicio) throw notFound();
		return {
			disciplina,
			lista,
			exercicio
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.disciplina.nome} · Lista ${loaderData.lista.numero} · Exercício ${loaderData.exercicio.numero}` : "Exercício" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
