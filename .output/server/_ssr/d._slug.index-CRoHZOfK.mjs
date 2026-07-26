import { n as getDisciplina } from "./config-BgyrRcE9.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/d._slug.index-CRoHZOfK.js
var $$splitComponentImporter = () => import("./d._slug.index-Dsw-J21N.mjs");
var Route = createFileRoute("/d/$slug/")({
	loader: ({ params }) => {
		const d = getDisciplina(params.slug);
		if (!d) throw notFound();
		return { disciplina: d };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.disciplina.nome} — Listas` : "Disciplina" }, {
		name: "description",
		content: loaderData?.disciplina.descricao ?? "Listas de exercícios."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
