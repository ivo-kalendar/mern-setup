import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouterProvider, createStaticRouter, createStaticHandler } from "react-router-dom";
import Routes from "../routes/Rroutes";

export async function render(url, ssrManifest, req, res) {
    const head =
        renderToString();
        // Render Dynamic Head Elements

    // console.log("urL: ", url, ssrManifest)
    const { query, dataRoutes } = createStaticHandler(Routes);

    const fetchRequest = createFetchRequest(req, res);
    const context = await query(fetchRequest);

    if (context instanceof Response) {
        throw context;
    }
    const router = createStaticRouter(Routes, context);
    // console.log("Router created successfully");

    const html = renderToString(
        <StrictMode>
            <StaticRouterProvider router={router} context={context} />
        </StrictMode>,
    );
    return { html, head };
}

function createFetchRequest(req, res) {
    let origin = `${req.protocol}://${req.get("host")}`;
    // Note: This had to take originalUrl into account for presumably vite's proxying
    let url = new URL(req.originalUrl || req.url, origin);

    let controller = new AbortController();
    res.on("close", () => controller.abort());

    let headers = new Headers();

    for (let [key, values] of Object.entries(req.headers)) {
        if (values) {
            if (Array.isArray(values)) {
                for (let value of values) {
                    headers.append(key, value);
                }
            } else {
                headers.set(key, values);
            }
        }
    }

    let init = {
        method: req.method,
        headers,
        signal: controller.signal,
    };

    if (req.method !== "GET" && req.method !== "HEAD") {
        init.body = req.body;
    }

    return new Request(url.href, init);
}
