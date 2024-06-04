import fs from 'node:fs/promises'
const BASE = process.env.BASE || '/'

/** @param {import('express').Express} app */
export default async function createProdServer(app) {    
    const templateHtml = await fs.readFile('./dist/client/index.html', 'utf-8')
    const ssrManifest = await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
    
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    
    app.use(compression())
    app.use(BASE, sirv('./dist/client', { extensions: [] }))
    
    app.use('*', async (req, res) => {
        try {
            const url = req.originalUrl.replace(BASE, '')
            const template = templateHtml
            const render = (await import('../dist/server/entry-server.js')).render

            const rendered = render(url, ssrManifest)

            const html = template
                .replace(`<!--app-head-->`, rendered.head ?? '')
                .replace(`<!--app-html-->`, rendered.html ?? '')

            res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
        } catch (e) {
            res.status(500).end(e.stack)
        }
    })
}