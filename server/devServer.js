import fs from 'node:fs/promises'
const base = process.env.BASE || '/'

/** @param {import('express').Express} app */
export default async function createDevServer(app) {
    const { createServer } = await import('vite')
    const vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        base,
        // root: './'
    })
    app.use(vite.middlewares)

    app.use('*', async (req, res) => {
        try {
            const url = req.originalUrl//.replace(base, '')

            const served_html = await fs.readFile('./index.html', 'utf-8')
            const template = await vite.transformIndexHtml(url, served_html)
            const render = (await vite.ssrLoadModule('/client/entry/entry-server.jsx')).render
            const rendered = await render(url)

            const html = template
                .replace(`<!--app-head-->`, rendered.head ?? '')
                .replace(`<!--app-html-->`, rendered.html ?? '')

            res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
        } catch (e) {
            vite?.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    })
}