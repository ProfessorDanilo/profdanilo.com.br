import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as House, u as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/breadcrumbs-DBKNXSUT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Trilha de navegação",
		className: "flex items-center gap-1.5 text-sm text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "inline-flex items-center gap-1 hover:text-foreground transition-colors",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Início" })]
		}), items.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 shrink-0 opacity-60" }), c.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: c.to,
			className: "hover:text-foreground transition-colors truncate",
			children: c.label
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-foreground font-medium truncate",
			children: c.label
		})] }, i))]
	});
}
//#endregion
export { Breadcrumbs as t };
