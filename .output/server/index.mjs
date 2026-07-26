globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4ae9-DBvAQAgrOgKseIqx90M9BhIO2g8\"",
		"mtime": "2026-07-26T01:44:44.952Z",
		"size": 19177,
		"path": "../public/favicon.ico"
	},
	"/materiais/README.md": {
		"type": "text/markdown; charset=utf-8",
		"etag": "\"266-zhAOrJviBWyBwLmiBvqPM0P1/Kg\"",
		"mtime": "2026-07-25T21:06:26.225Z",
		"size": 614,
		"path": "../public/materiais/README.md"
	},
	"/assets/breadcrumbs-DuzOhh5y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43e-NIXs5S9TsmsoAhNuWQ/iTOrPWFE\"",
		"mtime": "2026-07-26T07:37:47.876Z",
		"size": 1086,
		"path": "../public/assets/breadcrumbs-DuzOhh5y.js"
	},
	"/assets/d._slug._lista.index-BX35daiw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"796-i9g+JUnSbW9vWycm5SL1ilU/ak8\"",
		"mtime": "2026-07-26T07:37:47.880Z",
		"size": 1942,
		"path": "../public/assets/d._slug._lista.index-BX35daiw.js"
	},
	"/assets/d._slug.index-BatPrFXs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"73b-t546mIKHc4C2rZ59KgDT/9+Nd+w\"",
		"mtime": "2026-07-26T07:37:47.882Z",
		"size": 1851,
		"path": "../public/assets/d._slug.index-BatPrFXs.js"
	},
	"/assets/d._slug._lista._exercicio-C1vDka_r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14aa-RDdYKtaVUWA8qmCmOgIi/tvML7M\"",
		"mtime": "2026-07-26T07:37:47.879Z",
		"size": 5290,
		"path": "../public/assets/d._slug._lista._exercicio-C1vDka_r.js"
	},
	"/assets/config-Bm9EdcDD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a91c-zi1cAN7k0+BgjnufvKhqUq/XcCg\"",
		"mtime": "2026-07-26T07:37:47.877Z",
		"size": 43292,
		"path": "../public/assets/config-Bm9EdcDD.js"
	},
	"/assets/page-shell-CMSaexmD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c85-AGGk5tuD+G2JaMcdhZ2nb9O+9DY\"",
		"mtime": "2026-07-26T07:37:47.883Z",
		"size": 3205,
		"path": "../public/assets/page-shell-CMSaexmD.js"
	},
	"/assets/routes-DGt0jTGs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87ea-IDXxOt1cXv+1COAxta02JAMUHgE\"",
		"mtime": "2026-07-26T07:37:47.884Z",
		"size": 34794,
		"path": "../public/assets/routes-DGt0jTGs.js"
	},
	"/assets/styles-BIS1dc7U.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13a2f-KGaGZCF3n2MyRD3OXi11rzQZaKI\"",
		"mtime": "2026-07-26T07:37:47.885Z",
		"size": 80431,
		"path": "../public/assets/styles-BIS1dc7U.css"
	},
	"/assets/index-CJmivyQh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c0ff-diAaPgj5qK4SU47SHOqQ3/bZUzg\"",
		"mtime": "2026-07-26T07:37:47.874Z",
		"size": 311551,
		"path": "../public/assets/index-CJmivyQh.js"
	},
	"/materiais/d3/Listas 7 8 e 9 são provas.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"4d-R53zvAV8ii00sFJGoXn+8CujaOk\"",
		"mtime": "2026-07-26T01:03:13.599Z",
		"size": 77,
		"path": "../public/materiais/d3/Listas 7 8 e 9 são provas.txt"
	},
	"/materiais/d2/lista06.pdf": {
		"type": "application/pdf",
		"etag": "\"26514e-FP0EZnSPDZxBg6eRg2fsnwSTEQU\"",
		"mtime": "2025-11-06T18:19:46.579Z",
		"size": 2511182,
		"path": "../public/materiais/d2/lista06.pdf"
	},
	"/materiais/d2/lista07.pdf": {
		"type": "application/pdf",
		"etag": "\"25b5cd-S5aixQnTzYb5AKklfxrcl6kXJ5A\"",
		"mtime": "2025-11-06T18:20:34.102Z",
		"size": 2471373,
		"path": "../public/materiais/d2/lista07.pdf"
	},
	"/materiais/d1/lista04.pdf": {
		"type": "application/pdf",
		"etag": "\"267e55-ILcNU7/rNY07SUWlPu6/PZ98e6s\"",
		"mtime": "2026-04-26T02:27:22.947Z",
		"size": 2522709,
		"path": "../public/materiais/d1/lista04.pdf"
	},
	"/materiais/d2/lista08.pdf": {
		"type": "application/pdf",
		"etag": "\"234eac-4ipSbp/PJwPf9W74pIifezJwkU0\"",
		"mtime": "2025-11-13T04:39:04.126Z",
		"size": 2313900,
		"path": "../public/materiais/d2/lista08.pdf"
	},
	"/materiais/d1/lista02.pdf": {
		"type": "application/pdf",
		"etag": "\"262f4c-0ebjM/8/Z8QV8Kr++dVza02Ximw\"",
		"mtime": "2026-04-11T22:50:13.211Z",
		"size": 2502476,
		"path": "../public/materiais/d1/lista02.pdf"
	},
	"/materiais/d2/lista05.pdf": {
		"type": "application/pdf",
		"etag": "\"2a5261-CjbWCpXl+C+ZnCCmMTgwM9/iwWM\"",
		"mtime": "2025-10-01T03:48:44.255Z",
		"size": 2773601,
		"path": "../public/materiais/d2/lista05.pdf"
	},
	"/materiais/d3/lista07.pdf": {
		"type": "application/pdf",
		"etag": "\"146856-UF+olROJOSja9otetHetXtbAu2k\"",
		"mtime": "2026-03-21T16:21:45.000Z",
		"size": 1337430,
		"path": "../public/materiais/d3/lista07.pdf"
	},
	"/materiais/d1/lista03.pdf": {
		"type": "application/pdf",
		"etag": "\"201f1f-U+QwDrmRgKKv/V3twNGENWs6FI0\"",
		"mtime": "2026-04-12T05:25:32.970Z",
		"size": 2105119,
		"path": "../public/materiais/d1/lista03.pdf"
	},
	"/materiais/d3/lista08.pdf": {
		"type": "application/pdf",
		"etag": "\"16fdfe-SsHX8dbldAJ5Awn7knCyJX14bCE\"",
		"mtime": "2026-03-21T21:11:35.000Z",
		"size": 1506814,
		"path": "../public/materiais/d3/lista08.pdf"
	},
	"/materiais/d1/lista06.pdf": {
		"type": "application/pdf",
		"etag": "\"2f61e8-+MXh5pG2/L+bvdeYTvQdRDNf4ls\"",
		"mtime": "2026-07-06T03:20:35.800Z",
		"size": 3105256,
		"path": "../public/materiais/d1/lista06.pdf"
	},
	"/materiais/d1/lista05.pdf": {
		"type": "application/pdf",
		"etag": "\"3348d1-g2qeha9eJ2N7BTgSB+ygMfxqMrM\"",
		"mtime": "2026-05-02T22:53:55.007Z",
		"size": 3360977,
		"path": "../public/materiais/d1/lista05.pdf"
	},
	"/materiais/d2/lista04.pdf": {
		"type": "application/pdf",
		"etag": "\"36882c-+LXcUyCPb/WEbOt8Ur4mIe6elBM\"",
		"mtime": "2025-09-30T14:26:55.512Z",
		"size": 3573804,
		"path": "../public/materiais/d2/lista04.pdf"
	},
	"/materiais/d1/lista01.pdf": {
		"type": "application/pdf",
		"etag": "\"3a66a6-POGU1fO2Q46mWS2OpTfT8yXTwdc\"",
		"mtime": "2026-04-06T02:09:27.530Z",
		"size": 3827366,
		"path": "../public/materiais/d1/lista01.pdf"
	},
	"/materiais/d2/lista03.pdf": {
		"type": "application/pdf",
		"etag": "\"4b0ca2-w5L6qNRAh1qbT0wDjBwqI0bl2lU\"",
		"mtime": "2025-09-05T02:11:05.456Z",
		"size": 4918434,
		"path": "../public/materiais/d2/lista03.pdf"
	},
	"/materiais/d3/lista01.pdf": {
		"type": "application/pdf",
		"etag": "\"3c9579-KzqhaxaPHQiPqsf31PJBzAePfoc\"",
		"mtime": "2026-03-13T01:35:41.000Z",
		"size": 3970425,
		"path": "../public/materiais/d3/lista01.pdf"
	},
	"/materiais/d3/lista09.pdf": {
		"type": "application/pdf",
		"etag": "\"433fb9-HZEm0Xu/NZGtod87KoXK7J3AcIo\"",
		"mtime": "2026-04-24T11:17:52.253Z",
		"size": 4407225,
		"path": "../public/materiais/d3/lista09.pdf"
	},
	"/materiais/d2/lista02.pdf": {
		"type": "application/pdf",
		"etag": "\"60152b-eHGiOVcjPtofLgzd/gL2dW1hWko\"",
		"mtime": "2025-09-04T19:22:21.603Z",
		"size": 6296875,
		"path": "../public/materiais/d2/lista02.pdf"
	},
	"/materiais/d3/lista02.pdf": {
		"type": "application/pdf",
		"etag": "\"683f8c-xFAxxPi1oypk9mI54gMpep1q1dc\"",
		"mtime": "2026-03-21T22:21:20.000Z",
		"size": 6832012,
		"path": "../public/materiais/d3/lista02.pdf"
	},
	"/materiais/d3/lista04.pdf": {
		"type": "application/pdf",
		"etag": "\"8b4d31-kWIMUyX7cRlhZjEyOg5aHd8itk4\"",
		"mtime": "2026-05-17T15:58:49.369Z",
		"size": 9129265,
		"path": "../public/materiais/d3/lista04.pdf"
	},
	"/materiais/d2/lista01.pdf": {
		"type": "application/pdf",
		"etag": "\"affe96-2BAypiRFeUx5f4cxpRQybQgKvGY\"",
		"mtime": "2025-09-04T12:43:18.935Z",
		"size": 11533974,
		"path": "../public/materiais/d2/lista01.pdf"
	},
	"/materiais/d3/lista03.pdf": {
		"type": "application/pdf",
		"etag": "\"9d3bd2-Wh0eMJax05pzmJ9uNJbi6D6nrDU\"",
		"mtime": "2026-04-20T04:24:00.636Z",
		"size": 10304466,
		"path": "../public/materiais/d3/lista03.pdf"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_H9AFX9 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_H9AFX9
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
